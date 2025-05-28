import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'InstaSearch - Discover Beautiful Images Instantly'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 'bold', marginBottom: 20 }}>
          InstaSearch
        </div>
        <div style={{ fontSize: 30, textAlign: 'center', maxWidth: 800 }}>
          Discover Beautiful Images Instantly
        </div>
        <div style={{ fontSize: 20, marginTop: 20, opacity: 0.8 }}>
          Search and download stunning, royalty-free images from Unsplash
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
