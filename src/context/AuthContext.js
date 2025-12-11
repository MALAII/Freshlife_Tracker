import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const signup = (username, email, password) => {
    const exists = users.find(u => u.email === email);
    if (exists) return false;
    const newUser = { username, email, password };
    setUsers([...users, newUser]);
    setUser({ username, email });
    localStorage.setItem("user", JSON.stringify({ username, email }));
    return true;
  };

  const login = (email, password) => {
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      setUser({ username: found.username, email: found.email });
      localStorage.setItem("user", JSON.stringify({ username: found.username, email: found.email }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const resetPassword = (email, newPassword) => {
    const idx = users.findIndex(u => u.email === email);
    if (idx === -1) return false;
    const updatedUsers = [...users];
    updatedUsers[idx].password = newPassword;
    setUsers(updatedUsers);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}
