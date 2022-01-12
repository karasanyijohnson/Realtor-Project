import React from 'react';
import HomePage from './Screens/AppScreens/Home';
import Login from './Screens/Authentication/Login';
import Dashboard from './Screens/AppScreens/Dashboard';
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


// Function to set Token
const setToken=(userToken)=>{
sessionStorage.getItem('token', JSON.stringify(userToken));
}
// function to get token
const getToken=()=>{

}


function App() {
  const token = getToken() 
  // const [token, setToken]=useState() 
  if(!token){
    return <Login setToken={setToken}/>
  }
  
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>}>
            </Route>
          <Route exact path="/" element={<HomePage/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
