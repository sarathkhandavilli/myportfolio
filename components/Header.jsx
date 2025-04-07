import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Typed from 'typed.js' 

const Header = () => {

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Computer Science Student", "Frontend Developer" , "Backend Developer"], // Add more strings as needed
      typeSpeed: 100, // Speed at which the text is typed
      backSpeed: 100, // Speed at which the text is deleted
      backDelay: 1000, // Delay before starting to delete text
      startDelay: 500, // Delay before starting typing
      loop: true, // Make the animation loop
    };

    // Initialize Typed.js
    const typed = new Typed(typedElement.current, options);

    // Cleanup the typed.js instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4' >
      
      <div>
        <Image src={assets.profile_img} alt='sarath image' className='rounded-full w-32 '/>
      </div>

      <h3 className='flex items-end gap-2 text-xl  md:text-2xl mb-3 font-Ovo'>
        Hi there! I'm Sarath Chandra 
        <Image src={assets.hand_icon} alt='hand icon' className='w-6'/>
      </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        <span ref={typedElement}></span>
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        I am currently pursuing a B.Tech degree at Malla Reddy University with a strong passion for technology and a deep interest in computer science
      </p>  
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

        <a href="#contact" className='px-10 py-3 border-white rounded-full bg-black text-white  flex items-center gap-2'>contact me<Image src={assets.right_arrow_white} alt='sarath image' className='rounded-full w-4 '/> </a>

        <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.right_arrow_bold} alt='sarath image' className='rounded-full w-4'/> </a>

      </div>

    </div>
  )
}

export default Header