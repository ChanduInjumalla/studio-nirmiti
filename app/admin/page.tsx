'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Layout,
  Users,
  Eye,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  Edit3,
  Sliders,
  Shield,
  Smartphone,
  Tablet,
  Monitor,
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { servicesData } from '@/data/services';
import VisualInlineEditor from '@/components/admin/VisualInlineEditor';
import styles from './admin.module.css';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  location: string;
  projectType: string;
  serviceNeeded: string;
  approxArea?: string;
  message?: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'consulted';
}

interface EditableSection {
  id: string;
  name: string;
  heading: string;
  eyebrow: string;
  body: string;
  enabled: boolean;
}

const defaultSections: EditableSection[] = [
  {
    id: 'hero',
    name: 'Hero Section (Home Only)',
    heading: 'Designing spaces with clarity, purpose and detail.',
    eyebrow: 'Architecture · Interiors · Turnkey Execution',
    body: 'Studio Nirmiti translates discerning visions into enduring built environments. From architectural concept and photorealistic 3D visualization through interior craft to meticulous turnkey handover.',
    enabled: true,
  },
  {
    id: 'capabilities',
    name: 'Capabilities Matrix',
    heading: 'End-to-end design & build capabilities.',
    eyebrow: 'Capabilities Matrix',
    body: 'From raw topography and architectural structural blueprints through interior artisan millwork to final turnkey handover.',
    enabled: true,
  },
  {
    id: 'typologies',
    name: 'Portfolio Typologies',
    heading: 'Tailored solutions across distinct sectors.',
    eyebrow: 'Portfolio Typologies',
    body: 'Residential, Commercial, and Hospitality spaces crafted with architectural fidelity.',
    enabled: true,
  },
  {
    id: 'before-after',
    name: 'Before / After 3D Verification',
    heading: 'From 3D digital model to completed reality.',
    eyebrow: 'Precision Verification',
    body: 'Drag the divider to compare our pre-construction 3D architectural simulation against the finalized turnkey handover.',
    enabled: true,
  },
  {
    id: 'process',
    name: 'Seven-Stage Process',
    heading: 'A rigorous seven-stage delivery process.',
    eyebrow: 'The Workflow',
    body: 'From the initial conversation to turnkey handover, every detail follows a transparent sequence.',
    enabled: true,
  },
  {
    id: 'trust',
    name: 'Why Studio Nirmiti (Trust Pillars)',
    heading: 'Why choose Studio Nirmiti.',
    eyebrow: 'The Studio Standard',
    body: 'An integrated practice where architectural rigour, interior finesse, and reliable execution operate as one.',
    enabled: true,
  },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'editor' | 'leads'>('dashboard');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [sections, setSections] = useState<EditableSection[]>(defaultSections);
  const [selectedSectionId, setSelectedSectionId] = useState<string>('hero');
  const [viewportWidth, setViewportWidth] = useState<'100%' | '768px' | '390px'>('100%');
  const [lastPublished, setLastPublished] = useState<string>('2026-10-12 20:30 IST');
  const [saveNotice, setSaveNotice] = useState<string>('');

  useEffect(() => {
    // Load leads from localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('studio_leads') || '[]');
      if (stored.length === 0) {
        // Sample seed lead for initial inspection
        const sample: Lead[] = [
          {
            id: 'lead_sample_1',
            name: 'Dr. Srinivas Rao',
            phone: '+91 98490 12345',
            email: 'srinivas.rao@gmail.com',
            location: 'Jubilee Hills, Hyderabad',
            projectType: 'Residential Villa',
            serviceNeeded: 'Full Turnkey Build',
            approxArea: '8,200 sq.ft',
            message: 'Looking for complete architectural design and turnkey execution for a west-facing plot.',
            submittedAt: '2026-10-12T18:15:00.000Z',
            status: 'new',
          },
        ];
        setLeads(sample);
      } else {
        setLeads(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  const handlePublish = () => {
    setLastPublished(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' IST');
    setSaveNotice('Published revision successfully!');
    setTimeout(() => setSaveNotice(''), 3000);
  };

  const handleStatusChange = (id: string, status: Lead['status']) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    setLeads(updated);
    try {
      localStorage.setItem('studio_leads', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const selectedSection = sections.find((s) => s.id === selectedSectionId) || sections[0];

  return (
    <div className={styles.adminWrapper}>
      <div className={`${styles.adminContainer} ${activeTab === 'editor' ? styles.adminContainerFull : ''}`}>
        {/* Header Bar */}
        <header className={styles.adminHeader}>
          <div className={styles.adminBrand}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '4px',
                background: 'var(--color-accent)',
                color: '#141716',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-cinzel), serif',
                fontWeight: 700,
              }}
            >
              N
            </div>
            <div>
              <h1 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '1.25rem', margin: 0 }}>
                Studio Nirmiti Admin
              </h1>
              <span className={styles.adminBadge}>Owner: Kushal Kumar Pendekatla</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
            <nav className={styles.navTabs} aria-label="Admin Navigation">
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === 'dashboard' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                Dashboard
              </button>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === 'editor' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('editor')}
              >
                Visual Page Editor
              </button>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === 'leads' ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab('leads')}
              >
                Leads Inbox ({leads.filter((l) => l.status === 'new').length})
              </button>
            </nav>

            <Link
              href="/"
              target="_blank"
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-syne), sans-serif',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              Live Site ↗
            </Link>
          </div>
        </header>

        {/* TAB 1: DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <div>
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <p className={styles.metricValue}>46</p>
                <p className={styles.metricLabel}>Public Blueprint Routes</p>
              </div>
              <div className={styles.metricCard}>
                <p className={styles.metricValue}>{projectsData.length}</p>
                <p className={styles.metricLabel}>Curated Case Studies</p>
              </div>
              <div className={styles.metricCard}>
                <p className={styles.metricValue}>{servicesData.length}</p>
                <p className={styles.metricLabel}>Architecture & Interior Services</p>
              </div>
              <div className={styles.metricCard}>
                <p className={styles.metricValue}>{leads.length}</p>
                <p className={styles.metricLabel}>Client Inquiries Received</p>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: 'var(--space-8)',
              }}
            >
              {/* Recent Leads Preview */}
              <div style={{ background: '#1c201e', padding: 'var(--space-6)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                  <h2 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '1.1rem' }}>
                    Recent Consultation Requests
                  </h2>
                  <button
                    type="button"
                    style={{ background: 'none', border: 'none', color: 'var(--color-accent)', fontSize: '11px', cursor: 'pointer' }}
                    onClick={() => setActiveTab('leads')}
                  >
                    View All →
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {leads.slice(0, 3).map((lead) => (
                    <div
                      key={lead.id}
                      style={{
                        padding: '10px 14px',
                        background: '#232826',
                        borderRadius: 'var(--radius-xs)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <p style={{ fontWeight: 600, fontSize: '13px', margin: 0 }}>{lead.name}</p>
                        <p style={{ fontSize: '11px', color: '#a09d95', margin: 0 }}>
                          {lead.projectType} · {lead.location}
                        </p>
                      </div>
                      <span className={`${styles.statusBadge} ${lead.status === 'new' ? styles.statusNew : styles.statusContacted}`}>
                        {lead.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System & Publish Status */}
              <div style={{ background: '#1c201e', padding: 'var(--space-6)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '1.1rem', marginBottom: 'var(--space-4)' }}>
                  Publishing & System Status
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#a09d95' }}>Last Published:</span>
                    <span style={{ color: 'var(--color-accent)' }}>{lastPublished}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#a09d95' }}>3D WebGL Engine:</span>
                    <span style={{ color: '#81c784' }}>Active (Three.js + R3F)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#a09d95' }}>Motion Utilities:</span>
                    <span style={{ color: '#81c784' }}>Anime.js v4</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#a09d95' }}>SEO Sitemaps & Robots:</span>
                    <span style={{ color: '#81c784' }}>Valid & Indexed</span>
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.loginBtn}
                  style={{ marginTop: 'var(--space-6)', padding: '10px' }}
                  onClick={handlePublish}
                >
                  Publish Production Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VISUAL PAGE EDITOR (Interactive Website Clone) */}
        {activeTab === 'editor' && (
          <VisualInlineEditor embedded={true} initialRoute="/" />
        )}

        {/* TAB 3: LEADS INBOX */}
        {activeTab === 'leads' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
              <h2 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '1.4rem' }}>
                Consultation Enquiries Inbox
              </h2>
              <span style={{ fontSize: '12px', color: '#a09d95' }}>
                Total Submissions: {leads.length}
              </span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className={styles.leadsTable}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Client Name</th>
                    <th>Phone / Email</th>
                    <th>Location</th>
                    <th>Typology & Service</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id}>
                      <td style={{ fontSize: '12px', color: '#a09d95' }}>
                        {new Date(lead.submittedAt).toLocaleDateString()}
                      </td>
                      <td style={{ fontWeight: 600 }}>{lead.name}</td>
                      <td>
                        <div>
                          <a href={`tel:${lead.phone}`} style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
                            {lead.phone}
                          </a>
                        </div>
                        {lead.email && <div style={{ fontSize: '11px', color: '#a09d95' }}>{lead.email}</div>}
                      </td>
                      <td>{lead.location}</td>
                      <td>
                        <span style={{ color: '#e5e2db' }}>{lead.projectType}</span>
                        <div style={{ fontSize: '11px', color: '#a09d95' }}>{lead.serviceNeeded}</div>
                      </td>
                      <td>
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                          style={{
                            background: '#141716',
                            color: lead.status === 'new' ? '#81c784' : 'var(--color-accent)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            fontSize: '11px',
                          }}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="consulted">Consulted</option>
                        </select>
                      </td>
                      <td>
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)}%2C%20thank%20you%20for%20contacting%20Studio%20Nirmiti.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.actionBtn}
                          style={{ textDecoration: 'none', display: 'inline-block' }}
                        >
                          WhatsApp
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
