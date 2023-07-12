import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { GrMail } from 'react-icons/Gr';

import Fade from 'react-reveal/Fade';

const Contact = () => {
    const data = [
        {
            phone: "9136359699"
        },
        {
            phone: "9004201042"
        },
        {
            phone: "9143566583"
        }
    ]
    return (
        <>
            <Fade bottom>
                <div className='flex'>
                    <div className='flex flex-col w-6/12'>
                        <div className='mb-6'>
                            <div className='text-3xl font-semibold italic'>
                                <h1>Contact us to To get More Detail about Mock-CET</h1>
                            </div>

                            <div className='flex flex-col mx-10 space-y-3 mt-5'>
                                {
                                    data.map((item, index) => (
                                        <div key={index} className='flex flex-row items-center space-x-3 text-xl font-semibold italic'>
                                            <BsFillTelephoneFill size={"35px"} color='white' className='bg-[#4550B6] rounded-md' style={{ "padding": "5px" }} />
                                            <h1>{item.phone}</h1>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <div className='text-3xl font-semibold italic'>
                                <h1>Enhance Your Capcity with Mock-CET</h1>
                            </div>
                            <div className='flex flex-col mx-10 space-y-3'>
                                <div className='flex flex-row items-center space-x-3 text-xl font-semibold italic'>
                                    <GrMail size={"35px"} color='white' className='bg-[#4550B6] rounded-md' style={{ "padding": "5px" }} />
                                    <h1>mockcetontact@gmail.com</h1>
                                </div>
                                <div className='flex flex-row items-center space-x-3 text-xl font-semibold italic'>
                                    <TbWorld size={"35px"} color='white' className='bg-[#4550B6] rounded-md' style={{ "padding": "5px" }} />
                                    <h1>www.MockCET.com</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-6/12 flex flex-col px-5 space-y-5'>
                        <h1 className='text-3xl text-center font-semibold italic'>Contact From</h1>
                        <form action="" className='flex flex-col ml-5 w-8/12 space-y-3'>
                            <div className='flex flex-col'>
                                <input type="text" className='p-2 text-xl outline-none border-b-2   duration-150 focus:border-b-2 focus:border-slate-800' placeholder='Name' />
                            </div>

                            <div className='flex flex-col '>
                                <input type="text" className='p-2 text-xl outline-none border-b-2   duration-150 focus:border-b-2 focus:border-slate-800' placeholder='Surname' />
                            </div>

                            <div className='flex flex-col '>
                                <input type="text" className='p-2 text-xl outline-none border-b-2   duration-150 focus:border-b-2 focus:border-slate-800' placeholder='Batch' />
                            </div>

                            <div className='flex flex-col '>
                                <input type="text" className='p-2 text-xl outline-none border-b-2   duration-150 focus:border-b-2 focus:border-slate-800' placeholder='Student No' />
                            </div>
                        </form>
                        <div className='flex justify-end'>
                            <button className='Landing_page_Button'>Submit</button>
                        </div>
                    </div>
                </div>
            </Fade>

        </>
    )
}

export default Contact