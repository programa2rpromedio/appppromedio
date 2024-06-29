
import SideBar from './components/SideBar'
import Header from './components/Header'
import Projects from './components/Projects'
import './App.css'
import Emulations from './components/Emulations'
import CardInfo from './components/CardInfo'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      {/* <h1 className='text-red-300 font-pixel_digivolve text-4xl'>P Promedio</h1> */}
      <div className='flex w-full'>
        <SideBar />
        <main className=' w-full flex flex-col items-center'>
          <div className='max-w-screen-lg '>
            <Header />
            <Projects />
            <Emulations />

            <section className="p-12 flex flex-wrap justify-between">
              <CardInfo />
              <CardInfo />
            </section>
          </div>

          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
