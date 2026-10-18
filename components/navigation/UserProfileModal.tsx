'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, X, Check, Lock, ArrowRight } from 'lucide-react';
import styles from './UserProfileModal.module.css';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ClientProfileData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
}

export default function UserProfileModal({ isOpen, onClose }: UserProfileModalProps) {
  const router = useRouter();
  const [profile, setProfile] = useState<ClientProfileData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    projectType: 'Residential Villa',
  });
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('studio_client_profile');
      if (saved) {
        setProfile(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem('studio_client_profile', JSON.stringify(profile));
      setSavedNotice(true);
      setTimeout(() => setSavedNotice(false), 2500);
    } catch {
      // ignore
    }
  };

  const handleAdminAccess = () => {
    onClose();
    router.push('/admin');
  };

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.avatarCircle}>
              <User size={20} />
            </div>
            <div>
              <h3 className={styles.modalTitle}>Client Profile</h3>
              <p className={styles.modalSubtitle}>
                Save your contact details & preferences for consultations
              </p>
            </div>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close Profile"
          >
            <X size={16} />
          </button>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSave} className={styles.formGrid}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>Full Name</label>
            <input
              type="text"
              className={styles.textInput}
              value={profile.fullName}
              onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
              placeholder="e.g. Kushal Kumar"
            />
          </div>

          <div className={styles.twoCols}>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Phone Number</label>
              <input
                type="tel"
                className={styles.textInput}
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                placeholder="+91 95730 23509"
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>City / Location</label>
              <input
                type="text"
                className={styles.textInput}
                value={profile.city}
                onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                placeholder="e.g. Hyderabad"
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>Email Address</label>
            <input
              type="email"
              className={styles.textInput}
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              placeholder="e.g. name@domain.com"
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>Project of Interest</label>
            <select
              className={styles.selectInput}
              value={profile.projectType}
              onChange={(e) => setProfile({ ...profile, projectType: e.target.value })}
            >
              <option value="Residential Villa">Luxury Residential Villa</option>
              <option value="Apartment Interior">Premium Apartment Interior</option>
              <option value="Turnkey Architecture">Turnkey Architectural Build</option>
              <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
              <option value="Commercial Office">Commercial / Office Interior</option>
              <option value="Hospitality Resort">Hospitality / Resort Design</option>
            </select>
          </div>

          <button type="submit" className={styles.saveProfileBtn}>
            <Check size={14} />
            <span>Save Preferences</span>
          </button>

          {savedNotice && (
            <div className={styles.saveNotice}>
              ✓ Your details have been saved for quick consultations
            </div>
          )}
        </form>

        {/* Staff & Admin Portal Section */}
        <div className={styles.adminAccessSection}>
          <div className={styles.adminHeader}>
            <span className={styles.adminTag}>Studio Management</span>
          </div>
          <p className={styles.adminPrompt}>
            Are you a Studio Nirmiti architect or staff member? Access the administrative dashboard and live website clone editor.
          </p>
          <button
            type="button"
            className={styles.adminPortalBtn}
            onClick={handleAdminAccess}
          >
            <Lock size={14} />
            <span>Access Staff & Admin Portal</span>
            <ArrowRight size={14} />
          </button>
          <p className={styles.adminLockHint}>
            Protected access · Authorized credentials required
          </p>
        </div>
      </div>
    </div>
  );
}
