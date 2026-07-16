'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GNM_COURSE_DETAILS, COLLEGE_INFO } from '../data/collegeData';
import { Award, BookOpen, Clock, Users, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';

type TabType = 'curriculum' | 'eligibility' | 'reservations' | 'outcomes';

export default function CourseSection() {
  const { setIsApplyModalOpen } = useApp();
  const [activeTab, setActiveTab] = useState<TabType>('eligibility');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'eligibility', label: 'Detailed Eligibility' },
    { id: 'curriculum', label: 'Curriculum & Internships' },
    { id: 'outcomes', label: 'Programme Outcomes' },
    { id: 'reservations', label: 'Reservation Policy' }
  ];

  return (
    <section className="py-20 bg-light-gray" id="gnm-course">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            Primary Academic Offering
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
            General Nursing & Midwifery (GNM) Diploma
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
            A comprehensive, high-standard program designed in full compliance with the Indian Nursing Council (INC). It equips students with extensive medical, surgical, pediatric, obstetric, and community nursing expertise.
          </p>
        </div>

        {/* Quick Facts Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold" />
          
          <div className="space-y-2">
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest block">Duration</span>
            <div className="flex items-center justify-center space-x-1.5">
              <Clock className="text-brand-gold" size={18} />
              <span className="font-display font-extrabold text-2xl text-dark-navy">3 Years</span>
            </div>
            <p className="text-xs text-gray-500">Compulsory 6-Month Clinical Internship</p>
          </div>

          <div className="space-y-2 border-y md:border-y-0 md:border-x border-gray-100 py-6 md:py-0">
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest block">Approved Intake</span>
            <div className="flex items-center justify-center space-x-1.5">
              <Users className="text-brand-gold" size={18} />
              <span className="font-display font-extrabold text-2xl text-dark-navy">40 Seats</span>
            </div>
            <p className="text-xs text-gray-500">Annual Cohort Capacity</p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest block">Examination Body</span>
            <div className="flex items-center justify-center space-x-1.5">
              <Award className="text-brand-gold" size={18} />
              <span className="font-display font-extrabold text-lg text-dark-navy leading-tight">MSBNPE, Mumbai</span>
            </div>
            <p className="text-xs text-gray-400">Maharashtra State Board of Nursing</p>
          </div>
        </div>

        {/* Interactive Tabbed Detail Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab Selection Column */}
          <div className="lg:col-span-4 space-y-2.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-5 py-4 rounded-xl font-display font-semibold text-sm transition-all duration-300 flex items-center justify-between cursor-pointer border ${
                  activeTab === tab.id
                    ? 'bg-brand-blue text-white shadow-md border-brand-blue'
                    : 'bg-white text-dark-navy hover:text-brand-blue hover:bg-gray-50 border-gray-100'
                }`}
              >
                <span>{tab.label}</span>
                <ChevronRight size={16} className={`transition-transform duration-200 ${activeTab === tab.id ? 'translate-x-1' : ''}`} />
              </button>
            ))}

            <div className="p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10 space-y-4 mt-6">
              <h4 className="font-display font-bold text-brand-blue text-xs uppercase tracking-wider">Ready to apply?</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                Secure your seat in the incoming batch. Get professional hands-on clinical training.
              </p>
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold py-3 rounded-lg flex items-center justify-center space-x-1.5 cursor-pointer shadow transition"
              >
                <span>Initiate Online Application</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Tab Content Display Area */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 animate-none"
              >
                
                {/* 1. ELIGIBILITY TAB */}
                {activeTab === 'eligibility' && (
                  <div className="space-y-6">
                    <h3 className="font-display font-extrabold text-xl text-dark-navy border-b border-gray-100 pb-3">
                      GNM Detailed Eligibility Standards
                    </h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {GNM_COURSE_DETAILS.eligibility.map((criteria, index) => (
                        <li key={index} className="flex items-start space-x-3.5">
                          <CheckCircle2 size={18} className="text-brand-gold shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-600 font-sans font-light leading-relaxed">
                            {criteria}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 2. CURRICULUM TAB */}
                {activeTab === 'curriculum' && (
                  <div className="space-y-6">
                    <h3 className="font-display font-extrabold text-xl text-dark-navy border-b border-gray-100 pb-3">
                      Yearly Syllabus & Practical Internships
                    </h3>
                    <div className="space-y-5">
                      {GNM_COURSE_DETAILS.curriculum.map((year, index) => (
                        <div key={index} className="p-4 bg-light-gray rounded-xl border border-gray-100">
                          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-2">{year.year}</span>
                          <div className="flex flex-wrap gap-2">
                            {year.subjects.map((subj, sIdx) => (
                              <span 
                                key={sIdx}
                                className="bg-white border border-gray-200/60 text-gray-600 text-xs px-3 py-1.5 rounded-md font-sans"
                              >
                                {subj}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. OUTCOMES TAB */}
                {activeTab === 'outcomes' && (
                  <div className="space-y-6">
                    <h3 className="font-display font-extrabold text-xl text-dark-navy border-b border-gray-100 pb-3">
                      Programme Outcomes & Hospital Placement Readiness
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {GNM_COURSE_DETAILS.outcomes.map((outcome, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-gray-100 hover:border-brand-blue/20 transition duration-300">
                          <h4 className="font-display font-bold text-sm text-brand-blue flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                            <span>{outcome.title}</span>
                          </h4>
                          <p className="text-xs text-gray-500 mt-2 font-sans font-light leading-relaxed">
                            {outcome.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. RESERVATIONS TAB */}
                {activeTab === 'reservations' && (
                  <div className="space-y-6">
                    <h3 className="font-display font-extrabold text-xl text-dark-navy border-b border-gray-100 pb-3">
                      Statutory Reservation Policy
                    </h3>
                    <div className="space-y-4">
                      {GNM_COURSE_DETAILS.reservations.map((policy, index) => (
                        <div key={index} className="p-4 bg-light-gray rounded-xl border border-gray-100 flex items-start space-x-3.5">
                          <div className="w-6 h-6 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-display font-bold text-xs shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 font-sans font-light leading-relaxed">
                            {policy}
                          </p>
                        </div>
                      ))}
                      <div className="p-4 bg-brand-blue/5 rounded-xl border border-brand-blue/10 flex items-center space-x-3">
                        <ShieldCheck size={20} className="text-brand-blue shrink-0" />
                        <span className="text-xs text-brand-blue font-semibold">
                          All admissions comply strictly with MNC (Mumbai) & INC (New Delhi) norms.
                        </span>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Future Ready Programs - B.Sc Nursing & ANM teaser cards */}
        <div className="space-y-6 pt-10 border-t border-gray-200">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold block">Expanding Infrastructure</span>
            <h3 className="font-display font-extrabold text-2xl text-brand-blue mt-1">Upcoming Academic Programs</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* B.Sc Nursing */}
            <div className="bg-white/80 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between relative overflow-hidden group hover:border-brand-gold/30 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-brand-gold/10 text-brand-gold text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-bl-xl border-l border-b border-brand-gold/10">
                Launching Soon
              </div>
              <div className="space-y-3">
                <h4 className="font-display font-extrabold text-lg text-dark-navy group-hover:text-brand-blue transition duration-200">
                  Bachelor of Science in Nursing (B.Sc Nursing)
                </h4>
                <p className="text-xs text-gray-500 font-sans font-light leading-relaxed">
                  A high-tier, 4-year degree focusing on nursing theories, pediatric pathology, community obstetrics, health-informatics, and active hospital research models.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4 text-[11px] font-semibold text-gray-400">
                <span>Duration: 4 Years</span>
                <span>•</span>
                <span>Type: Undergraduate Degree</span>
              </div>
            </div>

            {/* ANM */}
            <div className="bg-white/80 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between relative overflow-hidden group hover:border-brand-gold/30 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-brand-gold/10 text-brand-gold text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-bl-xl border-l border-b border-brand-gold/10">
                Launching Soon
              </div>
              <div className="space-y-3">
                <h4 className="font-display font-extrabold text-lg text-dark-navy group-hover:text-brand-blue transition duration-200">
                  Auxiliary Nurse Midwifery (ANM)
                </h4>
                <p className="text-xs text-gray-500 font-sans font-light leading-relaxed">
                  A 2-year diploma centering on basic maternity services, rural wellness centers, first aid assistance, and infant nourishment tracking programs.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4 text-[11px] font-semibold text-gray-400">
                <span>Duration: 2 Years</span>
                <span>•</span>
                <span>Type: Auxiliary Diploma</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
