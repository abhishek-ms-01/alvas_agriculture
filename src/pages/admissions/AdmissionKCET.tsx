import { Home, ChevronRight, GraduationCap, Clipboard, CheckSquare, BookOpen, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";

const AdmissionKCET = () => {
  const steps = [
    { title: "Register on KCET Portal", desc: "Visit the KEA (Karnataka Examinations Authority) website and complete online registration with all personal and academic details." },
    { title: "Fill Application Form", desc: "Accurately fill in the KCET application form including choice of subjects, examination centre, and category details." },
    { title: "Pay Application Fee", desc: "Submit the requisite fee online via net banking, credit/debit card or UPI. Keep the payment receipt safe." },
    { title: "Download Hall Ticket", desc: "Download and print your KCET hall ticket from the KEA portal. Carry it along with a valid photo ID to the exam centre." },
    { title: "Appear for KCET Exam", desc: "Attend the Karnataka Common Entrance Test. *Candidate seeking admission under Farmer’s Quota (50% reservation)* should clearly indicate the category in the application." },
    { title: "Practical Exam (Farmer's Quota)", desc: "Candidate Should Appear for Practical Exam For 200 Marks Conducted By FARM UNIVERSITIES OF KARNATAKA STATE. This is mandatory for claiming reservation under the agriculturalist quota." },
    { title: "Check Results & Counselling", desc: "Results are published on the KEA portal. Eligible candidates are called for centralised counselling for seat allotment based on their respective ranks." },
    { title: "Seat Allotment & Admission", desc: "After counselling, report to Alva's Institute of Agricultural Sciences & Technology with original documents and pay prescribed fees." },
  ];

  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        {/* Hero */}
        <PageHero
          badgeIcon={<GraduationCap size={14} />}
          badgeText="Admissions — KCET"
          title={<>ADMISSION THROUGH <span className="text-accent underline decoration-accent/30 underline-offset-8">KCET</span></>}
          subtitle="Secure your seat to a world-class Alvas Agricultural Education Institute through the Karnataka Common Entrance Test. Join Karnataka's premier agri-science institution."
          stats={[
            { bold: "60%", text: "Seats via KCET" },
            { bold: "Merit Based", text: "Allotment" },
            { bold: "Govt.", text: "Regulated Fees" },
          ]}
        />

        {/* Breadcrumb */}
        <nav className="adm-breadcrumb">
          <div className="adm-breadcrumb-inner">
            <Home size={14} /><a href="/">Home</a>
            <span><ChevronRight size={14} /></span><span>Admissions</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">Admission Through KCET</span>
          </div>
        </nav>

        {/* Body */}
        <div className="adm-body">
          {/* Eligibility */}
          <div className="adm-section">
            <h2 className="adm-heading">Admissions via KCET</h2>
            <div className="relative bg-gradient-to-r from-deep-green/10 via-accent/5 to-transparent border-l-4 border-accent rounded-2xl px-8 py-7 shadow-md">
              <p className="text-deep-green text-base md:text-lg leading-relaxed font-semibold">
                Admission to <span className="text-accent font-black">B.Sc. (Hons) Agriculture</span> and <span className="text-accent font-black">B.Tech. (Food Technology)</span> is primarily through the Karnataka Examination Authority (<span className="font-black">Karnataka Common Entrance Test (KCET)</span>). <span className="font-black">50%</span> of the seats are reserved for candidates from agriculturalist family under the <span className="text-accent font-black">Farmer's Quota</span>.
              </p>
            </div>
          </div>

          {/* Farmer's Quota Rank Consideration */}
          <div className="adm-section">
            <h2 className="adm-heading">Farmer's Quota Rank Consideration</h2>
            <div className="adm-info-box">
              <p className="font-black text-deep-green mb-4 text-sm uppercase tracking-wider">CONSIDERATION OF MARKS FOR DECLARING RANK UNDER FARMER’S QUOTA BY KCET:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/50 p-4 rounded-xl border border-accent/20 text-center">
                  <div className="text-2xl font-black text-accent mb-1">25%</div>
                  <div className="text-xs uppercase tracking-widest font-bold">PCMB Marks</div>
                </div>
                <div className="bg-white/50 p-4 rounded-xl border border-accent/20 text-center">
                  <div className="text-2xl font-black text-accent mb-1">25%</div>
                  <div className="text-xs uppercase tracking-widest font-bold">KCET Score</div>
                </div>
                <div className="bg-white/50 p-4 rounded-xl border border-accent/20 text-center">
                  <div className="text-2xl font-black text-accent mb-1">50%</div>
                  <div className="text-xs uppercase tracking-widest font-bold">Practical Marks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
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

          {/* Note */}
          <div className="adm-info-box">
            <h3>Important Note</h3>
            <p>
              All admissions under KCET quota are subject to KEA regulations and seat matrix released each year. The college reserves the right to verify all documents and may cancel admission if any discrepancy is found. For latest cut-off ranks and seat availability, please contact the admissions office or visit the official KEA portal.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionKCET;
