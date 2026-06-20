import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Phone, CheckCircle, Flame, Dumbbell } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Strength Training',
    experience: 'Beginner'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    const message = `Hello D Fitness Gym! I've filled in my trial details on your website:\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n🎯 *Fitness Focus:* ${formData.goal}\n⚡ *Experience Level:* ${formData.experience}\n\nPlease book my free trial slot! Thank you.`;
    const waLink = `https://wa.me/919671592059?text=${encodeURIComponent(message)}`;
    
    setIsSubmitted(true);
    
    // Directly redirect to WhatsApp via window.open
    try {
      window.open(waLink, '_blank');
    } catch (err) {
      console.error("Popup blocked, fallback to direct location", err);
      window.location.href = waLink;
    }
  };

  const getCustomWhatsAppLink = () => {
    const message = `Hello D Fitness Gym! I've filled in my trial details on your website:\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n🎯 *Fitness Focus:* ${formData.goal}\n⚡ *Experience Level:* ${formData.experience}\n\nPlease book my free trial slot! Thank you.`;
    return `https://wa.me/919671592059?text=${encodeURIComponent(message)}`;
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', goal: 'Strength Training', experience: 'Beginner' });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-2xl p-6 md:p-8 gold-glow"
          >
            {/* Elegant corner accent bar */}
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-amber-500 via-gold-500 to-yellow-600" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-500">
                    <Flame className="h-6 w-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                      START YOUR TRANSFORMATION
                    </h3>
                    <p className="text-sm text-zinc-400">Claim your special trial session at D Fitness Gym</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 font-mono">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white transition-all focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500 placeholder-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 font-mono">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={15}
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white transition-all focus:border-gold-500/60 focus:outline-none focus:ring-1 focus:ring-gold-500 placeholder-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 font-mono">
                      Select Fitness Focus
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white transition-all focus:border-gold-500/60 focus:outline-none"
                    >
                      <option value="Strength Training" className="bg-gymblack text-white">Strength & Weight Training</option>
                      <option value="Weight Management" className="bg-gymblack text-white">Weight Loss / Management</option>
                      <option value="General Fitness" className="bg-gymblack text-white">General Fitness & Core</option>
                      <option value="Muscle Building" className="bg-gymblack text-white">Muscle Hypertrophy</option>
                      <option value="Cardio Training" className="bg-gymblack text-white">Cardio & Stamina</option>
                      <option value="Personal Guidance" className="bg-gymblack text-white">1-on-1 Premium Coaching</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 font-mono">
                      Experience Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                        <button
                          type="button"
                          key={lvl}
                          onClick={() => setFormData({ ...formData, experience: lvl })}
                          className={`rounded-lg py-2.5 text-xs font-medium border transition-all backdrop-blur-md ${
                            formData.experience === lvl
                              ? 'border-gold-500 bg-gold-500/20 text-gold-500 font-black shadow-[0_0_10px_rgba(212,175,55,0.25)]'
                              : 'border-white/10 bg-white/5 text-zinc-400 hover:border-white/20'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gold-500 py-3.5 text-center font-display text-sm font-bold text-black transition-all hover:bg-gold-600 active:scale-[0.98] shadow-lg shadow-gold-500/10 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Dumbbell className="h-4 w-4" />
                      CLAIM FREE TRIAL & VISIT
                    </button>
                  </div>
                </form>

                <p className="mt-4 text-center text-xs text-zinc-500">
                  ⚡ No hidden fees. Budget-friendly flexible packages available on arrival.
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-white mb-2">YOU R IN, {formData.name.split(' ')[0].toUpperCase()}!</h4>
                <p className="text-zinc-300 text-sm max-w-sm mx-auto mb-6">
                  We have reserved your invitation for <span className="text-gold-500 font-semibold">{formData.goal}</span>. Our friendly trainers will contact you shortly!
                </p>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mb-6 text-left space-y-2 max-w-sm mx-auto text-xs text-zinc-400">
                  <p className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-gold-500 flex-shrink-0" />
                    <span>Venue: A-64, Second Floor, Janakpuri, New Delhi</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-gold-500 flex-shrink-0" />
                    <span>Call Support: +91 96715 92059</span>
                  </p>
                </div>

                <div className="flex flex-col gap-2 max-w-sm mx-auto">
                  <a
                    href={getCustomWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 rounded-lg bg-emerald-600 border border-emerald-500 text-white py-3 text-sm font-extrabold uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)]"
                  >
                    💬 Direct WhatsApp Send
                  </a>
                  <a
                    href="tel:+919671592059"
                    className="flex justify-center items-center gap-2 rounded-lg bg-transparent border border-zinc-700 text-zinc-300 py-2.5 text-xs font-semibold hover:bg-white/5 transition-all"
                  >
                    📞 Call Gym Support
                  </a>
                  <button
                    onClick={handleReset}
                    className="rounded-lg bg-zinc-800 text-white py-2.5 text-xs font-medium hover:bg-zinc-750 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
