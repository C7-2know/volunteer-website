import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/public/landingPage";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
