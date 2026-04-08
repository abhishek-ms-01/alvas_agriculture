import { Home, ChevronRight, Award, Star, BookOpen, Users, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";

const ScholarshipsList = () => {
  const schemes = [
    {
      name: "Post-Matric Scholarship (SC/ST)",
      amount: "Up to ₹15,000/year",
      provider: "Government of Karnataka",
      eligibility: "SC/ST students with family income below ₹2.5 lakh/year",
      desc: "Full tuition fee support and maintenance allowance for SC/ST students pursuing professional education.",
    },
    {
      name: "OBC Scholarship",
      amount: "Up to ₹8,000/year",
      provider: "Government of Karnataka",
      eligibility: "OBC students with family income below ₹1.5 lakh/year",
      desc: "Scholarships for students belonging to Other Backward Classes to support professional course enrollment.",
    },
    {
      name: "Merit-cum-Means Scholarship",
      amount: "Up to ₹20,000/year",
      provider: "AICTE / UGC",
      eligibility: "Students with 85%+ in 12th and family income below ₹4.5 lakh/year",
      desc: "National level scholarship combining merit and financial need criteria for deserving students.",
    },
    {
      name: "Prime Minister's Scholarship",
      amount: "₹25,000/year (boys) / ₹30,000/year (girls)",
      provider: "Ministry of Home Affairs, GOI",
      eligibility: "Wards and widows of ex-servicemen",
      desc: "Awarded to dependants of armed forces personnel pursuing professional courses.",
    },
    {
      name: "National Scholarship Portal (NSP) Schemes",
      amount: "Variable by scheme",
      provider: "Government of India",
      eligibility: "Varies by individual scheme; apply on NSP portal",
      desc: "Multiple centrally sponsored scholarships available on the National Scholarship Portal for eligible students.",
    },
    {
      name: "Alva's Institutional Merit Scholarship",
      amount: "Up to 20% fee waiver",
      provider: "Alva's Education Foundation",
      eligibility: "Students with 90%+ in qualifying exam",
      desc: "Institutional scholarship recognising academic excellence. Awarded at the time of admission.",
    },
    {
      name: "Minority Scholarship",
      amount: "Up to ₹10,000/year",
      provider: "Ministry of Minority Affairs, GOI",
      eligibility: "Muslim, Christian, Sikh, Buddhist, Jain, Zoroastrian students with income below ₹2 lakh",
      desc: "Pre-matric and post-matric scholarships for minority community students pursuing professional education.",
    },
    {
      name: "Inspire Scholarship (SHE)",
      amount: "₹80,000/year",
      provider: "Department of Science & Technology, GOI",
      eligibility: "Top 1% in 12th board + pursuing BSc in science including Agriculture",
      desc: "Scholarship for Higher Education (SHE) under INSPIRE programme for science students.",
    },
  ];

  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <PageHero
          badgeIcon={<Award size={14} />}
          badgeText="Scholarships"
          title={<>List of <span className="text-accent">Scholarship Schemes</span></>}
          subtitle="Explore the wide range of scholarships available to students of Alva's Institute of Agricultural Science & Technology — from government schemes to institutional awards."
          stats={[
            { bold: "8+", text: "Scholarship Schemes" },
            "Govt. & Institutional",
            { bold: "₹80K+", text: "Max Award" },
          ]}
        />

        <nav className="adm-breadcrumb">
          <div className="adm-breadcrumb-inner">
            <Home size={14} /><a href="/">Home</a>
            <span><ChevronRight size={14} /></span><span>Admissions</span>
            <span><ChevronRight size={14} /></span><span>Scholarships</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">List of Scholarship Schemes</span>
          </div>
        </nav>

        <div className="adm-body">
          <div className="adm-section">
            <h2 className="adm-heading">Available Scholarship Schemes</h2>
            <div className="adm-scholarship-grid">
              {schemes.map((s, i) => (
                <div key={i} className="adm-scholarship-card">
                  <div className="adm-tag">{s.provider}</div>
                  <h3>{s.name}</h3>
                  <div className="adm-scholarship-amount">{s.amount}</div>
                  <p>{s.desc}</p>
                  <div className="adm-scholarship-eligibility">
                    Eligibility: {s.eligibility}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="adm-info-box">
            <h3>How to Apply for Scholarships</h3>
            <p>
              Most government scholarships are applied through the <strong>National Scholarship Portal (scholarships.gov.in)</strong> or the <strong>Karnataka Scholarship Portal (karepass.cgg.gov.in)</strong>. Applications open typically in September–November each year. Students should register early, upload required documents, and get institute verification done within the deadline. Contact the scholarship cell at the college for guidance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScholarshipsList;
