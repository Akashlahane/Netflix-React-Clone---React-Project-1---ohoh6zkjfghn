import React, { useContext, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Slider from "../components/Slider";
import { MovieContext } from "../Providers/MovieProvider";
import SearchMovies from "../components/SearchComponent";


function Netflix() {

  const {MyMovieSearch}=useContext(MovieContext);
  const {movieList}=useContext(MovieContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

 if(localStorage.getItem("authToken")==null){
    navigate("/login");
  };

 
console.log(localStorage.getItem("authToken"));

var b=0;

if(MyMovieSearch?.length>0){
  b=1;
}

window.onstorage = () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
};

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />

      {b===1? <SearchMovies/> :<>
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button
              onClick={() => navigate("/player")}
              className="flex j-center a-center"
            >
              <FaPlay />
              Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movieList} /></>}
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
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 3vw;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 0.5vw;
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