import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { useContext } from "react";
import { MovieContext } from "../Providers/MovieProvider";


export default function SearchMovies() {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const {MyMovieSearch,movieList}=useContext(MovieContext);
  
  var list1=movieList.filter((movie)=>movie.title.toLowerCase().includes(MyMovieSearch));

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <div className="content flex column">
        {MyMovieSearch?.length===0 && <h1>My List</h1>}
        <div className="grid flex">
          {list1.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie._id}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
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
  }
`;