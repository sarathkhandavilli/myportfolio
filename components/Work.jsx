import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    console.log(workData)
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center text-5xl font-Ovo'>Projects</h2>

        <div className='grid grid-cols-auto my-10 gap-5'>
            {workData.map((project, index) => (
                <div key={index} className='rounded-lg px-4 py-6 bg-white shadow-lg shadow-gray-300 cursor-pointer border-t border-gray-100 hover:shadow-gray-500 duration-500'>
                    <h3 className='text-lg my-4 text-gray-900 font-Outfit'>{project.title}</h3>
                    <p className='text-lg my-4 text-gray-600 leading-5 font-Outfit'>
                        {project.description}
                    </p>
                    <a href={project.link} target='_blank' className='flex items-center gap-2 text-sm mt-5'>
                        <Image src={assets.github} alt='github' className='w-20'/>
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work
