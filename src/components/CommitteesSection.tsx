
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Users, Mail, Phone, FileText, Scale, UserCheck, AlertTriangle, HelpCircle } from 'lucide-react';

interface Committee {
  id: string;
  name: string;
  chairman: string;
  membersCount: number;
  description: string;
  guidelines: string[];
  contacts: { name: string; role: string }[];
}

const COMMITTEES_DATA: Committee[] = [
  
  {
  id: "anti-ragging",
  name: "Anti-Ragging Committee",
  chairman: "Mr. Sadabhau Khot (Bhau) - President",
  membersCount: 9,
  description:
    "S. K. Nursing College is committed to maintaining a safe, disciplined, and ragging-free campus. The Anti-Ragging Committee functions in accordance with the UGC Anti-Ragging Regulations and ensures that every student can pursue their education in a respectful and secure environment. The committee conducts awareness programmes, monitors campus activities, and takes immediate action against any act of ragging.",

  guidelines: [
    "Ragging in any form is strictly prohibited within the college campus, hostel, and associated institutions.",
    "Students found involved in ragging are liable for strict disciplinary action as per UGC Anti-Ragging Regulations.",
    "Every student is expected to maintain discipline, mutual respect, and dignity towards fellow students.",
    "Any incident of ragging should be reported immediately to the Anti-Ragging Committee for prompt action."
  ],

  contacts: [
    {
      name: "Mr. Sadabhau Khot (Bhau)",
      role: "President",
      
    },
    {
      name: "Mr. Kishor Mahapure",
      role: "Principal",
      
    },
    {
      name: "Ms. Smita Khot",
      role: "Office Superintendent",
      
    },
    {
      name: "Ms. Rohini Sawant",
      role: "Nursing Tutor",
      
    },
    {
      name: "Ms. Pratiksha Kamble",
      role: "Nursing Tutor (Female Representative)",
      
    },
    {
      name: "Mr. Jaganath Patil",
      role: "Counselor",
      
    },
    {
      name: "Miss. Shital Shete",
      role: "News Reporter",
      
    },
    {
      name: "Mr. Ravindra Desai",
      role: "Clerk",
      
    },
    {
      name: "Mr. Namdev Kurhade",
      role: "Parent Representative",

    }
  ]
},
  {
  id: "grievance",
  name: "Student Grievance Redressal Cell",
  chairman: "Mr. Sadabhau Ramchandra Khot",
  membersCount: 2,
  description: "The Student Grievance Redressal Cell provides a transparent and student-friendly platform to address academic, administrative, and campus-related concerns. The committee is committed to resolving grievances promptly while maintaining fairness, confidentiality, and accountability.",
  guidelines: [
    "Students can submit their grievances through the college office or the official grievance mechanism.",
    "All complaints are treated with complete confidentiality and impartiality.",
    "The committee reviews and resolves grievances within the prescribed timeframe.",
    "Students are encouraged to report academic, administrative, or campus-related issues without hesitation."
  ],
  contacts: [
    { name: "Mr. Sadabhau Ramchandra Khot", role: "Cell Chairperson" },
    { name: "Mr. Kishor Sanjay Mahapure", role: "Member Secretary" }
  ]
},
{
  id: "women-cell",
  name: "Women Empowerment & POSH Cell",
  chairman: "Mrs. Mohini Sagar Khot",
  membersCount: 2,
  description: "The Women Empowerment & POSH Cell is dedicated to promoting gender equality, ensuring a safe and respectful learning environment, and creating awareness about the Prevention of Sexual Harassment (POSH). The cell encourages confidence, leadership, and personal development among students.",
  guidelines: [
    "Promote awareness regarding women's rights and gender equality.",
    "Provide a safe and secure environment free from harassment.",
    "Address complaints related to sexual harassment with confidentiality and fairness.",
    "Conduct awareness programs, workshops, and counseling sessions for students."
  ],
  contacts: [
    { name: "Mrs. Mohini Sagar Khot", role: "Cell Chairperson" },
    { name: "Ms. Rohini Sagar Sawant", role: "Senior Member" }
  ]
},
{
  id: "sna",
  name: "Student Nurses Association (SNA)",
  chairman: "Ms. Pratiksha Kamble",
  membersCount: 2,
  description: "The Student Nurses Association (SNA) encourages leadership, professional growth, teamwork, and social responsibility among nursing students. The association organizes academic, cultural, sports, and community outreach activities to enhance the overall development of future nursing professionals.",
  guidelines: [
    "Organize academic, cultural, and extracurricular activities throughout the year.",
    "Promote leadership qualities and teamwork among student nurses.",
    "Encourage participation in community health programs and awareness campaigns.",
    "Support professional development through seminars, workshops, and competitions."
  ],
  contacts: [
    { name: "Ms. Pratiksha Kamble", role: "SNA Advisor" },
    { name: "Ms. Sonam Kamble", role: "SNA Student President" }
  ]
}
 
  
];

