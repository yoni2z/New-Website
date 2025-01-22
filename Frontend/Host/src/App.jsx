import React from "react";
import "./app.css";
import { Home } from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Trademark } from "./components/Trademark/Trademark";
import { Footer } from "./components/Footer/Footer";
import Blogs from "./pages/Blogs";
import BlogsDetail from "./pages/BlogsDetail";
import Gallery from "./Pages/GalleryPage/Gallery";
import About from "./Pages/AboutPage/About";
import Causes from "./Pages/Causes";
import CausesDetail from "./Pages/CausesDetail";
import DonationPage from "./pages/DonationPage/DonationPage";
import Contacts from "./pages/Contacts";
import WhatWeDo from "./Pages/WhatWeDo";
import WhatWeDoProjects from "./Pages/WhatWeDoProjects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="causes" element={<Causes />} />
          <Route path="causes/:id" element={<CausesDetail />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsDetail />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/whatwedo/projects/:id" element={<WhatWeDoProjects />} />
        </Routes>
        <Footer />
        <Trademark />
      </Router>
    </>
  );
}

export default App;
