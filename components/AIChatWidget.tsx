import React, { useState, useRef, useEffect } from 'react';
import { getMedicalAdvice, ChatMessage } from '../services/fakeService';
import { DOCTOR_NAME } from '../constants.tsx';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `أهلاً بك! أنا المساعد الذكي لـ ${DOCTOR_NAME}. كيف يمكنني مساعدتك اليوم؟` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(({ role, text }) => ({ role, text }));
      history.push(userMsg);
      const response = await getMedicalAdvice(history, false, false);
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch {
      setMessages(prev => [...prev, { role: 'model', text: 'عذراً، حدث خطأ تقني.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[2000] font-cairo" dir="rtl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-red-500 rotate-90' : 'bg-medical-blue'}`}
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[380px] h-[600px] bg-white rounded-[40px] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-medical-blue p-6 text-white text-center">
            <p className="font-black text-sm">مساعد د. أشرف الذكي</p>
          </div>
          <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-4 rounded-[20px] text-sm font-bold shadow-sm ${msg.role === 'user' ? 'bg-medical-blue text-white' : 'bg-white text-slate-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 bg-medical-green rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-medical-green rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-medical-green rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-white border-t">
            <div className="flex gap-2 bg-slate-50 p-2 rounded-2xl">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اكتب سؤالك..."
                className="flex-grow bg-transparent border-none rounded-xl px-4 py-2 font-bold text-sm outline-none focus:ring-0"
              />
              <button onClick={handleSend} disabled={isLoading || !input.trim()} className="bg-medical-blue text-white p-3 rounded-xl disabled:opacity-50 transition-all hover:bg-medical-green">
                إرسال
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;