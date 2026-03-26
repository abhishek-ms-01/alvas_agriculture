import { Home, ChevronRight, FlaskConical, Atom, TestTube, Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../admissions/Admissions.css";

const Chemistry = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
      <div className="adm-hero">
        <div className="adm-blob adm-blob-1"/><div className="adm-blob adm-blob-2"/>
        <div className="adm-hero-content">
          <div className="adm-badge"><FlaskConical size={14}/> Basic Sciences</div>
          <h1 className="adm-title">Department of <span>Chemistry</span></h1>
          <p className="adm-subtitle">The Chemistry department provides a strong foundation in organic, inorganic, and physical chemistry — essential for understanding soil science, agrochemicals, plant nutrition, pesticide formulation, and food science.</p>
          <div className="adm-stat-row">
            <div className="adm-stat-pill"><strong>Qualified</strong> Faculty</div>
            <div className="adm-stat-pill"><strong>Well-Equipped</strong> Labs</div>
            <div className="adm-stat-pill"><strong>Research</strong> Active</div>
          </div>
        </div>
        <div className="adm-wave"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/></svg></div>
      </div>
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span>Basic Sciences</span><span><ChevronRight size={14}/></span><span className="adm-cur">Chemistry</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Department Overview</h2>
          <div className="adm-info-box"><h3>Role of Chemistry in Agriculture</h3><p>Chemistry is the backbone of agricultural science. Understanding chemical processes is crucial for analysing soil nutrient levels, formulating fertilisers, developing pesticides and herbicides, studying plant metabolism, and ensuring food safety. The Chemistry department at Alva's Institute provides both foundational and applied chemistry knowledge specifically tailored to agricultural applications. Faculty members are actively engaged in research on soil chemistry, natural pesticide development, and food quality analysis.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Key Areas of Study</h2>
          <div className="adm-grid">
            {[
              {icon:<Atom/>, title:"Soil Chemistry", desc:"Study of soil mineral composition, cation exchange capacity (CEC), pH buffering, soil organic matter chemistry, and micronutrient availability."},
              {icon:<FlaskConical/>, title:"Agrochemicals", desc:"Chemistry of fertilisers (NPK), pesticides, fungicides, herbicides, plant growth regulators, and their environmental fate and degradation."},
              {icon:<TestTube/>, title:"Food & Biochemistry", desc:"Carbohydrate, protein, and lipid chemistry in food, enzyme action in post-harvest processes, food preservatives, and anti-nutritional factors."},
              {icon:<Droplets/>, title:"Water Quality Chemistry", desc:"Chemical analysis of irrigation water, BOD/COD in agricultural effluents, heavy metal contamination, and water treatment chemistry."},
            ].map((item,i)=>(<div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Laboratory Facilities</h2>
          <ul className="adm-checklist">
            {["General Chemistry Lab — titration, gravimetric analysis, inorganic qualitative analysis","Organic Chemistry Lab — synthesis, functional group tests, TLC, and melting point apparatus","Instrumental Analysis Lab — UV-Vis Spectrophotometer, Flame Photometer, pH Meter, Atomic Absorption Spectrometer","Soil Testing Lab — NPK estimation, soil pH, electrical conductivity, organic carbon analysis","Food Analysis Lab — moisture content, crude fibre, fat estimation, protein analysis (Kjeldahl)"].map((doc,i)=>(<li key={i}><span className="adm-check-icon"><FlaskConical size={14}/></span>{doc}</li>))}
          </ul>
        </div>
        <div className="adm-info-box"><h3>Courses Offered</h3><p>Chemistry courses are offered as foundation subjects for B.Sc. Agriculture, B.E. Agriculture Engineering, B.Sc. Horticulture, and B.Sc. Food Technology programmes. Specialised elective courses in Agrochemical Formulation, Soil Analytical Chemistry, and Environmental Chemistry are offered to final-year students.</p></div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Chemistry;
