import { Home, ChevronRight, Link2, Building, FileText, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const Affiliations = () => {
  const affiliates = [
    {
      name: "Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences (KSNUAHS), Shivamogga",
      type: "Parent University",
      since: "2010",
      desc: "Alva's Institute of Agricultural Sciences & Technology is an affiliated college of Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences — one of India's premier agricultural universities. The university governs the curriculum, examinations, and degree award for all programmes at our institute.",
    },
    {
      name: "Indian Council of Agricultural Research (ICAR), New Delhi",
      type: "National Apex Body",
      since: "2010",
      desc: "B.Sc. Agriculture curriculum follows the 5th Dean's Committee recommendations prescribed by ICAR, ensuring national-level uniformity and quality.",
    },
    {
      name: "Karnataka State Higher Education Council (KSHEC)",
      type: "State Regulatory Body",
      since: "2008",
      desc: "Alva's Institute reports to KSHEC for annual returns, fee fixation compliance, and strategic planning.",
    },
    {
      name: "Karnataka Examinations Authority (KEA)",
      type: "Admission Authority",
      since: "2009",
      desc: "KEA conducts centralised admission counselling for KCET-based admissions to Alva's Institute.",
    },
    {
      name: "Alva's Education Foundation (AEF)",
      type: "Parent Trust",
      since: "2001",
      desc: "AEF is the parent trust body that manages Alva's group of educational institutions. Alva's IAST operates under AEF's governance framework, founded by Dr. M. Mohan Alva with a vision to build world-class educational institutions.",
    },
  ];

  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <div className="adm-hero">
          <div className="adm-blob adm-blob-1" />
          <div className="adm-blob adm-blob-2" />
          <div className="adm-hero-content">
            <div className="adm-badge"><Link2 size={14} /> Mandatory Disclosure</div>
            <h1 className="adm-title">Institutional <span>Affiliations</span></h1>
            <p className="adm-subtitle">
              Alva's Institute of Agricultural Sciences & Technology is affiliated with and recognised by several leading academic, research, and regulatory bodies at the national and state level.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>6+</strong> Key Affiliations</div>
              <div className="adm-stat-pill"><strong>National & State</strong> Bodies</div>
              <div className="adm-stat-pill"><strong>Since 2005</strong></div>
            </div>
          </div>
          <div className="adm-wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
            </svg>
          </div>
        </div>

        <nav className="adm-breadcrumb">
          <div className="adm-breadcrumb-inner">
            <Home size={14} /><a href="/">Home</a>
            <span><ChevronRight size={14} /></span><span>About</span>
            <span><ChevronRight size={14} /></span><span>Mandatory Disclosure</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">Affiliations</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* Main affiliations */}
          <div className="adm-section">
            <h2 className="adm-heading">Our Key Affiliations</h2>
            <div className="adm-steps">
              {affiliates.map((a, i) => (
                <div key={i} className="adm-step">
                  <div className="adm-step-num">{i + 1}</div>
                  <div className="adm-step-body">
                    <h3>{a.name}</h3>
                    <p>
                      <span className="adm-tag" style={{display:'inline-block', marginRight:'8px', marginBottom:'6px'}}>{a.type} · Since {a.since}</span>
                      <br />{a.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick reference table */}
          <div className="adm-section">
            <h2 className="adm-heading">Affiliations at a Glance</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Body</th>
                    <th>Type</th>
                    <th>Affiliation Since</th>
                    <th>Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>KSN University</td><td>Academic Affiliation</td><td>2008</td><td>State</td></tr>
                  <tr><td>ICAR</td><td>Curriculum Standards</td><td>2010</td><td>National</td></tr>
                  <tr><td>KSHEC</td><td>Policy Compliance</td><td>2008</td><td>State</td></tr>
                  <tr><td>KEA</td><td>Admission Authority</td><td>2009</td><td>State</td></tr>
                  <tr><td>AEF (Parent Trust)</td><td>Governing Trust</td><td>2005</td><td>Institutional</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="adm-info-box">
            <h3>International Collaborations</h3>
            <p>
              Alva's Institute also has active Memoranda of Understanding (MoUs) with several international institutions for student exchange, collaborative research, and faculty development. For a complete list of MoUs, please visit the <a href="/mou" style={{color:'var(--adm-primary)', fontWeight:600}}>MOU page</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Affiliations;
