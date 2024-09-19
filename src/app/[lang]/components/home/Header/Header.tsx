import { ButtonPrimary } from '../../common/ButtonPrimary/ButtonPrimary'
import { ICArrow } from '../../common/icon/ICArrow'
import { Global } from './icons/Global'
import { Hambuger } from './icons/Hambuger'
import { Sun } from './icons/Sun'
import logo from './images/logo.png'

export const Header = () => {
  return (
    <div className="container py-8">
      <div className="lg:px-10">
        <div className="relative">
          <div
            className="absolute -inset-px rounded-full"
            style={{
              background:
                'linear-gradient(to right, rgba(255, 255, 255, 0.53), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.01))'
            }}
          />
          <div className="relative z-[1] rounded-full bg-[#363030] px-3 py-2 md:px-6 md:py-0">
            <div className="flex items-center justify-between gap-3 md:gap-6">
              <div className="w-[75px] shrink-0 md:w-auto">
                <img src={logo.src} alt="logo" />
              </div>
              <div className="flex items-center gap-3 md:gap-6">
                <div className="hidden lg:block">
                  <Sun />
                </div>
                <div className="hidden lg:block">
                  <Global />
                </div>
                <Hambuger />
                <ButtonPrimary
                  black
                  contentClassName="w-full px-4 text-[#FFF9BB]"
                  className="max-w-[175px] md:w-[183px] md:max-w-[initial]"
                >
                  <div className="flex items-center justify-between gap-2">
                    Launch Game
                    <span className="text-[#FFF9BB]">
                      <ICArrow />
                    </span>
                  </div>
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
