import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Referral Program MG Solutions: guadagna €200 per ogni azienda che presenti';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '70px 90px',
          background: 'linear-gradient(135deg, #00713a 0%, #008b47 55%, #00c853 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, fontWeight: 700, letterSpacing: 4, opacity: 0.92 }}>
          MG SOLUTIONS
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#d9ffe9',
            marginTop: 34,
          }}
        >
          Referral Program
        </div>
        <div style={{ display: 'flex', fontSize: 172, fontWeight: 700, marginTop: 14, lineHeight: 1 }}>
          €200
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 42,
            fontWeight: 600,
            marginTop: 22,
            maxWidth: 900,
            lineHeight: 1.25,
          }}
        >
          per ogni cantina, oleificio o agriturismo che presenti
        </div>
        <div style={{ display: 'flex', fontSize: 24, marginTop: 18, color: 'rgba(255,255,255,0.82)' }}>
          Nessun limite. Bonifico entro 7 giorni.
        </div>
      </div>
    ),
    { ...size }
  );
}
