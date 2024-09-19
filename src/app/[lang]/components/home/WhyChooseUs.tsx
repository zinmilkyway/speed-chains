import React from 'react'
import WhyChooseUs1 from '@/public/WhyChooseUs_1.png'
import WhyChooseUs2 from '@/public/WhyChooseUs_2.png'
import WhyChooseUs3 from '@/public/WhyChooseUs_3.png'
import Image from 'next/image'
import { ICArrow } from '../icon/ICArrow'

const WhyChooseUs = () => {
  return (
    <div className="container grid lg:grid-cols-3 grid-cols-2 px-3 lg:px-0 lg:grid-rows-2 grid-rows-3 lg:gap-6 gap-3 lg:h-[756px] max-w-[1240px]">
      <div className="col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col lg:text-[64px] text-[32px] text-foreground font-[family-name:var(--font-vavob)] uppercase font-bold justify-end lg:justify-start">
        <span className="flex flex-row gap-4">
          <span className='lg:leading-[70px] leading-[48px]'>Why</span>
          <span className="bg-foreground rounded-full h-9 lg:w-[134px] w-[234px] mt-5"></span>
        </span>
        <span className='lg:leading-[70px] leading-[48px]'>Choose us</span>
      </div>
      <div className="lg:col-span-1 col-span-2 row-start-2 lg:row-span-2 relative h-[165px] lg:h-auto">
        <h4 className="absolute top-6 left-7 font-bold text-white lg:text-[40px] text-2xl">
          Join the $TON <br /> Revolution
        </h4>
        <Image src={WhyChooseUs1} alt="WhyChooseUs" className="rounded-2xl lg:h-full h-[165px] w-full" />
        <span className="absolute bottom-1 right-2 text-white">
          <ICArrow />
        </span>
      </div>
      <div className="lg:col-span-1 lg:row-span-1 row-start-3 relative h-[165px] lg:h-auto">
        <h4 className="absolute top-6 left-7 font-bold text-white lg:text-[40px] text-2xl">
          Speed Chain <br /> Speed Your <br />
          Avenue
        </h4>
        <Image src={WhyChooseUs2} alt="WhyChooseUs" className="rounded-2xl h-full" />
        <span className="absolute bottom-1 right-2 text-white">
          <ICArrow />
        </span>
      </div>
      <div className="lg:col-span-1 lg:row-span-1 row-start-3 relative h-[165px] lg:h-auto">
        <h4 className="absolute top-6 left-7 font-bold text-[#311Blg:06] text- text-2xl[40px]">
          Just Play <br /> and Earn
        </h4>
        <Image src={WhyChooseUs3} alt="WhyChooseUs" className="rounded-2xl h-full" />
        <span className="absolute bottom-1 right-2 text-white">
          <ICArrow />
        </span>
      </div>
    </div>
  )
}

export default WhyChooseUs
