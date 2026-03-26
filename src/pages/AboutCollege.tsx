import { Home, ChevronRight, GraduationCap, Leaf, FlaskConical, Users, Award, Microscope, MapPin, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./admissions/Admissions.css";

export default function AboutCollege() {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        {/* Hero */}
        <div className="adm-hero">
          <div className="adm-blob adm-blob-1" /><div className="adm-blob adm-blob-2" />
          <div className="adm-hero-content">
            <div className="adm-badge"><MapPin size={14} /> Moodabidri, Karnataka</div>
            <h1 className="adm-title">Alva's Institute of <span>Agricultural Science & Technology</span></h1>
            <p className="adm-subtitle">
              Established in 2005 and affiliated to UAS Dharwad, Alva's IAST is one of Karnataka's premier agricultural institutions — blending classical agrarian wisdom with modern science to shape the agri-professionals of tomorrow.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>2005</strong> Established</div>
              <div className="adm-stat-pill"><strong>12K+</strong> Alumni</div>
              <div className="adm-stat-pill"><strong>50 Acres</strong> Campus</div>
              <div className="adm-stat-pill"><strong>NAAC</strong> Accredited</div>
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
            <span><ChevronRight size={14} /></span>
            <span className="adm-cur">About College</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* Overview */}
          <div className="adm-section">
            <h2 className="adm-heading">About the Institution</h2>
            <div className="adm-info-box">
              <h3>Alva's Institute of Agricultural Science & Technology</h3>
              <p>
                Alva's Institute of Agricultural Science & Technology (IAST), Moodabidri, was founded in 2005 under the Alva's Education Foundation (AEF) by Dr. M. Mohan Alva. Affiliated to the University of Agricultural Sciences (UAS), Dharwad, and recognised by ICAR, the institute offers undergraduate and postgraduate programmes in agricultural sciences, engineering, and allied fields. NAAC accredited and consistently ranked among Karnataka's top agricultural colleges, Alva's IAST is dedicated to producing skilled professionals who serve farming communities, advance research, and lead sustainable agri-business ventures.
              </p>
            </div>
          </div>

          {/* Why choose us */}
          <div className="adm-section">
            <h2 className="adm-heading">Why Choose Alva's IAST?</h2>
            <div className="adm-grid">
              {[
                { icon: <GraduationCap />, title: "UAS Dharwad Affiliated", desc: "Degrees recognised by one of India's most prestigious agricultural universities and valid for all state and central government agricultural recruitment." },
                { icon: <Leaf />, title: "ICAR Approved Curriculum", desc: "Programmes designed under the ICAR 5th Dean's Committee recommendations — the national gold standard for agricultural education." },
                { icon: <FlaskConical />, title: "50-Acre Smart Farm", desc: "A working farm equipped with IoT sensors, drip irrigation systems, drone-based monitoring, soil health analysis stations, and precision planting setups." },
                { icon: <Microscope />, title: "Modern Laboratories", desc: "Fully equipped labs for soil science, plant pathology, entomology, biotechnology, food technology, and agricultural chemistry." },
                { icon: <Users />, title: "Expert Faculty", desc: "Ph.D. qualified faculty with experience in ICAR research stations and agricultural universities, committed to quality education and mentorship." },
                { icon: <Award />, title: "Award-Winning Research", desc: "Funded research projects from DST, ICAR, and state agencies. Publications in national and international peer-reviewed journals." },
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

          {/* Programmes Offered */}
          <div className="adm-section">
            <h2 className="adm-heading">Programmes Offered</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead><tr><th>Level</th><th>Programme</th><th>Duration</th><th>Affiliated To</th></tr></thead>
                <tbody>
                  <tr><td>UG</td><td>B.Sc. (Hons) Agriculture</td><td>4 Years</td><td>UAS Dharwad</td></tr>
                  <tr><td>UG</td><td>B.Tech Food Technology</td><td>4 Years</td><td>UAS Dharwad / AICTE</td></tr>
                  <tr><td>PG</td><td>M.Sc. Agronomy</td><td>2 Years</td><td>UAS Dharwad</td></tr>
                  <tr><td>PG</td><td>M.Sc. Soil Science</td><td>2 Years</td><td>UAS Dharwad</td></tr>
                  <tr><td>PG</td><td>M.Sc. Plant Pathology</td><td>2 Years</td><td>UAS Dharwad</td></tr>
                  <tr><td>Ph.D.</td><td>Agronomy, Genetics & Biotechnology</td><td>3–5 Years</td><td>UAS Dharwad</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Campus life */}
          <div className="adm-section">
            <h2 className="adm-heading">Campus Facilities</h2>
            <ul className="adm-checklist">
              {[
                "Separate hostels for boys and girls with 24×7 security and Wi-Fi",
                "Central Library with 30,000+ books, e-journals, ICAR e-databases and digital reading rooms",
                "Sports complex with courts for cricket, badminton, volleyball, and athletics track",
                "Health centre with resident nurse, first-aid, and tie-up with Columbia Asia Hospital",
                "State-of-the-art canteen serving hygienic, nutritious meals at subsidised rates",
                "Dedicated transport with bus routes across Moodabidri, Mangaluru, and Udupi",
              ].map((item, i) => (
                <li key={i}>
                  <span className="adm-check-icon"><Star size={14} /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="adm-info-box">
            <h3>Recognition & Affiliations</h3>
            <p>
              Alva's IAST is affiliated to the University of Agricultural Sciences (UAS), Dharwad; approved by AICTE; recognised by ICAR, UGC, KSHEC, and KEA; and accredited by NAAC. The institute is a member of the Association of Indian Universities (AIU) and maintains active MOUs with over 150 industry, research, and international partners.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
