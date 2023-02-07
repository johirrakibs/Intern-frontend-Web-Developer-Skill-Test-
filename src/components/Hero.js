import React from 'react';
import Image from 'next/image';



const Hero = () => {
  return (
    <>

      <div className='my-10 flex flex-col items-center justify-evenly md:flex-row md:space-x-4 md:space-y-0'>

        <div>
          <div className=''>
            <h1 className=' block text-3xl text-black font-mono not-itali font-bold text-5xl leading-10 tracking-widest ml-1       md:block md:text-3xl md:text-black md:font-mono md:not-itali md:font-bold md:text-5xl md:leading-10 md:tracking-widest '>Healthy in side<br /> <span className='text-pink-300'>fresh</span> out side</h1>
            <p className='text-gray-500 text-xs py-4 ml-1 justify-center justify-items-center items-center font-serif not-itali font-normal	text-base leading-7 opacity-60 tracking-widest      md:text-gray-500 md:text-sm md:py-4 md:font-serif md:not-itali md:font-normal	md:text-base md:leading-7 md:opacity-60 md:tracking-widest'>Exercise is a very important need for our body.
              Health and <br />fitness will be obtained if you can do regular exercise and
              <br /> run a healthy routine.
            </p>
          </div>

          <div className='flex items-center justify-start ml-[-40px]'>
            <button className=''><Image
              src={"/Group 3526.png"} width={246} height={56}
            /></button>

            <button ><Image
            className='ml-[-50px]' src={"/Group 4225.png"} width={246} height={56}
            /></button>
          </div>


          <div >
            <h1 className='leading-6 text-base font-normal not-italic mb-2 ml-2'>brand:</h1>
            <div className='flex items-center justify-between ml-2 mr-2'>
              <Image
                src={"/brand1.png"} width={58.81} height={21}
              />
              <Image
                src={"/brand2.png"} width={53.87} height={36.37}
              />

              <Image
                src={"/brand3.png"} width={53.87} height={36.37}
              />
              <Image
                src={"/brand4.png"} width={119.7} height={39.6}
              />
            </div>
          </div>
        </div>


        <div className='justify-center items-center pt-10 mt-8 md:justify-center md:items-center md:justify-items-end	md:ml-[-50px]'>
          <Image className=''
            src={"/Group 4227.png"} width={584} height={580}
          />


        </div>









      </div>


    </>
  )
}
export default Hero;