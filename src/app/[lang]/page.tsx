import { Locale } from '../../../i18n-config'
import { Header } from './components/home/Header/Header'
import { Section1 } from './components/home/Section1/Section1'
import { Section2 } from './components/home/Section2/Section2'
import { Section3 } from './components/home/Section3/Section3'
import { Section4 } from './components/home/Section4/Section4'
import { Section5 } from './components/home/Section5/Section5'
import { Section6 } from './components/home/Section6/Section6'
import { Section7 } from './components/home/Section7/Section7'
import { Section8 } from './components/home/Section8/Section8'

export default async function IndexPage({}: // params: { lang }
Readonly<{
  params: { lang: Locale }
}>) {
  // const dictionary = await getDictionary(lang)

  return (
    <div className="flex flex-col justify-center items-center font-[family-name:var(--font-primary-sans)] relative overflow-x-hidden">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  )
}
