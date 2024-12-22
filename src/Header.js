import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";



const Header = () => {
    const Header=styled.div`{
      *{
        margin:0;
        padding:0;
        background-image: url(./images/background.png);
      }
        .header{
          display: flex;
                   
        }
       
        @media screen and (max-width:900px){
          img{
            width:100%;
            height:100%;
          }
        }  
        
       
    }`;
  return (
    <div>
      <div className='sty'>
        <div className='header'><Navbar/></div><Header>
        <img src='./images/header.png' alt='png' ></img></Header>
        <div>
    
    
</div>

     
      
      </div>
    </div>
  )
}

export default Header;
