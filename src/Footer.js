import React from 'react';
import Navbar from './Navbar';

import styled from "styled-components";



const Footer = () => {
    const Footer=styled.div`{
      *{
        margin:0;
        padding:0;
      }
        .footer{
          display:flex;
          flex-direction:row;
          
          color:white;
          justify-content:space-between;
          background-color:green;
        }
       
       
    }`;
  return (
    <div>
      <Footer>
<div className='footer'>
<h5 >Copy Rights Reserved with APSCHE.</h5>
    <h5>Designed and Developed by <img src='./images/logo-3.png' alt='png' width="40%" height="60%"></img></h5>
</div>
    
      </Footer>
      </div>
    
  )
}

export default Footer;
