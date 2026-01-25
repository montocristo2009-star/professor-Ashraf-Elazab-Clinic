
import React from 'react';
import { DOCTOR_EXPERIENCE, ACADEMIC_STATS, SUCCESS_STORIES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-medical-blue text-white relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight">مسيرة مكللة بالدقة والبحث العلمي</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-12 font-light">
              الدكتور أشرف العزب ليس فقط جراحاً ماهراً، بل هو باحث أكاديمي يشارك في صياغة مستقبل جراحة العظام من خلال أبحاثه المنشورة دولياً وعضوياته في أكبر الجمعيات العالمية.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {ACADEMIC_STATS.map((stat, idx) => (
                <div key={idx} className="bg-white/10 p-8 rounded-[32px] border border-white/10">
                  <span className="text-3xl mb-3 block">{stat.icon}</span>
                  <p className="text-4xl font-black mb-1">{stat.value}</p>
                  <p className="text-xs text-blue-200 uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-[60px] p-10 lg:p-16 shadow-2xl">
            <h2 className="text-3xl font-black text-medical-blue mb-10 border-r-8 border-medical-lightBlue pr-6">المؤهلات العلمية</h2>
            <div className="space-y-8">
              {DOCTOR_EXPERIENCE.degrees.map((degree, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-medical-lightBlue font-black group-hover:bg-medical-blue group-hover:text-white transition-colors">{idx + 1}</span>
                  <p className="text-gray-800 font-bold text-lg leading-tight pt-1">{degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black text-medical-blue mb-8">العضويات الدولية والمحلية</h2>
              <p className="text-gray-500 mb-10 font-medium leading-relaxed">المشاركة المستمرة في المحافل الدولية تضمن لنا تقديم أحدث ما وصل إليه العلم لمرضانا في مصر.</p>
              <div className="flex flex-wrap gap-3">
                {DOCTOR_EXPERIENCE.memberships.map((m, idx) => (
                  <span key={idx} className="bg-white px-5 py-3 rounded-2xl text-xs font-black text-medical-blue shadow-sm border border-gray-100">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-12">
              <h2 className="text-4xl font-black text-medical-blue mb-12">قصص نجاح ملهمة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SUCCESS_STORIES.map((story) => (
                  <div key={story.id} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-medical-lightBlue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-4xl">🏅</span>
                      <span className="bg-blue-50 text-medical-lightBlue px-4 py-1.5 rounded-full text-xs font-black">{story.year}</span>
                    </div>
                    <h3 className="text-2xl font-black text-medical-blue mb-4">{story.condition}</h3>
                    <p className="text-gray-600 mb-6 font-medium leading-relaxed">{story.description}</p>
                    <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
                      <p className="text-medical-green font-bold text-sm">النتيجة: {story.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
