import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./CampusLife.css";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ── Gallery Marquee Data ── */
const topRowImgs = [
    { src: "/agriculture%20filed.jpeg", title: "Campus Morning", tag: "Nature" },
    { src: "/apiculture.jpeg", title: "Apiculture", tag: "apiculture" },
    { src: "/ruraldevellopment.jpeg", title: "Student Hub", tag: "Community" },
    { src: "/horticulture3.jpeg", title: "Horticulture", tag: "horticulture" },
    { src: "/sports1.jpeg", title: "Athletics", tag: "Sports" },
    { src: "/technologidrone.jpeg", title: "Skill Dev", tag: "Workshop" },
    { src: "/apiculture2.jpeg", title: "Apiculture", tag: "apiculture" },
];

const bottomRowImgs = [
    { src: "/apiculture123.jpeg", title: "Apiculture", tag: "apiculture" },
    { src: "/library3.jpg", title: "Library", tag: "Research" },
    { src: "/together.jpeg", title: "Team Spirit", tag: "Together" },
    { src: "/A.I.E.T%20CAMPUS%20-2026-180.jpg", title: "Green Walk", tag: "Campus" },
    { src: "/agriculture%20field2.jpeg", title: "Field", tag: "Nature" },
    { src: "/sports2.jpeg", title: "Sports Day", tag: "Sports" },
    { src: "/apiculture8.jpeg", title: "Apiculture", tag: "apiculture" },
];

const spotlightItems = [
    { src: "/agriculture%20filed.jpeg", title: "Green Campus & ATC", sub: "100 acres of living, breathing campus in the Western Ghats", tag: "Infrastructure" },
    { src: "/apiculture4.jpeg", title: "Apiculture", sub: "Celebrating art, music & heritage through the year", tag: "Culture" },
    { src: "/sports1.jpeg", title: " Sports", sub: "Pushing boundaries in agri-science and technology", tag: "Research" },
    { src: "/technologidrone.jpeg", title: "Drone Technologies", sub: "Agri Technologies", tag: "workshop" },
    { src: "/agrifield.jpeg", title: "Floriculture Field Visit", sub: "promoting hands-on learning in agriculture and floriculture.", tag: "Floriculture Field Visit" },
];

