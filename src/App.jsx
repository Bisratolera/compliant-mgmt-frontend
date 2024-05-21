import './App.css'
import { Header } from './Components/Header'

import { Footer } from './Components/Footer'
import { Outlet } from 'react-router-dom'
import { SuccessfullToast } from './Components/SuccessfullToast'

function App() {

  return (
    <>
    <Header />
    <SuccessfullToast />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
