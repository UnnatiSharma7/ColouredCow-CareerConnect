import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react";
import ApplyPage from "./pages/Apply";
import ThankYouPage from "./pages/ThankYouPage";
import HRMetricsDashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
   const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplyPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/hr" element={isAuth ? <HRMetricsDashboard /> :<Login setAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
