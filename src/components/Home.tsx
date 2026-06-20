import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Page, Review } from '../types';
import { 
  Award, ShieldCheck, Heart, Users, MapPin, Phone, Star, ArrowRight, CheckCircle2, Trophy, Flame, HelpCircle, ChevronRight, Dumbbell, Sparkles
} from 'lucide-react';

interface HomeProps {
  setActivePage: (page: Page) => void;
  onJoinClick: () => void;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 'rev_1',
    name: 'Amit Rawat',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The workout environment here is fantastic. Very spacious workout area compared to other gyms nearby. Perfect for serious lifting and friendly atmosphere.',
    tag: 'Spacious & Friendly'
  },
  {
    id: 'rev_2',
    name: 'Pooja Choudhary',
    rating: 5,
    date: '1 month ago',
    comment: 'Extremely professional guidance and knowledgeable coaching staff. They explain movements clearly instead of just giving generic diet plans. Definitely value for money.',
    tag: 'Expert Coaching'
  },
  {
    id: 'rev_3',
    name: 'Rahul Sen',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Value for money is a major plus! They have all essential gym equipment and duplicates of popular weights so you rarely have to wait. Highly recommended.',
    tag: 'Well Equipped'
  },
  {
    id: 'rev_4',
    name: 'Vikas Malhotra',
    rating: 5,
    date: '2 months ago',
    comment: 'Best fitness gym in Janakpuri area. The budget friendly membership plans make it highly accessible. The coaches are always around to support with form correction.',
    tag: 'Budget Friendly'
  }
];

