import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyPage from "./pages/Apply";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
