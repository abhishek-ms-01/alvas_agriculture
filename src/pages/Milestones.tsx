import { Home, ChevronRight, Trophy, GraduationCap, Microscope, Globe, Handshake, Cpu, Award, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./admissions/Admissions.css";

const milestones = [
  { year: "2001", icon: <Trophy />, title: "AEF Established", desc: "Alva's Education Foundation constituted by Dr. M. Mohan Alva with a vision to build world-class educational institutions in coastal Karnataka." },
  { year: "2005", icon: <GraduationCap />, title: "IAST Inaugurated", desc: "Alva's IAST opened its doors with the B.Sc. (Hons) Agriculture programme, affiliated to UAS Dharwad. First batch of 60 students enrolled." },
  { year: "2007", icon: <Microscope />, title: "Research Labs Established", desc: "State-of-the-art laboratories for Soil Science, Plant Pathology, Entomology, and Agricultural Biotechnology commissioned." },
  { year: "2009", icon: <Award />, title: "NAAC Accreditation", desc: "Alva's IAST received NAAC accreditation — a formal recognition of the institution's commitment to quality standards in higher education." },
  { year: "2011", icon: <GraduationCap />, title: "PG Programmes Launched", desc: "M.Sc. Agronomy, M.Sc. Plant Pathology, and M.Sc. Soil Science postgraduate programmes started, expanding research capabilities." },
  { year: "2013", icon: <Globe />, title: "Farmer Outreach — 3,000+ Farmers", desc: "Large-scale community outreach programmes connecting over 3,000 small and marginal farmers to modern agricultural knowledge and techniques." },
  { year: "2015", icon: <Handshake />, title: "First Industry MOU", desc: "Signed the first of many industry partnerships — enabling student internships, collaborative research, and technology transfer with agri-companies." },
  { year: "2018", icon: <Cpu />, title: "50-Acre Smart Farm", desc: "Launch of the flagship 50-acre IoT-enabled smart farm featuring satellite monitoring, precision drip systems, drone-based crop health assessment, and robotic sorting." },
  { year: "2020", icon: <Microscope />, title: "Digital Learning Infrastructure", desc: "Full digital infrastructure deployed for e-learning, virtual labs, and remote mentoring — enabling uninterrupted education during the pandemic." },
  { year: "2022", icon: <Trophy />, title: "Karnataka State Award", desc: "Honoured by the Government of Karnataka for outstanding contribution to agricultural education, research, and rural community development." },
  { year: "2023", icon: <Globe />, title: "International Academic Collaborations", desc: "Academic exchange programmes and research MOUs signed with universities in the Netherlands and Israel — bringing global best practices to Alva's IAST." },
  { year: "2025", icon: <Rocket />, title: "Vision 2030 Roadmap", desc: "Launched the Vision 2030 strategic plan — targeting a position among the global top-50 agricultural institutions through research, innovation, and international partnerships." },
];

const numbers = [
  { val: "12,000+", label: "Alumni" },
  { val: "₹8 Cr+", label: "Research Funding" },
  { val: "150+", label: "Industry MOUs" },
  { val: "94%", label: "Placement Rate" },
];

export default function Milestones() {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        {/* Hero */}
        <div className="adm-hero">
          <div className="adm-blob adm-blob-1" /><div className="adm-blob adm-blob-2" />
          <div className="adm-hero-content">
            <div className="adm-badge"><Trophy size={14} /> 2001 – Present</div>
            <h1 className="adm-title">Our <span>Milestones</span></h1>
            <p className="adm-subtitle">
              Two decades of excellence, innovation, and service — follow the path of Alva's IAST's remarkable journey from a single programme to a nationally recognised agricultural institution.
            </p>
            <div className="adm-stat-row">
              {numbers.map((n) => (
                <div key={n.label} className="adm-stat-pill"><strong>{n.val}</strong> {n.label}</div>
              ))}
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
            <span className="adm-cur">Milestones</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* Overview */}
          <div className="adm-section">
            <h2 className="adm-heading">Our Journey</h2>
            <div className="adm-info-box">
              <h3>Two Decades of Agricultural Excellence</h3>
              <p>
                From a modest beginning with a single undergraduate programme in 2005, Alva's Institute of Agricultural Science & Technology has grown into a comprehensive agricultural institution offering UG, PG, and Ph.D. programmes. Every milestone along this journey reflects our unwavering commitment to quality education, impactful research, and meaningful community service.
              </p>
            </div>
          </div>

          {/* Timeline as steps */}
          <div className="adm-section">
            <h2 className="adm-heading">Timeline of Achievements</h2>
            <div className="adm-steps">
              {milestones.map((m, i) => (
                <div key={i} className="adm-step">
                  <div className="adm-step-num" style={{ fontSize: "0.7rem", minWidth: "52px" }}>{m.year}</div>
                  <div className="adm-step-body">
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Looking ahead */}
          <div className="adm-section">
            <h2 className="adm-heading">Vision 2030 Pillars</h2>
            <div className="adm-grid">
              {[
                { icon: <Microscope />, title: "Centre of Excellence", desc: "Establish dedicated Centres of Excellence in Precision Agriculture, Food Technology, and Climate-Smart Farming with ICAR / DST funding." },
                { icon: <Globe />, title: "Global Partnerships", desc: "Expand academic exchange programmes to 10+ countries with joint research, student mobility, and faculty exchange agreements." },
                { icon: <Cpu />, title: "AgriTech Innovation Hub", desc: "Build an on-campus agri-tech startup incubator supporting student and faculty ventures in drone-tech, AI-in-agriculture, and biotech." },
                { icon: <GraduationCap />, title: "Doctoral Research Programme", desc: "Scale up Ph.D. enrolment and funded research to position Alva's IAST among India's top agricultural research institutions by 2030." },
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
            <h3>The Journey Continues...</h3>
            <p>
              Each year brings new achievements, new partnerships, and new students who carry Alva's values into the world. As we work toward Vision 2030, our commitment to excellence in agricultural education, research, and community service remains as strong as the day we opened our gates.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
