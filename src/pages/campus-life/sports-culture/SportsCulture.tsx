import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy, Music, Target, Users, Zap, Award, Star, ArrowRight, Play } from "lucide-react";
import "./SportsCulture.css";

const sportsFacilities = [
  {
    name: "Standard 400m Track",
    tag: "Athletics",
    img: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?w=800&q=80",
    desc: "8-lane synthetic track built to international standards for peak performance."
  },
  {
    name: "Indoor Multi-Stadium",
    tag: "Pro Court",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    desc: "High-grade wooden flooring for Badminton, Table Tennis, and Basketball."
  },
  {
    name: "The Cricket Oval",
    tag: "Main Ground",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    desc: "A sprawling field with multiple turf pitches for league-level matches."
  }
];

const culturalClubs = [
  { name: "Music & Fine Arts", icon: <Music className="w-6 h-6" />, count: "250+ Members" },
  { name: "Theatre & Drama", icon: <Zap className="w-6 h-6" />, count: "50+ Productions/Yr" },
  { name: "Literature & Debate", icon: <Award className="w-6 h-6" />, count: "National Winners" },
];

export default function SportsCulture() {
  const energyRef = useRef<HTMLDivElement>(null);

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

      {/* --- THE ARENA --- */}
      <section className="sc-section">
        <div className="sc-sec-header">
          <span className="sc-hero-badge mb-4">Elite Training</span>
          <h2 className="sc-sec-title">The <em>Arena</em></h2>
        </div>
        <div className="sc-grid">
          {sportsFacilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="sc-arena-card"
            >
              <img src={f.img} alt={f.name} className="sc-arena-img" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="sc-arena-content">
                <span className="sc-arena-tag">{f.tag}</span>
                <h3 className="sc-arena-name">{f.name}</h3>
                <p className="opacity-70 text-sm mb-6">{f.desc}</p>
                <div className="flex items-center gap-2 text-sc-sport font-bold">
                  Explore Hub <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
            <img src="/virasath.jpg" alt="Virasat Gallery" />
            <div className="absolute inset-0 bg-gradient-to-tr from-culture-gold/20 to-transparent" />
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
            <img src="/nudisiri.jpg" alt="Nudisiri" />
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
        <div className="flex flex-wrap justify-center gap-12 mt-12">
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

      <Footer />
    </div>
  );
}
