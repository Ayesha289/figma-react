import React from 'react'

const FeatureImage = ({ imageSrc }) => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="relative">
        <img src={imageSrc} alt="Feature" className="max-w-xs md:max-w-md lg:max-w-lg" />
      </div>
    </section>
  )
}

export default FeatureImage
