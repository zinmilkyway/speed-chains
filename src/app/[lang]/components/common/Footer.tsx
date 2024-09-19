import { ICGamepad } from '../icon/ICGamepad'
import { ICSocialMedia } from '../icon/ICSocialMedia'
import { ICTelegram } from '../icon/ICTelegram'
import IconWrapper from './IconWrapper'

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div
        className="2xl:max-w-full desktop:mx-[100px] mx-3 lg:py-6 py-4 gap-3
       bg-gray33 rounded-3xl px-6 flex items-center justify-between
       flex-col font-[family-name:var(--font-primary-sans)] mb-[35px]"
      >
        <h5 className="font-bold text-foreground lg:text-2xl text-xl">Join our community</h5>
        <div className="flex items-center lg:gap-10 gap-2">
          <IconWrapper icon={<ICGamepad />} />
          <IconWrapper icon={<ICTelegram />} />
          <IconWrapper icon={<ICSocialMedia />} />
        </div>
        <p className="mt-1 font-medium lg:text-xs text-[10px] text-grayd6">2024 Speed Chains. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
