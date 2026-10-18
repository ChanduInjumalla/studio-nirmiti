'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  User,
  Shield,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Lock,
} from 'lucide-react';
import styles from './profile.module.css';

interface ClientProfile {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  customCity?: string;
  projectCategory: string;
  customCategory?: string;
  aestheticStyle: string;
  approxArea: string;
  timeline: string;
}

interface StoredLead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  location?: string;
  projectType?: string;
  serviceNeeded?: string;
  submittedAt: string;
  status: string;
}

export default function ClientProfilePage() {
  const [profile, setProfile] = useState<ClientProfile>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Hyderabad',
    customCity: '',
    projectCategory: 'Interior Design & Architecture',
    customCategory: '',
    aestheticStyle: 'Warm Minimalist',
    approxArea: '3,500 sq.ft',
    timeline: '1-3 Months',
  });

  const [recentLeads, setRecentLeads] = useState<StoredLead[]>([]);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    try {
      // 1. Load Profile
      const storedProfile = localStorage.getItem('studio_client_profile');
      if (storedProfile) {
        setProfile((prev) => ({ ...prev, ...JSON.parse(storedProfile) }));
      }

      // 2. Load Submitted Leads
      const storedLeads = localStorage.getItem('studio_leads');
      if (storedLeads) {
        const parsed = JSON.parse(storedLeads);
        if (Array.isArray(parsed)) {
          setRecentLeads(parsed.slice(0, 5));
          if (!storedProfile && parsed.length > 0) {
            const first = parsed[0];
            setProfile((prev) => ({
              ...prev,
              fullName: first.name || prev.fullName,
              phone: first.phone || prev.phone,
              email: first.email || prev.email,
              city: first.location || prev.city,
              projectCategory: first.projectType || prev.projectCategory,
            }));
          }
        }
      }
    } catch {
      // Ignore JSON parse errors
    }
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem('studio_client_profile', JSON.stringify(profile));
      setSavedNotice(true);
      setTimeout(() => setSavedNotice(false), 4000);
    } catch {
      // Ignore storage errors
    }
  };

  const getInitials = (name: string) => {
    if (!name.trim()) return 'SN';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span>Client Profile & Portal</span>
        </nav>

        {/* Page Header */}
        <header className={styles.pageHeader}>
          <span className={styles.eyebrow}>Client Hub & Studio Access</span>
          <h1 className={styles.title}>Client Profile & Project Specifications</h1>
          <p className={styles.subtitle}>
            Manage your personal consultation profile, architectural preferences, and review
            recent project inquiries submitted to the Studio Nirmiti principal team.
          </p>
        </header>

        {/* Main 2-Column Layout */}
        <div className={styles.layoutGrid}>
          {/* Main Column */}
          <div className={styles.mainCol}>
            {/* Client Identity Header Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>
                  <User size={18} color="var(--color-accent, #b08d57)" />
                  Client Account Information
                </h2>
                <span className={styles.cardBadge}>Active Client Portal</span>
              </div>

              <div className={styles.identityBanner}>
                <div className={styles.avatarMonogram}>
                  {getInitials(profile.fullName)}
                </div>
                <div className={styles.identityInfo}>
                  <h3>{profile.fullName || 'Studio Nirmiti Guest'}</h3>
                  <p>
                    {profile.email || 'No email registered'} • {profile.phone || '+91 Contact Pending'}
                  </p>
                </div>
              </div>

              {/* Edit Profile Form */}
              <form onSubmit={handleSaveProfile}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="prof-name">Full Name *</label>
                    <input
                      id="prof-name"
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      className={styles.input}
                      value={profile.fullName}
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="prof-phone">Phone Number *</label>
                    <input
                      id="prof-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.input}
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="prof-email">Email Address</label>
                    <input
                      id="prof-email"
                      type="email"
                      placeholder="vikram@example.com"
                      className={styles.input}
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="prof-city">Project Location / City *</label>
                    <select
                      id="prof-city"
                      className={styles.select}
                      value={profile.city}
                      onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                    >
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Pune">Pune</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Surat">Surat</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Kochi / Kerala">Kochi / Kerala</option>
                      <option value="Goa">Goa</option>
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Vijayawada">Vijayawada</option>
                      <option value="Other City">Other City (Specify below)</option>
                    </select>
                  </div>

                  {profile.city === 'Other City' && (
                    <div className={styles.formGroupFull}>
                      <label className={styles.label} htmlFor="prof-custom-city">Specify City Name</label>
                      <input
                        id="prof-custom-city"
                        type="text"
                        placeholder="Enter your city name"
                        className={styles.input}
                        value={profile.customCity || ''}
                        onChange={(e) => setProfile({ ...profile, customCity: e.target.value })}
                      />
                    </div>
                  )}

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="prof-category">Primary Requirement Category</label>
                    <select
                      id="prof-category"
                      className={styles.select}
                      value={profile.projectCategory}
                      onChange={(e) => setProfile({ ...profile, projectCategory: e.target.value })}
                    >
                      <option value="Interior Design & Architecture">Interior Design & Architecture</option>
                      <option value="Modular Kitchens & Dining">Modular Kitchens & Dining</option>
                      <option value="Complete Turnkey Civil & Site Execution">Complete Turnkey Civil & Site Execution</option>
                      <option value="Architectural Planning & Blueprints">Architectural Planning & Blueprints</option>
                      <option value="Full Home Renovation & Remodeling">Full Home Renovation & Remodeling</option>
                      <option value="Commercial & Office Spaces">Commercial & Office Spaces</option>
                      <option value="3D Elevation & CGI Walkthroughs">3D Elevation & CGI Walkthroughs</option>
                      <option value="Bespoke Custom Furniture">Bespoke Custom Furniture</option>
                      <option value="Wardrobes & Storage Systems">Wardrobes & Storage Systems</option>
                      <option value="Other Requirement">Other Requirement (Specify below)</option>
                    </select>
                  </div>

                  {profile.projectCategory === 'Other Requirement' && (
                    <div className={styles.formGroupFull}>
                      <label className={styles.label} htmlFor="prof-custom-cat">Specify Custom Requirement</label>
                      <input
                        id="prof-custom-cat"
                        type="text"
                        placeholder="Describe your project requirement"
                        className={styles.input}
                        value={profile.customCategory || ''}
                        onChange={(e) => setProfile({ ...profile, customCategory: e.target.value })}
                      />
                    </div>
                  )}

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="prof-aesthetic">Preferred Architectural Aesthetic</label>
                    <select
                      id="prof-aesthetic"
                      className={styles.select}
                      value={profile.aestheticStyle}
                      onChange={(e) => setProfile({ ...profile, aestheticStyle: e.target.value })}
                    >
                      <option value="Warm Minimalist">Warm Minimalist (Travertine, Oak, Limewash)</option>
                      <option value="Italian Contemporary">Italian Contemporary (Statuario, Brass, Fluted Paneling)</option>
                      <option value="Modern Classical">Modern Classical (Cornices, Moldings, Velvet)</option>
                      <option value="Japandi Sanctuary">Japandi (Natural Timber, Shoji Screens, Wabi-Sabi)</option>
                      <option value="Industrial Architectural">Industrial Architectural (Exposed Concrete, Steel, Glass)</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="prof-area">Approx. Carpet Area</label>
                    <select
                      id="prof-area"
                      className={styles.select}
                      value={profile.approxArea}
                      onChange={(e) => setProfile({ ...profile, approxArea: e.target.value })}
                    >
                      <option value="1,500 - 2,500 sq.ft">1,500 - 2,500 sq.ft (3 BHK Apartment)</option>
                      <option value="2,500 - 4,000 sq.ft">2,500 - 4,000 sq.ft (4 BHK / Sky Villa)</option>
                      <option value="4,000 - 7,000 sq.ft">4,000 - 7,000 sq.ft (Luxury Duplex / Penthouse)</option>
                      <option value="7,000 - 15,000 sq.ft">7,000 - 15,000 sq.ft (Independent Villa Estate)</option>
                      <option value="Commercial 5,000+ sq.ft">Commercial / Office 5,000+ sq.ft</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="prof-timeline">Project Timeline</label>
                    <select
                      id="prof-timeline"
                      className={styles.select}
                      value={profile.timeline}
                      onChange={(e) => setProfile({ ...profile, timeline: e.target.value })}
                    >
                      <option value="Immediate">Immediate Start (Ready for Site Work)</option>
                      <option value="1-3 Months">1 to 3 Months (Planning & Approvals)</option>
                      <option value="3-6 Months">3 to 6 Months (Handover in Future)</option>
                      <option value="Exploratory">Exploratory / Initial Cost Estimation</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className={styles.saveBtn}>
                  Save Client Profile
                </button>

                {savedNotice && (
                  <div className={styles.successNotice}>
                    <CheckCircle2 size={16} />
                    <span>Your client profile & design preferences have been updated successfully.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Recent Consultation Inquiries */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>
                  <Calendar size={18} color="var(--color-accent, #b08d57)" />
                  Recent Consultation Inquiries
                </h2>
                <span className={styles.cardBadge}>
                  {recentLeads.length} {recentLeads.length === 1 ? 'Inquiry' : 'Inquiries'}
                </span>
              </div>

              {recentLeads.length > 0 ? (
                <div className={styles.inquiryList}>
                  {recentLeads.map((item) => (
                    <div key={item.id} className={styles.inquiryItem}>
                      <div className={styles.inquiryDetails}>
                        <h4>{item.serviceNeeded || item.projectType || 'Consultation Request'}</h4>
                        <div className={styles.inquiryMeta}>
                          <span>
                            <MapPin size={12} style={{ display: 'inline', marginRight: '3px' }} />
                            {item.location || 'India'}
                          </span>
                          <span>•</span>
                          <span>
                            {new Date(item.submittedAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>
                      <span className={styles.inquiryStatus}>
                        {item.status === 'contacted' ? 'Architect Assigned' : 'Under Studio Review'}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <p>No recent consultation requests submitted from this browser yet.</p>
                  <Link href="/book-consultation" className="btn btn-primary" style={{ display: 'inline-flex', gap: '6px' }}>
                    Book Architectural Consultation
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Column: Studio Management & Staff Portal */}
          <aside className={styles.sidebarCol}>
            {/* Corporate MNC Admin Access */}
            <div className={styles.adminCard}>
              <div className={styles.adminCardHeader}>
                <div className={styles.adminIcon}>
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className={styles.adminTitle}>Studio Staff Portal</h3>
                  <span style={{ fontSize: '11px', color: '#a09d95' }}>Administration & CMS</span>
                </div>
              </div>

              <p className={styles.adminText}>
                Authorized access for Studio Nirmiti architects, site engineers, and executive
                staff to review client inquiries, oversee site milestones, and edit web content.
              </p>

              <Link href="/admin" className={styles.adminActionBtn}>
                <Lock size={14} />
                Access Admin Portal
              </Link>

              <Link href="/admin/editor" className={styles.adminSubLink}>
                Launch Visual Page Clone Editor ↗
              </Link>
            </div>

            {/* Direct Studio Contact Card */}
            <div className={styles.supportCard}>
              <h4>Direct Architectural Desk</h4>
              <p>
                Have immediate blueprints or urgent site questions? Reach our senior design desk directly.
              </p>

              <a href="tel:+919573023509" className={styles.contactLine}>
                <Phone size={14} color="var(--color-accent, #b08d57)" />
                <span>+91 95730 23509</span>
              </a>

              <a href="mailto:contact@studionirmiti.in" className={styles.contactLine}>
                <Mail size={14} color="var(--color-accent, #b08d57)" />
                <span>contact@studionirmiti.in</span>
              </a>

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '11px', color: '#a09d95', display: 'block', marginBottom: '8px' }}>
                  Studio Principal:
                </span>
                <strong style={{ fontSize: '12px', color: '#ffffff', display: 'block' }}>
                  Kushal Kumar Pendekatla
                </strong>
                <span style={{ fontSize: '11px', color: 'var(--color-accent, #b08d57)' }}>
                  Principal Architect, Studio Nirmiti
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
