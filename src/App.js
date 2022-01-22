import React from 'react';
import HomePage from './Screens/AppScreens/Home';
import Login from './Screens/Authentication/Login';
import Dashboard from './Screens/AppScreens/Dashboard';
import SignUp from './Screens/Authentication/SignUp';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import useToken from './Screens/Authentication/useToken';

function App() {
  // const {token, setToken}= useToken()
  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
