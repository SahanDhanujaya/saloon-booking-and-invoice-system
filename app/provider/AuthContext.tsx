"use client";

import { getProfile } from "@/services/userService";
import type { UserType } from "@/types/user";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { toast } from "react-toastify";
import { logout as userLogout } from "@/services/authService";

type AuthContextType = {
  user: UserType | null;
  isAuthenticated: boolean;
  login: (user: UserType) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const isAuthenticated = !!user;
  const router = useRouter();

  const getUserProfile = async () => {
    await getProfile()
      .then((response) => {
        if (response?.status === 200) {
          setUser(response.data.data);
        }
      })
      .catch((error) => {
        router.push("/auth/signin");
        toast.error("Failed to fetch user profile!");
      });
  };

  useEffect(() => {
    if (!isAuthenticated) {
      getUserProfile();
    }
  }, []);

  const login = (user: UserType) => {
    setUser(user);
  };

  const logout = async () => {
    const response = await userLogout();
    if (response?.status === 200) {
      setUser(null);
      toast.success("Logged out successfully!");
    } else {
      toast.error("Logout failed!");
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
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
