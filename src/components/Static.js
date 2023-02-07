import React from 'react';
import Image from 'next/image';
import './static.css'

const Static = () => {
  return (
    <>
      <div className='static-main-div '>

        <div className='static-sub-div'>
          <div className='line-div'>
            <div className='image-div'>
              <Image className='imgggee'
                src={"/crucified-pose.png"} width={114} height={50}
              />

            </div>

            <div className='text-div'>
              <h1 className='text-header'>Get that 11 line <br></br> in 30 days</h1>
              <div className='learn-div'>
                <p className='learn-tag'>Learn more </p>
                <span class="material-symbols-outlined  learn-tagg-span">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>



          <div className='line-div'>
            <div className='image-div'>
              <Image className='imgggee'
                src={"/dancer-balance-posture-on-one-leg.png"} width={114} height={50}
              />

            </div>

            <div className='text-div'>
              <h1 className='text-header'>14 Days <br></br>
              sherd challenge</h1>
              <div className='learn-div'>
                <p className='learn-tag'>Learn more </p>
                <span class="material-symbols-outlined  learn-tagg-span">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>


          <div className='line-div'>
            <div className='image-div'>
              <Image className='imgggee'
                src={"/dancer-motion.png"} width={114} height={50}
              />

            </div>

            <div className='text-div'>
              <h1 className='text-header'>Get flat belly <br></br>in 30 days</h1>
              <div className='learn-div'>
                <p className='learn-tag'>Learn more </p>
                <span class="material-symbols-outlined  learn-tagg-span">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
export default Static;
