import React, { useState,useEffect } from 'react'

const SideMap = ({questionList, checking}) => {
    
   
    return (
        <div>
            <div className='flex flex-wrap w-full justify-center items-center'>
                {
                    questionList.map((item, index) => (
                        <div key={index} onClick={()=>checking(index)}  className={item.status?`sideMap_Dot bg-[#2a56cf] text-white`:`sideMap_Dot text-black`}>
                            <h1>{item.val}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SideMap