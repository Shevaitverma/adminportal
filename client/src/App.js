import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import Home from './components/home';

function App() {
  const [isLogin, setisLogin] = useState({userType:"",state:false});
  return (
    <div>
      <hr />
      {isLogin.state?<Home isLogin={isLogin}/>:<Login setisLogin={setisLogin}/>}
      <hr />
    </div>

  );
}

export default App;
