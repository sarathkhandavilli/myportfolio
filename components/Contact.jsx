import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("") ;

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cb0a4ac0-4b56-4dc5-840b-70b4dfdff7e2");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <div id='contact' className='w-full px-[12%] py-10 mt-24 scroll-mt-20 bg-[url("/header-bg-color.jpg")] bg-no-repeat bg-center bg-[length:90%_auto]'>
        <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            If you have any questions or just want to say hi, I'd love to hear from you
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 -mt-10 mb-8'>
                <input type="text" placeholder='Enter your name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'  required/>
                <input type="email" placeholder='Enter your email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' required/>
            </div>
            <textarea rows='6' placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message' required></textarea>
            <button type='submit' className='py-2 mt-4 px-5 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit <Image src={assets.right_arrow_white} alt='submit' className='w-4' /></button>
            <p className='mt-4' >{result}</p>
        </form>
    </div>
  )
}

export default Contact