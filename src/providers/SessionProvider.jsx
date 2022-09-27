import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import requestApi from "../services/API";

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [loginInfo, setLoginInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState("");

  function storeSession(data) {
    const { userId, token } = data;

    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);

    setLoginInfo(data);
  }

  function checkStoredSession() {
    const userId = localStorage.getItem("userId");
    const token  = localStorage.getItem("token");

    return userId && token;
  }

  function initSession() {
      const userId = localStorage.getItem("userId");
      const token  = localStorage.getItem("token");
      
      setLoginInfo({ userId, token });
      
      if (userId && token) setIsLoggedIn(true);
      
      return userId && token;
  }

  function logout () {
    localStorage.removeItem("userId")
    localStorage.removeItem("token")
    setLoginInfo({})
    setIsLoggedIn(false)
  }
    
  async function login(data) {
    const loginResp = await requestApi.post("/login", data);

    if (loginResp.status !== 200) throw new Error(loginResp.message);

    storeSession(loginResp.data);
    setIsLoggedIn(true);

    return loginResp;
  }

  return (
    <SessionContext.Provider
      value={{
        login,
        logout,
        loginInfo,
        initSession,
        isLoggedIn,
        checkStoredSession
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
