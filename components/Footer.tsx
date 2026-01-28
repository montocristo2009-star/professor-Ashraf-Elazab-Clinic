
import React from 'react';
import { 
  YOUTUBE_URL, 
  PHONE_CAIRO, 
  PHONE_MANSOURA, 
  PHONE_SENBELLAWEIN,
  DOCTOR_NAME, 
  DOCTOR_SLOGAN, 
  TRUST_MESSAGE, 
  FACEBOOK_URL, 
  TIKTOK_URL,
  INSTAGRAM_URL,
  INSTAPAY_INFO,
  INSTAPAY_QR_CODE
} from '../constants';

const Footer: React.FC = () => {
  const handleInstaPay = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(INSTAPAY_INFO);
    alert(`عنوان InstaPay الخاص بالدكتور هو: ${INSTAPAY_INFO}\nتم نسخ العنوان لسهولة الدفع.`);
  };

  const socialLinks = [
    { url: FACEBOOK_URL, color: 'hover:bg-[#1877F2]', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
    { url: INSTAGRAM_URL, color: 'hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> },
    { url: TIKTOK_URL, color: 'hover:bg-black', icon: <path d="M12.525.02c1.31-.032 2.612-.019 3.916-.01 0 1.41-.012 2.819.01 4.223.946-.613 2.112-.94 3.23-.815.428.048.843.153 1.246.309.006 1.428-.006 2.858.003 4.287-.582-.203-1.201-.302-1.819-.297-.84.006-1.674.237-2.394.673-.591.358-1.07.876-1.391 1.488-.018 3.292.012 6.584-.015 9.876-.113 1.488-.85 2.898-2.106 3.737-1.258.835-2.887 1.084-4.329.684-1.378-.383-2.583-1.38-3.21-2.65-.63-1.272-.663-2.818-.088-4.113.57-1.282 1.678-2.288 3.018-2.695.006-1.437-.006-2.875.003-4.312-1.348.156-2.636.756-3.606 1.704C3.84 13.06 3.21 14.734 3.195 16.48c-.015 2.133.918 4.209 2.53 5.61 1.611 1.401 3.822 1.956 5.86 1.48 2.038-.476 3.703-2.035 4.385-3.992.015-3.3.003-6.6.003-9.9.897.66 1.98.98 3.078.915.44-.027.87-.11 1.28-.246.006-1.428-.006-2.858.003-4.287-.582.203-1.2.302-1.82.297-.84-.006-1.674-.237-2.394-.673-.59-.358-1.07-.876-1.39-1.488-.02-3.292.01-6.584-.01-9.876z" /> },
    { url: YOUTUBE_URL, color: 'hover:bg-[#FF0000]', icon: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> }
  ];

  return (
    <footer className="bg-medical-blue text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-right">
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-3xl font-black mb-1">{DOCTOR_NAME}</h3>
              <p className="text-medical-green text-xs font-black uppercase tracking-widest mb-2">{DOCTOR_SLOGAN}</p>
              <p className="text-white/60 text-[10px] font-bold italic">"{TRUST_MESSAGE}"</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-[30px] border border-white/10 mb-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-medical-green mb-4">الدفع الإلكتروني عبر InstaPay</p>
              <div className="flex items-center gap-4">
                 <img src={INSTAPAY_QR_CODE} alt="InstaPay QR" className="w-20 h-20 rounded-xl bg-white p-1" />
                 <div className="flex flex-col">
                   <button onClick={handleInstaPay} className="text-xs font-black bg-medical-green text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform mb-2">نسخ العنوان</button>
                   <span className="text-[9px] text-slate-400 font-bold">{INSTAPAY_INFO}</span>
                 </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-all border border-white/5 ${social.color} hover:shadow-xl hover:-translate-y-1`}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-medical-green">فروعنا</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <p className="font-black text-lg mb-1 text-white">فرع القاهرة</p>
                <p className="text-xs text-slate-400 italic">التجمع الخامس - عيادات القاهرة الجديدة</p>
                <p className="text-medical-green text-sm font-black mt-2">{PHONE_CAIRO}</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <p className="font-black text-lg mb-1 text-white">فرع المنصورة</p>
                <p className="text-xs text-slate-400 italic">ميدان المحطة - برج اللؤلؤة</p>
                <p className="text-medical-green text-sm font-black mt-2">{PHONE_MANSOURA}</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <p className="font-black text-lg mb-1 text-white">فرع السنبلاوين</p>
                <p className="text-xs text-slate-400 italic">أرض المحلج - برج الصادق</p>
                <p className="text-medical-green text-sm font-black mt-2">{PHONE_SENBELLAWEIN}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-medical-green">تواصل معنا</h3>
            <div className="space-y-6">
              <div className="block p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                <p className="text-xs text-slate-500 mb-2">للحجز والاستفسار</p>
                <a href={`tel:${PHONE_CAIRO}`} className="text-2xl font-black tracking-widest block group-hover:text-medical-green transition-colors">{PHONE_CAIRO}</a>
              </div>
              <div className="block p-6 rounded-3xl bg-white/5 border border-white/5">
                <p className="text-xs text-slate-500 mb-2">مواعيد العمل</p>
                <p className="text-sm font-bold">يومياً من 4 مساءً إلى 10 مساءً</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-medical-green">روابط سريعة</h3>
            <ul className="space-y-4 font-bold text-slate-400">
              <li><a href="#/about" className="hover:text-white transition-colors">السيرة الذاتية</a></li>
              <li><a href="#/services" className="hover:text-white transition-colors">الجراحات والمناظير</a></li>
              <li><a href="#/blog" className="hover:text-white transition-colors">المدونة الطبية</a></li>
              <li><a href="#/booking" className="hover:text-white transition-colors">احجز الآن</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 text-center text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">
          Copyright © {new Date().getFullYear()} {DOCTOR_NAME}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
