import { Home, ChevronRight, Eye, FileText, Clock, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../admissions/Admissions.css";

const RTI = () => {
  const officers = [
    { role: "First Appellate Authority", name: "Dr. Vasudev", designation: "Dean, Agriculture", email: "dean@alvas.ac.in", phone: "+91-824-2277285" },
    { role: "Public Information Officer (PIO)", name: "Administrative Officer", designation: "Admin Department", email: "rti@alvas.ac.in", phone: "+91-824-2277286" },
    { role: "Assistant PIO", name: "Office Superintendent", designation: "Administrative Section", email: "admin@alvas.ac.in", phone: "+91-824-2277287" },
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
            <div className="adm-badge"><Eye size={14} /> Mandatory Disclosure</div>
            <h1 className="adm-title">Right to <span>Information (RTI)</span></h1>
            <p className="adm-subtitle">
              In compliance with the Right to Information Act, 2005, Alva's Institute of Agricultural Science & Technology proactively discloses institutional information to promote transparency and accountability.
            </p>
            <div className="adm-stat-row">
              <div className="adm-stat-pill"><strong>RTI Act, 2005</strong></div>
              <div className="adm-stat-pill"><strong>30-Day</strong> Response Norm</div>
              <div className="adm-stat-pill"><strong>Online</strong> Application</div>
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
            <span><ChevronRight size={14} /></span><span>About</span>
            <span><ChevronRight size={14} /></span><span>Mandatory Disclosure</span>
            <span><ChevronRight size={14} /></span><span className="adm-cur">RTI</span>
          </div>
        </nav>

        <div className="adm-body">
          {/* About RTI */}
          <div className="adm-section">
            <h2 className="adm-heading">About RTI Act, 2005</h2>
            <div className="adm-info-box">
              <h3>The Right to Information Act, 2005</h3>
              <p>
                The Right to Information (RTI) Act, 2005, empowers every citizen of India to seek information from public authorities. As an institution receiving grants and operating under government affiliation, Alva's Institute is a public authority bound by the provisions of the RTI Act. Citizens can file RTI applications to obtain information about the institution's administration, finances, academic records (non-personal), and other public-interest matters.
              </p>
            </div>
          </div>

          {/* PIO Officers */}
          <div className="adm-section">
            <h2 className="adm-heading">RTI Officials</h2>
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Designation</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {officers.map((o, i) => (
                    <tr key={i}>
                      <td>{o.role}</td>
                      <td>{o.name}</td>
                      <td>{o.designation}</td>
                      <td>{o.email}</td>
                      <td>{o.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* How to apply */}
          <div className="adm-section">
            <h2 className="adm-heading">How to File an RTI Application</h2>
            <div className="adm-steps">
              {[
                { title: "Draft Your Application", desc: "Write a clear, specific application stating exactly what information you need. The application must include your name, address, and contact details. No reason for seeking information is required." },
                { title: "Pay Application Fee", desc: "Attach an application fee of ₹10 (by postal order, DD, or court fee stamp). BPL card holders are exempt from fee payment." },
                { title: "Submit Application", desc: "Send the application by post or email to the PIO at: rti@alvas.ac.in or Alva's Institute of Agricultural Science & Technology, Moodbidri – 574 227, D.K., Karnataka." },
                { title: "Receive Response", desc: "The PIO is obligated to respond within 30 days. If information pertains to life or liberty, response must be within 48 hours." },
                { title: "File Appeal (If Needed)", desc: "If unsatisfied with the response, file a First Appeal to the First Appellate Authority (Dean) within 30 days. A Second Appeal may be filed with the State Information Commission." },
              ].map((s, i) => (
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

          {/* Proactive disclosure */}
          <div className="adm-section">
            <h2 className="adm-heading">Proactive Disclosure (Section 4)</h2>
            <div className="adm-grid">
              {[
                { icon: <FileText />, title: "Institutional Information", desc: "Structure, functions, duties of officers, decision-making processes, and norms set for discharging functions." },
                { icon: <Clock />, title: "Annual Reports", desc: "Annual reports, financial statements, audit reports, and budget allocations available for public inspection." },
                { icon: <Eye />, title: "Academic Information", desc: "Number of students programme-wise, faculty details, courses offered, examination schedules, and fee structure." },
                { icon: <Mail />, title: "Grievance Mechanism", desc: "Mechanism available for citizens to submit complaints and grievances related to institutional functioning." },
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RTI;
