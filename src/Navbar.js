import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const X=styled.div`{
      *{
        margin:0;
        padding:0;
        background-color:#029e76;
      }
      .nav1{
        overflow:hidden;
        
      }
        ul{
            list-style:none;
            display:flex;
            
  float:right;
            justify-content:space-around;
            background-color:#029e76;
            padding:1rem;
        }
        li{
            padding:0.5rem;
        }
        .Navlist button{
            text-decoration:none;
            padding:0.7rem;
            font-size:large;
            color:red;
           background-color:white;
           border: 0px solid black;
            
        }
        
        .Navlist button:hover{
          background-color:#029e76;
         
        }
        .nav1 .icon{
          display:none;
        }
       
        
    }`
    function myFunction() {
      var x = document.getElementById("navbar");
      if (x.className === "nav1") {
        x.className += " responsive";
      } else {
        x.className = "nav1";
      }
    }
  return (
    <div>
        <X>
        <div className='nav1' id='navbar'>
    <ul>
      <li>
        <NavLink to="/" className="Navlist"><button>Home</button></NavLink>
      </li>
      <li>
      <NavLink to="/contactus" className="Navlist"><button>Contact Us</button></NavLink>
      </li>
      <li>
      <NavLink to="/dept" className="Navlist"><button>Dept Login</button></NavLink>
      </li>
    </ul>
  </div>
  </X>
    </div>
  )
}

export default Navbar;
