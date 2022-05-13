import React from 'react';
import HomePage from './Screens/AppScreens/Home';
import Login from './Screens/Authentication/Login';
import Dashboard from './Screens/AdminScreens/Dashboard';
import SignUp from './Screens/Authentication/SignUp';
import ResetPassword from './Screens/Authentication/ResetPassword';
import PropertyDetails from './Screens/AppScreens/PropertyDetails';
import AddHouse from './Screens/AdminScreens/AddHouse';
import BookedHouses from './Screens/AdminScreens/BookedHouses';
import DeleteHouse from './Screens/AdminScreens/DeleteHouse';
import EditHouse from './Screens/AdminScreens/EditHouse';
import HousesOnSale from './Screens/AdminScreens/HousesOnSale';
import HousesToRent from './Screens/AdminScreens/HousesToRent'
import RentedHouses from './Screens/AdminScreens/RentedHouses';
import SoldHouses from './Screens/AdminScreens/AddHouse'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Drawer from './Screens/AdminScreens/Dashboard';
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import useToken from './Screens/Authentication/useToken';
import {Container} from 'react-bootstrap'

function App() {
  // const {token, setToken}= useToken()
  // if(!token){
  //   return <Login setToken={setToken}/>
  // }
  
  return (
    <Container fluid>
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route exact path="/dashboard" element={<Drawer/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/reset" element={<ResetPassword/>}/>
          <Route exact path="/:PropertyId" element={<PropertyDetails/>}/>
          <Route exact path='/addHouse' element={<AddHouse/>}/>
          <Route exact path='/bookedHouses' element={<BookedHouses/>}/>
          <Route exact path='/deleteHouse' element={<DeleteHouse/>}/>
          <Route exact path='/editHouse' element={<EditHouse/>}/>
          <Route exact path='/housesOnSale' element={<HousesOnSale/>}/>
          <Route exact path='/housesToRent' element={<HousesToRent/>}/>
          <Route exact path='/rentedHouses' element={<RentedHouses/>}/>
          <Route exact path='/soldHouses' element={<SoldHouses/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </Container>

  );
}

export default App;
