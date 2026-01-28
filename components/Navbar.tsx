
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, INSTAPAY_INFO, DOCTOR_NAME, DOCTOR_SLOGAN } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInstaPay = () => {
    navigator.clipboard.writeText(INSTAPAY_INFO);
    alert("عنوان InstaPay الخاص بالدكتور هو: " + INSTAPAY_INFO + "\nتم نسخ العنوان لسهولة الدفع.");
  };

  return (
    <nav className={`fixed top-0 w-full z-[1500] transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-2xl shadow-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-[20px] bg-medical-blue flex items-center justify-center text-white shadow-2xl group-hover:bg-medical-green transition-all transform group-hover:rotate-6 duration-500">
                <span className="text-3xl">🩺</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-medical-blue leading-none tracking-tight">{DOCTOR_NAME}</span>
                <span className="text-[10px] text-medical-green font-black uppercase tracking-[0.3em] mt-2">{DOCTOR_SLOGAN}</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-black transition-all relative group py-2 tracking-widest uppercase ${
                  location.pathname === link.path ? 'text-medical-green' : 'text-slate-800 hover:text-medical-blue'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 right-0 h-1 bg-medical-green transition-all duration-500 rounded-full ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleInstaPay}
                className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-md hover:bg-slate-50 transition-all group"
                title="InstaPay Payment"
              >
                <span className="text-xl">💰</span>
              </button>
              
              <Link to="/booking" className="bg-medical-blue text-white px-10 py-5 rounded-[22px] font-black text-sm hover:bg-medical-green hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl active:scale-95 uppercase tracking-widest">
                احجز موعدك
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="p-4 text-medical-blue bg-white shadow-xl rounded-2xl border border-slate-50">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 z-[2000] transition-all duration-700 ease-in-out bg-white ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="p-10 flex flex-col h-full">
          <div className="flex justify-between items-center mb-20">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-medical-blue rounded-xl flex items-center justify-center text-white text-2xl">🩺</div>
                <span className="text-xl font-black text-medical-blue">{DOCTOR_NAME}</span>
             </div>
             <button onClick={() => setIsOpen(false)} className="p-4 bg-slate-100 rounded-2xl text-medical-blue">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
             </button>
          </div>
          <div className="space-y-12 text-right flex flex-col items-end">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block text-4xl font-black text-medical-blue hover:text-medical-green transition-colors uppercase tracking-widest">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto space-y-6">
            <Link to="/booking" onClick={() => setIsOpen(false)} className="block w-full bg-medical-blue text-white py-8 rounded-[35px] font-black text-2xl text-center shadow-2xl active:scale-95 uppercase">
              احجز الآن
            </Link>
            <button onClick={handleInstaPay} className="block w-full bg-slate-50 text-medical-blue py-8 rounded-[35px] font-black text-xl text-center border-2 border-slate-100">
              نسخ عنوان InstaPay 💰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
