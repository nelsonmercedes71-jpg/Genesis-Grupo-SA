'use client';

import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '@/lib/data';
import { BlogModal } from './BlogModal';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Blog & Tendências de Arquitetura</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">
            Conhecimento & Inovação no Huambo
          </h2>
          <p className="text-neutral-600 text-base">
            Artigos, análises bioclimáticas e conselhos práticos de construção elaborados pelos especialistas do Genesis Grupo S.A.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-stone-50 rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-900">
                  {post.category}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#8B0000]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-neutral-900 group-hover:text-[#8B0000] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-bold text-[#8B0000]">
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Blog Article Reader Modal */}
      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  );
};
