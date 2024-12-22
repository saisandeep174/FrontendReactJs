import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Application = () => {
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
            display:flex;
            padding-bottom:300px;
            flex-wrap:wrap;
            justify-content:space-evenly
          }
        .heading{
          width:100%;
          background-color:#029e76;
          padding:1rem;
          font-size:large
        }
        button{
          padding:0.7rem;
          margin:3rem;
          border:0;
          background-color:#029e76;
        }
        label{
          padding-top:2rem;
        }
        input{
          border:0.1px solid black;
          border-radius:5px;
          padding:0.5rem
        }
        
    }`
  return (
    <div>
        <Header/>
        <Y>
            <div className='main'>
        <div className='div'>
        
            <form className='labels'>
              <div className='heading'><p><center><b>APEAPCET REGISTRATION PRINT</b></center></p></div>
                <label>APEAPCET Application Number<br></br><input type="text"/></label>
                
                <label>Date of Birth<br></br><input type="text"/></label>
                <div> <button>Submit</button></div>
                
            </form>
           
        </div>
        </div>
      </Y>
      <Footer/>
    </div>
  )
}

export default Application;
