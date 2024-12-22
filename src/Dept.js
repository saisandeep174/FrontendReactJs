import React from 'react'
import styled from 'styled-components'
import {  faHome, faLock, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
const Dept = () => {
  const Dept=styled.div`{
    *{
      margin:0;
      padding:0;
      
    }
    .bg{
      position:realtive;
    }
    
    .center h1{
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid silver;
    }
    .center form{
      padding: 0 40px;
      box-sizing: border-box;
    }
    form .username{
      position: absolute;
      top:20%;
      left:70%;
      border-bottom: 2px solid #adadad;
      margin: 30px 0;
    }
    .txt_field1 input{
      width: 100%;
      padding: 0 5px;
      height: 40px;
      font-size: 16px;
      border: none;
      background: none;
      outline: none;
    }
    .txt_field1 label{
      position: absolute;
      top: 50%;
      left: 5px;
      color: #adadad;
      transform: translateY(-50%);
      font-size: 16px;
      pointer-events: none;
      transition: .5s;
    }
    .txt_field1 span::before{
      content: '';
      position: absolute;
      top: 40px;
      left: 0;
      width: 0%;
      height: 2px;
      background: #2691d9;
      transition: .5s;
    }
    .txt_field1 input:focus ~ label,
    .txt_field1 input:valid ~ label{
      top: -5px;
      color: #2691d9;
    }
    .txt_field1 input:focus ~ span::before,
    .txt_field1 input:valid ~ span::before{
      width: 100%;
    }
    form .password{
      position: absolute;
      top:30%;
      left:70%;
      border-bottom: 2px solid #adadad;
      margin: 30px 0;
    }
    form .captcha{
      position: absolute;
      top:50%;
      left:70%;
      border-bottom: 2px solid #adadad;
      margin: 30px 0;
    }
    form .captcha-num{
      position: absolute;
      top:45%;
      left:70%;
      color:red;
    }
    .header{
      position:absolute;
      top:10%;
      right:10%
    }
    .pass{
      margin: -5px 0 20px 5px;
      color: #a6a6a6;
      cursor: pointer;
    }
    .pass:hover{
      text-decoration: underline;
    }
    input[type="submit"]{
      width: 100%;
      height: 100%;
      padding:10px;
      border: 5px solid;
      background: #2691d9;
      border-radius: 2px;
      font-size: 18px;
      color: #e9f4fb;
      font-weight: 700;
      cursor: pointer;
      outline: none;
    }
    input[type="submit"]:hover{
      border-color: #2691d9;
      transition: .5s;
    }
    
    .login{
      position:absolute;
      top:70%;
      left:70%;
    }
    .Navlist button{
      text-decoration:none;
      position:absolute;
      top:18%;
      right:10%;
   
    
      
      padding:10px;
      border: 5px solid;
      background: #2691d9;
      border-radius: 2px;
      font-size: 18px;
      color: #e9f4fb;
      font-weight: 700;
      cursor: pointer;
      outline: none;
      
  }
    @mediascreen and(max-width:900px){
      .bg{
        position:relative;
      }
      .main{
        position:absolute;
        top:10%;
        left:5%;
        
        
      }
    }
    
    
  }`
  return (
    <div>
      <Dept>
    <div className='bg'>
      <img src='./images/login.jpg' width="100%" height="100%"></img>
      
      <div className='main'>
      <img className='header' src='./images/header.png' width="20%" height="5%"></img>
      <NavLink to="/" className="Navlist"><button>Home</button></NavLink>
      <div class="center">
      
      <form method="post">
        <div className='username'>
        <div class="txt_field1">
          <input type="text" required></input>
          <span></span>
          <label>Username</label>
        </div>
        </div>
        <div className='password'>
        <div class="txt_field1">
          <input type="password" required></input>
          
          <label>Password</label>
        </div>
        
        </div>
        <div className='captcha-num'>
        <h3>3 5 1 7 9 4</h3>
        </div>
        <div className='captcha'>
        <div class="txt_field1">
          <input type="text" required></input>
          
          <label>Captcha</label>
        </div>
        </div>
       
        <div className='login'><input type="submit" value="Login"></input></div>
        
      </form>
    </div>
    </div>

      
    </div></Dept></div>
  )
}

export default Dept;
