import { Home, ChevronRight, Shield, Award, Star, CheckCircle, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const NAAC = () => {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <div className="adm-hero">
          <div className="adm-blob adm-blob-1" />
          <div className="adm-blob adm-blob-2" />
          <div className="adm-hero-content">
            <div className="adm-badge"><Shield size={14} /> Accreditations</div>
            <h1 className="adm-title">NAAC <span>Accreditation</span></h1>
            <p className="adm-subtitle">
              Alva's Institute of Agricultural Science & Technology is committed to quality assurance in higher education, assessed and accredited by the National Assessment and Accreditation Council (NAAC), an autonomous body under the UGC.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>NAAC</strong> Accredited</div>
              <div className="adm-stat-pill"><strong>UGC</strong> Recognised</div>
              <div className="adm-stat-pill"><strong>Quality</strong> Education</div>
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
            <span><ChevronRight size={14} /></span><span>Accreditations</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">NAAC</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* About NAAC */}
          <div className="adm-section">
            <h2 className="adm-heading">What is NAAC?</h2>
            <div className="adm-info-box">
              <h3>National Assessment and Accreditation Council</h3>
              <p>
                NAAC (National Assessment and Accreditation Council) is an autonomous body established by the University Grants Commission (UGC) in 1994, with the mandate to assess and accredit institutions of higher education in India. The council evaluates institutions on seven criteria: Curricular Aspects, Teaching–Learning, Research & Extension, Infrastructure, Student Support, Governance, and Institutional Values.
              </p>
            </div>
          </div>

          {/* NAAC criteria */}
          <div className="adm-section">
            <h2 className="adm-heading">NAAC Assessment Criteria</h2>
            <div className="adm-grid">
              {[
                { icon: <BookOpen />, title: "Curricular Aspects", desc: "Evaluation of curriculum design, development, and its alignment with the institution's stated mission, graduate attributes, and national quality benchmarks." },
                { icon: <Star />, title: "Teaching-Learning & Evaluation", desc: "Assessment of teaching-learning processes, student-centric methods, ICT integration, and evaluation transparency." },
                { icon: <Award />, title: "Research, Consultancy & Extension", desc: "Promotion and publication of research, innovation, consultancy, and extension activities that benefit local communities and agricultural sectors." },
                { icon: <CheckCircle />, title: "Infrastructure & Learning Resources", desc: "Physical infrastructure, library, laboratory facilities, ICT tools, and student amenities that support the learning environment." },
                { icon: <Shield />, title: "Student Support & Progression", desc: "Student mentoring, career counselling, scholarships, grievance redressal, and alumni engagement systems." },
                { icon: <Star />, title: "Governance & Leadership", desc: "Institutional governance, financial management, strategic planning, decentralisation, and transparency in administration." },
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

          {/* Accreditation details */}
          <div className="adm-section">
            <h2 className="adm-heading">Our NAAC Journey</h2>
            <div className="adm-steps">
              {[
                { title: "Institutional Self-Study Report (IIQA)", desc: "The institution prepared a comprehensive Institutional Information for Quality Assessment (IIQA) documenting all academic and administrative activities." },
                { title: "Self-Study Report (SSR) Submission", desc: "A detailed Self-Study Report covering all seven NAAC criteria was meticulously prepared and submitted to the NAAC secretariat." },
                { title: "Peer Team Visit", desc: "A NAAC Peer Team conducted an on-site visit to evaluate the institution's facilities, teaching practices, research output, and governance systems." },
                { title: "Accreditation Awarded", desc: "Following the peer review, NAAC awarded accreditation to the institution, recognising its commitment to quality education and continuous improvement." },
              ].map((s, i) => (
                <div key={i} className="adm-step">
                  <div className="adm-step-num">{i + 1}</div>
                  <div className="adm-step-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="adm-info-box">
            <h3>NAAC Certificate & Score</h3>
            <p>
              The NAAC accreditation certificate and Cumulative Grade Point Average (CGPA) are publicly disclosed as part of the institution's mandatory transparency obligations. For details of the NAAC accreditation certificate, score, and peer team report, please contact the IQAC (Internal Quality Assurance Cell) at: <strong>iqac@alvas.ac.in</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NAAC;
