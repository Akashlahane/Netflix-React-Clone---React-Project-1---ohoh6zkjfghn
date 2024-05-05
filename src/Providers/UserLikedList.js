import { createContext, useState } from "react";

export const UserLikedListContext = createContext();

export function UserLikedMovieProvider(props) {
  const { children } = props;
  const [userLikedList, setUserLikedList] = useState([]);
  
  return (
    <UserLikedListContext.Provider value={{userLikedList, setUserLikedList}}>
      {children}
    </UserLikedListContext.Provider>
  );
}
