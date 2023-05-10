import React from 'react'

const TrustedBy = () => {
  return (
    <div className='bg-gray-100 p-5'>
<div className='max-w-[1200px] mx-auto flex items-center gap-6 text-gray-300 sm:text-lg text-xs lg:text-3xl font-bold justify-center'>
    <h3 className='flex-shrink-0'>Trusted By:</h3>
    <div className='flex items-center gap-4 flex-wrap'>
        <span  className='flex-shrink-0'>FACEBOOK</span>
        <span className='flex-shrink-0'>INSTAGRAM</span>
        <span className='flex-shrink-0'>NETFLIX</span>
        <i className='flex-shrink-0'>PAYPAL</i>
        <i className='flex-shrink-0'>P&G</i>
    </div>
</div>

    </div>
  )
}

export default TrustedBy