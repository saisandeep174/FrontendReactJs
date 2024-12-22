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
        .hno{
          background-color:#029e76;
          padding:1rem 2rem 1rem 2rem;
          
        }
        .Navlist {
          text-decoration: none;
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
        
        
    }`
  return (
    <div>
        <Header/>
        <Y>
            <div className='main'>
        <div className='div'>
        
            <form className='labels'>
              <div className='heading'><p><center><b>APEAPCET Weboptions </b></center></p></div>
              <div className='text'>Important Note:<br></br>
1.All the candidates are instructed to check the details in "print verified Application" link before proceeding for option entry. If changes are required,attend at selected
  HLCs to make changes;then proceed for option entry.If no changes are required they can directly proceed for option entry by clicking "web options" link.Once the options
  are exercised,data cannot be modified.<br></br>
2.Candidates save the options and revisist web options page to add/modify the options or to change the order of sequence before the last date.<br></br>
3.Data once freezed will not be given for edit under any circumstances.<br></br>
4.If the exercised options are ssaved and not freezed,last saved options will be considered for allotment of seats.<br></br></div>
                <div className='div'>
                <center><div ><label className='hno'>APEAPCET HallTicket No.</label><input type="text" required/></div>
                <div className='dob'><label >Date of Birth</label><input type="text" placeholder='DD/MM/YYYY' required/></div>
                <div> <button><NavLink to="/otp" className="Navlist"> Submit</NavLink></button></div>
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
