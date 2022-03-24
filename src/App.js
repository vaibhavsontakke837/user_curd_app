import './App.css';
import Home from './pages/Home';
import Registraction from './pages/Registraction';
import Login from './pages/Login';
import UpdateUserInfo from "./pages/UpdateUserInfo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';


function App() {

  const [loginUser,setLoginUser]=useState({})

  return (
    <BrowserRouter className="container">
      <Routes>
        <Route path="/" element={
          loginUser && loginUser._id ? <Home /> : <Login setLoginUser={setLoginUser} />
          
        } />
        {/* <Route path="/" element={<Home />}/> */}
       
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Registraction />} />
        <Route path="/update-user/:userId" element={<UpdateUserInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1 className='text-center text-danger'>404 : PAGE NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
