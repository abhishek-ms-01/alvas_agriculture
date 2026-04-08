import { Home, ChevronRight, FlaskConical, Leaf, Microscope, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../../admissions/Admissions.css";

const MTech = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
        <PageHero
          badgeIcon={<FlaskConical size={14} />}
          badgeText="PG Programme"
          title={<>Master of Technology <span className="text-accent">(M.Tech)</span></>}
          subtitle="A 2-year postgraduate engineering programme focused on advanced research and applied technology — blending core engineering with agricultural and food processing innovation."
          stats={[
            { bold: "2 Years", text: "Duration" },
            { bold: "18", text: "Seats" },
            { bold: "Research", text: "Focused" },
          ]}
        />
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span className="adm-cur">M.Tech</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Programme Overview</h2>
          <div className="adm-info-box"><h3>About the Programme</h3><p>The M.Tech programme at Alva's Institute of Agricultural Sciences & Technology is designed for engineers and scientists who want to pursue advanced research and applied problem-solving in engineering disciplines with agricultural relevance. The curriculum includes intensive coursework, laboratory research, and a thesis component in partnership with ICAR institutes, food processing industries, and government R&D bodies. Graduates are equipped for leadership in research institutions, advanced industries, and academia.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Core Learning Areas</h2>
          <div className="adm-grid">
            {[
              {icon:<Microscope/>, title:"Advanced Research Methods", desc:"Research design, scientific writing, statistical analysis, and experimental methodology for engineering and applied sciences."},
              {icon:<Leaf/>, title:"Agricultural Engineering", desc:"Precision agriculture systems, farm mechanisation, irrigation engineering, and post-harvest technology research."},
              {icon:<FlaskConical/>, title:"Food Process Engineering", desc:"Unit operations in food processing, quality control systems, novel food technologies, and packaging science."},
              {icon:<Cpu/>, title:"Smart Systems & IoT", desc:"Embedded systems, sensor networks, automation, and AI-driven controls applied to agri and food processing environments."},
            ].map((item,i)=><div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>)}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Curriculum Snapshot</h2>
          <div className="adm-table-wrap"><table className="adm-table"><thead><tr><th>Semester</th><th>Key Subjects</th></tr></thead><tbody>
            <tr><td>Semester 1</td><td>Advanced Mathematics, Research Methodology, Core Specialisation Paper I, Lab Work I</td></tr>
            <tr><td>Semester 2</td><td>Core Specialisation Paper II, Elective I, Elective II, Lab Work II</td></tr>
            <tr><td>Semester 3</td><td>Thesis Research Phase I, Seminar, Industrial Visit, Technical Paper Presentation</td></tr>
            <tr><td>Semester 4</td><td>Thesis Research Phase II, Viva Voce, Thesis Submission</td></tr>
          </tbody></table></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Career Opportunities</h2>
          <div className="adm-steps">
            {[
              {title:"Research Scientist / Engineer", desc:"Work with ICAR, CSIR, DRDO, SAUs, and private R&D labs on cutting-edge agricultural engineering challenges."},
              {title:"Academia & Teaching", desc:"Join engineering colleges and agricultural universities as Assistant Professor or Research Associate."},
              {title:"Industry Specialist", desc:"Take up senior technical roles in food processing companies, agri-input firms, and precision agriculture technology companies."},
              {title:"PhD & Higher Research", desc:"Pursue doctoral studies at IITs, NITs, IISc, or international universities in engineering and agricultural sciences."},
            ].map((s,i)=><div key={i} className="adm-step"><div className="adm-step-num">{i+1}</div><div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div></div>)}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MTech;
