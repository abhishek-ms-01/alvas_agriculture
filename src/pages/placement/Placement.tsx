import {
    Users, Building2, TrendingUp, Award, Briefcase, Target,
    Home, ChevronRight, CheckCircle, ArrowRight, Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../internship/Internship.css";

const placedStudents = [
    { name: "Akshay Kumar",  company: "Syngenta",  salary: "8.5 LPA", role: "Research Associate",   img: "https://i.pravatar.cc/150?u=akshay" },
    { name: "Priya Sharma",  company: "Bayer",     salary: "7.2 LPA", role: "Quality Analyst",       img: "https://i.pravatar.cc/150?u=priya"  },
    { name: "Rahul Hegde",   company: "Mahindra",  salary: "6.8 LPA", role: "Agri-Tech Engineer",    img: "https://i.pravatar.cc/150?u=rahul"  },
    { name: "Deepa Rai",     company: "NABARD",    salary: "9.0 LPA", role: "Development Officer",   img: "https://i.pravatar.cc/150?u=deepa"  },
    { name: "Vikram Singh",  company: "KMF",       salary: "6.5 LPA", role: "Production Supervisor", img: "https://i.pravatar.cc/150?u=vikram" },
    { name: "Sneha Pai",     company: "Godrej Agrovet", salary: "7.8 LPA", role: "Field Executive", img: "https://i.pravatar.cc/150?u=sneha"  },
];

const stats = [
    { icon: <TrendingUp size={22} />, value: "94%",   label: "Placement Rate",    desc: "Consistently high placement across all agricultural streams." },
    { icon: <Building2  size={22} />, value: "45+",   label: "Recruiters",        desc: "Partnered with leading national and multinational agri-industries." },
    { icon: <Briefcase  size={22} />, value: "15 LPA",label: "Highest Package",   desc: "Students secure competitive recruitment packages in industry." },
    { icon: <Users      size={22} />, value: "1500+", label: "Alumni Network",    desc: "A vast network of alumni thriving in top positions globally." },
];

const steps = [
    { num: "01", title: "Registration",    desc: "Students register with the placement cell and submit polished resumes and portfolios." },
    { num: "02", title: "Skill Building",  desc: "Training sessions on soft skills, aptitude, GD, and technical interview preparation." },
    { num: "03", title: "Pre-Placement",   desc: "Industry experts conduct sessions explaining job profiles and company expectations." },
    { num: "04", title: "Recruitment",     desc: "Campus interviews and selection rounds conducted by visiting partner organisations." },
    { num: "05", title: "Offer Letter",    desc: "Selected candidates receive formal offer letters with salary and joining details." },
];

const recruiters = [
    { icon: "🌾", name: "ICAR" },         { icon: "🏦", name: "NABARD" },
    { icon: "🌱", name: "Syngenta" },      { icon: "🚜", name: "Mahindra Agri" },
    { icon: "🐄", name: "KMF – Nandini"}, { icon: "🔬", name: "UAS Dharwad" },
    { icon: "💊", name: "Bayer" },         { icon: "💧", name: "Jain Irrigation" },
    { icon: "🥚", name: "Godrej Agrovet"},
];

const Placement = () => (
    <div className="ip-page">
        <PageBackground count={80} color="22,101,52" opacity={0.12} />
        <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main className="ip-main" style={{ flex: 1 }}>

                {/* ── Hero ── */}
                <section className="ip-hero">
                    <div className="ip-blob ip-blob-1" /><div className="ip-blob ip-blob-2" /><div className="ip-blob ip-blob-3" />
                    <div className="ip-hero-content">
                        <span className="ip-badge"><Target size={12} /> Placement Cell</span>
                        <h1 className="ip-title">Cultivating <span>Careers</span> in Agriculture</h1>
                        <p className="ip-subtitle">
                            Empowering agricultural graduates through industry-focused training, expert mentorship, and placement opportunities with leading national and global agri-organisations.
                        </p>
                        <div className="ip-stat-row">
                            {[
                                { val: "94%",   label: "Placement Rate" },
                                { val: "45+",   label: "Recruiting Partners" },
                                { val: "15 LPA",label: "Highest Package" },
                                { val: "1500+", label: "Alumni Network" },
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
                        <span className="ip-cur">Placements</span>
                    </div>
                </nav>

                <div className="ip-body">

                    {/* ── Overview ── */}
                    <div className="ip-overview">
                        <div className="ip-overview-img">
                            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80" alt="Placement session" />
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

                    {/* ── Placed Students ── */}
                    <div className="ip-section">
                        <p className="ip-label">Success Stories</p>
                        <h2 className="ip-heading">Our Placed Students</h2>
                        <p className="ip-para">A glimpse of our graduates thriving in leading agricultural organisations across the country.</p>
                        <div className="ip-programs-grid">
                            {placedStudents.map((s, i) => (
                                <div key={i} className="ip-program-card" style={{ animationDelay: `${i * 0.07}s` }}>
                                    <div className="ip-card-img-wrap" style={{ height: 140 }}>
                                        <img src={s.img} alt={s.name} className="ip-card-img" style={{ objectPosition: "top" }} />
                                        <span className="ip-card-tag">{s.salary}</span>
                                    </div>
                                    <div className="ip-card-body">
                                        <h3 className="ip-card-title">{s.name}</h3>
                                        <p className="ip-card-desc">{s.role}</p>
                                        <span className="ip-card-duration" style={{ color: "var(--ip-green-mid)", fontWeight: 700 }}>
                                            {s.company}
                                        </span>
                                    </div>
                                </div>
                            ))}
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

                    {/* ── Stats ── */}
                    <div className="ip-section">
                        <p className="ip-label">Our Impact</p>
                        <h2 className="ip-heading">Legacy of Achievement</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20, marginTop: 24 }}>
                            {stats.map((stat, i) => (
                                <div key={i} className="ip-program-card" style={{ animationDelay: `${i * 0.07}s` }}>
                                    <div className="ip-card-body" style={{ display: "flex", gap: 14 }}>
                                        <div className="ip-bullet" style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 10, fontSize: 22 }}>{stat.icon}</div>
                                        <div>
                                            <h4 className="ip-card-title" style={{ fontSize: "1.4rem" }}>{stat.value}</h4>
                                            <p style={{ fontWeight: 700, color: "var(--ip-green-mid)", fontSize: "0.85rem", margin: "2px 0" }}>{stat.label}</p>
                                            <p className="ip-card-desc" style={{ margin: 0 }}>{stat.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Recruiters ── */}
                    <div className="ip-partners">
                        <p className="ip-label" style={{ textAlign: "center" }}>Top Recruiters</p>
                        <h2 className="ip-heading" style={{ textAlign: "center", margin: "4px 0 0" }}>Companies Visited</h2>
                        <p style={{ fontSize: "0.9rem", color: "var(--ip-muted)", marginTop: 8 }}>
                            We have formal MoU-based placements with leading agri-organisations nationally.
                        </p>
                        <div className="ip-partners-grid">
                            {recruiters.map(r => (
                                <span key={r.name} className="ip-partner-chip"><span>{r.icon}</span> {r.name}</span>
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
