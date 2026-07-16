'use client';

import React, { useEffect } from 'react';
import { COLLEGE_INFO } from '../data/collegeData';

export default function SEOMetadata() {
  useEffect(() => {
    // 1. Dynamic Meta Title and Description update
    document.title = `${COLLEGE_INFO.name} | GNM Nursing College in Sangli, Maharashtra`;
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', `${COLLEGE_INFO.name} is a premier INC-approved institute offering high-quality General Nursing & Midwifery (GNM) programs in Sangli, Maharashtra. Built on clinical precision.`);

    // 2. OpenGraph Tags injection
    const ogTags = {
      'og:title': `${COLLEGE_INFO.name} | Building Compassionate Healthcare Professionals`,
      'og:description': 'Premier GNM college in Sangli offering comprehensive 3-year clinical courses with major hospital partnerships.',
      'og:type': 'website',
      'og:url': window.location.href,
      'og:image': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
      'twitter:card': 'summary_large_image',
      'twitter:title': `${COLLEGE_INFO.name} | GNM College`,
      'twitter:description': 'Premier GNM nursing program recognized by Indian Nursing Council.',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let element = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(property.startsWith('og:') ? 'property' : 'name', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    });

    // 3. Structured Data (JSON-LD Schemas) Injection
    // Organization Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": COLLEGE_INFO.name,
      "url": window.location.origin,
      "logo": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80",
      "sameAs": [
        "https://www.facebook.com/sknursingcollege",
        "https://www.linkedin.com/company/sknursingcollege",
        "https://www.instagram.com/sknursingcollege"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Peth Shirala Road, Tal: Walwa, Dist: Sangli, Rethre dharan",
        "addressLocality": "Sangli",
        "addressRegion": "Maharashtra",
        "postalCode": "415407",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": COLLEGE_INFO.mobile,
        "contactType": "admissions",
        "email": COLLEGE_INFO.email,
        "areaServed": "IN",
        "availableLanguage": ["English", "Marathi", "Hindi"]
      }
    };

    // Educational Organization Schema
    const eduSchema = {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": COLLEGE_INFO.name,
      "description": COLLEGE_INFO.tagline,
      "hasCredential": "General Nursing & Midwifery (GNM) Diploma",
      "offersCourse": {
        "@type": "Course",
        "name": "General Nursing & Midwifery (GNM)",
        "courseCode": "GNM",
        "description": "3-Year diploma course focusing on general bedside nursing, critical care, midwifery, and community clinical health systems.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": COLLEGE_INFO.name
        }
      }
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the duration of the GNM program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The GNM program duration is 3 Years including a compulsory 6-month clinical rotation."
          }
        },
        {
          "@type": "Question",
          "name": "Is the GNM program recognized by the government?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, S K Nursing College GNM program is fully recognized by the Indian Nursing Council (INC), New Delhi, and Maharashtra Nursing Council (MNC), Mumbai."
          }
        }
      ]
    };

    // Inject JSON-LD
    const injectJsonLd = (id: string, schemaObj: object) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('id', id);
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaObj, null, 2);
    };

    injectJsonLd('org-schema', orgSchema);
    injectJsonLd('edu-schema', eduSchema);
    injectJsonLd('faq-schema', faqSchema);

    // Clean up on unmount
    return () => {
      document.getElementById('org-schema')?.remove();
      document.getElementById('edu-schema')?.remove();
      document.getElementById('faq-schema')?.remove();
    };
  }, []);

  return null; // This component has no visual footprint, it operates purely inside the <head>
}
