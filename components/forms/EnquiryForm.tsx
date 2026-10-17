'use client';

import { useState } from 'react';
import styles from './EnquiryForm.module.css';

interface EnquiryFormProps {
  defaultService?: string;
  defaultType?: string;
  title?: string;
}

export default function EnquiryForm({
  defaultService = 'Architectural Design',
  defaultType = 'Residential Villa',
  title = 'Project Details',
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: defaultType,
    serviceNeeded: defaultService,
    location: '',
    approxArea: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save to localStorage for Admin Leads Inbox (Phase 6)
    try {
      const existing = JSON.parse(localStorage.getItem('studio_leads') || '[]');
      const newLead = {
        id: `lead_${Date.now()}`,
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'new',
      };
      localStorage.setItem('studio_leads', JSON.stringify([newLead, ...existing]));
    } catch {
      // LocalStorage fallback
    }

    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Enquiry Received</h3>
        <p className={styles.successMessage}>
          Thank you, <strong>{formData.name}</strong>. Our architectural leadership will review your
          project requirements and connect with you within 24 business hours.
        </p>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              projectType: defaultType,
              serviceNeeded: defaultService,
              location: '',
              approxArea: '',
              message: '',
            });
          }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit} aria-label={title}>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="client-name">
            Full Name <span className={styles.required}>*</span>
          </label>
          <input
            id="client-name"
            type="text"
            required
            className={styles.input}
            placeholder="e.g. Rajesh Varma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="client-phone">
            Phone Number <span className={styles.required}>*</span>
          </label>
          <input
            id="client-phone"
            type="tel"
            required
            className={styles.input}
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="client-email">
            Email Address
          </label>
          <input
            id="client-email"
            type="email"
            className={styles.input}
            placeholder="rajesh@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="client-location">
            Project City / Location <span className={styles.required}>*</span>
          </label>
          <input
            id="client-location"
            type="text"
            required
            className={styles.input}
            placeholder="e.g. Jubilee Hills, Hyderabad"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="project-type">
            Project Typology
          </label>
          <select
            id="project-type"
            className={styles.select}
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          >
            <option value="Residential Villa">Residential Villa / Independent House</option>
            <option value="Luxury Apartment">Luxury Apartment / Penthouse</option>
            <option value="Commercial Office">Commercial Corporate Office</option>
            <option value="Hospitality Resort">Hospitality Resort / Hotel</option>
            <option value="Retail Showroom">Retail Showroom / Cafe</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="service-needed">
            Service Required
          </label>
          <select
            id="service-needed"
            className={styles.select}
            value={formData.serviceNeeded}
            onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
          >
            <option value="Architectural Design">Architectural Design & Planning</option>
            <option value="Interior Design">Interior Architecture & Joinery</option>
            <option value="Full Turnkey Build">End-to-End Turnkey Design & Build</option>
            <option value="3D Visualization">3D Visualization & Walkthroughs</option>
            <option value="Renovation">Renovation & Remodeling</option>
          </select>
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label className={styles.label} htmlFor="approx-area">
            Approximate Built-Up Area (sq.ft)
          </label>
          <input
            id="approx-area"
            type="text"
            className={styles.input}
            placeholder="e.g. 5,500 sq.ft"
            value={formData.approxArea}
            onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
          />
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label className={styles.label} htmlFor="client-message">
            Project Description & Requirements
          </label>
          <textarea
            id="client-message"
            className={styles.textarea}
            placeholder="Tell us about your plot orientation, timeline expectations, or specific design desires..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
        {isSubmitting ? 'Submitting Details...' : 'Submit Consultation Request →'}
      </button>
    </form>
  );
}
