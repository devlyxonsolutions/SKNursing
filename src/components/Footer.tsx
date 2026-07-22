'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { COLLEGE_INFO } from '../data/collegeData';
import { ActiveTab } from '../types';
import { Phone, Mail, MapPin, Award, CheckCircle, Heart, ShieldCheck, FileText } from 'lucide-react';
import Image from "next/image";

export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (tabId: ActiveTab) => {
    if (tabId === 'home') {
      router.push('/');
    } else {
      router.push(`/${tabId}`);
    }
  };

  return (
    <footer className="bg-dark-navy text-gray-300 pt-16 pb-8 border-t-2 border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Mission Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.svg"
                alt="S K Nursing College Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-white text-lg tracking-wide leading-tight">
                S K Nursing College
              </h3>
              <p className="text-[10px] text-brand-gold tracking-widest font-semibold uppercase">
                INC Approved • Estd {COLLEGE_INFO.established}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            {COLLEGE_INFO.tagline}. Affiliated with MSBNPE Mumbai and fully recognized by the Indian Nursing Council (INC), New Delhi.
          </p>
          <div className="pt-2 flex flex-col space-y-2">
            <div className="flex items-center space-x-2 text-xs text-brand-gold">
              <ShieldCheck size={14} />
              <span>ISO 9001:2015 Certified Institution</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-brand-gold">
              <Award size={14} />
              <span>Recognized by Govt. of Maharashtra</span>
            </div>
          </div>
        </div>

        {/* Dynamic Navigation */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider border-b border-gray-800 pb-2">
            Useful Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button
                onClick={() => handleNavClick('home')}
                className="hover:text-brand-gold hover:underline transition duration-200 cursor-pointer text-left"
              >
                Home & Hero Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('about')}
                className="hover:text-brand-gold hover:underline transition duration-200 cursor-pointer text-left"
              >
                About & Vision-Mission
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('course')}
                className="hover:text-brand-gold hover:underline transition duration-200 cursor-pointer text-left"
              >
                General Nursing & Midwifery (GNM)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('admissions')}
                className="hover:text-brand-gold hover:underline transition duration-200 cursor-pointer text-left"
              >
                Admission Criteria & Application
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('student')}
                className="hover:text-brand-gold hover:underline transition duration-200 cursor-pointer text-left"
              >
                Student Life & Milestones
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('contact')}
                className="hover:text-brand-gold hover:underline transition duration-200 cursor-pointer text-left"
              >
                Contact & Locational Guide
              </button>
            </li>
          </ul>
        </div>

        {/* Academic Offerings */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider border-b border-gray-800 pb-2">
            Nursing Programs
          </h4>
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-lg border border-white/5">
              <span className="text-[10px] bg-brand-gold/20 text-brand-gold uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded mr-2">
                Active Program
              </span>
              <button
                onClick={() => handleNavClick('course')}
                className="font-display font-bold text-white text-xs block mt-1.5 hover:text-brand-gold text-left"
              >
                General Nursing & Midwifery (GNM)
              </button>
              <span className="text-[11px] text-gray-400 block mt-0.5">3 Years Diploma • 40 Seats Intake</span>
            </div>

            <div className="p-3 bg-white/0 border border-dashed border-gray-800 rounded-lg">
              <span className="text-[9px] bg-gray-800 text-gray-400 uppercase tracking-widest font-bold px-1.5 py-0.5 rounded mr-2">
                Future Ready
              </span>
              <span className="font-display font-semibold text-gray-400 text-xs block mt-1.5">
                B.Sc. Nursing (Upcoming)
              </span>
              <span className="text-[10px] text-gray-500 block">4 Years Degree Course</span>
            </div>
          </div>
        </div>

        {/* Institutional Contact */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider border-b border-gray-800 pb-2">
            Contact Desk
          </h4>
          <ul className="space-y-3.5 text-sm text-gray-400">
            <li className="flex items-start space-x-2.5">
              <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed">{COLLEGE_INFO.address}</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone size={16} className="text-brand-gold shrink-0" />
              <span>{COLLEGE_INFO.mobile}</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail size={16} className="text-brand-gold shrink-0" />
              <span className="break-all">{COLLEGE_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>



      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          © {currentYear} S K Nursing College. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by{" "}
          <a
            href="https://devlyxonsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold font-semibold hover:underline"
          >
            Devlyxon Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
