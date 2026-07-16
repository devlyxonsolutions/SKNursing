'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, Award, ShieldCheck, HeartPulse, Sparkles, GraduationCap, ChevronRight, Stethoscope } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  head: string;
  qualification: string;
  labs: string[];
  description: string;
  focusAreas: string[];
  imageUrl: string;
}

const DEPARTMENTS_DATA: Department[] = [
  {
    id: "med-surg",
    name: "Medical Surgical Nursing",
    head: "Prof. Rajesh M. Shinde",
    qualification: "M.Sc. Nursing (Medical-Surgical), MBA (Hospital Admin)",
    labs: ["Advanced Medical-Surgical Lab", "Clinical Demonstration Lab"],
    description: "The Department of Medical Surgical Nursing provides comprehensive training in adult healthcare management. Our students learn high-fidelity nursing interventions for acute illnesses, pre- and post-operative nursing, pharmaceutical procedures, and diagnostic interpretation.",
    focusAreas: ["Critical Care Nursing", "Cardiovascular Diagnostics", "Advanced Pharmacology", "Trauma and Emergency Triage"],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "obg",
    name: "Obstetrics & Gynecological Nursing",
    head: "Dr. Sunita K. Deshmukh",
    qualification: "M.Sc. Nursing (OBGY), Ph.D. in Nursing Science",
    labs: ["OBG & Midwifery Simulation Lab", "Neonatal Incubation Unit"],
    description: "Providing pioneering training in maternal-fetal medicine, safe birthing protocols, and prenatal screening. We educate student nurses to lead normal deliveries, identify obstetric complications, and support postpartum recovery with high medical ethics.",
    focusAreas: ["Antenatal and Postnatal Diagnostics", "Labor Management & Delivery Assistance", "High-Risk Pregnancy Care", "Lactation Counseling"],
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "child",
    name: "Child Health (Pediatric) Nursing",
    head: "Mrs. Anjali V. Joshi",
    qualification: "M.Sc. Nursing (Pediatrics), B.Sc. Nursing",
    labs: ["Pediatrics Demonstration Lab", "Baby Care Station"],
    description: "Dedicated to nurturing the physical and psycho-social health of neonates, infants, and pediatric patients. This department trains students in infant nutrition, pediatric CPR, immunization regimens, and congenital disease care.",
    focusAreas: ["Neonatal Intensive Care (NICU) Protocols", "Pediatric Growth & Development Monitoring", "Childhood Infectious Disease Care", "Therapeutic Play Interventions"],
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "community",
    name: "Community Health Nursing",
    head: "Mrs. Priya S. Patil",
    qualification: "M.Sc. Nursing (Community Health Nursing)",
    labs: ["Community Health Demonstration Lab", "Rural Health Camp Kits"],
    description: "Focusing on preventive healthcare, family counseling, and community-level medical interventions. Students are trained to coordinate diagnostic camps, maintain village health registers, and organize immunization drives in under-served rural sectors.",
    focusAreas: ["Epidemiology & Biostatistics", "Family Health Care Surveys", "Environmental Hygiene & Sanitation", "National Health Programs Coordination"],
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mental",
    name: "Mental Health (Psychiatric) Nursing",
    head: "Mr. Amit R. Kulkarni (In-Charge)",
    qualification: "B.Sc. Nursing, Post-Basic Diploma in Critical Care",
    labs: ["Therapeutic Communication Room", "Counseling Cell"],
    description: "A specialized division training nurses to treat acute psychiatric conditions, assist in de-addiction centers, and administer modern psycho-therapy. We focus heavily on therapeutic communication, stress-release protocols, and patient counseling.",
    focusAreas: ["Psycho-Social Status Assessments", "Cognitive Behavioral Therapy (CBT)", "De-addiction Rehabilitation Care", "Crisis Intervention & Counseling"],
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  }
];

export default function DepartmentsSection() {
  const [selectedDept, setSelectedDept] = useState<string>("med-surg");

  const activeDept = DEPARTMENTS_DATA.find(dept => dept.id === selectedDept) || DEPARTMENTS_DATA[0];

  return (
    <section className="py-20 bg-white" id="departments-section">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            Academic Excellence
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
            Academic Departments & Specialties
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
            S K Nursing College is divided into 5 core academic divisions. Each department is equipped with certified training labs, dedicated faculty counselors, and specialized hospital clinical slots.
          </p>
        </div>

        {/* Tab Selection Area */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-gray-100 pb-6">
          {DEPARTMENTS_DATA.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-5 py-3 rounded-2xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedDept === dept.id
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/15 scale-105'
                  : 'text-gray-500 bg-light-gray hover:bg-gray-100'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Selected Department Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDept}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-light-gray p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm"
          >
            {/* Image & Department Head Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
                <img 
                  src={activeDept.imageUrl} 
                  alt={activeDept.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="text-[10px] bg-brand-gold text-dark-navy font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    Clinical Ward
                  </span>
                  <h4 className="font-display font-bold text-lg mt-1">{activeDept.name}</h4>
                </div>
              </div>

              {/* HOD Profile */}
              <div className="bg-white p-5 rounded-2xl border border-gray-150 flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                  <Users size={22} />
                </div>
                <div>
                  <span className="text-[9px] text-brand-gold font-bold uppercase tracking-wider block">Head of Department</span>
                  <h5 className="font-display font-bold text-sm text-dark-navy leading-tight">{activeDept.head}</h5>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{activeDept.qualification}</p>
                </div>
              </div>
            </div>

            {/* Department Info details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h3 className="font-display font-extrabold text-2xl text-brand-blue">
                  About the {activeDept.name} Department
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                  {activeDept.description}
                </p>
              </div>

              {/* Focus Areas Grid */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-gold border-b border-gray-150 pb-2">
                  Specialized Training Focus Fields
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeDept.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-gray-100 text-xs text-dark-navy font-sans">
                      <Stethoscope size={13} className="text-brand-blue shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Associated Labs list */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-gray-400">
                  Affiliated Training Laboratories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeDept.labs.map((lab, idx) => (
                    <span 
                      key={idx} 
                      className="bg-brand-blue/5 text-brand-blue text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-brand-blue/10 flex items-center space-x-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                      <span>{lab}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Accreditation and Career Path block */}
        <div className="bg-dark-navy rounded-3xl p-8 sm:p-12 text-white grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-brand-gold/10 shadow-xl">
          <div className="md:col-span-8 space-y-3">
            <span className="text-[10px] bg-brand-gold text-dark-navy font-bold uppercase tracking-widest px-2.5 py-0.5 rounded">
              Licensing Path
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Preparing for Board Licenses and Hospital Wards
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
              Every department ensures extensive bedside patient hours. Clinical rotation postings are systematically aligned with each subject module to assure a 100% board-ready portfolio for MSBNPE examinations.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end shrink-0">
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center space-y-1 w-full max-w-xs">
              <span className="block text-brand-gold font-display font-extrabold text-3xl">40</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">Total Annual GNM Seats</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
