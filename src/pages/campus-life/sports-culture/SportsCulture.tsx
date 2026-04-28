import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy, Music, Target, Users, Zap, Award, Star, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import "./SportsCulture.css";

const fameImages = [
  {
    url: "/wa_110102.jpeg",
    title: "Sports Podium — Medal Ceremony",
    category: "Sports"
  },
  {
    url: "/sports1.jpeg",
    title: "Track & Field",
    category: "Sports"
  },
  {
    url: "/sports2.jpeg",
    title: "Inter-Collegiate Sports",
    category: "Sports"
  },
  {
    url: "/wa_110102_1.jpeg",
    title: "Alvas Nudisiri Cultural Festival",
    category: "Culture"
  },
  {
    url: "/virasath.jpg",
    title: "Virasat Celebration",
    category: "Culture"
  },
  {
    url: "/nudisiri.jpg",
    title: "Nudisiri Event",
    category: "Culture"
  },
  {
    url: "/together.jpeg",
    title: "Team Spirit",
    category: "Culture"
  },
  {
    url: "/wa_110106_2.jpeg",
    title: "Green Campus Initiative",
    category: "Campus"
  }
];

const culturalClubs = [
  { name: "Music & Fine Arts", icon: <Music className="w-6 h-6" />, count: "250+ Members" },
  { name: "Theatre & Drama", icon: <Zap className="w-6 h-6" />, count: "50+ Productions/Yr" },
  { name: "Literature & Debate", icon: <Award className="w-6 h-6" />, count: "National Winners" },
];

