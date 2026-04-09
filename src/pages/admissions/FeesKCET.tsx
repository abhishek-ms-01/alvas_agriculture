import { Home, ChevronRight, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";

const FeesKCET = () => {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <PageHero
          badgeIcon={<DollarSign size={14} />}
          badgeText="Fees — KCET Students"
          title={<>Fee Structure — <span className="text-accent">KCET Students</span></>}
          subtitle="KCET category fees are regulated by the Karnataka government and the Karnataka Examinations Authority. Below is the detailed fee structure for students admitted through KCET."
          stats={[
            { bold: "Govt.", text: "Regulated" },
            { bold: "Annual", text: "Payment" },
            { bold: "Scholarship", text: "Eligible" },
          ]}
        />

        <nav className="adm-breadcrumb">
          <div className="adm-breadcrumb-inner">
            <Home size={14} /><a href="/">Home</a>
            <span><ChevronRight size={14} /></span><span>Admissions</span>
            <span><ChevronRight size={14} /></span><span>Fees Structures</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">KCET Students</span>
          </div>
        </nav>

        <div className="adm-body">
          <div className="adm-section">
            <h2 className="adm-heading">Annual Fee Breakup — B.Sc. Agriculture (KCET)</h2>
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
                  <tr><td>Tuition Fee</td><td>25,000</td><td>25,000</td><td>25,000</td><td>25,000</td></tr>
                  <tr><td>Development Fee</td><td>5,000</td><td>5,000</td><td>5,000</td><td>5,000</td></tr>
                  <tr><td>Laboratory Charges</td><td>4,500</td><td>4,500</td><td>4,500</td><td>4,500</td></tr>
                  <tr><td>Library Fee</td><td>1,500</td><td>1,500</td><td>1,500</td><td>1,500</td></tr>
                  <tr><td>Sports & Cultural</td><td>1,000</td><td>1,000</td><td>1,000</td><td>1,000</td></tr>
                  <tr><td>Examination Fee</td><td>2,000</td><td>2,000</td><td>2,000</td><td>2,000</td></tr>
                  <tr><td>University Fee</td><td>3,500</td><td>3,500</td><td>3,500</td><td>3,500</td></tr>
                </tbody>
                <tfoot>
                  <tr><td colSpan={1}>Total (per year)</td><td>₹42,500</td><td>₹42,500</td><td>₹42,500</td><td>₹42,500</td></tr>
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
                  <tr><td>Hostel Fee (AC Room — 2 sharing)</td><td>50,000</td><td>Including electricity</td></tr>
                  <tr><td>Hostel Fee (Non-AC Room — 3 sharing)</td><td>36,000</td><td>Including electricity</td></tr>
                  <tr><td>Mess Charges</td><td>42,000</td><td>Vegetarian meals</td></tr>
                  <tr><td>Hostel Security Deposit (Refundable)</td><td>5,000</td><td>One-time payment</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="adm-info-box">
            <h3>Note on Fees</h3>
            <p>
              KCET category fees are fixed by the Karnataka government and are subject to revision each academic year. The fee figures above are indicative for the current batch. Students admitted through KCET are eligible for various state scholarships including post-matric scholarship, SC/ST scholarships, and merit-cum-means scholarships. Please contact the accounts office for the latest fee notification.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeesKCET;
