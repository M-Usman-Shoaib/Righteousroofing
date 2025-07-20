import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Navbar } from "./modules/core/navbar";
import { Home } from "./modules/pages/Home.jsx";
import { Portfolio } from "./modules/pages/portfolio";
import { AboutUs } from "./modules/pages/about-us.jsx";
import { FAQ } from "./modules/pages/faq";
import { Contact } from "./modules/pages/contact-us";
import { Service } from "./modules/pages/service";
import { SingleService } from "./modules/pages/single-service";
import { DynamicService } from "./modules/pages/dynamic-service";
import { Footer } from "./modules/core/footer";
import ScrollToTop from "./ScrollToTop";

// Extract routing logic into an inner component to access useLocation safely
function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:serviceSlug" element={<DynamicService />} />
        <Route
          path="/service/:serviceName"
          element={<SingleService key={location.pathname} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
