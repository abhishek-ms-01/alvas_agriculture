import { Home, ChevronRight, Monitor, Code, Server, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../admissions/Admissions.css";

const CSEngineering = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
      <div className="adm-hero">
        <div className="adm-blob adm-blob-1"/><div className="adm-blob adm-blob-2"/>
        <div className="adm-hero-content">
          <div className="adm-badge"><Monitor size={14}/> UG Programme</div>
          <h1 className="adm-title">Computer Science <span>&amp; Engineering</span></h1>
          <p className="adm-subtitle">A 4-year B.E. programme covering algorithms, software development, computer networks, databases, and emerging technologies — tailored to develop industry-ready software engineers with a focus on agri-tech solutions.</p>
          <div className="adm-stat-row">
            <div className="adm-stat-pill"><strong>4 Years</strong> Duration</div>
            <div className="adm-stat-pill"><strong>120</strong> Seats</div>
            <div className="adm-stat-pill"><strong>Industry</strong> Partnerships</div>
          </div>
        </div>
        <div className="adm-wave"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/></svg></div>
      </div>
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span className="adm-cur">CS &amp; Engineering</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Programme Overview</h2>
          <div className="adm-info-box"><h3>About the Programme</h3><p>The B.E. in Computer Science & Engineering is one of the most sought-after programmes, offering rigorous training in software engineering, data structures, system design, and computer networks. The curriculum at Alva's is enhanced with agri-tech integration modules where students build real applications — from mobile-based crop advisory systems to supply chain management platforms and government e-agriculture portals.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Core Specialisations</h2>
          <div className="adm-grid">
            {[
              {icon:<Code/>, title:"Software Engineering", desc:"Full-stack development using React, Node.js, Django, and cloud platforms. Build production-ready web and mobile applications."},
              {icon:<Server/>, title:"Cloud & DevOps", desc:"AWS, Azure, and GCP cloud infrastructure, containerisation with Docker/Kubernetes, CI/CD pipelines."},
              {icon:<Shield/>, title:"Cybersecurity", desc:"Network security, ethical hacking, cryptography, and security auditing for digital agricultural infrastructure."},
              {icon:<Monitor/>, title:"AgriTech Software", desc:"GIS-based farming apps, e-mandi platforms, crop monitoring dashboards, and IoT device integration."},
            ].map((item,i)=>(<div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Curriculum Snapshot</h2>
          <div className="adm-table-wrap"><table className="adm-table"><thead><tr><th>Year</th><th>Key Subjects</th></tr></thead><tbody>
            <tr><td>Year 1</td><td>C Programming, Engineering Maths, Digital Electronics, Environmental Science, Communication Skills</td></tr>
            <tr><td>Year 2</td><td>Data Structures, OOP with Java, DBMS, Operating Systems, Computer Networks</td></tr>
            <tr><td>Year 3</td><td>Web Technologies, Cloud Computing, AI Fundamentals, Software Engineering, Mini Project</td></tr>
            <tr><td>Year 4</td><td>Machine Learning, Capstone Project, Industry Internship, Open Electives</td></tr>
          </tbody></table></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Career Opportunities</h2>
          <div className="adm-steps">
            {[
              {title:"Software Developer / Engineer", desc:"Join top IT companies, product firms, and startups as a frontend, backend, or full-stack developer."},
              {title:"AgriTech Product Companies", desc:"Build digital tools for companies like DeHaat, AgroStar, Ninjacart, and IFFCO Kisan."},
              {title:"Government IT Services", desc:"Work with National Informatics Centre (NIC) and state e-governance departments on agricultural digital infrastructure."},
              {title:"Higher Studies", desc:"Pursue M.Tech, MCA, or MBA in IT/Data Science at top institutes including NITs and IITs."},
            ].map((s,i)=>(<div key={i} className="adm-step"><div className="adm-step-num">{i+1}</div><div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div></div>))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CSEngineering;
