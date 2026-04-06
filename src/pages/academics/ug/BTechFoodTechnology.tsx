import { Home, ChevronRight, FlaskConical, Thermometer, Package, Microscope, BarChart2, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../admissions/Admissions.css";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const BTechFoodTechnology = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
      <div className="adm-hero">
        <div className="adm-blob adm-blob-1" /><div className="adm-blob adm-blob-2" />
        <div className="adm-hero-content">
          <div className="adm-badge"><FlaskConical size={14} /> UG Programme</div>
          <h1 className="adm-title">B.Tech <span>Food Technology</span></h1>
          <p className="adm-subtitle">
            A 4-year B.Tech programme that combines food science, engineering, and technology — preparing graduates to design and manage food processing systems, ensure food safety, develop new food products, and drive innovation in India's rapidly growing food industry.
          </p>
          <div className="adm-stat-row">
            <div className="adm-stat-pill"><strong>4 Years</strong> Duration</div>
            <div className="adm-stat-pill"><strong>60</strong> Seats</div>
            <div className="adm-stat-pill"><strong>AICTE</strong> Approved</div>
            <div className="adm-stat-pill"><strong>FSSAI</strong> Compliance</div>
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
          <span><ChevronRight size={14} /></span><span className="adm-cur">B.Tech Food Technology</span>
        </div>
      </nav>

      <div className="adm-body">
        {/* Overview */}
        <div className="adm-section">
          <h2 className="adm-heading">Programme Overview</h2>
          <div className="adm-info-box">
            <h3>About B.Tech Food Technology</h3>
            <p>
              The B.Tech Food Technology programme at Alva's Institute bridges agricultural production with the food processing industry. It is a 4-year undergraduate engineering degree, AICTE approved and UAS Dharwad affiliated, covering food chemistry, microbiology, processing engineering, packaging, quality assurance, and food regulatory affairs.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              India is one of the world's largest food producers, yet post-harvest losses account for over 30% of produce. B.Tech Food Technology graduates play a critical role in reducing wastage, adding value, and building a robust food processing ecosystem. Students at Alva's have access to state-of-the-art food processing labs, pilot plants, and industry internship tie-ups with leading food companies.
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
                  <h3 className="flex items-center gap-2"><FlaskConical className="text-secondary" size={20} /> Department Vision</h3>
                  <p>To be a premier center of excellence in food technology, fostering innovation and research to ensure global food safety, quality, and nutritional security.</p>
                </div>
                <div className="adm-info-box" style={{ marginBottom: 0 }}>
                  <h3 className="flex items-center gap-2"><Package className="text-secondary" size={20} /> Department Mission</h3>
                  <p>To empower students with advanced technical skills and ethical values to solve complex challenges in food processing, preservation, and product development.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hod" className="adm-tabs-content">
              {/* HOD Profile - Single Column Layout */}
              <div className="hod-column-layout">
                <div className="hod-profile-card">
                  <div className="hod-image-wrapper">
                    <img src="/placeholder.svg" alt="Dr. Rajeshwari M." />
                  </div>
                  <div className="hod-info-content">
                    <h3 className="hod-name">Dr. Rajeshwari M.</h3>
                    <span className="hod-label">Head of Department</span>
                    <p className="hod-bio-text">
                      Dr. Rajeshwari M. is an expert in Food Processing and Preservation with over 18 years of academic and research experience. She holds a Ph.D. in Food Technology and has been at the forefront of developing innovative food preservation techniques. Her research focuses on value addition to traditional crops and developing sustainable packaging solutions for the food industry. She has mentored numerous projects that have won accolades at national level symposiums.
                    </p>
                    <div className="hod-expert-grid">
                      <div className="hod-expert-pill"><span>Experience:</span> 18+ Years</div>
                      <div className="hod-expert-pill"><span>Specialization:</span> Food Processing</div>
                      <div className="hod-expert-pill"><span>Publications:</span> 25+ Papers</div>
                      <div className="hod-expert-pill"><span>Qualification:</span> Ph.D.</div>
                    </div>
                  </div>
                </div>

                {/* Department Faculty Section */}
                <div className="faculty-section mt-12">
                  <h3 className="faculty-heading">Department Faculty</h3>
                  <div className="faculty-grid">
                    {[
                      { name: "Dr. Arun Kumar", role: "Associate Professor", dept: "Food Tech", expertise: "Food Chemistry" },
                      { name: "Ms. Deepa Rao", role: "Assistant Professor", dept: "Food Tech", expertise: "Microbiology" },
                      { name: "Mr. Sanjay MS", role: "Assistant Professor", dept: "Food Tech", expertise: "Food Engineering" },
                      { name: "Dr. Preeti G.", role: "Assistant Professor", dept: "Food Tech", expertise: "Quality Control" }
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
              { icon: <FlaskConical />, title: "Food Chemistry & Biochemistry", desc: "Chemistry of carbohydrates, proteins, lipids, vitamins, and minerals in food systems. Enzyme kinetics, Maillard reactions, browning, and food fortification principles." },
              { icon: <Microscope />, title: "Food Microbiology", desc: "Microbial spoilage of food, pathogenic organisms, fermentation science, starter cultures, HACCP implementation, and food safety standards (ISO 22000, FSSAI)." },
              { icon: <Thermometer />, title: "Food Process Engineering", desc: "Unit operations — heat transfer, evaporation, drying, freezing, filtration, and milling. Design of processing lines and troubleshooting of food plant equipment." },
              { icon: <Package />, title: "Food Packaging Technology", desc: "Packaging materials (glass, HDPE, PET, aseptic), modified atmosphere packaging, active and intelligent packaging, and environmental sustainability of packaging." },
              { icon: <BarChart2 />, title: "Food Quality & Regulatory Affairs", desc: "Sensory evaluation, instrumental quality testing, FSSAI regulations, food labelling norms, export quality standards, and Good Manufacturing Practices (GMP)." },
              { icon: <Leaf />, title: "Post-Harvest Technology", desc: "Handling, storage, and value addition of fruits, vegetables, cereals, oilseeds, pulses, and dairy products to minimise losses and maximise shelf life." },
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
                <tr><th>Year</th><th>Key Subjects</th><th>Practicals / Lab Work</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Year 1</td>
                  <td>Engineering Chemistry, Maths, Physics, Basics of Food Science, Engineering Drawing, Communication Skills</td>
                  <td>Chemistry lab, food sensory lab introduction, drawing lab</td>
                </tr>
                <tr>
                  <td>Year 2</td>
                  <td>Food Chemistry, Food Microbiology, Fluid Mechanics, Heat & Mass Transfer, Food Plant Utilities</td>
                  <td>Microbiology lab, food chemistry analysis, proximate composition analysis</td>
                </tr>
                <tr>
                  <td>Year 3</td>
                  <td>Food Processing I & II, Packaging Technology, Food Quality Control, Dairy Technology, Cereal Processing</td>
                  <td>Processing lab — thermal, drying, freezing; packaging material tests; HACCP design</td>
                </tr>
                <tr>
                  <td>Year 4</td>
                  <td>Food Product Development, Regulatory Affairs, Industrial Internship, Capstone Project / Dissertation</td>
                  <td>Product development pilot plant, industry visit, mini food enterprise project</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Lab facilities */}
        <div className="adm-section">
          <h2 className="adm-heading">Laboratory Facilities</h2>
          <ul className="adm-checklist">
            {[
              "Food Chemistry Lab — proximate analysis (moisture, fat, protein, fibre, ash, carbohydrates)",
              "Food Microbiology Lab — laminar flow bench, autoclave, colony counter, BOD incubator",
              "Food Processing Pilot Plant — spray dryer, tray dryer, freeze dryer, pasteuriser, homogeniser",
              "Packaging Lab — tensile tester, seal strength analyser, permeability testing equipment",
              "Sensory Evaluation Panel Room — individual booths, controlled lighting, score sheet software",
              "Instrumentation Lab — pH meters, water activity meter, colorimeter, texture analyser",
            ].map((item, i) => (
              <li key={i}>
                <span className="adm-check-icon"><FlaskConical size={14} /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Career */}
        <div className="adm-section">
          <h2 className="adm-heading">Career Opportunities</h2>
          <div className="adm-steps">
            {[
              { title: "Food Processing Industry", desc: "Quality Assurance Manager, Production Engineer, R&D Scientist at companies like Nestlé, ITC, Britannia, Marico, Amul, and Haldirams." },
              { title: "Government & Regulatory Bodies", desc: "Food Safety Officer (FSSAI), Public Analyst in state food labs, export inspection agencies, and government food testing laboratories." },
              { title: "Research & Higher Studies", desc: "M.Tech Food Technology or M.Sc. Food Science at IIT Kharagpur, CFTRI Mysore, NDRI, NIN, and international food science universities." },
              { title: "Entrepreneurship", desc: "Start a food processing unit (pickles, jams, snacks, bakery, ready-to-eat), agri-food consultancy, or FSSAI compliance firm." },
            ].map((s, i) => (
              <div key={i} className="adm-step">
                <div className="adm-step-num">{i + 1}</div>
                <div className="adm-step-body"><h3>{s.title}</h3><p>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="adm-info-box">
          <h3>Industry Tie-ups & Internships</h3>
          <p>
            Students of B.Tech Food Technology complete a compulsory 2-month industry internship in the 4th year at food processing companies, FSSAI-approved food testing labs, or agro-processing units. The institute has MoUs with several regional food companies for training placements. Students also participate in the annual National Food Festival where they present self-developed products to industry judges.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default BTechFoodTechnology;
