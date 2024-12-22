import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css'
import Footer from './Footer';
import Contactus from './Contactus';
import Dept from './Dept';
import Institute from './Institute';
import Registration from './Registration';
import Application from './Application';
import Payment from './Payment';
import Courses from './Courses';
import Weboptions from './Weboptions';
import Otp from './Otp';

ReactDOM.render(
  <>
  <BrowserRouter>
  
  <Routes>
   
    <Route path='/' element={<Home/>}></Route>
    <Route path='/contactus' element={<Contactus/>}></Route>
    <Route path='/dept' element={<Dept/>}></Route>
    <Route path='/institute' element={<Institute/>}></Route>
    <Route path='/registration' element={<Registration/>}></Route>
    <Route path='/application' element={<Application/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/courses' element={<Courses/>}></Route>
    <Route path='/weboptions' element={<Weboptions/>}></Route>
    <Route path='/otp' element={<Otp/>}></Route>
  </Routes>
 
 
  </BrowserRouter>
  
  </>,document.getElementById("root")
);