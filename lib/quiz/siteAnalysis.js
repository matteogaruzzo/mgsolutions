import dns from 'node:dns/promises';

const FETCH_TIMEOUT_MS = 4000;

// Blocca IP privati/interni e loopback prima del fetch: l'URL arriva da un
// utente anonimo, quindi il server non deve mai poter essere usato per
// raggiungere risorse interne (SSRF) — inclusi gli endpoint di metadata
// cloud (169.254.169.254) usati per rubare credenziali su AWS/GCP/Azure.
function isPrivateIp(ip) {
  if (ip.includes(':')) {
    // IPv6: blocca loopback (::1) e link-local/ULA (fc00::/7, fe80::/10).
    const normalized = ip.toLowerCase();
    return normalized === '::1' || normalized.startsWith('fc') || normalized.startsWith('fd') || normalized.startsWith('fe80');
  }
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some((p) => Number.isNaN(p))) return true; // formato inatteso: blocca per prudenza
  const [a, b] = parts;
  if (a === 127) return true; // loopback
  if (a === 10) return true; // privato classe A
  if (a === 172 && b >= 16 && b <= 31) return true; // privato classe B
  if (a === 192 && b === 168) return true; // privato classe C
  if (a === 169 && b === 254) return true; // link-local, incluso metadata cloud
  if (a === 0) return true;
  return false;
}

async function assertPublicHost(hostname) {
  if (hostname === 'localhost') throw new Error('host non consentito');
  const records = await dns.lookup(hostname, { all: true });
  if (records.length === 0) throw new Error('host non risolvibile');
  if (records.some((r) => isPrivateIp(r.address))) {
    throw new Error('host non consentito');
  }
}

function detectPlatform(html) {
  const lower = html.toLowerCase();
  if (lower.includes('wp-content') || lower.includes('wp-includes')) return 'WordPress';
  if (lower.includes('cdn.shopify.com') || lower.includes('shopify.theme')) return 'Shopify';
  if (lower.includes('wixstatic.com') || lower.includes('wix.com')) return 'Wix';
  if (lower.includes('squarespace')) return 'Squarespace';
  return null;
}

function extractTag(html, regex) {
  const match = html.match(regex);
  return match ? match[1].trim().slice(0, 200) : null;
}

// Analisi leggera: solo fetch + string matching, nessun browser headless,
// nessuna interpretazione AI. Segnali indicativi, non certezze — il testo
// che li usa resta sempre nella forma "sembra", mai "è".
export async function analyzeSite(rawUrl) {
  let url;
  try {
    url = new URL(/^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') throw new Error('protocollo non valido');
  } catch {
    return { success: false, reason: 'invalid_url' };
  }

  try {
    await assertPublicHost(url.hostname);
  } catch {
    return { success: false, reason: 'host_non_consentito' };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url.toString(), {
      signal: controller.signal,
      redirect: 'follow',
      headers: { 'User-Agent': 'MGSolutionsQuizBot/1.0 (+https://mgsolutions.it)' },
    });

    if (!response.ok) {
      return { success: false, reason: `http_${response.status}` };
    }

    const html = (await response.text()).slice(0, 300_000); // limite di sicurezza sulla dimensione

    const title = extractTag(html, /<title[^>]*>([^<]*)<\/title>/i);
    const description = extractTag(
      html,
      /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i
    );
    const lower = html.toLowerCase();

    return {
      success: true,
      url: url.toString(),
      platform: detectPlatform(html),
      title,
      description,
      hasEcommerce:
        lower.includes('aggiungi al carrello') ||
        lower.includes('add to cart') ||
        lower.includes('/checkout') ||
        lower.includes('woocommerce'),
      hasBooking:
        lower.includes('prenota') ||
        lower.includes('booking.com') ||
        lower.includes('calendly') ||
        lower.includes('reservation'),
    };
  } catch (err) {
    return { success: false, reason: err.name === 'AbortError' ? 'timeout' : 'network_error' };
  } finally {
    clearTimeout(timeout);
  }
}
