import { ImageResponse } from 'next/og';

export const alt = 'PAC Africa | Activating Your Potential';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1D1D1D',
          backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(235,87,51,0.25), transparent 60%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontSize: 96, fontWeight: 700, color: '#ffffff', letterSpacing: -2 }}>PAC</span>
          <span style={{ fontSize: 96, fontWeight: 700, color: '#EB5733', letterSpacing: -2 }}>Africa</span>
        </div>
        <div style={{ marginTop: 24, fontSize: 36, color: '#FFC39A', display: 'flex' }}>
          Activating Your Potential
        </div>
      </div>
    ),
    { ...size }
  );
}
