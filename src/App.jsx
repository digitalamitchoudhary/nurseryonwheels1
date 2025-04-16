  
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import ProductListing from './Pages/ProductListing/ProductListing'


function App() {
 
  return (
    <>
    <Header/>
    <Routes>
      <Route path={"/" }exact={true} element={<Home/>}/>
      <Route path={"/products" }exact={true} element={<ProductListing />}/>

    </Routes>
    <Footer/>
  </>
  )
}

export default App
