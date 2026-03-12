import { Home, ChevronRight, BookText, Newspaper, Search, Library, ScrollText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./Research.css";

const Journals = () => {
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
                            <Library size={14} /> Knowledge Repository
                        </div>
                        <h1 className="res-title">Scientific <span>Journals</span></h1>
                        <p className="res-subtitle">Curated access to high-impact international journals and our own institutional academic publications for scholarly research.</p>
                        <div className="res-stat-row">
                            <div className="res-stat-pill"><strong>500+</strong> E-Journals</div>
                            <div className="res-stat-pill"><strong>SCIE</strong> Indexed</div>
                            <div className="res-stat-pill"><strong>24/7</strong> Access</div>
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
                        <Home size={14} /> <a href="/">Home</a> <span><ChevronRight size={14} /></span> <span>Research</span> <span><ChevronRight size={14} /></span> <span className="res-cur">Journals</span>
                    </div>
                </nav>

                <div className="res-body">
                    <div className="res-section">
                        <h2 className="res-heading">Subscribed Databases</h2>
                        <div className="res-grid">
                            {[
                                { title: "ScienceDirect", desc: "Premium access to top-tier Elsevier journals in life sciences and agriculture.", icon: <Search className="text-accent" /> },
                                { title: "Springer Nature", desc: "Global research insights across multidisciplinary scientific domains.", icon: <Library className="text-accent" /> },
                                { title: "AIAST Chronicle", desc: "Our biannual institutional journal showcasing internal research excellence.", icon: <ScrollText className="text-accent" /> }
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
export default Journals;
