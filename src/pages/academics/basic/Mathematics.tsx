import { Home, ChevronRight, Calculator, BarChart2, GitBranch, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../admissions/Admissions.css";

const Mathematics = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
      <div className="adm-hero">
        <div className="adm-blob adm-blob-1"/><div className="adm-blob adm-blob-2"/>
        <div className="adm-hero-content">
          <div className="adm-badge"><Calculator size={14}/> Basic Sciences</div>
          <h1 className="adm-title">Department of <span>Mathematics</span></h1>
          <p className="adm-subtitle">The Mathematics department provides quantitative and analytical foundations critical for agricultural research, statistics in field experimentation, modelling crop yields, and developing precision agriculture algorithms.</p>
          <div className="adm-stat-row">
            <div className="adm-stat-pill"><strong>Applied</strong> Focus</div>
            <div className="adm-stat-pill"><strong>Statistical Tools</strong></div>
            <div className="adm-stat-pill"><strong>Agri Analytics</strong></div>
          </div>
        </div>
        <div className="adm-wave"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/></svg></div>
      </div>
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span>Basic Sciences</span><span><ChevronRight size={14}/></span><span className="adm-cur">Mathematics</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Department Overview</h2>
          <div className="adm-info-box"><h3>Mathematics in Agricultural Sciences</h3><p>Mathematics is a fundamental tool in agricultural science and engineering. From designing field experiments using statistical methods, to modelling irrigation networks using differential equations, to applying linear programming in farm resource optimisation — mathematics underpins nearly every quantitative aspect of modern agri-science. The department offers courses in calculus, statistics, probability, linear algebra, and operations research with real agricultural problem sets and datasets.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Key Subject Areas</h2>
          <div className="adm-grid">
            {[
              {icon:<Calculator/>, title:"Calculus & Differential Equations", desc:"Derivatives and integrals applied to growth models, population dynamics, crop growth curves, and pesticide decay functions."},
              {icon:<BarChart2/>, title:"Agricultural Statistics", desc:"Analysis of variance (ANOVA), completely randomised design (CRD), factorial experiments, regression analysis for field trials."},
              {icon:<TrendingUp/>, title:"Probability Theory", desc:"Probability distributions in rainfall modelling, crop failure probability, market price uncertainty, and risk analysis in farming."},
              {icon:<GitBranch/>, title:"Operations Research", desc:"Linear programming for crop planning, transportation models for supply chains, integer programming for resource allocation."},
            ].map((item,i)=>(<div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Courses Offered by Semester</h2>
          <div className="adm-table-wrap"><table className="adm-table"><thead><tr><th>Semester</th><th>Course</th><th>Programme</th></tr></thead><tbody>
            <tr><td>Semester 1</td><td>Engineering Mathematics I (Calculus + Algebra)</td><td>B.E. Agri. Engineering</td></tr>
            <tr><td>Semester 2</td><td>Engineering Mathematics II (Differential Equations)</td><td>B.E. Agri. Engineering</td></tr>
            <tr><td>Semester 3</td><td>Probability and Statistics</td><td>B.Sc. Agriculture</td></tr>
            <tr><td>Semester 4</td><td>Design of Experiments (DOE)</td><td>B.Sc. Agriculture</td></tr>
            <tr><td>Semester 5</td><td>Operations Research in Agriculture</td><td>All Programmes</td></tr>
            <tr><td>Elective</td><td>Numerical Methods and Agricultural Modelling</td><td>M.Tech</td></tr>
          </tbody></table></div>
        </div>
        <div className="adm-info-box"><h3>Statistical Software Training</h3><p>Students receive hands-on training in statistical software tools including R, SPSS, and SAS — standard tools for agricultural research data analysis. The department runs regular workshops on DOE analysis using GenStat, MSTAT-C, and R Studio for students conducting their thesis and field experiments.</p></div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Mathematics;
