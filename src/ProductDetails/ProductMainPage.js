import React from 'react'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import Products from './Products'
import ProductsDetails from './ProductDetails'

const ProductMainPage = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/products">Product</Link>

      
    

      <Routes>
       <Route path="/" element ={<HomePage/>}/>
       <Route path="/about" element ={<AboutPage/>}/>
       <Route path="/contact" element ={<ContactPage/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path='/products/:productId' element={<ProductsDetails/>}/>
       

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default ProductMainPage
