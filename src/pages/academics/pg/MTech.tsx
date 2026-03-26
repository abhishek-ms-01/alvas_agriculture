import { Home, ChevronRight, Cpu, Cog, FlaskConical, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../admissions/Admissions.css";

const MTech = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
      <div className="adm-hero">
        <div className="adm-blob adm-blob-1"/><div className="adm-blob adm-blob-2"/>
        <div className="adm-hero-content">
          <div className="adm-badge"><Cpu size={14}/> PG Programme</div>
          <h1 className="adm-title">M.Tech <span>Programme</span></h1>
          <p className="adm-subtitle">A 2-year postgraduate engineering programme specialising in Agricultural Engineering or Food Technology — providing advanced technical knowledge and research capabilities for engineering graduates seeking expertise in agri-tech fields.</p>
          <div className="adm-stat-row">
            <div className="adm-stat-pill"><strong>2 Years</strong> Duration</div>
            <div className="adm-stat-pill"><strong>18</strong> Seats</div>
            <div className="adm-stat-pill"><strong>GATE</strong> Entry</div>
          </div>
        </div>
        <div className="adm-wave"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/></svg></div>
      </div>
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span>PG Programmes</span><span><ChevronRight size={14}/></span><span className="adm-cur">M.Tech</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Programme Overview</h2>
          <div className="adm-info-box"><h3>M.Tech — Agricultural Engineering</h3><p>The M.Tech (Agricultural Engineering) programme at Alva's prepares advanced engineers and researchers to solve complex problems in agricultural mechanisation, food processing, water resources, and precision farming. The programme involves coursework in the first year and thesis/dissertation-based research in the second year. Students are encouraged to collaborate with ICAR, KVK, and industry partners on sponsored research projects. GATE scholarship holders receive MHRD stipend during the programme.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Specialisation Tracks</h2>
          <div className="adm-grid">
            {[
              {icon:<Cog/>, title:"Farm Power & Machinery", desc:"Advanced tractor systems, precision seed drills, harvesting automation, ISOBUS technology, and smart machinery development."},
              {icon:<Leaf/>, title:"Soil & Water Conservation", desc:"Hydrological modelling, watershed simulation, remote sensing for soil moisture, and sustainable irrigation system design."},
              {icon:<FlaskConical/>, title:"Food Process Engineering", desc:"Thermal processing, freeze drying, extrusion, packaging science, FSSAI regulatory compliance, and ready-to-eat food development."},
              {icon:<Cpu/>, title:"Precision & Digital Agriculture", desc:"Drone-based NDVI mapping, satellite imagery analysis, IoT node networks in farm fields, and agricultural robotics."},
            ].map((item,i)=>(<div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Semester-wise Curriculum</h2>
          <div className="adm-table-wrap"><table className="adm-table"><thead><tr><th>Semester</th><th>Key Subjects / Activities</th></tr></thead><tbody>
            <tr><td>Semester 1</td><td>Advanced Engineering Maths, Research Methodology, Core Specialisation Theory Courses (3), Lab Work</td></tr>
            <tr><td>Semester 2</td><td>Advanced Specialisation Courses (3), Electives (2), Seminars, Literature Review, Research Proposal</td></tr>
            <tr><td>Semester 3</td><td>Dissertation Phase 1 — Problem Definition, Experimental Setup, Data Collection, Interim Report</td></tr>
            <tr><td>Semester 4</td><td>Dissertation Phase 2 — Analysis, Technical Paper Writing, Pre-submission Seminar, Final Viva</td></tr>
          </tbody></table></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Career & Research Paths</h2>
          <div className="adm-steps">
            {[
              {title:"ICAR Scientist / JRF", desc:"Qualify ICAR JRF/SRF examination for research fellowships at national agricultural research institutes."},
              {title:"Ph.D. Programme", desc:"Pursue doctoral research at IIT Kharagpur, UAS Bangalore, PAU Ludhiana, or prestigious international agricultural universities."},
              {title:"Industry R&D", desc:"Join R&D departments of Mahindra Agri, TAFE, Agco, and food companies for advanced product development roles."},
              {title:"Assistant Professor", desc:"Qualify NET and join agricultural or engineering colleges as assistant professors under ICAR or UGC cadre."},
            ].map((s,i)=>(<div key={i} className="adm-step"><div className="adm-step-num">{i+1}</div><div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div></div>))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MTech;
