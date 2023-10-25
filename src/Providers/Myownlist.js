import { createContext, useContext, useState } from "react";
import axios from "axios";
import { getHeaderWithProjectId } from "../utils/config";
import { useEffect } from "react";

export const MyMovieListContext = createContext();

export function MyMovieProvider(props) {
  const { children } = props;
  const [MyMovieList, setMyMovieList] = useState([]);
  
  return (
    <MyMovieListContext.Provider value={{MyMovieList,setMyMovieList}}>
      {children}
    </MyMovieListContext.Provider>
  );
}
