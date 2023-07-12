import React from 'react'

const Review = () => {
    
    const data = [
        {
            name: "Harsh",
            content: "ipsum dolor sit amet consectetur adipisicing elit. Quod, natus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Quod, natus? Lorem ipsum dolor sit, amet consectetur adipisicing eli Minima, consequatur."
        },
        {
            name: "Ravinarayan",
            content: "ipsum dolor sit amet consectetur adipisicing elit. Quod, natus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Quod, natus? Lorem ipsum dolor sit, amet consectetur adipisicing eli Minima, consequatur."
        }, {
            name: "Suresh",
            content: "ipsum dolor sit amet consectetur adipisicing elit. Quod, natus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Quod, natus? Lorem ipsum dolor sit, amet consectetur adipisicing eli Minima, consequatur."
        },


    ]
    return (
        <div className='flex flex-col items-start my-10'>
            <div className='font-semibold italic text-4xl'>
                <h1>Our Reviews...</h1>
            </div>
            {/* Cards */}
            <div className='flex flex-row flex-nowrap mt-4'>
                {
                    data.map((item, index) => (
                        <div key={index} className='hover:scale-110 duration-500 border-2 p-3 m-3 rounded-xl border-lime-500 w-4/12 flex items-center flex-col'>
                            <div>
                                <h1>{item.content}</h1>
                            </div>
                            <div className='flex items-center flex-col'>
                                <h1 className='font-bold'>{item.name},</h1>
                                <h1>MHTCET Asparint</h1>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Review