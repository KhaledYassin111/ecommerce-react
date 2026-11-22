import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("ecommerceUser")) || null; }
    catch { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem("ecommerceUser", JSON.stringify(user));
    else localStorage.removeItem("ecommerceUser");
  }, [user]);

  const login = (details) => setUser(details);
  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>
    {children}
  </AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
