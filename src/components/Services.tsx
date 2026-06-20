import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, Scale, HeartPulse, ShieldAlert, Sparkles, UserCheck, X, Check, Flame, ArrowRight, Calendar, Sparkle
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onJoinClick: () => void;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'strength',
    title: 'Strength Training',
    description: 'Learn fundamental barbell lifts, heavy resistance techniques, and power progressions safely under certified coaching supervision.',
    longDescription: 'Our Strength Training curriculum is designed to increase your bone density, functional load capability, and overall muscle structure. You will learn the mechanics behind squatting, deadlifting, and overhead pressing, while adhering to absolute safety rules.',
    benefits: [
      'Increased joint and skeletal durability',
      'Improved vertical load tolerances',
      'Knowledge of proper lifting mechanics',
      'Structured progressive overload trackers'
    ]
  },
  {
    id: 'weight_mgt',
    title: 'Weight Management',
    description: 'Practical thermodynamic coaching combining fat loss strategies, body recomposition trackers, and sustainable routines.',
    longDescription: 'No crash diets, no dangerous meal replacement pills. Our Weight Management program focuses strictly on building positive metabolic adaptations, progressive activity loops, and clean nutrient distributions that fit your daily schedule.',
    benefits: [
      'Tailored macro-tracking support',
      'Cardio-strength hybrid schedules',
      'Sustainable muscle-mass preservation',
      'Regular anthropometrics tracking reviews'
    ]
  },
  {
    id: 'gen_fitness',
    title: 'General Fitness',
    description: 'Perfect for beginners. Focus on functional strength, core alignment, posture support, and body mobility workouts.',
    longDescription: 'Get comfortable with moving and using gym machinery. This service prioritizes developing an enjoyable routine, reducing sedentary fatigue, improving muscle flexibility, and establishing long-term gym confidence.',
    benefits: [
      'Enhanced daily physical stamina',
      'Better sleep cycle & energy reserves',
      'Postural realignment assistance',
      'Introductory barbell & machine tutorials'
    ]
  },
  {
    id: 'muscle_building',
    title: 'Muscle Building',
    description: 'Hypertrophy focused training structures utilizing essential free weights and custom mechanical tension profiles.',
    longDescription: 'Focus on muscular development, time-under-tension rules, and targeted concentric-eccentric loops. Perfect for individuals looking to increase clean muscle mass and improve their overall physical aesthetics.',
    benefits: [
      'Hypertrophy training parameters',
      'Targeted muscle group splits',
      'Strict isolation technique audits',
      'Form modification for injury prevention'
    ]
  },
  {
    id: 'cardio',
    title: 'Cardio Training',
    description: 'High performance metabolic routines, aerobic pacing workouts, and endurance exercises to raise calorie burn.',
    longDescription: 'Train your heart and blood circulation channels. Our Cardio Training includes high-intensity interval workouts, steady-state pacing, and mixed accessory exercises to boost stamina and keep body fat low.',
    benefits: [
      'Enhanced oxygen-utilization threshold',
      'Fast cardiovascular recuperation',
      'Lower resting heart rate tracking',
      'Highly dynamic, non-repetitive workouts'
    ]
  },
  {
    id: 'guidance',
    title: 'Personal Guidance',
    description: 'Direct 1-on-1 form correction, program customisation, and professional support during your workouts.',
    longDescription: 'Our staff are always around the floor to offer standard correction without supplementary high-ticket personal coaching charges. Receive straightforward, real coaching that helps you progress securely.',
    benefits: [
      'Complimentary form check on any weight lift',
      'Injury risk screening during workouts',
      'Warmup and cooldown sequence plans',
      'Highly approachable and friendly instructors'
    ]
  }
];

// Map corresponding icons to each service key
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  strength: Dumbbell,
  weight_mgt: Scale,
  gen_fitness: Sparkles,
  muscle_building: Flame,
  cardio: HeartPulse,
  guidance: UserCheck,
};

