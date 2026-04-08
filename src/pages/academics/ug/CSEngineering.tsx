import { Home, ChevronRight, Monitor, Code, Server, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../../admissions/Admissions.css";

const CSEngineering = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
        <PageHero
          badgeIcon={<Monitor size={14} />}
          badgeText="UG Programme"
          title={<>Computer Science <span className="text-accent">&amp; Engineering</span></>}
          subtitle="A 4-year B.E. programme covering algorithms, software development, computer networks, databases, and emerging technologies — tailored to develop industry-ready software engineers with a focus on agri-tech solutions."
          stats={[
            { bold: "4 Years", text: "Duration" },
            { bold: "120", text: "Seats" },
            { bold: "Industry", text: "Partnerships" },
          ]}
        />
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
