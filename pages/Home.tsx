
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, ACADEMIC_STATS, CLINIC_PHONE } from '../constants';
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'الأستاذ الدكتور أشرف العزب',
          text: 'استشاري جراحة العظام والمناظير - خبير جراحات الركبة والكتف.',
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط الموقع بنجاح لمشاركته!');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 left-8 z-[100] flex flex-col gap-5 animate-slide-up">
        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/2${CLINIC_PHONE}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 transition-all group relative animate-pulse-green"
          title="تواصل عبر واتساب"
        >
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        
        {/* Share Button */}
        <button 
          onClick={handleShare}
          className="w-16 h-16 bg-medical-blue text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(15,23,42,0.3)] hover:bg-medical-green transition-all transform hover:rotate-12 active:scale-95"
          title="مشاركة الموقع"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-white overflow-hidden pt-28 pb-20">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-medical-green/[0.02] skew-x-[-15deg] translate-x-1/4 hidden lg:block pointer-events-none"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-medical-green/[0.05] rounded-full blur-[160px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center text-right">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-3 bg-green-50 px-6 py-2.5 rounded-full border border-green-200 mb-10 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-medical-green"></span>
              </span>
              <span className="text-medical-darkGreen font-black text-xs uppercase tracking-widest">خبير جراحات المفاصل والمناظير الدولي</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-medical-blue mb-10 leading-[1.05] tracking-tight">
              نحن نعيد لك<br/><span className="text-medical-green italic">حرية الحركة</span>
            </h1>
            
            <p className="text-3xl md:text-4xl text-medical-darkGreen font-black mb-12 border-r-[12px] border-medical-green pr-10 py-2">
              الأستاذ الدكتور أشرف العزب
            </p>
            
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-16 font-medium">
              استشاري جراحة العظام (دكتوراة قصر العيني) والحاصل على البورد الأوروبي. خبرة تزيد عن 20 عاماً في أدق جراحات الركبة والكتف.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <Link to="/booking" className="bg-medical-blue text-white px-16 py-7 rounded-[30px] font-black text-2xl shadow-2xl hover:bg-medical-green transition-all transform hover:scale-105 group flex items-center gap-4">
                <span>احجز موعدك</span>
                <svg className="w-6 h-6 transform rotate-180 group-hover:translate-x-[-5px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a href={`tel:${CLINIC_PHONE}`} className="bg-white text-medical-blue border-2 border-slate-200 px-16 py-7 rounded-[30px] font-black text-2xl hover:bg-slate-50 transition-all flex items-center gap-4 shadow-xl">
                <span className="text-3xl">📞</span>
                <span className="tracking-tighter">{CLINIC_PHONE}</span>
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Dr. Portrait */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[100px] overflow-hidden doctor-portrait-frame border-[16px] border-white group bg-slate-100">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/doctor-ashraf-portrait.jpg" 
                alt="الأستاذ الدكتور أشرف العزب" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/40 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="absolute top-10 left-10 w-36 h-36 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-2xl border-[3px] border-medical-green flex items-center justify-center">
                 <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-[9px] text-center font-black leading-tight text-medical-blue px-3">
                    <span className="text-3xl mb-1">🩺</span>
                    <span className="uppercase tracking-tight font-black">Knee & Shoulder</span>
                    <span className="text-medical-green text-[11px] mt-1 font-black">Specialist</span>
                 </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white/95 backdrop-blur-xl p-10 rounded-[40px] shadow-2xl border border-slate-100 flex items-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-green-50 rounded-[24px] flex items-center justify-center text-3xl shadow-inner border border-green-100">
                🇪🇺
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Expert Surgeon</p>
                <p className="text-2xl font-black text-medical-blue mb-0.5">البورد الأوروبي</p>
                <p className="text-xs text-medical-green font-bold">لجراحة العظام</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {ACADEMIC_STATS.map((stat, idx) => (
              <div key={idx} className="group text-center">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <p className="text-5xl font-black text-medical-blue mb-3">{stat.value}</p>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-medical-blue mb-8">أحدث تقنيات العلاج الجراحي</h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">نطبق المعايير الدولية لضمان عودة المرضى والرياضيين لممارسة حياتهم في أسرع وقت.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {SERVICES.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-40 bg-medical-blue relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-[40px] p-16 md:p-24 rounded-[80px] border border-white/10 shadow-2xl text-center">
            <div className="w-24 h-24 bg-medical-green text-white rounded-[30px] flex items-center justify-center text-5xl mx-auto mb-12 shadow-2xl">
              🤖
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-10">استشير المساعد الذكي</h2>
            
            <div className="relative max-w-2xl mx-auto mb-16">
              <input 
                value={query} 
                onChange={e => setQuery(e.target.value)} 
                placeholder="صف مشكلتك الصحية هنا..." 
                className="w-full px-10 py-8 rounded-[35px] bg-white text-slate-900 outline-none text-xl font-bold shadow-2xl focus:ring-[5px] focus:ring-medical-green/40 transition-all placeholder:text-slate-300" 
              />
              <button 
                onClick={handleGetAdvice} 
                disabled={isLoading} 
                className="absolute left-3 top-3 bottom-3 bg-medical-blue text-white px-10 rounded-[28px] font-black text-xl hover:bg-medical-green transition-all shadow-xl disabled:opacity-50"
              >
                {isLoading ? 'جاري التحليل...' : 'تحليل الحالة'}
              </button>
            </div>

            {advice && (
              <div className="bg-white p-12 rounded-[50px] text-right shadow-2xl animate-fade-in border border-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-3 h-full bg-medical-green"></div>
                <p className="text-slate-800 text-[1.4rem] leading-[1.6] font-medium mb-8">
                  {advice}
                </p>
                <p className="text-[13px] text-slate-400 font-bold border-t border-slate-100 pt-6">
                  ⚠️ تنبيه: هذا الرد استرشادي ولا يغني عن الكشف السريري عند الدكتور أشرف العزب.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
