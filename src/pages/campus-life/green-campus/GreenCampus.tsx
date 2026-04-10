import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import "../../internship/Internship.css";
import "./GreenCampus.css";

const features = [
  {
    icon: "🌿",
    title: "Botanical Living Lab",
    desc: "Thousands of rare and exotic plant species thrive across our sprawling grounds — a living textbook for every agri-science student.",
  },
  {
    icon: "🐝",
    title: "Apiculture & Horticulture Units",
    desc: "Dedicated apiculture apiaries and horticulture demonstration plots provide hands-on training in specialized agricultural disciplines.",
  },
  {
    icon: "🚜",
    title: "Agricultural Technology Centre (ATC)",
    desc: "A state-of-the-art centre housing modern farm machinery, soil testing labs, and precision agriculture tools for real-world skill development.",
  },
  {
    icon: "💧",
    title: "Sustainable Water Systems",
    desc: "Integrated irrigation networks, drip systems, and water harvesting units that model responsible resource management.",
  },
  {
    icon: "🌾",
    title: "Crop Research Fields",
    desc: "Vast experimental crop fields where students and faculty conduct research into high-yield, climate-resilient varieties.",
  },
  {
    icon: "🏡",
    title: "Protected Cultivation",
    desc: "Greenhouses and polyhouses for year-round cultivation of vegetables, flowers, and medicinal plants in a controlled environment.",
  },
];

const galleryImages = [
  { src: "/agriculture%20filed.jpeg", alt: "Agriculture Field" },
  { src: "/horticulture3.jpeg", alt: "Horticulture" },
  { src: "/apiculture.jpeg", alt: "Apiculture" },
  { src: "/A.I.E.T%20CAMPUS%20-2026-180.jpg", alt: "Campus" },
  { src: "/agriculture%20field2.jpeg", alt: "Field" },
  { src: "/apiculture4.jpeg", alt: "Apiculture 2" },
];

export default function GreenCampus() {
  const revealRefs = useRef<HTMLElement[]>([]);
  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("gc-on");
      }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="gc-wrapper">
      <Header />

      {/* Animated background blobs */}
      <div className="gc-bg-blobs" aria-hidden="true">
        <div className="gc-blob gc-blob-1" />
        <div className="gc-blob gc-blob-2" />
        <div className="gc-blob gc-blob-3" />
        <div className="gc-blob gc-blob-4" />
      </div>

      {/* Floating dots */}
      <div aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="gc-dot-particle"
            style={{
              left: `${8 + i * 9}%`,
              animationDuration: `${14 + i * 1.5}s`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      <main className="gc-main">

        {/* ── Hero — same ip-hero pattern ── */}
        <section className="ip-hero">
          <div
            className="ip-hero-bg-image"
            style={{ backgroundImage: `url(/agriculture%20filed.jpeg)` }}
          />
          <div className="ip-blob ip-blob-1" />
          <div className="ip-blob ip-blob-2" />
          <div className="ip-blob ip-blob-3" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="ip-hero-content"
          >
            <span className="ip-badge">Campus Life · 01</span>
            <h1 className="ip-title">Green Campus <span>&amp; ATC</span></h1>
            <p className="ip-subtitle">
              A living, breathing ecosystem where agricultural education meets nature — every acre tells a story of growth, research, and sustainability.
            </p>
          </motion.div>
          <div className="ip-wave">
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ height: 56 }}>
              <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="#f0ead8" />
            </svg>
          </div>
        </section>

        {/* ── Stats band ── */}
        <section className="gc-stats-band gc-reveal" ref={addReveal}>
          {[
            { val: "100+", label: "Acres of Campus" },
            { val: "5000+", label: "Plant Species" },
            { val: "12+", label: "Crop Fields" },
            { val: "1", label: "Modern ATC Centre" },
          ].map((s, i) => (
            <div key={i} className="gc-stat">
              <span className="gc-stat-val">{s.val}</span>
              <span className="gc-stat-label">{s.label}</span>
            </div>
          ))}
        </section>

        {/* ── Feature Grid ── */}
        <section className="gc-section gc-reveal" ref={addReveal}>
          <div className="gc-container">
            <div className="gc-sec-header">
              <span className="gc-eyebrow">Infrastructure &amp; Facilities</span>
              <h2>What Makes Our Campus <em>Extraordinary</em></h2>
              <p>A living laboratory spanning nature, technology, and sustainable agriculture.</p>
            </div>

            <div className="gc-feature-grid">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="gc-feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                >
                  <div className="gc-feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <div className="gc-card-shine" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery Moving Strip ── */}
        <section className="gc-gallery-strip gc-reveal" ref={addReveal}>
          <div className="gc-marquee-row">
            <div className="gc-marquee-track">
              {[...galleryImages, ...galleryImages, ...galleryImages].map((img, i) => (
                <div key={i} className="gc-marquee-item">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ATC Spotlight ── */}
        <section className="gc-section gc-atc gc-reveal" ref={addReveal}>
          <div className="gc-container gc-atc-inner">
            <motion.div
              className="gc-atc-text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="gc-eyebrow">Our Star Facility</span>
              <h2>The Agricultural Technology Centre</h2>
              <p>
                The ATC is the nerve centre of applied learning at Alva's IAST. Equipped with modern precision agriculture equipment, drone technology, soil health labs, and automated irrigation simulators, the centre bridges the gap between classroom knowledge and industry practice.
              </p>
              <ul className="gc-atc-list">
                <li>🛸 Drone-based crop monitoring demos</li>
                <li>🧪 Advanced soil & water testing labs</li>
                <li>🌡️ Climate-controlled research chambers</li>
                <li>🤖 Smart irrigation & sensor systems</li>
              </ul>
            </motion.div>
            <motion.div
              className="gc-atc-img-wrap"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/technologidrone.jpeg" alt="Agricultural Technology Centre" />
              <div className="gc-atc-badge">ATC</div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
