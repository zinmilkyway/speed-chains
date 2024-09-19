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
}

const Feature: React.FC<FeatureProps> = ({ img, alt, desc, title, customClass, reverse = false }) => {
  return (
    <div
      className={`flex flex-row ${reverse ? 'gap-[53px] flex-row-reverse' : 'gap-[26px]'} ${customClass} py-14 w-full`}
    >
      <div className="flex flex-col gap-8 flex-grow">
        <h3 className="font-bold text-textPrimary text-[64px] leading-[80px]">{title}</h3>
        <ul className="flex flex-col gap-6">
          {desc.map((item, index) => (
            <li key={index} className="flex flex-row gap-2 items-center list-none">
              <IconWrapper logoClass="w-6 h-6" backgroundClass="w-6 h-6" icon={<ICStar />} />
              <p className="font-normal text-graycc text-normal text-[20px] leading-[32px]">{item}</p>
            </li>
          ))}
        </ul>
        <Button type="button" className="w-[200px]">
          Start Playing
        </Button>
      </div>
      <div className="relative w-[610px] h-[488px]">
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

export default Feature
