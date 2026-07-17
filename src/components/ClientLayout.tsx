'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MessageSquare, ArrowUp, X, CheckCircle, 
  Facebook, Instagram, Youtube 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COLLEGE_INFO } from '../data/collegeData';
import Header from './Header';
import Footer from './Footer';
import AdmissionSection from './AdmissionSection';
import SEOMetadata from './SEOMetadata';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { 
    isApplyModalOpen, 
    setIsApplyModalOpen, 
    toast, 
    showSuccessToast 
  } = useApp();

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Listen to scroll to display scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-light-gray text-dark-navy font-sans antialiased selection:bg-brand-blue selection:text-white relative">
      {/* Programmatic SEO Meta and Schemas Injector */}
      <SEOMetadata />

      {/* Sticky Header */}
      <Header />

      {/* Main Content Area */}
      <main className="min-h-[80vh]">
        {children}
      </main>

      {/* Visual detailed Footer */}
      <Footer />

      {/* FLOATING SOCIAL MEDIA RIBBON (Right side, Middle) */}
      <div 
        id="floating-socials" 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center bg-white/95 border-l border-y border-brand-gold/30 p-2.5 rounded-l-2xl shadow-2xl space-y-3.5 backdrop-blur-md"
      >
        <span className="text-[8px] font-extrabold uppercase text-gray-400 tracking-wider [writing-mode:vertical-lr] mb-1">
          Follow Us
        </span>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
          title="Connect with S K College on Facebook"
        >
          <Facebook size={18} />
        </a>
        <a 
          href="https://www.instagram.com/sknursingcollege?igsh=eTI2Zm55cW5rZDR2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#E1306C]/10 hover:bg-gradient-to-tr hover:from-[#FCAF45] hover:to-[#E1306C] text-[#E1306C] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
          title="Follow S K College on Instagram"
        >
          <Instagram size={18} />
        </a>
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#FF0000]/10 hover:bg-[#FF0000] text-[#FF0000] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
          title="Subscribe S K College on YouTube"
        >
          <Youtube size={18} />
        </a>
      </div>

      {/* Floating Action Buttons Area (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={scrollToTop}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white p-3.5 rounded-full shadow-lg transition duration-200 cursor-pointer flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Call Hotline */}
        <a 
          href={`tel:${COLLEGE_INFO.mobile}`}
          className="bg-brand-gold hover:bg-brand-gold-dark text-dark-navy p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
          title="Dial Admissions Office Hotline"
        >
          <Phone size={18} />
        </a>

        {/* Floating WhatsApp Support */}
        <a 
          href={`https://wa.me/${COLLEGE_INFO.whatsapp}?text=Hello%20S%20K%20Nursing%20College%2C%20I%20would%20like%20to%20know%20more%20about%20the%20GNM%20Admissions%20for%20the%20current%20year.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
          title="Admissions support WhatsApp"
        >
          <MessageSquare size={18} />
        </a>
      </div>

      {/* Global "Apply Now" Admissions Modal Overlay */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-brand-gold/15 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="absolute top-4 right-4 bg-light-gray hover:bg-gray-100 text-gray-500 p-2 rounded-full transition cursor-pointer"
                aria-label="Close admissions dialog"
              >
                <X size={18} />
              </button>

              <div className="p-4 sm:p-6 bg-dark-navy text-white">
                <span className="text-[10px] bg-brand-gold text-dark-navy font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  Secure Enrolment Desk
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-1">
                  S K GNM Registration Portal
                </h3>
                <p className="text-xs text-gray-400 mt-1">Complete your registration to secure a seat inside GNM 2026-27.</p>
              </div>

              {/* Form injection */}
              <div className="p-6">
                <AdmissionSection />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Toasts Overlay notifications */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            className="fixed top-6 right-6 z-50 bg-brand-blue text-white rounded-2xl py-4 px-6 shadow-2xl border border-brand-gold/20 flex items-center space-x-3.5 max-w-sm"
          >
            <div className="w-8 h-8 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center shrink-0">
              <CheckCircle size={18} />
            </div>
            <div>
              <span className="block font-display font-bold text-xs text-brand-gold uppercase tracking-wider font-sans">System update</span>
              <p className="text-xs text-white leading-normal mt-0.5 font-sans font-light">
                {toast.message}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
