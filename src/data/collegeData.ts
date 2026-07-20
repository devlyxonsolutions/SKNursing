import { FacultyMember, FacilityItem, EventItem, AchievementItem, TestimonialItem, FAQItem } from '../types';

export const COLLEGE_INFO = {
  name: "S K Nursing College",
  tagline: "Building Compassionate Healthcare Professionals",
  established: "2018",
  location: "Sangli, Maharashtra",
  address: "Sk Nursing College, Peth Shirala Road, Tal: Walwa, Dist: Sangli, Rethre dharan, Maharashtra 415407",
  phone: "+91 2342 276543",
  mobile: "+91 98765 43210",
  email: "admissions@sknursing.org.in",
  infoEmail: "info@sknursing.org.in",
  whatsapp: "919876543210",
  board: "Maharashtra State Board of Nursing and Paramedical Education (MSBNPE), Mumbai",
  approval: "Indian Nursing Council (INC), New Delhi & Maharashtra Nursing Council (MNC), Mumbai"
};

export const PRINCIPAL_MESSAGE = {
  name: "Dr.Kishor Mahapure",
  designation: "Principal, S K Nursing College",
  qualification: "M.Sc. Nursing (OBGY), Ph.D. in Nursing Science",
  experience: "24+ Years of Academic & Clinical Leadership",
  image: "/principle.png",
  message: "Welcome to S K Nursing College. Nursing is more than a profession; it is a sacred calling to heal, comfort, and care. Our college stands as a beacon of clinical excellence and compassionate service. We are committed to nurturing the next generation of healthcare pioneers by providing INC-compliant infrastructure, state-of-the-art diagnostic and clinical laboratories, and robust multi-specialty hospital collaborations. Through GNM training, we prepare our students to deliver world-class bedside care, excel in emergency response, and champion community health initiatives. I invite you to join us on this transformative journey to build a healthier tomorrow."
};

export const VISION_MISSION = {
  vision: "To be a leading center of nursing education and research, recognized globally for producing exceptionally skilled, ethically grounded, and deeply compassionate healthcare professionals who serve humanity.",
  mission: [
    "To deliver highly professional and value-based nursing education matching global clinical standards.",
    "To provide extensive hands-on experience in advanced medical laboratories and leading multi-specialty hospitals.",
    "To foster critical thinking, clinical reasoning, and ethical leadership in patient-centered nursing care.",
    "To empower community-level wellness through rural health camps, immunization programs, and public health awareness drives."
  ],
  coreValues: [
    { title: "Compassion", desc: "Treating every patient with dignity, warmth, and profound empathy." },
    { title: "Integrity", desc: "Adhering to the absolute highest ethical and professional medical standards." },
    { title: "Excellence", desc: "Striving for continuous improvement in learning, clinical practice, and research." },
    { title: "Service", desc: "Dedication to community health and reaching the underserved sections of society." }
  ]
};

export const GNM_COURSE_DETAILS = {
  duration: "3 Years (Full-time)",
  seats: 40,
  board: "Maharashtra State Board of Nursing and Paramedical Education, Mumbai",
  eligibility: [
    "10+2 with English passed, achieving a minimum of 40% aggregate marks (any stream, science stream preferable).",
    "Candidates from State Open School recognized by State Government and National Institute of Open School (NIOS) recognized by Central Government are eligible.",
    "Registered ANM with pass marks are eligible.",
    "For CBSE candidates, Health Care Science vocational stream is acceptable.",
    "Minimum age for admission is 17 years as of 31st December of the admission year.",
    "Candidate must be medically fit to undergo the rigorous clinical training."
  ],
  reservations: [
    "3% disability reservation is considered for candidates with locomotor disability of lower limbs (between 40% to 50%).",
    "5% relaxation in marks is granted to Scheduled Caste (SC) and Scheduled Tribe (ST) candidates.",
    "All other State Government reservation policies will be strictly followed for general admissions."
  ],
  outcomes: [
    { title: "Expert Bedside Nursing Care", desc: "Proficiently administer medications, monitor vitals, and provide high-quality physical and emotional patient support." },
    { title: "Maternal & Child Health Mastery", desc: "Support obstetricians during childbirth, assist in pre-natal and post-natal care, and oversee pediatric wellness." },
    { title: "Basic Critical Care Competency", desc: "Manage emergencies, initiate CPR, operate life-support telemetry, and respond to acute clinical situations." },
    { title: "Community Health Leadership", desc: "Implement public health policies, coordinate immunization drives, and deliver essential rural healthcare services." },
    { title: "Hospital Readiness", desc: "Seamlessly integrate into super-specialty intensive care units, general wards, and trauma care facilities." }
  ],
  curriculum: [
    { year: "Year 1", subjects: ["Anatomy & Physiology", "Microbiology", "Psychology & Sociology", "Fundamentals of Nursing", "First Aid", "Community Health Nursing - I", "Nutrition", "English & Computer Education"] },
    { year: "Year 2", subjects: ["Medical Surgical Nursing - I", "Medical Surgical Nursing - II (including Oncology)", "Mental Health Nursing (Psychiatric)", "Child Health Nursing (Pediatrics)", "Co-curricular Clinical Internships"] },
    { year: "Year 3", subjects: ["Midwifery & Gynecological Nursing", "Community Health Nursing - II", "Professional Trends & Adjustments", "Nursing Education & Research Introduction", "6-Month Compulsory Clinical Internship"] }
  ]
};