export default function Services({ onJoinClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="bg-gymblack text-white min-h-screen pt-24 selection:bg-gold-500 selection:text-black">
      
      {/* Baner */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-gymblack overflow-hidden border-b border-zinc-900/40">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold block">
            OUR TRAINING SPECIALTIES
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            PREMIUM GYM <span className="text-gold-500">SERVICES</span>
          </h1>
          <div className="h-1 w-16 bg-gold-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto">
            Honest, result-oriented training categories supported by certified coaching staff. No false claims or luxury hype.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv, idx) => {
              const IconComp = iconMap[srv.id] || Dumbbell;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className={`group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 gold-glow-hover backdrop-blur-md ${
                    idx === 0 || idx === 5 
                      ? 'frosted-glass-premium' 
                      : 'frosted-glass'
                  }`}
                >
                  <div>
                    {/* Header Icon */}
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/5 border border-gold-500/10 text-gold-500 group-hover:bg-gold-500 group-hover:color-black group-hover:text-black transition-all duration-300">
                      <IconComp className="h-5.5 w-5.5" />
                    </div>

                    <h3 className="font-display text-xl font-bold uppercase text-white mb-3 group-hover:text-gold-500 transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                      {srv.description}
                    </p>
                  </div>

                  {/* CTA link */}
                  <button
                    onClick={() => setSelectedService(srv)}
                    className="flex items-center gap-1.5 text-xs font-bold text-gold-500 group-hover:text-gold-400 uppercase tracking-wider text-left transition-colors cursor-pointer"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Corner Accent Decorator */}
                  <div className="absolute top-0 right-0 h-10 w-10 overflow-hidden rounded-tr-2xl">
                    <div className="absolute top-[-20px] right-[-20px] h-10 w-10 rotate-45 bg-amber-500/5 group-hover:bg-gold-500/15 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Trust Quote / Notice */}
      <section className="py-12 bg-zinc-950/40 border-t border-zinc-900/60 text-center">
        <div className="mx-auto max-w-3xl px-4 text-xs text-zinc-500 space-y-2">
          <p className="font-mono uppercase text-[9px] tracking-widest text-gold-500 font-bold block">★ AUTHENTIC SERVICE POLICY ★</p>
          <p>We do not claim clinical nutritional diets, physiotherapeutic recovery sessions, or artificial synthetic peptide programs. All training is strictly mechanical fitness and muscular strength coaching designed to foster organic, reliable metabolic and cardiovascular adaptations.</p>
        </div>
      </section>

      {/* Service Lightbox Details screen */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-black/60 backdrop-blur-2xl p-6 md:p-8 gold-glow overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-gold-500/10 border border-gold-500/30 text-gold-500 rounded-xl">
                  {(() => {
                    const IconComp = iconMap[selectedService.id] || Dumbbell;
                    return <IconComp className="h-6 w-6" />;
                  })()}
                </div>
                <div>
                  <h4 className="font-display text-2xl font-black uppercase text-white tracking-tight">
                    {selectedService.title}
                  </h4>
                  <p className="text-[10px] uppercase font-mono text-gold-default text-gold-400">Core Specialty Program</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed border-b border-zinc-900 pb-4">
                  {selectedService.longDescription}
                </p>

                <h5 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                  PROGRAM EXPECTED BENEFITS:
                </h5>

                <ul className="space-y-2.5">
                  {selectedService.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-3 text-xs text-zinc-400">
                      <div className="mt-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onJoinClick();
                    }}
                    className="w-full bg-gold-500 text-black rounded-xl py-3 font-display text-xs font-black uppercase tracking-wider text-center hover:bg-gold-600 transition-colors cursor-pointer"
                  >
                    Enroll Now
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-xl py-3 font-display text-xs font-bold uppercase text-center hover:text-white transition-colors cursor-pointer"
                  >
                    Go Back
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
