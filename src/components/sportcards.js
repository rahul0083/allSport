import React from 'react'

const Sportcards = ({imageUrl}) => {
  return (
    <div className="position-relative">
    {/* Background image */}
    <img
      src="./sportcards.svg"
      className="img-fluid"
      alt="Background"
    />
    {/* Centered image */}
    <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: '1' }}>
      <img
        src={imageUrl}
        className="img-fluid"
        alt="Centered Image"
      />
    </div>
  </div>
  )
}

export default Sportcards
