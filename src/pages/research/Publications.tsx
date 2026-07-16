import { Home, ChevronRight, BookText, Newspaper, Search, FileDown, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./Research.css";

const Publications = () => {
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
                            <BookText size={14} /> Scholarly Output
                        </div>
                        <h1 className="res-title">Research <span>Publications</span></h1>
                        <p className="res-subtitle">Showcasing the collective knowledge produced by our faculty and students in leading scientific journals and national archives.</p>
                        <div className="res-stat-row">
                            <div className="res-stat-pill"><strong>120+</strong> International Papers</div>
                            <div className="res-stat-pill"><strong>45+</strong> Books Published</div>
                            <div className="res-stat-pill"><strong>850+</strong> Citations</div>
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
                        <Home size={14} /> <a href="/">Home</a> <span><ChevronRight size={14} /></span> <span>Research</span> <span><ChevronRight size={14} /></span> <span className="res-cur">Publications</span>
                    </div>
                </nav>

                <div className="res-body">
                    <div className="res-section">
                        <h2 className="res-heading">Recent Papers</h2>
                        <div className="res-grid">
                            {[
                                { title: "Sustainable Soil Management in Western Ghats", author: "Dr. Rajesh et al.", journal: "Soil Science International (2024)" },
                                { title: "AI-IoT Based Irrigation for Paddy Fields", author: "Prof. Vinay et al.", journal: "AgTech Journal (2024)" },
                                { title: "Next-Gen Genomic Breeding in Millets", author: "Dr. Sneha et al.", journal: "Nature Genetics Special (2023)" }
                            ].map((item, i) => (
                                <div key={i} className="res-card">
                                    <div className="res-card-content">
                                        <div className="flex justify-between items-start mb-4">
                                            <Newspaper className="text-accent" />
                                            <FileDown size={18} className="text-res-muted cursor-pointer hover:text-accent transition-colors" />
                                        </div>
                                        <h3 className="res-card-title">{item.title}</h3>
                                        <p className="res-card-desc mt-2 font-semibold text-res-primary">{item.author}</p>
                                        <p className="res-card-desc text-xs mt-1 italic">{item.journal}</p>
                                        <button className="mt-6 text-[13px] font-bold text-accent flex items-center gap-1 hover:underline">
                                            Read Abstract <ExternalLink size={12} />
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
export default Publications;
