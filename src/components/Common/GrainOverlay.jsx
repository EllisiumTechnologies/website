import grainTexture from '../../assets/grain.webp'

const GrainOverlay = () => {
  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-9999'
      style={{
        backgroundImage: `url(${grainTexture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '130px 130px',
        opacity: 1,
      }}
    />
  )
}

export default GrainOverlay
