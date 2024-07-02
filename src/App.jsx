
import SideBar from './components/SideBar'
import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import Loader from './components/animation/Loader'

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 1600); // Duración de la animación en milisegundos

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {/* <h1 className='text-red-300 font-pixel_digivolve text-4xl'>P Promedio</h1> */}
      {
        showAnimation ? <Loader /> : <div className='flex w-full'>
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
      }

    </>
  )
}

export default App
