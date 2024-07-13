import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../Providers/MovieProvider";
import dropdown from "../assets/dropdown.png";
import Menu2 from "./Menu_dropdown.jsx";
import SigoutPopup from "./SignoutPopup.jsx"
import { UserProfileContext } from "../Providers/UserProfile";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

export default function Navbar({ isScrolled }) {
  const {setMyMovieSearch}=useContext(MovieContext);
  const {activePic}=useContext( UserProfileContext);
  const navigate=useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const [ishover, sethover]=useState(false);
  const [inputHover2, setInputHover2] = useState(false);
  let profilePhoto=user1;
  if(activePic==='0') profilePhoto=user1;
  if(activePic==='1') profilePhoto=user2;
  if(activePic==='2') profilePhoto=user3;
  const links = [{ name: "Home", link: "/" }, { name: "Movies", link: "/movies" }, { name: "My List", link: "/mylist" },];

  function debounce(fn, delay) {
    let timer
    return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(()=>fn(...args), delay)
    }
  }

  return (
    <>
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="Logo" onClick={() => navigate("/")}/>
          </div>
          <ul className="links flex">
            {links.map(({ name, link }) => {return (<li key={name}><Link to={link}>{name}</Link></li>);})}
          </ul>
          <div className="bro" onClick={()=>{sethover(()=>!ishover)}}>Browse <img src={dropdown} alt="menu_dropdown"/> </div>
          {ishover && <div className="menu2"><Menu2/></div>}
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              className="sear"
              onFocus={() => setShowSearch(true)}
              onBlur={() => {if (!inputHover){setShowSearch(false);}}}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={(event) => {
                setShowSearch(false);
                setInputHover(false);
                event.target.value="";
                setMyMovieSearch(()=>{return "";})
              }}
              onChange={debounce((e)=>{setMyMovieSearch(()=>{return e.target.value.toLowerCase()})},500)}
            />
          </div>
          <button className="log">
            <img src={profilePhoto} title="logout" alt="logout" width="32px" height="32px"  onMouseEnter={() => setInputHover2(true)}
              onMouseLeave={() => setInputHover2(false)} 
            />
          </button>
        </div>
      </nav>

     <div className="Signpop" onMouseEnter={() => setInputHover2(true)} onMouseLeave={() => setInputHover2(false)}>
        {inputHover2 && <SigoutPopup/>}
     </div>
    </Container>
    </>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    z-index:1;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 0 2.6rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 1.5rem;
      .brand {
        img {
          height: 3.7vw;
          width: 6vw;
          min-width: 62px;
          min-height:38px;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
           
          }
        }
      }

      @media (max-width: 885px) {
        .links{
          width:0rem;
          overflow: hidden;
        }
        

        img{
          height: 26px;
          width: 36px;
        }
      }
      
      @media (min-width: 885px) {
        .bro{
          width:0rem;
         overflow: hidden;
         position: relative;
         left: -15px;
        }
        .menu2{
          display: none;
        }
      }

      @media (max-width: 885px) {
        .bro{
         position: relative;
         left: -35px;
        }
        .bro img{
          width: 26px;
          height: 15px;
          position: relative;
          top: 7px;
        }
      }

   

    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }

      @media (max-width: 400px) {
        .search{
          width:0rem;
          overflow: hidden;
      
        }
        .sear{
          width:0rem;
          overflow: hidden;
        }
      }

      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }

  .Signpop
  {
  position: fixed;
  right:20px;
  top: 1.5px;
  z-index:10000;
 }
`;




