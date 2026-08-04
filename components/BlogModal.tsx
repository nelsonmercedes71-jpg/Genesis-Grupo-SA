'use client';

import React from 'react';
import { BlogPost } from '@/lib/data';
import { X, Calendar, Clock, User, Tag, Share2, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col border border-neutral-200 text-left"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-neutral-900 text-white shrink-0">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#8B0000] text-white">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Article Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
            
            {/* Title & Metadata */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-xs text-neutral-500 pb-4 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-neutral-800">{post.author.name}</p>
                    <p className="text-[10px] text-neutral-500">{post.author.role}</p>
                  </div>
                </div>

                <div className="ml-auto flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#8B0000]" />
                    {post.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-900">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Paragraphs Content */}
            <div className="prose prose-neutral max-w-none text-neutral-700 text-base leading-relaxed space-y-4">
              {post.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Article Tags */}
            <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-[#8B0000]" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-stone-100 text-neutral-700 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between shrink-0">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-neutral-700 hover:bg-neutral-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar aos Artigos</span>
            </button>

            <a
              href={`https://wa.me/244923881992?text=Li%20o%20artigo%20"${encodeURIComponent(post.title)}"%20e%20gostaria%20de%20saber%20mais`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#8B0000] hover:bg-[#700000] transition-colors"
            >
              Falar sobre este tema no WhatsApp
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
