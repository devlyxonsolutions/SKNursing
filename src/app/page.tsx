'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Users, HeartPulse, Building2 } from 'lucide-react';
import Hero from '../components/Hero';
import CourseSection from '../components/CourseSection';
import FacilitiesSection from '../components/FacilitiesSection';
import StudentSection from '../components/StudentSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  const router = useRouter();

  const handleNavigateToAbout = () => {
    router.push('/about');
  };

  return (
    <div className="space-y-0">
      {/* Hero Banner with Slides */}
      <Hero />

      {/* About Brief intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
              Welcome to S K Nursing
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
              Nurturing the Guardians of Humanity and Clinical Safety
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              At S K Nursing College, we operate on the fundamental belief that clinical excellence is built through persistent practice, compassionate leadership, and zero compromise on medical ethics. Located in Sangli, our modern multi-floor campus is designed in full compliance with INC standards.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-sans font-light">
              Our General Nursing & Midwifery (GNM) program is tailored to prepare student nurses for direct integration into critical bedside ICU wards, community pediatric setups, and diagnostic labs.
            </p>
            <button 
              onClick={handleNavigateToAbout}
              className="text-brand-blue hover:text-brand-blue-hover font-display font-semibold text-xs uppercase tracking-wider flex items-center space-x-1 border-b border-brand-blue pb-0.5 mt-2 cursor-pointer transition-colors duration-200"
            >
              <span>Learn our Vision & Core Values</span>
            </button>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-brand-gold/10 rounded-3xl transform translate-x-3 translate-y-3 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
              alt="S K Nursing College Student Lab Practice" 
              className="w-full h-[380px] object-cover rounded-3xl shadow-lg border border-gray-100"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium highlights Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold block">
              Institutional Standards
            </span>
            <h2 className="font-display font-extrabold text-3xl text-brand-blue tracking-tight">
              Why Choose S K Nursing College?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
              We don't teach from textbooks alone. S K Campus offers simulation labs and placements structured to produce licensed leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-6 hover:border-brand-gold/30 transition-all duration-300">
              <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl self-start">
                <ShieldCheck size={24} />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-sm text-dark-navy">INC Compliant Building</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                  Fully certified multi-storey academic block meeting 100% of spatial, safety, and acoustic board requirements.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-6 hover:border-brand-gold/30 transition-all duration-300">
              <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl self-start">
                <Users size={24} />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-sm text-dark-navy">Expert Licensing Faculty</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                  Mentorship from professors holding up to 24+ years of academic and nursing leadership.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-6 hover:border-brand-gold/30 transition-all duration-300">
              <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl self-start">
                <HeartPulse size={24} />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-sm text-dark-navy">Multi-Specialty Wards</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                  Clinical rotations at the region's top diagnostic centers for active bedside training.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-6 hover:border-brand-gold/30 transition-all duration-300">
              <div className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl self-start">
                <Building2 size={24} />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-sm text-dark-navy">Advanced Simulation Labs</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                  Suture systems, neonatal incubators, and fetal monitoring models designed to mirror true medical-surgical rooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Quick teaser */}
      <CourseSection />

      {/* Quick Facilities previews */}
      <FacilitiesSection />

      {/* Placements & Achievements */}
      <StudentSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact and Form */}
      <ContactSection />
    </div>
  );
}
