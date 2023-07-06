import React from 'react'
import Logo from '../assets/Main_Logo.png';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
    return (
        <div >
            <div className='flex items-center shadow-xl py-3'>
                <div className='mx-[10vw] w-full flex justify-between items-center'>
                    <div>
                        <img src={Logo} className='h-[4rem]' alt="" />
                    </div>
                    <div className='flex w-6/12 text-white rounded-full justify-around bg-[#4550B6]'>
                        <div  className='selected_menu_item'>
                            <a href="#">Home</a>
                        </div>
                        <div  className='menu_item '>
                            <a href="#">Paper</a>
                        </div>
                        <div  className='menu_item '>
                            <a href="#">Test</a>
                        </div>
                        <div  className='menu_item '>
                            <a href="#">Notes</a>
                        </div>
                        
                    </div>
                    <div>
                        <FaUserCircle size={'4rem'} color='#862ACF' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header