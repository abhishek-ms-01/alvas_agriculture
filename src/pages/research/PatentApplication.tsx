import { Home, ChevronRight, FileCheck, ClipboardList, PenTool, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./Research.css";

const PatentApplication = () => {
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
                            <FileCheck size={14} /> Innovation Tracker
                        </div>
                        <h1 className="res-title">Patent <span>Application</span></h1>
                        <p className="res-subtitle">From ideation to legal protection: A structured pathway for researchers to secure their discoveries and technical advancements.</p>
                        <div className="res-stat-row">
                            <div className="res-stat-pill"><strong>Step-by-Step</strong> Guidance</div>
                            <div className="res-stat-pill"><strong>EXPERT</strong> Review</div>
                            <div className="res-stat-pill"><strong>IPR</strong> Integrated</div>
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
                        <Home size={14} /> <a href="/">Home</a> <span><ChevronRight size={14} /></span> <span>Research</span> <span><ChevronRight size={14} /></span> <span className="res-cur">Patent Application</span>
                    </div>
                </nav>

                <div className="res-body">
                    <div className="res-section">
                        <h2 className="res-heading">Filing Process</h2>
                        <div className="res-grid">
                            {[
                                { title: "Drafting", desc: "Detailed technical specification writing including claims and drawings.", icon: <PenTool className="text-accent" /> },
                                { title: "Prior Art Search", desc: "Comprehensive global database search to verify novelty of the invention.", icon: <ClipboardList className="text-accent" /> },
                                { title: "Examination", desc: "Professional response to office actions and technical queries from auditors.", icon: <CheckCircle2 className="text-accent" /> }
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
export default PatentApplication;
