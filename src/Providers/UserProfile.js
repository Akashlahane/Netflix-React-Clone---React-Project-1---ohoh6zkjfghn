import { createContext, useState } from "react";

export const UserProfileContext = createContext();

export function UserProfileProvider(props){
  const { children } = props;
  const [user, setMyuser] = useState(["Guest"]);
  const [activePic, setActivePic]=useState(0);

  return (
    <UserProfileContext.Provider value={{user, setMyuser, activePic, setActivePic}}>
      {children}
    </UserProfileContext.Provider>
  );
}