import { Link, Outlet } from "react-router-dom"
import Header from "../partials/Header"
import Footer from "../partials/Header"

const RootLayout = ({children}) =>  {
  return (
    <div className="root-main">    
        <Header></Header>
        <Outlet/>
    </div>

  )
}

export default RootLayout