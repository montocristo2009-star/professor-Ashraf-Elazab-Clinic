
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, ACADEMIC_STATS, YOUTUBE_URL, CLINIC_PHONE } from '../constants';
import { getMedicalAdvice } from '../services/geminiService';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 transition-all duration-500 flex flex-col h-full group ${isExpanded ? 'ring-2 ring-medical-green shadow-2xl scale-[1.02]' : 'hover:shadow-xl hover:-translate-y-1'}`}>
      <div className="text-4xl mb-6 bg-green-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-medical-green group-hover:text-white transition-all duration-500">
        {service.icon}
      </div>
      <h3 className="text-2xl font-black text-medical-blue mb-4 leading-tight">{service.title}</h3>
      <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
        {service.description}
      </p>
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="pt-6 border-t border-slate-100 text-slate-700 text-sm leading-relaxed bg-slate-50 p-5 rounded-3xl">
          {service.detailedDescription}
        </div>
      </div>
      <button onClick={() => setIsExpanded(!isExpanded)} className="mt-8 text-medical-green font-black text-sm flex items-center gap-2 hover:translate-x-[-4px] transition-transform self-start">
        <span>{isExpanded ? 'عرض أقل' : 'استكشف المزيد'}</span>
        <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAdvice = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setAdvice('');
    const result = await getMedicalAdvice(query);
    setAdvice(result);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Elite Portrait Design */}
      <section className="relative min-h-[95vh] flex items-center bg-white overflow-hidden pt-28 pb-20">
        {/* Advanced Decorative Background */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-medical-green/[0.03] skew-x-[-12deg] translate-x-1/4 hidden lg:block pointer-events-none"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-medical-green/[0.05] rounded-full blur-[160px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-medical-blue/[0.03] rounded-full blur-[140px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center text-right">
          <div className="animate-slide-up order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 bg-green-50 px-6 py-2.5 rounded-full border border-green-200 mb-10 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-medical-green"></span>
              </span>
              <span className="text-medical-darkGreen font-black text-xs uppercase tracking-[0.15em]">خبير جراحات المفاصل والمناظير الدولي</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-medical-blue mb-10 leading-[1.05] tracking-tight">
              نحن نعيد لك<br/><span className="text-medical-green italic">حرية الحركة</span>
            </h1>
            
            <p className="text-3xl md:text-4xl text-medical-darkGreen font-black mb-12 border-r-[12px] border-medical-green pr-10 py-2">
              الأستاذ الدكتور أشرف العزب
            </p>
            
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-16 font-medium">
              استشاري جراحة العظام (دكتوراة جامعة القاهرة) والحاصل على البورد الأوروبي. خبرة تزيد عن 20 عاماً في علاج أكثر إصابات الملاعب تعقيداً بأحدث بروتوكولات العلاج العالمية.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <Link to="/booking" className="bg-medical-blue text-white px-16 py-7 rounded-[30px] font-black text-2xl shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)] hover:bg-medical-green transition-all transform hover:scale-105 active:scale-95 group flex items-center gap-4">
                <span>احجز موعدك</span>
                <svg className="w-6 h-6 transform rotate-180 group-hover:translate-x-[-5px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a href={`tel:${CLINIC_PHONE}`} className="glass text-medical-blue border-2 border-slate-200 px-16 py-7 rounded-[30px] font-black text-2xl hover:bg-slate-50 transition-all flex items-center gap-4 shadow-xl">
                <span className="text-3xl">📞</span>
                <span className="tracking-tighter">{CLINIC_PHONE}</span>
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center animate-slide-up order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            {/* High-Quality Professional Portrait Container */}
            <div className="relative w-full max-w-[520px] aspect-[4/5] rounded-[110px] overflow-hidden doctor-frame border-[20px] border-white group bg-slate-50 shadow-2xl">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/doctor-ashraf-portrait.jpg" 
                alt="الأستاذ الدكتور أشرف العزب" 
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-[3000ms] ease-out"
                loading="eager"
              />
              {/* Artistic Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[110px] pointer-events-none"></div>
              
              {/* Clinic Badge Overlay mimicking the actual logo in the photo */}
              <div className="absolute top-12 left-12 w-36 h-36 glass rounded-full p-2 shadow-2xl animate-float border-[3px] border-medical-green flex items-center justify-center backdrop-blur-md">
                 <div className="w-full h-full rounded-full bg-white/90 flex flex-col items-center justify-center text-[10px] text-center font-black leading-tight text-medical-blue px-3">
                    <span className="text-3xl mb-1">🩺</span>
                    <span className="uppercase tracking-tight">Knee & Shoulder</span>
                    <span className="text-medical-green text-[12px] mt-1 italic">Specialist Clinic</span>
                 </div>
              </div>
            </div>
            
            {/* Credentials Float Card */}
            <div className="absolute -bottom-10 -right-4 lg:-right-12 bg-white/95 backdrop-blur-xl p-10 rounded-[45px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-20 h-20 bg-green-50 rounded-[28px] flex items-center justify-center text-4xl shadow-inner border border-green-100/50">
                🇪🇺
              </div>
              <div className="text-right">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mb-2">Academic Excellence</p>
                <p className="text-3xl font-black text-medical-blue mb-1">البورد الأوروبي</p>
                <p className="text-sm text-medical-green font-bold">لجراحة العظام والمفاصل</p>
              </div>
            </div>
            
            {/* Secondary Floating Stat */}
            <div className="absolute top-1/4 -left-8 lg:-left-16 bg-white p-6 rounded-[35px] shadow-2xl border border-slate-50 hidden md:flex flex-col items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-medical-green text-3xl font-black">+20</span>
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">عام خبرة</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {ACADEMIC_STATS.map((stat, idx) => (
              <div key={idx} className="group text-center">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <p className="text-6xl font-black text-medical-blue mb-3 group-hover:text-medical-green transition-colors duration-500">{stat.value}</p>
                <p className="text-slate-400 font-bold text-sm uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Services Showcase */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-28 max-w-3xl mx-auto">
            <div className="inline-block px-5 py-2 bg-green-50 text-medical-green rounded-full text-xs font-black uppercase tracking-widest mb-6">Expertise</div>
            <h2 className="text-5xl md:text-6xl font-black text-medical-blue mb-8">التخصصات الجراحية المتطورة</h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">نستخدم أحدث التقنيات الجراحية طفيفة التوغل لضمان أسرع وقت للتعافي وأقل قدر من الألم.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
            {SERVICES.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* High-Conversion AI Assistant Section */}
      <section className="py-40 bg-medical-blue relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-medical-green rounded-full blur-[200px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-white rounded-full blur-[180px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-[40px] p-16 md:p-24 rounded-[90px] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] text-center">
            <div className="w-28 h-28 bg-medical-green text-white rounded-[35px] flex items-center justify-center text-6xl mx-auto mb-12 shadow-[0_20px_50px_rgba(16,185,129,0.3)] animate-float">
              🤖
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight">المساعد الطبي الذكي</h2>
            <p className="text-blue-100/70 mb-16 text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              تحدث مع المساعد الذكي للحصول على تقييم أولي لحالتك وفقاً لأحدث المعايير الطبية العالمية.
            </p>
            
            <div className="relative max-w-3xl mx-auto mb-16 group">
              <input 
                value={query} 
                onChange={e => setQuery(e.target.value)} 
                placeholder="صف أعراضك بدقة (مثلاً: ألم شديد في الركبة عند صعود السلم)..." 
                className="w-full px-12 py-9 rounded-[40px] bg-white text-slate-900 outline-none text-2xl font-bold shadow-2xl focus:ring-[6px] focus:ring-medical-green/40 transition-all pr-14 placeholder:text-slate-300" 
              />
              <button 
                onClick={handleGetAdvice} 
                disabled={isLoading} 
                className="absolute left-4 top-4 bottom-4 bg-medical-blue text-white px-14 rounded-[30px] font-black text-2xl hover:bg-medical-green transition-all disabled:opacity-50 shadow-2xl active:scale-95 flex items-center gap-3"
              >
                {isLoading ? (
                  <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : 'تحليل الحالة'}
              </button>
            </div>

            {advice && (
              <div className="bg-white p-14 rounded-[60px] text-right shadow-2xl animate-fade-in relative overflow-hidden border border-white">
                <div className="absolute top-0 right-0 w-4 h-full bg-medical-green"></div>
                <div className="flex items-center gap-5 mb-10">
                  <span className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl">✨</span>
                  <span className="text-medical-green font-black text-3xl">التوصية الطبية المقترحة:</span>
                </div>
                <p className="text-slate-800 text-[1.6rem] leading-[1.6] font-medium mb-12">
                  {advice}
                </p>
                <div className="bg-slate-50 p-8 rounded-[30px] text-[15px] text-slate-400 font-bold border border-slate-100 leading-relaxed">
                  ⚠️ إخلاء مسؤولية: هذا الرد استرشادي مدعوم بالذكاء الاصطناعي ولا يعتبر تشخيصاً طبياً نهائياً. يجب استشارة الدكتور أشرف العزب لإجراء الفحص السريري اللازم وتحديد خطة العلاج المناسبة.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
