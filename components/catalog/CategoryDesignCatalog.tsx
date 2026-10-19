'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Heart,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Camera,
  CheckCircle2,
  X,
  Phone,
  Sliders,
} from 'lucide-react';
import Breadcrumb from '@/components/seo/Breadcrumb';
import type { BreadcrumbItem } from '@/components/seo/Breadcrumb';
import {
  categoryCatalogs,
  getCatalogData,
  CategoryCatalogData,
  CatalogDesignItem,
} from '@/data/catalogDesigns';
import styles from './CategoryDesignCatalog.module.css';

interface CategoryDesignCatalogProps {
  categorySlug?: string;
  pageTitle?: string;
  pageEyebrow?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function CategoryDesignCatalog({
  categorySlug,
  pageTitle,
  pageEyebrow,
  breadcrumbs,
}: CategoryDesignCatalogProps) {
  const catalogData: CategoryCatalogData = getCatalogData(categorySlug, pageTitle, pageEyebrow);

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedDesignForQuote, setSelectedDesignForQuote] =
    useState<CatalogDesignItem | null>(null);

  // Form states
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadCategory, setLeadCategory] = useState(catalogData.title || 'Interior Design & Architecture');
  const [leadCustomCategory, setLeadCustomCategory] = useState('');
  const [leadCity, setLeadCity] = useState('Hyderabad');
  const [leadCustomCity, setLeadCustomCity] = useState('');
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);
  const [submittedNotice, setSubmittedNotice] = useState('');

  // Trending carousel ref
  const trendingTrackRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when quote modal is open and support ESC close
  useEffect(() => {
    if (selectedDesignForQuote) {
      document.body.classList.add('menu-locked');
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedDesignForQuote(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.classList.remove('menu-locked');
      };
    } else {
      document.body.classList.remove('menu-locked');
    }
  }, [selectedDesignForQuote]);

  const scrollTrending = (direction: 'left' | 'right') => {
    if (!trendingTrackRef.current) return;
    const scrollAmount = 330;
    trendingTrackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter items
  const filteredDesigns = catalogData.designs.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.tag.toLowerCase().includes(activeFilter.toLowerCase());
  });

  const handleFormSubmit = (e: React.FormEvent, source: string) => {
    e.preventDefault();
    if (!leadName || !leadPhone) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    const resolvedCity = leadCity === 'Other City' ? (leadCustomCity.trim() || 'Other City') : leadCity;
    const resolvedCategory = leadCategory === 'Other Requirement' ? (leadCustomCategory.trim() || 'Custom Requirement') : leadCategory;

    const newLead = {
      id: `lead_${Date.now()}`,
      name: leadName,
      phone: leadPhone,
      email: leadEmail,
      location: resolvedCity,
      projectType: resolvedCategory,
      serviceNeeded: selectedDesignForQuote
        ? `Inquiry for ${selectedDesignForQuote.title} (${resolvedCategory})`
        : `${resolvedCategory} Consultation`,
      submittedAt: new Date().toISOString(),
      status: 'new',
      whatsappOptIn,
      source,
    };

    try {
      const existing = JSON.parse(localStorage.getItem('studio_leads') || '[]');
      localStorage.setItem('studio_leads', JSON.stringify([newLead, ...existing]));
    } catch {
      // ignore
    }

    setSubmittedNotice('Thank you! Our senior architectural designer will contact you within 2 business hours.');
    setSelectedDesignForQuote(null);
    setLeadName('');
    setLeadEmail('');
    setLeadPhone('');
    setLeadCustomCategory('');
    setLeadCustomCity('');
    setTimeout(() => setSubmittedNotice(''), 5000);
  };

  return (
    <div className={styles.catalogWrapper}>
      <div className={styles.container}>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumbBar}>
          <Breadcrumb items={breadcrumbs} />
        </div>

        {/* ── Category Header with Read More / Read Less (Livspace Reference 1) ── */}
        <header className={styles.categoryHeader}>
          <span className={styles.resultsCount}>{catalogData.resultsCount}</span>
          <div className={styles.titleRow}>
            <div className={styles.titlePill} />
            <h1 className={styles.mainTitle}>{catalogData.title}</h1>
          </div>

          <div className={styles.descWrap}>
            <p className={styles.shortDesc}>{catalogData.shortDesc}</p>

            {isExpanded && (
              <div className={styles.expandedText}>
                {catalogData.readMoreText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}

            <button
              type="button"
              className={styles.readMoreBtn}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  Read Less <ChevronUp size={14} />
                </>
              ) : (
                <>
                  Read More <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        </header>

        {/* ── Top Trending Carousel (Livspace Reference 1) ── */}
        {catalogData.trendingItems?.length > 0 && (
          <section className={styles.trendingSection}>
            <div className={styles.trendingHeader}>
              <div className={styles.trendingBadgeWrap}>
                <div className={styles.trendingIcon}>🔥</div>
                <div>
                  <h2 className={styles.trendingHeading}>
                    {catalogData.trendingHeading}
                  </h2>
                  <p className={styles.trendingSubheading}>
                    {catalogData.trendingSubheading}
                  </p>
                </div>
              </div>

              <div className={styles.carouselNavBtns}>
                <button
                  type="button"
                  className={styles.carouselArrowBtn}
                  onClick={() => scrollTrending('left')}
                  title="Scroll left"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className={styles.carouselArrowBtn}
                  onClick={() => scrollTrending('right')}
                  title="Scroll right"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className={styles.trendingTrack} ref={trendingTrackRef}>
              {catalogData.trendingItems.map((trend) => (
                <div key={trend.id} className={styles.trendingCard}>
                  <div className={styles.trendingCardImgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={trend.image}
                      alt={trend.title}
                      className={styles.trendingCardImg}
                    />
                    <span className={styles.cardTagBadge}>{trend.tag}</span>
                  </div>
                  <div className={styles.trendingCardContent}>
                    <h3 className={styles.trendingCardTitle}>{trend.title}</h3>
                    <button
                      type="button"
                      className={styles.consultBtnSmall}
                      onClick={() =>
                        setSelectedDesignForQuote({
                          id: trend.id,
                          title: trend.title,
                          image: trend.image,
                          price: 'Quote on Request',
                          size: 'Custom Dimensions',
                          tag: trend.tag,
                          finish: 'Bespoke Architectural Grade',
                          photosCount: 3,
                        })
                      }
                    >
                      Book Free Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Sub-Category Filter Chips (Livspace Reference 2) ── */}
        <div className={styles.filterBar}>
          {catalogData.filterTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`${styles.filterChip} ${
                activeFilter === tag ? styles.filterChipActive : ''
              }`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ── Main Catalog Grid (Livspace Reference 2 & 3) ── */}
        <div className={styles.designsGrid}>
          {filteredDesigns.map((design, index) => {
            const isWishlisted = wishlist.includes(design.id);

            // Insert Promotional Card after 3rd item as in Livspace Screenshot 3
            const showPromoAfter = index === 2 && catalogData.promoBanner;

            return (
              <div key={design.id} style={{ display: 'contents' }}>
                <div className={styles.designCard}>
                  <div
                    className={styles.cardImgWrap}
                    onClick={() => setSelectedDesignForQuote(design)}
                    style={{ cursor: 'pointer' }}
                    title="Tap to view full details"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={design.image}
                      alt={design.title}
                      className={styles.cardImg}
                      loading="lazy"
                    />

                    {/* Quick View Eye Option */}
                    <button
                      type="button"
                      className={styles.quickViewBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDesignForQuote(design);
                      }}
                      title="View Details"
                      aria-label={`View details for ${design.title}`}
                    >
                      <Eye size={15} />
                    </button>

                    <button
                      type="button"
                      className={`${styles.wishlistBtn} ${
                        isWishlisted ? styles.wishlistBtnActive : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(design.id);
                      }}
                      title={isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}
                    >
                      <Heart
                        size={16}
                        fill={isWishlisted ? '#ef5350' : 'none'}
                      />
                    </button>
                    <span className={styles.photosCountBadge}>
                      <Camera size={11} style={{ display: 'inline', marginRight: '4px' }} />
                      {design.photosCount} Photos
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{design.title}</h3>
                    <div className={styles.priceTag}>{design.price}</div>
                    <div className={styles.specsMeta}>
                      <span>{design.size}</span> · <span>{design.finish}</span>
                    </div>

                    {/* Desktop Actions: Both Consultation & Quote Buttons */}
                    <div className={styles.cardActionsDesktop}>
                      <button
                        type="button"
                        className={styles.btnOutlineSmall}
                        onClick={() => setSelectedDesignForQuote(design)}
                      >
                        Book Free Consultation
                      </button>
                      <button
                        type="button"
                        className={styles.btnPrimarySmall}
                        onClick={() => setSelectedDesignForQuote(design)}
                      >
                        Get Quote
                      </button>
                    </div>

                    {/* Mobile & Tablet Action: Clean Single 'Book Free Consultation' Button */}
                    <div className={styles.cardActionsMobile}>
                      <button
                        type="button"
                        className={styles.btnMobileConsult}
                        onClick={() => setSelectedDesignForQuote(design)}
                      >
                        Book Free Consultation
                      </button>
                    </div>
                  </div>
                </div>

                {/* Promotional In-Grid Card (Matching Livspace Screenshot 3) */}
                {showPromoAfter && (
                  <div className={styles.promoCard}>
                    <div>
                      <span className={styles.promoBadge}>
                        {catalogData.promoBanner.badge}
                      </span>
                      <h3 className={styles.promoTitle}>
                        {catalogData.promoBanner.title}
                      </h3>
                      <p className={styles.promoSubtitle}>
                        {catalogData.promoBanner.subtitle}
                      </p>
                    </div>
                    <button
                      type="button"
                      className={styles.promoBtn}
                      onClick={() =>
                        setSelectedDesignForQuote({
                          id: 'promo-quote',
                          title: catalogData.promoBanner.title,
                          image: design.image,
                          price: 'Estimate on Request',
                          size: 'Custom Scope',
                          tag: 'Promotional',
                          finish: 'Architectural Turnkey Grade',
                          photosCount: 1,
                        })
                      }
                    >
                      {catalogData.promoBanner.ctaText}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Designs for Every Budget Lead Capture (Livspace Reference 5) ── */}
        <section className={styles.leadCaptureSection}>
          <div className={styles.leadCaptureGrid}>
            <div className={styles.lifestyleCol}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={catalogData.consultationSection.lifestyleImage}
                alt="Studio Nirmiti Luxury Interior Showcase"
                className={styles.lifestyleImg}
              />
            </div>

            <div className={styles.formCol}>
              <h2 className={styles.formTitle}>
                {catalogData.consultationSection.title}
              </h2>
              <p className={styles.formSubtitle}>
                {catalogData.consultationSection.subtitle}
              </p>

              {submittedNotice ? (
                <div className={styles.successToast}>
                  <CheckCircle2 size={24} style={{ marginBottom: '6px' }} />
                  <p>{submittedNotice}</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => handleFormSubmit(e, 'Bottom Lead Form')}
                  className={styles.leadForm}
                >
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    className={styles.formInput}
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className={styles.formInput}
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                  />

                  <div className={styles.phoneInputGroup}>
                    <div className={styles.countryCode}>
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      className={styles.phoneInput}
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                    />
                  </div>

                  <label className={styles.checkboxRow}>
                    <input
                      type="checkbox"
                      checked={whatsappOptIn}
                      onChange={(e) => setWhatsappOptIn(e.target.checked)}
                    />
                    <span>Send me updates on WhatsApp</span>
                  </label>

                  {/* Customer Requirement / Category Selector */}
                  <select
                    className={styles.formSelect}
                    value={leadCategory}
                    onChange={(e) => setLeadCategory(e.target.value)}
                    aria-label="Requirement Category"
                  >
                    <option value={catalogData.title}>{catalogData.title} (Selected Service)</option>
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

                  {leadCategory === 'Other Requirement' && (
                    <input
                      type="text"
                      required
                      placeholder="Specify your project requirement *"
                      className={styles.formInput}
                      value={leadCustomCategory}
                      onChange={(e) => setLeadCustomCategory(e.target.value)}
                    />
                  )}

                  {/* All India Places / Cities Selector */}
                  <select
                    className={styles.formSelect}
                    value={leadCity}
                    onChange={(e) => setLeadCity(e.target.value)}
                    aria-label="Select City"
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
                    <option value="Other City">Other City (Type your city)</option>
                  </select>

                  {leadCity === 'Other City' && (
                    <input
                      type="text"
                      required
                      placeholder="Enter your city / location *"
                      className={styles.formInput}
                      value={leadCustomCity}
                      onChange={(e) => setLeadCustomCity(e.target.value)}
                    />
                  )}

                  <button type="submit" className={styles.formSubmitBtn}>
                    GET FREE QUOTE
                  </button>

                  <p className={styles.formDisclaimer}>
                    By submitting this form, you agree to Studio Nirmiti privacy policy & consultation terms. Zero spam guarantee.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── Quick View & Consultation Modal for Design Specific Inquiries ── */}
        {selectedDesignForQuote && (
          <div
            className={styles.modalOverlay}
            onClick={() => setSelectedDesignForQuote(null)}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setSelectedDesignForQuote(null)}
                aria-label="Close Design Details"
              >
                <X size={20} />
              </button>

              {/* Design Visual Preview */}
              <div className={styles.modalImagePreview}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedDesignForQuote.image}
                  alt={selectedDesignForQuote.title}
                  className={styles.modalImg}
                />
                <span className={styles.modalBadge}>{selectedDesignForQuote.tag}</span>
              </div>

              {/* Design Details */}
              <div className={styles.modalHeaderInfo}>
                <h3 className={styles.modalTitle}>{selectedDesignForQuote.title}</h3>
                <div className={styles.modalPrice}>{selectedDesignForQuote.price}</div>
                <div className={styles.modalSpecsRow}>
                  <span>{selectedDesignForQuote.size}</span>
                  <span>·</span>
                  <span>{selectedDesignForQuote.finish}</span>
                </div>
              </div>

              {/* Quick Inquiry Form */}
              <form
                onSubmit={(e) => handleFormSubmit(e, `QuickView: ${selectedDesignForQuote.title}`)}
                className={styles.modalForm}
              >
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  className={styles.modalInput}
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                />

                <div className={styles.phoneInputGroup}>
                  <div className={styles.countryCode}>
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number *"
                    className={styles.phoneInput}
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                  />
                </div>

                <button type="submit" className={styles.modalSubmitBtn}>
                  BOOK FREE CONSULTATION
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
