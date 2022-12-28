import './App.css';
import Signup from './components/user/Signup';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/user/Login';
import Chatroom from './components/chat/Chatroom';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route exact path='/' element={<Chatroom />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
