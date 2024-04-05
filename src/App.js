import React from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import ProductCard from './components/ProductCard'
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"




const App = () => {

  return (
    <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/shoppingcart' element={<ProductCard/>}/>
      </Routes>
      </Router>
   
      
    
    </div>
  )
}

export default App
