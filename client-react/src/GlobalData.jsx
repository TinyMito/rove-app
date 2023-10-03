import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function DataProvider({ children }) {
  const [userData, setUserData] = useState({
    id: 1,
    userName: 'Kevin',
    userImg: 'avatar00.png',
    loggedIn: true,
    scheduleId: null,
    scheduleStartDate: null,
    scheduleEndDate: null,
    googleApiPlaceName: null,
    googleApiPlaceId: null

  });
  
  console.log(userData)
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