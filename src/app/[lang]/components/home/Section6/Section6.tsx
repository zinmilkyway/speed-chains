import classNames from 'classnames'
import bgItem1 from '@/public/bg-item1.png'
import bgItem2 from '@/public/bg-item2.png'
import bgItem3 from '@/public/bg-item3.png'
import bgItem4 from '@/public/bg-item4.png'
import { ICStar } from '../../icon/ICStar'
import IconWrapper from '../../common/IconWrapper'

const items1 = ['Concept and Development', 'Development', 'Onboarding Partners']
export const Section6 = () => {
  return (
    <div className="container py-10">
      <h2 className="mb-10 text-center text-[32px] font-bold text-white lg:text-[64px]">
        SPEEDS CHAIN <span className="italic text-[#FFA506]">BUILDER</span>
      </h2>
      <div className="grid grid-cols-2 gap-3 lg:gap-6 px-3">
        <div className="grid grid-cols-1 gap-3 lg:gap-6">
          <div
            style={{
              backgroundColor:
                'linear-gradient(95.25deg, rgba(255, 255, 255, 0) -7.76%, rgba(255, 255, 255, 0.2) 38.43%, rgba(255, 255, 255, 0) 110.79%)',
              backgroundImage: `url('${bgItem1.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backdropFilter: 'blur(50px)'
            }}
            className="grid h-[223px] grid-cols-1 rounded-2xl border border-neutral-600 p-3 lg:h-[191px] lg:grid-cols-2 lg:p-6"
          >
            <div className="text-left font-bold text-white">
              <div className="mb-2 text-[20px] leading-none lg:text-[32px]">Phase</div>
              <div className="text-[36px] leading-none lg:text-[56px]">01</div>
            </div>
            <ul className="flex flex-col justify-end gap-2 text-white lg:justify-ICstaICStart">
              {items1.map((item, index) => {
                return (
                  <li
                    className={classNames(
                      'text-neutral-50 text-sm font-medium flex items-center gap-2',
                      index === 0 ? 'lg:ml-3' : ''
                    )}
                    key={index}
                  >
                    <div className="shrink-0">
                      <IconWrapper logoClass="w-6 h-6" backgroundClass="w-6 h-6" icon={<ICStar />} />
                    </div>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <div
            style={{
              backgroundColor:
                'linear-gradient(95.25deg, rgba(255, 255, 255, 0) -7.76%, rgba(255, 255, 255, 0.2) 38.43%, rgba(255, 255, 255, 0) 110.79%)',
              backgroundImage: `url('${bgItem3.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backdropFilter: 'blur(50px)'
            }}
            className="grid h-[280px] grid-cols-1 rounded-2xl border border-neutral-600 p-3 lg:h-[300px] lg:grid-cols-2 lg:p-6"
          >
            <div className="text-left font-bold text-white">
              <div className="mb-2 text-[20px] leading-none lg:text-[32px]">Phase</div>
              <div className="text-[36px] leading-none lg:text-[56px]">03</div>
            </div>
            <ul className="flex flex-col justify-end gap-2 text-white lg:justify-ICstaICStart">
              {items1.map((item, index) => {
                return (
                  <li
                    className={classNames(
                      'text-neutral-50 text-sm font-medium flex items-center gap-2',
                      index === 0 ? 'lg:ml-3' : ''
                    )}
                    key={index}
                  >
                    <div className="shrink-0">
                      <IconWrapper logoClass="w-6 h-6" backgroundClass="w-6 h-6" icon={<ICStar />} />
                    </div>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 lg:gap-6">
          <div
            style={{
              backgroundColor:
                'linear-gradient(95.25deg, rgba(255, 255, 255, 0) -7.76%, rgba(255, 255, 255, 0.2) 38.43%, rgba(255, 255, 255, 0) 110.79%)',
              backgroundImage: `url('${bgItem2.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backdropFilter: 'blur(50px)'
            }}
            className="grid h-[280px] grid-cols-1 rounded-2xl border border-neutral-600 p-3 lg:h-[300px] lg:grid-cols-2 lg:p-6"
          >
            <div className="text-left font-bold text-white">
              <div className="mb-2 text-[20px] leading-none lg:text-[32px]">Phase</div>
              <div className="text-[36px] leading-none lg:text-[56px]">02</div>
            </div>
            <ul className="flex flex-col justify-end gap-2 text-white lg:justify-ICstaICStart">
              {items1.map((item, index) => {
                return (
                  <li
                    className={classNames(
                      'text-neutral-50 text-sm font-medium flex items-center gap-2',
                      index === 0 ? 'lg:ml-3' : ''
                    )}
                    key={index}
                  >
                    <div className="shrink-0">
                      <IconWrapper logoClass="w-6 h-6" backgroundClass="w-6 h-6" icon={<ICStar />} />
                    </div>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <div
            style={{
              backgroundColor:
                'linear-gradient(95.25deg, rgba(255, 255, 255, 0) -7.76%, rgba(255, 255, 255, 0.2) 38.43%, rgba(255, 255, 255, 0) 110.79%)',
              backgroundImage: `url('${bgItem4.src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backdropFilter: 'blur(50px)'
            }}
            className="grid h-[223px] grid-cols-1 rounded-2xl border border-neutral-600 p-3 lg:h-[191px] lg:grid-cols-2 lg:p-6"
          >
            <div className="text-left font-bold text-white">
              <div className="mb-2 text-[20px] leading-none lg:text-[32px]">Phase</div>
              <div className="text-[36px] leading-none lg:text-[56px]">04</div>
            </div>
            <ul className="flex flex-col justify-end gap-2 text-white lg:justify-ICstaICStart">
              {items1.map((item, index) => {
                return (
                  <li
                    className={classNames(
                      'text-neutral-50 text-sm font-medium flex items-center gap-2',
                      index === 0 ? 'lg:ml-3' : ''
                    )}
                    key={index}
                  >
                    <div className="shrink-0">
                      <IconWrapper logoClass="w-6 h-6" backgroundClass="w-6 h-6" icon={<ICStar />} />
                    </div>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
