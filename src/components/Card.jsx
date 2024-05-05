import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import video from "../assets/video.mp4";
import { useContext } from "react";
import { UserLikedListContext } from "../Providers/UserLikedList";

export default React.memo(function Card({ movieData, isLiked = false }) {
  const {userLikedList, setUserLikedList}=useContext(UserLikedListContext)
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const MyMovieListids=userLikedList.map((mov)=> mov._id);

  if(MyMovieListids.includes(movieData._id)){ isLiked=true;}

  const mylistoperation =  () => {
   var isMyMovie = userLikedList.filter((movie)=>{return movie._id===movieData._id})
   if(isMyMovie.length===0){
     setUserLikedList([...userLikedList,movieData])  
   }
   else{
      setUserLikedList(userLikedList.filter((movie)=>{
        return movie._id !== movieData._id;
      }))
    }
  };

  return (
    <Container onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        
      <img src={movieData.thumbnail} alt="card" onClick={() => navigate("/player")}/>
    
      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img src={movieData.thumbnail} alt="card" onClick={() => navigate("/player")}/>
            <video src={video} autoPlay={true} loop muted onClick={() => navigate("/player")}/>
          </div>
          <div className="info-container flex column">
            <h3 className="name" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp title="Play" onClick={() => navigate("/player")}/>
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? 
                  (<BsCheck title="Remove from List" onClick={() => mylistoperation()}/>) : 
                  (<AiOutlinePlus title="Add to my list" onClick={()=>mylistoperation()} />)
                }
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {  <li>{movieData.keywords[0]}</li>}
                {  <li>{movieData.keywords[1]}</li>}
                {  <li>{movieData.keywords[2]}</li>}
              </ul>
            </div>
          </div>
        </div>
      )}

    </Container>
  );
});

const Container = styled.div`
  width: 140px;
  height: 149px;
  
  @media (min-width: 768px) {
    width: 165px;
    height: 176px;
    
  }

  @media (min-width: 992px) {
    width: 178px;
    height: 190px;
  }

  @media (min-width: 1200px) {
    width: 194px;
    height: 208px;
  }

  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width:100%;
    height: 100%;
    object-fit:cover
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -5%;
    left: -25%;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;


