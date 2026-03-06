import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Home, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "./ContactUs.css";


/* ─── Info card ─── */
const InfoCard = ({
    icon: Icon,
    title,
    lines,
    delay,
}: {
    icon: React.ElementType;
    title: string;
    lines: string[];
    delay: string;
}) => (
    <div className="cu-info-card" style={{ animationDelay: delay }}>
        <div className="cu-icon-wrap">
            <Icon size={20} />
        </div>
        <div>
            <p className="cu-card-title">{title}</p>
            {lines.map((l, i) => (
                <p key={i} className="cu-card-line">{l}</p>
            ))}
        </div>
    </div>
);

/* ─── Main page ─── */
const ContactUs = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => { setLoading(false); setSent(true); }, 1800);
    };

    return (
        <div className="contact-page">
            {/* Full-page particle animation – fixed, behind everything */}
            <PageBackground count={80} color="22,101,52" opacity={0.15} />

            <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                {/* ── Shared site Header ── */}
                <Header />

                <main className="contact-main" style={{ flex: 1 }}>

                    {/* ── Hero Banner ── */}
                    <section className="cu-hero">
                        {/* Decorative blobs */}
                        <div className="hblob hblob-1" />
                        <div className="hblob hblob-2" />

                        <span className="cu-badge">
                            <Mail size={12} /> Get In Touch
                        </span>

                        <h1 className="cu-hero-title">
                            Contact <span>Us</span>
                        </h1>
                        <p className="cu-hero-sub">
                            Have a question about admissions, research or collaborations?<br />
                            We're here and happy to help.
                        </p>

                        {/* Wavy divider at bottom of hero */}
                        <div className="cu-hero-wave">
                            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ height: 56 }}>
                                <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="hsl(40,25%,91%)" />
                            </svg>
                        </div>
                    </section>

                    {/* ── Breadcrumb ── */}
                    <nav className="cu-breadcrumb" aria-label="Breadcrumb">
                        <div className="cu-breadcrumb-inner">
                            <Home size={13} />
                            <a href="/">Home</a>
                            <span className="sep"><ChevronRight size={13} /></span>
                            <span className="cur">Contact Us</span>
                        </div>
                    </nav>

                    {/* ── Body ── */}
                    <div className="cu-body">
                        <div className="cu-grid">

                            {/* Left – Info */}
                            <div className="cu-info-col">
                                <div>
                                    <p className="cu-section-label">Reach Out</p>
                                    <h2 className="cu-section-heading">We'd love to<br />hear from you</h2>
                                </div>

                                <InfoCard icon={MapPin} title="Our Address" lines={[
                                    "Alva's Institute of Agricultural Science & Technology",
                                    "Shobhavana Campus, Mijar, Moodbidri – 574 225",
                                    "D.K. District, Karnataka, India",
                                ]} delay="0.1s" />

                                <InfoCard icon={Phone} title="Phone" lines={[
                                    "+91 8258 262725",
                                    "+91 8258 262726",
                                ]} delay="0.2s" />

                                <InfoCard icon={Mail} title="Email" lines={[
                                    "info@alvas.ac.in",
                                    "agri@alvas.ac.in",
                                ]} delay="0.3s" />

                                <InfoCard icon={Clock} title="Office Hours" lines={[
                                    "Mon – Saturday: 9:00 AM – 5:00 PM",
                                    "Sunday: Closed",
                                ]} delay="0.4s" />

                                {/* Map */}
                                <div className="cu-map-wrap">
                                    <iframe
                                        title="Alva's Campus Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4143736746813!2d74.9926861758652!3d13.072895612646698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3add5bd600001%3A0x6b0ad93f6b0f0f0f!2sAlva's%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1709121234567!5m2!1sen!2sin"
                                        width="100%"
                                        height="220"
                                        style={{ border: 0, display: "block" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>

                            {/* Right – Form */}
                            <div>
                                <div className="cu-form-card">
                                    <h2 className="cu-form-title">Send a Message</h2>
                                    <p className="cu-form-sub">Fill out the form below and we'll get back to you within 24 hours.</p>

                                    {sent ? (
                                        <div className="cu-success">
                                            <div className="cu-success-icon">✓</div>
                                            <h3>Message Sent!</h3>
                                            <p>Thank you for reaching out. Our team will respond to you shortly.</p>
                                            <button
                                                className="cu-btn-reset"
                                                onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                            >
                                                Send Another
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="cu-form" noValidate>
                                            <div className="cu-form-row">
                                                <div className="cu-form-group">
                                                    <label htmlFor="name">Full Name</label>
                                                    <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                                                </div>
                                                <div className="cu-form-group">
                                                    <label htmlFor="email">Email Address</label>
                                                    <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                                                </div>
                                            </div>

                                            <div className="cu-form-group">
                                                <label htmlFor="phone">Phone Number <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, color: "var(--cu-text-muted)" }}>(optional)</span></label>
                                                <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                                            </div>

                                            <div className="cu-form-group">
                                                <label htmlFor="subject">Subject</label>
                                                <input id="subject" name="subject" type="text" placeholder="What is this about?" value={form.subject} onChange={handleChange} required />
                                            </div>

                                            <div className="cu-form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea id="message" name="message" rows={5} placeholder="Write your message here…" value={form.message} onChange={handleChange} required />
                                            </div>

                                            <button type="submit" className="cu-btn-submit" disabled={loading}>
                                                {loading
                                                    ? <span className="cu-spinner" />
                                                    : <><Send size={16} /> Send Message</>
                                                }
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>

                        </div>

                        {/* Decorative divider */}
                        <div className="cu-divider">
                            <div className="cu-divider-line" />
                            <div className="cu-divider-icon">🌿</div>
                            <div className="cu-divider-line" />
                        </div>
                    </div>
                </main>

                {/* ── Shared site Footer ── */}
                <Footer />
            </div>
        </div>
    );
};

export default ContactUs;
