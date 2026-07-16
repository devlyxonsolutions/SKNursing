import React from 'react';
import { AppProvider } from '../context/AppContext';
import ClientLayout from '../components/ClientLayout';
import '../index.css';

export const metadata = {
  title: 'S K Nursing College | GNM Course in Sangli, Maharashtra',
  description: 'INC Approved premier General Nursing & Midwifery diploma institution built on clinical precision and compassionate medical practice.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light-gray text-dark-navy antialiased">
        <AppProvider>
          <ClientLayout>{children}</ClientLayout>
        </AppProvider>
      </body>
    </html>
  );
}
