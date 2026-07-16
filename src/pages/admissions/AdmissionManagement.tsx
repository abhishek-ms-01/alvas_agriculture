import { Home, ChevronRight, Users, FileText, Phone, CheckSquare, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";

const AdmissionManagement = () => {
  const steps = [
    { title: "Contact Admissions Office", desc: "Reach out to Alva's admissions team via phone, email, or in-person visit to enquire about available management quota seats." },
    { title: "Submit Application", desc: "Fill and submit the institutional application form along with attested copies of all required academic documents." },
    { title: "Document Verification", desc: "The admissions committee will verify all submitted documents including 10+2 mark sheets, transfer certificate, and eligibility criteria." },
    { title: "Merit List & Shortlisting", desc: "Shortlisted candidates are selected based on academic merit, extracurricular achievements, and interview performance (if applicable)." },
    { title: "Offer of Admission", desc: "Selected candidates receive an official offer letter from the institution specifying the programme, fees, and joining date." },
    { title: "Fee Payment & Confirmation", desc: "Confirm your seat by paying the management quota fees within the stipulated time. Delay may result in forfeiture of the offer." },
    { title: "Reporting & Enrolment", desc: "Report to the college on the designated date with all original documents for formal enrolment and hostel allocation." },
  ];

  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <PageHero
          badgeIcon={<Users size={14} />}
          badgeText="Admissions — Management Quota"
          title={<>ADMISSION THROUGH <span className="text-accent underline decoration-accent/30 underline-offset-8">MANAGEMENT</span></>}
          subtitle="Admission through Management Quota at Alva's Institute of Agricultural Sciences & Technology is same as per KCET ranking, ensuring merit-based selection for all aspiring students."
          stats={[
            { bold: "40%", text: "Management Seats" },
            { bold: "KCET Rank", text: "Based Merit" },
            { bold: "Direct", text: "Application" },
          ]}
        />

        <nav className="adm-breadcrumb">
          <div className="adm-breadcrumb-inner">
            <Home size={14} /><a href="/">Home</a>
            <span><ChevronRight size={14} /></span><span>Admissions</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">Admission Through Management</span>
          </div>
        </nav>

        <div className="adm-body">


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
