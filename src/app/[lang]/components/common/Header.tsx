import Image from 'next/image'

import Logo from '@/public/logo.png'
import Button from './Button'
import { ICSun } from '../icon/ICSun'
import { ICTranslate } from '../icon/ICTranslate'
import { ICMenu } from '../icon/ICMenu'

const Header = () => {
  return (
    <header>
      <div
        className="2xl:max-w-full 2xl:mx-52 mx-3 md:mx-16 desktop:max-w-[1040px] desktop:mx-auto
       mt-9 bg-gray36 bg-opacity-50 rounded-[40px] px-6 flex items-center justify-between
       font-[family-name:var(--font-primary-sans)]"
      >
        <Image src={Logo} alt="logo" className="lg:h-full h-12 w-auto" priority />
        <div className="flex items-center gap-10">
          <button>
            <ICSun />
          </button>
          <button>
            <ICTranslate />
          </button>
          <button>
            <ICMenu />
          </button>
          <Button type="button" hasIcon>
            Launch Game
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
