import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  SURGICAL_SERVICES, 
  NON_SURGICAL_SERVICES, 
  DOCTOR_NAME, 
  DOCTOR_SLOGAN,
  TRUST_MESSAGE,
  DOCTOR_IMAGE_URL 
} from '../constants.tsx';
import { Service } from '../types.ts';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={`glass-card p-8 rounded-[40px] shadow-sm transition-all duration-500 flex flex-col h-full group ${isExpanded ? 'ring-2 ring-medical-green shadow-2xl bg-white' : 'hover:shadow-xl hover:-translate-y-2'}`}>
      <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-medical-blue group-hover:text-white transition-all duration-500 shadow-inner">
        {service.icon}
      </div>
      <h3 className="text-xl font-black text-medical-blue mb-3 leading-tight group-hover:text-medical-green transition-colors">{service.title}</h3>
      <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed font-medium">
        {service.description}
      </p>
      {isExpanded && (
        <div className="pt-6 border-t border-slate-100 text-slate-600 text-sm leading-relaxed animate-fade-in-up bg-slate-50/50 p-5 rounded-3xl mb-6 font-bold">
          {service.detailedDescription || service.description}
        </div>
      )}
      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="mt-auto text-medical-green font-black text-[12px] uppercase tracking-widest flex items-center gap-2 self-start hover:gap-3 transition-all"
      >
        <span>{isExpanded ? 'إغلاق التفاصيل' : 'اقرأ المزيد'}</span>
        <svg className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
      </button>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'surgical' | 'non-surgical'>('surgical');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white pt-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-medical-green/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-medical-blue/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-right">
          <div className="animate-fade-in-up order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-medical-green/10 text-medical-green rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Expert Orthopedic Care
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-medical-blue mb-8 leading-[1.1]">
              نُعيد لك <br/><span className="text-medical-green">حُرية الحركة</span>
            </h1>
            <div className="mb-10">
              <p className="text-3xl md:text-4xl text-medical-blue font-black mb-2">
                {DOCTOR_NAME}
              </p>
              <p className="text-lg text-slate-400 font-bold italic">
                {DOCTOR_SLOGAN}
              </p>
            </div>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-12 font-medium">
              استشاري جراحة العظام والمناظير - دكتوراة جامعة القاهرة. متخصصون في أحدث جراحات الركبة والكتف المتقدمة والمفاصل الصناعية وفق المعايير الدولية.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/booking" className="bg-medical-blue text-white px-12 py-6 rounded-[30px] font-black text-xl shadow-2xl hover:bg-medical-green transition-all transform hover:-translate-y-1 active:scale-95">
                احجز موعدك الآن
              </Link>
              <Link to="/about" className="bg-white text-medical-blue border-2 border-slate-100 px-12 py-6 rounded-[30px] font-black text-xl hover:border-medical-blue transition-all">
                تعرف على الدكتور
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center order-1 lg:order-2 animate-fade-in-up">
            <div className="relative w-full max-w-[500px] aspect-[4/5] doctor-portrait-frame overflow-hidden bg-slate-100 group shadow-[0_50px_100px_-20px_rgba(15,23,42,0.2)]">
              <img 
                src={DOCTOR_IMAGE_URL} 
                alt={DOCTOR_NAME} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[3000ms] grayscale hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/40 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden md:block">
               <p className="text-4xl font-black text-medical-green mb-1">15+</p>
               <p className="text-[10px] font-black text-medical-blue uppercase tracking-widest leading-none">سنة من الخبرة الدولية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-medical-accent/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-medical-green font-black text-xs uppercase tracking-[0.4em] mb-6 block">Clinical Specialties</span>
          <h2 className="text-5xl font-black text-medical-blue mb-20">خدماتنا الطبية المتخصصة</h2>
          
          <div className="flex justify-center mb-20 p-2 bg-white rounded-3xl shadow-xl border border-slate-100 w-fit mx-auto overflow-hidden">
            <button 
              onClick={() => setActiveTab('surgical')} 
              className={`px-12 py-4 rounded-2xl font-black text-sm transition-all duration-500 ${activeTab === 'surgical' ? 'bg-medical-blue text-white shadow-lg scale-105' : 'text-slate-400 hover:text-medical-blue'}`}
            >
              الجراحات والمناظير
            </button>
            <button 
              onClick={() => setActiveTab('non-surgical')} 
              className={`px-12 py-4 rounded-2xl font-black text-sm transition-all duration-500 ${activeTab === 'non-surgical' ? 'bg-medical-blue text-white shadow-lg scale-105' : 'text-slate-400 hover:text-medical-blue'}`}
            >
              العلاجات التحفظية والحقن
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-right">
            {(activeTab === 'surgical' ? SURGICAL_SERVICES : NON_SURGICAL_SERVICES).map(s => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;