import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── reveal hook ─── */
const useReveal = () => {
  const els = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) (e.target as HTMLElement).classList.add("mouv");
      }),
      { threshold: 0.07 }
    );
    els.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  let i = 0;
  return (delay = 0) => (el: HTMLElement | null) => {
    els.current[i++] = el;
    if (el) el.style.transitionDelay = `${delay}s`;
  };
};

const objectives = [
  { n: "01", icon: "🌱", title: "Sustainable Farming", text: "Promote environmentally responsible crop cultivation using minimal chemical inputs." },
  { n: "02", icon: "📡", title: "Technology Transfer", text: "Facilitate adoption of modern agri-tech tools, IoT sensors, and precision farming." },
  { n: "03", icon: "🧑‍🌾", title: "Farmer Training", text: "Capacity-building workshops and field demonstrations for smallholder farmers." },
  { n: "04", icon: "📦", title: "Market Linkage", text: "Supply chain connections linking farmers directly to buyers and export markets." },
  { n: "05", icon: "💧", title: "Water Management", text: "Efficient irrigation systems to optimize water usage in agricultural zones." },
  { n: "06", icon: "📊", title: "Research & Data", text: "Joint data collection, crop yield analytics, and soil health monitoring programs." },
];

export default function MOU() {
  const rev = useReveal();
  const [activeResp, setActiveResp] = useState<"a" | "b">("a");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;500;600;700;800&display=swap');

        .mou-root { font-family: 'Inter', sans-serif; background: #f6fbf2; }

        .mou-reveal { opacity:0; transform:translateY(44px); transition:opacity 0.9s cubic-bezier(.16,1,.3,1),transform 0.9s cubic-bezier(.16,1,.3,1); }
        .mou-reveal.mouv { opacity:1; transform:none; }
        .mou-sl { opacity:0; transform:translateX(-56px); transition:opacity 0.9s cubic-bezier(.16,1,.3,1),transform 0.9s cubic-bezier(.16,1,.3,1); }
        .mou-sl.mouv { opacity:1; transform:none; }
        .mou-sr { opacity:0; transform:translateX(56px); transition:opacity 0.9s cubic-bezier(.16,1,.3,1),transform 0.9s cubic-bezier(.16,1,.3,1); }
        .mou-sr.mouv { opacity:1; transform:none; }

        .mou-obj-card {
          background: white;
          border: 1.5px solid #e4f0d8;
          border-radius: 20px;
          padding: 36px 30px;
          transition: box-shadow 0.35s, border-color 0.35s, transform 0.35s;
          cursor: default;
        }
        .mou-obj-card:hover {
          box-shadow: 0 20px 60px -10px rgba(26,77,0,0.12);
          border-color: #5cb800;
          transform: translateY(-6px);
        }

        .mou-tab-btn {
          padding:13px 34px; font-weight:700; font-size:13px;
          letter-spacing:0.08em; text-transform:uppercase;
          border-radius:50px; border:none; cursor:pointer; transition:all 0.3s;
        }
        .mou-tab-a { background:#1a4d00; color:white; box-shadow:0 8px 28px rgba(26,77,0,0.25); }
        .mou-tab-b { background:transparent; color:#888; border:1.5px solid #ddefd0; }
        .mou-tab-b:hover { border-color:#5cb800; color:#2e7d11; }

        .mou-sig-card {
          background:white; border:1.5px solid #e4f0d8; border-radius:24px;
          padding:44px; box-shadow:0 12px 40px -10px rgba(26,77,0,0.07);
          transition:box-shadow 0.4s, border-color 0.4s;
        }
        .mou-sig-card:hover { box-shadow:0 24px 60px -10px rgba(26,77,0,0.14); border-color:#5cb800; }

        @keyframes mou-float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-16px) rotate(2deg)} }
        @keyframes mou-pulse-ring { 0%{transform:scale(1);opacity:.5} 100%{transform:scale(1.9);opacity:0} }
        @keyframes mou-shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .mou-shimmer {
          background:linear-gradient(90deg,#1a6600 0%,#5cb800 40%,#1a6600 60%,#2e7d11 100%);
          background-size:200% auto; -webkit-background-clip:text;
          -webkit-text-fill-color:transparent; background-clip:text;
          animation:mou-shimmer 3.5s linear infinite;
        }
        .mou-gold-shimmer {
          background:linear-gradient(90deg,#b8850a 0%,#f5d000 40%,#b8850a 60%,#e8b800 100%);
          background-size:200% auto; -webkit-background-clip:text;
          -webkit-text-fill-color:transparent; background-clip:text;
          animation:mou-shimmer 3s linear infinite;
        }
      `}</style>

      <div className="mou-root">
        <Header />

        {/* ══════════════════ HERO ══════════════════ */}
        <section style={{
          minHeight: "100vh",
          background: "linear-gradient(145deg, #f0fbe8 0%, #e6f6d8 40%, #f8fff4 100%)",
          display: "flex", flexDirection: "column",
          position: "relative", overflow: "hidden",
        }}>
          {/* Subtle dot grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(46,125,17,0.12) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }} />

          {/* BG watermark */}
          <div style={{
            position: "absolute", bottom: -60, left: "50%", transform: "translateX(-50%)",
            fontSize: "28vw", fontWeight: 900, fontFamily: "Playfair Display, serif",
            color: "rgba(26,77,0,0.04)", lineHeight: 1, userSelect: "none", whiteSpace: "nowrap",
          }}>MOU</div>

          {/* Floating rings */}
          {[
            { top: "18%", right: "12%", size: 280 },
            { top: "62%", left: "6%", size: 160 },
          ].map((r, i) => (
            <div key={i} style={{
              position: "absolute", top: r.top, left: r.left as any, right: r.right as any,
              width: r.size, height: r.size, borderRadius: "50%",
              border: "1.5px solid rgba(92,184,0,0.18)",
              animation: `mou-float ${6 + i}s ease-in-out ${i}s infinite`,
            }}>
              <div style={{ position: "absolute", inset: 20, borderRadius: "50%", border: "1px solid rgba(245,208,0,0.2)" }} />
            </div>
          ))}

          {/* Wheat SVG */}
          <svg style={{ position: "absolute", top: "10%", right: "8%", width: 110, opacity: 0.18, animation: "mou-float 8s ease-in-out 1s infinite" }} viewBox="0 0 60 120" fill="#2e7d11">
            <ellipse cx="30" cy="60" rx="20" ry="55" />
            <line x1="30" y1="5" x2="30" y2="115" stroke="#2e7d11" strokeWidth="1.5" />
            {[25,40,55,70,85].map(y => (
              <g key={y}>
                <line x1="30" y1={y} x2="12" y2={y+12} stroke="#1a4d00" strokeWidth="1" />
                <line x1="30" y1={y} x2="48" y2={y+12} stroke="#1a4d00" strokeWidth="1" />
              </g>
            ))}
          </svg>

          {/* Left accent */}
          <div style={{
            position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
            width: 5, height: "38%", borderRadius: "0 4px 4px 0",
            background: "linear-gradient(to bottom, transparent, #5cb800, transparent)",
          }} />

          {/* Content */}
          <div style={{
            flex: 1, display: "flex", alignItems: "center",
            maxWidth: 1200, margin: "0 auto",
            padding: "160px 60px 80px",
            gap: 80, width: "100%", position: "relative", zIndex: 2,
          }}>
            {/* Left */}
            <div style={{ flex: "0 0 54%" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                marginBottom: 32, padding: "7px 20px",
                border: "1.5px solid rgba(46,125,17,0.25)",
                borderRadius: 50, background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)",
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2e7d11" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", color: "#1a4d00", textTransform: "uppercase" }}>
                  Official Document · 2025
                </span>
              </div>

              <h1 style={{ fontFamily: "Playfair Display, serif", lineHeight: 1.05, marginBottom: 24 }}>
                <span style={{ display: "block", fontSize: "clamp(3rem, 5.2vw, 5rem)", fontWeight: 700, color: "#1a4d00", opacity: 0.85 }}>
                  Memorandum
                </span>
                <span style={{ display: "block", fontSize: "clamp(3rem, 5.2vw, 5rem)", fontWeight: 900, fontStyle: "italic" }} className="mou-shimmer">
                  of Understanding
                </span>
              </h1>

              <div style={{ width: 64, height: 3, background: "linear-gradient(to right, #5cb800, #f5d000)", borderRadius: 4, marginBottom: 28 }} />

              <p style={{ fontSize: 17, color: "#4a6640", lineHeight: 1.9, maxWidth: 480, fontWeight: 300 }}>
                A formal framework establishing an agricultural partnership between Alva's Institute of Agricultural Science & Technology and its collaborating partner organization.
              </p>

              {/* Stats row */}
              <div style={{ display: "flex", gap: 0, marginTop: 48, background: "white", borderRadius: 20, boxShadow: "0 12px 40px rgba(26,77,0,0.08)", border: "1px solid #e4f0d8", overflow: "hidden" }}>
                {[
                  { val: "3", unit: "Years", label: "Agreement Duration" },
                  { val: "6", unit: "Goals", label: "Core Objectives" },
                  { val: "Apr", unit: "2025", label: "Effective Date" },
                ].map((s, i) => (
                  <div key={s.label} style={{
                    flex: 1, padding: "24px 20px", textAlign: "center",
                    borderLeft: i > 0 ? "1px solid #edf5e4" : "none",
                  }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 5, justifyContent: "center", marginBottom: 4 }}>
                      <span style={{ fontSize: 36, fontWeight: 900, color: "#1a4d00", fontFamily: "Playfair Display, serif", letterSpacing: "-0.02em" }}>{s.val}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#5cb800" }}>{s.unit}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#8aaa7a", textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — preamble card */}
            <div style={{ flex: 1 }}>
              <div style={{
                background: "white",
                borderRadius: 28,
                padding: 44,
                boxShadow: "0 30px 80px -15px rgba(26,77,0,0.12)",
                border: "1.5px solid #e4f0d8",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 140, height: 140, background: "radial-gradient(circle at top right, rgba(92,184,0,0.08), transparent 70%)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(92,184,0,0.1)", border: "1px solid rgba(92,184,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📜</div>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.2em", color: "#2e7d11", textTransform: "uppercase" }}>Preamble</div>
                </div>
                <p style={{ fontSize: 15, color: "#445544", lineHeight: 1.9, fontWeight: 400 }}>
                  This Memorandum of Understanding is entered into as of <strong style={{ color: "#1a4d00" }}>1st April 2025</strong>, between <strong style={{ color: "#1a6600" }}>Alva's Institute of Agricultural Science & Technology</strong> and the <strong style={{ color: "#b8850a" }}>Partner Organization</strong>, collectively referred to as the "Parties".
                </p>
                <div style={{ marginTop: 24, padding: "18px 20px", background: "#f6fdf0", borderRadius: 12, border: "1px solid #d4edbe" }}>
                  <p style={{ fontSize: 13, color: "#5a7a4a", fontStyle: "italic", lineHeight: 1.75, margin: 0 }}>
                    "Both organizations share a mutual commitment to advancing sustainable agricultural practices, food security, and the economic empowerment of farming communities."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{ textAlign: "center", paddingBottom: 44, position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 10, letterSpacing: "0.3em", color: "rgba(26,77,0,0.3)", textTransform: "uppercase" }}>Scroll</span>
              <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(26,77,0,0.2), transparent)" }} />
            </div>
          </div>
        </section>

        {/* ══════════════════ PARTIES ══════════════════ */}
        <section style={{ background: "white", padding: "120px 60px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="mou-reveal" ref={rev() as any} style={{ textAlign: "center", marginBottom: 80 }}>
              <div style={{ display: "inline-block", fontSize: 11, fontWeight: 800, letterSpacing: "0.25em", color: "#2e7d11", textTransform: "uppercase", marginBottom: 16, padding: "6px 20px", background: "rgba(46,125,17,0.07)", borderRadius: 50 }}>
                Parties to this Agreement
              </div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 900, color: "#0d2e00", lineHeight: 1.1 }}>
                Who's in this<br /><em style={{ color: "#2e7d11" }}>partnership?</em>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 40, alignItems: "center" }}>
              {/* Party A — keep dark for visual contrast */}
              <div className="mou-sl mou-reveal" ref={rev(0.1) as any}>
                <div style={{
                  background: "linear-gradient(145deg, #0d2e00 0%, #1a4d00 55%, #2a6800 100%)",
                  borderRadius: 32, padding: "52px 46px",
                  boxShadow: "0 40px 100px -20px rgba(13,46,0,0.35)",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "rgba(92,184,0,0.1)" }} />
                  <div style={{ position: "relative" }}>
                    <div style={{ fontSize: 48, marginBottom: 20 }}>🏛️</div>
                    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.25em", color: "#a8d97a", textTransform: "uppercase", marginBottom: 12 }}>First Party</div>
                    <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 26, fontWeight: 900, color: "white", lineHeight: 1.25, marginBottom: 20 }}>
                      Alva's Institute of Agricultural Science & Technology
                    </h3>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                      A premier agricultural institution dedicated to sustainable farming education, research, and rural development.
                    </p>
                    <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5cb800", boxShadow: "0 0 0 4px rgba(92,184,0,0.2)" }} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#a8d97a", letterSpacing: "0.1em", textTransform: "uppercase" }}>Party A</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="mou-reveal" ref={rev(0.2) as any} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, transparent, #5cb800)" }} />
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: -12, borderRadius: "50%", border: "1.5px solid rgba(92,184,0,0.25)", animation: "mou-pulse-ring 2.5s ease-out infinite" }} />
                  <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1.5px solid rgba(92,184,0,0.15)", animation: "mou-pulse-ring 2.5s ease-out 0.9s infinite" }} />
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #f5d000, #e8b800)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, boxShadow: "0 12px 40px rgba(245,208,0,0.3)", position: "relative" }}>🤝</div>
                </div>
                <div style={{ textAlign: "center", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", color: "#2e7d11", textTransform: "uppercase" }}>MOU<br />2025</div>
                <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, #5cb800, transparent)" }} />
              </div>

              {/* Party B */}
              <div className="mou-sr mou-reveal" ref={rev(0.1) as any}>
                <div style={{
                  background: "#f8fff2",
                  border: "2px solid #d4edbe",
                  borderRadius: 32, padding: "52px 46px",
                  boxShadow: "0 40px 100px -20px rgba(0,0,0,0.06)",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: "radial-gradient(circle at top right, rgba(92,184,0,0.07), transparent 70%)" }} />
                  <div style={{ position: "relative" }}>
                    <div style={{ fontSize: 48, marginBottom: 20 }}>🌾</div>
                    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.25em", color: "#5cb800", textTransform: "uppercase", marginBottom: 12 }}>Second Party</div>
                    <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 26, fontWeight: 900, color: "#0d2e00", lineHeight: 1.25, marginBottom: 20 }}>Partner Organization</h3>
                    <p style={{ fontSize: 14, color: "#5a7a5a", lineHeight: 1.8 }}>
                      A collaborating organization empowering agricultural communities through technology, training, and market access.
                    </p>
                    <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f5d000", boxShadow: "0 0 0 4px rgba(245,208,0,0.25)" }} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#7a6000", letterSpacing: "0.1em", textTransform: "uppercase" }}>Party B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ OBJECTIVES ══════════════════ */}
        <section style={{ background: "linear-gradient(160deg, #f0fbe8 0%, #e6f6d8 100%)", padding: "130px 60px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(92,184,0,0.1), transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: -40, left: -40, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,208,0,0.1), transparent 70%)" }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div className="mou-reveal" ref={rev() as any} style={{ marginBottom: 80, textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.25em", color: "#2e7d11", textTransform: "uppercase", marginBottom: 16 }}>What We Aim For</div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 900, color: "#0d2e00", lineHeight: 1.1 }}>
                Core <em className="mou-shimmer">Objectives</em>
              </h2>
              <div style={{ width: 56, height: 3, background: "linear-gradient(to right, #5cb800, #f5d000)", borderRadius: 4, margin: "24px auto 0" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
              {objectives.map((obj, i) => (
                <div key={obj.n} className={`mou-obj-card mou-reveal`} ref={rev(i * 0.07) as any}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <div style={{ fontSize: 42 }}>{obj.icon}</div>
                    <div style={{ fontFamily: "Playfair Display, serif", fontSize: 52, fontWeight: 900, color: "rgba(26,77,0,0.06)", lineHeight: 1 }}>{obj.n}</div>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a4d00", marginBottom: 10 }}>{obj.title}</h3>
                  <p style={{ fontSize: 14, color: "#6a8a6a", lineHeight: 1.8 }}>{obj.text}</p>
                  <div style={{ marginTop: 22, height: 2, width: 32, background: "linear-gradient(to right, #5cb800, #f5d000)", borderRadius: 4 }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ RESPONSIBILITIES ══════════════════ */}
        <section style={{ background: "white", padding: "130px 60px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="mou-reveal" ref={rev() as any} style={{ textAlign: "center", marginBottom: 16 }}>
              <div style={{ display: "inline-block", fontSize: 11, fontWeight: 800, letterSpacing: "0.25em", color: "#2e7d11", textTransform: "uppercase", marginBottom: 16, padding: "6px 20px", background: "rgba(46,125,17,0.07)", borderRadius: 50 }}>Roles & Duties</div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 900, color: "#0d2e00" }}>Responsibilities</h2>
            </div>

            <div className="mou-reveal" ref={rev() as any} style={{ display: "flex", justifyContent: "center", gap: 12, margin: "36px 0 52px" }}>
              <button className={`mou-tab-btn ${activeResp === "a" ? "mou-tab-a" : "mou-tab-b"}`} onClick={() => setActiveResp("a")}>🏛️ &nbsp; Alva's IAST</button>
              <button className={`mou-tab-btn ${activeResp === "b" ? "mou-tab-a" : "mou-tab-b"}`} onClick={() => setActiveResp("b")}>🌾 &nbsp; Partner Org</button>
            </div>

            <div className="mou-reveal" ref={rev() as any} style={{ background: "#f8fff4", borderRadius: 32, border: "1.5px solid #e4f0d8", overflow: "hidden", boxShadow: "0 24px 70px -20px rgba(26,77,0,0.1)" }}>
              <div style={{
                background: activeResp === "a"
                  ? "linear-gradient(135deg, #1a4d00, #2e7d11)"
                  : "linear-gradient(135deg, #c8a010, #f5d000)",
                padding: "32px 48px", display: "flex", alignItems: "center", gap: 20,
              }}>
                <div style={{ fontSize: 48 }}>{activeResp === "a" ? "🏛️" : "🌾"}</div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: activeResp === "a" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)", marginBottom: 4 }}>
                    {activeResp === "a" ? "First Party" : "Second Party"}
                  </div>
                  <div style={{ fontFamily: "Playfair Display, serif", fontSize: 26, fontWeight: 900, color: activeResp === "a" ? "white" : "#1a2e00" }}>
                    {activeResp === "a" ? "Alva's IAST" : "Partner Organization"}
                  </div>
                </div>
              </div>
              <div style={{ padding: "36px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 40px" }}>
                {(activeResp === "a" ? [
                  "Provide financial resources for joint programs",
                  "Supply seeds, fertilizers, and agri-inputs",
                  "Deploy technical experts and agronomists",
                  "Maintain project accounting and reporting",
                  "Facilitate market access and export channels",
                ] : [
                  "Mobilize and register farmer beneficiaries",
                  "Conduct community outreach and awareness",
                  "Organize training and demonstration events",
                  "Collect field data and impact assessments",
                  "Ensure grassroots community participation",
                ]).map((item, i) => (
                  <div key={item} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid #edf7e4" }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                      background: activeResp === "a" ? "rgba(26,77,0,0.08)" : "rgba(245,208,0,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 800, color: activeResp === "a" ? "#1a4d00" : "#7a5c00",
                    }}>{String(i + 1).padStart(2, "0")}</div>
                    <span style={{ fontSize: 15, color: "#3a5a3a", lineHeight: 1.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ DURATION ══════════════════ */}
        <section style={{ background: "linear-gradient(160deg, #f0fbe8, #e6f6d8)", padding: "130px 60px", position: "relative", overflow: "hidden" }}>
          {/* Gold top border */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right, #5cb800, #f5d000, #5cb800)" }} />

          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
              <div className="mou-sl mou-reveal" ref={rev() as any}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.25em", color: "#2e7d11", textTransform: "uppercase", marginBottom: 20 }}>Duration & Renewal</div>
                <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 3.2vw, 3rem)", fontWeight: 900, color: "#0d2e00", lineHeight: 1.15, marginBottom: 28 }}>
                  A <em className="mou-gold-shimmer">Three-Year</em><br />Agreement
                </h2>
                <p style={{ fontSize: 16, color: "#4a6640", lineHeight: 1.9, fontWeight: 300, marginBottom: 36 }}>
                  Commencing <strong style={{ color: "#1a4d00" }}>1st April 2025</strong> and ending <strong style={{ color: "#1a4d00" }}>31st March 2028</strong>. Renewable by mutual written consent at least <strong style={{ color: "#b8850a" }}>60 days</strong> prior to expiry. Either party may terminate with <strong style={{ color: "#b8850a" }}>30 days written notice</strong>.
                </p>
                <div style={{ display: "flex", gap: 14 }}>
                  {[{ val: "3 yrs", desc: "Duration" }, { val: "60d", desc: "Renewal Notice" }, { val: "30d", desc: "Exit Notice" }].map(s => (
                    <div key={s.val} style={{ flex: 1, textAlign: "center", padding: "18px 10px", background: "white", borderRadius: 14, border: "1.5px solid #d4edbe", boxShadow: "0 4px 20px rgba(26,77,0,0.06)" }}>
                      <div style={{ fontSize: 22, fontWeight: 900, color: "#1a4d00", fontFamily: "Playfair Display, serif" }}>{s.val}</div>
                      <div style={{ fontSize: 11, color: "#7a9a6a", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 6 }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mou-sr mou-reveal" ref={rev(0.15) as any}>
                <div style={{ position: "relative", paddingLeft: 56 }}>
                  <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #f5d000, #5cb800, rgba(92,184,0,0.1))" }} />
                  {[
                    { year: "April 2025", event: "MOU Comes into Effect", note: "Partnership officially begins", icon: "🚀", active: true },
                    { year: "March 2026", event: "Year 1 Review", note: "Progress assessment & reporting", icon: "📋" },
                    { year: "March 2027", event: "Mid-term Evaluation", note: "In-depth program review", icon: "📊" },
                    { year: "January 2028", event: "Renewal Decision", note: "60-day notice window opens", icon: "🔄" },
                    { year: "March 2028", event: "MOU Concludes / Renews", note: "Agreement ends or is extended", icon: "✅" },
                  ].map((item, i) => (
                    <div key={item.year} style={{ position: "relative", paddingBottom: i < 4 ? 32 : 0 }}>
                      <div style={{
                        position: "absolute", left: -46, top: 4,
                        width: item.active ? 18 : 12, height: item.active ? 18 : 12,
                        borderRadius: "50%",
                        background: item.active ? "#f5d000" : "white",
                        border: item.active ? "3px solid rgba(245,208,0,0.35)" : "2px solid #c8e4b0",
                        boxShadow: item.active ? "0 0 20px rgba(245,208,0,0.5)" : "none",
                        marginLeft: item.active ? -3 : 0, marginTop: item.active ? -3 : 0,
                      }} />
                      <div style={{ fontSize: 11, fontWeight: 700, color: item.active ? "#b8850a" : "#7a9a6a", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>
                        {item.icon} &nbsp;{item.year}
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: item.active ? "#1a4d00" : "#3a5a3a", marginBottom: 2 }}>{item.event}</div>
                      <div style={{ fontSize: 13, color: "#8aaa7a" }}>{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ CONFIDENTIALITY ══════════════════ */}
        <section style={{ background: "white", padding: "130px 60px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="mou-reveal" ref={rev() as any} style={{ background: "#f8fff4", borderRadius: 32, overflow: "hidden", border: "1.5px solid #d4edbe", boxShadow: "0 20px 60px -20px rgba(26,77,0,0.08)", display: "grid", gridTemplateColumns: "auto 1fr" }}>
              <div style={{ width: 7, background: "linear-gradient(to bottom, #5cb800, #f5d000)" }} />
              <div style={{ padding: "56px 60px", display: "flex", gap: 44, alignItems: "flex-start" }}>
                <div style={{ fontSize: 64, lineHeight: 1, flexShrink: 0 }}>🔒</div>
                <div>
                  <div style={{ display: "inline-block", fontSize: 11, fontWeight: 800, letterSpacing: "0.25em", color: "#2e7d11", textTransform: "uppercase", marginBottom: 16, padding: "4px 14px", background: "rgba(46,125,17,0.08)", borderRadius: 50 }}>Legal</div>
                  <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 32, fontWeight: 900, color: "#0d2e00", marginBottom: 22, lineHeight: 1.2 }}>Confidentiality &<br />Non-Binding Nature</h2>
                  <p style={{ fontSize: 16, color: "#4a6640", lineHeight: 1.9 }}>
                    All information shared between the Parties under this MOU shall be treated as <strong style={{ color: "#1a4d00" }}>confidential</strong> and shall not be disclosed to any third party without prior written consent. This MOU is a <strong style={{ color: "#1a4d00" }}>statement of intent</strong> and does not create any legally binding obligations or financial commitments unless formalized through a separate written agreement signed by authorized representatives of both Parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ SIGNATURES ══════════════════ */}
        <section style={{ background: "linear-gradient(160deg, #f0fbe8, #e8f6d8)", padding: "130px 60px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right, #5cb800, #f5d000, #5cb800)" }} />

          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="mou-reveal" ref={rev() as any} style={{ textAlign: "center", marginBottom: 80 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.25em", color: "#2e7d11", textTransform: "uppercase", marginBottom: 16 }}>Authorization</div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.4rem, 4vw, 3.6rem)", fontWeight: 900, color: "#0d2e00" }}>
                <em className="mou-shimmer">Signatures</em>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
              {[
                { label: "For Alva's IAST", role: "Principal / Director", icon: "🏛️", party: "Party A" },
                { label: "For Partner Organization", role: "Authorized Signatory", icon: "🌾", party: "Party B" },
              ].map((sig, i) => (
                <div key={sig.label} className={`mou-sig-card mou-reveal`} ref={rev(i * 0.15) as any}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 40 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(26,77,0,0.06)", border: "1.5px solid #d4edbe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>{sig.icon}</div>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "#5cb800", textTransform: "uppercase", marginBottom: 4 }}>{sig.label}</div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: "#1a4d00" }}>{sig.role}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "#b8850a", background: "rgba(245,208,0,0.15)", border: "1px solid rgba(245,208,0,0.4)", borderRadius: 6, padding: "4px 12px", letterSpacing: "0.1em" }}>{sig.party}</div>
                  </div>

                  <div style={{ background: "#f8fff4", borderRadius: 14, padding: "28px 24px", marginBottom: 24, border: "1px solid #e4f0d8" }}>
                    <div style={{ fontSize: 11, color: "#8aaa7a", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 28 }}>Authorized Signature</div>
                    <div style={{ borderBottom: "1.5px solid #c8e4b0", marginBottom: 8 }} />
                    <div style={{ fontSize: 11, color: "#a4c0a0" }}>Sign above this line</div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {["Full Name", "Date"].map(f => (
                      <div key={f}>
                        <div style={{ fontSize: 11, color: "#8aaa7a", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}>{f}</div>
                        <div style={{ borderBottom: "1px solid #d4edbe", paddingBottom: 4 }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 24, textAlign: "center", fontSize: 11, color: "#a4c0a0", textTransform: "uppercase", letterSpacing: "0.15em", borderTop: "1px solid #edf5e4", paddingTop: 18 }}>Official Stamp / Seal</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
