import { Home, ChevronRight, Mic2, Users2, Calendar, MapPin, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./Research.css";

const Conference = () => {
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
                            <Mic2 size={14} /> Events & Networking
                        </div>
                        <h1 className="res-title">Research <span>Conferences</span></h1>
                        <p className="res-subtitle">A platform for global exchange of ideas, featuring upcoming seminars, national symposiums, and international workshops.</p>
                        <div className="res-stat-row">
                            <div className="res-stat-pill"><strong>08+</strong> Yearly Events</div>
                            <div className="res-stat-pill"><strong>5000+</strong> Participants</div>
                            <div className="res-stat-pill"><strong>HYBRID</strong> Mode</div>
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
                        <Home size={14} /> <a href="/">Home</a> <span><ChevronRight size={14} /></span> <span>Research</span> <span><ChevronRight size={14} /></span> <span className="res-cur">Conferences</span>
                    </div>
                </nav>

                <div className="res-body">
                    <div className="res-section">
                        <h2 className="res-heading">Upcoming Seminars</h2>
                        <div className="res-grid">
                            {[
                                { title: "AgriVision 2026", date: "Sept 12-14, 2026", type: "International Conference", location: "Main Auditorium" },
                                { title: "Soil Health Workshop", date: "Oct 05, 2026", type: "Technical Workshop", location: "Block-B Labs" },
                                { title: "IPR Awareness Seminar", date: "Oct 22, 2026", type: "Awareness Program", location: "Virtual Hall" }
                            ].map((item, i) => (
                                <div key={i} className="res-card">
                                    <div className="res-card-content">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-md text-[11px] font-bold text-accent uppercase">{item.type}</div>
                                            <Calendar size={16} className="text-res-muted" />
                                        </div>
                                        <h3 className="res-card-title">{item.title}</h3>
                                        <div className="flex flex-col gap-2 mt-4 text-[13px] font-medium text-res-muted">
                                            <div className="flex items-center gap-2"><Calendar size={14} /> {item.date}</div>
                                            <div className="flex items-center gap-2"><MapPin size={14} /> {item.location}</div>
                                        </div>
                                        <button className="mt-6 w-full py-2 bg-res-primary text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-res-primary-dark transition-all">
                                            Register Now <ExternalLink size={14} />
                                        </button>
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
export default Conference;
