import { createContext, useState, useEffect, useCallback } from "react";
import axios from "./axiosInstance";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get("/me");
      setUser(res.data?.user ?? null);
    } catch (err) {
      setUser(null);
    } finally {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = async (username, password) => {
    setAuthLoading(true);
    setError(null);

    try {
      await axios.post("/login", { username, password });
      await fetchUser();

      return { success: true };
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.response?.data || err.message;
      setError(message);
      return { success: false, error: message };
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    setAuthLoading(true);
    setError(null);
    try {
      await axios.post("/logout");
      setUser(null);
      return { success: true };
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.response?.data || err.message;
      setError(message);
      return { success: false, error: message };
    } finally {
      setAuthLoading(false);
    }
  };

  const value = {
    user,
    loading,
    authLoading,
    error,
    login,
    logout,
    fetchUser,
    isAuthenticated: !!user,
  };

  return;
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
