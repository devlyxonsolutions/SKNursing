'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail, Award, BookOpen, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { ActiveTab } from '../types';
import { COLLEGE_INFO } from '../data/collegeData';
import { useApp } from '../context/AppContext';
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { setIsApplyModalOpen } = useApp();

  const activeTab: ActiveTab = !pathname || pathname === '/'
    ? 'home'
    : (pathname.replace(/^\//, '') as ActiveTab);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavItem {
    id: ActiveTab;
    label: string;
    hasDropdown?: boolean;
  }

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'departments', label: 'Departments' },
    { id: 'course', label: 'GNM Course', hasDropdown: true },
    { id: 'admissions', label: 'Admissions' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'student', label: 'Student Life' },
    { id: 'committees', label: 'Committees' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    setIsOpen(false);
    setShowMegaMenu(false);
    if (tabId === 'home') {
      router.push('/');
    } else {
      router.push(`/${tabId}`);
    }
  };

  return (
    <>
      {/* Top Banner Information Bar */}
      <div className="bg-dark-navy text-white text-xs py-2 px-4 border-b border-brand-gold/10 z-50 relative hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Phone size={13} className="text-brand-gold" />
              <span>{COLLEGE_INFO.mobile}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Mail size={13} className="text-brand-gold" />
              <span>{COLLEGE_INFO.email}</span>
            </span>
            <span className="flex items-center space-x-1">
              <MapPin size={13} className="text-brand-gold" />
              <span>{COLLEGE_INFO.location}</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider">
              <Award size={10} className="mr-0.5" /> Approved by INC & MNC
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-gray-100'
          : 'bg-white py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Brand Identity / Logo */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 cursor-pointer group select-none"
            id="college-logo"
          >
            <div className="w-24 h-24 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="S K Nursing College Logo"
                width={100}
                height={100}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h1 className="font-display font-bold text-xl md:text-2xl text-brand-blue tracking-tight leading-tight">
                  S K <span className="font-medium text-dark-navy">Nursing College</span>
                </h1>
              </div>
              <p className="text-[10px] text-brand-gold uppercase tracking-widest font-semibold font-sans">
                INC Approved • ISO Certified
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 relative">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setShowMegaMenu(true)}
                onMouseLeave={() => item.hasDropdown && setShowMegaMenu(false)}
              >
                <button
                  onClick={() => !item.hasDropdown && handleNavClick(item.id as ActiveTab)}
                  className={`px-2 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition duration-200 flex items-center space-x-1 cursor-pointer ${activeTab === item.id
                    ? 'text-brand-blue bg-brand-blue/5 font-semibold'
                    : 'text-dark-navy hover:text-brand-blue hover:bg-gray-50'
                    }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown size={14} className={`transition-transform duration-200 ${showMegaMenu ? 'rotate-180' : ''}`} />
                  )}
                </button>

               

                {/* Mega Menu for Course dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {showMegaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-5 px-6 grid grid-cols-1 gap-4"
                      >
                        <div>
                          <div className="flex items-center space-x-2 text-brand-blue border-b border-gray-100 pb-2 mb-3">
                            <BookOpen size={16} />
                            <span className="font-display font-bold text-sm uppercase tracking-wider">Active Program</span>
                          </div>
                          <div
                            onClick={() => handleNavClick('course')}
                            className="p-3 rounded-lg hover:bg-brand-blue/5 border border-transparent hover:border-brand-blue/10 transition group cursor-pointer"
                          >
                            <h4 className="font-display font-bold text-dark-navy group-hover:text-brand-blue text-sm">
                              General Nursing & Midwifery (GNM)
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                              3-Year Diploma course focusing on full-scope nursing services, clinical excellence, midwifery, and community care.
                            </p>
                            <div className="flex items-center space-x-3 mt-2 text-[11px] font-semibold text-brand-gold">
                              <span>Seats: 40</span>
                              <span>•</span>
                              <span>Duration: 3 Years</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-light-gray -mx-6 -mb-5 px-6 py-4 border-t border-gray-100">
                          <div className="flex items-center space-x-2 text-gray-500 mb-2">
                            <GraduationCap size={15} />
                            <span className="text-[11px] uppercase tracking-wider font-semibold">Future-Ready Nursing Infrastructure</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                            <div className="flex items-center space-x-1.5 p-1 bg-white rounded border border-gray-100">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                              <span>B.Sc. Nursing (Upcoming)</span>
                            </div>
                            <div className="flex items-center space-x-1.5 p-1 bg-white rounded border border-gray-100">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                              <span>PB BSc. Nursing (Upcoming)</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer glow-btn flex items-center space-x-1"
            >
              <Sparkles size={14} className="text-brand-gold animate-pulse" />
              <span>Apply Online</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-dark-navy hover:text-brand-blue focus:outline-none cursor-pointer"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-50 pb-2">
                    <button
                      onClick={() => handleNavClick(item.id as ActiveTab)}
                      className={`w-full text-left py-2 px-3 rounded-lg text-sm font-semibold flex justify-between items-center ${activeTab === item.id
                        ? 'text-brand-blue bg-brand-blue/5'
                        : 'text-dark-navy hover:bg-gray-50'
                        }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <span className="text-[10px] bg-brand-gold/15 text-brand-gold-dark px-1.5 py-0.5 rounded-full font-bold">3 Years</span>
                      )}
                    </button>
                    {item.hasDropdown && (
                      <div className="pl-4 mt-1 space-y-1 bg-light-gray p-2.5 rounded-lg">
                        <div
                          onClick={() => handleNavClick('course')}
                          className="text-xs text-brand-blue font-bold cursor-pointer"
                        >
                          General Nursing & Midwifery (GNM) - 40 Seats
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1">
                          Upcoming: B.Sc. Nursing & ANM
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsApplyModalOpen(true);
                    }}
                    className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white text-center py-3 rounded-lg text-sm font-bold shadow-md cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header >
    </>
  );
}
