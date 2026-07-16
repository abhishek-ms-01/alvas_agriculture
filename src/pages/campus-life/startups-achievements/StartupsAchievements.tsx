import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../../pages/internship/Internship.css";
import "./StartupsAchievements.css";

const achievements = [
  {
    icon: "🌿",
    title: "Shobhavana Campus",
    org: "Our Green Pride",
    desc: "A sprawling 100-acre botanical marvel, known as the 'Lungs of Moodbidri'. Home to thousands of plant species, it is the very foundation of our living, breathing agricultural education."
  }
];

export default function StartupsAchievements() {
  const navigate = useNavigate();
  const revealRefs = useRef<HTMLElement[]>([]);

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("sa-on");
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sa-wrapper">
      <Header />

      {/* ══ Animated Background Blobs ══ */}
      <div className="sa-bg-blobs" aria-hidden="true">
        <div className="sa-blob sa-blob-1" />
        <div className="sa-blob sa-blob-2" />
        <div className="sa-blob sa-blob-3" />
        <div className="sa-blob sa-blob-4" />
      </div>

      {/* Floating leaves */}
      <div aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="sa-leaf"
            style={{
              left: `${10 + i * 11}%`,
              bottom: 0,
              animationDuration: `${12 + i * 2}s`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <main className="sa-main">

        {/* ── Hero (same as all tabs) ── */}
        <section className="ip-hero">
          <div className="ip-hero-bg-image" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000)` }} />
          <div className="ip-blob ip-blob-1" /><div className="ip-blob ip-blob-2" /><div className="ip-blob ip-blob-3" />
          <div className="ip-hero-content">
            <span className="ip-badge">Campus Life</span>
            <h1 className="ip-title">Startups & <span>Achievements</span></h1>
            <p className="ip-subtitle">
              The seeds of innovation are being sown. Discover our growing ecosystem of student ventures and the milestones that define our legacy.
            </p>
          </div>
          <div className="ip-wave">
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ height: 56 }}>
              <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="#f0ead8" />
            </svg>
          </div>
        </section>

        {/* ── Startups Section ── */}
        <section className="sa-section sa-reveal" ref={addReveal}>
          <div className="sa-container">
            <div className="sa-header">
              <span className="sa-eyebrow">Innovation Hub</span>
              <h2>Startups <em>at Alva's</em></h2>
              <p>
                We believe today's students are tomorrow's pioneers. Our startup incubation programme is currently being established — a launchpad for agricultural innovation is on the horizon.
              </p>
            </div>

            {/* Startup vision banner */}
            <div className="sa-vision-banner">
              <div className="sa-vision-icon">🚀</div>
              <div className="sa-vision-text">
                <h3>Our Startup Incubator is Coming Soon</h3>
                <p>
                  A dedicated innovation cell with mentorship, seed funding support, and state-of-the-art facilities is currently in development at Alva's IAST. We are building a structured environment where student-led agri-ventures can be nurtured from idea to impact.
                </p>
                <ul className="sa-vision-list">
                  <li>📋 &nbsp;<strong>Policy Framework</strong> — Currently being drafted in collaboration with industry leaders.</li>
                  <li>🤝 &nbsp;<strong>Industry Mentorship</strong> — Onboarding of startup mentors from agri-tech and food sectors is underway.</li>
                  <li>🏛️ &nbsp;<strong>Incubation Centre</strong> — A dedicated physical space for student ventures is being planned.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Achievements Section ── */}
        <section className="sa-section sa-alt sa-reveal" ref={addReveal}>
          <div className="sa-container">
            <div className="sa-header">
              <span className="sa-eyebrow">Our Crown Jewel</span>
              <h2>Institutional <em>Achievement</em></h2>
              <p>A legacy rooted in 100 acres of living, breathing nature — our greatest achievement is our campus itself.</p>
            </div>

            <div className="sa-achievement-spotlight">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="sa-achievement-card"
                >
                  <div className="sa-ach-icon">{a.icon}</div>
                  <div className="sa-ach-body">
                    <span className="sa-tl-org">{a.org}</span>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                  <div className="sa-ach-img">
                    <img
                      src="/shobavana.jpg"
                      alt="Shobhavana Campus — Lungs of Moodbidri"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="sa-cta sa-reveal" ref={addReveal}>
          <div className="sa-cta-bg" />
          <div className="sa-cta-decor" />
          <div className="sa-container">
            <div className="sa-cta-box">
              <h2>Inspired by our Growth?</h2>
              <p>Be a part of the next chapter. Whether you are a student founder, a mentor, or an industry partner — we’d love to connect.</p>
              <button
                className="sa-btn"
                onClick={() => navigate("/contact-us")}
              >
                Get in Touch →
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
