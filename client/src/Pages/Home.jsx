import React from 'react'
import Option_data from '../Components/Home_component/Option_data'
import Solved_ques from '../Components/Home_component/Solved_ques'
import Table_Ques from '../Components/Home_component/Ques_Table';

const Home = () => {
    return (
        <div className='space-y-10'>

            {/* Upper section */}
            <div className='w-full flex flex-row justify-between items-center'>
                <div className='w-6/12'>
                    <Option_data />
                </div>
                <div className='w-4/12'>
                    <Solved_ques />
                </div>
            </div>
            {/* End Upper Section */}

            
            {/* Table Section */}
            <div>
                <Table_Ques />
            </div>
            {/* End Table Section */}

        </div>
    )
}

export default Home