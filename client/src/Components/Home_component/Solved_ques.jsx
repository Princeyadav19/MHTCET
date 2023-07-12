import { useState, CSSProperties } from 'react'
import BarLoader from "react-spinners/BarLoader";
import ProgressBars from './ProgressBars';


const Solved_ques = () => {

    const datasub = [
        {
            sub: "Math",
            solved: 29,
            color:"#b6459e"
        },
        {
            sub: "Physics",
            solved: 75,
            color:"#b6459e"
        },
        {
            sub: "Chemistry",
            solved: 73,
            color:"#b6459e"
        },
        {
            sub: "Biology",
            solved: 10,
            color:"#b6459e"
        },
    ]
    return (
        <div>
            <div className='flex justify-around items-center rounded-lg shadow-xl p-3 bg-[#f2f0f3]'>
                <div className='w-7/12'>
                    {
                        datasub.map((item,id) => (
                            <div key={id} className='my-1'>
                                <h1 className='text-sm'>{item.sub}</h1>
                                <ProgressBars bgcolor={item.color} progress={item.solved} />
                            </div>
                        ))
                    }
                </div>
                <div className='w-5/12 flex justify-center'>
                    <div className='bg-[#4550b6] p-5 text-white rounded-full'>
                        <h1 className='font-bold text-center'>100</h1>
                        <h1>Solved</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solved_ques