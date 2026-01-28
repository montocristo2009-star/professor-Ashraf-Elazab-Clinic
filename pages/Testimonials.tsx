
import React from 'react';
import { REVIEWS, DOCTOR_NAME } from '../constants';
import { Link } from 'react-router-dom';

const TestimonialCard: React.FC<{ review: any }> = ({ review }) => (
  <div className="bg-white p-12 rounded-[60px] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-700 group flex flex-col h-full animate-fade-in-up">
    <div className="flex items-center justify-between mb-10">
      <div className="flex text-yellow-400 text-2xl gap-1">
        {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
      </div>
      <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${review.source === 'Facebook' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
        {review.source}
      </div>
    </div>
    
    <div className="relative mb-10 flex-grow">
      <span className="absolute -top-6 -right-6 text-8xl text-slate-100 font-serif leading-none select-none opacity-50 group-hover:text-medical-green/20 transition-colors">“</span>
      <p className="relative z-10 text-slate-600 text-xl leading-[1.8] font-medium italic">
        {review.text}
      </p>
    </div>
    
    <div className="flex items-center gap-6 mt-10 pt-10 border-t border-slate-50">
      <div className="w-16 h-16 bg-medical-blue text-white rounded-[22px] flex items-center justify-center font-black text-2xl shadow-xl group-hover:bg-medical-green transition-all transform group-hover:rotate-6">
        {review.patientName.charAt(0)}
      </div>
      <div>
        <p className="font-black text-medical-blue text-xl">{review.patientName}</p>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">{review.date}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-32">
          <span className="text-medical-green font-black text-xs uppercase tracking-[0.5em] mb-6 block animate-fade-in-up">Verified Patient Feedback</span>
          <h1 className="text-6xl md:text-8xl font-black text-medical-blue mb-10 leading-tight animate-fade-in-up">
            شهادات <br/><span className="text-medical-green">المرضى</span>
          </h1>
          <p className="text-2xl text-slate-400 font-bold max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            قصص نجاح واقعية ومراجعات من مرضانا الذين استعادوا جودة حياتهم بفضل الله ثم الدقة الجراحية للأستاذ الدكتور أشرف العزب.
          </p>
        </div>

        {/* Featured Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {REVIEWS.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>

        {/* Trust Stats Box */}
        <div className="bg-medical-blue rounded-[80px] p-12 md:p-24 text-white relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-96 h-96 bg-medical-green/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="text-right">
                <h2 className="text-5xl font-black mb-10 leading-tight">لماذا يثق المرضى <br/>في عيادة د. أشرف؟</h2>
                <div className="space-y-8">
                   {[
                     { title: "دقة التشخيص", desc: "استخدام أحدث الوسائل لتحديد المشكلة بدقة من الزيارة الأولى.", icon: "🔍" },
                     { title: "التقنيات العالمية", desc: "تطبيق بروتوكولات ألمانيا وسويسرا وكوريا في كل جراحة.", icon: "🌍" },
                     { title: "المتابعة الدقيقة", desc: "فريق طبي متكامل يرافق المريض في رحلة التعافي والتأهيل.", icon: "👨‍⚕️" }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6 items-start group">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                        <div>
                           <h4 className="text-xl font-black text-medical-green mb-2">{item.title}</h4>
                           <p className="text-slate-400 font-bold">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="flex flex-col items-center justify-center">
                <div className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center relative mb-8">
                   <div className="absolute inset-0 border-4 border-medical-green rounded-full animate-ping opacity-20"></div>
                   <span className="text-6xl font-black text-medical-green">4.9</span>
                </div>
                <div className="text-center">
                   <div className="flex text-yellow-400 text-3xl gap-2 mb-4">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                   </div>
                   <p className="text-xl font-black">متوسط تقييمات جوجل</p>
                   <p className="text-slate-400 font-bold mt-2">بناءً على مئات المراجعات الحقيقية</p>
                </div>
             </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black text-medical-blue mb-10">هل ترغب في الانضمام لقصص النجاح؟</h2>
          <Link to="/booking" className="inline-block bg-medical-blue text-white px-20 py-8 rounded-[40px] font-black text-2xl shadow-2xl hover:bg-medical-green transition-all transform hover:-translate-y-2">
            احجز موعد كشف الآن
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
