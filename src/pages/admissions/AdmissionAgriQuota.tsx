import { Home, ChevronRight, GraduationCap, FileText, CheckSquare, BookOpen, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const AdmissionAgriQuota = () => {
  const steps = [
    { title: "Obtain Agriculturalist Certificate", desc: "Get the certificate from the Tahsildar/Revenue Department confirming your agricultural background." },
    { title: "Register for Entrance Exam", desc: "Register for the relevant state-level entrance exam (like KCET) under the Agriculturalist Quota category." },
    { title: "Verify Documents", desc: "Attend the document verification session with original agricultural certificates and revenue records." },
    { title: "Appear for Practical Test", desc: "If required by the university, appear for the Practical Test on agricultural knowledge and skills." },
    { title: "Rank Generation", desc: "Check your dedicated Agri Quota rank published by the examination authority." },
    { title: "Counselling Registration", desc: "Register for online counselling and select Alva's Institute of Agricultural Sciences as your preferred choice." },
    { title: "Seat Allotment", desc: "Upon allotment, report to the college with the allotment letter and all original documents." },
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
            <div className="adm-badge"><GraduationCap size={14} /> Admissions — Agri Quota</div>
            <h1 className="adm-title">Admission Through <span>Agri Quota</span></h1>
            <p className="adm-subtitle">
              Specialized admission pathway for students from agricultural backgrounds, dedicated to fostering the next generation of farming experts and agricultural scientists.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>Reserved</strong> Seats</div>
              <div className="adm-stat-pill"><strong>Farmer</strong> Background</div>
              <div className="adm-stat-pill"><strong>Special</strong> Ranks</div>
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
            <span><ChevronRight size={14} /></span><span className="adm-cur">Admission Through Agri Quota</span>
          </div>
        </nav>

        <div className="adm-body">
          <div className="adm-section">
            <h2 className="adm-heading">Eligibility Criteria</h2>
            <div className="adm-grid">
              {[
                { icon: <BookOpen />, title: "Academic Qualification", desc: "Passed 10+2 with Physics, Chemistry, and Biology/Mathematics. Minimum 50% for General and 45% for SC/ST/Cat-I." },
                { icon: <Star />, title: "Agricultural Background", desc: "Candidate or their parents/grandparents must own agricultural land and be actively involved in farming." },
                { icon: <FileText />, title: "Mandatory Certificates", desc: "Must possess a valid Agriculturalist Certificate (Form 1A) issued by the competent Revenue Authority." },
                { icon: <CheckSquare />, title: "Entrance Exam", desc: "Candidates must have appeared for the relevant State Entrance Test and opted for the Agri Quota category." },
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
            <h3>About Agri Quota</h3>
            <p>
              The Agriculturalist Quota (Agri Quota) is a reservation policy designed to provide opportunities for students from farming families to pursue higher education in agricultural sciences. This quota recognizes the practical knowledge and heritage of farming communities, ensuring they have a significant voice in modern agricultural innovation and policy-making.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionAgriQuota;
