import React from 'react'

const Option_data = () => {
    const datasub = [
        {
            sub: "Math",
            solved: 29,
            color: "#8F23C1"
        },
        {
            sub: "Physics",
            solved: 75,
            color: "#4550b6"
        },
        {
            sub: "Chemistry",
            solved: 73,
            color: "#b6459e"
        },
        {
            sub: "Biology",
            solved: 10,
            color: "#b64e45"
        },
    ]
    return (
        <div className='flex justify-between flex-wrap'>
            {
                datasub.map((item,index) => (
                    <div key={index} className='Home_option_data_menu ' style={{ "boxShadow": "0px 3px 4px rgba(0, 0, 0, 25%)" }}>
                        <a className='' href="#">{item.sub}</a>
                    </div>
                ))
            }
        </div>
    )
}

export default Option_data