import { Home, ChevronRight, Sprout, FlaskConical, Tractor, Leaf, BarChart2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../admissions/Admissions.css";

const AgricultureEngineering = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
      <div className="adm-hero">
        <div className="adm-blob adm-blob-1" /><div className="adm-blob adm-blob-2" />
        <div className="adm-hero-content">
          <div className="adm-badge"><Tractor size={14} /> UG Programme</div>
          <h1 className="adm-title">Agriculture <span>Engineering</span></h1>
          <p className="adm-subtitle">A 4-year B.E. programme blending biological sciences with engineering principles to develop technology-driven solutions for modern agriculture — from precision farming to post-harvest systems.</p>
          <div className="adm-stat-row">
            <div className="adm-stat-pill"><strong>4 Years</strong> Duration</div>
            <div className="adm-stat-pill"><strong>60</strong> Seats</div>
            <div className="adm-stat-pill"><strong>UAS Dharwad</strong> Affiliated</div>
          </div>
        </div>
        <div className="adm-wave"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/></svg></div>
      </div>
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span className="adm-cur">Agriculture Engineering</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Programme Overview</h2>
          <div className="adm-info-box"><h3>About the Programme</h3><p>Agriculture Engineering integrates the principles of engineering with agricultural sciences to design, develop and improve machinery, structures, equipment, and systems used in agriculture. This programme produces engineers capable of addressing challenges in crop production, irrigation, soil management, precision agriculture, and agri-processing industries. Graduates are equipped with both theoretical knowledge and hands-on practical skills through farm-based and lab-based internships.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Core Specialisations</h2>
          <div className="adm-grid">
            {[
              {icon:<Tractor/>, title:"Farm Machinery & Power", desc:"Design and maintenance of tractors, harvesting combines, soil tillage equipment, and power transmission systems in agriculture."},
              {icon:<Leaf/>, title:"Soil & Water Engineering", desc:"Irrigation design, watershed management, drainage systems, and sustainable soil conservation practices for productive farmland."},
              {icon:<FlaskConical/>, title:"Post-Harvest Technology", desc:"Storage structures, food processing units, drying systems, packaging machinery, and value addition technologies."},
              {icon:<BarChart2/>, title:"Precision Agriculture", desc:"GPS-guided machinery, drone applications, remote sensing, IoT sensors, and data analytics for modern smart farming."},
            ].map((item,i)=>(<div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Curriculum Snapshot (Year-wise)</h2>
          <div className="adm-table-wrap"><table className="adm-table"><thead><tr><th>Year</th><th>Key Subjects</th></tr></thead><tbody>
            <tr><td>Year 1</td><td>Engineering Mathematics, Engineering Drawing, Principles of Agronomy, Soil Science, Basic Electronics</td></tr>
            <tr><td>Year 2</td><td>Farm Machinery, Fluid Mechanics, Irrigation Engineering, Thermodynamics, Crop Physiology</td></tr>
            <tr><td>Year 3</td><td>Tractor Mechanics, Post-Harvest Engineering, Remote Sensing, Agri Structures, Renewable Energy</td></tr>
            <tr><td>Year 4</td><td>Precision Agriculture, Project Work, Industrial Training, Entrepreneurship Development</td></tr>
          </tbody></table></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Career Prospects</h2>
          <div className="adm-steps">
            {[
              {title:"Agricultural Equipment Industry", desc:"Design and develop farm machinery for companies like Mahindra, TAFE, John Deere, and AGCO."},
              {title:"Government Agriculture Departments", desc:"Work as Agricultural Engineers in state irrigation, soil conservation, or agricultural mechanisation departments."},
              {title:"Research & Development", desc:"Contribute to ICAR, KVK, and agricultural universities researching next-generation farming technologies."},
              {title:"Entrepreneurship", desc:"Start agri-equipment repair centres, precision farming consultancies, or food processing units."},
            ].map((s,i)=>(<div key={i} className="adm-step"><div className="adm-step-num">{i+1}</div><div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div></div>))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AgricultureEngineering;
