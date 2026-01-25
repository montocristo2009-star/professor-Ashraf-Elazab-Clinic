
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-gray-100">
          {submitted ? (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-8xl mb-10">✅</div>
              <h2 className="text-3xl font-black text-medical-blue mb-6">تم استلام طلب الحجز بنجاح!</h2>
              <p className="text-gray-600 text-xl font-medium">سيقوم فريق د. أشرف بالتواصل معك خلال ساعات لتأكيد الموعد النهائي في الفرع المختار.</p>
              <button onClick={() => setSubmitted(false)} className="mt-12 bg-medical-blue text-white px-10 py-4 rounded-2xl font-bold">العودة للنموذج</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-black text-medical-blue">حجز موعد كشف</h1>
                <p className="text-gray-500 font-medium">يرجى ملء البيانات التالية بدقة لضمان سرعة التواصل.</p>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-gray-700 mr-2">الاسم بالكامل</label>
                    <input required placeholder="اكتب اسمك هنا" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-medical-lightBlue/30 text-lg font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-gray-700 mr-2">رقم الموبايل</label>
                    <input required type="tel" placeholder="01xxxxxxxxx" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-medical-lightBlue/30 text-lg font-bold" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 mr-2">اختر فرع العيادة</label>
                  <select required className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-medical-lightBlue/30 text-lg font-bold">
                    <option value="cairo">فرع القاهرة (التجمع الخامس)</option>
                    <option value="mansoura">فرع المنصورة</option>
                    <option value="sinbellawein">فرع السنبلاوين</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-gray-700 mr-2">سبب الزيارة أو الشكوى</label>
                  <textarea placeholder="يرجى كتابة نبذة مختصرة عن الحالة..." className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-medical-lightBlue/30 text-lg font-bold h-40 resize-none"></textarea>
                </div>
              </div>

              <button type="submit" className="w-full bg-medical-blue text-white py-6 rounded-2xl font-black text-2xl shadow-2xl hover:bg-medical-lightBlue transition-all transform hover:scale-[1.01] active:scale-95">إرسال طلب الحجز</button>
              
              <p className="text-center text-xs text-gray-400 font-bold">بإرسالك لهذا النموذج، فأنت توافق على سياسة الخصوصية الخاصة بالعيادة.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