export default function Home({ setActivePage, onJoinClick }: HomeProps) {
  // Simple progressive count up animation
  const [reviewsCount, setReviewsCount] = useState(0);
  const [ratingVal, setRatingVal] = useState(0);

  useEffect(() => {
    const rInterval = setInterval(() => {
      setReviewsCount((prev) => {
        if (prev >= 72) {
          clearInterval(rInterval);
          return 72;
        }
        return prev + 2;
      });
    }, 30);

    const rValInterval = setInterval(() => {
      setRatingVal((prev) => {
        if (prev >= 5.0) {
          clearInterval(rValInterval);
          return 5.0;
        }
        return Number((prev + 0.2).toFixed(1));
      });
    }, 45);

    return () => {
      clearInterval(rInterval);
      clearInterval(rValInterval);
    };
  }, []);

  const features = [
    {
      title: 'Professional Guidance',
      desc: 'Get constant support and form correction from our highly knowledgeable, friendly coaching staff.',
      icon: Award
    },
    {
      title: 'Spacious Workout Area',
      desc: 'Our expansive layout is designed for maximum performance, letting you train in a spacious environment.',
      icon: Trophy
    },
    {
      title: 'Complete Equipment Setup',
      desc: 'Access all essential strength training, weightlifting dumbbells, barbell setups, and cardio gear.',
      icon: Dumbbell
    },
    {
      title: 'Friendly Environment',
      desc: 'Train alongside an encouraging local community that values progress, discipline, and healthy lifestyles.',
      icon: Users
    },
    {
      title: 'Affordable Membership',
      desc: 'Achieve your desired physique without the luxury markups. Highly budget-friendly plans for everyone.',
      icon: ShieldCheck
    },
    {
      title: 'Strength & Fitness Training',
      desc: 'Integrated routines combining powerlifting, fat loss parameters, and core health support.',
      icon: Flame
    }
  ];

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gymblack text-white selection:bg-gold-500 selection:text-black">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        
        {/* Background Video/Image Block with Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/dfit_hero_banner_1781954858361.jpg"
            alt="D Fitness Gym Hero Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 filter brightness-75 scale-x-[-1]"
          />
          {/* Gradients to merge into black background */}
          <div className="absolute inset-0 bg-gradient-to-t from-gymblack via-gymblack/70 to-zinc-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-gymblack/85 via-transparent to-gymblack/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-500 mt-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>EXPERT PRESET PREMIER GYM IN JANAKPURI</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-none"
            >
              Transform Your Body.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-gold-500 to-yellow-600">
                Transform Your Life.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-sans text-sm sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed"
            >
              Train smarter, get stronger, and achieve your fitness goals with expert guidance at D Fitness Gym. Your community fitness hub in New Delhi.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={onJoinClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-500 text-black font-display text-sm font-black tracking-wide uppercase hover:bg-gold-600 transition-all shadow-xl shadow-gold-500/25 active:scale-95 cursor-pointer"
            >
              JOIN NOW
            </button>
            <a
              href="tel:+919671592059"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-sm hover:border-gold-500/40 hover:text-gold-500 font-display text-sm font-bold uppercase transition-all flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Support
            </a>
          </motion.div>

          {/* Counters Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-12 border-t border-zinc-900/55"
          >
            <div className="frosted-glass rounded-xl p-5 hover:border-gold-500/30 transition-all duration-300">
              <span className="block font-display text-2.5xl sm:text-3xl font-extrabold text-gold-500">{reviewsCount}+</span>
              <span className="block text-[9px] uppercase font-mono text-zinc-400 tracking-wider mt-1">REVIEWS ON GOOGLE</span>
            </div>
            <div className="frosted-glass rounded-xl p-5 hover:border-gold-500/30 transition-all duration-300">
              <span className="block font-display text-2.5xl sm:text-3xl font-extrabold text-gold-500 flex justify-center items-center gap-1">
                {ratingVal.toFixed(1)} <Star className="h-4.5 w-4.5 fill-gold-500 stroke-gold-500" />
              </span>
              <span className="block text-[9px] uppercase font-mono text-zinc-400 tracking-wider mt-1">FIVE STAR RATING</span>
            </div>
            <div className="frosted-glass rounded-xl p-5 hover:border-gold-500/30 transition-all duration-300">
              <span className="block font-display text-2.5xl sm:text-3xl font-extrabold text-white">Expert</span>
              <span className="block text-[9px] uppercase font-mono text-gold-500 tracking-wider mt-1">COACHING STAFF</span>
            </div>
            <div className="frosted-glass rounded-xl p-5 hover:border-gold-500/30 transition-all duration-300">
              <span className="block font-display text-2.5xl sm:text-3xl font-extrabold text-white">Essential</span>
              <span className="block text-[9px] uppercase font-mono text-gold-500 tracking-wider mt-1">GYM EQUIPMENT AVAILABLE</span>
            </div>
          </motion.div>

        </div>

        {/* Dark Bottom Blur Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gymblack to-transparent" />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500 font-bold block">
              OUR HEALTH & FITNESS PILLARS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              WHY CHOOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">D FITNESS GYM</span>
            </h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto rounded-full" />
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              Real community and smart training. Check out why residents of Janakpuri and West Delhi choose D Fitness to achieve their body targets.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 gold-glow-hover backdrop-blur-md ${
                    idx === 4 || idx === 1 
                      ? 'frosted-glass-premium' 
                      : 'frosted-glass'
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/5 border border-gold-500/20 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                    <IconComp className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {feat.desc}
                  </p>
                  
                  {/* Subtle Corner Glow Accent */}
                  <div className="absolute top-0 right-0 h-12 w-12 overflow-hidden rounded-tr-2xl">
                    <div className="absolute top-[-26px] right-[-26px] h-12 w-12 rotate-45 bg-gold-500/5 group-hover:bg-gold-500/20 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Featured Gym Experience (Gallery Quick Preview) */}
      <section className="py-20 bg-zinc-950/40 border-y border-zinc-900/60 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-500 font-bold block">
                PREMIUM ATHLETIC ENVIRONMENT
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                INSIDE THE WORKOUT HUB
              </h2>
              <div className="h-1 w-16 bg-gold-500 rounded-full" />
            </div>
            <button
              onClick={() => handleNavClick(Page.Gallery)}
              className="flex items-center gap-1.5 text-xs font-bold text-gold-500 hover:text-gold-400 uppercase tracking-widest cursor-pointer"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Masonry / Grid Layout for Experience Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Box 1 (High quality generated weight racks) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20 relative h-72 sm:h-96"
            >
              <img
                src="/src/assets/images/dfit_workout_session_1781954900591.jpg"
                alt="Strength Equipment Rows at D Fitness"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="px-2.5 py-0.5 bg-gold-500 text-black text-[9px] uppercase font-bold rounded">
                  EQUIPMENT SETUP
                </span>
                <h4 className="font-display text-lg font-bold text-white uppercase mt-1">
                  Professional Barbells & Lifting Stations
                </h4>
              </div>
            </motion.div>

            {/* Box 2 (Active Cardio Zone / Workout Area) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-4 group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20 relative h-72 sm:h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=700&q=80"
                alt="Spacious workout area dumbbells and racks"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="px-2.5 py-0.5 bg-gold-500 text-black text-[9px] uppercase font-bold rounded">
                  WORKOUT AREA
                </span>
                <h4 className="font-display text-lg font-bold text-white uppercase mt-1">
                  Spacious Training Deck
                </h4>
              </div>
            </motion.div>

            {/* Box 3 (Gym Interior Floor) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-4 group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20 relative h-72"
            >
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                alt="Kettlebells and workout mats"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="font-display text-base font-bold text-white uppercase">
                  Resistance & Functional Training
                </h4>
                <p className="text-[10px] text-zinc-400">All essential gadgets available</p>
              </div>
            </motion.div>

            {/* Box 4 (Hardcore lifting arena) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-8 group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/20 relative h-72"
            >
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                alt="D Fitness Gym Heavy lifting equipment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="font-display text-base font-bold text-white uppercase">
                  Serious Strength Culture
                </h4>
                <p className="text-[10px] text-zinc-400">Tested weights and rubberised safety flooring</p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500 font-bold block">
              100% REAL AND TRANSPARENT FEEDBACK
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              COMMUNITY VOICE
            </h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto rounded-full" />
            
            {/* Google Rating Showcase */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-5 w-5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-sm text-zinc-300 font-medium font-sans">
                <strong>5.0 Stars</strong> Rating based on <strong>72 reviews</strong> on Google Maps
              </span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.map((rev) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="frosted-glass rounded-2xl p-6 relative flex flex-col justify-between hover:border-gold-500/20 transition-all duration-300"
              >
                <div>
                  
                  {/* Tag and Rating Banner */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] uppercase font-bold font-mono">
                      {rev.tag}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">
                      {rev.date}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-6">
                    "{rev.comment}"
                  </p>

                </div>

                <div className="flex items-center justify-between border-t border-zinc-900/60 pt-4">
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase">{rev.name}</h4>
                    <span className="text-[10px] text-zinc-500 uppercase font-mono">Verified Member</span>
                  </div>
                  <div className="flex text-amber-500 gap-0.5">
                    {[1, 2, 3, 4, 5].map((starIdx) => (
                      <Star key={starIdx} className="h-3.5 w-3.5 fill-amber-500 stroke-amber-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-zinc-500">
              * Verified feedback obtained directly from our Google Maps business listing. Visit us to verify our setup!
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 overflow-hidden border-t border-zinc-900">
        
        {/* Subtle decorative mesh background */}
        <div className="absolute inset-0 bg-radial-at-c from-zinc-900/20 through-gymblack to-gymblack z-0 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl frosted-glass-premium px-6 py-12 md:p-16 text-center space-y-6">
            
            <span className="font-mono text-xs text-gold-500 uppercase tracking-[0.25em] font-bold block">
              D FITNESS GYM DELHI
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-2xl mx-auto leading-none">
              READY TO START YOUR FITNESS JOURNEY?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Experience friendly environment and professional guidance at highly budget friendly price segments. No high-pressure sales, just healthy habits and strong routines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
              <button
                onClick={onJoinClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gold-500 text-black font-display text-xs font-black uppercase tracking-wider hover:bg-gold-600 transition-all cursor-pointer"
              >
                Get Membership
              </button>
              <button
                onClick={() => handleNavClick(Page.Contact)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 font-display text-xs font-semibold text-zinc-300 uppercase transition-all cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            <div className="pt-2 text-[10px] text-zinc-500 flex justify-center gap-6">
              <span>✓ Spacious Workout Area</span>
              <span>✓ Duplicate Plates Available</span>
              <span>✓ Free Form Correction Support</span>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  );
}
