import React from 'react';
import AdmissionSection from '../../components/AdmissionSection';

export default function AdmissionsPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="sr-only">Admissions Criteria & Forms</h1>
        <AdmissionSection />
      </div>
    </div>
  );
}
