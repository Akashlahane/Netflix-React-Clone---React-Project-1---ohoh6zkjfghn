import { createContext, useContext, useState } from "react";
import axios from "axios";
import { getHeaderWithProjectId } from "../utils/config";
import { useEffect } from "react";

export const MovieContext = createContext();

export function MovieProvider(props) {
  const { children } = props;
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [MyMovieSearch, setMyMovieSearch] = useState("");
  const [SearchList, SetSearchList] = useState([]);

  console.log(MyMovieSearch);

  async function fetchMovie() {
    try {
      setLoading(true);
      const config = getHeaderWithProjectId();
      const url = "https://academics.newtonschool.co/api/v1/ott/show?limit=2000";

      const axisResponse = await axios.get(url, config);
      const data = axisResponse.data;
      setLoading(false);
      const { data: listOfMovies1 } = data;
      setMovieList(listOfMovies1);
    } 
    catch (error) {
      console.log("axios errror ");
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <MovieContext.Provider value={{movieList, MyMovieSearch, setMyMovieSearch}}>
      {children}
    </MovieContext.Provider>
  );
}

// this is a hook that can use used in your compoent
// if you do not want to use this then in componet =>  useContext(MusicContext)

export function useMovie() {
  return useContext(MovieContext);
}