import { motion } from 'motion/react';
import { Page } from '../types';
import { Dumbbell, Target, Eye, Users2, ShieldCheck, HeartPulse } from 'lucide-react';

interface AboutProps {
  setActivePage: (page: Page) => void;
  onJoinClick: () => void;
}

export default function About({ setActivePage, onJoinClick }: AboutProps) {
  const handleNavClick = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const coreValues = [
    {
      title: 'Strength Development',
      desc: 'Build reliable muscular power and physical persistence through monitored heavy movements.',
      icon: Dumbbell
    },
    {
      title: 'Discipline & Habits',
      desc: 'Train your brain alongside your muscle fibers. Stay consistent with our encouraging atmosphere.',
      icon: ShieldCheck
    },
    {
      title: 'Heart Health',
      desc: 'Enhance your absolute stamina, reduce high-intensity fatigue, and maintain low resting heart rates.',
      icon: HeartPulse
    }
  ];

  return (
    <div className="bg-gymblack text-white min-h-screen pt-24 selection:bg-gold-500 selection:text-black">
      
      {/* Page Header banner */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-gymblack overflow-hidden border-b border-zinc-900/40">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold block">
            GET TO KNOW US BETTER
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            OUR STORY & <span className="text-gold-500">PHILOSOPHY</span>
          </h1>
          <div className="h-1 w-16 bg-gold-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto">
            Discover the origins, core values and dedicated coaching framework behind D Fitness Gym.
          </p>
        </div>
      </section>

      {/* Our Story Grid Block */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-gold-500">
                <Users2 className="h-5 w-5" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold">Community Focused Hub</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase leading-tight tracking-tight text-white">
                Helping our local community build healthier, stronger lifestyles through professional guidance.
              </h2>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                At D Fitness Gym, we reject complex marketing gimmicks and false promises. Established with a single-focused intent to serve Janakpuri with high-quality workouts and essential equipment, we support members in archiving healthier lifestyles through consistent, standard training and professional instructions.
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Whether your goal is basic weight loss, intense bodybuilding parameters, or core stamina improvements, we have the ideal set of tools and guidance. Our space is purposely organized to give duplicates of highly requested plates, providing swift workflows so you rarely have to wait between sets.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-900">
                <div>
                  <span className="block font-display text-2xl sm:text-3xl font-black text-gold-500">100%</span>
                  <span className="block text-[9px] uppercase font-mono text-zinc-500">Real Reviews</span>
                </div>
                <div>
                  <span className="block font-display text-2xl sm:text-3xl font-black text-white">Essential</span>
                  <span className="block text-[9px] uppercase font-mono text-zinc-500">Weight Setup</span>
                </div>
                <div>
                  <span className="block font-display text-2xl sm:text-3xl font-black text-white">Budget</span>
                  <span className="block text-[9px] uppercase font-mono text-zinc-500">Friendly Plans</span>
                </div>
              </div>

            </div>

            {/* Split Photo Section - Placeholder format */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/60 aspect-[4/5] relative group gold-glow">
                
                {/* Photo frame */}
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=720&q=80"
                  alt="D Fitness Lifting Floor"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Overlaid Gold Badge */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-gymblack/90 border border-gold-500/10 text-center">
                  <span className="block font-display text-lg font-bold text-gold-500">5.0 ★</span>
                  <span className="block text-[8px] uppercase tracking-wider font-mono text-zinc-400">Janakpuri Center</span>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
                  <span className="font-mono text-[9px] text-gold-500 uppercase tracking-widest font-bold">D Fitness Area</span>
                  <h4 className="font-display text-sm font-bold text-white uppercase mt-1">Spacious & Supportive workouts</h4>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Split section */}
      <section className="py-16 bg-zinc-950/40 border-y border-zinc-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Mission Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="frosted-glass p-8 rounded-2xl relative space-y-4"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500">
                <Target className="h-6 w-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                OUR MISSION
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                Helping individuals build strength, confidence, and self-discipline that carries outside the gymnasium floor. We provide honest environment parameters and professional support at pricing plans that make health accessible.
              </p>
              
              <ul className="text-xs space-y-2 text-zinc-400 pt-2 font-mono">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  No unsolicited sales pressure
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  High-level focus correction
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Authentic local ecosystem
                </li>
              </ul>
            </motion.div>

            {/* Vision Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="frosted-glass-premium p-8 rounded-2xl relative space-y-4"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500">
                <Eye className="h-6 w-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                OUR VISION
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                Creating a healthier, safer, and stronger fitness community in West Delhi. We strive to become the leading training hub where discipline is nurtured, achievements are realistic, and training is treated with integrity.
              </p>
              
              <ul className="text-xs space-y-2 text-zinc-400 pt-2 font-mono">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Spacious floors for all sizes
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  A trusted neighborhood benchmark
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Knowledge-centric coaching framework
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core values block */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-500 font-bold block">OUR ATTRIBUTE BENCHMARKS</span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase">STRENGTH THROUGH INTEGRITY</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">We develop consistent, functional health improvements rather than short-lived water loss diets or dangerous fitness claims.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-xl p-6 text-center space-y-3 backdrop-blur-md transition-all duration-300 ${
                    idx === 1 
                      ? 'frosted-glass-premium' 
                      : 'frosted-glass'
                  }`}
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-white uppercase">{val.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={onJoinClick}
              className="px-8 py-4 rounded-xl bg-gold-500 text-black font-display font-black text-xs uppercase tracking-wider hover:bg-gold-600 transition-all cursor-pointer"
            >
              VISIT D FITNESS GYM TODAY
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
