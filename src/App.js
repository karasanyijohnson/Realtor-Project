
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Event from './component/Event'
import Contact from './component/Contact'
import Register from './component/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';



function App() {
  return (
    <div className="">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} /> 
        <Route path="/Event" element={<Event />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} >
                 
        </Route>
      </Routes>
    </BrowserRouter>
    {<Footer/>}
    </div>
  );
}
export default App

