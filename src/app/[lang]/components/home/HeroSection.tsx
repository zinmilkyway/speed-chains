import React from 'react'
import HeroBanner from '@/public/Hero.png'
import StarBG from '@/public/StarBG.png'
import Image from 'next/image'
import Button from '../common/Button'

const HeroSection = () => {
  return (
    <div className="container flex lg:flex-row flex-col w-full relative lg:mb-[66px] mb-5 lg:mt-[104px] mt-6">
      <div className="flex flex-col gap-3 lg:gap-12 flex-grow mt-[18px] h-full justify-center items-center">
        <div className="flex flex-col lg:gap-4 font-bold">
          <h2 className="text-[48px] leading-[60px] lg:text-[100px] lg:leading-[126px]">Speeds Chain</h2>
          <h3 className="text-2xl lg:text-5xl lg:leading-[64px]">
            High-speed <span className="italic text-textPrimary">TON &nbsp;</span> earning
          </h3>
        </div>
        <div className="flex flex-row gap-4">
          <Button type="button" hasIcon className="drop-shadow-3xl">
            Livepaper
          </Button>
          <Button type="button" bg="#363030" className="!text-[#FFF9BB]">
            Whitepaper
          </Button>
        </div>
        <p className='lg:block hidden'>Golden opportunity: Earn free TON today</p>
      </div>
      <div className="relative lg:w-[680px] h-auto flex items-center flex-col mt-4 lg:mt-0 justify-center">
        <Image
          src={HeroBanner}
          alt="hero"
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
        <Image src={StarBG} alt="hero-bg" className="absolute margin-auto -z-10 overflow-hidden" />
        <p className='lg:hidden block'>Golden opportunity: Earn free TON today</p>
      </div>
      <div
        className="absolute overflow-hidden top-[80%] left-[30%] w-1/2 h-2/3"
        style={{
          background: 'radial-gradient(38% 40% at 45% 40%, rgba(231, 74, 35, 0.5) 0%, rgba(231, 41, 35, 0) 100%)',
          backgroundPosition: 'center',
          opacity: '0.2',
          transform: 'rotate(-50deg)',
        }}
      ></div>
    </div>
  )
}

export default HeroSection

