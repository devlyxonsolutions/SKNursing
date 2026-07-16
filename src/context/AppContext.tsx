'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdmissionApplication } from '../types';

interface AppContextType {
  applications: AdmissionApplication[];
  isApplyModalOpen: boolean;
  setIsApplyModalOpen: (open: boolean) => void;
  handleAddApplication: (newApp: AdmissionApplication) => void;
  handleUpdateAppStatus: (id: string, status: 'Approved' | 'Rejected') => void;
  handleDeleteApplication: (id: string) => void;
  toast: { show: boolean; message: string };
  showSuccessToast: (message: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEFAULT_APPLICATIONS: AdmissionApplication[] = [
  {
    id: "APP-410582",
    fullName: "Siddhesh R. Patil",
    email: "siddhesh.patil@gmail.com",
    phone: "9823456789",
    dateOfBirth: "2007-06-15",
    gender: "Male",
    stream: "Science",
    percentage12th: 82.4,
    category: "General",
    status: "Approved",
    appliedDate: "12/07/2026",
    address: "Peth, Tal: Walwa, Sangli 415407"
  },
  {
    id: "APP-923847",
    fullName: "Aishwarya S. Salunkhe",
    email: "aishwarya.salunkhe2@yahoo.com",
    phone: "9156789012",
    dateOfBirth: "2008-01-20",
    gender: "Female",
    stream: "Science",
    percentage12th: 76.5,
    category: "OBC",
    status: "Pending",
    appliedDate: "14/07/2026",
    address: "Shirala, Sangli 415407"
  },
  {
    id: "APP-583921",
    fullName: "Snehal K. Thorat",
    email: "snehal.thorat@outlook.com",
    phone: "9977885522",
    dateOfBirth: "2007-11-02",
    gender: "Female",
    stream: "Arts",
    percentage12th: 68.2,
    category: "SC",
    status: "Pending",
    appliedDate: "15/07/2026",
    address: "Islampur, Tal: Walwa, Sangli 415409"
  }
];

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [applications, setApplications] = useState<AdmissionApplication[]>([]);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: ''
  });

  // Safe client-side loading of applications
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('sk_nursing_applications');
      if (stored) {
        try {
          setApplications(JSON.parse(stored));
        } catch (e) {
          setApplications(DEFAULT_APPLICATIONS);
        }
      } else {
        setApplications(DEFAULT_APPLICATIONS);
        localStorage.setItem('sk_nursing_applications', JSON.stringify(DEFAULT_APPLICATIONS));
      }
    }
  }, []);

  const saveApplications = (newApps: AdmissionApplication[]) => {
    setApplications(newApps);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sk_nursing_applications', JSON.stringify(newApps));
    }
  };

  const handleAddApplication = (newApp: AdmissionApplication) => {
    const updated = [newApp, ...applications];
    saveApplications(updated);
  };

  const handleUpdateAppStatus = (id: string, status: 'Approved' | 'Rejected') => {
    const updated = applications.map(app => 
      app.id === id ? { ...app, status } : app
    );
    saveApplications(updated);
  };

  const handleDeleteApplication = (id: string) => {
    const updated = applications.filter(app => app.id !== id);
    saveApplications(updated);
  };

  const showSuccessToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  return (
    <AppContext.Provider value={{
      applications,
      isApplyModalOpen,
      setIsApplyModalOpen,
      handleAddApplication,
      handleUpdateAppStatus,
      handleDeleteApplication,
      toast,
      showSuccessToast
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
