import { Home, ChevronRight, FileCheck, Shield, Gavel, Scale, Lock, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./Research.css";

const ResearchPolicies = () => {
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
                            <Shield size={14} /> Ethical Framework
                        </div>
                        <h1 className="res-title">Research <span>Policies</span></h1>
                        <p className="res-subtitle">The constitutional guidelines ensuring integrity, safety, and ethical excellence across all research operations at AIAST.</p>
                        <div className="res-stat-row">
                            <div className="res-stat-pill"><strong>ETHICS</strong> First</div>
                            <div className="res-stat-pill"><strong>GLOBAL</strong> Compliance</div>
                            <div className="res-stat-pill"><strong>SECURE</strong> IP</div>
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
                        <Home size={14} /> <a href="/">Home</a> <span><ChevronRight size={14} /></span> <span>Research</span> <span><ChevronRight size={14} /></span> <span className="res-cur">Research Policies</span>
                    </div>
                </nav>

                <div className="res-body">
                    <div className="res-section">
                        <h2 className="res-heading">Governance Modules</h2>
                        <div className="res-grid">
                            {[
                                { title: "Code of Conduct", desc: "Maintaining truthfulness, honesty, and transparency in scientific data recording.", icon: <Gavel className="text-accent" /> },
                                { title: "IP Policy", desc: "Detailed protocols for ownership and commercialization of inventions and software.", icon: <Lock className="text-accent" /> },
                                { title: "Laboratory Safety", desc: "Strict mandatory safety guidelines for handling bio-hazards and chemicals.", icon: <Shield className="text-accent" /> }
                            ].map((item, i) => (
                                <div key={i} className="res-card">
                                    <div className="res-card-content">
                                        <div className="mb-4">{item.icon}</div>
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
export default ResearchPolicies;
