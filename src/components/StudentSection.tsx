'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STUDENT_EVENTS, PLACEMENTS, ACHIEVEMENTS, TESTIMONIALS } from '../data/collegeData';
import { Award, Calendar, ChevronLeft, ChevronRight, GraduationCap, Heart, Quote, Trophy, MapPin } from 'lucide-react';

export default function StudentSection() {
  const [activeEventCategory, setActiveEventCategory] = useState<string>('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const eventCategories = ['All', 'academic', 'cultural', 'sports', 'social'];

  // Filter events
  const filteredEvents = activeEventCategory === 'All'
    ? STUDENT_EVENTS
    : STUDENT_EVENTS.filter(evt => evt.category === activeEventCategory.toLowerCase());

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-light-gray" id="student-life">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        
        {/* Achievements Section */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
              Pride & Excellence
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
              Institutional Achievements & Milestones
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
              Our students consistently rewrite academic guidelines. From 100% board examination pass rates to honors at state level diagnostic tournaments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACHIEVEMENTS.map((ach) => (
              <div 
                key={ach.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm group hover:border-brand-gold/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={ach.image} 
                    alt={ach.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-dark-navy/20" />
                  <span className="absolute bottom-4 left-4 bg-brand-gold text-dark-navy font-display font-extrabold text-xs px-3 py-1 rounded-lg">
                    {ach.year}
                  </span>
                </div>
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-sm sm:text-base text-dark-navy group-hover:text-brand-blue transition duration-200">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                      {ach.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-50 flex items-center space-x-2 text-xs text-brand-gold font-semibold">
                    <Trophy size={14} />
                    <span>State Approved Excellence Award</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placements & Affiliated Clinics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-blue/5 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full uppercase">
              <GraduationCap size={14} className="text-brand-gold animate-bounce" />
              <span>Stellar Placement Records</span>
            </div>
            <h3 className="font-display font-extrabold text-3xl text-brand-blue tracking-tight leading-tight">
              Hospital Partnerships & Placement Desk
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
              S K Nursing College graduates are highly sought after by Maharashtra's super-specialty hospitals due to their extensive clinical lab preparations and disciplined patient management training.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
              Clinical internship experiences are carried out directly inside partner clinics, providing real-world patient interaction hours critical for MSBNPE board licensing.
            </p>
          </div>

          {/* Hospitals Intake List */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-gold border-b border-gray-100 pb-2">
              Recent Placement & Rotation Partners
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PLACEMENTS.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-light-gray p-4 rounded-2xl border border-gray-100 flex items-center space-x-3.5 hover:border-brand-blue/20 transition duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue font-display font-extrabold text-sm flex items-center justify-center shrink-0">
                    {item.logoLetter}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs text-dark-navy leading-snug">{item.hospital}</h5>
                    <span className="text-[10px] text-brand-gold font-semibold mt-1 block">Rotations & Job-Offers: {item.intake}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Events Calendar section */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-3">
              <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold block">Campus Calendar</span>
              <h2 className="font-display font-extrabold text-3xl text-brand-blue tracking-tight">Active Academic & Cultural Events</h2>
            </div>
            
            {/* Category Filter tabs */}
            <div className="flex flex-wrap gap-1.5 bg-white p-1 rounded-xl border border-gray-100 shadow-sm">
              {eventCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveEventCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeEventCategory === cat
                      ? 'bg-brand-blue text-white'
                      : 'text-gray-500 hover:text-brand-blue hover:bg-gray-50'
                  }`}
                >
                  {cat === 'academic' ? 'Academic' : cat === 'cultural' ? 'Cultural' : cat === 'social' ? 'Outreach' : cat === 'All' ? 'All Events' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((evt) => (
                <motion.div
                  layout
                  key={evt.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col sm:flex-row hover:border-brand-gold/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="w-full sm:w-44 h-48 sm:h-auto overflow-hidden relative shrink-0">
                    <img 
                      src={evt.image} 
                      alt={evt.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/65 to-transparent" />
                  </div>

                  {/* Contents */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-[10px] font-semibold text-brand-gold uppercase tracking-wider">
                        <Calendar size={12} />
                        <span>{evt.date}</span>
                      </div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-dark-navy leading-snug">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-sans font-light leading-relaxed line-clamp-3">
                        {evt.description}
                      </p>
                    </div>
                    <span className="inline-block text-[9px] bg-brand-blue/5 text-brand-blue font-extrabold uppercase px-2 py-0.5 rounded tracking-widest self-start">
                      {evt.category} Drive
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Verified Alumni Testimonial Slider */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-8 relative overflow-hidden" id="student-testimonials">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl" />
          <Quote size={80} className="text-brand-gold/10 absolute -top-4 -left-4" />
          
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold block">Alumni Success Records</span>
            <h3 className="font-display font-extrabold text-2xl text-brand-blue mt-1">What Our Graduates Say</h3>
          </div>

          {/* Testimonial Active Slider Card */}
          <div className="max-w-3xl mx-auto min-h-[180px] flex flex-col justify-center text-center space-y-4">
            <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed font-sans font-light">
              "{TESTIMONIALS[currentTestimonial].message}"
            </p>
            <div>
              <span className="block font-display font-bold text-dark-navy text-sm">{TESTIMONIALS[currentTestimonial].name}</span>
              <span className="text-xs text-brand-gold font-semibold tracking-wider block mt-0.5 uppercase">
                {TESTIMONIALS[currentTestimonial].role}
              </span>
              <span className="text-[10px] text-gray-400 block font-mono">{TESTIMONIALS[currentTestimonial].batch}</span>
            </div>
          </div>

          {/* Slider controls */}
          <div className="flex justify-center items-center space-x-3 pt-4 border-t border-gray-100 max-w-xs mx-auto">
            <button
              onClick={handlePrevTestimonial}
              className="p-2 bg-light-gray hover:bg-gray-100 text-brand-blue rounded-full border border-gray-200 transition cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center space-x-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'bg-brand-gold w-4' : 'bg-gray-200'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNextTestimonial}
              className="p-2 bg-light-gray hover:bg-gray-100 text-brand-blue rounded-full border border-gray-200 transition cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
