'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Shield, Sparkles, BookOpen, Clock, Users, ArrowRight, Download, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { useApp } from '../context/AppContext';
import Image from "next/image";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=85",
    title: "Building Compassionate Healthcare Professionals",
    subtitle: "Welcome to S K Nursing College",
    description: "Empowering future leaders in general nursing and midwifery. Our INC-compliant, modern campus offers world-class hands-on labs and dedicated hospital partnerships for deep clinical mastery."
  },

  {
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1920&q=85",
    title: "100% Board Pass Rate & Elite Placements",
    subtitle: "Academic Excellence & Real-World Ready",
    description: "Receive mentorship from industry experts with up to 24+ years of academic background. Experience comprehensive hospital internships at Sangli and Karad's finest super-specialty clinics."
  },
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=85",
    title: "State-Of-The-Art Advanced Nursing Labs",
    subtitle: "Precision Learning & Clinical Integrity",
    description: "Practice emergency response, pediatric protocols, maternal wellness, and surgical nurse-duties inside custom-built simulation environments modeled on active operating theaters."
  }
];

export default function Hero() {
  const router = useRouter();
  const { setIsApplyModalOpen } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleOpenApply = () => {
    setIsApplyModalOpen(true);
  };

  const handleOpenBrochure = () => {
    router.push('/admissions');
  };

  const handleNavigateToCourse = () => {
    router.push('/course');
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-dark-navy" id="hero-banner">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
          />
        </AnimatePresence>
        {/* Soft elegant vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/70 to-dark-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/90 via-transparent to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex-grow flex flex-col justify-center py-20">
        <div className="max-w-3xl">
          {/* Header Accents */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-brand-gold/15 border border-brand-gold/20 text-brand-gold text-xs font-semibold px-4 py-2 rounded-full mb-6 font-sans tracking-wide uppercase"
          >
            <Award size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
            <span>INC Approved • Admissions Open for GNM 2026-27</span>
          </motion.div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-gray-300 font-display font-medium text-sm md:text-base uppercase tracking-widest block">
                {HERO_SLIDES[currentSlide].subtitle}
              </span>
              <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
                {HERO_SLIDES[currentSlide].title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-2xl font-sans font-light">
                {HERO_SLIDES[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8"
          >
            <button
              onClick={handleOpenApply}
              className="bg-brand-gold hover:bg-brand-gold-dark text-dark-navy font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-brand-gold/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm tracking-wider uppercase"
            >
              <Sparkles size={16} />
              <span>Apply Online</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={handleOpenBrochure}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl shadow-md hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm"
            >
              <Download size={16} className="text-brand-gold" />
              <span>Download Prospectus</span>
            </button>

            <button
              onClick={handleNavigateToCourse}
              className="text-gray-300 hover:text-white font-medium px-4 py-2 transition duration-200 flex items-center justify-center space-x-1 text-sm underline underline-offset-4"
            >
              <span>Learn GNM Details</span>
            </button>
          </motion.div>
        </div>


       
      </div>

      {/* Slide Navigation & Visual Authority Indicators */}
      <div className="relative z-10 bg-white/5 border-t border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Slider controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-2 bg-black/30 hover:bg-black/50 text-white rounded-full border border-white/10 transition cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center space-x-1.5">
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-brand-gold w-6' : 'bg-white/30'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 bg-black/30 hover:bg-black/50 text-white rounded-full border border-white/10 transition cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Quick Stats Overlay Panel */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 text-white">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-lg">
                <Clock size={18} />
              </div>
              <div>
                <span className="block font-display font-extrabold text-lg tracking-tight leading-none text-brand-gold">3 Years</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">GNM Duration</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-lg">
                <Users size={18} />
              </div>
              <div>
                <span className="block font-display font-extrabold text-lg tracking-tight leading-none text-brand-gold">40 Seats</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Annual Intake</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-lg">
                <Shield size={18} />
              </div>
              <div>
                <span className="block font-display font-extrabold text-lg tracking-tight leading-none text-brand-gold">100%</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Board Pass Rate</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-lg">
                <BookOpen size={18} />
              </div>
              <div>
                <span className="block font-display font-extrabold text-lg tracking-tight leading-none text-brand-gold">8+ Labs</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Clinical Simulators</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
