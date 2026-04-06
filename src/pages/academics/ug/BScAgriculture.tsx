import { Home, ChevronRight, Sprout, Leaf, FlaskConical, Sun, BookOpen, BarChart2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../admissions/Admissions.css";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const BScAgriculture = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
      <div className="adm-hero">
        <div className="adm-blob adm-blob-1" /><div className="adm-blob adm-blob-2" />
        <div className="adm-hero-content">
          <div className="adm-badge"><Sprout size={14} /> UG Programme</div>
          <h1 className="adm-title">B.Sc. (Hons) <span>Agriculture</span></h1>
          <p className="adm-subtitle">
            A 4-year honours degree programme in agricultural sciences covering agronomy, soil science, horticulture, plant pathology, entomology, agricultural economics, and extension — designed to create skilled, research-oriented agricultural graduates.
          </p>
          <div className="adm-stat-row">
            <div className="adm-stat-pill"><strong>4 Years</strong> Duration</div>
            <div className="adm-stat-pill"><strong>60</strong> Seats</div>
            <div className="adm-stat-pill"><strong>UAS Dharwad</strong> Affiliated</div>
            <div className="adm-stat-pill"><strong>ICAR</strong> Prescribed Curriculum</div>
          </div>
        </div>
        <div className="adm-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </div>

      <nav className="adm-breadcrumb">
        <div className="adm-breadcrumb-inner">
          <Home size={14} /><a href="/">Home</a>
          <span><ChevronRight size={14} /></span><span>Academics</span>
          <span><ChevronRight size={14} /></span><span>UG Programmes</span>
          <span><ChevronRight size={14} /></span><span className="adm-cur">B.Sc. (Hons) Agriculture</span>
        </div>
      </nav>

      <div className="adm-body">
        {/* Overview */}
        <div className="adm-section">
          <h2 className="adm-heading">Programme Overview</h2>
          <div className="adm-info-box">
            <h3>About B.Sc. (Hons) Agriculture</h3>
            <p>
              The B.Sc. (Hons) Agriculture programme is the flagship undergraduate offering of Alva's Institute of Agricultural Science & Technology, affiliated to the University of Agricultural Sciences (UAS), Dharwad. The 4-year programme follows the ICAR 5th Dean's Committee curriculum — a nationally standardised syllabus ensuring quality and uniformity across all agricultural universities in India.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Students receive hands-on training through farm practicals, field visits, crop production experiments, internships at Krishi Vigyan Kendras (KVKs), and a mandatory Experiential Learning (ELP) module in the final year where they run actual agri-enterprises. The programme produces graduates equipped for roles in research, government services, agri-business, and advanced studies.
            </p>
          </div>
        </div>

        {/* Vision, Mission & HOD Tabs */}
        <div className="adm-section">
          <Tabs defaultValue="vm" className="w-full">
            <TabsList className="adm-tabs-list grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="vm" className="adm-tabs-trigger">Vision & Mission</TabsTrigger>
              <TabsTrigger value="hod" className="adm-tabs-trigger">About HOD</TabsTrigger>
            </TabsList>
            
            <TabsContent value="vm" className="adm-tabs-content">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="adm-info-box" style={{ marginBottom: 0 }}>
                  <h3 className="flex items-center gap-2"><Sprout className="text-accent" size={20} /> Department Vision</h3>
                  <p>To emerge as a beacon of agricultural excellence, fostering innovative solutions that bridge traditional wisdom with cutting-edge technology for sustainable global food security.</p>
                </div>
                <div className="adm-info-box" style={{ marginBottom: 0 }}>
                  <h3 className="flex items-center gap-2"><Leaf className="text-accent" size={20} /> Department Mission</h3>
                  <p>To deliver world-class education that empowers agricultural professionals with modern skills, scientific knowledge, and entrepreneurial spirit to transform farming into a dignified profession.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hod" className="adm-tabs-content">
              {/* HOD Profile - Single Column Layout */}
              <div className="hod-column-layout">
                <div className="hod-profile-card">
                  <div className="hod-image-wrapper">
                    <img src="/placeholder.svg" alt="Dr. Suresh Patel" />
                  </div>
                  <div className="hod-info-content">
                    <h3 className="hod-name">Dr. Suresh Patel</h3>
                    <span className="hod-label">Head of Department</span>
                    <p className="hod-bio-text">
                      Dr. Suresh Patel is a distinguished academician with over 25 years of experience in Agronomy and Crop Science. He holds a Ph.D. from a premier agricultural university and has published over 40 research papers in reputable national and international journals. Under his leadership, the department has established several research initiatives focusing on climate-resilient agriculture and organic farming techniques.
                    </p>
                    <div className="hod-expert-grid">
                      <div className="hod-expert-pill"><span>Experience:</span> 25+ Years</div>
                      <div className="hod-expert-pill"><span>Specialization:</span> Agronomy</div>
                      <div className="hod-expert-pill"><span>Publications:</span> 40+ Papers</div>
                      <div className="hod-expert-pill"><span>Qualification:</span> Ph.D.</div>
                    </div>
                  </div>
                </div>

                {/* Department Faculty Section */}
                <div className="faculty-section mt-12">
                  <h3 className="faculty-heading">Department Faculty</h3>
                  <div className="faculty-grid">
                    {[
                      { name: "Prof. Rajesh Mehra", role: "Associate Professor", dept: "Soil Science", expertise: "Soil Morphology" },
                      { name: "Dr. Anita Sharma", role: "Assistant Professor", dept: "Horticulture", expertise: "Floriculture" },
                      { name: "Mr. Vikram Singh", role: "Assistant Professor", dept: "Agronomy", expertise: "Water Management" },
                      { name: "Dr. Kavita Rao", role: "Assistant Professor", dept: "Plant Pathology", expertise: "Mycology" }
                    ].map((member, idx) => (
                      <div key={idx} className="faculty-card">
                        <div className="faculty-avatar">
                          <img src="/placeholder.svg" alt={member.name} />
                        </div>
                        <div className="faculty-details">
                          <h4 className="faculty-name">{member.name}</h4>
                          <span className="faculty-role">{member.role}</span>
                          <div className="faculty-dept-tag">{member.dept}</div>
                          <p className="faculty-expertise">Specializes in {member.expertise}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Core subjects */}
        <div className="adm-section">
          <h2 className="adm-heading">Core Subject Areas</h2>
          <div className="adm-grid">
            {[
              { icon: <Sprout />, title: "Agronomy", desc: "Principles of crop production and management. Cultivation of major field crops — rice, wheat, maize, soybean, sugarcane, and dryland crops under varying agro-climatic conditions." },
              { icon: <Leaf />, title: "Horticulture", desc: "Production technology of fruits (mango, banana, coconut), vegetables, flowers, spices, and plantation crops. Post-harvest handling and value addition." },
              { icon: <FlaskConical />, title: "Soil Science & Agricultural Chemistry", desc: "Soil formation, classification, nutrient management, fertiliser recommendations, soil health cards, and balanced use of organic and inorganic inputs." },
              { icon: <Sun />, title: "Plant Pathology & Entomology", desc: "Identification, biology, and integrated management of crop diseases and insect pests. Biological control, pesticide recommendations, and field scouting techniques." },
              { icon: <BarChart2 />, title: "Agricultural Economics & Extension", desc: "Farm management, cost-benefit analysis, marketing of agricultural produce, rural credit, government schemes, and farm advisory communication." },
              { icon: <BookOpen />, title: "Plant Breeding & Genetics", desc: "Mendelian genetics, plant breeding methods, seed production, variety development, and introduction to biotechnology applications in crop improvement." },
            ].map((item, i) => (
              <div key={i} className="adm-card">
                <div className="adm-card-accent-bar" />
                <div className="adm-card-content">
                  <div className="adm-card-icon">{item.icon}</div>
                  <h3 className="adm-card-title">{item.title}</h3>
                  <p className="adm-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Year-wise curriculum */}
        <div className="adm-section">
          <h2 className="adm-heading">Year-wise Curriculum Snapshot</h2>
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr><th>Year</th><th>Key Subjects</th><th>Practicals / Field Work</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Year 1</td>
                  <td>Agronomy I, Soil Science, Introductory Biology, Communication Skills, Maths & Statistics, Horticulture I</td>
                  <td>Farm orientation, soil sampling, crop identification</td>
                </tr>
                <tr>
                  <td>Year 2</td>
                  <td>Agronomy II & III, Plant Pathology, Entomology, Genetics, Plant Physiology, Agricultural Economics</td>
                  <td>Crop production experiments, pest scouting, germination trials</td>
                </tr>
                <tr>
                  <td>Year 3</td>
                  <td>Plant Breeding, Seed Technology, Irrigation Agronomy, Extension Education, Farm Machinery</td>
                  <td>Variety trials, irrigation scheduling, farm machinery operation</td>
                </tr>
                <tr>
                  <td>Year 4</td>
                  <td>Agricultural Marketing, Dryland Agronomy, Electives, Experiential Learning Module (ELP), Project / Dissertation</td>
                  <td>ELP enterprise (nursery, mushroom, vermicompost, etc.), village survey, in-plant training</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Eligibility */}
        <div className="adm-section">
          <h2 className="adm-heading">Admission Eligibility</h2>
          <div className="adm-steps">
            {[
              { title: "Minimum Qualification", desc: "Pass in 10+2 (PUC / HSC) with Physics, Chemistry, and Biology (PCB) or Agriculture as compulsory subjects. Minimum 50% aggregate marks (45% for SC/ST candidates)." },
              { title: "Entrance Examination", desc: "Admission through Karnataka Examinations Authority (KEA) via KCET score, Agri Quota score, or management quota as per Government of Karnataka norms." },
              { title: "Document Verification", desc: "Original 10th and 12th mark sheets, transfer certificate, caste certificate (if applicable), domicile certificate, and KCET/Agri Quota rank card." },
            ].map((s, i) => (
              <div key={i} className="adm-step">
                <div className="adm-step-num">{i + 1}</div>
                <div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Career */}
        <div className="adm-section">
          <h2 className="adm-heading">Career Opportunities</h2>
          <div className="adm-grid">
            {[
              { icon: <Sprout />, title: "Government Agriculture Services", desc: "Agricultural Officer, Horticulture Officer, Agriculture Extension Officer in state and central government departments via competitive exams." },
              { icon: <BarChart2 />, title: "Banking & Finance", desc: "Agricultural Field Officer in NABARD, RBI, SBI, and district co-operative banks under the agri-finance vertical." },
              { icon: <BookOpen />, title: "Research & Academia", desc: "ICAR JRF/SRF, M.Sc. Agriculture at UAS/IARI/NDRI, and Ph.D. opportunities at premier national research institutions." },
              { icon: <Leaf />, title: "Agri-Business & Industry", desc: "Sales Officer (agri-inputs), Supply chain executive, Quality Analyst at food processing firms, FPO management roles." },
            ].map((item, i) => (
              <div key={i} className="adm-card">
                <div className="adm-card-accent-bar" />
                <div className="adm-card-content">
                  <div className="adm-card-icon">{item.icon}</div>
                  <h3 className="adm-card-title">{item.title}</h3>
                  <p className="adm-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="adm-info-box">
          <h3>Experiential Learning Programme (ELP)</h3>
          <p>
            In the 4th year, every student undertakes an Experiential Learning Programme — an entrepreneurial module where students set up and run a real agri-enterprise (mushroom cultivation, nursery management, vermicomposting, dairy unit, etc.) under faculty mentorship. This ensures every graduate has real-world enterprise experience before entering the job market.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default BScAgriculture;
