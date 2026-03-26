import { Home, ChevronRight, Briefcase, TrendingUp, BarChart, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../admissions/Admissions.css";

const MBA = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
      <div className="adm-hero">
        <div className="adm-blob adm-blob-1"/><div className="adm-blob adm-blob-2"/>
        <div className="adm-hero-content">
          <div className="adm-badge"><Briefcase size={14}/> PG Programme</div>
          <h1 className="adm-title">MBA <span>Programme</span></h1>
          <p className="adm-subtitle">A 2-year MBA with specialisation in Agri-Business Management — designed to develop leaders who can manage agricultural supply chains, agri-enterprises, rural markets, and food processing businesses with strategic vision.</p>
          <div className="adm-stat-row">
            <div className="adm-stat-pill"><strong>2 Years</strong> Duration</div>
            <div className="adm-stat-pill"><strong>60</strong> Seats</div>
            <div className="adm-stat-pill"><strong>PGCET</strong> Entry</div>
          </div>
        </div>
        <div className="adm-wave"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/></svg></div>
      </div>
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span>PG Programmes</span><span><ChevronRight size={14}/></span><span className="adm-cur">MBA</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Programme Overview</h2>
          <div className="adm-info-box"><h3>MBA — Agri-Business Management</h3><p>The MBA (Agri-Business Management) is a full-time, 2-year postgraduate programme affiliated to UAS Dharwad. The programme bridges agricultural science with modern business management, preparing graduates to manage farm enterprises, agricultural cooperatives, commodity trading, rural banking, FPOs (Farmer Producer Organisations), and food processing companies. The curriculum combines core MBA subjects with agri-specific electives and live industry projects.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Specialisation Areas</h2>
          <div className="adm-grid">
            {[
              {icon:<Briefcase/>, title:"Agri-Business Management", desc:"Supply chain management, cold chain logistics, commodity markets, agri-finance, contract farming, and farm enterprise management."},
              {icon:<TrendingUp/>, title:"Rural Marketing", desc:"Marketing of agricultural inputs and outputs, brand management for agri-products, e-commerce in agriculture, FPO management."},
              {icon:<BarChart/>, title:"Agri Finance & Banking", desc:"Agricultural credit flow, NABARD schemes, crop insurance, microfinance for rural SMEs, and farm loan management."},
              {icon:<Users/>, title:"Human Resource Management", desc:"HR practices in agri-firms, cooperative management, labour welfare in rural enterprises, and leadership development."},
            ].map((item,i)=>(<div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Curriculum (Semester-wise)</h2>
          <div className="adm-table-wrap"><table className="adm-table"><thead><tr><th>Semester</th><th>Key Subjects</th></tr></thead><tbody>
            <tr><td>Semester 1</td><td>Managerial Economics, Financial Accounting, Agri-Business Environment, Quantitative Methods, Business Communication</td></tr>
            <tr><td>Semester 2</td><td>Marketing Management, Human Resource Mgmt., Financial Management, Supply Chain, Rural Development</td></tr>
            <tr><td>Semester 3</td><td>Commodity Markets, Agri-Finance, Enterprise Management, Electives, Summer Internship Report</td></tr>
            <tr><td>Semester 4</td><td>Strategic Management, Research Project, Business Plan, Industry Internship</td></tr>
          </tbody></table></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Career Paths</h2>
          <div className="adm-steps">
            {[
              {title:"Agri-Business Manager", desc:"Lead operations at agri-input companies (Bayer, Syngenta, IFFCO), commodity exchanges, and food processing MNCs."},
              {title:"Rural Banking — NABARD / RBI", desc:"Officers in agricultural banking, NABARD project officers, RBI Grade B positions in rural credit."},
              {title:"FPO & Cooperative Management", desc:"CEO/Manager of Farmer Producer Organisations, cooperative dairies, sugar factories, and cotton cooperatives."},
              {title:"AgriTech Ventures", desc:"Product Manager or Business Development Officer at agri-tech startups building digital solutions for farmers."},
            ].map((s,i)=>(<div key={i} className="adm-step"><div className="adm-step-num">{i+1}</div><div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div></div>))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MBA;
