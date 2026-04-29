import {
    Users, Building2, TrendingUp, Award, Briefcase, Target,
    Home, ChevronRight, CheckCircle, ArrowRight, Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../internship/Internship.css";



const steps = [
    { num: "01", title: "Registration",    desc: "Students register with the placement cell and submit polished resumes and portfolios." },
    { num: "02", title: "Skill Building",  desc: "Training sessions on soft skills, aptitude, GD, and technical interview preparation." },
    { num: "03", title: "Pre-Placement",   desc: "Industry experts conduct sessions explaining job profiles and company expectations." },
    { num: "04", title: "Recruitment",     desc: "Campus interviews and selection rounds conducted by visiting partner organisations." },
    { num: "05", title: "Offer Letter",    desc: "Selected candidates receive formal offer letters with salary and joining details." },
];



const Placement = () => (
    <div className="ip-page">
        <PageBackground count={80} color="22,101,52" opacity={0.12} />
        <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main className="ip-main" style={{ flex: 1 }}>

                {/* ── Hero ── */}
                <section className="ip-hero">
                    <div className="ip-hero-bg-image" style={{ backgroundImage: `url(https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg)` }} />
                    <div className="ip-blob ip-blob-1" /><div className="ip-blob ip-blob-2" /><div className="ip-blob ip-blob-3" />
                    <div className="ip-hero-content">
                        <span className="ip-badge"><Target size={12} /> Placement Cell</span>
                        <h1 className="ip-title">Upcoming <span>Graduates</span></h1>
                        <p className="ip-subtitle">
                            Preparing for Excellence
                        </p>

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
                        <span className="ip-cur">Placements</span>
                    </div>
                </nav>

                <div className="ip-body">

                    {/* ── Overview ── */}
                    <div className="ip-overview">
                        <div className="ip-overview-img">
                            <img src="/PLACEMENT.jpg" alt="Placement session" />
                        </div>
                        <div className="ip-overview-text">
                            <p className="ip-label">About the Cell</p>
                            <h2 className="ip-heading">Bridges to <br />Success</h2>
                            <p className="ip-para">
                                The Placement Cell at Alva's IAST acts as a vital interface between student aspirations and industry requirements. We identify individual strengths and connect our graduates with the right roles — in agri-research, government services, agri-business, banking, and beyond.
                            </p>
                            <ul className="ip-highlight-list">
                                {[
                                    "Dedicated Career Counselling & Personalised Guidance",
                                    "Regular Industry Expert Interaction Sessions",
                                    "Soft Skills & Personality Development Workshops",
                                    "Mock Interview & Aptitude Test Training",
                                    "Alumni Mentorship Network for Career Decisions",
                                ].map((item, i) => (
                                    <li key={i}><span className="ip-bullet"><CheckCircle size={14} /></span>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ── Placed Students Info ── */}
                    <div className="ip-section">
                        <p className="ip-label">First Batch</p>
                        <h2 className="ip-heading">Upcoming Graduates</h2>
                        <div style={{ background: "linear-gradient(135deg, rgba(22, 101, 52, 0.05), rgba(22, 101, 52, 0.1))", border: "1px solid rgba(22, 101, 52, 0.15)", borderRadius: "16px", padding: "40px", textAlign: "center", marginTop: "24px" }}>
                            <Award size={48} style={{ color: "var(--ip-green-dark)", opacity: 0.8, fill: "var(--ip-green-light)", marginBottom: "16px" }} />
                            <h3 style={{ color: "var(--ip-content)", fontSize: "1.6rem", fontWeight: 700, marginBottom: "12px", fontFamily: "var(--ip-font-heading)" }}>Preparing for Excellence</h3>
                            <p style={{ color: "var(--ip-muted)", fontSize: "1.1rem", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
                                Alva's Institute of Agricultural Sciences and Technology embarked on its educational journey in <strong>2025</strong>. 
                                Our maiden batch of agricultural professionals is currently undergoing rigorous academic and practical training. We are actively building industry partnerships and look forward to our first placement drive as these students prepare to become future agricultural leaders!
                            </p>
                        </div>
                    </div>

                    {/* ── Recruitment Process ── */}
                    <div className="ip-section">
                        <p className="ip-label">How We Work</p>
                        <h2 className="ip-heading">Recruitment Journey</h2>
                        <p className="ip-para">Our systematic, student-centred process ensures every graduate is well-prepared and matched with the right career opportunity.</p>
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


                    {/* ── CTA ── */}
                    <div className="ip-cta">
                        <h2 className="ip-cta-title">Start Your Career Journey</h2>
                        <p className="ip-cta-sub">
                            Join our network of successful agricultural professionals. Contact the Placement Cell for the upcoming 2025–26 recruitment drive.
                        </p>
                        <div className="ip-cta-btns">
                            <a href="mailto:placements.agri@alvas.ac.in" className="ip-btn-primary">
                                Contact Placement Cell <ArrowRight size={16} />
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

export default Placement;
