import React, { useEffect, useRef, useState } from "react";
import { Home, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./DepartmentPage.css";

/* ─────────────────────────────────────────────
   TYPE DEFINITIONS
───────────────────────────────────────────── */
export interface DeptHero {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  pills: { label: string; value: string }[];
  image?: string;
}

export interface DeptAbout {
  mainImage?: string;
  mainDescription: string;
  cards: {
    icon: string;
    title: string;
    body: string;
    wide?: boolean;
  }[];
  stats: { value: string; label: string }[];
  // New visual enhancements
  badge1?: { label: string; sub?: string };
  badge2?: { label: string; sub?: string };
}

export interface DeptDean {
  name: string;
  title: string;
  photo?: string;
  experience: string;
  qualification: string;
  specialization: string;
  publications: string;
  bio: string;
  quote: string;
}

export interface DeptStaffMember {
  name: string;
  role: string;
  photo?: string;
  tags: string[];
  // New profile fields
  designation?: string;
  email?: string;
  joiningDate?: string;
  education?: string | string[];
  experience?: string | string[];
  interests?: string | string[];
  achievements?: string | string[];
  memberships?: string | string[];
  publications?: string | string[];
  projects?: string | string[];
  subjects?: string | string[];
  research?: string | string[];
  others?: string | string[];
}

export interface DeptActivity {
  icon: string;
  bg: string;
  title: string;
  description: string;
  tag: string;
}

export interface DeptGalleryItem {
  src?: string;
  alt: string;
  caption: string;
  span?: boolean;
  placeholder?: string;
  bg: string;
}

export interface DeptPageProps {
  hero: DeptHero;
  about: DeptAbout;
  dean: DeptDean;
  staff: DeptStaffMember[];
  activities: DeptActivity[];
  gallery: DeptGalleryItem[];
  breadcrumb: string;
  path: string;
}

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────── */
function useCountUp(target: string, trigger: boolean) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!trigger) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.]/g, "");
    if (isNaN(num)) { setDisplay(target); return; }
    const steps = 60;
    const duration = 1600;
    const step = duration / steps;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      const val = Math.round((num / steps) * i);
      setDisplay(val + suffix);
      if (i >= steps) { setDisplay(target); clearInterval(timer); }
    }, step);
    return () => clearInterval(timer);
  }, [trigger, target]);
  return display;
}

