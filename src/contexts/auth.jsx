import { createContext, useEffect, useState } from "react";

import api from "../services/api";
import { handleApiError } from "../utils/handleApiErros";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);	
  const [token, setToken] = useState();

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    const localUser = JSON.parse(localStorage.getItem("user"));

    const verifyToken = () => {
      if (token) {
        setLoading(true);
        api.get("/user/token", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            if (response.data.email === localUser.email) {
              setToken(token);
              setUser(response.data);
            } else {
              signout();
            }
          } else {
            signout();
          }
        })
        .catch(() => {
          signout();
        })
        .finally(() => {
          setLoading(false);
        });
      } else {
        signout();
        setLoading(false); 
      }
    };

    verifyToken();
  }, []);

  const signin = async (signinData) => {
    try {
      const response = await api.post("/auth/login", signinData);
      const data = response.data;
      if (response.status === 200) {
        localStorage.setItem("user_token", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user); 
        return;
      } else {
        return {error: data.message};
      }
    } catch (error) {
      return {error: error.response.data.message};
    }
  };

  const signup = async (signupData) => {
    try {
      const response = await api.post("/user", signupData);
      const data = response.data;
      if (response.status === 201) {
        return;
      } else {
        return {error: data.message}; 
      }
    } catch (error) {
      return {error: error.response.data.message};
    }
  };

  const signout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, signed: !!user, signin, signup, signout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
