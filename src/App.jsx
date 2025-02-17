  
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'


function App() {
 
  return (
    <>
    <Header/>
    <Routes>
      <Route path={"/" }exact={true} element={<Home/>}/>
        
       
    </Routes>
  </>
  )
}

export default App
