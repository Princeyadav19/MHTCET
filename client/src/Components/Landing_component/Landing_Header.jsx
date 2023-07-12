import React from 'react'
import Logo from '../../assets/Main_Logo.png';
import Fade from 'react-reveal/Fade';

const Landing_Header = () => {
    return (
        <div>
            <div >
                <div className='flex items-center shadow-xl py-3'>
                    <div className='mx-[10vw] w-full flex justify-between items-center'>
                        {/* Logo Section */}
                        <div className='flex items-center space-x-2'>
                            <Fade left>
                                <img src={Logo} className='h-[4rem]' alt="" />

                                <div>
                                    <h1 className='font-bold italic'>MockCet</h1>
                                    <hr className='bg-black' />
                                    <h1 className='text-sm italic'>Journy To Glory</h1>
                                </div>
                            </Fade>
                        </div>

                        {/* Login signup buttons */}
                        <Fade right>
                            <div className='w-4/12 flex justify-between'>
                                <div className='Landing_page_Button' style={{ "boxShadow": "0px 3px 4px rgba(0, 0, 0, 25%)" }}>
                                    <a className='' href="#">Login</a>
                                </div>
                                <div className='Landing_page_Button' style={{ "boxShadow": "0px 3px 4px rgba(0, 0, 0, 25%)" }}>
                                    <a className='' href="#">Sign up</a>
                                </div>
                            </div>
                        </Fade>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing_Header