  
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'


function App() {
 
  return (
    <>
    <Header/>
    <Routes>
      <Route path={"/" }exact={true} element={<Home/>}/>
    </Routes>
    <Footer/>
  </>
  )
}

export default App
