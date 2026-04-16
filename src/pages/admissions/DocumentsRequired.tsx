import { Home, ChevronRight, FolderOpen, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";

const DocumentsRequired = () => {
  const primaryDocs = [
    "10th Standard (SSLC) Mark Sheet & Certificate",
    "11th Standard Mark Sheet",
    "12th Standard (PUC/HSC) Mark Sheet & Passing Certificate",
    "Transfer Certificate (TC) from last attended institution",
    "Conduct Certificate from last attended institution",
    "KCET / Farmer's Quota Rank Card (as applicable)",
    "Allotment Letter issued by KEA / Competent Authority",
    "Agriculturalist Certificate (Form 1A) for Farmer's Quota seats",
    "Migration Certificate (for students from boards other than Karnataka)",
    "Study Certificate (Years 1 to 12)",
  ];

  const idDocs = [
    "Aadhaar Card (mandatory)",
    "Passport size photographs — 6 copies (recent, white background)",
    "Caste / Category Certificate issued by competent authority (if applicable)",
    "Income Certificate (for income-based scholarship eligibility)",
    "Domicile / Residence Certificate (if applicable)",
    "PAN Card of parent/guardian (for fee payment records)",
  ];

  const additionalDocs = [
    "NCC / NSS Certificate (for extra-curricular weightage, if any)",
    "Sports Certificate from District/State level body (if applicable)",
    "Physically Handicapped Certificate (for PH quota, if applicable)",
    "Gap Year Affidavit (if gap exists after 12th standard)",
    "Anti-Ragging Affidavit (mandatory — to be submitted at college)",
  ];

  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <PageHero
          badgeIcon={<FolderOpen size={14} />}
          badgeText="Admissions — Documents"
          title={<>Documents <span className="text-accent">Required</span></>}
          subtitle="Ensure you have all required documents ready before reporting to the college. Original documents along with self-attested photocopies are mandatory."
          stats={[
            { bold: "Originals", text: "+ Photocopies" },
            { bold: "Self-Attested", text: "Copies" },
            { bold: "Checklist", text: "Below" },
          ]}
        />

        <nav className="adm-breadcrumb">
          <div className="adm-breadcrumb-inner">
            <Home size={14} /><a href="/">Home</a>
            <span><ChevronRight size={14} /></span><span>Admissions</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">Documents Required</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* Primary Docs */}
          <div className="adm-section">
            <h2 className="adm-heading">Academic Documents</h2>
            <ul className="adm-checklist">
              {primaryDocs.map((doc, i) => (
                <li key={i}>
                  <span className="adm-check-icon"><Check size={14} /></span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* ID Docs */}
          <div className="adm-section">
            <h2 className="adm-heading">Identity & Personal Documents</h2>
            <ul className="adm-checklist">
              {idDocs.map((doc, i) => (
                <li key={i}>
                  <span className="adm-check-icon"><Check size={14} /></span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional */}
          <div className="adm-section">
            <h2 className="adm-heading">Additional Documents (If Applicable)</h2>
            <ul className="adm-checklist">
              {additionalDocs.map((doc, i) => (
                <li key={i}>
                  <span className="adm-check-icon"><Check size={14} /></span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          <div className="adm-info-box">
            <h3>Important Instructions</h3>
            <p>
              Please carry <strong>original documents and 3 sets of self-attested photocopies</strong> when reporting to the college. Documents found to be forged or tampered will result in immediate cancellation of admission and legal proceedings. The college is not responsible for any documents misplaced after submission. Keep a personal set of copies at home.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentsRequired;
