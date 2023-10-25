import { createContext, useContext, useState } from "react";
import axios from "axios";
import { getHeaderWithProjectId } from "../utils/config";
import { useEffect } from "react";
import { MovieContext } from "./MovieProvider";

export const MySearchContext = createContext();

export function MyMovieSearchProvider(props) {
  const { children } = props;
  const [MyMovieSearch, setMyMovieSearch] = useState(" ");
  const [SearchList, SetSearchList] = useState([]);
  
  
  return (
    <MySearchContext.Provider value={{MyMovieSearch,setMyMovieSearch,SearchList,SetSearchList}}>
      {children}
    </MySearchContext.Provider>
  );
}
