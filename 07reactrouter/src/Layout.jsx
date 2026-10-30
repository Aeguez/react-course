import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/Footer/footer'

function Layout() {
  return (
  <>
  <Header />
  <Outlet />
  <Footer />
  </>  
  )
}

export default Layout