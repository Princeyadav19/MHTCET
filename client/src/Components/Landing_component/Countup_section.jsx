import React from 'react'
import Fade from 'react-reveal/Fade';
import { useCountUp, CountUp } from 'use-count-up'

const Countup_section = () => {
    const onComplete = () => {
        return { shouldRepeat: true, delay: 2 }
    }

    return (
        <Fade right>
            <div className='flex justify-center'>
                <div className='w-9/12 flex flex-row justify-between'>
                    <div className='counter_style'>
                        <h1><CountUp isCounting end={1000} duration={6.2} onComplete={onComplete} />+</h1>
                        <h1>Questions</h1>
                    </div>
                    <div className='counter_style'>
                        <h1><CountUp isCounting end={500} duration={6.2} onComplete={onComplete} />+</h1>
                        <h1>Students</h1>
                    </div>
                    <div className='counter_style'>
                        <h1><CountUp isCounting end={50} duration={6.2} onComplete={onComplete} />+</h1>
                        <h1>Mock Test</h1>
                    </div>
                </div>

            </div>
        </Fade>
    )
}

export default Countup_section