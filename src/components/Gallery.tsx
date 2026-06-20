import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag, ZoomIn } from 'lucide-react';

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal_1',
    url: '/src/assets/images/dfit_hero_banner_1781954858361.jpg',
    category: 'interior',
    title: 'Cinematic Lifting Racks and Gold spotlights'
  },
  {
    id: 'gal_2',
    url: '/src/assets/images/dfit_workout_session_1781954900591.jpg',
    category: 'equipment',
    title: 'High-End Commercial Dumbbell Stands'
  },
  {
    id: 'gal_3',
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    category: 'equipment',
    title: 'Kettlebells and Resistance Accessories'
  },
  {
    id: 'gal_4',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    category: 'workout',
    title: 'Spacious barbell rubber and deck area'
  },
  {
    id: 'gal_5',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    category: 'interior',
    title: 'Premium Multi Station Frame and Floor Space'
  },
  {
    id: 'gal_6',
    url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    category: 'sessions',
    title: 'Heavy overhead lifting tutorial'
  },
  {
    id: 'gal_7',
    url: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80',
    category: 'interior',
    title: 'Pristine layout benches and strength rows'
  },
  {
    id: 'gal_8',
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    category: 'sessions',
    title: 'Core posture and training guidance'
  }
];

const categoryLabels = {
  all: 'All Looks',
  interior: 'Gym Interior',
  equipment: 'Equipment Setup',
  workout: 'Workout Area',
  sessions: 'Training Sessions'
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'equipment' | 'workout' | 'sessions'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const openLightbox = (id: string) => {
    // Find index inside the current filtered set to support logical navigation
    const idx = filteredItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <div className="bg-gymblack text-white min-h-screen pt-24 selection:bg-gold-500 selection:text-black">
      
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-gymblack overflow-hidden border-b border-zinc-900/40">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold block">
            VISUAL EXPERIENCE PORTFOLIO
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            GYM <span className="text-gold-500">GALLERY</span>
          </h1>
          <div className="h-1 w-16 bg-gold-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto">
            Explore D Fitness Gym Interior, Heavy equipment racks, spacious floor divisions, and training sessions in beautiful high definition.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Tabs header scrollable on mobile */}
          <div className="flex items-center justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 md:gap-3">
            {Object.keys(categoryLabels).map((catKey) => {
              const label = categoryLabels[catKey as keyof typeof categoryLabels];
              const isActive = activeFilter === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => {
                    setActiveFilter(catKey as any);
                    setLightboxIndex(null);
                  }}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer backdrop-blur-md ${
                    isActive
                      ? 'bg-gold-500 text-black border border-gold-500 font-black shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                      : 'bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Masonry-style Item Grid with zoom animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  key={item.id}
                  onClick={() => openLightbox(item.id)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[4/3] gold-glow-hover"
                >
                  
                  {/* Photo content */}
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 animate-fade-in"
                  />
                  
                  {/* Glass Card Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                    
                    {/* Top indicator tag */}
                    <div className="self-end flex items-center gap-1.5 rounded-full bg-zinc-950/80 px-3 py-1 border border-gold-500/10 backdrop-blur-sm text-[9px] uppercase font-bold text-gold-500">
                      <Tag className="h-3 w-3" />
                      <span>{categoryLabels[item.category]}</span>
                    </div>

                    {/* Bottom title display */}
                    <div className="flex items-center justify-between gap-2 border-t border-zinc-800/60 pt-3">
                      <div>
                        <span className="block font-display text-sm font-bold text-white uppercase">{item.title}</span>
                        <span className="block text-[8px] font-mono uppercase text-zinc-500">Click to expand</span>
                      </div>
                      <div className="p-2 bg-gold-500 text-black rounded-lg">
                        <ZoomIn className="h-4 w-4" />
                      </div>
                    </div>

                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Advanced Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
            
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Header controls inside the lightbox overlay */}
            <div className="relative z-10 w-full max-w-5xl flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-gold-500 text-black text-[10px] uppercase font-bold font-mono">
                  {categoryLabels[filteredItems[lightboxIndex].category]}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Carousel Screen */}
            <div className="relative z-10 w-full max-w-5xl flex items-center justify-center aspect-[16/10] sm:aspect-[16/9] md:px-12 select-none">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 md:left-4 z-20 p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all cursor-pointer shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5.5 w-5.5 stroke-[2.5]" />
              </button>

              {/* Box Image with Smooth fade */}
              <div className="w-full h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center relative">
                <motion.img
                  key={filteredItems[lightboxIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  src={filteredItems[lightboxIndex].url}
                  alt={filteredItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 md:right-4 z-20 p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all cursor-pointer shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="h-5.5 w-5.5 stroke-[2.5]" />
              </button>

            </div>

            {/* Photo Title Overlay (Bottom) */}
            <div className="relative z-10 text-center max-w-xl mx-auto mt-4 px-2">
              <h4 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-zinc-100">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">
                D Fitness Center • Genuine Photo
              </p>
            </div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
