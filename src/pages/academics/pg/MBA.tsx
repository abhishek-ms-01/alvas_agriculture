import { Home, ChevronRight, Briefcase, BarChart2, Globe, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../../admissions/Admissions.css";

const MBA = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
        <PageHero
          badgeIcon={<Briefcase size={14} />}
          badgeText="PG Programme"
          title={<>Master of Business <span className="text-accent">Administration</span></>}
          subtitle="A 2-year MBA programme specialising in Agribusiness Management — developing strategic leaders equipped to manage agricultural value chains, rural markets, and food industry enterprises."
          stats={[
            { bold: "2 Years", text: "Duration" },
            { bold: "60", text: "Seats" },
            { bold: "Industry", text: "Aligned" },
          ]}
        />
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span className="adm-cur">MBA</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Programme Overview</h2>
          <div className="adm-info-box"><h3>About the Programme</h3><p>The MBA in Agribusiness Management at Alva's Institute of Agricultural Sciences & Technology offers a comprehensive curriculum bridging modern management principles with agricultural economics, rural marketing, supply chain logistics, and food policy. Students engage with live industry projects, agricultural cooperatives, and export-import organisations to build practical decision-making skills across the agri-food value chain.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Core Learning Areas</h2>
          <div className="adm-grid">
            {[
              {icon:<BarChart2/>, title:"Agribusiness Strategy", desc:"Strategic management frameworks applied to agri-startups, cooperatives, FPOs, and multinational food companies."},
              {icon:<Globe/>, title:"Rural Marketing & Export", desc:"Marketing of agricultural commodities, branding of farm produce, and international trade in food products."},
              {icon:<Users/>, title:"Supply Chain Management", desc:"End-to-end agricultural supply chain design, cold chain logistics, warehousing, and e-commerce models for farm products."},
              {icon:<Briefcase/>, title:"Finance & Policy", desc:"Agricultural credit systems, NABARD schemes, crop insurance, commodity markets, and government policy frameworks."},
            ].map((item,i)=><div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>)}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Curriculum Snapshot</h2>
          <div className="adm-table-wrap"><table className="adm-table"><thead><tr><th>Semester</th><th>Key Subjects</th></tr></thead><tbody>
            <tr><td>Semester 1</td><td>Principles of Management, Agricultural Economics, Quantitative Methods, Managerial Accounting, Rural Sociology</td></tr>
            <tr><td>Semester 2</td><td>Marketing Management, Operations & Supply Chain, Financial Management, Agribusiness Law, IT for Management</td></tr>
            <tr><td>Semester 3</td><td>Strategic Management, International Agri Trade, Entrepreneurship, Summer Internship Report</td></tr>
            <tr><td>Semester 4</td><td>Dissertation / Industry Project, Electives, Agribusiness Policy & Planning</td></tr>
          </tbody></table></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Career Opportunities</h2>
          <div className="adm-steps">
            {[
              {title:"Agribusiness Manager", desc:"Lead operations, marketing, and strategy for food companies, input suppliers, and agri-export firms."},
              {title:"Rural Finance & Banking", desc:"Work with NABARD, cooperative banks, microfinance institutions, and rural development agencies."},
              {title:"Government & Policy Roles", desc:"Join agricultural departments, commodity boards, and food safety regulatory authorities."},
              {title:"Entrepreneurship", desc:"Build agri-startups in precision farming, organic certification, agri-tourism, or food processing."},
            ].map((s,i)=><div key={i} className="adm-step"><div className="adm-step-num">{i+1}</div><div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div></div>)}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MBA;
