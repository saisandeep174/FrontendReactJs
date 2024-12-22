import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
const Registration = () => {
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
            padding-bottom:400px;
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
          border-radius:5px;
        }
        label{
          padding-top:2rem;
          padding-right:10rem;
        }
        input{
          border:0.1px solid black;
          border-radius:5px;
          padding:0.5rem
        }
        .payment{
          position:absolute;
            bottom:0%;
            left:5%;
        }
        @media screen and (max-width:900px){
          .payment{
            position:absolute;
              bottom:0%;
              left:5%;
          }
        }     
        
    }`
  return (
    <div>
        <Header/>
        <Y>
            <div className='main'>
        <div className='div'>
        
            <form className='labels'>
              <div className='heading'><p><center><b>APEAPCET REGISTRATION</b></center></p></div>
                <label>APEAPCET HallTicket No.<br></br><input type="text"/></label>                
                <label>Aadhar No.<br></br><input type="text"/></label>
                <label>Name of the Candidate<br></br><input type="text"/></label>
                <label>Mobile Number<br></br><input type="text"/></label>
                <label>Caste Category<br></br><input type="text"/></label>
                <label>Differently Abled<br></br><input type="text"/></label>
                <label>Amount<br></br><input type="text" placeholder='1500' disabled/></label>
                <div className='payment'>
                  
                
                <p>Payment Mode</p>
                <input type="radio" id="age1" name="age" value="30"/>
                <label for="age1">Debit Card</label><br/>
                <input type="radio" id="age2" name="age" value="60"/>
                <label for="age2">Credit Card</label><br/>  
                <input type="radio" id="age3" name="age" value="100"/>
                <label for="age3">Net Banking(SBI)</label><br></br>
                <input type="radio" id="age3" name="age" value="100"/>
                <label for="age3">Net Banking(HDFC)</label><br></br>
                <input type="radio" id="age3" name="age" value="100"/>
                <label for="age3">Net Banking(ICICI)</label><br></br>
                <input type="radio" id="age3" name="age" value="100"/>
                <label for="age3">Net Banking(Others)</label><br></br>
                </div>
                <div><button>Submit</button></div>
            </form>  
                     
        </div>
        </div>
      </Y>
      <Footer/>
    </div>
  )
}
export default Registration;
