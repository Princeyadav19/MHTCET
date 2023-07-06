import React from 'react'
import Option_data from '../Components/Home_component/Option_data'
import Solved_ques from '../Components/Home_component/Solved_ques'

const Home = () => {
    return (
        <div className='h-[80vh]'>

            {/* Upper section */}
            <div className='w-full flex flex-row justify-between items-center'>
                <div className='w-6/12'>
                    <Option_data />
                </div>
                <div className='w-6/12'>
                    <Solved_ques />
                </div>
            </div>
            {/* End Upper Section */}


        </div>
    )
}

export default Home