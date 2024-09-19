import Image, { StaticImageData } from 'next/image'
import Button from '../common/Button'
import IconWrapper from '../common/IconWrapper'
import { ICStar } from '../icon/ICStar'

interface FeatureProps {
  img: StaticImageData
  title: string
  desc: string[]
  alt?: string
  reverse?: boolean
  customClass?: string
  titleBtn?: string
}

const FeatureSection: React.FC<FeatureProps> = ({ img, alt, desc, title, customClass, titleBtn, reverse = false }) => {
  return (
    <div
      className={`container px-3 lg:px-0 lg:mx-auto flex gap-6 lg:flex-row flex-col-reverse ${
        reverse ? 'lg:gap-[53px] flex-row-reverse' : 'lg:gap-[26px]'
      } ${customClass} lg:py-14 w-full`}
    >
      <div className="flex flex-col lg:gap-8 gap-4 flex-grow">
        <h3 className="font-bold text-textPrimary lg:text-[64px] lg:leading-[80px] text-[32px] leading-[40px]">{title}</h3>
        <ul className="flex flex-col gap-6">
          {desc.map((item, index) => (
            <li key={index} className="flex flex-row gap-2 lg:gap-6 items-center list-none">
              <IconWrapper logoClass="w-6 h-6" backgroundClass="w-6 h-6" icon={<ICStar />} />
              <p className="font-normal text-graycc text-normal lg:text-[20px] lg:leading-[32px] text-xs">{item}</p>
            </li>
          ))}
        </ul>
        <Button type="button" className="max-w-[120px]">
          {titleBtn ?? 'Start Playing'}
        </Button>
      </div>
      <div className="relative lg:w-[610px] lg:h-[488px]">
        <Image
          src={img}
          alt={alt ?? 'title'}
          style={{
            width: '100%',
            height: 'auto'
          }}
        ></Image>
      </div>
    </div>
  )
}

export default FeatureSection
