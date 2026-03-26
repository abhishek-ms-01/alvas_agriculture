import { Home, ChevronRight, Building2, Droplets, Route, HardHat } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../admissions/Admissions.css";

const CivilEngineering = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
      <div className="adm-hero">
        <div className="adm-blob adm-blob-1"/><div className="adm-blob adm-blob-2"/>
        <div className="adm-hero-content">
          <div className="adm-badge"><HardHat size={14}/> UG Programme</div>
          <h1 className="adm-title">Civil <span>Engineering</span></h1>
          <p className="adm-subtitle">A 4-year B.E. programme that trains engineers to plan, design, and construct infrastructure — from irrigation canals and rural roads to agricultural warehouses, water treatment plants, and community structures.</p>
          <div className="adm-stat-row">
            <div className="adm-stat-pill"><strong>4 Years</strong> Duration</div>
            <div className="adm-stat-pill"><strong>60</strong> Seats</div>
            <div className="adm-stat-pill"><strong>AICTE</strong> Approved</div>
          </div>
        </div>
        <div className="adm-wave"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/></svg></div>
      </div>
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span className="adm-cur">Civil Engineering</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Programme Overview</h2>
          <div className="adm-info-box"><h3>About the Programme</h3><p>Civil Engineering at Alva's has a strong focus on rural and agricultural infrastructure. Students learn to design sustainable irrigation systems, drainage networks, check dams, rural roads, and cold storage facilities — all critical components of India's agricultural ecosystem. The curriculum integrates structural analysis, geotechnical engineering, hydraulics, and urban planning with practical labs and site visits to live infrastructure projects.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Core Specialisations</h2>
          <div className="adm-grid">
            {[
              {icon:<Building2/>, title:"Structural Engineering", desc:"Design of buildings, bridges, retaining walls, and silos using RCC, steel, and pre-stressed concrete under various load conditions."},
              {icon:<Droplets/>, title:"Water Resources Engineering", desc:"Canal design, dam safety, groundwater recharge, water harvesting structures, and irrigation network planning."},
              {icon:<Route/>, title:"Transportation & Rural Roads", desc:"Design of rural roads under PMGSY, traffic analysis, pavement design, and agri-produce transport network planning."},
              {icon:<HardHat/>, title:"Environmental Engineering", desc:"Wastewater treatment, solid waste management, environmental impact assessment, and green building design."},
            ].map((item,i)=>(<div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Curriculum Snapshot</h2>
          <div className="adm-table-wrap"><table className="adm-table"><thead><tr><th>Year</th><th>Key Subjects</th></tr></thead><tbody>
            <tr><td>Year 1</td><td>Engineering Drawing, Building Materials, Environmental Science, Surveying, Maths</td></tr>
            <tr><td>Year 2</td><td>Fluid Mechanics, Structural Analysis, Soil Mechanics, Concrete Technology, Surveying Lab</td></tr>
            <tr><td>Year 3</td><td>RCC Design, Water Resources, Transportation Engineering, Foundation Engineering, Mini Project</td></tr>
            <tr><td>Year 4</td><td>Irrigation Engineering, Project Management, Capstone Project, Industry Internship</td></tr>
          </tbody></table></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Career Opportunities</h2>
          <div className="adm-steps">
            {[
              {title:"Government PWD / KRDCL", desc:"Work with Karnataka PWD, NWKRTC, or KRDCL on road, bridge, and irrigation infrastructure projects."},
              {title:"Irrigation & Water Resources Dept.", desc:"Design and manage canals, reservoirs, and water supply projects serving agricultural communities."},
              {title:"Construction Industry", desc:"Join leading EPC contractors handling agri-processing plant construction, warehouses, and cold storage."},
              {title:"GATE & Higher Studies", desc:"Qualify GATE for M.Tech / Ph.D. at NITs, IITs, or NIT Karnataka in structural, water resources, or geotechnical engineering."},
            ].map((s,i)=>(<div key={i} className="adm-step"><div className="adm-step-num">{i+1}</div><div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div></div>))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CivilEngineering;
