import {
    Bus, MapPin, Globe, BookOpen, Users, Leaf, Camera, ExternalLink,
    Home, ChevronRight, CheckCircle, ArrowRight, Clock,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../internship/Internship.css";

const destinations = [
    {
        tag: "Research",
        title: "ICAR Research Stations",
        desc: "Visiting various ICAR stations across India to witness the latest in crop improvement, plant protection, and agricultural biotechnology.",
        img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80",
        date: "Semester IV & VI",
        delay: "0.05s",
    },
    {
        tag: "Sustainability",
        title: "Organic Model Farms",
        desc: "Hands-on exposure to integrated farming systems, zero-budget natural farming, and traditional organic cultivation practices.",
        img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80",
        date: "Annual Visit",
        delay: "0.1s",
    },
    {
        tag: "Industry",
        title: "Agro-Processing Units",
        desc: "Learning about the value chain from farm to fork by visiting large-scale food processing and preservation facilities.",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
        date: "Semester V",
        delay: "0.15s",
    },
    {
        tag: "Horticulture",
        title: "State Forest Nurseries",
        desc: "Understanding propagation techniques for forest species and ornamental plants in large, climate-controlled nursery environments.",
        img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
        date: "Semester III",
        delay: "0.2s",
    },
    {
        tag: "Education",
        title: "Agricultural Universities",
        desc: "Interaction sessions with scientists and professors at premier agricultural universities including UAS Bangalore and Dharwad.",
        img: "https://images.unsplash.com/photo-1523050337458-5c56e75b0dd2?w=600&q=80",
        date: "Inter-State Visit",
        delay: "0.25s",
    },
    {
        tag: "Technology",
        title: "High-Tech Greenhouses",
        desc: "Experiencing poly-house cultivation, hydroponics, aeroponics, and advanced precision farming setups in state-of-the-art facilities.",
        img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
        date: "Semester VIII",
        delay: "0.3s",
    },
];

const gains = [
    { icon: <Globe size={20} />,    title: "Regional Diversity",  body: "Exposure to diverse agro-climatic zones, regional crop specialties, and farming traditions across Karnataka and beyond." },
    { icon: <BookOpen size={20} />, title: "Live Demonstrations", body: "Firsthand observation of modern agricultural machinery, cultivation methods, and technology in action." },
    { icon: <Users size={20} />,    title: "Expert Networking",   body: "Direct interaction with senior ICAR scientists, progressive farmers, and industrial agricultural leaders." },
    { icon: <Leaf size={20} />,     title: "Sustainable Practices", body: "Learning about eco-friendly farming, integrated crop management, and biodiversity conservation strategies." },
    { icon: <Camera size={20} />,   title: "Field Documentation", body: "Training in field data collection, site observation report writing, and professional field photography." },
    { icon: <MapPin size={20} />,   title: "Site Reconnaissance", body: "Hands-on skills in field scouting, geo-tagging, and documenting real-world agricultural production systems." },
];

const partners = [
    { icon: "🌾", name: "ICAR Stations" },        { icon: "🔬", name: "UAS Dharwad" },
    { icon: "🌿", name: "Karnataka Agri Dept." }, { icon: "🏛️", name: "KVK Centres" },
    { icon: "🌱", name: "Organic Farms" },        { icon: "🏭", name: "Agro Food Units" },
    { icon: "🌳", name: "Forest Dept." },         { icon: "🐄", name: "KMF – Nandini" },
];

const ExposureVisit = () => (
    <div className="ip-page">
        <PageBackground count={100} color="22,101,52" opacity={0.13} />
        <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main className="ip-main" style={{ flex: 1 }}>

                {/* ── Hero ── */}
                <section className="ip-hero">
                    <div className="ip-blob ip-blob-1" /><div className="ip-blob ip-blob-2" /><div className="ip-blob ip-blob-3" />
                    <div className="ip-hero-content">
                        <span className="ip-badge"><Bus size={12} /> Exposure & Educational Visits</span>
                        <h1 className="ip-title">Beyond the <span>Classroom</span></h1>
                        <p className="ip-subtitle">
                            At Alva's IAST, we believe learning is most powerful when it happens in the field. Our students travel across the country to witness agricultural innovation, research, and industry firsthand.
                        </p>
                        <div className="ip-stat-row">
                            {[
                                { val: "12+", label: "Visits Annually" },
                                { val: "40+", label: "Sites Covered" },
                                { val: "8",   label: "States Visited" },
                                { val: "25+", label: "Partner Organisations" },
                            ].map(s => (
                                <div key={s.label} className="ip-stat-pill">
                                    <strong>{s.val}</strong> {s.label}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ip-wave">
                        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ height: 56 }}>
                            <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="hsl(40,25%,91%)" />
                        </svg>
                    </div>
                </section>

                {/* ── Breadcrumb ── */}
                <nav className="ip-breadcrumb">
                    <div className="ip-breadcrumb-inner">
                        <Home size={13} /><a href="/">Home</a>
                        <span><ChevronRight size={13} /></span>
                        <span className="ip-cur">Exposure Visit</span>
                    </div>
                </nav>

                <div className="ip-body">

                    {/* ── Overview ── */}
                    <div className="ip-overview">
                        <div className="ip-overview-img">
                            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80" alt="Students on field visit" />
                        </div>
                        <div className="ip-overview-text">
                            <p className="ip-label">Educational Journeys</p>
                            <h2 className="ip-heading">Bridging Theory <br />&amp; Practice</h2>
                            <p className="ip-para">
                                Exposure visits are a mandatory, integral part of the curriculum at Alva's IAST. These visits provide students with a unique opportunity to interact with industry experts, scientists, and progressive farmers — witnessing real-world applications of classroom concepts in action.
                            </p>
                            <ul className="ip-highlight-list">
                                {[
                                    "Curriculum-integrated visits planned in alignment with course content",
                                    "Expert-led field briefings before and after each visit",
                                    "Observation report submission counts toward course credits",
                                    "Inter-state visits to leading agricultural universities and research stations",
                                    "Exposure to modern farm mechanisation, precision tools, and AgriTech",
                                ].map((item, i) => (
                                    <li key={i}><span className="ip-bullet"><CheckCircle size={14} /></span>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ── Destinations ── */}
                    <div className="ip-section">
                        <p className="ip-label">Site Categories</p>
                        <h2 className="ip-heading">Key Visit Destinations</h2>
                        <p className="ip-para">Choose from a wide range of sector-specific visits aligned to your academic stream and year of study.</p>
                        <div className="ip-programs-grid">
                            {destinations.map(dest => (
                                <div key={dest.title} className="ip-program-card" style={{ animationDelay: dest.delay }}>
                                    <div className="ip-card-img-wrap">
                                        <img src={dest.img} alt={dest.title} className="ip-card-img" />
                                        <span className="ip-card-tag">{dest.tag}</span>
                                    </div>
                                    <div className="ip-card-body">
                                        <h3 className="ip-card-title">{dest.title}</h3>
                                        <p className="ip-card-desc">{dest.desc}</p>
                                        <span className="ip-card-duration"><Clock size={12} /> {dest.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── What Students Gain ── */}
                    <div className="ip-section">
                        <p className="ip-label">The Experience</p>
                        <h2 className="ip-heading">What Students Gain</h2>
                        <p className="ip-para">Each exposure visit is structured to maximise practical takeaways and professional development.</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20, marginTop: 24 }}>
                            {gains.map((g, i) => (
                                <div key={g.title} className="ip-program-card" style={{ animationDelay: `${i * 0.07}s` }}>
                                    <div className="ip-card-body" style={{ display: "flex", gap: 14 }}>
                                        <div className="ip-bullet" style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10 }}>{g.icon}</div>
                                        <div>
                                            <h4 className="ip-card-title" style={{ fontSize: "0.97rem" }}>{g.title}</h4>
                                            <p className="ip-card-desc" style={{ margin: 0 }}>{g.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Partners ── */}
                    <div className="ip-partners">
                        <p className="ip-label" style={{ textAlign: "center" }}>Where Our Students Go</p>
                        <h2 className="ip-heading" style={{ textAlign: "center", margin: "4px 0 0" }}>Visit Partner Organisations</h2>
                        <p style={{ fontSize: "0.9rem", color: "var(--ip-muted)", marginTop: 8 }}>
                            We visit leading agricultural research, industry, and government organisations across India.
                        </p>
                        <div className="ip-partners-grid">
                            {partners.map(p => (
                                <span key={p.name} className="ip-partner-chip"><span>{p.icon}</span> {p.name}</span>
                            ))}
                        </div>
                    </div>

                    {/* ── CTA ── */}
                    <div className="ip-cta">
                        <h2 className="ip-cta-title">Join Our Next Exposure Visit!</h2>
                        <p className="ip-cta-sub">
                            Students must register at least 2 weeks before inter-state visits. Contact the Student Affairs Office for the latest schedule and guidelines.
                        </p>
                        <div className="ip-cta-btns">
                            <a href="#" className="ip-btn-primary">
                                View Visit Schedule <ExternalLink size={16} />
                            </a>
                            <a href="#" className="ip-btn-outline">
                                Download Guidelines <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    </div>
);

export default ExposureVisit;
