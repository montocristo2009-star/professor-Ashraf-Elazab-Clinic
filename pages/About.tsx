
import React from 'react';
import { 
  ACADEMIC_CREDENTIALS,
  FELLOWSHIPS_DETAILED,
  INTERNATIONAL_MEMBERSHIPS,
  RESEARCH_INFO,
  ACADEMIC_STATS,
  DOCTOR_NAME,
  TRUST_MESSAGE,
  DOCTOR_IMAGE_URL 
} from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro Section - Branding */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 border-b border-slate-100 pb-20">
          <div className="animate-fade-in-up text-right order-2 lg:order-1">
            <span className="text-medical-green font-black text-xs uppercase tracking-[0.3em] mb-4 block">Medical Academic Profile</span>
            <h1 className="text-5xl md:text-6xl font-black text-medical-blue mb-4 leading-tight">
              {DOCTOR_NAME}
            </h1>
            <p className="text-lg text-medical-green font-black mb-8 italic">
              "{TRUST_MESSAGE}"
            </p>
            <p className="text-xl text-slate-600 font-bold mb-10 leading-relaxed max-w-xl">
              استشاري جراحة العظام والمناظير. مسيرة أكاديمية دولية تمتد من جامعة القاهرة وصولاً إلى البورد الأوروبي وزمالات كبرى المراكز العالمية في ألمانيا وسويسرا وكوريا.
            </p>
            
            {/* Academic Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
               {ACADEMIC_STATS.map((stat, i) => (
                 <div key={i} className="flex flex-col p-6 bg-slate-50 rounded-[30px] border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all">
                    <span className="text-3xl mb-2">{stat.icon}</span>
                    <span className="text-2xl font-black text-medical-blue">{stat.value}</span>
                    <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1">{stat.label}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-medical-blue/5 rounded-[80px] -rotate-3 transition-transform group-hover:rotate-0"></div>
              <div className="bg-slate-50 p-6 rounded-[80px] shadow-sm relative z-10">
                <img 
                  src={DOCTOR_IMAGE_URL} 
                  alt={DOCTOR_NAME} 
                  className="w-full aspect-[4/5] object-cover rounded-[70px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 1. Core Credentials (PhD & Board) */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-medical-blue mb-4">المؤهلات العلمية الرئيسية</h2>
            <div className="w-20 h-1 bg-medical-green mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {ACADEMIC_CREDENTIALS.map((cred, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-10 p-12 rounded-[50px] border-2 transition-all ${
                cred.type === 'phd' ? 'bg-medical-blue text-white border-medical-blue shadow-2xl scale-[1.02]' : 'bg-slate-50 border-medical-green text-medical-blue'
              }`}>
                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-inner ${cred.type === 'phd' ? 'bg-white/10' : 'bg-white'}`}>
                  {cred.icon}
                </div>
                <div className="text-center md:text-right flex-grow">
                   <p className={`text-sm font-black uppercase tracking-[0.3em] mb-3 ${cred.type === 'phd' ? 'text-medical-green' : 'text-slate-400'}`}>{cred.title}</p>
                   <h3 className="text-3xl font-black mb-4">{cred.degree}</h3>
                   <p className={`text-lg leading-relaxed max-w-3xl ml-auto ${cred.type === 'phd' ? 'text-slate-400 font-bold' : 'text-slate-500 font-bold'}`}>
                     {cred.description}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Fellowships - Each on a separate line */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-medical-blue mb-2">ثالثاً: الزمالات الدولية المعتمدة</h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">International Fellowships & Specialized Training</p>
          </div>
          
          <div className="space-y-6">
            {FELLOWSHIPS_DETAILED.map((f, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-8 p-10 bg-white border border-slate-100 rounded-[40px] hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-medical-blue group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <div className="text-center md:text-right flex-grow">
                   <h4 className="text-2xl font-black text-medical-blue mb-2">{f.title} - {f.country}</h4>
                   <p className="text-slate-500 font-bold text-lg">{f.details}</p>
                </div>
                <div className="px-6 py-2 bg-green-50 text-medical-green rounded-full text-[10px] font-black uppercase tracking-widest">
                  Certified Fellowship
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Global Memberships Grid */}
        <section className="mb-32 py-24 bg-medical-blue rounded-[80px] text-white px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-medical-green/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl font-black mb-4">العضويات والجمعيات الدولية</h2>
            <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Scientific Memberships & Affiliations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {INTERNATIONAL_MEMBERSHIPS.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[30px] flex flex-col items-center text-center hover:bg-white/10 transition-all">
                <span className="text-medical-green font-black text-xs mb-3 tracking-widest uppercase">{m.code}</span>
                <p className="text-sm font-bold text-slate-100 leading-tight">{m.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Academic Impact - Research, Editor, Reviewer */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-right">
              <h2 className="text-4xl font-black text-medical-blue mb-10">الخبرات الأكاديمية والبحثية</h2>
              <div className="space-y-8">
                {RESEARCH_INFO.map((info, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-medical-green flex items-center justify-center text-xl font-black flex-shrink-0">
                      {i === 0 ? '🔬' : i === 1 ? '✍️' : i === 2 ? '🔍' : '🎓'}
                    </div>
                    <p className="text-slate-700 font-bold text-xl leading-relaxed">{info}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[60px] border border-slate-100 relative overflow-hidden">
               <div className="absolute top-10 right-10 text-9xl text-medical-green/5 font-black">Expert</div>
               <h3 className="text-2xl font-black text-medical-blue mb-6 relative z-10">المساهمة في تطوير العلم</h3>
               <p className="text-slate-500 font-medium leading-relaxed italic relative z-10 text-lg">
                 "نؤمن بأن التعليم المستمر والبحث العلمي هما الركيزة الأساسية لتقديم رعاية طبية متفوقة. عملنا كمحررين ومحكمين دوليين يضمن لنا البقاء على قمة الهرم المعرفي في تخصص جراحة العظام."
               </p>
               <div className="mt-10 flex flex-wrap gap-4 relative z-10">
                  <div className="px-5 py-3 bg-medical-blue text-white rounded-2xl text-xs font-black uppercase tracking-widest">Scientific Editor</div>
                  <div className="px-5 py-3 bg-white text-medical-blue rounded-2xl text-xs font-black uppercase tracking-widest border border-slate-200 shadow-sm">Peer Reviewer</div>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
