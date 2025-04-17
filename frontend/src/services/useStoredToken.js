import { useState } from "react";
import {
  deleteLocalStorage,
  readLocalStorage,
  writeLocalStorage,
} from "./localStorage";
import { setTokenHeader } from "./api";

// since I (the admin) am the only one using this feature, it's
// relatively safe to use localStorage
const useStoredToken = (key) => {
  const [tokenState, setTokenState] = useState(readLocalStorage(key, ""));

  const setToken = (newState) => {
    writeLocalStorage(key, newState);
    setTokenState(newState);
    setTokenHeader(newState);
  };

  const removeToken = (key) => {
    deleteLocalStorage(key);
    setTokenState(null);
    setTokenHeader(false);
  };

  return { tokenState, setToken, removeToken };
};

export default useStoredToken;
