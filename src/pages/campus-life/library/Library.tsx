import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Book, Globe, Headphones, Microscope, Clock, MapPin, Shield, Zap, Coffee, UserCheck, MoveRight, Phone, Mail, BookOpen, ShieldCheck, Users } from "lucide-react";
import "./Library.css";

const stats = [
    { label: "Volumes", value: "45k+" },
    { label: "Titles", value: "12k+" },
    { label: "E-Journals", value: "5k+" },
    { label: "Seating", value: "300+" },
];

const featuresList = [
    {
        title: "Digital Repository",
        tag: "24/7 Access",
        desc: "Instant access to 50,000+ e-journals and global agricultural research papers.",
        img: "/A.I.E.T CAMPUS -2026-186 (1).jpg",
        icon: <Globe className="w-5 h-5" />
    },
    {
        title: "Silent Study Zones",
        tag: "Focus",
        desc: "Acoustically optimized pods designed for deep concentration and intensive research.",
        img: "/A.I.E.T CAMPUS -2026-221.jpg",
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        title: "Collaborative Hub",
        tag: "Teamwork",
        desc: "Smart-board equipped meeting spaces for group projects and peer discussions.",
        img: "/A.I.E.T CAMPUS -2026-217 (1).jpg",
        icon: <Users className="w-5 h-5" />
    },
    {
        title: "Archive Collection",
        tag: "Heritage",
        desc: "Rare manuscripts and historical records of local agricultural evolution.",
        img: "/A.I.E.T CAMPUS -2026-198.jpg",
        icon: <BookOpen className="w-5 h-5" />
    }
];

const libraryGallery = [
    { src: "/A.I.E.T CAMPUS -2026-206.jpg", title: "Main Hall", tag: "Quiet Zone" },
    { src: "/A.I.E.T CAMPUS -2026-209.jpg", title: "Digital Lib", tag: "E-Resources" },
    { src: "/A.I.E.T CAMPUS -2026-211.jpg", title: "Stack Area", tag: "Collections" },
    { src: "/A.I.E.T CAMPUS -2026-218.jpg", title: "Research", tag: "Reference" },
];

const libraryRules = [
    { icon: <Shield className="w-6 h-6" />, title: "Discipline", text: "Maintain absolute silence. Group discussions are permitted only in designated AV rooms." },
    { icon: <UserCheck className="w-6 h-6" />, title: "Entry Policy", text: "Valid Institutional ID card is mandatory for entry and issuing books." },
    { icon: <Zap className="w-6 h-6" />, title: "Care of Books", text: "Marking, underlining or tearing pages is strictly prohibited and subject to fines." },
    { icon: <Coffee className="w-6 h-6" />, title: "Prohibitions", text: "Food, drinks, and mobile phone usage are not allowed inside the reading zones." },
];

