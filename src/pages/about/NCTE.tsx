import { Home, ChevronRight, GraduationCap, BookOpen, Award, Users, CheckSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const NCTE = () => {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <div className="adm-hero">
          <div className="adm-blob adm-blob-1" />
          <div className="adm-blob adm-blob-2" />
          <div className="adm-hero-content">
            <div className="adm-badge"><GraduationCap size={14} /> Mandatory Disclosure</div>
            <h1 className="adm-title">NCTE <span>Norms & Standards</span></h1>
            <p className="adm-subtitle">
              Information pertaining to National Council for Teacher Education norms and standards applicable to teacher education programmes, faculty qualifications, and institutional compliance at Alva's Institute.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>NCTE</strong> Guidelines</div>
              <div className="adm-stat-pill"><strong>Qualified</strong> Faculty</div>
              <div className="adm-stat-pill"><strong>Curriculum</strong> Compliance</div>
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
            <span><ChevronRight size={14} /></span><span className="adm-cur">NCTE</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* About NCTE  */}
          <div className="adm-section">
            <h2 className="adm-heading">About NCTE</h2>
            <div className="adm-info-box">
              <h3>National Council for Teacher Education</h3>
              <p>
                The National Council for Teacher Education (NCTE) is a statutory body constituted under the NCTE Act, 1993. It is responsible for planning and co-ordination of development of teacher education throughout the country, determining and maintaining standards and norms for teacher education, and regulating all aspects of teacher education including recognition of teacher education institutions. Alva's Institute complies with NCTE norms wherever applicable to its education-related programmes.
              </p>
            </div>
          </div>

          {/* Faculty norms */}
          <div className="adm-section">
            <h2 className="adm-heading">Faculty Qualification Norms</h2>
            <div className="adm-grid">
              {[
                { icon: <BookOpen />, title: "Professor", desc: "Ph.D. in the relevant discipline with a minimum of 10 years' teaching/research experience in a university/college. Must have at least 10 publications in peer-reviewed journals." },
                { icon: <Award />, title: "Associate Professor", desc: "Ph.D. with NET/SLET qualification and minimum 8 years' experience. Must have published at least 7 research papers in UGC-listed journals." },
                { icon: <GraduationCap />, title: "Assistant Professor", desc: "Master's degree in the relevant subject with at least 55% marks, and NET/SLET qualification. Ph.D. holders with NET/SLET can be considered exempt." },
                { icon: <Users />, title: "Visiting Faculty", desc: "Practitioners and industry experts with a minimum Master's degree and substantial professional experience may be engaged as visiting faculty." },
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

          {/* Infrastructure norms */}
          <div className="adm-section">
            <h2 className="adm-heading">Infrastructure & Facility Norms</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Facility</th>
                    <th>NCTE Norm</th>
                    <th>Available at Alva's</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Built-up Area</td><td>Minimum 1500 sq. m.</td><td>4200+ sq. m.</td></tr>
                  <tr><td>Library (Books)</td><td>Minimum 5000 books</td><td>20,000+ books</td></tr>
                  <tr><td>Reading Room Capacity</td><td>120 seats</td><td>200+ seats</td></tr>
                  <tr><td>ICT Lab</td><td>1 lab, 30 systems</td><td>2 labs, 80+ systems</td></tr>
                  <tr><td>Multipurpose Hall</td><td>1 hall</td><td>3 multipurpose halls</td></tr>
                  <tr><td>Playground/Sports</td><td>Mandatory</td><td>Available</td></tr>
                  <tr><td>Hostel (Boys)</td><td>Recommended</td><td>Available (300+ capacity)</td></tr>
                  <tr><td>Hostel (Girls)</td><td>Recommended</td><td>Available (300+ capacity)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Compliance */}
          <div className="adm-section">
            <h2 className="adm-heading">Compliance Checklist</h2>
            <ul className="adm-checklist">
              {[
                "Annual Performance Appraisal Report (APAR) submitted to affiliating university",
                "Faculty API (Academic Performance Indicator) scores maintained and reported",
                "Student-Teacher ratio maintained as per prescribed norms",
                "Anti-Ragging Committee constituted and active",
                "Internal Complaint Committee (ICC) constituted under POSH Act",
                "Student Grievance Redressal Cell functional",
                "IQAC (Internal Quality Assurance Cell) established and active",
                "Annual Quality Assurance Report (AQAR) submitted to NAAC",
              ].map((item, i) => (
                <li key={i}>
                  <span className="adm-check-icon"><CheckSquare size={14} /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NCTE;
