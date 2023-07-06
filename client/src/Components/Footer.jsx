import React from 'react'
import Logo from '../assets/Main_Logo.png';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';


const Footer = () => {

    return (
        <div className='' style={{"boxShadow": "0px -1px 4px rgba(0, 0, 0, 25%)"}}>
            <div className='flex justify-between mx-[10vw] items-center '>
                <div className='flex flex-row space-x-10'>
                    <AiOutlineTwitter size={"35px"} color='#168FE6' />
                    <AiFillInstagram size={"35px"} />
                    <AiFillLinkedin size={"35px"} color='#0084A1' />
                    <BsDiscord size={"35px"} color='#5E0FAD' />
                </div>
                <div className='flex flex-col items-center'>
                    <div>
                        <img src={Logo} className='h-[4rem]' alt="" />
                    </div>
                    <div className='flex items-center flex-col'>
                        <h1>mockcetontact@gmail.com</h1>
                        <h1>+22 2677393</h1>
                        <h1>Hanuman Nagar, Kandivali east</h1>
                        <h1> Mumbai 400101</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-1 bg-[#4550B6] text-white '>
                <h1 className='text-md'>
                    © MockCet All rights reserved
                </h1>
            </div>
        </div>
    )
}

export default Footer