function StatItem({ value, label, trigger }: { value: string; label: string; trigger: boolean }) {
  const display = useCountUp(value, trigger);
  return (
    <div className="dp-stat-item">
      <span className="dp-stat-value">{display}</span>
      <span className="dp-stat-label">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const DepartmentPage: React.FC<DeptPageProps> = ({
  hero, about, dean, staff, activities, gallery, breadcrumb, path
}) => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<DeptStaffMember | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="dp-page">
      <Header />

      <main>
        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <div className="dp-hero">
          {hero.image && (
            <div className="dp-hero-bg-image" style={{ backgroundImage: `url(${hero.image})` }} />
          )}
          <div className="dp-blob dp-blob-1" />
          <div className="dp-blob dp-blob-2" />
          <div className="dp-hero-content">
            <div className="dp-hero-badge">🎓 {hero.badge}</div>
            <h1 className="dp-hero-title">{hero.title}</h1>
            <p className="dp-hero-subtitle">{hero.subtitle}</p>
            <div className="dp-hero-pills">
              {hero.pills.map((p, i) => (
                <div key={i} className="dp-hero-pill">
                  <strong>{p.value}</strong> {p.label}
                </div>
              ))}
            </div>
          </div>
          <div className="dp-hero-wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
            </svg>
          </div>
        </div>

        {/* ── Breadcrumb ── */}
        <nav className="dp-breadcrumb" aria-label="Breadcrumb">
          <div className="dp-breadcrumb-inner">
            <Home size={13} />
            <a href="/">Home</a>
            <ChevronRight size={13} />
            <span>Academics</span>
            <ChevronRight size={13} />
            <span>{path}</span>
            <ChevronRight size={13} />
            <span className="dp-breadcrumb-cur">{breadcrumb}</span>
          </div>
        </nav>

        <div className="dp-body">

          {/* ══════════════════════════════
              1. ABOUT THE BRANCH
          ══════════════════════════════ */}
          <section className="dp-section dp-animate-up">
            <div className="dp-section-header">
              <span className="dp-section-eyebrow">Department Overview</span>
              <h2 className="dp-section-title">About</h2>
            </div>

            <div className="dp-about-main">
              <div className="dp-about-visual-wrap">
                {/* Asymmetric Image Container */}
                <div className="dp-about-image-mask">
                  {about.mainImage ? (
                    <img src={about.mainImage} alt="Department" className="dp-about-img" />
                  ) : (
                    <div className="dp-about-image-placeholder">🌿</div>
                  )}
                </div>
                
                {/* Floating Badge 1 */}
                <div className="dp-about-floating-badge badge-top">
                  <div className="dp-badge-icon">🏆</div>
                  <div>
                    <strong>{about.badge1?.label || "Top Ranked"}</strong>
                    <small>{about.badge1?.sub || "Institute"}</small>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="dp-about-floating-badge badge-bottom">
                  <div className="dp-badge-icon">🧪</div>
                  <div>
                    <strong>{about.badge2?.label || "10+ Research Labs"}</strong>
                    <small>{about.badge2?.sub || "State-of-the-Art"}</small>
                  </div>
                </div>

                {/* Decorative Background Element */}
                <div className="dp-about-visual-decoration" />
              </div>

              <div className="dp-about-text-wrap">
                <div className="dp-about-bg-label">ABOUT</div>
                <div className="dp-about-description">
                  {about.mainDescription}
                </div>
              </div>
            </div>

            <div className="dp-about-grid">
              {about.cards.map((c, i) => (
                <div key={i} className={`dp-about-card${c.wide ? " dp-about-card-wide" : ""}`}>
                  <div className="dp-about-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>

            {/* Animated stats strip */}
            <div className="dp-stat-strip" ref={statsRef}>
              {about.stats.map((s, i) => (
                <StatItem key={i} value={s.value} label={s.label} trigger={statsVisible} />
              ))}
            </div>
          </section>

          {/* ══════════════════════════════
              2. DEAN / HOD
          ══════════════════════════════ */}
          <section className="dp-section dp-animate-up dp-delay-1">
            <div className="dp-section-header">
              <span className="dp-section-eyebrow">Leadership</span>
              <h2 className="dp-section-title">Dean</h2>
            </div>

            <div className="dp-dean-wrapper">
              {/* Photo column */}
              <div className="dp-dean-photo-col">
                <div className="dp-dean-photo-frame">
                  {dean.photo ? (
                    <img src={dean.photo} alt={dean.name} />
                  ) : (
                    <span style={{ fontSize: "5rem", color: "rgba(21,128,61,0.2)" }}>👨‍🏫</span>
                  )}
                </div>
                <div className="dp-dean-badge-row">
                  <div className="dp-dean-name">{dean.name}</div>
                  <div className="dp-dean-role-badge">Dean</div>
                </div>
              </div>

              {/* Info column */}
              <div className="dp-dean-info-col">
                <h3>{dean.name}</h3>
                <span className="dp-dean-title">{dean.title}</span>
                <p className="dp-dean-bio">{dean.bio}</p>

                <div className="dp-dean-stats">
                  <div className="dp-dean-stat-box">
                    <span>Experience</span>
                    <strong>{dean.experience}</strong>
                  </div>
                  <div className="dp-dean-stat-box">
                    <span>Qualification</span>
                    <strong>{dean.qualification}</strong>
                  </div>
                  <div className="dp-dean-stat-box">
                    <span>Specialization</span>
                    <strong>{dean.specialization}</strong>
                  </div>
                  <div className="dp-dean-stat-box">
                    <span>Publications</span>
                    <strong>{dean.publications}</strong>
                  </div>
                </div>

                <blockquote className="dp-dean-quote-block">
                  "{dean.quote}"
                </blockquote>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════
              3. STAFF CARDS
          ══════════════════════════════ */}
          <section className="dp-section dp-animate-up dp-delay-2">
            <div className="dp-section-header">
              <span className="dp-section-eyebrow">Our Team</span>
              <h2 className="dp-section-title">Department Staff</h2>
            </div>

            <div className="dp-staff-grid">
              {staff.map((s, i) => (
                <div 
                  key={i} 
                  className="dp-staff-card" 
                  onClick={() => setSelectedStaff(s)}
                  role="button"
                  aria-label={`View profile of ${s.name}`}
                >
                  <div className="dp-staff-card-top" />
                  <div className="dp-staff-avatar">
                    {s.photo ? (
                      <img src={s.photo} alt={s.name} />
                    ) : (
                      <span>👤</span>
                    )}
                  </div>
                  <div className="dp-staff-card-body">
                    <div className="dp-staff-name">{s.name}</div>
                    <span className="dp-staff-role">{s.role}</span>
                    <div className="dp-staff-tags">
                      {s.tags.map((t, j) => (
                        <span key={j} className="dp-staff-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════
              4. BRANCH ACTIVITIES
          ══════════════════════════════ */}
          <section className="dp-section dp-animate-up dp-delay-3">
            <div className="dp-section-header">
              <span className="dp-section-eyebrow">Events &amp; Programs</span>
              <h2 className="dp-section-title">Branch Activities</h2>
            </div>

            <div className="dp-activities-grid">
              {activities.map((a, i) => (
                <div key={i} className="dp-activity-card">
                  <div className="dp-activity-icon-wrap" style={{ background: a.bg }}>
                    {a.icon}
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                  <span className="dp-activity-tag">{a.tag}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════
              5. BRANCH GALLERY
          ══════════════════════════════ */}
          {/* ══════════════════════════════
              5. BRANCH GALLERY — MOVING MARQUEE
          ══════════════════════════════ */}
          <section className="dp-section dp-animate-up dp-delay-4">
            <div className="dp-section-header">
              <span className="dp-section-eyebrow">Moments &amp; Memories</span>
              <h2 className="dp-section-title">Branch Gallery</h2>
            </div>

            <div className="dp-marquee-viewport">
              {/* Row 1: Moving Left */}
              <MarqueeRow items={gallery.slice(0, Math.ceil(gallery.length / 2))} direction="left" />
              
              {/* Row 2: Moving Right */}
              <MarqueeRow items={gallery.slice(Math.ceil(gallery.length / 2))} direction="right" speed="slow" />
              
              <div className="dp-gallery-fade-left" />
              <div className="dp-gallery-fade-right" />
            </div>
          </section>

        </div>
      </main>

      <Footer />

      {/* ══════════════════════════════
          STAFF PROFILE MODAL — GLASSMORPHISM
      ══════════════════════════════ */}
      {selectedStaff && (
        <div className="dp-modal-overlay" onClick={() => setSelectedStaff(null)}>
          <div className="dp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="dp-modal-close" onClick={() => setSelectedStaff(null)}>×</button>
            
            {/* Modal Header */}
            <div className="dp-modal-header">
              <div className="dp-modal-avatar">
                {selectedStaff.photo ? (
                  <img src={selectedStaff.photo} alt={selectedStaff.name} />
                ) : (
                  <span>👤</span>
                )}
              </div>
              <div className="dp-modal-header-info">
                <h2>{selectedStaff.name}</h2>
                <div className="dp-modal-info-grid">
                  <div className="dp-modal-info-item">
                    <label>Designation</label>
                    <span>{selectedStaff.designation || selectedStaff.role}</span>
                  </div>
                  <div className="dp-modal-info-item">
                    <label>Email</label>
                    <span>{selectedStaff.email || "faculty1.agri@alvas.edu.in"}</span>
                  </div>
                  <div className="dp-modal-info-item">
                    <label>Joining Date</label>
                    <span>{selectedStaff.joiningDate || "01-01-2016"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body — Accordions */}
            <div className="dp-modal-body">
              <Accordion title="Educational Qualifications" content={selectedStaff.education} />
              <Accordion title="Past Experience" content={selectedStaff.experience} />
              <Accordion title="Areas of Interest" content={selectedStaff.interests} />
              <Accordion title="Achievement" content={selectedStaff.achievements} />
              <Accordion title="Professional Membership" content={selectedStaff.memberships} />
              <Accordion title="Publications" content={selectedStaff.publications} />
              <Accordion title="Project Guided" content={selectedStaff.projects} />
              <Accordion title="Subjects Teaching" content={selectedStaff.subjects} />
              <Accordion title="Research Publications" content={selectedStaff.research} />
              <Accordion title="Others" content={selectedStaff.others} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Accordion Child Component ─── */
const Accordion: React.FC<{ title: string; content?: string | string[] }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultText = "Data will be updated shortly by the academic department.";
  
  return (
    <div className={`dp-modal-accordion ${isOpen ? "open" : ""}`}>
      <div className="dp-accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <ChevronRight size={18} className="dp-accordion-arrow" />
      </div>
      <div className="dp-accordion-content">
        <div className="dp-accordion-inner">
          {content ? (
            Array.isArray(content) ? (
              <ul>{content.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            ) : (
              <p>{content}</p>
            )
          ) : (
            <p className="dp-accordion-dummy">{defaultText}</p>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Marquee Row Component ─── */
const MarqueeRow: React.FC<{ items: DeptGalleryItem[]; direction: "left" | "right"; speed?: "normal" | "slow" }> = ({ 
  items, direction, speed = "normal" 
}) => {
  // Triple the items to ensure seamless infinite scroll
  const tripleItems = [...items, ...items, ...items];
  
  return (
    <div className={`dp-marquee-row dir-${direction} speed-${speed}`}>
      <div className="dp-marquee-track">
        {tripleItems.map((g, i) => (
          <div key={i} className="dp-marquee-item" style={{ background: g.bg }}>
            {g.src ? (
              <img src={g.src} alt={g.alt} loading="lazy" />
            ) : (
              <div className="dp-marquee-placeholder">{g.placeholder || "🌿"}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
