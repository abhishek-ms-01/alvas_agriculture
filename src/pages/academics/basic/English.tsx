import { Home, ChevronRight, BookOpen, MessageSquare, Globe, PenTool } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../../admissions/Admissions.css";

const English = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
        <PageHero
          badgeIcon={<BookOpen size={14} />}
          badgeText="Basic Sciences"
          title={<>Department of <span className="text-accent">English</span></>}
          subtitle="The English department builds communication excellence — developing students' ability to read scientific literature, write technical reports, present research, and engage confidently in professional agricultural and global contexts."
          stats={[
            { bold: "Communication", text: "Skills" },
            "Technical Writing",
            { bold: "Soft Skills", text: "Training" },
          ]}
        />
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span>Basic Sciences</span><span><ChevronRight size={14}/></span><span className="adm-cur">English</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Department Overview</h2>
          <div className="adm-info-box"><h3>English in Agricultural Education</h3><p>Effective communication is a critical professional skill for agricultural graduates. The English department at Alva's Institute goes beyond grammar instruction — it develops students' ability to read and critically analyse scientific journal articles, write compelling research reports and project proposals, present findings in seminars, and communicate confidently in job interviews and professional settings. With agriculture becoming increasingly global, English proficiency opens doors to international collaborations, conferences, and career opportunities.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Core Focus Areas</h2>
          <div className="adm-grid">
            {[
              {icon:<BookOpen/>, title:"Scientific Reading & Comprehension", desc:"Reading and summarising agri-science journal articles, ICAR reports, government policy documents, and international research publications."},
              {icon:<PenTool/>, title:"Technical Writing", desc:"Writing lab reports, field visit reports, research proposals, project reports, and thesis abstracts in standard scientific English."},
              {icon:<MessageSquare/>, title:"Communication & Presentation", desc:"Group discussions, seminar presentations, extempore speaking, and interview practice for placements and higher studies."},
              {icon:<Globe/>, title:"Professional & Business English", desc:"Email and business correspondence, meeting communication, report writing for FPOs and agri-enterprises, and IELTS/TOEFL preparation."},
            ].map((item,i)=>(<div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Courses Offered</h2>
          <div className="adm-table-wrap"><table className="adm-table"><thead><tr><th>Course</th><th>Semester</th><th>Focus</th></tr></thead><tbody>
            <tr><td>Communicative English I</td><td>Semester 1</td><td>Grammar, vocabulary, comprehension, and basic writing</td></tr>
            <tr><td>Communicative English II</td><td>Semester 2</td><td>Technical writing, report formats, and oral presentations</td></tr>
            <tr><td>Professional Communication</td><td>Semester 3</td><td>Business communication, GD, interview skills, email etiquette</td></tr>
            <tr><td>Scientific Writing Elective</td><td>Semester 5/6</td><td>Research paper writing, abstract composition, thesis formatting</td></tr>
          </tbody></table></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Skill Development Activities</h2>
          <ul className="adm-checklist">
            {["Annual English Literary Fest — essay writing, debate, elocution, and creative writing","Agricultural Journalism Workshop — writing op-eds and news articles on farming issues","Industry Readiness Sessions — mock interviews and group discussions with corporate panellists","Reading Club — fortnightly meetings to discuss agricultural science articles and books","IELTS/TOEFL Preparation for students planning international higher studies"].map((item,i)=>(<li key={i}><span className="adm-check-icon"><BookOpen size={14}/></span>{item}</li>))}
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default English;
