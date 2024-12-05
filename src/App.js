import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQs from "./components/FAQs";
import PricingPage from "./screens/PricingPage";
import SupportPage from "./screens/SupportPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </main>
      {location.pathname !== "/support" && <FAQs />}
      <Footer />
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
