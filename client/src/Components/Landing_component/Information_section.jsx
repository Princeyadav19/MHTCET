import React from 'react'
import Lottie from 'lottie-react';
import Education1 from '../../assets/99152-education-float.json';
import Education2 from '../../assets/31391-atomic-motion.json';
import Education3 from '../../assets/59439-teamwork-colabotation.json';

import Fade from 'react-reveal/Fade';

const Information_section = () => {
  return (
    <Fade left>
                <div className='flex flex-row w-full justify-between items-center'>
                    <div className='w-7/12'>
                        <h1>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sed tenetur nulla dolorem numquam. Ipsam accusantium nisi fuga praesentium suscipit, dolore at qui ipsa fugit sequi consequuntur quas, illum maxime possimus quis optio cumque id nam reiciendis non temporibus blanditiis. Modi quos vitae amet tempora? Magnam quia adipisci in asperiores, corrupti minus voluptatum. Quis sint eaque, quae saepe exercitationem quasi veniam id debitis aliquam doloremque iste ipsa, beatae illo ad.
                        </h1>
                    </div>
                    <div className='w-4/12'>
                        <Lottie animationData={Education1} />
                    </div>
                </div>

                <div className='flex flex-row w-full justify-between items-center'>
                    <div className='w-3/12'>
                        <Lottie animationData={Education2} />
                    </div>
                    <div className='w-7/12'>
                        <h1>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sed tenetur nulla dolorem numquam. Ipsam accusantium nisi fuga praesentium suscipit, dolore at qui ipsa fugit sequi consequuntur quas, illum maxime possimus quis optio cumque id nam reiciendis non temporibus blanditiis. Modi quos vitae amet tempora? Magnam quia adipisci in asperiores, corrupti minus voluptatum. Quis sint eaque, quae saepe exercitationem quasi veniam id debitis aliquam doloremque iste ipsa, beatae illo ad.
                        </h1>
                    </div>

                </div>

                <div className='flex flex-row w-full justify-between items-center'>
                    <div className='w-7/12'>
                        <h1>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sed tenetur nulla dolorem numquam. Ipsam accusantium nisi fuga praesentium suscipit, dolore at qui ipsa fugit sequi consequuntur quas, illum maxime possimus quis optio cumque id nam reiciendis non temporibus blanditiis. Modi quos vitae amet tempora? Magnam quia adipisci in asperiores, corrupti minus voluptatum. Quis sint eaque, quae saepe exercitationem quasi veniam id debitis aliquam doloremque iste ipsa, beatae illo ad.
                        </h1>
                    </div>
                    <div className='w-4/12'>
                        <Lottie animationData={Education3} />
                    </div>

                </div>
            </Fade>
  )
}

export default Information_section