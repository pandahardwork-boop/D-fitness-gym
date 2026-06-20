import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import { 
  MapPin, Phone, ShieldCheck, Mail, Send, CheckCircle2, MessageCircle, Clock, HeartHandshake, HelpCircle 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Strength Training',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    const textStr = `Hello D Fitness Gym! I've submitted a consultation inquiry on your website:\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email || 'N/A'}\n🎯 *Service of Interest:* ${formData.service}\n✍️ *Message:* ${formData.message || 'N/A'}\n\nPlease guide me further. Thank you!`;
    const waLink = `https://wa.me/919671592059?text=${encodeURIComponent(textStr)}`;
    
    setIsSuccess(true);
    
    try {
      window.open(waLink, '_blank');
    } catch (err) {
      console.error("Popup blocked, fallback to direct location", err);
      window.location.href = waLink;
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', service: 'Strength Training', message: '' });
    setIsSuccess(false);
  };

  // WhatsApp helper link formatting all current client values
  const getWhatsAppLink = () => {
    const textStr = `Hello D Fitness Gym! I've submitted a consultation inquiry on your website:\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email || 'N/A'}\n🎯 *Service of Interest:* ${formData.service}\n✍️ *Message:* ${formData.message || 'N/A'}\n\nPlease guide me further. Thank you!`;
    return `https://wa.me/919671592059?text=${encodeURIComponent(textStr)}`;
  };

  return (
    <div className="bg-gymblack text-white min-h-screen pt-24 selection:bg-gold-500 selection:text-black">
      
      {/* Banner */}
      <section className="relative py-20 bg-gradient-to-b from-zinc-950 to-gymblack overflow-hidden border-b border-zinc-900/40">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold block">
            VISIT D FITNESS CENTERS
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            GET IN <span className="text-gold-500">TOUCH</span>
          </h1>
          <div className="h-1 w-16 bg-gold-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-xs sm:text-sm max-w-lg mx-auto">
            Contact us for membership inquiries, personal guidance consultations or drop-in directions.
          </p>
        </div>
      </section>

      {/* Main Grid Contact block */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Column 1: Info card details */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-gold-500 font-bold block">
                  CONTACT DETAILS
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  WE ARE HERE TO HELP YOU PROGRESS
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Our professional coaches and staff are ready to assist you. Call us or send a quick WhatsApp message for the fastest response!
                </p>
              </div>

              {/* Specific detail cards */}
              <div className="space-y-4">
                
                {/* Location Card */}
                <div className="frosted-glass rounded-xl p-5 flex items-start gap-4 hover:border-gold-500/20 transition-all duration-300">
                  <div className="flex-shrink-0 p-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-xs font-bold uppercase text-white tracking-wider font-sans">Gym Address</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      A-64, Second Floor, 40 Ft Road, Chanakya Place, C1, Janakpuri, New Delhi – 110059
                    </p>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="frosted-glass rounded-xl p-5 flex items-start gap-4 hover:border-gold-500/20 transition-all duration-300">
                  <div className="flex-shrink-0 p-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-xs font-bold uppercase text-white tracking-wider font-sans">Direct Hotline</h4>
                    <p className="text-xs text-zinc-300 font-semibold font-mono">
                      +91 96715 92059
                    </p>
                    <p className="text-[10px] text-zinc-500 font-mono">Mon-Sat: 6:00 AM to 10:00 PM</p>
                  </div>
                </div>

                {/* Email Support */}
                <div className="frosted-glass rounded-xl p-5 flex items-start gap-4 hover:border-gold-500/20 transition-all duration-300">
                  <div className="flex-shrink-0 p-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-xs font-bold uppercase text-white tracking-wider font-sans">Digital Support</h4>
                    <p className="text-xs text-zinc-400 font-mono">info@dfitnessgym.com</p>
                  </div>
                </div>

              </div>

              {/* Dual Instant Call CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-900">
                <a
                  href="tel:+919671592059"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gold-500 py-3 text-center text-xs font-black uppercase text-black hover:bg-gold-600 transition-colors"
                >
                  <Phone className="h-4 w-4 stroke-[2.5]" />
                  Call Gym
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-center text-xs font-extrabold uppercase text-white hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 fill-white stroke-none" />
                  WhatsApp
                </a>
              </div>

            </div>

            {/* Column 2: Interactive consultation input form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl p-6 md:p-8 relative overflow-hidden frosted-glass-premium backdrop-blur-xl">
                
                {/* Decorative border highlight */}
                <div className="absolute top-0 left-0 w-12 h-[2px] bg-gold-500" />
                <div className="absolute top-0 left-0 w-[2px] h-12 bg-gold-500" />

                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key="form-elem"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="mb-6 space-y-1">
                        <h3 className="font-display text-lg font-bold uppercase text-white">
                          SEND ENQUIRY FORM
                        </h3>
                        <p className="text-xs text-zinc-400">Fill in details and receive transparent price schedules.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 font-mono">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Rahul Sharma"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/20 focus:outline-none transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 font-mono">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="e.g. +91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/20 focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 font-mono">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="rahul@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/20 focus:outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 font-mono">
                            Service of Interest
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/20 focus:outline-none transition-all"
                          >
                            <option value="Strength Training" className="bg-gymblack text-white">Strength Training Program</option>
                            <option value="Weight Management" className="bg-gymblack text-white">Weight loss / Management</option>
                            <option value="General Fitness" className="bg-gymblack text-white">General core / Mobility</option>
                            <option value="Muscle Building" className="bg-gymblack text-white">Muscle growth / Aesthetics</option>
                            <option value="Cardio Training" className="bg-gymblack text-white">Cardiovascular Stamina</option>
                            <option value="Personal Guidance" className="bg-gymblack text-white">1-on-1 Form correction</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1.5 font-mono">
                            Special Questions or Message
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Tell us about your fitness targets, any medical conditions, or preferred visit timings..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/20 focus:outline-none resize-none transition-all"
                          />
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full rounded-lg bg-gold-500 hover:bg-gold-600 text-black py-3.5 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold-500/10 active:scale-[0.98] transition-all"
                          >
                            <Send className="h-3.5 w-3.5" />
                            Submit Consultation Form
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-elem"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-5"
                    >
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-display text-xl font-bold uppercase text-white">
                          ENQUIRY SUBMITTED!
                        </h3>
                        <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                          Thank you <span className="text-gold-500 font-semibold">{formData.name}</span>. We will analyze your preference for <span className="text-zinc-200 font-mono font-bold text-gold-400">{formData.service}</span>. Our friendly trainers will contact you shortly via phone pattern.
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-extrabold uppercase text-white flex items-center justify-center gap-1.5"
                        >
                          <MessageCircle className="h-4 w-4 fill-white stroke-none" />
                          Chat on WhatsApp
                        </a>
                        <button
                          onClick={handleReset}
                          className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-400 hover:text-white"
                        >
                          Send another
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Google Maps container section */}
      <section className="bg-zinc-950/40 border-y border-zinc-900/60 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-6">
          
          <div className="text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-500 font-bold block">
              INTERACTIVE GOOGLE ROUTE DIRECTIONS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">Find Us On Google Maps</h3>
            <p className="text-xs text-zinc-400">Conveniently situated on the Second Floor above 40 Feet Road inside Chanakya Place, Janakpuri, New Delhi.</p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-zinc-950 shadow-2xl relative h-80 sm:h-96 md:h-120 bg-zinc-950">
            {/* Embed real iframe code pointing directly to Janakpuri location to be completely operational */}
            <iframe
              title="D Fitness Gym Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.286663529345!2d77.0694140026214!3d28.612599299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b376c9ef47b%3A0xe54d2e70e9499878!2sChanakya%20Place%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi%20110059!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="grayscale brightness-95 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
