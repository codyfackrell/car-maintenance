import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import axios from "./axiosInstance";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get("/auth/me");
      setUser(res.data?.user ?? null);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const register = async (firstName, lastName, username, password) => {
    setAuthLoading(true);
    setError(null);

    try {
      await axios.post("/auth/register", {
        firstName,
        lastName,
        username,
        password,
      });
      return { success: true };
    } catch (err) {
      const message =
        err?.response?.data?.error || err?.response?.data || err.message;
      setError(message);
      return { success: false, error: message };
    } finally {
      setAuthLoading(false);
    }
  };

  const login = async (username, password) => {
    setAuthLoading(true);
    setError(null);

    try {
      await axios.post("/auth/login", { username, password });
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
      await axios.post("/auth/logout");
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
    register,
    login,
    logout,
    fetchUser,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
