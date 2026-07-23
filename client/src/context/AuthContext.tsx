import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  loginUser,
  registerUser,
  getCurrentUser,
} from "../services/auth.service";

interface User {
  id: string;
  name: string;
  email: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  // ==========================
  // Restore User Session
  // ==========================
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await getCurrentUser();

        setUser(res.user);
      } catch (error) {
        console.error("Session restore failed:", error);

        localStorage.removeItem("token");

        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // ==========================
  // Login User
  // ==========================
  const login = async (data: LoginData): Promise<void> => {
    const res = await loginUser(data);

    localStorage.setItem("token", res.token);

    const userData = await getCurrentUser();

    setUser(userData.user);
  };

  // ==========================
  // Register User
  // ==========================
  const register = async (data: RegisterData): Promise<void> => {
    // Create user
    await registerUser(data);

    // Auto login
    const loginRes = await loginUser({
      email: data.email,
      password: data.password,
    });

    localStorage.setItem("token", loginRes.token);

    const userData = await getCurrentUser();

    setUser(userData.user);
  };

  // ==========================
  // Logout
  // ==========================
  const logout = (): void => {
    localStorage.removeItem("token");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
