import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-3xl font-display font-bold text-brand-blue mb-2">404 - Page Not Found</h2>
      <p className="text-gray-500 max-w-md mb-6 text-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
