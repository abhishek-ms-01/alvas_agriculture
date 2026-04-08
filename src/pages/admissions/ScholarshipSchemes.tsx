import { Home, ChevronRight, Award, FileText, Clock, CheckSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";

const ScholarshipSchemes = () => {
  const applicationSteps = [
    { title: "Check Eligibility", desc: "Review the eligibility criteria for each scholarship before applying. Ensure you meet the income, caste, and academic requirements." },
    { title: "Gather Documents", desc: "Prepare income certificate, caste certificate, Aadhaar, bank passbook, mark sheets, and any other documents required by the specific scheme." },
    { title: "Register on Portal", desc: "Register on scholarships.gov.in (NSP) or karepass.cgg.gov.in (Karnataka) with your Aadhaar-linked mobile number." },
    { title: "Fill Application", desc: "Accurately fill in the scholarship application form including personal, academic, and bank account details." },
    { title: "Upload Documents", desc: "Upload clear, scanned copies of all required documents in the prescribed format (JPG/PDF)." },
    { title: "Submit & Track", desc: "Submit the application before the deadline and track its status. The college will verify and forward the application to the authority." },
  ];

  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <PageHero
          badgeIcon={<Award size={14} />}
          badgeText="Scholarships"
          title={<>Scholarship <span className="text-accent">Schemes</span></>}
          subtitle="Detailed information on how scholarship schemes work at Alva's Institute — application process, timelines, disbursement, and support offered by the college."
          stats={[
            { bold: "Sep–Nov", text: "Application Window" },
            { bold: "Direct DBT", text: "Disbursement" },
            { bold: "Expert", text: "Guidance" },
          ]}
        />

        <nav className="adm-breadcrumb">
          <div className="adm-breadcrumb-inner">
            <Home size={14} /><a href="/">Home</a>
            <span><ChevronRight size={14} /></span><span>Admissions</span>
            <span><ChevronRight size={14} /></span><span>Scholarships</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">Scholarship Schemes</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* How it works */}
          <div className="adm-section">
            <h2 className="adm-heading">How the Scholarship Process Works</h2>
            <div className="adm-steps">
              {applicationSteps.map((s, i) => (
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

          {/* Key information cards */}
          <div className="adm-section">
            <h2 className="adm-heading">Key Information</h2>
            <div className="adm-grid">
              {[
                {
                  icon: <Clock />,
                  title: "Application Timeline",
                  desc: "Most scholarships open in September and close by November. Renewal applications by existing scholars open each August. Do not miss the annual deadline.",
                },
                {
                  icon: <FileText />,
                  title: "Required Documents at College",
                  desc: "Income certificate, caste/community certificate, previous year mark sheets, Aadhaar, bank passbook (savings account, Aadhaar-seeded), fee receipts.",
                },
                {
                  icon: <CheckSquare />,
                  title: "Institute Verification",
                  desc: "After student submission, the scholarship cell at Alva's veries and forwards applications to the government portal. This takes approximately 3–5 working days.",
                },
                {
                  icon: <Award />,
                  title: "Disbursement",
                  desc: "Approved scholarship amounts are credited directly to the student's Aadhaar-linked bank account via DBT. Typically disbursed between January and March.",
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

          {/* Renewal */}
          <div className="adm-section">
            <h2 className="adm-heading">Scholarship Renewal Requirements</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Scholarship Type</th>
                    <th>Renewal Condition</th>
                    <th>Minimum CGPA / Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Post-Matric SC/ST</td><td>Advance to next year; no backlog</td><td>No minimum, but must pass</td></tr>
                  <tr><td>OBC Scholarship</td><td>Regular student; pass all subjects</td><td>50% in previous year</td></tr>
                  <tr><td>Merit-cum-Means</td><td>Maintain merit; no economic change</td><td>60% / CGPA 6.0</td></tr>
                  <tr><td>INSPIRE SHE</td><td>Pass with distinction; no detain</td><td>60% minimum each year</td></tr>
                  <tr><td>Alva's Institutional</td><td>Academic performance review</td><td>75% in internal assessments</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="adm-info-box">
            <h3>Scholarship Cell — Contact</h3>
            <p>
              Alva's Institute has a dedicated <strong>Scholarship Cell</strong> to assist students with applications, document preparation, and portal issues. Contact: <strong>scholarship@alvas.ac.in</strong> or visit the administrative block (Room 104) during office hours (Mon–Fri, 10 AM–4 PM).
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScholarshipSchemes;
