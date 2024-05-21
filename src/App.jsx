import './App.css'
import { Header } from './Components/Header'
import UserPage from './Pages/UserPage'
import { Footer } from './Components/Footer'
import AdminLogin from './Pages/AdminLogin'
import Department from './Pages/Department'
function App() {

  return (
    <>
    <Header />
    {/* <AdminLogin /> */}
    <Department />
    {/* <UserPage /> */}
    <Footer />
    </>
  )
}

export default App
