'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLLEGE_INFO } from '../data/collegeData';
import { Phone, Mail, MapPin, Send, HelpCircle, CheckCircle, Navigation, ExternalLink } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ContactSection() {
  const { showSuccessToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Inquiry details are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showSuccessToast('Inquiry Submitted successfully! Our Desk will contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section className="py-20 bg-light-gray" id="contact-desk">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            Connect With Us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
            Institutional Communications Desk
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
            Have questions regarding academic fee structures, eligibility relaxations, or hostel reservation allotments? Contact our admissions officer directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Coordinates Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Campus Address */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4 flex items-start space-x-4">
              <div className="p-3.5 bg-brand-blue/5 text-brand-blue rounded-2xl shrink-0">
                <MapPin size={24} />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-dark-navy text-sm sm:text-base">Campus Location</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                  {COLLEGE_INFO.address}
                </p>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-brand-gold font-semibold hover:underline"
                  >
                    <span>View Map Directions</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4 flex items-start space-x-4">
              <div className="p-3.5 bg-brand-blue/5 text-brand-blue rounded-2xl shrink-0">
                <Phone size={24} />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-dark-navy text-sm sm:text-base">Admissions Hotline</h4>
                <p className="text-xs text-gray-500 font-sans font-light">
                  Mobile Desk: <strong className="text-dark-navy">{COLLEGE_INFO.mobile}</strong>
                </p>
                <p className="text-[10px] text-brand-gold font-mono uppercase tracking-wider font-bold">
                  Available Mon-Sat (9:00 AM to 5:00 PM)
                </p>
              </div>
            </div>

            {/* Direct Email Address */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4 flex items-start space-x-4">
              <div className="p-3.5 bg-brand-blue/5 text-brand-blue rounded-2xl shrink-0">
                <Mail size={24} />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-dark-navy text-sm sm:text-base">Electronic Desks</h4>
                <p className="text-xs text-gray-500 font-sans font-light">
                  Admissions: <a href={`mailto:${COLLEGE_INFO.email}`} className="text-brand-blue hover:underline break-all">{COLLEGE_INFO.email}</a>
                </p>
                <p className="text-xs text-gray-500 font-sans font-light">
                  General Info: <a href={`mailto:${COLLEGE_INFO.infoEmail}`} className="text-brand-blue hover:underline break-all">{COLLEGE_INFO.infoEmail}</a>
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-display font-extrabold text-xl text-dark-navy">Send an Quick Inquiry</h3>
              <p className="text-xs text-gray-400 mt-1">Fill out the parameters and our student counsellor will email or call you.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Deshmukh"
                    className="w-full bg-light-gray border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none focus:bg-white transition"
                  />
                  {errors.name && <p className="text-[10px] text-red-500 font-semibold">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="rahul@example.com"
                    className="w-full bg-light-gray border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none focus:bg-white transition"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-semibold">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-600">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  maxLength={10}
                  className="w-full bg-light-gray border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none focus:bg-white transition"
                />
                {errors.phone && <p className="text-[10px] text-red-500 font-semibold">{errors.phone}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-600">Your Message / Inquiry *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ask about fees, hostel, eligibility relaxations, etc."
                  rows={4}
                  className="w-full bg-light-gray border border-gray-200 rounded-xl px-4 py-3 text-xs focus:border-brand-blue focus:outline-none focus:bg-white transition"
                />
                {errors.message && <p className="text-[10px] text-red-500 font-semibold">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow flex items-center justify-center space-x-2 cursor-pointer disabled:bg-gray-400"
              >
                {loading ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <Send size={14} className="text-brand-gold" />
                    <span>Submit Academic Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Google Map */}
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.8748258978117!2d74.17289461849822!3d17.00509825868084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a11d20c8453b%3A0x6ac87b4a72e1469e!2sS%20K%20International%20Sainik%20School!5e1!3m2!1sen!2sin!4v1784271464167!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="S K Nursing College Location"
          />
        </div>




      </div>
    </section>
  );
}
