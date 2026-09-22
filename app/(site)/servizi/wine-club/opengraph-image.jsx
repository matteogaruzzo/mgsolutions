import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Wine Club per cantine: revenue ricorrente e clienti fedeli — MG Solutions';
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
          Wine Club
        </div>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, marginTop: 18, lineHeight: 1.15, maxWidth: 950 }}>
          Fedeltà, comunità e revenue ricorrente
        </div>
        <div style={{ display: 'flex', fontSize: 26, marginTop: 22, color: 'rgba(255,255,255,0.82)', maxWidth: 850 }}>
          Trasformate i vostri clienti in ambassador della cantina
        </div>
      </div>
    ),
    { ...size }
  );
}
