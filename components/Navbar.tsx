
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-medical-blue flex items-center justify-center text-white shadow-xl group-hover:bg-medical-green transition-all transform group-hover:rotate-6">
                <span className="text-3xl">🩺</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-medical-blue leading-tight tracking-tight">أ.د. أشرف العزب</span>
                <span className="text-[10px] text-medical-green font-black uppercase tracking-[0.3em]">Orthopedic Surgeon</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-black transition-all relative group py-2 ${
                  location.pathname === link.path ? 'text-medical-green' : 'text-slate-700 hover:text-medical-blue'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 right-0 h-1 bg-medical-green transition-all duration-300 rounded-full ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link to="/booking" className="bg-medical-blue text-white px-10 py-4 rounded-2xl font-black text-sm hover:bg-medical-green hover:shadow-2xl hover:-translate-y-1 transition-all shadow-lg active:scale-95">
              احجز موعدك
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-3 text-medical-blue bg-white shadow-lg rounded-2xl">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out bg-white/98 backdrop-blur-2xl ${isOpen ? 'max-h-screen border-t shadow-2xl opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-12 space-y-10 text-right">
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block text-3xl font-black text-slate-800 hover:text-medical-green transition-colors">
              {link.label}
            </Link>
          ))}
          <Link to="/booking" onClick={() => setIsOpen(false)} className="block w-full bg-medical-blue text-white py-6 rounded-[28px] font-black text-2xl text-center shadow-2xl active:scale-95">
            احجز الآن
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
