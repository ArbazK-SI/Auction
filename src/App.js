import React from 'react'
import {
 
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import SportzOption from './Components/SportzOption';
import LoginPage from './Components/Login';
const App = () => {
  return (
    <>
    <LoginPage/>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        <Route path="/s" element={<SportzOption/>}/>
      
      </Routes>
    </BrowserRouter> */}
  </>
  )
}

export default App