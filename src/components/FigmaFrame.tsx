export default function FigmaFrame() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
      }}
    >
      <iframe
        style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          width: '100%',
          height: '100%',
        }}
        src="https://embed.figma.com/board/zDiHjqwdQcd4VO4nS0VWvv/Rekayasa-Perangkat-Lunak?node-id=0-1&embed-host=share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
