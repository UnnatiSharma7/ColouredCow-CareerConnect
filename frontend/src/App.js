import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyPage from "./pages/Apply";
import ThankYouPage from "./pages/ThankYouPage";
import HRMetricsDashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplyPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/hr" element={<HRMetricsDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
