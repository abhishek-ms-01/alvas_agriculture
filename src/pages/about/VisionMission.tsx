import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  Leaf, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Heart,
  CheckCircle2,
  Eye,
  Home,
  ChevronRight,
  MapPin
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";
import "./VisionMission.css";

const missionPoints = [
  {
    icon: BookOpen,
    title: "Curriculum Integration",
    text: "Implement competency based curriculum integrating theory and practical learning",
    color: "#16a34a"
  },
  {
    icon: GraduationCap,
    title: "Experiential Learning",
    text: "Strengthen skill enhancement through experiential learning and student ready programme (RAWE, ELP, SEC, Internship)",
    color: "#0891b2"
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    text: "Promote climate resilient and sustainable agricultural practices",
    color: "#15803d"
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurship",
    text: "Develop entrepreneurship and agribusiness management skills",
    color: "#d97706"
  },
  {
    icon: Users,
    title: "Rural Engagement",
    text: "Enhance extension outreach and rural engagement",
    color: "#7c3aed"
  },
  {
    icon: Heart,
    title: "Ethical Learning",
    text: "Foster ethical values, professionalism and lifelong learning",
    color: "#dc2626"
  },
  {
    icon: ShieldCheck,
    title: "Quality Standards",
    text: "Ensure adherence to food quality standards and sustainability principles",
    color: "#0f766e"
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const VisionMission = () => {
  return (
    <div className="vm2-root adm-page overflow-x-hidden">
      <PageBackground count={80} color="22,101,52" opacity={0.1} />
      <Header />

      {/* ── HERO — same style as Accreditations ── */}
      <PageHero
        badgeIcon={<MapPin size={14} />}
        badgeText="Institution at a Glance"
        title={<>Vision &amp; <span className="text-accent underline decoration-accent/30 underline-offset-8">Mission</span></>}
        subtitle="The guiding principles that shape every graduate, every research breakthrough, and every community we serve."
        stats={[
          { bold: "Quality Education", text: "" },
          { bold: "Research & Extension", text: "" },
          { bold: "Rural Prosperity", text: "" },
          { bold: "Food Security", text: "" },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="adm-breadcrumb py-4 bg-slate-50/50 border-b border-slate-100">
        <div className="adm-breadcrumb-inner container mx-auto px-6 flex items-center gap-2 text-[12px] text-slate-500 font-bold uppercase tracking-widest">
          <Home size={12} className="text-accent" />
          <a href="/" className="hover:text-accent transition-colors">Home</a>
          <span><ChevronRight size={12} /></span>
          <span>Institution at a Glance</span>
          <span><ChevronRight size={12} /></span>
          <span className="adm-cur text-deep-green">Vision &amp; Mission</span>
        </div>
      </nav>

      {/* ── VISION ── */}
      <section className="vm2-vision-section">
        <div className="vm2-container">
          <motion.div
            className="vm2-vision-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="vm2-vision-strip">
              <div className="vm2-vision-strip-inner">
                <Eye size={22} />
                <span className="vm2-vision-rotated-label">VISION</span>
              </div>
            </div>

            <div className="vm2-vision-body">
              <div className="vm2-vision-tag">
                <CheckCircle2 size={16} /> Institutional Vision
              </div>
              <blockquote className="vm2-vision-quote">
                "To produce globally competent agricultural graduates through quality education,
                experiential learning, research and extension for sustainable agriculture,
                food / nutritional security and rural prosperity."
              </blockquote>
              <div className="vm2-vision-pillars">
                {["Quality Education", "Experiential Learning", "Research & Extension", "Food Security", "Rural Prosperity"].map((tag) => (
                  <span key={tag} className="vm2-vision-pill">{tag}</span>
                ))}
              </div>
            </div>

            <div className="vm2-vision-deco">01</div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="vm2-mission-section">
        <div className="vm2-container">
          <motion.div
            className="vm2-section-head"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="vm2-section-line" />
            <div className="vm2-section-label">
              <span className="vm2-section-number">02</span>
              <h2 className="vm2-section-title">Our Mission</h2>
            </div>
            <div className="vm2-section-line" />
          </motion.div>
          <p className="vm2-mission-intro">
            Seven strategic pillars that define how we shape tomorrow's agricultural leaders.
          </p>

          <div className="vm2-mission-grid">
            {missionPoints.map((point, idx) => {
              const Icon = point.icon;
              const isRight = idx % 2 !== 0;
              return (
                <motion.div
                  key={idx}
                  className={`vm2-mission-item ${isRight ? "vm2-mission-item--right" : ""}`}
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.07 }}
                >
                  <div className="vm2-mission-index">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="vm2-mission-icon-wrap" style={{ background: `${point.color}15`, border: `1.5px solid ${point.color}30` }}>
                    <Icon size={24} style={{ color: point.color }} />
                  </div>
                  <div className="vm2-mission-content">
                    <h3 className="vm2-mission-title">{point.title}</h3>
                    <p className="vm2-mission-text">{point.text}</p>
                  </div>
                  <div className="vm2-mission-accent" style={{ background: point.color }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AFFILIATION BANNER ── */}
      <section className="vm2-aff-section">
        <motion.div
          className="vm2-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="vm2-aff-card">
            <div className="vm2-aff-glow" />
            <div className="vm2-aff-icon"><ShieldCheck size={32} /></div>
            <div className="vm2-aff-body">
              <h3 className="vm2-aff-title">Affiliation &amp; Recognition</h3>
              <p className="vm2-aff-text">
                Affiliated to <strong>Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences</strong>,
                actively contributing to the{" "}
                <strong>Vision 2030</strong> roadmap for sustainable rural empowerment.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionMission;
