import React from 'react'
import WhyChooseUs1 from '@/public/WhyChooseUs_1.png'
import WhyChooseUs2 from '@/public/WhyChooseUs_2.png'
import WhyChooseUs3 from '@/public/WhyChooseUs_3.png'
import Image from 'next/image'
import { ICArrow } from '../icon/ICArrow'

const WhyChooseUs = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[756px]">
      <div className="col-span-1 row-span-2 flex flex-col text-[64px] text-foreground font-[family-name:var(--font-vavob)] uppercase font-bold">
        <span className="flex flex-row gap-4">
          <span className='leading-[70px]'>Why</span>
          <span className="bg-foreground rounded-full h-9 w-[134px] mt-5"></span>
        </span>
        <span className='leading-[70px]'>Choose us</span>
      </div>
      <div className="col-span-1 row-span-2 relative">
        <h4 className="absolute top-6 left-7 font-bold text-white text-[40px]">
          Join the $TON <br /> Revolution
        </h4>
        <Image src={WhyChooseUs1} alt="WhyChooseUs" className="rounded-2xl h-full" />
        <span className="absolute bottom-1 right-2 text-white">
          <ICArrow />
        </span>
      </div>
      <div className="col-span-1 row-span-1 relative">
        <h4 className="absolute top-6 left-7 font-bold text-white text-[40px]">
          Speed Chain <br /> Speed Your <br />
          Avenue
        </h4>
        <Image src={WhyChooseUs2} alt="WhyChooseUs" className="rounded-2xl h-full" />
        <span className="absolute bottom-1 right-2 text-white">
          <ICArrow />
        </span>
      </div>
      <div className="col-span-1 row-span-1 relative">
        <h4 className="absolute top-6 left-7 font-bold text-[#311B06] text-[40px]">
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
