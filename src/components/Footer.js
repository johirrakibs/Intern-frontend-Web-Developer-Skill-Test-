import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='my-10 flex flex-col items-center justify-evenly md:flex-row md:space-x-4 md:space-y-0'>

      <div className='order-2 md:order-1'>
        <Image
          src={"/Group 3892.png"} width={571} height={496.38}
        />
      </div>

      <div className='order-1 md:order-2'>
        <h1 className='not-itali font-normal text-5xl justify-center leading-10 ml-2 mr-2     md:not-itali md:font-normal md:text-5xl md:leading-10 '>Best full body<br /> workout to lose fat
        </h1>

        <p className='text-gray-500 text-xs pt-6 font-serif not-itali font-normal	text-base leading-5 opacity-60  ml-2 mr-2         md:text-gray-500 md:text-sm md:pt-6 md:font-serif md:not-itali md:font-normal	md:text-base md:leading-7 md:opacity-60 md:tracking-widest'>Exercise is a very important need for our body.
          Health and fitness <br />will be obtained if you can do regular exercise and run a
          healthy <br />routine. Even at home we still have to be diligent in exercising, either
          <br />alone or with your friends at home.
        </p>

       <div className='ml-[-30px] md:ml-[-50px]'> <Image
       src={"/Group 3890.png"} width={246} height={52}
     />
     </div>
      </div>





    </div>
  )
}

export default Footer;