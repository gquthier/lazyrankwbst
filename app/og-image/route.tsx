import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          position: 'relative',
        }}
      >
        {/* Background gradients */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '150px',
            right: '100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '100px',
            left: '300px',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 10,
            padding: '80px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              borderRadius: '50px',
              background: 'rgba(243, 244, 246, 0.9)',
              border: '1px solid rgba(229, 231, 235, 1)',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#22c55e',
              }}
            />
            <span
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#4b5563',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              YOLO Mode Activé
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginBottom: '32px',
            }}
          >
            <h1
              style={{
                fontSize: '80px',
                fontWeight: 800,
                color: '#111827',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Votre contenu SEO,
            </h1>
            <h1
              style={{
                fontSize: '80px',
                fontWeight: 800,
                background: 'linear-gradient(to right, #111827, #4b5563)',
                backgroundClip: 'text',
                color: 'transparent',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              en pilote automatique.
            </h1>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '32px',
              color: '#6b7280',
              margin: 0,
              maxWidth: '900px',
              lineHeight: 1.5,
            }}
          >
            Notre IA analyse, génère et publie des articles qui rankent. Sans intervention humaine.
          </p>

          {/* Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '60px',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#000',
                letterSpacing: '-0.02em',
              }}
            >
              LAZYRANK
            </span>
            <span
              style={{
                fontSize: '28px',
                color: '#9ca3af',
              }}
            >
              .io
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
