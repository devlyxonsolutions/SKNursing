export type ActiveTab = 'home' | 'about' | 'departments' | 'course' | 'admissions' | 'facilities' | 'student' | 'committees' | 'gallery' | 'contact';

export interface AdmissionApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  stream: string;
  percentage12th: number;
  category: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  appliedDate: string;
  address: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  image: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: 'academic' | 'cultural' | 'sports' | 'social';
}

export interface AchievementItem {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  batch: string;
  message: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