export default function CommitteesSection() {
  const [activeCommittee, setActiveCommittee] = useState<string>("anti-ragging");

  const activeComm = COMMITTEES_DATA.find(comm => comm.id === activeCommittee) || COMMITTEES_DATA[0];

  return (
    <section className="py-20 bg-white" id="committees-section">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
            Campus Governance
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
            Institutional Committees & Student Welfare Cells
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
            S K Nursing College prioritizes student wellness, gender safety, and strict regulatory adherence. Explore our functional cells, anti-ragging helpline contacts, and welfare bodies.
          </p>
        </div>

        {/* Side-by-Side Selector & content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Navigation Rail */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-extrabold text-xs text-brand-gold uppercase tracking-widest pl-3 mb-4">
              Available Student Cells
            </h4>
            {COMMITTEES_DATA.map((comm) => (
              <button
                key={comm.id}
                onClick={() => setActiveCommittee(comm.id)}
                className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center space-x-4 cursor-pointer ${
                  activeCommittee === comm.id
                    ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/10'
                    : 'bg-light-gray text-dark-navy hover:bg-gray-100 border-gray-150'
                }`}
              >
                <div className={`p-2 rounded-xl shrink-0 ${
                  activeCommittee === comm.id ? 'bg-white/10 text-brand-gold' : 'bg-brand-blue/5 text-brand-blue'
                }`}>
                  {comm.id === 'anti-ragging' ? <Scale size={20} /> : 
                   comm.id === 'grievance' ? <UserCheck size={20} /> :
                   comm.id === 'women-cell' ? <ShieldCheck size={20} /> : <Users size={20} />}
                </div>
                <div>
                  <span className={`block font-display font-bold text-xs sm:text-sm leading-tight`}>
                    {comm.name}
                  </span>
                  <span className={`text-[10px] block mt-0.5 ${activeCommittee === comm.id ? 'text-gray-300' : 'text-gray-400'}`}>
                    Chairperson: {comm.chairman}
                  </span>
                </div>
              </button>
            ))}

            {/* Helpline Callout box */}
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 mt-6 space-y-3">
              <div className="flex items-center space-x-2.5 text-amber-800">
                <AlertTriangle size={18} className="shrink-0 text-amber-600 animate-bounce" />
                <span className="font-display font-bold text-xs uppercase tracking-wider">National Helpline</span>
              </div>
              <p className="text-[11px] text-amber-700 leading-relaxed font-sans">
                Grievances or ragging concerns can also be reported directly to the National Anti-Ragging Helpline (toll-free): <strong>1800-180-5522</strong>.
              </p>
            </div>
          </div>

          {/* Right Detailed Panel */}
          <div className="lg:col-span-8 bg-light-gray p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCommittee}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Introduction */}
                <div className="space-y-3">
                  <span className="text-[10px] bg-brand-gold text-dark-navy font-bold uppercase tracking-widest px-2.5 py-0.5 rounded">
                    Welfare cell • {activeComm.membersCount} Active Members
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-brand-blue">
                    {activeComm.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    {activeComm.description}
                  </p>
                </div>

                {/* Regulatory Guidelines */}
                <div className="space-y-4 bg-white p-6 rounded-2xl border border-gray-150">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-gold flex items-center space-x-2">
                    <ShieldCheck size={14} />
                    <span>Statutory Guidelines & Rules</span>
                  </h4>
                  <ul className="space-y-3">
                    {activeComm.guidelines.map((guide, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs text-gray-500 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0"></span>
                        <span>{guide}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contacts / Cell Officers */}
                <div className="space-y-4">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-gray-400">
                    Nodal Officers & Cell Contacts
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeComm.contacts.map((contact, idx) => (
                      <div key={idx} className="bg-white p-4.5 rounded-xl border border-gray-100 space-y-3">
                        <div>
                          <span className="text-[9px] bg-brand-blue/5 text-brand-blue font-bold px-1.5 py-0.5 rounded uppercase">
                            {contact.role}
                          </span>
                          <h5 className="font-display font-bold text-sm text-dark-navy mt-1.5">{contact.name}</h5>
                        </div>
                        {/* <div className="space-y-1.5 pt-2 border-t border-gray-50 text-xs text-gray-500 font-sans">
                          <a href={`tel:${contact.phone}`} className="flex items-center space-x-2 hover:text-brand-blue transition">
                            <Phone size={12} className="text-brand-gold shrink-0" />
                            <span>{contact.phone}</span>
                          </a>
                          <a href={`mailto:${contact.email}`} className="flex items-center space-x-2 hover:text-brand-blue transition break-all">
                            <Mail size={12} className="text-brand-gold shrink-0" />
                            <span>{contact.email}</span>
                          </a>
                        </div> */}
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
