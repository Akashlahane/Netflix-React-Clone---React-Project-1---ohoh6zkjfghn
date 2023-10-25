import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import { MovieContext } from "../Providers/MovieProvider";
import SearchMovies from "../components/SearchComponent";

function MoviePage() {
  const {movieList}=useContext(MovieContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [genreValue, setGenre]=useState("romance");
  const [movieListByGenre,setMovieByGen]=useState([]);
  const {MyMovieSearch}=useContext(MovieContext);

  var b=0;

if(MyMovieSearch?.length>0){
  b=1;
}
 
  const genres = [
    {"id":28,"name":"romance"}, {"id":12,"name":"mystery"}, {"id":16,"name":"comedy"}, {"id":35,"name":"suspense"},
    {"id":80,"name":"adventure"},{"id":99,"name":"action"},{"id":18,"name":"revenge"},{"id":10751,"name":"sci-fi"},
    {"id":14,"name":"darkness"},{"id":36,"name":"thriller"},{"id":27,"name":"epic"},{"id":10402,"name":"horror"},
    {"id":9648,"name":"love"},{"id":10749,"name":"revenge"},{"id":878,"name":"drama"},{"id":10770,"name":"survival"},
    {"id":53,"name":"betrayal"},{"id":10752,"name":"fantasy"},{"id":37,"name":"magic"} ]


    const handleCallback = (childData) =>{
      console.log(childData);
      setGenre(childData);
    }
  
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
    
  };



     useEffect(()=>{
      setMovieByGen(movieList.filter((moviee)=>{return moviee.keywords.includes(genreValue)}));
     },[genreValue,movieList])

   

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      {b===1?<SearchMovies/>:<>
      <div className="data">
        <SelectGenre genres={genres} type="movie" parentCallback= {handleCallback} />
        {movieListByGenre.length ? <Slider movies={movieListByGenre} /> : <NotAvailable />}
      </div></>
    }
    </Container>
  );
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default MoviePage;