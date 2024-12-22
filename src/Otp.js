import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import { NavLink } from 'react-router-dom';
const Weboptions = () => {
    const Y=styled.div`{
        *{
            margin:0;
            padding:0;
            background-image: url(./images/background.png);
            font-family: 'Times New Roman', Times, serif;
            font-size: medium;
          }
          .main{
            background-color:#029e76;
          }
          
        .labels{
          
            margin:0rem 2rem 0rem 2rem;
            background-color:#EEEEEE;
           
            

            
        }
        
        .heading{
          width:100%;
          background-color:#029e76;
padding:1rem;
font-size:large
margin:5rem;
        }
        button{
          padding:0.7rem;
          margin:3rem;
          border:0;
          background: rgb(146,27,144);
background: linear-gradient(90deg, rgba(146,27,144,1) 0%, rgba(133,135,216,1) 0%, rgba(19,124,219,1) 97%);
border-radius:5px;
        }
        label{
          padding-top:2rem;
          
        }
        input{
          border:0.1px solid black;
          border-radius:5px;
          padding:0.5rem
        }
        .hno{
        
          background-color:#029e76;
          padding:1rem 6rem 1rem 5rem;
          
        }
        .dob{
          margin-top:1rem;
          
        }
        .dob label{
          background-color:#029e76;
          padding:1rem 5rem 1rem 5rem;
         
        }
        .text{
          font-size:large;
          padding-bottom:50px;
        }
        .div1{
            padding-top:5rem;
        }
        
    }`
  return (
    <div>
        <Header/>
        <Y>
            <div className='main'>
        <div className='div'>
        
            <form className='labels'>
              <div className='heading'><p><center><b>APEAPCET Weboptions </b></center></p></div>
              
                <div className='div1'>
                <center><div ><label className='hno'>Mobile No.</label><input type="text" placeholder='XXXXXXX9999' disabled/></div>
                <div className='dob'><label >Enter the OTP</label><input type="text"/></div>
                <div> <button>Login</button></div>
                </center>
                </div>
            </form>
           
        </div>
        </div>
      </Y>
      <Footer/>
    </div>
  )
}

export default Weboptions;
