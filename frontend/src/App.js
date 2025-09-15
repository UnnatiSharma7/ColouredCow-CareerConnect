import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyPage from "./pages/Apply";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplyPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
