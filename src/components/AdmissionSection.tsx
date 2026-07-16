'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AdmissionApplication } from '../types';
import { COLLEGE_INFO, GNM_COURSE_DETAILS } from '../data/collegeData';
import { CheckCircle, ShieldAlert, Sparkles, Download, FileText, Upload, RefreshCw, Send, ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AdmissionSection() {
  const { handleAddApplication: onAddApplication, showSuccessToast } = useApp();
  const [currentStep, setCurrentStep] = useState(1);
  const [downloading, setDownloading] = useState(false);
  
  // Application Form States
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: 'Female',
    stream: 'Science',
    percentage12th: '',
    category: 'General',
    address: '',
    agreed: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    // Clear error
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateStep = (step: number) => {
    const errors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid Email is required';
      if (!formData.phone.trim() || formData.phone.length < 10) errors.phone = 'Valid 10-digit phone number is required';
      if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
    } else if (step === 2) {
      if (!formData.percentage12th) errors.percentage12th = '12th Marks percentage is required';
      const pct = parseFloat(formData.percentage12th);
      if (isNaN(pct) || pct < 40 || pct > 100) {
        errors.percentage12th = 'Eligible marks must be between 40% and 100%';
      }
      if (!formData.address.trim()) errors.address = 'Current Address is required';
    } else if (step === 3) {
      if (!formData.agreed) errors.agreed = 'You must agree to the academic terms and health declarations';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    const newApp: AdmissionApplication = {
      id: 'APP-' + Math.floor(100000 + Math.random() * 900000),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      stream: formData.stream,
      percentage12th: parseFloat(formData.percentage12th),
      category: formData.category,
      status: 'Pending',
      appliedDate: new Date().toLocaleDateString('en-IN'),
      address: formData.address
    };

    onAddApplication(newApp);
    showSuccessToast('Application Submitted Successfully!');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: 'Female',
      stream: 'Science',
      percentage12th: '',
      category: 'General',
      address: '',
      agreed: false
    });
    setCurrentStep(4); // Show success screen
  };

  const triggerDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      showSuccessToast('S K Prospectus GNM 2026.pdf downloaded successfully!');
      
      // Simulate direct link trigger
      const link = document.createElement('a');
      link.href = '#';
      link.click();
    }, 2000);
  };

  const admissionSteps = [
    { num: 1, label: "Verification of Eligibility" },
    { num: 2, label: "Submit Online application" },
    { num: 3, label: "Document Verification & Interview" },
    { num: 4, label: "Final Admission Offering" }
  ];

  return (
    <section className="py-20 bg-white" id="admission-process">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            Admissions Desk
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
            Comprehensive Admission Process & Applications
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
            S K Nursing College welcomes applications for its 3-year GNM cohort. Follow our transparent 4-stage enrollment process or apply directly below using our secure candidate portal.
          </p>
        </div>

        {/* 4-Stage Admissions Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative" id="timeline">
          {admissionSteps.map((step, idx) => (
            <div key={step.num} className="bg-light-gray p-6 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="font-display font-extrabold text-3xl text-brand-gold/45">0{step.num}</span>
                <span className="text-[9px] font-mono text-gray-400 uppercase bg-white px-2 py-0.5 rounded-full border border-gray-100 shadow-sm">
                  Stage {step.num}
                </span>
              </div>
              <div>
                <h4 className="font-display font-bold text-dark-navy text-sm leading-snug">
                  {step.label}
                </h4>
                <p className="text-xs text-gray-500 mt-2 font-sans font-light leading-relaxed">
                  {step.num === 1 && "Confirm 10+2 passing marks aggregate (minimum 40%) with English prior to application."}
                  {step.num === 2 && "Fill the personal, academic, and contact segments in the student registry below."}
                  {step.num === 3 && "Shorlisted candidates undergo physical document verification & high-standard clinical evaluation."}
                  {step.num === 4 && "Final seat allotment is certified via MNC and enrollment kits are issued."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Split Screen: Prospectus Download & Admissions Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          
          {/* Left Column: Prospectus and Quick guidelines */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-light-gray p-6 sm:p-8 rounded-3xl border border-gray-100 space-y-6">
              <div className="flex items-center space-x-3 text-brand-blue">
                <FileText size={24} />
                <h4 className="font-display font-bold text-dark-navy text-base">Prospectus GNM 2026-27</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                Download the official, comprehensive S K Nursing College guide detailing student rules, hostel guides, laboratory specifications, clinical partners list, and statutory reservation policies.
              </p>
              
              {/* Document Simulator Preview */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200/60 shadow-inner flex items-center space-x-4">
                <div className="w-12 h-16 bg-brand-blue/10 border-2 border-brand-blue/20 rounded-md flex items-center justify-center text-brand-blue shrink-0">
                  <FileText size={20} className="text-brand-gold" />
                </div>
                <div className="flex-grow">
                  <span className="block font-display font-bold text-xs text-dark-navy">S_K_Nursing_Prospectus.pdf</span>
                  <span className="text-[10px] text-gray-400 block mt-0.5">3.4 MB • PDF Document</span>
                </div>
              </div>

              <button
                onClick={triggerDownload}
                disabled={downloading}
                className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center space-x-2 transition cursor-pointer disabled:bg-gray-400"
              >
                {downloading ? (
                  <>
                    <RefreshCw className="animate-spin text-brand-gold" size={16} />
                    <span>Preparing Document...</span>
                  </>
                ) : (
                  <>
                    <Download className="text-brand-gold" size={16} />
                    <span>Download Official Brochure</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Eligibility Guideline box */}
            <div className="p-6 bg-brand-gold/10 border border-brand-gold/20 rounded-3xl space-y-3">
              <div className="flex items-center space-x-2 text-brand-gold-dark font-display font-bold text-sm">
                <ShieldAlert size={18} />
                <span>Admission Safeguard Notices</span>
              </div>
              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                Admissions close once the statutory 40-seat quota is verified by MSBNPE board authorities. Please verify that you are at least 17 years old on December 31, 2026, before submitting.
              </p>
            </div>
          </div>

          {/* Right Column: Multi-Step Active Admissions Form */}
          <div className="lg:col-span-7 bg-light-gray rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm" id="online-application">
            
            {/* Header Form */}
            <div className="border-b border-gray-200 pb-5 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[10px] bg-brand-blue text-white px-2 py-0.5 rounded font-extrabold uppercase tracking-wider">
                  Live Registration Portal
                </span>
                <h3 className="font-display font-extrabold text-xl text-dark-navy mt-1">Online Application Form</h3>
              </div>
              {/* Stepper indicators */}
              <div className="flex items-center space-x-1">
                {[1, 2, 3].map((stepNum) => (
                  <div 
                    key={stepNum}
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-xs transition duration-300 ${
                      currentStep === stepNum 
                        ? 'bg-brand-blue text-white' 
                        : currentStep > stepNum 
                          ? 'bg-green-500 text-white' 
                          : 'bg-white text-gray-400 border border-gray-200'
                    }`}
                  >
                    {currentStep > stepNum ? '✓' : stepNum}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Personal profile */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm text-brand-blue uppercase tracking-wider mb-2">Step 1: Student Profile</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 block">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Pooja Shinde"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none"
                      />
                      {formErrors.fullName && <p className="text-[10px] text-red-500 font-medium">{formErrors.fullName}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 block">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="pooja@example.com"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none"
                      />
                      {formErrors.email && <p className="text-[10px] text-red-500 font-medium">{formErrors.email}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 block">Mobile Phone *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        maxLength={10}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none"
                      />
                      {formErrors.phone && <p className="text-[10px] text-red-500 font-medium">{formErrors.phone}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 block">Date of Birth *</label>
                      <input 
                        type="date" 
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none"
                      />
                      {formErrors.dateOfBirth && <p className="text-[10px] text-red-500 font-medium">{formErrors.dateOfBirth}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 block">Gender *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none"
                      >
                        <option value="Female">Female (Preferable)</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center space-x-1 shadow transition cursor-pointer"
                    >
                      <span>Next: Educational Scores</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Educational background */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm text-brand-blue uppercase tracking-wider mb-2">Step 2: Marks & Eligibility</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 block">12th Stream / Education</label>
                      <select
                        name="stream"
                        value={formData.stream}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none"
                      >
                        <option value="Science">Science (Biology Preferable)</option>
                        <option value="Arts">Arts</option>
                        <option value="Commerce">Commerce</option>
                        <option value="ANM Registered">Registered ANM Certificate holder</option>
                        <option value="Other">Other INC recognized vocational stream</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 block">12th Standard Marks % *</label>
                      <input 
                        type="number" 
                        name="percentage12th"
                        value={formData.percentage12th}
                        onChange={handleInputChange}
                        placeholder="e.g. 72"
                        min={40}
                        max={100}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none"
                      />
                      {formErrors.percentage12th && <p className="text-[10px] text-red-500 font-medium">{formErrors.percentage12th}</p>}
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-xs font-semibold text-gray-600 block">Current Address *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Please input your full postal address"
                        rows={3}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none"
                      />
                      {formErrors.address && <p className="text-[10px] text-red-500 font-medium">{formErrors.address}</p>}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 text-xs font-bold px-5 py-3 rounded-xl flex items-center space-x-1 cursor-pointer"
                    >
                      <ArrowLeft size={14} />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center space-x-1 shadow transition cursor-pointer"
                    >
                      <span>Next: Final Declaration</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Declaration & Submit */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm text-brand-blue uppercase tracking-wider mb-2">Step 3: Verification & Category</h4>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 block">Caste / Admission Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none"
                      >
                        <option value="General">General / Open Category</option>
                        <option value="SC">Scheduled Caste (SC) - 5% relaxation</option>
                        <option value="ST">Scheduled Tribe (ST) - 5% relaxation</option>
                        <option value="OBC">Other Backward Class (OBC)</option>
                        <option value="Disability">Locomotor Disability (3% reserved)</option>
                      </select>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-gray-200/60 space-y-3">
                      <h5 className="font-display font-bold text-xs text-brand-blue">Candidate Fitness Affirmation</h5>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                        By checking the box below, you affirm under penalty of academic disqualification that you are medically fit to undergo clinical assignments, hold zero disciplinary actions from prior boards, and passed English inside your 10+2 standard.
                      </p>
                      
                      <div className="flex items-start space-x-2.5 pt-2">
                        <input 
                          type="checkbox" 
                          name="agreed"
                          id="agreed"
                          checked={formData.agreed}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue mt-0.5"
                        />
                        <label htmlFor="agreed" className="text-[11px] text-gray-600 font-semibold cursor-pointer">
                          I declare that I am medically fit, English-passed, and all statements are true. *
                        </label>
                      </div>
                      {formErrors.agreed && <p className="text-[10px] text-red-500 font-medium">{formErrors.agreed}</p>}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 text-xs font-bold px-5 py-3 rounded-xl flex items-center space-x-1 cursor-pointer"
                    >
                      <ArrowLeft size={14} />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="bg-brand-gold hover:bg-brand-gold-dark text-dark-navy text-xs font-bold px-6 py-3.5 rounded-xl flex items-center space-x-1.5 shadow-lg transition cursor-pointer"
                    >
                      <Send size={14} />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: SUCCESS VIEW */}
              {currentStep === 4 && (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto border-2 border-green-500/20 shadow-sm">
                    <CheckCircle size={32} className="animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-extrabold text-xl text-dark-navy">Registry Received!</h4>
                    <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
                      Thank you for choosing S K Nursing College. Your registration has been written to the institutional registry system.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-200/60 inline-block text-left text-xs space-y-1 shadow-sm">
                    <span className="block font-sans text-gray-500">Candidate Email: <strong className="text-dark-navy">{formData.email || 'Verified'}</strong></span>
                    <span className="block font-sans text-gray-500">Allotment Status: <strong className="text-brand-gold">Pending Document Review</strong></span>
                    <span className="block font-mono text-[10px] text-gray-400 mt-2">SYS_CODE: SKNC-PERSIST-OK</span>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold px-5 py-3 rounded-xl transition cursor-pointer"
                    >
                      Fill Another Application
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
