import React from 'react';
import { 
  YOUTUBE_URL, 
  FACEBOOK_URL, 
  INSTAGRAM_URL, 
  TIKTOK_URL,
  WHATSAPP_URL
} from '../constants';

const SocialSidebar: React.FC = () => {
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
      alert('تم نسخ رابط الموقع بنجاح!');
    }
  };

  const socialLinks = [
    { 
      url: WHATSAPP_URL, 
      color: 'bg-[#25D366]', 
      hoverColor: 'hover:shadow-[#25D366]/40', 
      label: 'واتساب',
      icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />' 
    },
    { 
      url: FACEBOOK_URL, 
      color: 'bg-[#1877F2]', 
      hoverColor: 'hover:shadow-[#1877F2]/40', 
      label: 'فيسبوك',
      icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> 
    },
    { 
      url: INSTAGRAM_URL, 
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', 
      hoverColor: 'hover:shadow-[#ee2a7b]/40', 
      label: 'انستجرام',
      icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />' 
    },
    { 
      url: TIKTOK_URL, 
      color: 'bg-black', 
      hoverColor: 'hover:shadow-black/40', 
      label: 'تيك توك',
      icon: <path d="M12.525.02c1.31-.032 2.612-.019 3.916-.01 0 1.41-.012 2.819.01 4.223.946-.613 2.112-.94 3.23-.815.428.048.843.153 1.246.309.006 1.428-.006 2.858.003 4.287-.582-.203-1.201-.302-1.819-.297-.84.006-1.674.237-2.394.673-.591.358-1.07.876-1.391 1.488-.018 3.292.012 6.584-.015 9.876-.113 1.488-.85 2.898-2.106 3.737-1.258.835-2.887 1.084-4.329.684-1.378-.383-2.583-1.38-3.21-2.65-.63-1.272-.663-2.818-.088-4.113.57-1.282 1.678-2.288 3.018-2.695.006-1.437-.006-2.875.003-4.312-1.348.156-2.636.756-3.606 1.704C3.84 13.06 3.21 14.734 3.195 16.48c-.015 2.133.918 4.209 2.53 5.61 1.611 1.401 3.822 1.956 5.86 1.48 2.038-.476 3.703-2.035 4.385-3.992.015-3.3.003-6.6.003-9.9.897.66 1.98.98 3.078.915.44-.027.87-.11 1.28-.246.006-1.428-.006-2.858.003-4.287-.582.203-1.2.302-1.82.297-.84-.006-1.674-.237-2.394-.673-.59-.358-1.07-.876-1.39-1.488-.02-3.292.01-6.584-.01-9.876z" />' 
    },
    { 
      url: YOUTUBE_URL, 
      color: 'bg-[#FF0000]', 
      hoverColor: 'hover:shadow-[#FF0000]/40', 
      label: 'يوتيوب',
      icon: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />' 
    }
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[1000] flex flex-col gap-5">
      <div className="flex flex-col gap-4 p-3 bg-white/20 nav-blur rounded-3xl border border-white/30 shadow-2xl">
        {socialLinks.map((social, idx) => (
          <a 
            key={idx}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`group relative w-12 h-12 ${social.color} text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-125 hover:-rotate-12 ${social.hoverColor} hover:shadow-2xl`}
            title={social.label}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current transition-transform duration-500 group-hover:scale-110">
              {social.icon}
            </svg>
            <span className="absolute left-full ml-4 px-4 py-2 bg-medical-blue text-white text-[10px] font-black rounded-xl opacity-0 translate-x-[-10px] pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 whitespace-nowrap shadow-xl border border-white/10 uppercase tracking-widest">
              {social.label}
            </span>
          </a>
        ))}
        <div className="h-px bg-white/20 mx-2 my-1"></div>
        <button 
          onClick={handleShare}
          className="group relative w-12 h-12 bg-medical-blue text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-125 hover:bg-medical-green hover:shadow-medical-green/40"
          title="مشاركة"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transition-transform duration-500 group-hover:scale-110">
            <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          <span className="absolute left-full ml-4 px-4 py-2 bg-medical-blue text-white text-[10px] font-black rounded-xl opacity-0 translate-x-[-10px] pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 whitespace-nowrap shadow-xl border border-white/10 uppercase tracking-widest">
            مشاركة الموقع
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialSidebar;