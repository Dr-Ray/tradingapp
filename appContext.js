import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
 const [user, setUser] = useState({});
 const [loggedIn, setLoggedIn] = useState(false);

 return (
   <AppContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
     {children}
   </AppContext.Provider>
 );
};

export { AppContext, AppContextProvider };