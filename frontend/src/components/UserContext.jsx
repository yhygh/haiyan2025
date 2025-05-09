import React, { createContext, useState, useEffect } from "react";
import useStoredToken from "../services/useStoredToken";
import { setTokenHeader } from "../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { tokenState, removeToken } = useStoredToken("jwtToken");

  const [user, setUser] = useState(null);
  // Check if user info exists in localStorage when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user state if it exists
    }
  }, []);

  // update the user (e.g., after login)
  const updateUser = (newUser) => {
    setUser({ ...newUser });
    localStorage.setItem("username", newUser.username);
  };

  // Function to clear the user (e.g., after logout)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("username"); // Remove user from localStorage
    removeToken("jwtToken");
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
