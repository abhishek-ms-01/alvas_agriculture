import { Home, ChevronRight, Brain, Cpu, Database, Network } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../../admissions/Admissions.css";

const AIML = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
        <PageHero
          badgeIcon={<Brain size={14} />}
          badgeText="UG Programme"
          title={<>Artificial Intelligence <span className="text-accent">&amp; ML</span></>}
          subtitle="A 4-year B.E. programme that trains students in machine learning, deep learning, computer vision, and AI-driven analytics — with special focus on applications in agricultural data science and smart farming."
          stats={[
            { bold: "4 Years", text: "Duration" },
            { bold: "60", text: "Seats" },
            { bold: "Industry", text: "Ready" },
          ]}
        />
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span className="adm-cur">AI &amp; ML</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Programme Overview</h2>
          <div className="adm-info-box"><h3>About the Programme</h3><p>The B.E. in Artificial Intelligence & Machine Learning equips students with strong foundations in mathematics, programming, and data science. The programme emphasises real-world problem-solving using AI tools in precision agriculture — including crop disease detection using computer vision, yield prediction using regression models, and smart irrigation through IoT and AI integration. Students work on live projects and internships with industry partners.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Core Learning Areas</h2>
          <div className="adm-grid">
            {[
              {icon:<Brain/>, title:"Machine Learning", desc:"Supervised, unsupervised, and reinforcement learning algorithms using Python, Scikit-learn, and TensorFlow for real-world datasets."},
              {icon:<Cpu/>, title:"Deep Learning & Neural Networks", desc:"Convolutional Neural Networks, RNNs, Transformer models, and their application in image recognition and natural language tasks."},
              {icon:<Database/>, title:"Big Data & Analytics", desc:"Hadoop, Spark, and cloud platforms for processing large agricultural datasets, weather data, and satellite imagery."},
              {icon:<Network/>, title:"AI in Agriculture", desc:"Crop yield prediction models, disease classification using image datasets, drone-based field analysis, and smart farming automation."},
            ].map((item,i)=>(<div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Curriculum Snapshot</h2>
          <div className="adm-table-wrap"><table className="adm-table"><thead><tr><th>Year</th><th>Key Subjects</th></tr></thead><tbody>
            <tr><td>Year 1</td><td>Programming Fundamentals (Python), Linear Algebra, Statistics, Digital Logic, Agri Informatics</td></tr>
            <tr><td>Year 2</td><td>Data Structures, Machine Learning, Probability, Database Management, Computer Vision Basics</td></tr>
            <tr><td>Year 3</td><td>Deep Learning, NLP, Big Data, Internet of Things, AI Ethics, Mini Project</td></tr>
            <tr><td>Year 4</td><td>Advanced AI, Capstone Project, Industry Internship, Entrepreneurship in AgriTech</td></tr>
          </tbody></table></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Career Opportunities</h2>
          <div className="adm-steps">
            {[
              {title:"AI/ML Engineer", desc:"Design and deploy machine learning models for agri-tech companies, food processing firms, and supply chain platforms."},
              {title:"Data Scientist", desc:"Analyse large agricultural datasets for government agencies, NGOs, and agri-research organisations."},
              {title:"AgriTech Startups", desc:"Found or join Indian and global startups working at the intersection of AI and precision agriculture."},
              {title:"Research Scholar", desc:"Pursue M.Tech / Ph.D. in AI or agricultural informatics at premier institutions like IIT, ICAR, or UAS."},
            ].map((s,i)=>(<div key={i} className="adm-step"><div className="adm-step-num">{i+1}</div><div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div></div>))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AIML;
