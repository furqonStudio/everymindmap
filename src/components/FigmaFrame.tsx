type FigmaFrameProps = {
  src: string
}

const FigmaFrame: React.FC<FigmaFrameProps> = ({ src }) => {
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
        src={src}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default FigmaFrame
