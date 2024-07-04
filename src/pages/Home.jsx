import Header from '../components/Header'
import Projects from '../components/Projects'
import Emulations from '../components/Emulations'
import CardInfo from '../components/CardInfo'
export default function Home() {
  return (
    <>
      <Header />
      <Projects />
      <Emulations />

      <section className="p-8 2xl:p-12 flex flex-col items-center md:flex-row flex-wrap justify-between gap-y-3">
        <CardInfo />
        <CardInfo />
      </section>
    </>
  )
}
