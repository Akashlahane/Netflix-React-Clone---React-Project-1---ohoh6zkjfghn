import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  // component -> provider
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const children = props.children;

  // we create new user
  function signUpContext(token,userName) {
    setUser(userName);
    setToken(token);
  }

  // this is for login
  function signInContext(token, userName) {
    setUser(userName);
    setToken(token);
  }

  // this is for logout
  function signOutContext() {
    setUser(null);
    setToken(null);
  }
  
  const value = {isUserLoggedIn: !!user, user, token, signUpContext, signInContext, signOutContext,};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
