/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import JoinModal from './components/JoinModal';

export default function App() {
  const [activePage, setActivePage] = useState<Page>(Page.Home);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const renderActivePage = () => {
    switch (activePage) {
      case Page.Home:
        return (
          <Home
            setActivePage={setActivePage}
            onJoinClick={() => setIsJoinModalOpen(true)}
          />
        );
      case Page.About:
        return (
          <About
            setActivePage={setActivePage}
            onJoinClick={() => setIsJoinModalOpen(true)}
          />
        );
      case Page.Services:
        return (
          <Services
            onJoinClick={() => setIsJoinModalOpen(true)}
          />
        );
      case Page.Gallery:
        return <Gallery />;
      case Page.Contact:
        return <Contact />;
      default:
        return (
          <Home
            setActivePage={setActivePage}
            onJoinClick={() => setIsJoinModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="bg-gymblack min-h-screen text-white font-sans flex flex-col justify-between selection:bg-gold-500 selection:text-black antialiased relative overflow-hidden">
      {/* Golden glow translucent background spots to match the Frosted Glass theme */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-gold-500 opacity-10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-gold-500 opacity-5 rounded-full blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] bg-amber-500 opacity-5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] bg-yellow-600 opacity-5 rounded-full blur-[110px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col flex-grow">
        {/* Navigation Glass Header */}
        <Header
          activePage={activePage}
          setActivePage={setActivePage}
          onJoinClick={() => setIsJoinModalOpen(true)}
        />

        {/* Swipe Animation Active Screen wrapper */}
        <AnimatePresence mode="wait">
          <motion.main
            key={activePage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex-grow"
          >
            {renderActivePage()}
          </motion.main>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* High impact Registration Overlay Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
}
