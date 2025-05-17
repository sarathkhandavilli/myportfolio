import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className=' w-full px-[12%] py-10 scroll-mt-20' >
        <h2 className='text-center text-5xl font-Ovo' >My Skills</h2>

        <p className='text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo'>
        I specialize in building seamless, user-centric web applications and digital experiences. With expertise in both frontend and backend development, as well as UI/UX design, I provide end-to-end solutions to bring your ideas to life.
        </p>
        <div className='-mt-8'>
            <div className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map( ({icon , title , description , link} , index) => (
                    <div key={index} className='border border-gray-400 rounded-lg px-4 py-6 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 cursor-pointer'>
                        <Image src={icon} alt='' className='w-10'/>
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-lg my-4 text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image src={assets.right_arrow} alt='arrow' className='w-4'/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services