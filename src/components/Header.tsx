import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import { Menu, X, Phone, Flame, Dumbbell } from 'lucide-react';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  onJoinClick: () => void;
}

export default function Header({ activePage, setActivePage, onJoinClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'About', value: Page.About },
    { label: 'Services', value: Page.Services },
    { label: 'Gallery', value: Page.Gallery },
    { label: 'Contact', value: Page.Contact },
  ];

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-black/50 backdrop-blur-md py-3 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-black/20 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleNavClick(Page.Home)}
            className="flex items-center gap-3.5 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gold-500 flex items-center justify-center font-bold text-black rounded-xs transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-500 shadow-[0_0_15px_rgba(212,175,55,0.35)]">
              <span className="-rotate-45 font-display font-black text-base">D</span>
            </div>
            <div>
              <span className="font-display text-xl font-black uppercase tracking-tight text-white leading-none block">
                D FITNESS<span className="text-gold-500 italic"> GYM</span>
              </span>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-zinc-400 font-mono mt-0.5">
                Training Center • Est. 2023
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activePage === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`relative font-display text-sm font-semibold tracking-wide uppercase transition-colors py-1 cursor-pointer ${
                    isActive ? 'text-gold-500' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call and CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919671592059"
              className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-xs font-bold text-zinc-300 hover:border-gold-500/30 hover:text-gold-500 transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-gold-500" />
              +91 96715 92059
            </a>
            <button
              onClick={onJoinClick}
              className="relative overflow-hidden rounded-lg bg-gold-500 px-5 py-2.5 font-display text-xs font-bold text-black hover:bg-gold-600 transition-all active:scale-95 shadow-md shadow-gold-500/10 cursor-pointer"
            >
              JOIN NOW
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+919671592059"
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/40 text-gold-500 hover:bg-zinc-800"
              aria-label="Call support"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-900/40"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-30 h-full w-[280px] bg-black/60 backdrop-blur-xl border-l border-white/10 p-6 shadow-2xl flex flex-col justify-between md:hidden"
            >
              <div className="pt-14">
                <div className="flex items-center gap-2 mb-8 pb-4 border-b border-zinc-900">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500 text-black">
                    <Flame className="h-4 w-4" />
                  </div>
                  <span className="font-display text-lg font-bold text-white tracking-tight uppercase">
                    D FITNESS GYM
                  </span>
                </div>

                <nav className="flex flex-col gap-5">
                  {navItems.map((item) => {
                    const isActive = activePage === item.value;
                    return (
                      <button
                        key={item.value}
                        onClick={() => handleNavClick(item.value)}
                        className={`text-left font-display text-base font-semibold uppercase tracking-wider transition-colors py-1 cursor-pointer ${
                          isActive ? 'text-gold-500 font-extrabold' : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-4 border-t border-zinc-900 pt-6">
                <a
                  href="tel:+919671592059"
                  className="flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 py-3 text-sm font-semibold text-zinc-300"
                >
                  <Phone className="h-4 w-4 text-gold-500" />
                  +91 96715 92059
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onJoinClick();
                  }}
                  className="w-full rounded-lg bg-gold-500 py-3.5 text-center font-display text-sm font-bold text-black shadow-lg shadow-gold-500/10 cursor-pointer"
                >
                  JOIN NOW
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
