
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 text-right">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-medical-blue">المدونة الطبية</h1>
          <div className="w-24 h-2 bg-medical-lightBlue mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl font-light">تثقيف المريض هو أولى خطوات النجاح العلاجي. شروحات مبسطة لأهم إصابات العظام.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-[40px] shadow-sm overflow-hidden border border-gray-100 hover:shadow-2xl transition-all flex flex-col group">
              <div className="h-56 bg-medical-blue flex items-center justify-center text-8xl transition-transform group-hover:scale-110 duration-700">{post.icon}</div>
              <div className="p-10 flex-grow space-y-6">
                <div className="flex justify-between items-center">
                  <span className="bg-blue-50 text-medical-lightBlue text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest">{post.category}</span>
                  <span className="text-gray-400 text-xs font-bold">{post.date}</span>
                </div>
                <h2 className="text-2xl font-black text-medical-blue leading-tight group-hover:text-medical-lightBlue transition-colors">{post.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed font-medium line-clamp-3">{post.summary}</p>
                <div className="pt-8 border-t border-gray-50 text-gray-700 text-sm leading-relaxed font-medium">{post.content}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
