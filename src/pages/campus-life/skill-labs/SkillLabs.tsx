import {
    Home, ChevronRight, CheckCircle, Microscope, Laptop, Users, Target, FlaskConical, Lightbulb, GraduationCap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../internship/Internship.css";
import "./SkillLabs.css";

const labFeatures = [
    "Equipped with advanced analytical instruments for soil, water and seed testing.",
    "Integrated precision farming modules for real-world drone data analysis.",
    "Specialized bio-technology wing for plant tissue culture and genetic research.",
    "Computer-Aided Learning (CAL) center for agri-informatics and GIS mapping.",
    "Industry-standard greenhouses and hydroponic systems for practical skill building.",
    "Collaborative R&D spaces for industry-institutions partnership projects.",
];

const SkillLabs = () => (
    <div className="ip-page skill-labs">
        <PageBackground count={90} color="8, 145, 178" opacity={0.15} />
        <div style={{ position: "relative", zIndex: 3, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main className="ip-main" style={{ flex: 1 }}>

                {/* ── Hero ── */}
                <section className="ip-hero skill-labs">
                    <img src="https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg" className="ip-hero-bg-image" alt="Skill Labs & Innovation Hubs" />
                    <div className="ip-blob ip-blob-1" /><div className="ip-blob ip-blob-2" /><div className="ip-blob ip-blob-3" />
                    <div className="ip-hero-content">
                        <span className="ip-badge skill-labs"><Microscope size={12} /> Applied Excellence</span>
                        <h1 className="ip-title">Skill Labs & <span>Innovation Hubs</span></h1>
                        <p className="ip-subtitle">
                            Bridging the gap between theoretical knowledge and industry mastery. Our high-tech laboratories and vibrant student clubs foster a culture of hands-on learning and entrepreneurial spirit.
                        </p>
                    </div>
                    <div className="ip-wave">
                        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ height: 56 }}>
                            <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="#f0f7f9" />
                        </svg>
                    </div>
                </section>



                <div className="ip-body">

                    {/* ── Section 1: Innovation Centers ── */}
                    <div className="ip-overview">
                        <div className="ip-overview-img">
                            <img src="/LAB2.jpeg" alt="Advanced Agri Lab" />
                        </div>
                        <div className="ip-overview-text">
                            <p className="ip-label skill-labs">Skill Development</p>
                            <h2 className="ip-heading skill-labs">Future-Ready <span>Laboratories</span></h2>
                            <p className="ip-para">
                                Our laboratories are more than just workspaces; they are centers of discovery. From the **Soil Health Analysis Center** to our **Precision Farming Hub**, students engage with the latest tools and techniques that define modern agricultural production.
                            </p>
                            <ul className="ip-highlight-list">
                                {labFeatures.slice(0, 3).map((item, i) => (
                                    <li key={i}><span className="ip-bullet skill-labs"><CheckCircle size={14} /></span>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ── Section 2: Applied Mastery ── */}
                    <div className="ip-section">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <p className="ip-label skill-labs">Hands-on Mastery</p>
                                <h2 className="ip-heading skill-labs">Industry Collaborative <span>Spaces</span></h2>
                                <p className="ip-para">
                                    Collaboration with industry leaders ensures that our students are trained on actual industrial challenges. Our specialized wings for Tissue Culture and Agro-Informatics provide an edge that transforms students into highly sought-after professionals.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center gap-3">
                                        <FlaskConical className="text-cyan-600" size={20} />
                                        <span className="text-sm font-bold text-slate-700"> Bio-Tech Wing</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center gap-3">
                                        <Laptop className="text-cyan-600" size={20} />
                                        <span className="text-sm font-bold text-slate-700"> GIS & Drone Lab</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center gap-3">
                                        <Target className="text-cyan-600" size={20} />
                                        <span className="text-sm font-bold text-slate-700"> Precision Hub</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center gap-3">
                                        <GraduationCap className="text-cyan-600" size={20} />
                                        <span className="text-sm font-bold text-slate-700"> Industry Certs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <img 
                                    src="/LAB1.jpeg" 
                                    className="rounded-3xl shadow-xl w-full object-cover h-[450px]" 
                                    alt="Science Lab"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Section 3: Clubs & Societies ── */}
                    <div className="ip-section">
                        <div className="bg-slate-900 rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1">
                                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Student Communities</span>
                                    <h2 className="text-4xl font-black mt-4 mb-6 leading-tight">Clubs, Societies & <span>Innovation Cells</span></h2>
                                    <p className="text-slate-400 leading-relaxed mb-8">
                                        Beyond the books, our clubs provide a platform for leadership, creativity, and professional networking. Students drive their own agenda through specialized cells that bridge the gap between passion and profession.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {["Agri-Business Club", "Nursery Management Cell", "Precision Farming Society", "Alva's Cultural Forum", "Photography & Media Cell"].map(tag => (
                                            <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-1 grid grid-cols-2 gap-4">
                                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                                        <Users className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                                        <p className="text-3xl font-black">12+</p>
                                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Active Clubs</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                                        <Lightbulb className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                                        <p className="text-3xl font-black">25+</p>
                                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Innovation Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Section 4: Facility Highlights ── */}
                    <div className="ip-section pb-24">
                        <p className="ip-label skill-labs">Quick Summary</p>
                        <h2 className="ip-heading skill-labs">Facility <span>Highlights</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                            {labFeatures.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                    <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={18} />
                                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    </div>
);

export default SkillLabs;
