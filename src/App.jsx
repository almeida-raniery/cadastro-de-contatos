import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/Dashboard";
import LandingPage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { useSession } from "./providers/SessionProvider";

function App() {
  const { initSession } = useSession();

  useEffect(() => {
    initSession();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
