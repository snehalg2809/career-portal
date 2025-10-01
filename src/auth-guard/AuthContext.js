// AuthContext.js
import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const sessionDuration = 30 * 60 * 1000; // 30 mins
  const checkIntervalRef = useRef(null);

  const refreshSession = useCallback(() => {
    if (isLoggedIn) {
      const expirationTime = Date.now() + sessionDuration;
      sessionStorage.setItem("sessionExpiration", expirationTime.toString());
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const storedStatus = sessionStorage.getItem("isLoggedIn");
    const expirationTime = sessionStorage.getItem("sessionExpiration");

    if (storedStatus && expirationTime) {
      const now = Date.now();
      if (now < parseInt(expirationTime)) {
        setIsLoggedIn(storedStatus === "true");
      } else {
        logout();
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const handleUserActivity = () => refreshSession();
      window.addEventListener("mousemove", handleUserActivity);
      window.addEventListener("keydown", handleUserActivity);
      window.addEventListener("click", handleUserActivity);
      return () => {
        window.removeEventListener("mousemove", handleUserActivity);
        window.removeEventListener("keydown", handleUserActivity);
        window.removeEventListener("click", handleUserActivity);
      };
    }
  }, [isLoggedIn, refreshSession]);

  useEffect(() => {
    if (isLoggedIn) {
      checkIntervalRef.current = setInterval(() => {
        const expirationTime = sessionStorage.getItem("sessionExpiration");
        if (expirationTime && Date.now() >= parseInt(expirationTime)) {
          logout();
        }
      }, 5000);
      return () => clearInterval(checkIntervalRef.current);
    }
  }, [isLoggedIn]);

  const login = (username, password) => {
    const storedUsername = sessionStorage.getItem("username");
    const storedPassword = sessionStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
      sessionStorage.setItem("isLoggedIn", "true");
      const expirationTime = Date.now() + sessionDuration;
      sessionStorage.setItem("sessionExpiration", expirationTime.toString());
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = useCallback(() => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("sessionExpiration");
    sessionStorage.clear();
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
