import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Leaf, Coffee, ShieldCheck, HeartPulse, Wifi, Zap, Users, Star } from "lucide-react";
import "./ResidentialLife.css";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "hostels", label: "Hostel Life" },
  { id: "dining", label: "Dining & Food" },
  { id: "green", label: "Green Campus" }
];

const ResidentialLife = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <motion.div 
            key="overview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="trl-grid"
          >
            <div>
              <h2 className="trl-info-title">A Sanctuary for <em>Holistic Living</em></h2>
              <p className="trl-info-p">
                At Alva's, residential life is not just about accommodation—it's about community, 
                wellness, and environmental stewardship. Our 100-acre campus is designed to be a 
                living classroom where nature and modern amenities coexist.
              </p>
              <div className="trl-feature-list">
                <div className="trl-feature-item"><Star className="w-4 h-4 text-res-gold" /> Premium Amenities</div>
                <div className="trl-feature-item"><Leaf className="w-4 h-4 text-res-gold" /> Oxygen-Rich Campus</div>
                <div className="trl-feature-item"><ShieldCheck className="w-4 h-4 text-res-gold" /> Enhanced Security</div>
                <div className="trl-feature-item"><Users className="w-4 h-4 text-res-gold" /> Multicultrual Hub</div>
              </div>
            </div>
            <div className="trl-image-wrapper">
              <img src="/A.I.E.T CAMPUS -2026-65.jpg" alt="Campus Overview" />
            </div>
          </motion.div>
        );
      case "hostels":
        return (
          <motion.div 
            key="hostels"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="trl-grid"
          >
            <div>
              <h2 className="trl-info-title">Secure & <em>Spacious Living</em></h2>
              <p className="trl-info-p">
                Our twin-sharing and multi-sharing hostels are located in the heart of nature, 
                offering quiet study environments and recreational spaces. Safety is our 
                top priority, with 24/7 warden support and advanced surveillance.
              </p>
              <div className="trl-feature-list">
                <div className="trl-feature-item"><Home className="w-4 h-4 text-res-gold" /> Studio-style Rooms</div>
                <div className="trl-feature-item"><Wifi className="w-4 h-4 text-res-gold" /> High-speed Internet</div>
                <div className="trl-feature-item"><Zap className="w-4 h-4 text-res-gold" /> 100% Power Backup</div>
                <div className="trl-feature-item"><Users className="w-4 h-4 text-res-gold" /> Dedicated Study Halls</div>
              </div>
            </div>
            <div className="trl-image-wrapper">
              <img src="/A.I.E.T CAMPUS -2026-180.jpg" alt="Hostel Rooms" />
            </div>
          </motion.div>
        );
      case "dining":
        return (
          <motion.div 
            key="dining"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="trl-grid"
          >
            <div>
              <h2 className="trl-info-title">Nutritious <em>Farm-to-Table</em></h2>
              <p className="trl-info-p">
                We believe in "Health through Food." Our cafeterias serve organic meals prepared 
                under strict hygienic conditions. We offer diverse cuisines including South Indian, 
                North Indian, and specialized diet meals for athletes.
              </p>
              <div className="trl-feature-list">
                <div className="trl-feature-item"><Coffee className="w-4 h-4 text-res-gold" /> Organic Produce</div>
                <div className="trl-feature-item"><HeartPulse className="w-4 h-4 text-res-gold" /> Dietitian Approved</div>
                <div className="trl-feature-item"><Users className="w-4 h-4 text-res-gold" /> 2000+ Seating</div>
                <div className="trl-feature-item"><Star className="w-4 h-4 text-res-gold" /> Hygiene Certified</div>
              </div>
            </div>
            <div className="trl-image-wrapper">
              <img src="/A.I.E.T CAMPUS -2026-467.jpg" alt="Dining Hall" />
            </div>
          </motion.div>
        );
      case "green":
        return (
          <motion.div 
            key="green"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="trl-grid"
          >
            <div>
              <h2 className="trl-info-title">Lush 100-Acre <em>Eco-System</em></h2>
              <p className="trl-info-p">
                Adjacent to the Western Ghats, our campus is a botanical haven. With over 100+ species 
                of rare plants and extensive herbal gardens, students live in an environment that 
                continuously inspires agricultural innovation.
              </p>
              <div className="trl-feature-list">
                <div className="trl-feature-item"><Leaf className="w-4 h-4 text-res-gold" /> Herbal Gardens</div>
                <div className="trl-feature-item"><Users className="w-4 h-4 text-res-gold" /> Nature Workways</div>
                <div className="trl-feature-item"><Star className="w-4 h-4 text-res-gold" /> Carbon Neutral</div>
                <div className="trl-feature-item"><Users className="w-4 h-4 text-res-gold" /> Outdoor Study Pods</div>
              </div>
            </div>
            <div className="trl-image-wrapper">
              <img src="/A.I.E.T CAMPUS -2026-465.jpg" alt="Green Spaces" />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="trl-root">
      <Header forceDark={true} />

      {/* --- HERO --- */}
      <section className="trl-hero">
        <div 
          className="trl-hero-img" 
          style={{ backgroundImage: `url('/A.I.E.T CAMPUS -2026-65.jpg')` }} 
        />
        <div className="trl-hero-overlay" />
        <div className="trl-hero-content">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 bg-res-gold/20 text-res-gold border border-res-gold/30 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
          >
            Institutional Hospitality
          </motion.span>
          <h1 className="trl-hero-title">Residential Life & <br/><em>Green Infrastructure</em></h1>
        </div>
      </section>

      {/* --- TABS BAR --- */}
      <div className="trl-tabs-container">
        <div className="trl-tabs-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`trl-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="trl-tab-indicator" className="trl-tab-indicator" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* --- CONTENT --- */}
      <section className="trl-content-section">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </section>

      <Footer />
    </div>
  );
};

export default ResidentialLife;
