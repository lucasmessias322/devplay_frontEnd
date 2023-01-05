import React, { createContext, useEffect, useState } from "react";
import useStorage from "../utils/useStorage";
import { RemoveStorage } from "../utils/storageFunctions";

const initialState = {
  token: String,
  currentUserData: Object,
  setCurrentUserData: Function,
  setToken: Function,
  logout: Function,
};

export const AuthContext = createContext(initialState);

export default function AuthProvider(props) {
  const [state, setState] = useState(initialState);
  const [token, setToken] = useStorage("token");
  const [currentUserData, setCurrentUserData] = useStorage("currentUserData");

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }

  function logout() {
    setToken("");
    setCurrentUserData("");
    RemoveStorage("token");
    RemoveStorage("currentUserData");
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        setCurrentUserData,
        currentUserData,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
