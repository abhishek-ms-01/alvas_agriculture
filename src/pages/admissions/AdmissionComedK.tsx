import { Home, ChevronRight, GraduationCap, FileText, CheckSquare, BookOpen, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const AdmissionComedK = () => {
  const steps = [
    { title: "Register on COMED-K Portal", desc: "Visit comedk.org and create a new account with a valid email ID and mobile number to begin the registration process." },
    { title: "Complete Application Form", desc: "Fill in your personal, academic, and contact details accurately. Upload scanned copies of photograph and signature." },
    { title: "Pay COMED-K Application Fee", desc: "Pay the application fee of ₹1800 (approx.) online. The fee is non-refundable. Retain the payment receipt." },
    { title: "Download Admit Card", desc: "Print the admit card from the COMED-K portal before the exam date. Carry it with a government-issued photo ID." },
    { title: "Appear for UGET Exam", desc: "Attend the Computer Based COMED-K UGET exam at the designated centre. Test includes Physics, Chemistry, and Mathematics." },
    { title: "Rank Publication & Registration", desc: "Check your COMED-K rank online. If eligible for agriculture programmes, complete counselling registration with the rank." },
    { title: "Counselling & Seat Allotment", desc: "Participate in online counselling, fill choices, and report to Alva's with all original documents upon seat allotment." },
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
            <div className="adm-badge"><GraduationCap size={14} /> Admissions — COMED-K</div>
            <h1 className="adm-title">Admission Through <span>COMED-K</span></h1>
            <p className="adm-subtitle">
              Gain admission to Alva's Agricultural Institute through the Consortium of Medical, Engineering and Dental Colleges of Karnataka (COMED-K) centralized entrance test.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>25%</strong> Seats via COMED-K</div>
              <div className="adm-stat-pill"><strong>CBT Mode</strong> Exam</div>
              <div className="adm-stat-pill"><strong>Online</strong> Counselling</div>
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
            <span><ChevronRight size={14} /></span><span className="adm-cur">Admission Through COMED-K</span>
          </div>
        </nav>

        <div className="adm-body">
          <div className="adm-section">
            <h2 className="adm-heading">Eligibility Criteria</h2>
            <div className="adm-grid">
              {[
                { icon: <BookOpen />, title: "Academic Qualification", desc: "Passed 10+2 or equivalent with Physics, Chemistry, and Biology or Mathematics as compulsory subjects from a recognised board." },
                { icon: <Star />, title: "Minimum Marks", desc: "General category: 45% aggregate in PCB/PCM. SC/ST: 40%. The marks pertain to the qualifying examination." },
                { icon: <FileText />, title: "COMED-K UGET Score", desc: "A valid COMED-K UGET score is mandatory. Candidates must register and appear for the Undergraduate Entrance Test." },
                { icon: <CheckSquare />, title: "Domicile", desc: "COMED-K seats are available for students across India. Karnataka domicile is not mandatory for COMED-K quota admissions." },
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
            <h3>About COMED-K</h3>
            <p>
              COMED-K (Consortium of Medical, Engineering and Dental Colleges of Karnataka) is a body of private unaided professional educational institutions in Karnataka. The UGET (Under Graduate Entrance Test) is a Computer Based Test conducted annually for admissions to undergraduate professional courses. Alva's Institute participates in COMED-K counselling for filling reserved seats.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionComedK;
