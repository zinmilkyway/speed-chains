import { ICGamepad } from '../icon/ICGamepad'
import { ICSocialMedia } from '../icon/ICSocialMedia'
import { ICTelegram } from '../icon/ICTelegram'
import IconWrapper from './IconWrapper'

const Footer = () => {
  return (
    <footer>
      <div
        className="2xl:max-w-full desktop:mx-[100px] mx-3 py-6 gap-3
       bg-gray33 rounded-3xl px-6 flex items-center justify-between
       flex-col font-[family-name:var(--font-primary-sans)]"
      >
        <h5 className="font-bold text-foreground text-2xl">Join our community</h5>
        <div className="flex items-center gap-10">
          <IconWrapper icon={<ICGamepad />} />
          <IconWrapper icon={<ICTelegram />} />
          <IconWrapper icon={<ICSocialMedia />} />
        </div>
        <p className='mt-1 font-medium text-xs text-grayd6'>2024 Speed Chains. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
