
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import AIChatWidget from './components/AIChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white font-cairo" dir="rtl">
        <Navbar />
        <SocialSidebar />
        <AIChatWidget />

        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Home />} />
            <Route path="/blog" element={<Blog />} />     
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
