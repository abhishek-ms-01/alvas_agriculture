import {
    Home, ChevronRight, CheckCircle, Leaf, ShieldCheck, Wifi, Zap, HeartPulse, Coffee, UserCheck, Users
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../internship/Internship.css";

const amenities = [
    "Premium twin & multi-sharing rooms with modern furniture.",
    "24/7 Security with smart CCTV surveillance & dedicated wardens.",
    "High-speed Wi-Fi connectivity throughout all residential blocks.",
    "100% DG power backup for uninterrupted academic study.",
    "Hygienic multi-cuisine cafeteria serving farm-fresh organic meals.",
    "On-campus health center with 24/7 medical support and ambulance.",
];

const ResidentialLife = () => (
    <div className="ip-page">
        <PageBackground count={80} color="22,101,52" opacity={0.12} />
        <div style={{ position: "relative", zIndex: 3, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <main className="ip-main" style={{ flex: 1 }}>

                {/* ── Hero ── */}
                <section className="ip-hero">
                    <div className="ip-hero-bg-image" style={{ backgroundImage: `url(/hostel_exterior_ai_1775730756346.png)` }} />
                    <div className="ip-blob ip-blob-1" /><div className="ip-blob ip-blob-2" /><div className="ip-blob ip-blob-3" />
                    <div className="ip-hero-content">
                        <span className="ip-badge"><Leaf size={12} /> Institutional Living</span>
                        <h1 className="ip-title">Residential Life & <span>Green Infrastructure</span></h1>
                        <p className="ip-subtitle">
                            Experience a harmonious blend of modern living and natural tranquility. Our 100-acre lush green campus provides the perfect sanctuary for academic focus and personal development.
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
                        <a href="/campus-life">Campus Life</a>
                        <span><ChevronRight size={13} /></span>
                        <span className="ip-cur">Residential Life</span>
                    </div>
                </nav>

                <div className="ip-body">

                    {/* ── Overview: Green Campus ── */}
                    <div className="ip-overview">
                        <div className="ip-overview-img">
                            <img src="/HOSTEL2.jpg" alt="Alva's Green Campus" />
                        </div>
                        <div className="ip-overview-text">
                            <p className="ip-label">Green Infrastructure</p>
                            <h2 className="ip-heading">Where Strangers Become <br />Family</h2>
                            <p className="ip-para">
                                Spanning over 100 acres in the serene Western Ghats region, our campus is a masterpiece of sustainable infrastructure. With a carbon-neutral vision, we have integrated rain-water harvesting, organic waste management, and solar-enabled facilities into our daily operations.
                            </p>
                            <ul className="ip-highlight-list">
                                {[
                                    "100+ species of rare medicinal and aromatic plants.",
                                    "Extensive herbal gardens (Shobhavana) for practical study.",
                                    "Oxygen-rich environment promoting mental well-being.",
                                    "Eco-friendly architecture that minimizes environmental impact.",
                                    "Dedicated nature-walkways for quiet contemplation.",
                                ].map((item, i) => (
                                    <li key={i}><span className="ip-bullet"><Leaf size={14} /></span>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ── Hostel Living ── */}
                    <div className="ip-section">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <p className="ip-label">Residential Life</p>
                                <h2 className="ip-heading">A Home Beyond <br />The Classroom</h2>
                                <p className="ip-para">
                                    Our residential blocks are designed for comfort and concentration. We offer spacious, well-ventilated rooms with modern furniture and high-speed internet. Every hostel is supervised by experienced wardens ensuring a safe and disciplined environment for students to excel academically and socially.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center gap-3">
                                        <Wifi className="text-accent" size={20} />
                                        <span className="text-sm font-bold text-deep-green"> Campus Wi-Fi</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center gap-3">
                                        <ShieldCheck className="text-accent" size={20} />
                                        <span className="text-sm font-bold text-deep-green"> 24/7 Security</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center gap-3">
                                        <Zap className="text-accent" size={20} />
                                        <span className="text-sm font-bold text-deep-green"> 24x7 Power</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center gap-3">
                                        <HeartPulse className="text-accent" size={20} />
                                        <span className="text-sm font-bold text-deep-green"> Health Care</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <img 
                                    src="/HOSTEL 1.jpg" 
                                    className="rounded-3xl shadow-xl w-full object-cover h-[400px]" 
                                    alt="Modern Hostel Room"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Dining Excellence ── */}
                    <div className="ip-section">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img 
                                    src="/hostel4.jpg" 
                                    className="rounded-3xl shadow-xl w-full object-cover h-[400px]" 
                                    alt="Luxury Dining Hall"
                                />
                            </div>
                            <div>
                                <p className="ip-label">Nutritional Wellness</p>
                                <h2 className="ip-heading">Farm-to-Table <br />Dining</h2>
                                <p className="ip-para">
                                    We believe that "Health is Wealth." Our hygienic cafeterias serve nutritious, farm-fresh organic meals prepared in a state-of-the-art kitchen. Students enjoy a multi-cuisine menu that balances local traditions with modern nutritional standards.
                                </p>
                                <ul className="ip-highlight-list mt-8">
                                    <li><span className="ip-bullet"><Coffee size={14} /></span> Hygienic preparation with organic farm-fresh produce.</li>
                                    <li><span className="ip-bullet"><UserCheck size={14} /></span> Specialized meals for students with specific dietary needs.</li>
                                    <li><span className="ip-bullet"><Users size={14} /></span> Expansive seating capacity with a focus on hygiene and social interaction.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ── Amenities Quick Check ── */}
                    <div className="ip-section pb-20">
                        <p className="ip-label">Quick Summary</p>
                        <h2 className="ip-heading">Facility Highlights</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {amenities.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={18} />
                                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    </div>
);

export default ResidentialLife;
