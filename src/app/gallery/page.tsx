import React from 'react';
import GallerySection from '../../components/GallerySection';

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="sr-only">Interactive Events Gallery</h1>
        <GallerySection />
      </div>
    </div>
  );
}
