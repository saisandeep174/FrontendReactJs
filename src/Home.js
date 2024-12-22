import React from 'react';
import styled from "styled-components";
import Header from './Header';
import Footer from './Footer';
import { faAngleDoubleRight, faCalendar, faInfoCircle, faPieChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

const Home = () => {
    const Home=styled.div`{
      *{
        margin:0;
        padding:0;
        background-image: url(./images/background.png);
      }
        .header{
          display: flex;         
        }
        img1{
          width: 70%;
          height: 70%;
        }
        .maindiv{
          display: flex;
          flex-wrap:no-wrap;
          justify-content: space-evenly;
          background-color:#029e76;
        }
        ul{
          list-style-type:none;
        }
        li{
          word-wrap:break;
        }
        .main1{
          align-items: center;
          padding: 0rem 2rem 2rem 2rem;
          margin: 2rem;
          
          background-color:white;
          border-radius:10px; 
        }
        a {
          text-decoration:none;
          color:black;
        }
        .main2{
          align-items: center;
          padding: 0rem 4rem 4rem 4rem;
          margin: 2rem;
          border-radius:10px; 
          background-color:white;
        }
        .main3{
          align-items: center;
          padding: 0rem 1rem 5rem 1rem;
          margin: 2rem;
          border-radius:10px; 
          word-wrap:break;
          background-color:white;
        }
        .icon{
          width:20%;
          height:50%;
          padding-bottom:0.5rem;
          padding-top:0.5rem;
        }
        .main3 .icon{
          width:15%;
          height:30%;
          padding-bottom:0.5rem;
          padding-top:0.5rem;
        }
        .icon1{
          width:4%;
          height:4%;
          padding:0.5%;
          color:white;
          background-color:#067366;
        }
        .main3 .icon1{
          width:2%;
          height:2%;
          padding:0.5%;
          color:white;
          background-color:#067366;
        }
        
        .main3 li:hover{
          color:red;
        }
        @media screen and (max-width:900px){
          .maindiv{
            display: flex;
            flex-wrap:wrap;
            justify-items: center;
          }
        }       
    }`;
  return (
    <div>
      <Header/>
      <div className='sty'>
        
        <Home>
        <div>
    <div className="maindiv">
    <div className="main1">   
    <center>
    <FontAwesomeIcon className='icon' icon={faPieChart} /> </center>
    
    <div>
    <center>Forms</center>
        <ul>  
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} />  <NavLink to="/application" className="Navlist"> Print Verified Application</NavLink></li>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} /> <NavLink to="/payment" className="Navlist"> Know your Payment Status</NavLink></li>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} /> <NavLink to="/weboptions" className="Navlist"> Web Options</NavLink></li>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} />  <NavLink to="/registration" className="Navlist">Registration</NavLink></li>      

        </ul>
        </div>       
    </div>
    <div className="main2">
    <center><FontAwesomeIcon className='icon' icon={faInfoCircle} /> </center>     
    <center>Important Bulliten</center>
        <ul>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} /><NavLink to="/institute" className="Navlist"> Institute Profile</NavLink></li>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} /><NavLink to="/courses" className="Navlist"> List of Courses</NavLink> </li>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} /><a href="./images/pdfs.pdf" download> User Manual</a> </li>         
        </ul>
    </div>
    <div className="main3"> 
    <center><FontAwesomeIcon className='icon' icon={faCalendar} /> </center>       
    <center>Important dates</center>
        <ul>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} />  Payment of Processing Fee online: 02.12.2022 to 03.12.2022</li>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} />  Certificates verification at HLCs( Offline)/Online: 03.12.2022 to 04.12.2022</li>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} />  Option Entry: 03.12.2022 to 04.12.2022</li>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} />  Change of Options: 04.12.2022</li>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} />   Allotment of Seats: 06.12.2022</li>
          <li><FontAwesomeIcon className='icon1' icon={faAngleDoubleRight} />  Self Reporting & Reporting at college: 07.12.2022 to 09.12.2022</li>
        </ul>
    </div>
    
    </div>
    
</div>

    
      </Home>
      </div>
      <Footer/>
    </div>
  )
}
export default Home;
