import React from 'react';
import Dashboard from './Admin/Dashboard';
import AddHouse from './Admin/AddHouse';
import BookedHouses from './Admin/BookedHouses';
import DeleteHouse from './Admin/DeleteHouse';
import EditHouse from './Admin/EditHouse';
import HousesOnSale from './Admin/HousesOnSale';
import HousesToRent from './Admin/HousesToRent';
import RentedHouses from './Admin/RentedHouses';
import SoldHouses from './Admin/SoldHouses';
import {Container} from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Admin() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Dashboard/>
        <Routes>
          <Route exact path="/addHouse" element={<AddHouse/>}/>
          <Route exact path="/bookedHouses" element={<BookedHouses />}/>
          <Route exact path="/deleteHouse" element={<DeleteHouse />}/>
          <Route exact path="/editHouse" element={<EditHouse/>}/>
          <Route exact path="/housesOnSale" element={<HousesOnSale/>}/>
          <Route exact path="/housesToRent" element={<HousesToRent/>}/>
          <Route exact path="/rentedHouses" element={<RentedHouses/>}/>
          <Route exact path="/soldHouses" element={<SoldHouses/>}/>
        </Routes>
      </BrowserRouter>
      
    </Container>

  );
}

export default Admin;
