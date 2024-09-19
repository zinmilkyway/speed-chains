import image from './images/image.png'
import light from './images/light.png'
// import Button from '../../common/Button'
import { ButtonPrimary } from '../../common/ButtonPrimary/ButtonPrimary'
import { ICArrow } from '../../common/icon/ICArrow'

export const Section1 = () => {
  return (
    <div className="container lg:py-20 py-6">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
        <div className="relative z-[1] text-center lg:text-left">
          <h2 className="mb-2 text-[48px] font-bold leading-none text-white lg:mb-4 lg:text-[100px]">Speeds Chain</h2>
          <h3 className="mb-3 text-[24px] font-semibold uppercase text-white lg:mb-10 lg:text-[48px]">
            High-speed <span className="font-bold italic text-[#FCB127]">TON</span> earning
          </h3>
          <div className="flex items-center justify-center gap-4 lg:mb-10 lg:justify-start">
            <ButtonPrimary contentClassName="w-full px-4" className="w-[143px] lg:w-[170px]">
              <div className="flex items-center justify-between gap-2">
                Livepaper
                <span className="text-[#FFF9BB]">
                  <ICArrow />
                </span>
              </div>
            </ButtonPrimary>
            <ButtonPrimary black contentClassName="text-[#FFF9BB]">
              Whitepaper
            </ButtonPrimary>
          </div>
          <p className="invisible text-[14px] font-bold text-neutral-300 lg:visible">
            Golden opportunity: Earn free TON today
          </p>
        </div>
        <div className="relative -mt-4 flex flex-col items-center justify-center lg:mt-0">
          <img className="relative z-[1]" src={image.src} alt="Image" />
          <img
            src={light.src}
            className="absolute left-0 top-0 -translate-y-1/3 scale-125 blur-2xl lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:scale-150"
          />
          <p className="visible text-center text-[14px] font-bold text-neutral-300 lg:invisible">
            Golden opportunity: Earn free TON today
          </p>
        </div>
      </div>
    </div>
  )
}