export default function Library() {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!particlesRef.current) return;
        const container = particlesRef.current;
        container.innerHTML = '';
        const count = 30;

        for (let i = 0; i < count; i++) {
            const p = document.createElement("div");
            p.className = "lib-particle";
            const size = Math.random() * 3 + 1;
            const left = Math.random() * 100;
            const delay = Math.random() * 20;
            const duration = Math.random() * 25 + 15;
            const dx = (Math.random() - 0.5) * 150;

            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${left}%`;
            p.style.top = "110%";
            p.style.background = "rgba(26, 58, 50, 0.15)"; // Soft green specks
            p.style.animationDelay = `${delay}s`;
            p.style.animationDuration = `${duration}s`;
            p.style.setProperty("--dx", `${dx}px`);

            container.appendChild(p);
        }
    }, []);

    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 200]);
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <div className="lib-root">
            <Header forceDark={true} />

            <div className="lib-bg-particles" ref={particlesRef} />

            {/* --- HERO SECTION --- */}
            <section className="lib-hero">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="lib-hero-content">
                    <span className="lib-hero-badge">Est. 2026 · Knowledge Oasis</span>
                    <h1 className="lib-hero-title">
                        A Sanctuary for <em>Intellectual Growth</em>
                    </h1>
                    <p className="lib-hero-sub">
                        Step into a world of curated wisdom. Our library is more than a collection of books;
                        it's a hub for discovery, research, and silent contemplation.
                    </p>
                </motion.div>
                <div className="lib-hero-canvas" />
            </section>

            {/* --- STATS SECTION (Compact Ribbon) --- */}
            <section className="lib-stats-grid">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="lib-stat-card"
                    >
                        <span className="lib-stat-val">{s.value}</span>
                        <span className="lib-stat-label">{s.label}</span>
                    </motion.div>
                ))}
            </section>

            {/* --- FEATURES GRID (Refined Light Version) --- */}
            <section className="lib-features-wrapper">
                <div className="lib-sec-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lib-sec-title"
                    >
                        Library Excellence
                    </motion.h2>
                    <p className="lib-sec-desc">
                        A meticulously curated environment designed to foster academic rigor and
                        inspire the next generation of researchers.
                    </p>
                </div>

                <div className="lib-grid-layout">
                    {featuresList.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="lib-feature-card"
                        >
                            <img src={f.img} alt={f.title} className="lib-card-img" />
                            <div className="lib-card-overlay" />

                            <div className="lib-card-content">
                                <div className="lib-icon-box">{f.icon}</div>
                                <span className="lib-tag">{f.tag}</span>
                                <h3 className="lib-title">{f.title}</h3>
                                <p className="lib-description">{f.desc}</p>
                                <div className="lib-btn">
                                    Explore Facility <MoveRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- GALLERY SECTION (Compact Grid) --- */}
            <section className="lib-gallery">
                <div className="lib-sec-header">
                    <span className="lib-staff-badge">Visual Tour</span>
                    <h2 className="lib-sec-title">The Learning <em>Environment</em></h2>
                </div>
                <div className="lib-gallery-grid">
                    {libraryGallery.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="lib-gallery-item"
                        >
                            <img src={img.src} alt={img.title} />
                            <div className="lib-gallery-overlay">
                                <div className="lib-gallery-info">
                                    <span className="text-lib-gold text-[10px] font-bold tracking-widest uppercase">{img.tag}</span>
                                    <h4 className="text-sm font-bold">{img.title}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- LIBRARIAN SECTION (User Preferred) --- */}
            <section className="lib-staff-section">
                <div className="lib-container">
                    <div className="lib-librarian-card">
                        <div className="lib-staff-img-wrapper">
                            <img
                                src="/librarian-puneeth.jpg"
                                alt="Chief Librarian Puneeth Kumar"
                                className="lib-staff-img"
                                onError={(e) => {
                                    e.currentTarget.src = "/punith.png";
                                }}
                            />
                        </div>

                        <div className="lib-staff-content">
                            <span className="lib-staff-badge">Leadership</span>
                            <h3 className="lib-staff-name">Puneeth Kumar</h3>
                            <span className="lib-staff-role">Chief Librarian · M.L.I.Sc</span>

                            <p className="lib-staff-quote">
                                "Our mission is to provide an environment where students can freely explore
                                the vast horizons of agricultural knowledge. We are committed to fostering
                                a culture of research and lifelong learning."
                            </p>

                            <div className="lib-contact-grid">
                                <div className="lib-contact-item">
                                    <div>
                                        <span className="lib-contact-label">Phone</span>
                                        <div className="lib-contact-val">
                                            <Phone size={16} className="text-lib-gold" />
                                            +91 64645879
                                        </div>
                                    </div>
                                </div>

                                <div className="lib-contact-item">
                                    <div>
                                        <span className="lib-contact-label">Email</span>
                                        <div className="lib-contact-val">
                                            <Mail size={16} className="text-lib-gold" />
                                            aietlib@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TIMINGS SECTION --- */}
            <section className="lib-info-section">
                <div className="lib-info-container">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lib-info-image"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80"
                            alt="Reading Zone"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin className="w-5 h-5 text-lib-gold" />
                                <span className="font-bold tracking-widest uppercase text-sm">Central Block · Level 2</span>
                            </div>
                            <p className="opacity-80 text-sm">A quiet space for 300+ researchers</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lib-timings-card"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-lib-green text-white rounded-full flex items-center justify-center">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-lib-green">Operating Hours</h2>
                        </div>

                        <div className="lib-time-row">
                            <span className="lib-day">Monday – Friday</span>
                            <span className="lib-hours">08:00 AM – 08:00 PM</span>
                        </div>
                        <div className="lib-time-row">
                            <span className="lib-day">Saturday</span>
                            <span className="lib-hours">09:00 AM – 06:00 PM</span>
                        </div>
                        <div className="lib-time-row border-none">
                            <span className="lib-day">Sunday</span>
                            <span className="lib-hours text-red-500 font-bold">Closed</span>
                        </div>

                        <div className="mt-12 p-6 bg-white rounded-2xl border border-lib-green/10">
                            <h4 className="font-bold text-lib-green mb-2">Notice:</h4>
                            <p className="text-sm text-muted-foreground">
                                Late-night access is available for final year students during research project months.
                                Please consult the Chief Librarian for permissions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- RULES SECTION --- */}
            <section className="lib-rules-section">
                <div className="lib-sec-header">
                    <h2 className="lib-sec-title">Library <em>Guidelines</em></h2>
                    <p className="opacity-70 max-w-2xl mx-auto">
                        To maintain a productive environment for everyone, we request all students
                        to adhere to the following library policies.
                    </p>
                </div>
                <div className="lib-rules-grid">
                    {libraryRules.map((rule, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="lib-rule-item"
                        >
                            <div className="lib-rule-icon flex justify-center">{rule.icon}</div>
                            <h4 className="lib-rule-title">{rule.title}</h4>
                            <p className="lib-rule-text">{rule.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
