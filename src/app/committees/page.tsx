import React from 'react';
import CommitteesSection from '../../components/CommitteesSection';

export default function CommitteesPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="sr-only">Statutory Committees</h1>
        <CommitteesSection />
      </div>
    </div>
  );
}
