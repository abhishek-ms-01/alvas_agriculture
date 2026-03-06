import { useEffect, useRef } from "react";
import {
    Users, Building2, TrendingUp, Award, Briefcase,
    Home, ChevronRight, CheckCircle2, Target
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import GallerySection from "@/components/GallerySection";
import "./Placement.css";

const stats = [
    {
        icon: <TrendingUp className="w-8 h-8" />,
        value: "94%",
        label: "Placement Rate",
        desc: "Consistently high placement rate across all agricultural streams."
    },
    {
        icon: <Building2 className="w-8 h-8" />,
        value: "45+",
        label: "Recruiters",
        desc: "Partnered with leading national and multinational agri-industries."
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        value: "15 LPA",
        label: "Highest Package",
        desc: "Our students secure competitive recruitment packages in the industry."
    },
    {
        icon: <Users className="w-8 h-8" />,
        value: "1500+",
        label: "Alumni Network",
        desc: "A vast network of alumni working in top positions globally."
    }
];

const recruitmentSteps = [
    { num: "01", title: "Registration", desc: "Students register with the placement cell and submit their resumes." },
    { num: "02", title: "Skill Building", desc: "Training sessions on soft skills, aptitude, and technical interviews." },
    { num: "03", title: "Pre-Placement", desc: "Industry experts conduct sessions about job profiles and expectations." },
    { num: "04", title: "Recruitment", desc: "Campus interviews and selection process by partner organizations." },
    { num: "05", title: "Offer Letter", desc: "Selected candidates receive formal offer letters and project details." },
];

const placedStudents = [
    {
        name: "Akshay Kumar",
        company: "Syngenta",
        salary: "8.5 LPA",
        img: "https://i.pravatar.cc/150?u=akshay",
        role: "Research Associate"
    },
    {
        name: "Priya Sharma",
        company: "Bayer",
        salary: "7.2 LPA",
        img: "https://i.pravatar.cc/150?u=priya",
        role: "Quality Analyst"
    },
    {
        name: "Rahul Hegde",
        company: "Mahindra",
        salary: "6.8 LPA",
        img: "https://i.pravatar.cc/150?u=rahul",
        role: "Agri-Tech Engineer"
    },
    {
        name: "Deepa Rai",
        company: "NABARD",
        salary: "9.0 LPA",
        img: "https://i.pravatar.cc/150?u=deepa",
        role: "Development Officer"
    },
    {
        name: "Vikram Singh",
        company: "KMF",
        salary: "6.5 LPA",
        img: "https://i.pravatar.cc/150?u=vikram",
        role: "Production Supv."
    },
];

const companyLogos = [
    { name: "ICAR", icon: "🌾" },
    { name: "NABARD", icon: "🏦" },
    { name: "Syngenta", icon: "🌱" },
    { name: "Mahindra", icon: "🚜" },
    { name: "KMF", icon: "🐄" },
    { name: "UAS", icon: "🔬" },
    { name: "Bayer", icon: "💊" },
    { name: "Jain Irrigation", icon: "💧" },
    { name: "Godrej Agrovet", icon: "🥚" },
];

const Placement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pl-page">
            <PageBackground count={80} color="22,101,52" opacity={0.12} />

            <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <Header />

                <main className="pl-main" style={{ flex: 1 }}>

                    {/* ── Hero Section ── */}
                    <section className="pl-hero">
                        <div className="pl-blob pl-blob-1" />
                        <div className="pl-blob pl-blob-2" />
                        <div className="pl-blob pl-blob-3" />

                        <div className="pl-hero-content">
                            <span className="pl-badge">
                                <Target size={14} /> Placement Cell
                            </span>
                            <h1 className="pl-title">
                                Cultivating <span>Careers</span> <br />in Agriculture
                            </h1>
                            <p className="pl-subtitle">
                                Empowering agricultural graduates through industry-focused training,
                                expert mentorship, and global placement opportunities.
                            </p>

                            <div className="pl-stat-pill-row">
                                <div className="pl-stat-pill"><strong>100+</strong> Visits/Year</div>
                                <div className="pl-stat-pill"><strong>45+</strong> MoUs</div>
                                <div className="pl-stat-pill"><strong>Tier-1</strong> Partners</div>
                            </div>
                        </div>

                        {/* Wavy edge divider */}
                        <div className="pl-wave">
                            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ height: 56 }}>
                                <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="hsl(40, 30%, 96%)" />
                            </svg>
                        </div>
                    </section>

                    {/* ── Breadcrumb ── */}
                    <nav className="pl-breadcrumb" aria-label="Breadcrumb">
                        <div className="pl-breadcrumb-inner">
                            <Home size={13} />
                            <a href="/">Home</a>
                            <span><ChevronRight size={13} /></span>
                            <span className="pl-cur">Placements</span>
                        </div>
                    </nav>

                    {/* ── Body Content ── */}
                    <div className="pl-body">

                        {/* ── About Section ── */}
                        <div className="pl-overview">
                            <div className="pl-overview-img">
                                <img
                                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                                    alt="Professional placement session"
                                />
                            </div>
                            <div className="pl-overview-text">
                                <div>
                                    <p className="pl-label">About the Cell</p>
                                    <h2 className="pl-heading">Bridges to Success</h2>
                                </div>
                                <p className="pl-para">
                                    The Placement Cell at Alva's Institute of Agricultural Science & Technology
                                    (AIAST) acts as a crucial interface between student aspirations and industry
                                    requirements. We build careers by identifying
                                    individual potential and matching it with the right industry opportunities.
                                </p>
                                <ul className="pl-highlight-list">
                                    {[
                                        "Dedicated Career Counselling & Guidance",
                                        "Regular Industry Expert Interaction Sessions",
                                        "Soft Skills & Personality Development Programs",
                                        "Mock Interview & Aptitude Training",
                                        "Alumni Mentorship for Career Choices"
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <span className="pl-bullet"><CheckCircle2 size={14} /></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* ── Placed Students Moving Cards ── */}
                        <div className="pl-section pl-success-section">
                            <p className="pl-label" style={{ textAlign: 'center' }}>Success Stories</p>
                            <h2 className="pl-heading" style={{ textAlign: 'center', marginBottom: 40 }}>Our Placed Students</h2>

                            <div className="pl-success-scroller">
                                <div className="pl-success-track">
                                    {[...placedStudents, ...placedStudents].map((s, i) => (
                                        <div key={i} className="pl-student-card">
                                            <div className="pl-student-img">
                                                <img src={s.img} alt={s.name} />
                                                <span className="pl-student-salary">{s.salary}</span>
                                            </div>
                                            <div className="pl-student-info">
                                                <h4 className="pl-student-name">{s.name}</h4>
                                                <p className="pl-student-role">{s.role}</p>
                                                <div className="pl-student-company">
                                                    <span className="pl-company-tag">{s.company}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Recruitment Process ── */}
                        <div className="pl-section">
                            <p className="pl-label">How We Work</p>
                            <h2 className="pl-heading">Recruitment Journey</h2>
                            <p className="pl-para">
                                Our systematic approach ensures every student is well-prepared and
                                matched with the right career path.
                            </p>

                            <div className="pl-steps">
                                {recruitmentSteps.map((s, i) => (
                                    <div key={s.num} className="pl-step" style={{ animationDelay: `${i * 0.07}s` }}>
                                        <div className="pl-step-num">{s.num}</div>
                                        <h4 className="pl-step-title">{s.title}</h4>
                                        <p className="pl-step-desc">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Stats Section ── */}
                        <div className="pl-impact-banner">
                            <div className="pl-impact-content">
                                <p className="pl-label" style={{ color: 'var(--pl-gold)' }}>Our Impact</p>
                                <h2 className="pl-heading" style={{ color: '#fff' }}>Legacy of Achievement</h2>
                                <p className="pl-para" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto 40px' }}>
                                    Our track record of excellence is reflected in the success of our students
                                    securing positions in top agricultural organizations worldwide.
                                </p>

                                <div className="pl-stats-grid">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="pl-stat-card">
                                            <div className="pl-stat-icon">{stat.icon}</div>
                                            <span className="pl-stat-label">{stat.label}</span>
                                            <span className="pl-stat-value">{stat.value}</span>
                                            <p className="pl-stat-desc" style={{ color: 'rgba(255,255,255,0.6)' }}>{stat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Companies Scroller ── */}
                        <div className="pl-section pl-companies-section" style={{ overflow: 'hidden' }}>
                            <p className="pl-label" style={{ textAlign: 'center' }}>Top Recruiters</p>
                            <h2 className="pl-heading" style={{ textAlign: 'center', marginBottom: 40 }}>Companies Visited</h2>

                            <div className="pl-logo-scroller">
                                <div className="pl-logo-scroller-inner">
                                    {[...companyLogos, ...companyLogos].map((logo, i) => (
                                        <div key={i} className="pl-logo-item">
                                            <span className="pl-logo-icon">{logo.icon}</span>
                                            <span className="pl-logo-name">{logo.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Gallery Section ── */}
                        <GallerySection />

                        {/* ── CTA ── */}
                        <div className="pl-cta">
                            <h2 className="pl-cta-title">Start Your Career Journey</h2>
                            <p className="pl-cta-sub">
                                Join our network of successful agricultural professionals.
                                Apply for the upcoming recruitment drive today.
                            </p>
                            <div className="pl-cta-btns">
                                <a href="mailto:placements.agri@alvas.ac.in" className="pl-btn-primary">
                                    Contact Placement Cell <Target size={16} />
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

export default Placement;
