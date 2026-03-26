import { Home, ChevronRight, BadgeCheck, Building, GraduationCap, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const Recognition = () => {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <div className="adm-hero">
          <div className="adm-blob adm-blob-1" />
          <div className="adm-blob adm-blob-2" />
          <div className="adm-hero-content">
            <div className="adm-badge"><BadgeCheck size={14} /> Accreditations</div>
            <h1 className="adm-title">Institutional <span>Recognition</span></h1>
            <p className="adm-subtitle">
              Alva's Institute of Agricultural Science & Technology is formally recognised by leading national regulatory bodies, ensuring our degrees are universally valid and our programmes meet national standards.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>UGC</strong> Recognised</div>
              <div className="adm-stat-pill"><strong>UAS Dharwad</strong> Affiliated</div>
              <div className="adm-stat-pill"><strong>Govt. of Karnataka</strong> Approved</div>
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
            <span><ChevronRight size={14} /></span><span className="adm-cur">Recognition</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* Recognition bodies */}
          <div className="adm-section">
            <h2 className="adm-heading">Recognised By</h2>
            <div className="adm-grid">
              {[
                {
                  icon: <GraduationCap />,
                  title: "University Grants Commission (UGC)",
                  desc: "Alva's Institute is recognised under Section 2(f) and 12(B) of the UGC Act, 1956, confirming eligibility for central government grants and making the degrees awarded by the institution nationally valid.",
                },
                {
                  icon: <Building />,
                  title: "University of Agricultural Sciences (UAS), Dharwad",
                  desc: "The institute is an affiliated college of the University of Agricultural Sciences, Dharwad — a premier state agricultural university governing B.Sc., M.Sc., and Ph.D. programmes in agriculture and allied sciences.",
                },
                {
                  icon: <BadgeCheck />,
                  title: "Government of Karnataka",
                  desc: "The institution is duly permitted and recognised by the Department of Agriculture, Government of Karnataka, to conduct undergraduate and postgraduate programmes in agriculture.",
                },
                {
                  icon: <FileText />,
                  title: "Indian Council of Agricultural Research (ICAR)",
                  desc: "The B.Sc. Agriculture programme is accredited by ICAR, the apex body governing agricultural research and education in India, ensuring the curriculum meets national agricultural education standards.",
                },
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

          {/* Approvals table */}
          <div className="adm-section">
            <h2 className="adm-heading">Regulatory Approvals & Affiliations</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Regulatory Body</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>UGC</td><td>Recognition</td><td>Active</td><td>Under Sec 2(f) and 12(B)</td></tr>
                  <tr><td>UAS Dharwad</td><td>Affiliation</td><td>Active</td><td>Annual renewal</td></tr>
                  <tr><td>Govt. of Karnataka</td><td>Establishment Permission</td><td>Active</td><td>State-level approval</td></tr>
                  <tr><td>ICAR</td><td>Programme Accreditation</td><td>Active</td><td>B.Sc. Agriculture</td></tr>
                  <tr><td>NAAC</td><td>Institutional Accreditation</td><td>Accredited</td><td>Quality assured</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="adm-info-box">
            <h3>Significance of Recognition</h3>
            <p>
              Recognition by these bodies means degrees awarded by Alva's Institute are valid for higher studies, government jobs across India, and international education. Students can apply for UGC-recognised scholarships, ICAR fellowships, and state government benefits linked to recognised institutions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recognition;
