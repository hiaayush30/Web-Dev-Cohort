import { Outlet } from 'react-router-dom'
import { ModeContextProvider } from './context/ModeContext'

const Layout = () => {
  return (
    <ModeContextProvider>
      <Outlet/>
    </ModeContextProvider>
  )
}

export default Layout
