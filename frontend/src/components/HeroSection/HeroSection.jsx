import React from 'react'
import HeroImg from '../../assets/img/banner.jpg'

const HeroSection = () => {
  return (
<div
  className='relative flex items-center justify-start bg-cover bg-center text-left w-full'
  style={{ backgroundImage: `url(${HeroImg})`, height: '500px' }}  // chiều cao cố định 300px
>

      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      <main className='relative z-10 px-6 sm:px-12 lg:px-24 max-w-4xl'>
        <h1 className='text-white text-5xl sm:text-6xl font-extrabold leading-tight'>
          Welcome to TP Store
        </h1>

        <p className='mt-6 text-white text-xl sm:text-2xl max-w-xl'>
          Your ultimate destination for trendy, affordable, and comfortable clothing.  
          Explore our latest collections and enjoy exclusive deals, fast shipping, and excellent customer service.
        </p>

        <button className='mt-8 bg-white text-black font-semibold py-3 px-8 rounded-md shadow-md hover:bg-gray-200 transition'>
          Shop Now
        </button>
      </main>
    </div>
  )
}

export default HeroSection
