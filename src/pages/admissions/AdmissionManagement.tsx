import { Home, ChevronRight, Users, FileText, Phone, CheckSquare, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const AdmissionManagement = () => {
  const steps = [
    { title: "Contact Admissions Office", desc: "Reach out to Alva's admissions team via phone, email, or in-person visit to enquire about available management quota seats." },
    { title: "Submit Application", desc: "Fill and submit the institutional application form along with attested copies of all required academic documents." },
    { title: "Document Verification", desc: "The admissions committee will verify all submitted documents including 10+2 mark sheets, transfer certificate, and eligibility criteria." },
    { title: "Merit List & Shortlisting", desc: "Shortlisted candidates are selected based on academic merit, extracurricular achievements, and interview performance (if applicable)." },
    { title: "Offer of Admission", desc: "Selected candidates receive an official offer letter from the institution specifying the programme, fees, and joining date." },
    { title: "Fee Payment & Confirmation", desc: "Confirm your seat by paying the management quota fees within the stipulated time. Delay may result in forfeiture of the offer." },
    { title: "Reporting & Enrolment", desc: "Report to the college on the designated date with all original documents for formal enrolment and hostel allocation (if needed)." },
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
            <div className="adm-badge"><Users size={14} /> Admissions — Management Quota</div>
            <h1 className="adm-title">Admission Through <span>Management</span></h1>
            <p className="adm-subtitle">
              Management quota admissions offer an opportunity for deserving students to secure a seat at Alva's Institute of Agricultural Science & Technology based on merit and institutional assessment.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>15%</strong> Management Seats</div>
              <div className="adm-stat-pill"><strong>Merit + Interview</strong></div>
              <div className="adm-stat-pill"><strong>Direct</strong> Application</div>
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
            <span><ChevronRight size={14} /></span><span>Admissions</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">Admission Through Management</span>
          </div>
        </nav>

        <div className="adm-body">
          <div className="adm-section">
            <h2 className="adm-heading">Eligibility & Key Points</h2>
            <div className="adm-grid">
              {[
                { icon: <Award />, title: "Academic Criteria", desc: "Candidates must have passed 10+2 with at least 45% marks (40% for SC/ST) in Physics, Chemistry, and Biology/Mathematics." },
                { icon: <FileText />, title: "No Entrance Test Required", desc: "Unlike KCET/COMED-K, management quota does not mandate a state or national level entrance test score. Admission is merit-based." },
                { icon: <CheckSquare />, title: "Seat Availability", desc: "Management quota seats are limited (approx. 15% of sanctioned intake) and are allotted on a first-come, first-served merit basis." },
                { icon: <Phone />, title: "Direct Application", desc: "Interested candidates should directly contact the Alva's admissions office for availability, process details, and personal guidance." },
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

          <div className="adm-section">
            <h2 className="adm-heading">Admission Process — Step by Step</h2>
            <div className="adm-steps">
              {steps.map((s, i) => (
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
            <h3>Contact the Admissions Office</h3>
            <p>
              For management quota enquiries, please contact our admissions cell: <strong>admissions@alvas.ac.in</strong> or call <strong>+91-824-2277285</strong>. Our team is available Monday to Saturday, 9:00 AM – 5:00 PM. Campus visits are welcome.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionManagement;
