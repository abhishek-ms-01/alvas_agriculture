import { useEffect } from "react";
import {
    MapPin, Camera, Bus, Users, BookOpen, ExternalLink,
    Home, ChevronRight, Globe, Leaf
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./ExposureVisit.css";

/* ─── Destinations Data ─── */
const destinations = [
    {
        title: "ICAR Research Stations",
        tag: "Research",
        desc: "Visiting various ICAR stations across India to understand the latest in crop improvement, plant protection, and biotechnology.",
        img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
        date: "Semester IV & VI",
    },
    {
        title: "Organic Model Farms",
        tag: "Sustainability",
        desc: "Hands-on exposure to integrated farming systems and traditional organic practices in zero-budget natural farming models.",
        img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
        date: "Annual Visit",
    },
    {
        title: "Agro-Processing Units",
        tag: "Industry",
        desc: "Learning about the value chain from farm to fork by visiting large-scale food processing and preservation facilities.",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        date: "Semester V",
    },
    {
        title: "State Forest Nurseries",
        tag: "Horticulture",
        desc: "Understanding propagation techniques for forest species and ornamental plants in massive climate-controlled nursery environments.",
        img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
        date: "Semester III",
    },
    {
        title: "Agricultural Universities",
        tag: "Education",
        desc: "Interaction sessions with scientists and professors at premier agricultural universities like UAS Bangalore and Dharwad.",
        img: "https://images.unsplash.com/photo-1523050337458-5c56e75b0dd2?w=800&q=80",
        date: "Inter-State Visit",
    },
    {
        title: "High-Tech Greenhouses",
        tag: "Technology",
        desc: "Experiencing poly-house cultivation, hydroponics, and aeroponics in advanced precision farming setups.",
        img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
        date: "Semester VIII",
    },
];

/* ─── Main Component ─── */
const ExposureVisit = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ev-page">
            {/* Full-page animation */}
            <PageBackground count={100} color="22,101,52" opacity={0.22} />

            <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <Header />

                <main className="ev-main">
                    {/* ── Hero ── */}
                    <section className="ev-hero">
                        <div className="ev-blob ev-blob-1" />
                        <div className="ev-blob ev-blob-2" />

                        <div className="ev-hero-content">
                            <span className="ev-badge">
                                <Bus size={12} /> Exposure & Educational Visits
                            </span>
                            <h1 className="ev-title">
                                Beyond the <span>Classroom</span>
                            </h1>
                            <p className="ev-subtitle">
                                At AIAST, we believe learning is most effective when it happens in the field.
                                Our students travel across the country to witness agricultural innovation firsthand.
                            </p>

                            {/* Stats */}
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                                {[
                                    { label: "Visits Annually", val: "12+" },
                                    { label: "Sites Covered", val: "40+" },
                                    { label: "States Visited", val: "8" },
                                    { label: "Partners", val: "25+" },
                                ].map(s => (
                                    <div key={s.label} style={{
                                        background: 'rgba(255,255,255,0.08)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        padding: '8px 20px',
                                        borderRadius: '100px',
                                        color: '#fff',
                                        fontSize: '0.85rem'
                                    }}>
                                        <strong style={{ color: 'var(--ev-gold)' }}>{s.val}</strong> {s.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="ev-hero-wave">
                            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ height: 56 }}>
                                <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="hsl(40,25%,91%)" />
                            </svg>
                        </div>
                    </section>

                    {/* ── Breadcrumb ── */}
                    <nav className="ev-breadcrumb">
                        <div className="ev-breadcrumb-inner">
                            <Home size={14} />
                            <a href="/">Home</a>
                            <span className="sep"><ChevronRight size={14} /></span>
                            <span className="cur">Exposure Visit</span>
                        </div>
                    </nav>

                    {/* ── Body ── */}
                    <div className="ev-body">

                        {/* Overview Section */}
                        <div className="ev-section ev-animate">
                            <p className="ev-label">Educational Journeys</p>
                            <h2 className="ev-heading">Bridging Theory & Practice</h2>
                            <p style={{ color: 'var(--ev-text-muted)', lineHeight: 1.7, maxWidth: '800px' }}>
                                Exposure visits are an integral part of the curriculum at Alva's Institute of
                                Agricultural Science & Technology. These visits provide students with a unique
                                opportunity to interact with industry experts, scientists, and progressive farmers,
                                witnessing real-world applications of the concepts studied in textbooks.
                            </p>
                        </div>

                        {/* Destinations Section */}
                        <div className="ev-section ev-animate" style={{ animationDelay: '0.1s' }}>
                            <p className="ev-label">Site Categories</p>
                            <h2 className="ev-heading">Key Visit Destinations</h2>

                            <div className="ev-dest-grid">
                                {destinations.map(dest => (
                                    <div key={dest.title} className="ev-dest-card">
                                        <div className="ev-dest-img-wrap">
                                            <img src={dest.img} alt={dest.title} className="ev-dest-img" />
                                            <span className="ev-dest-tag">{dest.tag}</span>
                                        </div>
                                        <div className="ev-dest-content">
                                            <h3 className="ev-dest-title">{dest.title}</h3>
                                            <p className="ev-dest-desc">{dest.desc}</p>
                                            <div className="ev-dest-meta">
                                                <MapPin size={14} /> <span>{dest.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="ev-section ev-animate" style={{ animationDelay: '0.2s' }}>
                            <p className="ev-label">Visual Glimpses</p>
                            <h2 className="ev-heading">Field Experience Gallery</h2>

                            <div className="ev-gallery">
                                <div className="ev-gallery-item wide tall">
                                    <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80" alt="Field 1" />
                                </div>
                                <div className="ev-gallery-item">
                                    <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&q=80" alt="Field 2" />
                                </div>
                                <div className="ev-gallery-item">
                                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80" alt="Field 3" />
                                </div>
                                <div className="ev-gallery-item tall">
                                    <img src="https://images.unsplash.com/photo-1532187875605-1ef6c237a11f?w=400&q=80" alt="Field 4" />
                                </div>
                                <div className="ev-gallery-item wide">
                                    <img src="https://images.unsplash.com/photo-1594911773177-74892c578051?w=800&q=80" alt="Field 5" />
                                </div>
                            </div>
                        </div>

                        {/* What to Expect */}
                        <div className="ev-section ev-animate" style={{ animationDelay: '0.3s' }}>
                            <p className="ev-label">The Experience</p>
                            <h2 className="ev-heading">What Students Gain</h2>

                            <div className="ev-exp-grid">
                                {[
                                    { icon: <Globe size={20} />, title: "Regional Diversity", desc: "Exposure to different agro-climatic zones and regional crop specialties." },
                                    { icon: <BookOpen size={20} />, title: "Live Demos", desc: "Firsthand observation of modern machinery and cultivation methods." },
                                    { icon: <Users size={20} />, title: "Expert Networking", desc: "Direct interaction with senior scientists and industrial leaders." },
                                    { icon: <Leaf size={20} />, title: "Sustainable Tech", desc: "Learning about eco-friendly farming and biodiversity conservation." },
                                    { icon: <Camera size={20} />, title: "Documentation", desc: "Training in field data collection and site report preparation." },
                                ].map(exp => (
                                    <div key={exp.title} className="ev-exp-card">
                                        <div className="ev-exp-icon">{exp.icon}</div>
                                        <h4 className="ev-exp-title">{exp.title}</h4>
                                        <p className="ev-exp-desc">{exp.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ / CTA */}
                        <div className="ev-cta ev-animate" style={{ animationDelay: '0.4s' }}>
                            <h2 className="ev-cta-title">Join Our Next Visit!</h2>
                            <p className="ev-cta-sub">
                                Students must register at least two weeks in advance for inter-state educational visits.
                                Contact the Student Affairs Office for the latest schedule.
                            </p>
                            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="#" className="ev-btn">
                                    View Visit Schedule <ExternalLink size={16} />
                                </a>
                                <a href="#" className="ev-btn" style={{ background: 'transparent', border: '2px solid #fff', color: '#fff', boxShadow: 'none' }}>
                                    Download Guidelines
                                </a>
                            </div>
                        </div>

                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default ExposureVisit;
