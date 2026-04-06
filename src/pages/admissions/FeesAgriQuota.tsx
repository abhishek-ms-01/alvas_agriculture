import { Home, ChevronRight, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const FeesAgriQuota = () => {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <div className="adm-hero">
          <div className="adm-blob adm-blob-1" />
          <div className="adm-blob adm-blob-2" />
          <div className="adm-hero-content">
            <div className="adm-badge"><DollarSign size={14} /> Fees — Agri Quota Students</div>
            <h1 className="adm-title">Fee Structure — <span>Agri Quota Students</span></h1>
            <p className="adm-subtitle">
              Fee structure for students admitted through the Agriculturalist Quota. Fees are subsidised to support students from farming backgrounds in line with state education policies.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>Subsidised</strong> Fee</div>
              <div className="adm-stat-pill"><strong>Annual</strong> Payment</div>
              <div className="adm-stat-pill"><strong>Scholarship</strong> Eligible</div>
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
            <span><ChevronRight size={14} /></span><span>Fees Structures</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">Agri Quota Students</span>
          </div>
        </nav>

        <div className="adm-body">
          <div className="adm-section">
            <h2 className="adm-heading">Annual Fee Breakup — B.Sc. Agriculture (Agri Quota)</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Fee Component</th>
                    <th>Year 1 (₹)</th>
                    <th>Year 2 (₹)</th>
                    <th>Year 3 (₹)</th>
                    <th>Year 4 (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Tuition Fee</td><td>45,000</td><td>45,000</td><td>45,000</td><td>45,000</td></tr>
                  <tr><td>Development Fee</td><td>5,000</td><td>5,000</td><td>5,000</td><td>5,000</td></tr>
                  <tr><td>Laboratory Charges</td><td>4,000</td><td>4,000</td><td>4,000</td><td>4,000</td></tr>
                  <tr><td>Library Fee</td><td>1,500</td><td>1,500</td><td>1,500</td><td>1,500</td></tr>
                  <tr><td>Sports & Cultural</td><td>1,000</td><td>1,000</td><td>1,000</td><td>1,000</td></tr>
                  <tr><td>Examination Fee</td><td>2,000</td><td>2,000</td><td>2,000</td><td>2,000</td></tr>
                  <tr><td>University Fee</td><td>3,500</td><td>3,500</td><td>3,500</td><td>3,500</td></tr>
                </tbody>
                <tfoot>
                  <tr><td colSpan={1}>Total (per year)</td><td>₹62,000</td><td>₹62,000</td><td>₹62,000</td><td>₹62,000</td></tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="adm-section">
            <h2 className="adm-heading">Hostel & Mess Charges (Optional)</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Amount (₹ per year)</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Hostel Fee (Non-AC Room — 3 sharing)</td><td>36,000</td><td>Including electricity</td></tr>
                  <tr><td>Mess Charges</td><td>42,000</td><td>Vegetarian meals</td></tr>
                  <tr><td>Hostel Security Deposit (Refundable)</td><td>5,000</td><td>One-time payment</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="adm-info-box">
            <h3>Scholarship & Payment Policy</h3>
            <p>
              Agri Quota students are eligible for various state and central government scholarships for children of farmers. Fees can be paid in two instalments each year. All payments should be made through the student portal or via bank transfer. We encourage students to apply for 'Vidyasiri' and other merit-cum-means scholarships.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeesAgriQuota;
