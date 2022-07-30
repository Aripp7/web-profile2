import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
            <form method='POST' action="https://getform.io/f/1716dd07-3090-4fc4-b055-cb8d8fe791ce" className='flex flex-col max-w-[600px] w-full mt-10' data-aos="fade-up" data-aos-duration="1000">
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - myemail@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2 rounded-md focus:ring-1' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6] rounded-md focus:ring-1' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2 rounded-md focus:ring-1' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 rounded-md focus:ring-1 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>

        </div>
    )
}
AOS.init();
export default Contact