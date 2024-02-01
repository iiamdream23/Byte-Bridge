import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='p-6 bg-slate-300 rounded-t-2xl mx-auto'>
      <div className='flex items-center justify-between'>
      <div className='cursor-pointer'>
        footer
      </div>
      <div className='flex gap-5'>
      <div>
      <Image src='/imgs/twitter-logo.svg' alt='' 
        width={30}
        height={30}
        className='cursor-pointer' />
      </div>
      <div>
      <Image src='/imgs/youtube-logo.svg' alt='' 
        width={30}
        height={30}
        className='cursor-pointer' />
      </div>
      <div>
        <Image src='/imgs/FB-logo.svg' alt='' 
        width={30}
        height={30}
        className='cursor-pointer' />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer