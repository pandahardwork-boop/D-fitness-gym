import { Page } from '../types';
import { Dumbbell, Phone, MapPin, Mail, ChevronRight, Clock } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: Page) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handleNavClick = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home Experience', value: Page.Home },
    { label: 'Our Story & Philosophy', value: Page.About },
    { label: 'Premium Gym Services', value: Page.Services },
    { label: 'Inside the Gym (Gallery)', value: Page.Gallery },
    { label: 'Location & Consultation', value: Page.Contact },
  ];

  return (
    <footer className="relative bg-gymblack border-t border-zinc-900 overflow-hidden">
      
      {/* Decorative Gold Laser Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Gym Bio */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 bg-gold-500 flex items-center justify-center font-bold text-black rounded-xs transform rotate-45 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                <span className="-rotate-45 font-display font-black text-sm">D</span>
              </div>
              <span className="font-display text-lg font-black uppercase text-white tracking-wider">
                D FITNESS<span className="text-gold-500"> GYM</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Discover a premium fitness experience tailored for results. We combine spacious workout areas, comprehensive coaching, and an supportive atmosphere to help you build lasting habits.
            </p>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2.5 text-zinc-300">
                <Clock className="h-4 w-4 text-gold-500 flex-shrink-0" />
                <span>Mon – Sat: 06:00 AM – 10:00 PM <br/><span className="text-zinc-500">Sunday: Closed</span></span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-6 md:col-span-4 space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              QUICK SECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.value}>
                  <button
                    onClick={() => handleNavClick(link.value)}
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-gold-500 transition-colors text-left cursor-pointer"
                  >
                    <ChevronRight className="h-3 w-3 text-gold-500" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 sm:col-span-6 md:col-span-4 space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              VISIT OUR CENTER
            </h4>
            <div className="space-y-3.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  A-64, Second Floor, 40 Ft Road, Chanakya Place, C1, Janakpuri, New Delhi – 110059
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold-500 flex-shrink-0" />
                <a href="tel:+919671592059" className="hover:text-white transition-colors">
                  +91 96715 92059
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold-500 flex-shrink-0" />
                <span className="text-zinc-500">info@dfitnessgym.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider with Center Badge */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-zinc-800/60" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gymblack px-3 font-mono text-[9px] uppercase tracking-[0.3em] text-gold-500">
              5.0 ★ Rated (72 reviews)
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} D Fitness Gym. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="text-zinc-600">Janakpuri Branch</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
