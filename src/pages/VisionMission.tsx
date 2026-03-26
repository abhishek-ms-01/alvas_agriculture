import { Home, ChevronRight, Eye, Target, Leaf, Star, Globe, Heart, BookOpen, Sprout } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./admissions/Admissions.css";

export default function VisionMission() {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        {/* Hero */}
        <div className="adm-hero">
          <div className="adm-blob adm-blob-1" /><div className="adm-blob adm-blob-2" />
          <div className="adm-hero-content">
            <div className="adm-badge"><Eye size={14} /> Our Purpose</div>
            <h1 className="adm-title">Vision & <span>Mission</span></h1>
            <p className="adm-subtitle">
              Rooted in the soil, reaching for the sky — nurturing the agri-leaders who will feed and sustain our world through science, innovation, and compassion.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>12K+</strong> Graduates</div>
              <div className="adm-stat-pill"><strong>98%</strong> Placement</div>
              <div className="adm-stat-pill"><strong>30+</strong> Research Projects</div>
            </div>
          </div>
          <div className="adm-wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
            </svg>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="adm-breadcrumb">
          <div className="adm-breadcrumb-inner">
            <Home size={14} /><a href="/">Home</a>
            <span><ChevronRight size={14} /></span><span>About</span>
            <span><ChevronRight size={14} /></span>
            <span className="adm-cur">Vision & Mission</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* Vision */}
          <div className="adm-section">
            <h2 className="adm-heading">Our Vision</h2>
            <div className="adm-info-box">
              <h3>A World Fed by Knowledge</h3>
              <p>
                To emerge as a nationally and globally recognised institution of agricultural excellence — producing compassionate, skilled, and innovative professionals who lead sustainable food systems and uplift farming communities across India and the world.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                We envision a future where science-driven agriculture ensures food security, restores ecological balance, and empowers every rural household with prosperity, dignity, and opportunity.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="adm-section">
            <h2 className="adm-heading">Our Mission</h2>
            <div className="adm-steps">
              {[
                { title: "Quality Education", desc: "Deliver world-class teaching that blends classical agrarian knowledge with modern scientific methods — producing graduates who are both technically sound and humanistically grounded." },
                { title: "Research & Innovation", desc: "Advance cutting-edge research in crop science, soil health, water management, precision farming, and climate-resilient agriculture — contributing solutions to India's most pressing food security challenges." },
                { title: "Community Outreach", desc: "Partner with farmers, government bodies, Krishi Vigyan Kendras, and NGOs to create lasting, ground-level impact through field demonstrations, farmer training, and knowledge transfer." },
                { title: "Sustainability", desc: "Champion eco-friendly agricultural practices that protect the environment, conserve biodiversity, and build resilient food systems for future generations." },
              ].map((s, i) => (
                <div key={i} className="adm-step">
                  <div className="adm-step-num">{i + 1}</div>
                  <div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>

          {/* Core values */}
          <div className="adm-section">
            <h2 className="adm-heading">Core Values</h2>
            <div className="adm-grid">
              {[
                { icon: <Star />, title: "Excellence", desc: "Pursuing the highest academic and professional standards in every programme, research project, and student interaction." },
                { icon: <Leaf />, title: "Sustainability", desc: "Championing farming practices that protect ecosystems, conserve natural resources, and ensure long-term food security." },
                { icon: <Heart />, title: "Community", desc: "Serving farmers and rural families with humility, care, and a genuine commitment to grassroots development." },
                { icon: <Sprout />, title: "Innovation", desc: "Encouraging creative thinking, modern technology adoption, and entrepreneurial mindsets in all our students and faculty." },
                { icon: <BookOpen />, title: "Integrity", desc: "Conducting all academic, research, and administrative activities with honesty, transparency, and ethical rigour." },
                { icon: <Globe />, title: "Global Outlook", desc: "Building international collaborations and preparing graduates for opportunities in the global agri-food sector." },
              ].map((item, i) => (
                <div key={i} className="adm-card">
                  <div className="adm-card-accent-bar" />
                  <div className="adm-card-content">
                    <div className="adm-card-icon">{item.icon}</div>
                    <h3 className="adm-card-title">{item.title}</h3>
                    <p className="adm-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="adm-info-box">
            <h3>Our Commitment</h3>
            <p>
              For over two decades, Alva's Institute of Agricultural Science & Technology has stood as a beacon of agricultural education in Karnataka — mentoring students who transform the nation's farming landscape, feed millions of families, and drive rural prosperity. Our vision and mission are not merely aspirational statements but the living DNA of everything we do — in classrooms, in laboratories, in fields, and in communities.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              <em>"Agriculture is the noblest of all alchemy; for it turns earth, and even manure, into gold." — Paul Chatfield</em>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
