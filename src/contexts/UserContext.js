// // src/contexts/UserContext.js
// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // null when no user is logged in

//   const login = (userData) => {
//     setUser(userData);
//     // Here, integrate with backend to verify user credentials
//   };

//   const logout = () => {
//     setUser(null);
//     // Handle logout logic, like clearing tokens
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  // Example hardcoded user data
  const hardcodedUser = {
    id: '123',
    username: 'John Doe',
    // Add any other user properties you need
  };

  // Initialize the user state with the hardcoded user instead of null
  const [user, setUser] = useState(hardcodedUser);

  const login = (userData) => {
    setUser(userData);
    // Here, integrate with backend to verify user credentials
  };

  const logout = () => {
    setUser(null);
    // Handle logout logic, like clearing tokens
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
