import React, { useState, useEffect } from 'react'
import MCQ from './MCQ';
import SideMap from './SideMap';

const Questions = () => {
    const [viewSideMap, setviewSideMap] = useState(true)
    const [questionList, setquestionList] = useState([])

    // this is for getting data into the array of questions with their status
    const filldata = () => {
        for (let index = 1; index <= 50; index++) {
            const obj = {
                val: index,
                status: false
            }
            setquestionList(current => [...current, obj]);
        }
    }
    // for rendering the sitemap at once
    useEffect(() => {
        if (questionList.length == 0)
            filldata();
    }, [])

    // After visiting the question this will update the list of questions status
    const checking = (i) => {
        const obj = {
            val: i + 1,
            status: true
        }
        console.log(questionList.splice(i, 1, obj));

        setquestionList([...questionList]);
    }


    return (
        <div className='flex justify-between'>
            
            <div className={viewSideMap ? `w-7/12 space-y-[5vh]` : `space-y-[5vh] overflow-hidden`}>
                {/* Upper Tags in Questions */}
                <div className='flex space-x-3'>
                    <h1 className='Tags bg-violet-300'>Math</h1>
                    <h1 className='Tags bg-blue-300'>Full Test</h1>
                    <h1 className='Tags bg-green-300 cursor-pointer' onClick={() => setviewSideMap(!viewSideMap)}>Visibility</h1>
                </div>

                {/* Actul ACQ's */}
                <MCQ />

                {/* Buttons */}
                <div className='flex justify-between mx-10'>
                    <button className='Home_option_data_menu'>Prev</button>
                    <button className='Home_option_data_menu'>Next</button>
                </div>
            </div>

            {/* View of SideMap */}
            <div className='flex w-4/12 justify-center'>
                {
                    viewSideMap ? <SideMap questionList={questionList} checking={checking} /> : null
                }

            </div>

        </div>
    )
}

export default Questions