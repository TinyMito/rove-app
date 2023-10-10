import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export function DataProvider({ children }) {
  const [userData, setUserData] = useState({
    id: null,
    userFirst: null,
    userLast: null,
    userName: null,
    userEmail: null,
    userImg: null,
    loggedIn: false,
    scheduleId: null,
    scheduleStartDate: null,
    scheduleEndDate: null,
    destinationId: null
  });

  useEffect(() => {
    // Fetch user session data and set it in the state
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios
      .get('/api/getUserSession')
      .then((response) => {
        setUserData({
          id: response.data.userId,
          userFirst: response.data.userFirst,
          userLast: response.data.userLast,
          userName: response.data.userAlias,
          userEmail: response.data.userEmail,
          userImg: response.data.userProfile,
          loggedIn: true, // Assuming successful login updates loggedIn
          scheduleId: response.data.scheduleId,
          scheduleStartDate: response.data.scheduleStartDate,
          scheduleEndDate: response.data.scheduleEndDate,
          destinationId: response.data.destinationId
        });
      })
      .catch((error) => {
        console.error('Error getting user data:', error);
      });
  };

  console.log('userData:', userData);

  return (
    <UserContext.Provider value={{ userData, setUserData, fetchUserData }}>
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