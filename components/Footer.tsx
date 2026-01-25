
import React from 'react';
import { YOUTUBE_URL, CLINIC_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-medical-blue text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-right">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-black mb-8">أ.د. أشرف العزب</h3>
            <p className="text-slate-400 leading-relaxed mb-10 font-medium">
              نلتزم بتقديم أعلى مستويات الرعاية الطبية في جراحة العظام والمناظير، مع استخدام أحدث ما توصل إليه العلم لاستعادة جودة حياة المريض.
            </p>
            <div className="flex gap-4">
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all border border-white/5 shadow-xl">
                <span className="text-2xl">📺</span>
              </a>
              <a href={`https://wa.me/${CLINIC_PHONE}`} className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-medical-green transition-all border border-white/5 shadow-xl">
                <span className="text-2xl">📱</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-medical-green">فروعنا</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <p className="font-black text-lg mb-1">المنصورة</p>
                <p className="text-xs text-slate-500">ميدان المحطة - برج اللؤلؤة</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <p className="font-black text-lg mb-1">القاهرة</p>
                <p className="text-xs text-slate-500">التجمع الخامس - عيادات القاهرة الجديدة</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <p className="font-black text-lg mb-1">السنبلاوين</p>
                <p className="text-xs text-slate-500">أرض المحلج - برج الصادق</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-medical-green">تواصل معنا</h3>
            <div className="space-y-6">
              <a href={`tel:${CLINIC_PHONE}`} className="block p-6 rounded-3xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
                <p className="text-xs text-slate-500 mb-2">رقم الحجز والتواصل</p>
                <p className="text-2xl font-black tracking-widest">{CLINIC_PHONE}</p>
              </a>
              <div className="text-sm text-slate-500 pr-2">
                ساعات العمل: من ٤ م إلى ١٠ م (عدا الجمعة)
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-medical-green">روابط سريعة</h3>
            <ul className="space-y-4 font-bold text-slate-400">
              <li><a href="#/services" className="hover:text-white transition-colors">جراحات المناظير</a></li>
              <li><a href="#/services" className="hover:text-white transition-colors">تبديل المفاصل</a></li>
              <li><a href="#/blog" className="hover:text-white transition-colors">نصائح طبية</a></li>
              <li><a href="#/booking" className="hover:text-white transition-colors">طلب حجز موعد</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">
          <div>Copyright © {new Date().getFullYear()} Dr. Ashraf Elazab. Medical Excellence.</div>
          <div className="flex gap-10">
            <span>Powered by Smart Medical AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
