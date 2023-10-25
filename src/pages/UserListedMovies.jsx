import React, {useState } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { MyMovieListContext } from "../Providers/Myownlist";
import { MovieContext } from "../Providers/MovieProvider";

export default function UserListedMovies() {
  const {MyMovieList}=useContext(MyMovieListContext)
  const [isScrolled, setIsScrolled] = useState(false);
  const {MyMovieSearch,movieList}=useContext(MovieContext);
  
  var list1=MyMovieList;

  if(MyMovieSearch?.length>0){
    console.log("gggg",MyMovieSearch);
    list1=movieList.filter((movie)=>movie.title.toLowerCase().includes(MyMovieSearch));
    console.log(list1);
  }
 
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

 
  /*const value=localStorage.getItem("authToken");
   const [movieList2, setMovieList2] = useState([]);

  var requestOptions = {
    method: 'GET',
    headers: {"Authorization":`Bearer ${value}`,
              "projectID": "f104bi07c490" },
   
  };

  async function fetchMovie() {
    try {
      console.log(value);
      const url = "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
      const axisResponse = await axios.get(url,requestOptions);
      const data = axisResponse.data;
      console.log("hi zzzzz",data);
      const { data: listOfMovies1 } = data;
      setMovieList2(listOfMovies1);
    } 
    catch (error) {
      console.log("axios errror ");
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);*/

  return (
    
    <Container>
      <Navbar isScrolled={isScrolled} />
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