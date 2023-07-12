import React from 'react'


import Fade from 'react-reveal/Fade';
import Contact from '../Components/Landing_component/Contact';
import Countup_section from '../Components/Landing_component/Countup_section';
import Information_section from '../Components/Landing_component/Information_section';
import Review from '../Components/Landing_component/Review';


const Landing = () => {

    
    return (
        <div>
            {/* first section */}
            <Information_section />
            
            {/* Countup */}
            <Countup_section />

            {/* Reviews */}
            {
                /* <div className='border-2 border-red-700 flex flex-row w-full h-[45vh] overflow-x-auto whitespace-nowrap space-x-8 shadow-2xl px-4 scrollbar-thumb-[#030303] scrollbar-thin'>
                    {
                        data.map((item, index) => (
                            <div key={index} className='border-2 border-red-700 w-3/12 flex items-center flex-col'>
                                <h1>{item.content}</h1>
                                <h1 className='font-bold'>{item.name}</h1>
                            </div>
                        ))
                    }
                </div>*/
            }
            
            {/* Review Section */}
            <Review />

            {/* Contact Us */}
            <Contact />

        </div>
    )
}

export default Landing