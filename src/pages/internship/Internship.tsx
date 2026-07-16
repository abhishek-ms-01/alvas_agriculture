import { useEffect, useRef } from "react";
import {
    Briefcase, Clock, Award, Users, BookOpen, ArrowRight,
    Home, ChevronRight, CheckCircle, Building2, Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./Internship.css";


/* ─── Program cards data ─── */
const programs = [
    {
        tag: "Agriculture",
        title: "Field Crop Production Internship",
        desc: "Hands-on experience with modern crop cultivation techniques, soil management, and sustainable farming practices on real agricultural land.",
        duration: "3 – 6 Months",
        img: "/agriculture filed.jpeg",
        delay: "0.05s",
    },
    {
        tag: "Research",
        title: "Agricultural Research & Lab Training",
        desc: "Work alongside faculty researchers on ongoing projects in plant pathology, agronomy, soil science, and biotechnology.",
        duration: "2 – 4 Months",
        img: "/apiculture6.jpeg",
        delay: "0.1s",
    },
    {
        tag: "Agribusiness",
        title: "Agribusiness & Market Linkage",
        desc: "Gain insights into agricultural value chains, farm-to-market logistics, commodity trading, and rural entrepreneurship models.",
        duration: "3 Months",
        img: "/agrimarkeing.jpeg",
        delay: "0.15s",
    },
    {
        tag: "Technology",
        title: "Precision Agriculture & GIS",
        desc: "Master the use of drones, remote sensing, GIS mapping, and IoT devices for data-driven modern farm management.",
        duration: "1 – 3 Months",
        img: "/technologidrone.jpeg",
        delay: "0.2s",
    },
    {
        tag: "Extension",
        title: "Rural Development & Extension",
        desc: "Engage directly with farming communities; conduct workshops, farmer training programs, and implement government schemes.",
        duration: "2 – 4 Months",
        img: "/ruraldevellopment.jpeg",
        delay: "0.25s",
    },
    {
        tag: "Horticulture",
        title: "Horticulture & Nursery Management",
        desc: "Learn floriculture, landscape gardening, fruit crop cultivation, and nursery establishment practices in our model garden.",
        duration: "2 – 3 Months",
        img: "/horticulture.jpeg",
        delay: "0.3s",
    },
];

/* ─── Process steps ─── */
const steps = [
    { num: "01", title: "Application", desc: "Submit online application with academic transcripts and statement of purpose." },
    { num: "02", title: "Screening", desc: "Shortlisted candidates appear for a brief orientation interview with faculty advisors." },
    { num: "03", title: "Placement", desc: "Students are matched with the best-fit internship program based on interests and merit." },
    { num: "04", title: "Induction", desc: "Mandatory one-day induction covering safety, ethics, and site-specific guidelines." },
    { num: "05", title: "Training", desc: "Execute the internship with regular mentor check-ins and mid-term progress reviews." },
    { num: "06", title: "Certification", desc: "Submit final report and receive a certificate of completion from the institution." },
];

/* ─── Partner organisations ─── */
const partners = [
    { icon: "🌾", name: "ICAR – Indian Council of Agricultural Research" },
    { icon: "🌿", name: "Karnataka Agri. Dept." },
    { icon: "🏦", name: "NABARD" },
    { icon: "🔬", name: "Keladi Shivappa Nayaka Univ." },
    { icon: "🚜", name: "Mahindra Agri" },
    { icon: "🌱", name: "Syngenta India" },
    { icon: "🐄", name: "KMF – Nandini" },
    { icon: "📡", name: "ISRO – NRSC" },
];

/* ─── Main component ─── */
const Internship = () => {
    return (
        <div className="ip-page">
            {/* Full-page particle animation – fixed, behind everything */}
            <PageBackground count={90} color="22,101,52" opacity={0.13} />
            <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <Header />

                <main className="ip-main" style={{ flex: 1 }}>

                    {/* ── Hero ── */}
                    <section className="ip-hero">
                        <div className="ip-hero-bg-image" style={{ backgroundImage: `url(https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg)` }} />
                        <div className="ip-blob ip-blob-1" />
                        <div className="ip-blob ip-blob-2" />
                        <div className="ip-blob ip-blob-3" />

                        <div className="ip-hero-content">
                            <span className="ip-badge"><Briefcase size={12} /> Internship & IPT Programme</span>

                            <h1 className="ip-title">
                                Learn by <span>Doing</span>
                            </h1>
                            <p className="ip-subtitle">
                                Alva's Institute of Agricultural Science & Technology offers structured
                                internships and In-Plant Training (IPT) programs that bridge classroom
                                knowledge with real-world agricultural practice.
                            </p>

                            {/* Hero stats */}
                            <div className="ip-stat-row">
                                {[
                                    { label: "Students Trained", val: "500+" },
                                    { label: "Partner Organisations", val: "30+" },
                                    { label: "Program Varieties", val: "8+" },
                                    { label: "Placement Rate", val: "94%" },
                                ].map(s => (
                                    <div key={s.label} className="ip-stat-pill">
                                        <strong>{s.val}</strong> {s.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Wavy edge */}
                        <div className="ip-wave">
                            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ height: 56 }}>
                                <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="hsl(40,25%,91%)" />
                            </svg>
                        </div>
                    </section>

                    {/* ── Breadcrumb ── */}
                    <nav className="ip-breadcrumb" aria-label="Breadcrumb">
                        <div className="ip-breadcrumb-inner">
                            <Home size={13} />
                            <a href="/">Home</a>
                            <span><ChevronRight size={13} /></span>
                            <span className="ip-cur">Internship / IPT</span>
                        </div>
                    </nav>

                    {/* ── Page body ── */}
                    <div className="ip-body">

                        {/* ── Overview ── */}
                        <div className="ip-overview">
                            <div className="ip-overview-img">
                                <img
                                    src="/apiculture4.jpeg"
                                    alt="Students in agricultural field"
                                />
                            </div>
                            <div className="ip-overview-text">
                                <div>
                                    <p className="ip-label">About the Programme</p>
                                    <h2 className="ip-heading">Internship &amp;<br />In-Plant Training (IPT)</h2>
                                </div>
                                <p className="ip-para">
                                    Our Internship and IPT programme is mandatory for all undergraduate and
                                    postgraduate agriculture students. Designed in alignment with ICAR guidelines,
                                    it immerses students in real farm settings, agri-industries, and research
                                    stations — building practical competence and industry readiness.
                                </p>
                                <ul className="ip-highlight-list">
                                    {[
                                        "Mentor-guided learning with experienced agronomists and researchers",
                                        "Stipend-eligible positions available through partner organisations",
                                        "Certificate of completion recognised by ICAR-affiliated institutions",
                                        "Opportunity for research publication co-authorship for meritorious students",
                                        "Exposure to organic farming, protected cultivation, and smart agriculture",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <span className="ip-bullet"><CheckCircle size={14} /></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* ── Programs ── */}
                        <div className="ip-section">
                            <p className="ip-label">What We Offer</p>
                            <h2 className="ip-heading">Internship Programmes</h2>
                            <p className="ip-para">
                                Choose from a wide range of sector-specific programmes tailored to your
                                academic stream and career aspirations.
                            </p>

                            <div className="ip-programs-grid">
                                {programs.map(prog => (
                                    <div key={prog.title} className="ip-program-card" style={{ animationDelay: prog.delay }}>
                                        <div className="ip-card-img-wrap">
                                            <img src={prog.img} alt={prog.title} className="ip-card-img" />
                                            <span className="ip-card-tag">{prog.tag}</span>
                                        </div>
                                        <div className="ip-card-body">
                                            <h3 className="ip-card-title">{prog.title}</h3>
                                            <p className="ip-card-desc">{prog.desc}</p>
                                            <span className="ip-card-duration">
                                                <Clock size={12} /> {prog.duration}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Process ── */}
                        <div className="ip-section">
                            <p className="ip-label">How It Works</p>
                            <h2 className="ip-heading">Application Process</h2>
                            <p className="ip-para">
                                Our transparent, step-by-step process ensures every student finds the right
                                placement quickly and smoothly.
                            </p>

                            <div className="ip-steps">
                                {steps.map((s, i) => (
                                    <div key={s.num} className="ip-step" style={{ animationDelay: `${i * 0.07}s` }}>
                                        <div className="ip-step-num">{s.num}</div>
                                        <h4 className="ip-step-title">{s.title}</h4>
                                        <p className="ip-step-desc">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Eligibility Info ── */}
                        <div className="ip-section">
                            <p className="ip-label">Eligibility & Details</p>
                            <h2 className="ip-heading">Who Can Apply?</h2>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20, marginTop: 24 }}>
                                {[
                                    { icon: <BookOpen size={20} />, title: "Eligible Students", body: "All B.Sc.(Agri.), M.Sc.(Agri.) and Ph.D. students enrolled at AIAST are eligible after completing their second semester." },
                                    { icon: <Award size={20} />, title: "Academic Requirement", body: "Minimum 55% aggregate in the previous semester. Students on academic probation are not eligible for IPT placements." },
                                    { icon: <Users size={20} />, title: "Duration & Credits", body: "IPT duration ranges from 30 to 180 days. Successful completion earns 4–8 academic credits as per university norms." },
                                    { icon: <Building2 size={20} />, title: "Placement Locations", body: "Placements are available across Karnataka, Kerala, Tamil Nadu, Goa, and select pan-India ICAR research stations." },
                                    { icon: <Briefcase size={20} />, title: "Stipend & Support", body: "Selected students at partner organisations receive a monthly stipend of ₹3,000 – ₹10,000 along with accommodation." },
                                    { icon: <Mail size={20} />, title: "How to Apply", body: "Download the IPT registration form from our website or collect it from the student affairs office. Deadline: January 15 each year." },
                                ].map((card, i) => (
                                    <div key={card.title} className="ip-program-card" style={{ animationDelay: `${i * 0.07}s` }}>
                                        <div className="ip-card-body" style={{ display: "flex", gap: 14 }}>
                                            <div className="ip-bullet" style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10 }}>{card.icon}</div>
                                            <div>
                                                <h4 className="ip-card-title" style={{ fontSize: "0.97rem" }}>{card.title}</h4>
                                                <p className="ip-card-desc" style={{ margin: 0 }}>{card.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Partners ── */}
                        <div className="ip-partners">
                            <p className="ip-label" style={{ textAlign: "center" }}>Where Our Students Go</p>
                            <h2 className="ip-heading" style={{ textAlign: "center", margin: "4px 0 0" }}>Partner Organisations</h2>
                            <p style={{ fontSize: "0.9rem", color: "var(--ip-muted)", marginTop: 8 }}>
                                We have formal MoU-based partnerships with leading agri-organisations.
                            </p>
                            <div className="ip-partners-grid">
                                {partners.map(p => (
                                    <span key={p.name} className="ip-partner-chip">
                                        <span>{p.icon}</span> {p.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* ── CTA ── */}
                        <div className="ip-cta">
                            <h2 className="ip-cta-title">Ready to Start Your Field Journey?</h2>
                            <p className="ip-cta-sub">
                                Applications for the 2025–26 Internship & IPT batch are now open.
                                Limited seats are available — apply today!
                            </p>
                            <div className="ip-cta-btns">
                                <a href="mailto:agri@alvas.ac.in" className="ip-btn-primary">
                                    Apply Now <ArrowRight size={16} />
                                </a>
                                <a href="#" className="ip-btn-outline">
                                    Download Brochure <ArrowRight size={16} />
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

export default Internship;