export default function SportsCulture() {
  const energyRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<{ images: typeof fameImages, index: number } | null>(null);

  const nextImg = () => {
    if (lightbox) {
      setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
    }
  };

  const prevImg = () => {
    if (lightbox) {
      setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length });
    }
  };

  useEffect(() => {
    if (!energyRef.current) return;
    const container = energyRef.current;
    container.innerHTML = '';
    const count = 15;

    for (let i = 0; i < count; i++) {
      const trail = document.createElement("div");
      trail.className = `sc-energy-trail ${i % 2 === 0 ? 'sport' : 'culture'}`;
      const width = Math.random() * 200 + 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 5 + 3;

      trail.style.width = `${width}px`;
      trail.style.top = `${top}%`;
      trail.style.left = "-20%";
      trail.style.animationDelay = `${delay}s`;
      trail.style.animationDuration = `${duration}s`;

      container.appendChild(trail);
    }
  }, []);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="sc-root">
      <Header />

      {/* --- KINETIC BACKGROUND --- */}
      <div className="sc-bg-energy" ref={energyRef} />

      {/* --- SPLIT HERO --- */}
      <section className="sc-hero">
        <motion.div style={{ opacity: heroOpacity }} className="sc-hero-side sport">
          <img
            src="/A.I.E.T CAMPUS -2026-65.jpg"
            alt="Sports Intensity"
            className="sc-hero-img"
          />
          <div className="sc-hero-overlay" />
          <div className="sc-hero-content">
            <span className="sc-hero-badge">Athletics</span>
            <h1 className="sc-hero-title">Beyond <br /> <em>Limits</em></h1>
            <p className="sc-hero-sub">Where grit meets glory. Training champions for the global stage.</p>
          </div>
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="sc-hero-side culture">
          <img
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=90"
            alt="Cultural Heritage"
            className="sc-hero-img"
          />
          <div className="sc-hero-overlay" />
          <div className="sc-hero-content text-right items-end">
            <span className="sc-hero-badge">Heritage</span>
            <h1 className="sc-hero-title text-right">Pure <br /> <em>Artistry</em></h1>
            <p className="sc-hero-sub text-right">A celebration of rhythm, melody, and tradition.</p>
          </div>
        </motion.div>
      </section>

      {/* --- STATS TICKER --- */}
      <div className="sc-stats-bar">
        <div className="sc-stat-item">
          <span className="sc-stat-val">15+</span>
          <span className="sc-stat-label">Sports Disciplines</span>
        </div>
        <div className="sc-stat-item">
          <span className="sc-stat-val">120+</span>
          <span className="sc-stat-label">Annual Events</span>
        </div>
        <div className="sc-stat-item">
          <span className="sc-stat-val">500+</span>
          <span className="sc-stat-label">Awards Won</span>
        </div>
        <div className="sc-stat-item border-none">
          <span className="sc-stat-val">Campus</span>
          <span className="sc-stat-label">Vibrancy Unmatched</span>
        </div>
      </div>

      {/* --- SIGNATURE EVENTS: VIRASAT & NUDISIRI --- */}
      <section className="sc-events">
        <div className="sc-event-hero">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sc-event-content"
          >
            <span className="sc-hero-badge mb-6">Cultural Milestone</span>
            <h3>Alva's <em>Virasat</em></h3>
            <p className="sc-event-desc">
              India's premier National Cultural Festival bringing together the finest exponents
              of classical music, dance, and folk arts. A week-long celebration that
              transforms the campus into a temple of art.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-sc-sport text-white font-black rounded-full flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-current" /> Watch Highlights
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sc-event-img-wrap"
          >
            <img src="https://visitmangalore.in/_next/image?url=https%3A%2F%2Fapi.visitmangalore.in%2Fuploads%2FAlvas_Virasat_4_175dca9e0e.JPG&w=3840&q=75" alt="Virasat Gallery" />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent" />
          </motion.div>
        </div>

        {/* Nudisiri Secondary */}
        <div className="sc-event-hero mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sc-event-img-wrap order-last lg:order-first"
          >
            <img src="https://alvas.org/wp-content/uploads/2016/05/Alvas_Nudisiri.jpg" alt="Nudisiri" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sc-event-content"
          >
            <span className="sc-hero-badge mb-6">Literary Heritage</span>
            <h3>Alva's <em>Nudisiri</em></h3>
            <p className="sc-event-desc">
              A massive Kannada literary and cultural convention that celebrates the
              rich linguistic heritage and literature of the region, hosting over
              150,000 visitors annually.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-culture-gold font-black text-2xl">150k+</h4>
                <span className="text-xs uppercase opacity-50 font-bold">Annual Visitors</span>
              </div>
              <div>
                <h4 className="text-culture-gold font-black text-2xl">400+</h4>
                <span className="text-xs uppercase opacity-50 font-bold">Artists</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WALL OF FAME --- */}
      <section className="sc-section">
        <div className="sc-sec-header">
          <h2 className="sc-sec-title">Wall of <em>Fame</em></h2>
          <p className="max-w-2xl mx-auto opacity-70">
            Legacy isn't built overnight. We take pride in our sportsmen and artists
            who have brought national and international laurels to the institution.
          </p>
        </div>

        {/* Simple Minimal Gallery */}
        <div className="sc-mini-gallery">
          {fameImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="sc-mini-item"
              onClick={() => setLightbox({ images: fameImages, index: i })}
            >
              <img src={img.url} alt={img.title} className="sc-mini-img" />
              <span className="sc-mini-label">{img.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Cultural Clubs */}
        <div className="flex flex-wrap justify-center gap-12 mt-24">
          {culturalClubs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-xl hover:border-sc-sport transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white">
                {c.icon}
              </div>
              <div>
                <h4 className="font-bold text-xl group-hover:text-sc-sport transition-colors">{c.name}</h4>
                <span className="text-sm text-gray-500">{c.count}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="sc-lightbox"
          onClick={() => setLightbox(null)}
        >
          <button 
            className="sc-lightbox-close"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            className="sc-lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button 
            className="sc-lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <motion.div 
            key={lightbox.index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="sc-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightbox.images[lightbox.index].url} 
              alt={lightbox.images[lightbox.index].title} 
              className="sc-lightbox-img"
            />
            <div className="sc-lightbox-info">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                {lightbox.images[lightbox.index].category}
              </span>
              <h3 className="text-2xl font-black text-white mt-2">
                {lightbox.images[lightbox.index].title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
