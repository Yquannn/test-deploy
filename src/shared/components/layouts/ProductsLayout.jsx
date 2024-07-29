import { Link } from "react-router-dom"
// import Header from "../partials/Header"
import Footer from "../partials/Footer"
import { Outlet } from "react-router-dom"

const ProductsLayout = ({children}) =>  {

  return (
      <div className="products-main">     
        <div>Products</div>
          <Outlet/>
        <Footer></Footer>

    </div>

  )
}

export default ProductsLayout