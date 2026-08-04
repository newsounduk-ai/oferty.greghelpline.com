import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import { 
  ArrowLeft, Clock, Calendar, User, Share2, Check, ExternalLink, 
  BookOpen, Sparkles, Phone, Mail, ChevronRight, MessageSquare
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = useMemo(() => {
    return BLOG_POSTS.find((p) => p.slug === slug);
  }, [slug]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return BLOG_POSTS
      .filter((p) => p.slug !== post.slug)
      .slice(0, 3);
  }, [post]);

  // Extract H2 headings for Table of Contents
  const tocHeadings = useMemo(() => {
    if (!post) return [];
    const h2Regex = /^##\s+(.+)$/gm;
    const matches: string[] = [];
    let match;
    while ((match = h2Regex.exec(post.content)) !== null) {
      matches.push(match[1].trim());
    }
    return matches;
  }, [post]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center space-y-6 font-sans">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="font-display font-bold text-2xl text-gray-900">Artykuł nie został znaleziony</h1>
        <p className="text-sm text-gray-600">
          Przepraszamy, ale artykuł, którego szukasz, nie istnieje lub został przeniesiony pod inny adres.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B1F3A] text-white text-xs font-bold rounded-xl hover:bg-black transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Powrót do wszystkich artykułów</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="pb-20 font-sans">
      
      {/* Top Navigation & Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-blue-900 transition-colors">Strona Główna</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <Link to="/blog" className="hover:text-blue-900 transition-colors">Poradnik</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="bg-gradient-to-b from-slate-900 via-[#0B1F3A] to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-blue-900/50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-amber-400 text-[#0B1F3A] text-xs font-black rounded-full uppercase tracking-wider shadow-sm">
              {post.categoryLabel}
            </span>
            <span className="text-xs text-gray-300 font-medium flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {post.readTime} czytania
            </span>
          </div>

          <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-blue-100/90 leading-relaxed font-sans border-l-4 border-amber-400 pl-4 py-1 bg-white/5 rounded-r-xl">
            {post.summary}
          </p>

          {/* Author Info Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-amber-400 shadow-md"
              />
              <div>
                <div className="text-xs font-bold text-white">{post.author.name}</div>
                <div className="text-[11px] text-amber-300">{post.author.role}</div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Skopiowano link!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-amber-400" />
                  <span>Udostępnij artykuł</span>
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Table of Contents (if match H2s) */}
        {tocHeadings.length > 0 && (
          <div className="mb-10 p-6 bg-amber-50/60 border border-amber-200/80 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-extrabold text-amber-950 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Spis treści tego artykułu</span>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-800 font-sans">
              {tocHeadings.map((heading, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">{idx + 1}.</span>
                  <span className="font-semibold">{heading}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Markdown Article Body */}
        <div className="prose prose-slate max-w-none text-gray-800 leading-relaxed font-sans text-sm sm:text-base space-y-6">
          <div className="markdown-body">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>

        {/* Dedicated CTA Section at the end of the post */}
        <section className="mt-12 p-8 sm:p-10 bg-gradient-to-br from-[#0B1F3A] via-slate-900 to-blue-950 text-white rounded-3xl shadow-xl border border-blue-800/40 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-[#0B1F3A] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Pomoc polskiego doradcy w Wielkiej Brytanii</h3>
              <p className="text-xs text-amber-300 font-semibold">Usługi doradcze dla Polaków są w 100% darmowe</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans bg-white/5 p-4 rounded-2xl border border-white/10">
            {post.ctaText}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              to={post.ctaUrl}
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-[#0B1F3A] font-sans font-black text-xs sm:text-sm rounded-2xl transition-all shadow-lg text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{post.ctaButtonText}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            {post.externalLink && (
              <a
                href={post.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans font-bold text-xs sm:text-sm rounded-2xl transition-all text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Oficjalny partner</span>
                <ExternalLink className="w-4 h-4 text-amber-400" />
              </a>
            )}
          </div>
        </section>

        {/* Author Footer Profile */}
        <div className="mt-10 p-6 bg-white rounded-3xl border border-gray-200 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-amber-400 flex-shrink-0"
          />
          <div className="space-y-2 text-center sm:text-left">
            <div className="font-display font-bold text-base text-[#0B1F3A]">{post.author.name}</div>
            <div className="text-xs text-amber-600 font-bold">{post.author.role}</div>
            <p className="text-xs text-gray-600 font-sans leading-relaxed">
              Działam jako niezależny doradca polskim emigrantom w Wielkiej Brytanii. Zawsze pomagam bezpłatnie w języku polskim. Masz pytania? Zadzwón: 07491 978400.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gray-200 space-y-6">
            <h3 className="font-display font-bold text-xl text-[#0B1F3A]">Inne przydatne artykuły</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/blog/${rel.slug}`}
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">{rel.categoryLabel}</span>
                    <h4 className="font-display font-bold text-sm text-gray-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="text-[11px] font-bold text-blue-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Czytaj więcej</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-[#0B1F3A] text-xs font-bold rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Powrót do spisu artykułów</span>
          </Link>
        </div>

      </div>
    </article>
  );
}
