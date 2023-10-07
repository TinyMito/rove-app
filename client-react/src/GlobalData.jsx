import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function DataProvider({ children }) {
  const [userData, setUserData] = useState({
    id: 1,
    loggedIn: true // <- testing only

  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function globalData() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Error Global Data');
  }
  return context;
}