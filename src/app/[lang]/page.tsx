import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import PlayForFree from '@/public/PlayForFree.png'
import TapToEarn from '@/public/TapToEarn.png'
import TON from '@/public/TON.png'
import WhyChooseUs from './components/home/WhyChooseUs'
import HeroSection from './components/home/HeroSection'
import { Section6 } from './components/home/Section6/Section6'
import { Section7 } from './components/home/Section7/Section7'
import FeatureSection from './components/home/FeatureSection'

export default async function IndexPage({
  params: { lang }
}: Readonly<{
  params: { lang: Locale }
}>) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex flex-col justify-center items-center font-[family-name:var(--font-primary-sans)] relative overflow-x-hidden">
      <HeroSection />
      <h2 className="mb-4 text-center text-[32px] font-bold uppercase md:mb-20 md:text-[64px]">
        <span className="text-white">Key </span>
        <span className="text-[#FFA506]">Feature</span>
      </h2>
      <FeatureSection title={dictionary['play'].title} desc={dictionary['play'].desc} img={PlayForFree} customClass="lg:mt-8 mt-3" />
      <FeatureSection
        reverse
        title={dictionary['tap'].title}
        desc={dictionary['tap'].desc}
        img={TapToEarn}
        customClass="lg:mt-8 mt-10"
      />
      <FeatureSection
        title={dictionary['ton'].title}
        desc={dictionary['ton'].desc}
        img={TON}
        customClass="lg:mt-8 mt-10"
        titleBtn="Join Now"
      />

      <WhyChooseUs />
      <Section6 />
      <Section7 />
    </div>
  )
}
