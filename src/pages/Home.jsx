import Header from '../components/Header'
import Projects from '../components/Projects'
import Emulations from '../components/Emulations'
import CardInfo from '../components/CardInfo'
import { CarbonCategories } from '../components/icons/CarbonCategories'
import { IcBaselineAppsOutage } from '../components/icons/IcBaselineAppsOutage'
export default function Home() {
  return (
    <>
      <Header />
      <Projects />
      <Emulations />

      <section className="p-8 2xl:p-12 flex flex-col items-center md:flex-row flex-wrap justify-between gap-y-3">
        <CardInfo key='resources' title='Recursos' description='Aprende con nuestros cursos gratuitos.' link='/resources' >
          <CarbonCategories />
        </CardInfo>
        <CardInfo key='services' title='Servicios' description='Conoce nuestros servicios.' link='/services' >
          <IcBaselineAppsOutage />
        </CardInfo>
      </section >
    </>
  )
}
