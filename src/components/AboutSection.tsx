'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PRINCIPAL_MESSAGE, VISION_MISSION, COLLEGE_INFO } from '../data/collegeData';
import { Shield, Sparkles, Target, Eye, Compass, Heart, BookOpen, Quote } from 'lucide-react';
import Image from "next/image";

export default function AboutSection() {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'compassion': return <Heart className="text-brand-gold shrink-0" size={20} />;
      case 'integrity': return <Shield className="text-brand-gold shrink-0" size={20} />;
      case 'excellence': return <Sparkles className="text-brand-gold shrink-0" size={20} />;
      default: return <Compass className="text-brand-gold shrink-0" size={20} />;
    }
  };

  return (
    <section className="py-20 bg-white" id="about-college">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        
        {/* Core College Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold block">
              Established {COLLEGE_INFO.established}
            </span>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
              A Legacy of Clinical Precision & Compassionate Health Service
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              S K Nursing College, based in {COLLEGE_INFO.location}, is an institution of premier stature dedicated to teaching, testing, and scaling professional nursing standards. Our mission is centered around nursing training that merges technical board proficiency with the sacred oath of compassionate care.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              We offer our General Nursing & Midwifery (GNM) program in strict compliance with the Indian Nursing Council (INC) regulations, guided by seasoned academicians. Our graduates enjoy stellar clinical positions across premier multi-specialty hospitals, bringing honor and relief to thousands of patient families.
            </p>
            
            {/* Rapid Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="p-3 bg-light-gray rounded-xl">
                <span className="block font-display font-extrabold text-2xl text-brand-blue">INC</span>
                <span className="text-[10px] text-gray-400 uppercase font-semibold">Recognized Code</span>
              </div>
              <div className="p-3 bg-light-gray rounded-xl">
                <span className="block font-display font-extrabold text-2xl text-brand-blue">MSBNPE</span>
                <span className="text-[10px] text-gray-400 uppercase font-semibold">Exam Board</span>
              </div>
              <div className="p-3 bg-light-gray rounded-xl">
                <span className="block font-display font-extrabold text-2xl text-brand-blue">Sangli</span>
                <span className="text-[10px] text-gray-400 uppercase font-semibold">District Center</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand-gold/10 rounded-3xl transform translate-x-3 translate-y-3 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
              alt="S K Nursing College Campus Life" 
              className="w-full h-[360px] object-cover rounded-3xl shadow-xl border border-gray-100"
              referrerPolicy="no-referrer"
            />
            {/* Mini Floater Badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-5 rounded-2xl shadow-xl flex items-center space-x-3 max-w-xs border border-brand-gold/20">
              <BookOpen size={24} className="text-brand-gold shrink-0" />
              <div>
                <span className="block font-display font-bold text-sm">3 Years Diploma</span>
                <span className="text-xs text-gray-300">INC Standard Curriculum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, & Core Values */}
        <div className="bg-light-gray rounded-3xl p-8 sm:p-12 border border-gray-100 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision Panel */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-brand-gold/10 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue">
                <Eye size={24} />
              </div>
              <h4 className="font-display font-extrabold text-xl text-dark-navy">Our Vision</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-sans">
                {VISION_MISSION.vision}
              </p>
            </div>



            {/* Recognitions & Affiliations */}
<div className="bg-white rounded-3xl border border-gray-100 p-10 shadow-sm">
  <div className="text-center mb-10">
    <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">
      Official Recognitions
    </span>

    <h2 className="text-3xl font-display font-extrabold text-brand-blue mt-2">
      Recognized & Affiliated By
    </h2>

    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
      S K Nursing College is recognized and governed by the following
      statutory authorities.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-12">
    

    <div className="text-center">
      <Image
        src="/mnc.svg"
        alt="MNC"
        width={90}
        height={90}
        className="mx-auto"
      />
      <h4 className="mt-3 font-bold">Maharashtra Nursing Council</h4>
    </div>

    <div className="text-center">
      <Image
        src="/msbnpe.svg"
        alt="MSBNPE"
        width={90}
        height={90}
        className="mx-auto"
      />
      <h4 className="mt-3 font-bold">
        Maharashtra State Board of Nursing &
        Paramedical Education
      </h4>
    </div>
  </div>
</div>

            {/* Mission Panel */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-brand-gold/10 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue">
                <Target size={24} />
              </div>
              <h4 className="font-display font-extrabold text-xl text-dark-navy">Our Mission</h4>
              <ul className="space-y-2.5">
                {VISION_MISSION.mission.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-gold">Foundation Principles</h4>
              <h3 className="font-display font-extrabold text-2xl text-brand-blue mt-1">Our Core Institutional Values</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VISION_MISSION.coreValues.map((value, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-300 flex items-start space-x-3.5 group"
                >
                  <div className="p-2 bg-brand-gold/10 rounded-lg group-hover:bg-brand-gold/20 transition-colors duration-200 shrink-0">
                    {getIcon(value.title)}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm text-dark-navy group-hover:text-brand-blue transition duration-200">
                      {value.title}
                    </h5>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Principal's Message Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-gray-100 pt-16" id="principal-message">
          {/* Principal Image and Creds */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-4">
            <div className="relative inline-block lg:block">
              <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl transform -translate-x-3 translate-y-3 -z-10" />
              <img 
                src={PRINCIPAL_MESSAGE.image}
                alt={PRINCIPAL_MESSAGE.name} 
                className="w-full max-w-[280px] lg:max-w-full h-[360px] object-cover rounded-3xl shadow-lg border border-gray-200 mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-2">
              <h4 className="font-display font-extrabold text-lg text-brand-blue leading-tight">
                {PRINCIPAL_MESSAGE.name}
              </h4>
              <p className="text-xs font-semibold text-brand-gold tracking-wider uppercase mt-1">
                {PRINCIPAL_MESSAGE.designation}
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                {PRINCIPAL_MESSAGE.qualification}
              </p>
              <p className="text-xs text-gray-500 italic mt-1 bg-light-gray p-2 rounded-lg border border-gray-100 inline-block">
                {PRINCIPAL_MESSAGE.experience}
              </p>
            </div>
          </div>

          {/* Principal Message Text */}
          <div className="lg:col-span-8 bg-light-gray p-8 sm:p-10 rounded-3xl border border-gray-100 relative">
            <Quote size={56} className="text-brand-gold/15 absolute -top-4 -left-2" />
            <h3 className="font-display font-extrabold text-2xl text-brand-blue border-b border-gray-200 pb-4 mb-6">
              Message from the Principal's Desk
            </h3>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              <p className="italic">
                "{PRINCIPAL_MESSAGE.message}"
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <div className="text-right">
                <span className="block font-display font-bold text-dark-navy text-sm">Dr.Kishor Mahapure</span>
                <span className="text-xs text-gray-400">Principal, SKNC</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
