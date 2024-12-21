import { Routes, Route } from "react-router-dom";

import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";
// import FooterComponents from "./components/FooterComponents";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import FaqPage from "./components/FaqComponents";

function App() {
  return (
    <div>
      <NavbarComponents />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratKeten" Component={SyaratKetentuanPage} />
      </Routes>

      <FooterComponents />
    </div>
  );
}

export default App;
