import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import Feature from './components/home/Feature'
import PlayForFree from '@/public/PlayForFree.png'
import TapToEarn from '@/public/TapToEarn.png'
import TON from '@/public/TON.png'
import WhyChooseUs from './components/home/WhyChooseUs'
import Hero from './components/home/Hero'

export default async function IndexPage({
  params: { lang }
}: Readonly<{
  params: { lang: Locale }
}>) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex flex-col justify-center items-center font-[family-name:var(--font-primary-sans)] desktop:mx-[100px]">
      <Hero />
      <Feature title={dictionary['play'].title} desc={dictionary['play'].desc} img={PlayForFree} customClass="mt-8" />
      <Feature
        reverse
        title={dictionary['tap'].title}
        desc={dictionary['tap'].desc}
        img={TapToEarn}
        customClass="mt-8"
      />
      <Feature title={dictionary['ton'].title} desc={dictionary['ton'].desc} img={TON} customClass="mt-8" />

      <WhyChooseUs></WhyChooseUs>
    </div>
  )
}
