
import SideBar from './components/SideBar'
import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      {/* <h1 className='text-red-300 font-pixel_digivolve text-4xl'>P Promedio</h1> */}
      <div className='flex w-full'>
        <SideBar />
        <main className='w-full flex flex-col items-center'>
          <div className='max-w-screen-lg '>
            {/* <Header />
            <Projects />
            <Emulations />

            <section className="p-12 flex flex-wrap justify-between">
              <CardInfo />
              <CardInfo />
            </section> */}
            <Outlet />
          </div>

          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