/* ─── Spotlight Gallery Component ─── */
function SpotlightGallery({ items }: { items: typeof spotlightItems }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive(prev => (prev + 1) % items.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [items.length]);

    return (
        <div className="cl-spotlight-wrap">
            {/* Background images */}
            <AnimatePresence>
                <motion.div
                    key={active}
                    className="cl-spotlight-bg"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    style={{ backgroundImage: `url(${items[active].src})` }}
                />
            </AnimatePresence>

            {/* Dark overlay */}
            <div className="cl-spotlight-overlay" />

            {/* Center text */}
            <div className="cl-spotlight-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="cl-spotlight-text"
                    >
                        <span className="cl-spotlight-tag">{items[active].tag}</span>
                        <h3 className="cl-spotlight-title">{items[active].title}</h3>
                        <p className="cl-spotlight-sub">{items[active].sub}</p>
                    </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="cl-spotlight-dots">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            className={`cl-dot${i === active ? " cl-dot-active" : ""}`}
                            onClick={() => setActive(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── 6 tile cards ─── */
const tileCards = [
    { pill: "01 · Campus",  tag: "Infrastructure",           name: "Green Campus\n& ATC",         sub: "100-acre campus in the Western Ghats" },
    { pill: "02 · Hostel",  tag: "Living Spaces",            name: "Residential\nLife & Green\nSpaces", sub: "Comfortable hostels amid nature", stem: true },
    { pill: "03 · Sports",  tag: "Athletics",                name: "Sports &\nCulture",           sub: "" },
    { pill: "04 · Labs",    tag: "Future Tech · Placements", name: "Skill Labs\n& Clubs",         sub: "Industry-ready, hands-on learning" },
    { pill: "05 · Library", tag: "Knowledge Oasis",          name: "Library &\nResearch",         sub: "500+ journals, digital resources" },
    { pill: "06 · Startups",tag: "Innovation Hub",           name: "Startups &\nAchievements",    sub: "" },
];

export default function CampusLife() {
    const navigate = useNavigate();
    const revealRefs = useRef<HTMLElement[]>([]);
    const [cardsEntered, setCardsEntered] = useState<boolean[]>(Array(6).fill(false));

    const addReveal = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
    };

    useEffect(() => {
        // Scroll reveal
        const obs = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("cl-on"); }),
            { threshold: 0.1 }
        );
        revealRefs.current.forEach(el => el && obs.observe(el));

        // Tile entrance animation stagger
        const timers = tileCards.map((_, i) =>
            setTimeout(() => {
                setCardsEntered(prev => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                });
            }, 150 + i * 100)
        );

        return () => {
            obs.disconnect();
            timers.forEach(clearTimeout);
        };
    }, []);

    return (
        <>
        <div className="cl-root">
            <Header />

            {/* ══ 6-TILE CAMPUS LIFE SECTION ══ */}
            <section className="cl-page-section cl-tiles-section">

                {/* ── Floating seed / leaf particles ── */}
                <div className="cl-particles" aria-hidden="true">
                    {[
                        { left: "6%",  dur: 10, delay: 0,   size: 18, dx: 30,  op: 0.14 },
                        { left: "14%", dur: 13, delay: 1.5, size: 12, dx: -20, op: 0.10 },
                        { left: "23%", dur: 9,  delay: 0.8, size: 22, dx: 15,  op: 0.17 },
                        { left: "32%", dur: 15, delay: 2.2, size: 10, dx: -30, op: 0.09 },
                        { left: "41%", dur: 11, delay: 0.3, size: 20, dx: 25,  op: 0.16 },
                        { left: "50%", dur: 8,  delay: 3.1, size: 14, dx: -18, op: 0.12 },
                        { left: "59%", dur: 13, delay: 1.0, size: 16, dx: 22,  op: 0.15 },
                        { left: "67%", dur: 10, delay: 2.7, size: 11, dx: -26, op: 0.11 },
                        { left: "76%", dur: 12, delay: 0.5, size: 24, dx: 18,  op: 0.18 },
                        { left: "84%", dur: 9,  delay: 1.8, size: 13, dx: -14, op: 0.13 },
                        { left: "91%", dur: 14, delay: 0.1, size: 19, dx: 28,  op: 0.14 },
                        { left: "18%", dur: 7,  delay: 4.0, size: 9,  dx: -22, op: 0.08 },
                        { left: "55%", dur: 16, delay: 2.5, size: 28, dx: 12,  op: 0.20 },
                        { left: "72%", dur: 8,  delay: 3.8, size: 8,  dx: -10, op: 0.09 },
                    ].map((p, i) => (
                        <div
                            key={i}
                            className="cl-particle"
                            style={{
                                left: p.left,
                                "--dur":   `${p.dur}s`,
                                "--delay": `${p.delay}s`,
                                "--dx":    `${p.dx}px`,
                                "--op":    `${p.op}`,
                            } as React.CSSProperties}
                        >
                            {/* alternating leaf / seed SVG shapes */}
                            {i % 2 === 0 ? (
                                <svg width={p.size} height={p.size * 1.7} viewBox="0 0 20 34" fill="none">
                                    <ellipse cx="10" cy="17" rx="8" ry="16" fill="#4e7c20" />
                                    <line x1="10" y1="2" x2="10" y2="32" stroke="#2d5012" strokeWidth="1.5" />
                                </svg>
                            ) : (
                                <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="7" fill="#6a8c30" />
                                    <circle cx="10" cy="10" r="3" fill="#aad47a" />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>

                {/* SVG field background */}
                <svg className="cl-field-bg" viewBox="0 0 1100 620" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="cl-furrows" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
                            <line x1="0" y1="0" x2="0" y2="40" stroke="#8aaa50" strokeWidth=".8" opacity=".35" />
                        </pattern>
                        <g id="cl-stalk">
                            <line x1="0" y1="32" x2="0" y2="0" stroke="#6a8c30" strokeWidth="1.2" strokeLinecap="round" />
                            <ellipse cx="-5" cy="11" rx="4.5" ry="8" transform="rotate(-22)" fill="#6a8c30" />
                            <ellipse cx="5" cy="17" rx="4.5" ry="8" transform="rotate(22)" fill="#6a8c30" />
                            <ellipse cx="0" cy="3" rx="3.5" ry="6.5" fill="#6a8c30" />
                        </g>
                    </defs>
                    <rect width="1100" height="620" fill="url(#cl-furrows)" />
                    <use href="#cl-stalk" transform="translate(38,75) scale(1.5)"   opacity=".28" />
                    <use href="#cl-stalk" transform="translate(1050,55) scale(1.3)" opacity=".22" />
                    <use href="#cl-stalk" transform="translate(1030,520) scale(1.7)"opacity=".28" />
                    <use href="#cl-stalk" transform="translate(50,530) scale(1.4)"  opacity=".26" />
                    <use href="#cl-stalk" transform="translate(550,18) scale(1.1)"  opacity=".18" />
                    <use href="#cl-stalk" transform="translate(540,580) scale(1.2)" opacity=".2" />
                </svg>

                {/* Section header */}
                <div className="cl-sec-hdr cl-reveal" ref={addReveal}>
                    <div className="cl-sec-eyebrow"><span /> Alva's IAST · Moodbidri <span /></div>
                    <h2 className="cl-sec-title">Campus <em>Life</em></h2>
                </div>

                {/* 6 tiles */}
                <div className="cl-field">
                    {tileCards.map((card, i) => (
                        <div
                            key={i}
                            className={`cl-card${cardsEntered[i] ? " cl-card-entered" : ""}${(i === 4 || i === 2) ? " cursor-pointer" : ""}`}
                            style={{ transition: `opacity 0.6s ease ${150 + i * 100}ms, transform 0.6s ease ${150 + i * 100}ms` }}
                            onClick={() => {
                                if (i === 4) navigate("/campus-life/library");
                                if (i === 2) navigate("/campus-life/sports-culture");
                            }}
                        >
                            <div className={`cl-card-img cl-card-img-${i + 1}`} />
                            <div className="cl-card-overlay" />

                            {/* decorative stem on card 2 */}
                            {card.stem && <div className="cl-stem-line" />}

                            {/* leaf watermarks on 1, 3, 6 */}
                            {(i === 0) && (
                                <div className="cl-leaf-wm" style={{ width: 90, height: 90, bottom: -15, left: -15 }}>
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="50" cy="50" rx="28" ry="48" transform="rotate(-30 50 50)" fill="#4e7c20" />
                                        <line x1="50" y1="10" x2="50" y2="90" stroke="#2d5012" strokeWidth="2" />
                                    </svg>
                                </div>
                            )}
                            {(i === 2) && (
                                <div className="cl-leaf-wm" style={{ width: 80, height: 80, bottom: -10, right: -10 }}>
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="50" cy="50" rx="28" ry="48" transform="rotate(30 50 50)" fill="#4e7c20" />
                                        <line x1="50" y1="10" x2="50" y2="90" stroke="#2d5012" strokeWidth="2" />
                                    </svg>
                                </div>
                            )}
                            {(i === 5) && (
                                <div className="cl-leaf-wm" style={{ width: 100, height: 100, top: -20, right: -20 }}>
                                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="50" cy="50" rx="28" ry="48" fill="#4e7c20" />
                                        <line x1="50" y1="10" x2="50" y2="90" stroke="#2d5012" strokeWidth="2" />
                                    </svg>
                                </div>
                            )}

                            <div className="cl-card-pill">
                                <span className="cl-pill-dot" />
                                {card.pill}
                            </div>
                            <div className="cl-card-info">
                                <span className="cl-card-tag">{card.tag}</span>
                                <span className="cl-card-name">
                                    {card.name.split("\n").map((line, li) => (
                                        <span key={li}>{line}{li < card.name.split("\n").length - 1 && <br />}</span>
                                    ))}
                                </span>
                                {card.sub && <span className="cl-card-sub">{card.sub}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══ GALLERY SECTION ══ */}
            <section className="cl-gallery-section">
                <div className="cl-sec-hdr cl-reveal" ref={addReveal}>
                    <div className="cl-sec-eyebrow"><span /> Campus Gallery <span /></div>
                    <h2 className="cl-sec-title">Life at <em>Alva's</em></h2>
                </div>

                {/* ── TOP ROW: scrolls left ── */}
                <div className="cl-marquee-row cl-marquee-left">
                    <div className="cl-marquee-track">
                        {[...topRowImgs, ...topRowImgs].map((img, i) => (
                            <div key={i} className="cl-marquee-card">
                                <img src={img.src} alt={img.title} />
                                <div className="cl-marquee-label">
                                    <span className="cl-mq-tag">{img.tag}</span>
                                    <span className="cl-mq-title">{img.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CENTER SPOTLIGHT ── */}
                <SpotlightGallery items={spotlightItems} />

                {/* ── BOTTOM ROW: scrolls right ── */}
                <div className="cl-marquee-row cl-marquee-right">
                    <div className="cl-marquee-track">
                        {[...bottomRowImgs, ...bottomRowImgs].map((img, i) => (
                            <div key={i} className="cl-marquee-card">
                                <img src={img.src} alt={img.title} />
                                <div className="cl-marquee-label">
                                    <span className="cl-mq-tag">{img.tag}</span>
                                    <span className="cl-mq-title">{img.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer strip */}
                <div className="cl-gallery-strip-footer cl-reveal" ref={addReveal}>
                    <span className="cl-gsf-line" />
                    <a href="#" className="cl-gsf-cta">View Full Gallery &nbsp;→</a>
                    <span className="cl-gsf-line" />
                </div>
            </section>
        </div>
        <Footer />
        </>
    );
}
