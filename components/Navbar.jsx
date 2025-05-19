import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
'use Ref'
const Navbar = () => {

    const [isScroll , setIsScroll] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sideMenuRef = useRef() ;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
      <nav className={`w-full fixed px-5 lg:px-8  xl:px-[8%] py-4 flex  items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`} >
        
        <a href="#top">
            <Image src={assets.logo}  alt="logo" className="w-40 pt-3 cursor-pointer " />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} lg:-ml-40`}>
            <li><a className='font-Ovo hover:text-blue-500 transition-colors duration-300' href="#top">Home</a></li>
            <li><a className='font-Ovo hover:text-blue-500 transition-colors duration-300' href="#about">About</a></li>
            <li><a className='font-Ovo hover:text-blue-500 transition-colors duration-300' href="#services">Skills</a></li>
            <li><a className='font-Ovo hover:text-blue-500 transition-colors duration-300' href="#work">Projects</a></li>
            <li><a className='font-Ovo hover:text-blue-500 transition-colors duration-300' href="#contact">Contact me</a></li>
        </ul>

        <div  className='flex items-center gap-4'>

            <button>
                {/* <Image src={assets.moon_icon} alt='themeicon' className='w-6' /> */}
            </button>

             {/* <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 font-Ovo'> Contact <Image src={assets.arrow_icon} alt="arrowicon" className='w-3' /> </a> */}

             <button className='block md:hidden ml-3' onClick={toggleMobileMenu}>
            <Image src={assets.menu_black} alt='menu' className='w-6'/>
            </button>

        </div>

        {/* -------------- mobile menu --------------- */}

        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-4 px-10 absolute top-full left-0 w-full transition-all duration-300 ease-in-out overflow-hidden items-center ${isMobileMenuOpen ? 'max-h-screen visible' : 'max-h-0 invisible'} ${isMobileMenuOpen ? (isScroll ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-sm" : "bg-customBlue") : ""}`}>
            <li><a className='font-Ovo' onClick={toggleMobileMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo 'onClick={toggleMobileMenu} href="#about">About</a></li>
            <li><a className='font-Ovo' onClick={toggleMobileMenu} href="#services">Skills</a></li>
            <li><a className='font-Ovo' onClick={toggleMobileMenu} href="#work">Projects</a></li>
            <li><a className='font-Ovo' onClick={toggleMobileMenu} href="#contact">Contact me</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