export const INFRASTRUCTURE_FACILITIES: FacilityItem[] = [
  {
    id: "fac_building",
    title: "INC-Compliant 3-Storey Building",
    description: "A state-of-the-art campus featuring spacious air-conditioned classrooms, acoustic audio-visual setups, high-speed Wi-Fi, and extensive security monitoring.",
    icon: "Building",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac_library",
    title: "Well-Stocked Medical Library",
    description: "Housing over 5,000 medical journals, modern nursing textbooks, reference volumes, and a dedicated digital e-library node for global research database access.",
    icon: "BookOpen",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac_clinical_lab",
    title: "Clinical Training & Demonstration Lab",
    description: "Equipped with advanced medical mannequins, critical care telemetry systems, and realistic hospital beds to practice fundamental nursing procedures safely.",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac_medsurg_lab",
    title: "Medical-Surgical Lab",
    description: "Fully replicates an operating room environment, with surgical suture models, airway management trainer kits, and sterilized pre/post-operative setups.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac_pediatric_lab",
    title: "Pediatrics & Neonatal Lab",
    description: "Features specialized infant incubators, pediatric CPR mannequins, pediatric weighing systems, and baby care model stations for neonatal study.",
    icon: "Baby",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac_obg_lab",
    title: "OB-GYN & Midwifery Lab",
    description: "Equipped with specialized pelvis structures, fetal development models, birthing simulator dolls, and pre-natal screening monitors.",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac_community_lab",
    title: "Community Health Nursing Lab",
    description: "Prepares students for rural health interventions, featuring home nursing kits, water filtration models, vaccination bags, and health exhibit resources.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac_partnerships",
    title: "Multi-Specialty Hospital Partnerships",
    description: "Direct ties with major regional hospitals ensuring comprehensive real-world bedside clinical rotations under expert physician supervision.",
    icon: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "fac1",
    name: "Dr. Sunita K. Deshmukh",
    designation: "Principal & Professor",
    qualification: "M.Sc. Nursing (OBGY), Ph.D. in Nursing Science",
    experience: "24 Years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac2",
    name: "Prof. Rajesh M. Shinde",
    designation: "Vice-Principal & Professor",
    qualification: "M.Sc. Nursing (Medical-Surgical), MBA (Hospital Admin)",
    experience: "18 Years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac3",
    name: "Mrs. Anjali V. Joshi",
    designation: "Associate Professor",
    qualification: "M.Sc. Nursing (Pediatrics), B.Sc. Nursing",
    experience: "12 Years",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac4",
    name: "Mrs. Priya S. Patil",
    designation: "Assistant Professor",
    qualification: "M.Sc. Nursing (Community Health Nursing)",
    experience: "9 Years",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fac5",
    name: "Mr. Amit R. Kulkarni",
    designation: "Senior Clinical Instructor",
    qualification: "B.Sc. Nursing, Post-Basic Diploma in Critical Care",
    experience: "7 Years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
  }
];

export const STUDENT_EVENTS: EventItem[] = [
  
  {
    id: "evt1",
    title: "International Nurses Day Celebration",
    date: "12th May, 2026",
    description:
      "A grand commemoration celebrating Florence Nightingale's legacy, featuring lamp lighting, oath-taking, research paper presentations, and alumni panel discussions.",
    image: "/images/events/international-nurses-day.jpg",
    category: "academic",
  },
  {
    id: "evt2",
    title: "Rural Healthcare & Immunization Drive",
    date: "28th April, 2026",
    description:
      "Our GNM students successfully set up and managed rural medical screening booths and infant polio vaccination drives in rural Saswad under the MNC guidance.",
    image: "/images/events/rural-healthcare-drive.jpg",
    category: "social",
  },
  {
    id: "evt3",
    title: "Symphony - Inter-College Cultural Fest",
    date: "14th February, 2026",
    description:
      "An annual socio-cultural platform bringing nursing colleges across Maharashtra together for drama, musical symphony, therapeutic dance contests, and rangoli exhibitions.",
    image: "/images/events/cultural-fest.jpg",
    category: "cultural",
  },
  {
    id: "evt4",
    title: "State-Level Disaster Response Workshop",
    date: "10th January, 2026",
    description:
      "Hands-on simulations on disaster triage, advanced airway administration, field dressings, and mass casualty patient logistics, certified by top trauma physicians.",
    image: "/images/events/disaster-response-workshop.jpg",
    category: "academic",
  },

];

