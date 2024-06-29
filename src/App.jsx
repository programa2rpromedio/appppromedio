
import SideBar from './components/SideBar'
import Header from './components/Header'
import Projects from './components/Projects'
import './App.css'
import Emulations from './components/Emulations'

function App() {

  return (
    <>
      {/* <h1 className='text-red-300 font-pixel_digivolve text-4xl'>P Promedio</h1> */}
      <SideBar />
      <main className='max-w-screen-lg border mx-auto'>
        <Header />
        <Projects />
        <Emulations />
      </main>
    </>
  )
}

export default App
