import { Home, ChevronRight, FileCheck, ShieldCheck, Landmark, ClipboardList } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const StatutoryApprovals = () => {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <div className="adm-hero">
          <div className="adm-blob adm-blob-1" />
          <div className="adm-blob adm-blob-2" />
          <div className="adm-hero-content">
            <div className="adm-badge"><FileCheck size={14} /> Accreditations</div>
            <h1 className="adm-title">Statutory <span>Approvals</span></h1>
            <p className="adm-subtitle">
              All programmes offered by Alva's Institute of Agricultural Science & Technology are backed by statutory approvals from the relevant central and state regulatory authorities, ensuring full legal compliance.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>Fully</strong> Compliant</div>
              <div className="adm-stat-pill"><strong>Central & State</strong> Approvals</div>
              <div className="adm-stat-pill"><strong>Annual</strong> Renewal</div>
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
            <span><ChevronRight size={14} /></span><span className="adm-cur">Statutory Approvals</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* Statutory bodies */}
          <div className="adm-section">
            <h2 className="adm-heading">Statutory Regulatory Bodies</h2>
            <div className="adm-grid">
              {[
                {
                  icon: <Landmark />,
                  title: "Ministry of Agriculture & Farmers Welfare",
                  desc: "The central Ministry of Agriculture provides policy guidance and approval for agricultural science institutions, ensuring alignment with national agricultural education goals.",
                },
                {
                  icon: <ShieldCheck />,
                  title: "UAS Dharwad — Annual Affiliation",
                  desc: "Every academic year, the institution obtains fresh affiliation from the University of Agricultural Sciences, Dharwad, post-inspection and verification of facilities and student progress.",
                },
                {
                  icon: <ClipboardList />,
                  title: "ICAR — Curriculum Compliance",
                  desc: "The curriculum followed at Alva's is the ICAR-prescribed 5th Dean's Committee model, ensuring uniform standards with all major agricultural universities in India.",
                },
                {
                  icon: <FileCheck />,
                  title: "State Higher Education Council",
                  desc: "Programmes and fee structures are regulated and approved by the Karnataka State Higher Education Council and the Fee Fixation Committee constituted by the government.",
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

          {/* Compliance table */}
          <div className="adm-section">
            <h2 className="adm-heading">Statutory Compliance Summary</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Statutory Requirement</th>
                    <th>Governing Authority</th>
                    <th>Frequency</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Annual Affiliation</td><td>UAS Dharwad</td><td>Yearly</td><td>Compliant</td></tr>
                  <tr><td>UGC Recognition Renewal</td><td>UGC, New Delhi</td><td>As applicable</td><td>Active</td></tr>
                  <tr><td>ICAR Curriculum Compliance</td><td>ICAR, New Delhi</td><td>Programme-based</td><td>Compliant</td></tr>
                  <tr><td>Building & Safety Approval</td><td>Local Authority / PWD</td><td>5-yearly</td><td>Compliant</td></tr>
                  <tr><td>Fire Safety NOC</td><td>State Fire Department</td><td>Yearly</td><td>Compliant</td></tr>
                  <tr><td>Environmental Clearance</td><td>Karnataka State PCB</td><td>As applicable</td><td>Compliant</td></tr>
                  <tr><td>Anti-Ragging Compliance</td><td>UGC / UAS Dharwad</td><td>Yearly</td><td>Compliant</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="adm-info-box">
            <h3>Document Access</h3>
            <p>
              Copies of all statutory approval orders, affiliation certificates, and compliance documents are available for inspection at the institution's administrative office. For specific document requests under the Right to Information Act, please refer to our RTI section. Contact: <strong>admin@alvas.ac.in</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StatutoryApprovals;
