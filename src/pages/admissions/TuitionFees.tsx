import { Home, ChevronRight, DollarSign, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const TuitionFees = () => {
  return (
    <div className="adm-page">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>
        <div className="adm-hero">
          <div className="adm-blob adm-blob-1" />
          <div className="adm-blob adm-blob-2" />
          <div className="adm-hero-content">
            <div className="adm-badge"><DollarSign size={14} /> Fees — 2025–26</div>
            <h1 className="adm-title">Tuition Fees <span>2025–26</span></h1>
            <p className="adm-subtitle">
              Comprehensive tuition fee structure for the academic year 2025–2026 across all admission categories. All figures are in Indian Rupees (₹) per annum.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>AY 2025–26</strong></div>
              <div className="adm-stat-pill"><strong>All Categories</strong></div>
              <div className="adm-stat-pill"><strong>UAS Dharwad</strong> Affiliated</div>
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
            <span><ChevronRight size={14} /></span><span className="adm-cur">Tuition Fees 2025–26</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* Consolidated fee table */}
          <div className="adm-section">
            <h2 className="adm-heading">Consolidated Fee Structure — 2025–26</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Fee Component</th>
                    <th>KCET (₹)</th>
                    <th>Agri Quota (₹)</th>
                    <th>Management (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Tuition Fee</td><td>25,000</td><td>45,000</td><td>85,000</td></tr>
                  <tr><td>Development Fee</td><td>5,000</td><td>5,000</td><td>12,000</td></tr>
                  <tr><td>Laboratory Charges</td><td>4,500</td><td>4,000</td><td>6,000</td></tr>
                  <tr><td>Library Fee</td><td>1,500</td><td>1,500</td><td>2,500</td></tr>
                  <tr><td>Sports & Cultural</td><td>1,000</td><td>1,000</td><td>2,000</td></tr>
                  <tr><td>Examination Fee</td><td>2,000</td><td>2,000</td><td>2,500</td></tr>
                  <tr><td>University Fee</td><td>3,500</td><td>3,500</td><td>3,500</td></tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total (per annum)</td>
                    <td>₹42,500</td>
                    <td>₹62,000</td>
                    <td>₹1,13,500</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Hostel fees */}
          <div className="adm-section">
            <h2 className="adm-heading">Hostel & Mess Charges — 2025–26</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Facility</th>
                    <th>Annual Amount (₹)</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Hostel (AC Double Sharing)</td><td>50,000</td><td>Electricity included</td></tr>
                  <tr><td>Hostel (Non-AC Triple Sharing)</td><td>36,000</td><td>Electricity included</td></tr>
                  <tr><td>Mess Charges</td><td>42,000</td><td>3 meals per day, veg</td></tr>
                  <tr><td>Hostel Caution Deposit</td><td>5,000</td><td>Refundable on exit</td></tr>
                  <tr><td>Laundry (optional)</td><td>4,800</td><td>Monthly subscription</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Other charges */}
          <div className="adm-section">
            <h2 className="adm-heading">Other One-Time Charges (First Year Only)</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Admission Processing Fee</td><td>2,000</td></tr>
                  <tr><td>Identity Card</td><td>200</td></tr>
                  <tr><td>Library Caution Deposit (Refundable)</td><td>1,000</td></tr>
                  <tr><td>Student Activity Fund</td><td>500</td></tr>
                </tbody>
                <tfoot>
                  <tr><td>Total One-Time</td><td>₹3,700</td></tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="adm-info-box">
            <h3><Info size={16} style={{display:'inline', marginRight:'6px'}} />Disclaimer on Fee Figures</h3>
            <p>
              The fee figures mentioned above are applicable for the academic year 2025–26 and are subject to revision by the Fee Fixation Committee of the Government of Karnataka and directives from UAS Dharwad. Fees once paid are non-refundable except as per UGC refund policy. For exact and confirmed fee details, please contact the accounts office at the time of admission.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TuitionFees;
