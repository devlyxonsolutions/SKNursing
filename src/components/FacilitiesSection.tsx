'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INFRASTRUCTURE_FACILITIES } from '../data/collegeData';
import { ActiveTab, FacilityItem } from '../types';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Eye, X, BookOpen, HeartPulse, Building2, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function FacilitiesSection() {
  const { setIsApplyModalOpen } = useApp();
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  const getDynamicIcon = (iconName: string) => {
    // Dynamically retrieve the Lucide Icon component
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="text-brand-blue" size={24} />;
    }
    return <LucideIcons.Building className="text-brand-blue" size={24} />;
  };

  return (
    <section className="py-20 bg-white" id="facilities-section">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            State-Of-The-Art Campus
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
            INC-Compliant Infrastructure & Clinical Simulation Labs
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
            S K Nursing College offers a spacious three-storey academic campus fully integrated with diagnostic laboratories, pediatric setups, and intensive simulation wards that mirror regional super-specialty hospitals.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INFRASTRUCTURE_FACILITIES.map((facility) => (
            <div 
              key={facility.id}
              className="bg-light-gray rounded-2xl overflow-hidden border border-gray-100 flex flex-col justify-between group hover:border-brand-gold/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Image & Overlay */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark-navy/25 group-hover:bg-dark-navy/40 transition-colors duration-300" />
                <button
                  onClick={() => setSelectedFacility(facility)}
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-brand-blue p-2.5 rounded-xl shadow transition duration-200 cursor-pointer"
                  title="Expand facility details"
                >
                  <Eye size={16} />
                </button>
              </div>

              {/* Text Area */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 bg-brand-blue/5 rounded-lg shrink-0">
                      {getDynamicIcon(facility.icon)}
                    </div>
                    <h4 className="font-display font-bold text-sm text-dark-navy leading-snug group-hover:text-brand-blue transition duration-200">
                      {facility.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 font-sans font-light leading-relaxed line-clamp-3">
                    {facility.description}
                  </p>
                </div>

                <button 
                  onClick={() => setSelectedFacility(facility)}
                  className="text-brand-blue hover:text-brand-blue-hover font-display font-semibold text-xs flex items-center space-x-1 transition duration-200 mt-2 cursor-pointer"
                >
                  <span>View Equipment Spec</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Accreditation Callout */}
        <div className="bg-brand-blue rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl border border-brand-gold/15">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -z-0" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl -z-0" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-gold/15 border border-brand-gold/20 text-brand-gold text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                <ShieldCheck size={14} className="animate-pulse" />
                <span>Government & Council Recognition</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight">
                Fully Authorized and Regulated Nursing Academy
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-3xl">
                S K Nursing College meets 100% of the space, safety, equipment, and teacher-to-student ratios mandated by the Indian Nursing Council (INC), New Delhi. Our examinations and certificates carry standard governmental weight through the Maharashtra State Board of Nursing, enabling global placement opportunities.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className="bg-brand-gold hover:bg-brand-gold-dark text-dark-navy font-bold text-center px-6 py-3.5 rounded-xl shadow text-xs uppercase tracking-wider transition cursor-pointer"
              >
                Secure Admissions Seat
              </button>
              <div className="text-center sm:text-left lg:text-center text-[11px] text-gray-300 border border-white/10 p-2.5 rounded-lg font-mono">
                Approved Intake Code: SKNC-GNM-40
              </div>
            </div>
          </div>
        </div>

        {/* Facility Lightbox Modal */}
        <AnimatePresence>
          {selectedFacility && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedFacility(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-brand-gold/20 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Image */}
                <div className="h-64 sm:h-80 relative overflow-hidden">
                  <img 
                    src={selectedFacility.image} 
                    alt={selectedFacility.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                  <div className="absolute bottom-4 left-6 text-white space-y-1">
                    <span className="text-[10px] bg-brand-gold text-dark-navy font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                      INC COMPLIANT LAB
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl">
                      {selectedFacility.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Description */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-sm text-dark-navy">Operational Specification</h4>
                    <p className="text-gray-600 text-xs sm:text-sm font-sans font-light leading-relaxed">
                      {selectedFacility.description}
                    </p>
                  </div>

                  {/* Prepopulated specific clinical tools included based on lab type */}
                  <div className="bg-light-gray p-4 rounded-xl border border-gray-100">
                    <h5 className="font-display font-bold text-xs text-brand-blue uppercase tracking-wider mb-2">Simulators & Equipment Installed</h5>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-500">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                        <span>Clinical Task Trainers</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                        <span>Standard Patient Manikins</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                        <span>Diagnostic Telemetry Ports</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                        <span>Sterile Dressing Stations</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="text-[11px] text-gray-400 font-mono">ID: {selectedFacility.id.toUpperCase()}</span>
                    <button
                      onClick={() => {
                        setSelectedFacility(null);
                        setIsApplyModalOpen(true);
                      }}
                      className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold px-4 py-2.5 rounded-lg transition cursor-pointer"
                    >
                      Apply for GNM
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
