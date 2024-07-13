import React, { useContext, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
//import { AiOutlineInfoCircle } from "react-icons/ai";
import Slider from "../components/Slider";
import { MovieContext } from "../Providers/MovieProvider";
import SearchMovies from "../components/SearchComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Netflix() {
  const {myMovieSearch}=useContext(MovieContext);
  const {movieList}=useContext(MovieContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  if(localStorage.getItem("authToken")==null){
    navigate("/login");
  };
  var needSearchOperation=0;
  if(myMovieSearch?.length>0){needSearchOperation=1;}

  window.onstorage = () => {console.log(JSON.parse(window.localStorage.getItem("sampleList"))); };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const notify = () => toast("Feature coming soon");

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      {needSearchOperation===1? <SearchMovies/>:<>
        <div className="hero">
          <img src={backgroundImage} alt="background" className="background-image"/>
          <div className="container">
            <div className="logo">
              <img src={MovieLogo} alt="Movie Logo" />
            </div>
            <div className="buttons flex">
              <button onClick={() => navigate("/player")} className="flex j-center a-center">
                <FaPlay />
                Play
              </button>
              {/*<button className="flex j-center a-center" onClick={notify}>
                <AiOutlineInfoCircle />
               More Info
              </button>*/}
            </div>
          </div>
        </div>
        <Slider movies={movieList} /></>
      }
      <ToastContainer position="top-right" />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
      object-fit:cover;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 60vw;
          height: 100%;
          margin-left: 2.9rem;
        }
      }
      .buttons {
        margin: 5rem 2.6rem;
        gap: 2rem;
        button {
          font-size: 1.5vw;
          gap: 0.4rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 0.3vw;
          padding-right: 0.9vw;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
export default Netflix;