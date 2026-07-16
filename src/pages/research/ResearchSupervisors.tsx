import { Home, ChevronRight, UserCheck, Briefcase, Award, GraduationCap, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./Research.css";

const ResearchSupervisors = () => {
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
                            <UserCheck size={14} /> Mentorship
                        </div>
                        <h1 className="res-title">Research <span>Supervisors</span></h1>
                        <p className="res-subtitle">Recognized doctoral guides and postgraduate mentors providing expert surveillance and scholarly guidance for aspirants.</p>
                        <div className="res-stat-row">
                            <div className="res-stat-pill"><strong>25+</strong> PhD Guides</div>
                            <div className="res-stat-pill"><strong>150+</strong> Scholars</div>
                            <div className="res-stat-pill"><strong>10</strong> Depts</div>
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
                        <Home size={14} /> <a href="/">Home</a> <span><ChevronRight size={14} /></span> <span>Research</span> <span><ChevronRight size={14} /></span> <span className="res-cur">Supervisors</span>
                    </div>
                </nav>

                <div className="res-body">
                    <div className="res-section">
                        <h2 className="res-heading">Approved PhD Guides</h2>
                        <div className="res-grid">
                            {[
                                { title: "Dr. Kavita Hegde", field: "Agronomy", experience: "15 Years", scholars: 6 },
                                { title: "Dr. Vinayaka Nayak", field: "Entomology", experience: "12 Years", scholars: 4 },
                                { title: "Dr. Sharat Chandra", field: "Plant Pathology", experience: "18 Years", scholars: 7 }
                            ].map((item, i) => (
                                <div key={i} className="res-card">
                                    <div className="res-card-content">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                                                <GraduationCap className="text-accent" />
                                            </div>
                                            <span className="res-card-tag">{item.field}</span>
                                        </div>
                                        <h3 className="res-card-title">{item.title}</h3>
                                        <div className="flex flex-col gap-2 mt-4 text-[13px] font-medium text-res-muted">
                                            <div className="flex items-center gap-2"><Briefcase size={14} /> {item.experience} Experience</div>
                                            <div className="flex items-center gap-2"><MapPin size={14} /> AIAST Campus</div>
                                            <div className="mt-2 text-accent">Currently Mentoring {item.scholars} Scholars</div>
                                        </div>
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
export default ResearchSupervisors;
