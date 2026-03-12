import { Home, ChevronRight, CalendarCheck, BarChart3, ListChecks, TrendingUp, History, ClipboardCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./Research.css";

const YearwiseDetails = () => {
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
                            <History size={14} /> Academic Track
                        </div>
                        <h1 className="res-title">Yearwise <span>Analysis</span></h1>
                        <p className="res-subtitle">A chronological record of our research growth, milestones achieved, and the cumulative impact on the agricultural sector.</p>
                        <div className="res-stat-row">
                            <div className="res-stat-pill"><strong>10+</strong> Years Growth</div>
                            <div className="res-stat-pill"><strong>↑ 25%</strong> Yearly Output</div>
                            <div className="res-stat-pill"><strong>DYNAMIC</strong> Tracking</div>
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
                        <Home size={14} /> <a href="/">Home</a> <span><ChevronRight size={14} /></span> <span>Research</span> <span><ChevronRight size={14} /></span> <span className="res-cur">Yearwise Details</span>
                    </div>
                </nav>

                <div className="res-body">
                    <div className="res-section">
                        <h2 className="res-heading">Performance Metrics</h2>
                        <div className="res-grid">
                            {[
                                { title: "2024-25 Highlights", desc: "Focused on Climate-Smart Agriculture and AI-based pest detection models.", icon: <TrendingUp className="text-accent" /> },
                                { title: "2023-24 Summary", desc: "Strategic expansion into Bio-Organic fertilizers and precision irrigation.", icon: <BarChart3 className="text-accent" /> },
                                { title: "Historical Data", desc: "Archive of seminal papers and foundation projects dating back to 2015.", icon: <ClipboardCheck className="text-accent" /> }
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
export default YearwiseDetails;
