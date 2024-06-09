import React from 'react'

const FAQCard = ({bgColor, textColor}) => {
  return (
    <div className={`p-4 mt-8 mb-8 ml-4 rounded text-left ${bgColor} ${textColor}`}>
      <h3 className="text-2xl font-bold">The best financial accounting app ever!</h3>
      <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
    </div>
  )
}

export default FAQCard
