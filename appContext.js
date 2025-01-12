import { createContext, useState } from 'react';

const AppContext = createContext(); 

const AppContextProvider = ({ children }) => {
 const [user, setUser] = useState({});
  const [myBal, seeBal] = useState(true);
 const [loggedIn, setLoggedIn] = useState(false);

 return (
   <AppContext.Provider value={{ user, setUser, loggedIn, setLoggedIn, myBal, seeBal }}>
     {children}
   </AppContext.Provider>
 );
};

export { AppContext, AppContextProvider };