import React, {useState } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { UserLikedListContext } from "../Providers/UserLikedList";
import { MovieContext } from "../Providers/MovieProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserListedMovies() {
  const {userLikedList}=useContext(UserLikedListContext)
  const [isScrolled, setIsScrolled] = useState(false);
  const {myMovieSearch,movieList}=useContext(MovieContext);
  var list1=userLikedList;

  if(myMovieSearch?.length>0){
    list1=movieList.filter((movie)=>movie.title.toLowerCase().includes(myMovieSearch));
    console.log(list1);
  }
 
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return(
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        {myMovieSearch?.length===0 && <h1>My List</h1>}

        {list1.length===0 ? <div className="empty-list flex">List is Empty</div> : 
          <div className="grid flex">
            {list1.map((movie, index) => {
              return (
                <Card movieData={movie} index={index} key={movie._id} isLiked={false} />
              );
            })}
          </div>
        }
      </div>
      <ToastContainer position="top-right" />
    </Container>
  );
}

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
    .empty-list {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60vh; /* Adjust this height according to your needs */
      font-size: 3.5rem;
      font-weight: bold;
      color: #555; /* Adjust the color to your preference */
      width: 100%;
    }
  }
`;