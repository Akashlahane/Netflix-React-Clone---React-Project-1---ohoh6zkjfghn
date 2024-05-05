import { createContext, useContext, useState } from "react";
import axios from "axios";
import { getHeaderWithProjectId } from "../utils/config";
import { useEffect } from "react";

export const MovieContext = createContext();

export function MovieProvider(props) {
  const { children } = props;
  const [movieList, setMovieList] = useState([]);
  const [myMovieSearch, setMyMovieSearch] = useState("");

  async function fetchMovie() {
    try {
      const config = getHeaderWithProjectId();
      const url = "https://academics.newtonschool.co/api/v1/ott/show?limit=2000";
      const axisResponse = await axios.get(url, config);
      const data = axisResponse.data;
      const { data: listOfMovies1 } = data;
      setMovieList(listOfMovies1);
    } 
    catch (error) {
      console.log("axios errror ");
    }
  }

  useEffect(() => {fetchMovie();}, []);

  return (
    <MovieContext.Provider value={{movieList, myMovieSearch, setMyMovieSearch}}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  return useContext(MovieContext);
}