import React from 'react';
import StudentSection from '../../components/StudentSection';

export default function StudentPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="sr-only">Student Life & Milestones</h1>
        <StudentSection />
      </div>
    </div>
  );
}
