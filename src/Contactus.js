import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';


const Contactus = () => {
  const Contactus= styled.div`{
    *{
      margin:0;
      padding:0;
      background-image: url(./images/background.png);
      
    }
      .images{
        display:flex;
        flex-wrap:no-wrap;
          justify-content: space-evenly;
      }
      @media screen and (max-width:900px){
        .images{
          display: flex;
          flex-wrap:wrap;
          justify-items: center;
        }
        
      }
  }`
  return (
    <div>
      <Header/>
      <Contactus>
      <div className='images'>
        <div className='img1'>
          <img src='./images/c1.png' width="100%" height="100%"></img>
        </div>
        <div className='img2'>
          <img src='./images/c2.png' width="100%" height="100%"></img>
        </div>
        
      </div>
      
      </Contactus><Footer/>
    
  </div>
  )
}

export default Contactus;