export const PLACEMENTS = [
  { hospital: "Sahyadri Multi-Specialty Hospitals, Karad", intake: "12 Students", logoLetter: "S" },
  { hospital: "Krishna Hospital & Medical Research Centre, Karad", intake: "9 Students", logoLetter: "K" },
  { hospital: "Civil Hospital, Sangli", intake: "8 Students", logoLetter: "C" },
  { hospital: "Bharti Vidyapeeth Centenary Hospital, Sangli", intake: "6 Students", logoLetter: "B" },
  { hospital: "CPR Multi-Specialty Hospital, Kolhapur", intake: "5 Students", logoLetter: "C" }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach1",
    title: "100% MSBNPE Board Exam Pass Rate",
    year: "Batch of 2023-24",
    description: "Our final-year GNM cohort registered an unprecedented 100% passing average with over 70% of students scoring distinctions in the board examination.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ach2",
    title: "First Prize in State-Level Quiz Competition",
    year: "2025",
    description: "S K Nursing College GNM team won the prestigious gold medal at the Maharashtra State Association of Nursing Quiz held in Mumbai.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ach3",
    title: "Best Community Outreach Recognition",
    year: "2025",
    description: "Honored by the Municipal Corporation for running consistent health awareness campaigns, dietary workshops, and hygienic living drives in semi-urban sectors.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    caption: "Students practicing procedures in the clinical demonstration laboratory.",
    category: "Labs"
  },
  {
    url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80",
    caption: "Interactive learning seminar on clinical diagnostics and human anatomy.",
    category: "Classroom"
  },
  {
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    caption: "Faculty guiding bedside pediatric nursing protocols.",
    category: "Labs"
  },
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    caption: "State-of-the-art diagnostic setup at our partner multi-specialty hospital.",
    category: "Hospital"
  },
  {
    url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    caption: "The extensive medical library layout housing thousands of medical research logs.",
    category: "Library"
  },
  {
    url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
    caption: "Lamp lighting oath-taking ceremony on International Nurses Day.",
    category: "Events"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test1",
    name: "Pooja S. Kadam",
    role: "Staff Nurse, Critical Care Unit",
    batch: "GNM Batch of 2019-22",
    message: "Studying at S K Nursing College was life-changing. The rigorous clinical training and support from Mrs. Anjali Joshi made me confident in managing high-pressure ICU environments. Our bedside training and state-of-the-art laboratory practice are why I excel today at Sahyadri Hospital.",
    rating: 5
  },
  {
    id: "test2",
    name: "Rohan D. More",
    role: "Midwifery & Community Specialist",
    batch: "GNM Batch of 2020-23",
    message: "What stands out about SKNC is the emphasis on community clinical rotations. The community nursing lab prepared us perfectly to administer healthcare in rural outposts. The board preparation is outstanding!",
    rating: 5
  },
  {
    id: "test3",
    name: "Meera Patel",
    role: "Senior Pediatrics Nurse",
    batch: "GNM Batch of 2018-21",
    message: "S K Nursing College offers a premium learning atmosphere. The smart classrooms, fully outfitted Pediatric mannequin lab, and partnerships with Sangli and Karad's top super-specialty clinics made my career transition absolutely seamless.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "What is the duration and intake capacity of the GNM program?",
    answer: "The General Nursing & Midwifery (GNM) program is a 3-year full-time diploma course. S K Nursing College has an approved intake capacity of 40 seats per academic year."
  },
  {
    id: "faq2",
    question: "Is the S K Nursing College GNM program officially recognized?",
    answer: "Yes, the program is fully recognized by the Indian Nursing Council (INC), New Delhi, and the Maharashtra Nursing Council (MNC), Mumbai. The exams are conducted under the Maharashtra State Board of Nursing and Paramedical Education, Mumbai."
  },
  {
    id: "faq3",
    question: "What are the eligibility requirements for GNM admissions?",
    answer: "Candidates must have passed 10+2 with English scoring a minimum of 40% aggregate marks in any stream (Science stream with Biology is highly preferable). Candidates must be at least 17 years old on or before 31st December of the admission year and medically fit."
  },
  {
    id: "faq4",
    question: "What is the Reservation Policy of the college?",
    answer: "We follow statutory guidelines including a 5% marks relaxation for SC/ST candidates and a 3% reservation for candidates with locomotor disabilities of lower limbs (40% to 50% disability). Other State Government guidelines apply."
  },
  {
    id: "faq5",
    question: "Does the college offer clinical internship training?",
    answer: "Yes, extensive hands-on clinical training is built into the curriculum. This includes bedside learning, emergency care rotations, and a compulsory 6-month clinical internship at our affiliated multi-specialty hospitals in Sangli and Karad."
  },
  {
    id: "faq6",
    question: "Are there hostel and transport facilities available?",
    answer: "Yes, S K Nursing College provides safe, clean, and highly secure hostel facilities for students with healthy mess food, and dedicated buses for clinical rotations to affiliated hospitals."
  }
];
