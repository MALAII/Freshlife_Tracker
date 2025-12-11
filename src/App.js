import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddItem from "./pages/AddItem";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// import "./styles/Layout.css";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter basename="/Freshlife_Tracker">
      <div className="app-layout">
        {user && <Sidebar />}

        <div className="page-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route
              path="/"
              element={user ? <Analytics /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/add"
              element={user ? <AddItem /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" replace />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
