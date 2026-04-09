import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Home, ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../internship/Internship.css";

const contactCards = [
    {
        icon: <MapPin size={20} />,
        title: "Our Address",
        lines: [
            "Alva's Institute of Agricultural Science & Technology",
            "Shobhavana Campus, Mijar, Moodbidri – 574 225",
            "D.K. District, Karnataka, India",
        ],
        delay: "0.05s",
    },
    {
        icon: <Phone size={20} />,
        title: "Phone",
        lines: ["+91 8258 262725", "+91 8258 262726"],
        delay: "0.1s",
    },
    {
        icon: <Mail size={20} />,
        title: "Email",
        lines: ["info@alvas.ac.in", "agri@alvas.ac.in"],
        delay: "0.15s",
    },
    {
        icon: <Clock size={20} />,
        title: "Office Hours",
        lines: ["Mon – Saturday: 9:00 AM – 5:00 PM", "Sunday: Closed"],
        delay: "0.2s",
    },
];

const ContactUs = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => { setLoading(false); setSent(true); }, 1800);
    };

    return (
        <div className="ip-page">
            <PageBackground count={80} color="22,101,52" opacity={0.13} />
            <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <Header />
                <main className="ip-main" style={{ flex: 1 }}>

                    {/* ── Hero ── */}
                    <section className="ip-hero">
                        <div className="ip-hero-bg-image" style={{ backgroundImage: `url(https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg)` }} />
                        <div className="ip-blob ip-blob-1" /><div className="ip-blob ip-blob-2" /><div className="ip-blob ip-blob-3" />
                        <div className="ip-hero-content">
                            <span className="ip-badge"><Mail size={12} /> Get In Touch</span>
                            <h1 className="ip-title">Contact <span>Us</span></h1>
                            <p className="ip-subtitle">
                                Have a question about admissions, research, or collaborations? We're here and happy to help — reach out and our team will respond within 24 hours.
                            </p>
                            <div className="ip-stat-row">
                                <div className="ip-stat-pill"><strong>24 hrs</strong> Response Time</div>
                                <div className="ip-stat-pill"><strong>Mon–Sat</strong> Office Hours</div>
                                <div className="ip-stat-pill"><strong>Moodbidri</strong> Karnataka</div>
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
                            <span className="ip-cur">Contact Us</span>
                        </div>
                    </nav>

                    <div className="ip-body">

                        {/* ── Contact Info Cards ── */}
                        <div className="ip-section">
                            <p className="ip-label">Reach Out</p>
                            <h2 className="ip-heading">We'd love to hear from you</h2>
                            <p className="ip-para">Choose the most convenient way to get in touch with us.</p>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20, marginTop: 24 }}>
                                {contactCards.map((card, i) => (
                                    <div key={i} className="ip-program-card" style={{ animationDelay: card.delay }}>
                                        <div className="ip-card-body" style={{ display: "flex", gap: 14 }}>
                                            <div className="ip-bullet" style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 10 }}>
                                                {card.icon}
                                            </div>
                                            <div>
                                                <h4 className="ip-card-title" style={{ fontSize: "0.97rem" }}>{card.title}</h4>
                                                {card.lines.map((line, j) => (
                                                    <p key={j} className="ip-card-desc" style={{ margin: j === 0 ? 0 : "2px 0 0" }}>{line}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Form + Map ── */}
                        <div className="ip-overview" style={{ alignItems: "flex-start" }}>

                            {/* Map */}
                            <div className="ip-overview-img" style={{ overflow: "hidden", borderRadius: 16, padding: 0, flexShrink: 0 }}>
                                <iframe
                                    title="Alva's Campus Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4143736746813!2d74.9926861758652!3d13.072895612646698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3add5bd600001%3A0x6b0ad93f6b0f0f0f!2sAlva's%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1709121234567!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, display: "block", minHeight: 420 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* Form */}
                            <div className="ip-overview-text" style={{ flex: 1 }}>
                                <p className="ip-label">Drop Us a Line</p>
                                <h2 className="ip-heading">Send a Message</h2>

                                {sent ? (
                                    <div style={{ textAlign: "center", padding: "40px 20px" }}>
                                        <div style={{
                                            width: 64, height: 64, borderRadius: "50%",
                                            background: "var(--ip-green-mid)", color: "#fff",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: 28, margin: "0 auto 16px",
                                        }}>✓</div>
                                        <h3 style={{ color: "var(--ip-green-deep)", marginBottom: 8 }}>Message Sent!</h3>
                                        <p className="ip-para">Thank you for reaching out. Our team will respond shortly.</p>
                                        <button
                                            className="ip-btn-primary"
                                            style={{ marginTop: 16 }}
                                            onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                                        >
                                            Send Another <ArrowRight size={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                        {/* Name + Email row */}
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                                            {[
                                                { id: "name",  label: "Full Name",     type: "text",  ph: "Your full name",    req: true },
                                                { id: "email", label: "Email Address", type: "email", ph: "your@email.com",     req: true },
                                            ].map(f => (
                                                <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                                                    <label htmlFor={f.id} style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ip-green-deep)" }}>{f.label}</label>
                                                    <input
                                                        id={f.id} name={f.id} type={f.type} placeholder={f.ph}
                                                        value={(form as any)[f.id]} onChange={handleChange} required={f.req}
                                                        style={{ padding: "10px 14px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none", fontFamily: "inherit", transition: "border-color .2s" }}
                                                        onFocus={e => (e.target.style.borderColor = "var(--ip-green-mid)")}
                                                        onBlur={e => (e.target.style.borderColor = "#d1d5db")}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Phone + Subject */}
                                        {[
                                            { id: "phone",   label: "Phone (optional)", type: "tel",  ph: "+91 XXXXX XXXXX", req: false },
                                            { id: "subject", label: "Subject",           type: "text", ph: "What is this about?", req: true },
                                        ].map(f => (
                                            <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                                                <label htmlFor={f.id} style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ip-green-deep)" }}>{f.label}</label>
                                                <input
                                                    id={f.id} name={f.id} type={f.type} placeholder={f.ph}
                                                    value={(form as any)[f.id] ?? ""} onChange={handleChange} required={f.req}
                                                    style={{ padding: "10px 14px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none", fontFamily: "inherit", transition: "border-color .2s" }}
                                                    onFocus={e => (e.target.style.borderColor = "var(--ip-green-mid)")}
                                                    onBlur={e => (e.target.style.borderColor = "#d1d5db")}
                                                />
                                            </div>
                                        ))}

                                        {/* Message */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                                            <label htmlFor="message" style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ip-green-deep)" }}>Message</label>
                                            <textarea
                                                id="message" name="message" rows={5} placeholder="Write your message here…"
                                                value={form.message} onChange={handleChange} required
                                                style={{ padding: "10px 14px", borderRadius: 10, border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none", fontFamily: "inherit", resize: "vertical", transition: "border-color .2s" }}
                                                onFocus={e => (e.target.style.borderColor = "var(--ip-green-mid)")}
                                                onBlur={e => (e.target.style.borderColor = "#d1d5db")}
                                            />
                                        </div>

                                        <button type="submit" className="ip-btn-primary" disabled={loading} style={{ alignSelf: "flex-start", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
                                            {loading
                                                ? <span style={{ display: "inline-block", width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
                                                : <><Send size={15} /> Send Message</>
                                            }
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* ── Partners / Department Contacts ── */}
                        <div className="ip-partners">
                            <p className="ip-label" style={{ textAlign: "center" }}>Departments</p>
                            <h2 className="ip-heading" style={{ textAlign: "center", margin: "4px 0 0" }}>Department Contacts</h2>
                            <p style={{ fontSize: "0.9rem", color: "var(--ip-muted)", marginTop: 8 }}>
                                Reach the right team directly for faster assistance.
                            </p>
                            <div className="ip-partners-grid">
                                {[
                                    { icon: "🌾", name: "Admissions Office" },
                                    { icon: "🔬", name: "Research Cell" },
                                    { icon: "🎓", name: "Placement Cell" },
                                    { icon: "🏛️", name: "Principal's Office" },
                                    { icon: "📚", name: "Library" },
                                    { icon: "🏥", name: "Health Centre" },
                                    { icon: "🚌", name: "Transport Office" },
                                    { icon: "💻", name: "IT Support" },
                                ].map(d => (
                                    <span key={d.name} className="ip-partner-chip"><span>{d.icon}</span> {d.name}</span>
                                ))}
                            </div>
                        </div>

                        {/* ── CTA ── */}
                        <div className="ip-cta">
                            <h2 className="ip-cta-title">Visit Our Campus</h2>
                            <p className="ip-cta-sub">
                                We welcome prospective students, parents, and partners to visit Alva's IAST campusin Moodbidri. Guided campus tours are available every working day.
                            </p>
                            <div className="ip-cta-btns">
                                <a href="mailto:info@alvas.ac.in" className="ip-btn-primary">
                                    Email Us <Send size={16} />
                                </a>
                                <a href="tel:+918258262725" className="ip-btn-outline">
                                    Call Now <ArrowRight size={16} />
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

export default ContactUs;
