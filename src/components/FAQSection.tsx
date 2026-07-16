'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/collegeData';
import { HelpCircle, ChevronDown, BookOpen } from 'lucide-react';

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>('faq1');

  const toggleFAQ = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-white" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            Help & Guidance
          </span>
          <h2 className="font-display font-extrabold text-3xl text-brand-blue tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed font-sans font-light max-w-lg mx-auto">
            Find immediate answers regarding statutory criteria, reservation policies, licensing boards, and hostel guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-light-gray rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center space-x-4 hover:bg-gray-50/50 transition cursor-pointer"
                >
                  <div className="flex items-center space-x-3 text-brand-blue shrink-0 max-w-[90%]">
                    <HelpCircle size={18} className="text-brand-gold shrink-0" />
                    <span className="font-display font-semibold text-xs sm:text-sm text-dark-navy leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-400 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180 text-brand-blue' : ''}`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed text-gray-500 font-sans font-light border-t border-gray-50">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Help Desk box */}
        <div className="p-6 bg-brand-blue/5 rounded-3xl border border-brand-blue/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-sm text-brand-blue">Still have questions?</h4>
            <p className="text-xs text-gray-500 font-sans font-light">
              Get in touch with our admissions help desk directly for eligibility clarifications.
            </p>
          </div>
          <a 
            href="#contact-desk"
            className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold px-5 py-3 rounded-xl transition shadow cursor-pointer uppercase tracking-wider font-display"
          >
            Contact Admissions Desk
          </a>
        </div>

      </div>
    </section>
  );
}
