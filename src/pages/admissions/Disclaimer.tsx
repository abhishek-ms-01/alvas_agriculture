import { Home, ChevronRight, AlertTriangle, Info, ShieldCheck, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const Disclaimer = () => {
  const sections = [
    {
      icon: <BookOpen />,
      title: "Academic Eligibility",
      desc: "Admission to B.Sc. Agriculture and affiliated programmes at Alva's Institute of Agricultural Science & Technology is subject to the candidate fulfilling all academic eligibility norms prescribed by the University of Agricultural Sciences (UAS), Dharwad, and the Karnataka Examinations Authority (KEA) for the respective academic year.",
    },
    {
      icon: <Info />,
      title: "Accuracy of Information",
      desc: "Candidates are solely responsible for the accuracy of information furnished in the application form. Any misrepresentation, falsification, or omission of material information will result in immediate cancellation of admission, forfeiture of fees, and may attract legal action.",
    },
    {
      icon: <ShieldCheck />,
      title: "Document Verification",
      desc: "All admissions are provisional subject to final verification of original documents. The college reserves the right to cancel admission at any stage if a candidate is found ineligible or if documents are found to be fraudulent.",
    },
    {
      icon: <AlertTriangle />,
      title: "Seat Availability",
      desc: "Availability of seats under various categories (KCET, Agri Quota, Management) is subject to the seat matrix released by regulatory authorities for each academic year. The institute does not guarantee the availability of a specific number of seats in any category.",
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
            <div className="adm-badge"><AlertTriangle size={14} /> Admissions — Disclaimer</div>
            <h1 className="adm-title">Disclaimer — <span>Eligibility Criteria</span></h1>
            <p className="adm-subtitle">
              Prospective students are advised to read the following disclaimer carefully before applying. Admission to Alva's Institute is governed by regulatory guidelines and institutional norms.
            </p>
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
            <span><ChevronRight size={14} /></span><span>Admissions</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">Disclaimer — Eligibility Criteria</span>
          </div>
        </nav>

        <div className="adm-body">
          <div className="adm-section">
            <h2 className="adm-heading">Disclaimer Clauses</h2>
            <div className="adm-grid">
              {sections.map((item, i) => (
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

          <div className="adm-section">
            <h2 className="adm-heading">General Terms</h2>
            <div className="adm-steps">
              {[
                { title: "Fee Refund Policy", desc: "Fees paid at the time of admission shall be refunded as per UGC/state government norms in case of withdrawal. Processing charges as applicable may be deducted." },
                { title: "Reservation Policy", desc: "Reservation of seats for SC, ST, OBC, and other categories shall be as per Karnataka government reservation policy and UAS Dharwad norms." },
                { title: "Course Completion", desc: "The institution does not guarantee employment upon course completion. Placement assistance is provided based on industry requirements and student merit." },
                { title: "Right to Amend", desc: "Alva's Institute reserves the right to amend, modify, or update the admission criteria, fees, and course offerings without prior notice, subject to regulatory approvals." },
                { title: "Governing Law", desc: "All disputes regarding admission shall be subject to the jurisdiction of courts in Moodbidri / Mangaluru, Karnataka." },
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
            <h3>Contact for Clarifications</h3>
            <p>
              For any queries related to eligibility, seat availability, or the admissions process, please contact the Admissions Cell at <strong>admissions@alvas.ac.in</strong> or call <strong>+91-824-2277285</strong> during office hours (Mon–Sat, 9 AM to 5 PM).
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
