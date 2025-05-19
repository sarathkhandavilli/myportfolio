import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
   <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
    <h2 className='text-center text-5xl font-Ovo' >About me</h2>

    <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-10 -mt-10'>
        <div className='mt-14 w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.profile_img} alt='user' className='w-full rounded-3xl '/>
        </div>
        <div className=' flex-1 mb-10 max-w-2xl font-Ovo mt'>
            <p className='lg:mt-20 -mt-10'>I am a passionate Computer Science Engineering student specializing in Java backend development.I have hands-on experience in developing RESTful APIs, working with relational databases like MySQL and Oracle .</p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap6 max-w-2xl mt-4'>
                {infoList.map(({icon , iconDark , title , description} , index)=>(
                    <li className='rounded-xl p-4 cursor-pointer bg-customBlue shadow-lg shadow-gray-300 m-3 border-t border-gray-100 hover:shadow-gray-500 duration-500' key={title}>
                        <Image src={icon} alt={title} className='w-7 mt-3' />
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm '>{description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
   </div>
  )
}

export default About
