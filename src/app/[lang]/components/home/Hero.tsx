import React from 'react'
import HeroBanner from '@/public/Hero.png'
import StarBG from '@/public/StarBG.png'
import Image from 'next/image'
import Button from '../common/Button'

const Hero = () => {
  return (
    <div className="flex flex-row w-full relative mb-[66px] mt-[104px]">
      <div className="flex flex-col gap-12 flex-grow mt-[18px] h-full">
        <div className="flex flex-col gap-4 font-bold">
          <h2 className="text-[100px] leading-[126px]">Speeds Chain</h2>
          <h3 className="text-5xl leading-[64px]">
            High-speed <span className="italic text-textPrimary">TON &nbsp;</span> earning
          </h3>
        </div>
        <div className="flex flex-row gap-4">
          <Button type="button">Livepaper</Button>
          <Button type="button">Whitepaper</Button>
        </div>
        <p>Golden opportunity: Earn free TON today</p>
      </div>
      <div className="relative w-[680px] h-auto">
        <Image
          src={HeroBanner}
          alt="hero"
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
        <Image src={StarBG} alt="hero-bg" className="absolute -top-32 -z-10 overflow-hidden" />
      </div>
    </div>
  )
}

export default Hero
