import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import GamingPage from "./pages/GamingPage";
import TravelPage from "./pages/TravelPage";
import YouTubePage from "./pages/YouTubePage";
import CodingPage from "./pages/CodingPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <>
      {/* Nav always visible on every page */}
      <Navbar />
      <Routes>
        <Route path="/"         element={<Hero />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gaming"   element={<GamingPage />} />
        <Route path="/travel"   element={<TravelPage />} />
        <Route path="/youtube"  element={<YouTubePage />} />
        <Route path="/coding"   element={<CodingPage />} />
        <Route path="/contact"  element={<ContactPage />} />
      </Routes>
    </>
  );
}
