'use client'
import React from 'react'
import Navbar from '../navbar/page'
import MyFooter from '../myfooter/page'
import Image from 'next/image'
import Resume from '@/rbresume.png'
import Loader from '../comp/loader'

const ResumePage = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <h2 className="text-3xl font-extrabold text-blue-500 flex items-center justify-center gap-4 mt-6">
        <span className="text-orange-500 text-3xl">{'{'}</span>
        My Resume
        <span className="text-orange-500 text-3xl">{'}'}</span>
          </h2>

        <p className='text-center'>Here you can find my work experience and skills.</p>
        <div className='flex justify-center'>
        <Image src={Resume} alt="Resume" className=" mt-4 w-1/2 shadow-lg shadow-blue-400" />
        </div>
        <br />
        <div className="flex justify-center">
          <button className='px-8 py-3  rounded-full cursor-pointer bg-blue-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition' onClick={() => window.open('/rbresume.pdf', '_blank')}>
            Download Resume
          </button>
        </div>
        <MyFooter />
    </div>
  )
}

export default ResumePage