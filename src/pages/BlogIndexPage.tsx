import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Search, Calendar, Clock, ArrowRight, User, 
  Wifi, Zap, Smartphone, ShieldCheck, Palmtree, HelpCircle, Sparkles
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { ServiceType } from '../types';

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        post.title.toLowerCase().includes(q) ||
        post.metaDescription.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q);
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS[0];

  const getCategoryIcon = (category: ServiceType | 'porady') => {
    switch (category) {
      case 'internet': return <Wifi className="w-3.5 h-3.5" />;
      case 'energia': return <Zap className="w-3.5 h-3.5" />;
      case 'sim': return <Smartphone className="w-3.5 h-3.5" />;
      case 'ubezpieczenia': return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'wakacje': return <Palmtree className="w-3.5 h-3.5" />;
      default: return <HelpCircle className="w-3.5 h-3.5" />;
    }
  };

  const getCategoryBadgeClass = (category: ServiceType | 'porady') => {
    switch (category) {
      case 'internet': return 'bg-blue-100 text-blue-900 border-blue-200';
      case 'energia': return 'bg-amber-100 text-amber-900 border-amber-200';
      case 'sim': return 'bg-indigo-100 text-indigo-900 border-indigo-200';
      case 'ubezpieczenia': return 'bg-emerald-100 text-emerald-900 border-emerald-200';
      case 'wakacje': return 'bg-teal-100 text-teal-900 border-teal-200';
      default: return 'bg-purple-100 text-purple-900 border-purple-200';
    }
  };

  return (
    <div className="space-y-12 pb-16 font-sans">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-blue-900 via-[#0B1F3A] to-slate-900 text-white py-14 sm:py-16 px-4 rounded-3xl relative overflow-hidden border border-blue-800/40 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Poradnik & Baza Wiedzy w Wielkiej Brytanii</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
            Praktyczne artykuły i porady po polsku
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Dowiedz się, jak mądrze oszczędzać na mediach, bezstresowo przenosić numery i internet, chronić oszczędności oraz planować wakacje z Wielkiej Brytanii.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Szukaj tematu (np. PAC code, światłowód, fronting, energia)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl text-xs sm:text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/20 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-xs text-gray-300 hover:text-white px-2 py-1 bg-white/10 rounded-lg"
                >
                  Wyczyść
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {[
            { id: 'all', label: 'Wszystkie (10)', icon: Sparkles },
            { id: 'internet', label: 'Internet', icon: Wifi },
            { id: 'energia', label: 'Prąd & Gaz', icon: Zap },
            { id: 'sim', label: 'SIM & Telefony', icon: Smartphone },
            { id: 'ubezpieczenia', label: 'Ubezpieczenia', icon: ShieldCheck },
            { id: 'wakacje', label: 'Wakacje', icon: Palmtree },
            { id: 'porady', label: 'Porady & Bezpieczeństwo', icon: HelpCircle },
          ].map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-gray-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured Post (only if no active search or if all selected) */}
      {!searchQuery && selectedCategory === 'all' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold border ${getCategoryBadgeClass(featuredPost.category)}`}>
                    {getCategoryIcon(featuredPost.category)}
                    <span>{featuredPost.categoryLabel}</span>
                  </span>
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                  <span className="text-xs text-amber-600 font-bold bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                    Polecany artykuł
                  </span>
                </div>

                <Link to={`/blog/${featuredPost.slug}`}>
                  <h2 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-[#0B1F3A] group-hover:text-blue-700 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans line-clamp-3">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-amber-400"
                  />
                  <div>
                    <div className="text-xs font-bold text-gray-900">{featuredPost.author.name}</div>
                    <div className="text-[10px] text-gray-500">{featuredPost.author.role}</div>
                  </div>
                </div>

                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors"
                >
                  <span>Czytaj całość</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-slate-900 p-8 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-amber-400 flex items-center justify-center border border-white/20">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  Chcesz od razu sprawdzić oferty w Twoim mieście?
                </h3>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Grzegorz bezpłatnie przeanalizuje Twoje rachunki i porówna taryfy światłowodu, energii oraz kart SIM.
                </p>
                <Link
                  to="/internet"
                  className="inline-block py-3 px-6 bg-amber-400 hover:bg-amber-500 text-[#0B1F3A] font-bold text-xs rounded-xl shadow-md transition-all text-center"
                >
                  Sprawdź ofertę internetu
                </Link>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Main Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl text-[#0B1F3A]">
            {searchQuery 
              ? `Wyniki wyszukiwania (${filteredPosts.length})` 
              : selectedCategory === 'all' 
                ? 'Wszystkie artykuły' 
                : `Kategoria: ${BLOG_POSTS.find(p => p.category === selectedCategory)?.categoryLabel || selectedCategory}`
            }
          </h2>
          <span className="text-xs text-gray-500 font-medium">
            Znaleziono {filteredPosts.length} {filteredPosts.length === 1 ? 'artykuł' : 'artykułów'}
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 max-w-lg mx-auto space-y-4">
            <Search className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="font-display font-bold text-base text-gray-800">
              Nie znaleziono artykułów pasujących do zapytania
            </h3>
            <p className="text-xs text-gray-500 font-sans">
              Spróbuj wpisać inne słowo kluczowe lub wybierz inną kategorię w filtrze powyżej.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="py-2.5 px-5 bg-[#0B1F3A] text-white text-xs font-bold rounded-xl hover:bg-black transition-all cursor-pointer"
            >
              Pokaż wszystkie artykuły
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div className="p-6 space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold border ${getCategoryBadgeClass(post.category)}`}>
                      {getCategoryIcon(post.category)}
                      <span>{post.categoryLabel}</span>
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="font-display font-bold text-base text-[#0B1F3A] group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50/60 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-amber-400"
                    />
                    <span className="text-[11px] font-semibold text-gray-700">{post.author.name}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0B1F3A] group-hover:text-amber-600 transition-colors"
                  >
                    <span>Czytaj</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-gradient-to-br from-[#0B1F3A] via-slate-900 to-blue-950 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-blue-800/40 relative overflow-hidden text-center">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              Zadzwoń do Grzegorza pod numer <strong className="text-amber-400 font-bold">07491 978400</strong> lub zostaw e-mail na <strong className="text-white">office@greghelpline.com</strong>. Poradnik i indywidualne doradztwo są dla Polaków w Wielkiej Brytanii całkowicie darmowe!
            </p>
            <div className="pt-2">
              <Link
                to="/internet"
                className="inline-block py-3.5 px-8 bg-amber-400 hover:bg-amber-500 text-[#0B1F3A] font-sans font-black text-xs rounded-2xl transition-all shadow-lg cursor-pointer"
              >
                Zamów darmową konsultację po polsku
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
