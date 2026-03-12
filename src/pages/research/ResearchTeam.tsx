import { Home, ChevronRight, Users, UserRound, GraduationCap, Star, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./Research.css";

const ResearchTeam = () => {
    return (
        <div className="res-page">
            <PageBackground count={90} color="22,101,52" opacity={0.13} />
            <Header />
            <main>
                <div className="res-hero">
                    <div className="res-blob res-blob-1"></div>
                    <div className="res-blob res-blob-2"></div>
                    <div className="res-hero-content">
                        <div className="res-badge">
                            <Users size={14} /> Elite Scientists
                        </div>
                        <h1 className="res-title">The Scientific <span>Team</span></h1>
                        <p className="res-subtitle">Meet the visionary researchers and subject matter experts dedicated to transforming the agricultural landscape through rigorous inquiry.</p>
                        <div className="res-stat-row">
                            <div className="res-stat-pill"><strong>45+</strong> Researchers</div>
                            <div className="res-stat-pill"><strong>18</strong> Lead Scientists</div>
                            <div className="res-stat-pill"><strong>1000+</strong> Citations</div>
                        </div>
                    </div>
                    <div className="res-wave">
                        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                        </svg>
                    </div>
                </div>

                <nav className="res-breadcrumb">
                    <div className="res-breadcrumb-inner">
                        <Home size={14} /> <a href="/">Home</a> <span><ChevronRight size={14} /></span> <span>Research</span> <span><ChevronRight size={14} /></span> <span className="res-cur">Research Team</span>
                    </div>
                </nav>

                <div className="res-body">
                    <div className="res-section">
                        <h2 className="res-heading">Principal Investigators</h2>
                        <div className="res-grid">
                            {[
                                { title: "Dr. Rajesh Kumar", desc: "Expert in Soil Health and Microbiology with over 20 years of research experience.", role: "Chief Scientist" },
                                { title: "Dr. Sneha Patil", desc: "Plant Geneticist focusing on high-yield climate-resilient crop varieties.", role: "Senior Researcher" },
                                { title: "Prof. Amit Sharma", desc: "Leading the Ag-Tech division with a focus on IoT and Precision Farming.", role: "Lead Investigator" }
                            ].map((item, i) => (
                                <div key={i} className="res-card">
                                    <div className="res-card-content">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                                                <UserRound className="text-accent" size={32} />
                                            </div>
                                            <span className="res-card-tag">{item.role}</span>
                                        </div>
                                        <h3 className="res-card-title">{item.title}</h3>
                                        <p className="res-card-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default ResearchTeam;
