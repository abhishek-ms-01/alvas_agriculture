import { Home, ChevronRight, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";

const FeesManagement = () => {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <PageHero
          badgeIcon={<DollarSign size={14} />}
          badgeText="Fees — Management Quota"
          title={<>Fee Structure — <span className="text-accent">Management</span></>}
          subtitle="Fee structure for students admitted under the Management Quota at Alva's Institute of Agricultural Science & Technology. These fees are set by the institutional management committee."
          stats={[
            { bold: "Institutional", text: "Fees" },
            { bold: "Flexible", text: "Instalments" },
            { bold: "Merit", text: "Discounts Available" },
          ]}
        />

        <nav className="adm-breadcrumb">
          <div className="adm-breadcrumb-inner">
            <Home size={14} /><a href="/">Home</a>
            <span><ChevronRight size={14} /></span><span>Admissions</span>
            <span><ChevronRight size={14} /></span><span>Fees Structures</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">Management</span>
          </div>
        </nav>

        <div className="adm-body">
          <div className="adm-section">
            <h2 className="adm-heading">Annual Fee Breakup — B.Sc. Agriculture (Management)</h2>
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
                  <tr><td>Tuition Fee</td><td>85,000</td><td>85,000</td><td>85,000</td><td>85,000</td></tr>
                  <tr><td>Development Fee</td><td>12,000</td><td>12,000</td><td>12,000</td><td>12,000</td></tr>
                  <tr><td>Laboratory Charges</td><td>6,000</td><td>6,000</td><td>6,000</td><td>6,000</td></tr>
                  <tr><td>Library Fee</td><td>2,500</td><td>2,500</td><td>2,500</td><td>2,500</td></tr>
                  <tr><td>Sports & Cultural</td><td>2,000</td><td>2,000</td><td>2,000</td><td>2,000</td></tr>
                  <tr><td>Examination Fee</td><td>2,500</td><td>2,500</td><td>2,500</td><td>2,500</td></tr>
                  <tr><td>University Fee</td><td>3,500</td><td>3,500</td><td>3,500</td><td>3,500</td></tr>
                </tbody>
                <tfoot>
                  <tr><td colSpan={1}>Total (per year)</td><td>₹1,13,500</td><td>₹1,13,500</td><td>₹1,13,500</td><td>₹1,13,500</td></tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="adm-section">
            <h2 className="adm-heading">Merit-Based Fee Concessions</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>12th Marks Criteria</th>
                    <th>Concession</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Top Merit</td><td>90% and above</td><td>20% on Tuition Fee</td></tr>
                  <tr><td>High Merit</td><td>85% – 89.99%</td><td>15% on Tuition Fee</td></tr>
                  <tr><td>Good Merit</td><td>80% – 84.99%</td><td>10% on Tuition Fee</td></tr>
                  <tr><td>Alumni Children</td><td>Any Percentage</td><td>5% on Tuition Fee</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="adm-info-box">
            <h3>Important Note on Management Fees</h3>
            <p>
              Management quota fees are subject to revision by the Fee Fixation Committee of the Government of Karnataka. All concession claims must be supported by relevant mark sheets and verified at the time of admission. Concessions are available only on tuition fee and not on other charges. For detailed discussions and personalised fee planning, please contact the management directly.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeesManagement;
