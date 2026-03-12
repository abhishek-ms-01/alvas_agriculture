import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const missionItems = [
  { dot: "g", icon: "🌱", title: "Quality Education",     desc: "Deliver world-class teaching blending classical agrarian knowledge with modern scientific methods." },
  { dot: "y", icon: "🔬", title: "Research & Innovation", desc: "Advance cutting-edge research in crop science, soil health, water management, and climate-resilient farming." },
  { dot: "g", icon: "🤝", title: "Community Outreach",    desc: "Partner with farmers, government bodies, and NGOs to create lasting, ground-level impact." },
  { dot: "y", icon: "🌍", title: "Sustainability",         desc: "Champion eco-friendly practices that protect the environment for future generations." },
];

const coreValues = [
  { icon: "🌾", name: "Excellence",    desc: "Highest academic & professional standards in all we pursue.",           accent: "#247A24" },
  { icon: "🌿", name: "Sustainability", desc: "Farming that protects ecosystems and ensures food security.",           accent: "#C8920A" },
  { icon: "🤲", name: "Community",     desc: "Serving farmers and rural families with humility and care.",             accent: "#4CAF50" },
  { icon: "💡", name: "Innovation",    desc: "Creative thinking and modern technology for agriculture.",                accent: "#C8920A" },
  { icon: "⚖️", name: "Integrity",     desc: "Honest, transparent, and ethical in every endeavour.",                  accent: "#155215" },
  { icon: "🌻", name: "Growth",        desc: "Continuous learning and personal development for all.",                  accent: "#F5C518" },
];

const stats = [
  { num: "50+",  label: "Years"     },
  { num: "12K+", label: "Graduates" },
  { num: "30+",  label: "Research"  },
  { num: "98%",  label: "Placements"},
];

export default function VisionMission() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vm-visible"); }),
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Outfit:wght@300;400;500;600&display=swap');
        :root {
          --gold: #C8920A; --gold-bright: #F5C518; --gold-pale: #FEF9E7;
          --green-deep: #0D3B0D; --green-dark: #155215; --green-mid: #247A24;
          --green-soft: #E8F5E9; --white: #FFFFFF; --cream: #FDFBF2;
        }
        .vm-body { font-family:'Outfit',sans-serif; background:var(--cream); color:#1a2e1a; overflow-x:hidden; }

        /* HERO */
        .vm-hero {
          position:relative; min-height:520px;
          background:var(--green-deep);
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          text-align:center; padding:120px 40px 110px; overflow:hidden;
        }
        .vm-hero::before {
          content:''; position:absolute; inset:0;
          background:
            radial-gradient(ellipse 70% 60% at 50% 50%,rgba(200,146,10,.22) 0%,transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 90%,rgba(36,122,36,.3) 0%,transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 10%,rgba(36,122,36,.25) 0%,transparent 60%);
          animation:vmGlow 6s ease-in-out infinite alternate;
        }
        @keyframes vmGlow { from{opacity:.7} to{opacity:1} }
        .vm-hero::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:5px;
          background:linear-gradient(90deg,transparent,var(--gold-bright),var(--gold),var(--gold-bright),transparent);
        }
        .vm-leaf {
          position:absolute; font-size:420px; opacity:.04; line-height:1;
          user-select:none; pointer-events:none;
          animation:vmFloat 8s ease-in-out infinite alternate;
        }
        @keyframes vmFloat { from{transform:translateY(0) rotate(-10deg)} to{transform:translateY(-20px) rotate(-6deg)} }
        .vm-pill {
          position:relative; display:inline-flex; align-items:center; gap:8px;
          background:rgba(245,197,24,.12); border:1px solid rgba(245,197,24,.35);
          color:var(--gold-bright); font-size:.72rem; letter-spacing:3px; text-transform:uppercase; font-weight:600;
          padding:7px 22px; border-radius:50px; margin-bottom:24px;
          animation:vmFadeIn .8s ease both;
        }
        .vm-pill::before,.vm-pill::after { content:'✦'; font-size:9px; }
        .vm-hero h1 {
          position:relative; font-family:'Playfair Display',serif;
          font-size:clamp(3rem,7vw,5.5rem); font-weight:900; color:#fff; line-height:1.05; margin-bottom:20px;
          animation:vmFadeIn 1s ease .15s both;
        }
        .vm-hero h1 em { font-style:italic; color:var(--gold-bright); display:block; }
        .vm-hero-divider { position:relative; width:80px; height:3px; background:linear-gradient(90deg,transparent,var(--gold),transparent); margin:0 auto 20px; animation:vmFadeIn 1s ease .3s both; }
        .vm-hero-sub { position:relative; color:rgba(255,255,255,.6); font-size:1rem; max-width:480px; line-height:1.8; animation:vmFadeIn 1s ease .45s both; }
        .vm-scroll-hint {
          position:absolute; bottom:28px; left:50%; transform:translateX(-50%);
          display:flex; flex-direction:column; align-items:center; gap:6px;
          color:rgba(255,255,255,.3); font-size:.65rem; letter-spacing:2px; text-transform:uppercase;
          animation:vmBounce 2s ease-in-out infinite;
        }
        .vm-scroll-hint::after { content:'↓'; font-size:1.1rem; }
        @keyframes vmBounce {
          0%,100%{transform:translateX(-50%) translateY(0)}
          50%{transform:translateX(-50%) translateY(6px)}
        }

        /* CARDS */
        .vm-cards { max-width:1140px; margin:0 auto; padding:70px 30px 0; display:grid; grid-template-columns:1fr 1fr; gap:28px; }
        .vm-card { border-radius:20px; overflow:hidden; box-shadow:0 8px 40px rgba(13,59,13,.1); transition:transform .4s,box-shadow .4s; }
        .vm-card:hover { transform:translateY(-8px); box-shadow:0 20px 60px rgba(13,59,13,.18); }

        .vm-card-top { padding:40px 40px 30px; position:relative; overflow:hidden; }
        .vm-card-body { padding:30px 40px 38px; }

        /* Vision dark */
        .vm-vision .vm-card-top { background:linear-gradient(135deg,#0D3B0D,#155215); }
        .vm-vision .vm-card-top::before { content:'🔭'; position:absolute; right:20px; top:16px; font-size:100px; opacity:.08; }
        .vm-vision .vm-card-tag { background:rgba(245,197,24,.15); border:1px solid rgba(245,197,24,.3); color:var(--gold-bright); }
        .vm-vision .vm-card-heading { color:#fff; }
        .vm-vision .vm-card-heading span { color:var(--gold-bright); }
        .vm-vision .vm-card-ul { background:linear-gradient(180deg,#0f4010,#0D3B0D); }
        .vm-vision .vm-card-body { background:linear-gradient(180deg,#0f4010,#0D3B0D); }
        .vm-vision .vm-card-body p { color:rgba(255,255,255,.75); font-size:.97rem; line-height:1.85; margin-bottom:16px; }
        .vm-vision .vm-card-body p:last-child { margin-bottom:0; }
        .vm-vision .vm-card-underline { background:var(--gold); }

        /* Mission light */
        .vm-mission .vm-card-top { background:linear-gradient(135deg,#FFFDE7,#FEF9D0); border-bottom:1px solid rgba(200,146,10,.15); }
        .vm-mission .vm-card-top::before { content:'🎯'; position:absolute; right:20px; top:16px; font-size:100px; opacity:.1; }
        .vm-mission .vm-card-tag { background:rgba(21,82,21,.08); border:1px solid rgba(21,82,21,.2); color:var(--green-dark); }
        .vm-mission .vm-card-heading { color:var(--green-deep); }
        .vm-mission .vm-card-heading span { color:var(--gold); }
        .vm-mission .vm-card-underline { background:var(--green-mid); }
        .vm-mission .vm-card-body { background:#fff; }

        .vm-card-tag { display:inline-block; font-size:.68rem; letter-spacing:2.5px; text-transform:uppercase; font-weight:700; padding:4px 14px; border-radius:30px; margin-bottom:14px; }
        .vm-card-heading { font-family:'Playfair Display',serif; font-size:2rem; font-weight:900; line-height:1.1; margin-bottom:6px; }
        .vm-card-underline { width:50px; height:3px; border-radius:2px; margin-top:14px; }

        .vm-mission-list { list-style:none; display:flex; flex-direction:column; gap:18px; padding:0; margin:0; }
        .vm-mission-list li { display:flex; align-items:flex-start; gap:14px; }
        .vm-ml-dot { width:32px; height:32px; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:15px; margin-top:1px; }
        .vm-ml-dot.g { background:var(--green-soft); }
        .vm-ml-dot.y { background:var(--gold-pale); }
        .vm-ml-text strong { display:block; font-size:.88rem; font-weight:600; color:var(--green-deep); margin-bottom:2px; }
        .vm-ml-text span { font-size:.84rem; color:#5a7a5a; line-height:1.6; }

        /* VALUES */
        .vm-values { max-width:1140px; margin:56px auto 0; padding:0 30px; }
        .vm-section-label { text-align:center; margin-bottom:36px; }
        .vm-eyebrow { display:inline-block; font-size:.7rem; letter-spacing:3px; text-transform:uppercase; font-weight:700; color:var(--green-mid); margin-bottom:10px; }
        .vm-section-label h2 { font-family:'Playfair Display',serif; font-size:clamp(1.7rem,3vw,2.3rem); font-weight:900; color:var(--green-deep); }
        .vm-section-label h2 span { color:var(--gold); }
        .vm-values-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:16px; }
        .vm-val {
          background:#fff; border-radius:14px; padding:28px 16px 24px; text-align:center;
          border:1px solid rgba(21,82,21,.08); box-shadow:0 2px 16px rgba(13,59,13,.06);
          transition:all .3s; position:relative; overflow:hidden;
        }
        .vm-val::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; transition:height .3s; }
        .vm-val:hover { transform:translateY(-5px); box-shadow:0 10px 32px rgba(13,59,13,.12); }
        .vm-val:hover::after { height:5px!important; }
        .vm-val-icon { font-size:32px; margin-bottom:10px; display:block; }
        .vm-val-name { font-family:'Playfair Display',serif; font-size:.95rem; font-weight:700; color:var(--green-deep); margin-bottom:6px; }
        .vm-val-desc { font-size:.75rem; color:#7a9a7a; line-height:1.6; }

        /* BANNER */
        .vm-banner { max-width:1140px; margin:56px auto 0; padding:0 30px; }
        .vm-banner-inner {
          border-radius:22px;
          background:linear-gradient(135deg,var(--green-deep) 0%,#0a2e0a 60%,#1a4d1a 100%);
          padding:60px 70px; position:relative; overflow:hidden;
          display:grid; grid-template-columns:1fr auto; gap:50px; align-items:center;
        }
        .vm-banner-inner::before {
          content:''; position:absolute; inset:0;
          background:radial-gradient(ellipse 60% 80% at 80% 50%,rgba(245,197,24,.1) 0%,transparent 60%);
        }
        .vm-banner-deco {
          position:absolute; right:0; top:0; bottom:0; width:40%;
          background:url("data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='300' cy='150' r='200' fill='none' stroke='rgba(245,197,24,0.06)' stroke-width='60'/%3E%3Ccircle cx='300' cy='150' r='120' fill='none' stroke='rgba(245,197,24,0.04)' stroke-width='40'/%3E%3C/svg%3E") center/cover no-repeat;
          pointer-events:none;
        }
        .vm-banner-text { position:relative; }
        .vm-banner-eyebrow {
          display:inline-block; background:rgba(245,197,24,.12); border:1px solid rgba(245,197,24,.3);
          color:var(--gold-bright); font-size:.68rem; letter-spacing:2.5px; text-transform:uppercase; font-weight:700;
          padding:5px 16px; border-radius:30px; margin-bottom:16px;
        }
        .vm-banner-text h3 { font-family:'Playfair Display',serif; font-size:clamp(1.6rem,2.5vw,2.2rem); font-weight:900; color:#fff; margin-bottom:12px; line-height:1.2; }
        .vm-banner-text h3 em { font-style:italic; color:var(--gold-bright); }
        .vm-banner-text p { color:rgba(255,255,255,.6); font-size:.93rem; line-height:1.8; max-width:500px; }
        .vm-stats-col { position:relative; display:grid; grid-template-columns:1fr 1fr; gap:20px; }
        .vm-stat-box { background:rgba(255,255,255,.05); border:1px solid rgba(245,197,24,.15); border-radius:14px; padding:20px 22px; text-align:center; }
        .vm-stat-num { font-family:'Playfair Display',serif; font-size:2rem; font-weight:900; color:var(--gold-bright); display:block; line-height:1; }
        .vm-stat-label { font-size:.72rem; color:rgba(255,255,255,.45); letter-spacing:1px; text-transform:uppercase; margin-top:5px; display:block; }

        /* CLOSER */
        .vm-closer { max-width:700px; margin:60px auto 0; padding:0 30px 80px; text-align:center; }
        .vm-closer-icon { font-size:40px; margin-bottom:16px; display:block; }
        .vm-closer blockquote { font-family:'Playfair Display',serif; font-size:clamp(1.15rem,2vw,1.45rem); font-style:italic; color:var(--green-deep); line-height:1.75; margin-bottom:16px; }
        .vm-closer cite { font-size:.8rem; color:#8aaa8a; letter-spacing:1.5px; text-transform:uppercase; font-style:normal; }
        .vm-closer-line { width:60px; height:2px; background:linear-gradient(90deg,transparent,var(--gold),transparent); margin:18px auto 0; }

        /* REVEAL */
        @keyframes vmFadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .vm-reveal { opacity:0; transform:translateY(32px); transition:opacity .7s ease,transform .7s ease; }
        .vm-reveal.vm-visible { opacity:1; transform:translateY(0); }
        .vm-d1{transition-delay:.1s} .vm-d2{transition-delay:.22s} .vm-d3{transition-delay:.34s}

        @media(max-width:900px){
          .vm-cards{grid-template-columns:1fr}
          .vm-values-grid{grid-template-columns:repeat(3,1fr)}
          .vm-banner-inner{grid-template-columns:1fr;padding:40px 30px;gap:32px}
          .vm-stats-col{grid-template-columns:repeat(4,1fr)}
        }
        @media(max-width:560px){
          .vm-values-grid{grid-template-columns:repeat(2,1fr)}
          .vm-stats-col{grid-template-columns:repeat(2,1fr)}
          .vm-card-top,.vm-card-body{padding:28px 24px!important}
        }
      `}</style>

      <div className="vm-body">
        <Header />

        {/* ═══ HERO ═══ */}
        <section className="vm-hero">
          <div className="vm-leaf">🌾</div>
          <div className="vm-pill">Agricultural College</div>
          <h1>Vision &amp; <em>Mission</em></h1>
          <div className="vm-hero-divider" />
          <p className="vm-hero-sub">
            Rooted in the soil, reaching for the sky — nurturing the agri-leaders who will feed and sustain our world.
          </p>
          <div className="vm-scroll-hint">Scroll</div>
        </section>

        {/* ═══ VISION + MISSION CARDS ═══ */}
        <section className="vm-cards">

          {/* Vision Card */}
          <div className="vm-card vm-vision vm-reveal vm-d1" ref={addReveal}>
            <div className="vm-card-top">
              <div className="vm-card-tag">Our Vision</div>
              <div className="vm-card-heading">A World Fed by <span>Knowledge</span></div>
              <div className="vm-card-underline" />
            </div>
            <div className="vm-card-body">
              <p>To emerge as a nationally and globally recognized institution of agricultural excellence — producing compassionate, skilled, and innovative professionals who lead sustainable food systems and uplift farming communities.</p>
              <p>We envision a future where science-driven agriculture ensures food security, restores ecological balance, and empowers every rural household with prosperity and dignity.</p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vm-card vm-mission vm-reveal vm-d2" ref={addReveal}>
            <div className="vm-card-top">
              <div className="vm-card-tag">Our Mission</div>
              <div className="vm-card-heading">Educate. Innovate. <span>Serve.</span></div>
              <div className="vm-card-underline" />
            </div>
            <div className="vm-card-body">
              <ul className="vm-mission-list">
                {missionItems.map((item) => (
                  <li key={item.title}>
                    <div className={`vm-ml-dot ${item.dot}`}>{item.icon}</div>
                    <div className="vm-ml-text">
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ CORE VALUES ═══ */}
        <section className="vm-values vm-reveal" ref={addReveal}>
          <div className="vm-section-label">
            <div className="vm-eyebrow">✦ Principles We Live By ✦</div>
            <h2>Our Core <span>Values</span></h2>
          </div>
          <div className="vm-values-grid">
            {coreValues.map((v, i) => (
              <div
                key={v.name}
                className={`vm-val vm-reveal ${i < 2 ? "vm-d1" : i < 4 ? "vm-d2" : "vm-d3"}`}
                ref={addReveal}
                style={{ "--accent": v.accent } as React.CSSProperties}
              >
                <style>{`.vm-val:nth-child(${i + 1})::after { background: ${v.accent}; }`}</style>
                <span className="vm-val-icon">{v.icon}</span>
                <div className="vm-val-name">{v.name}</div>
                <div className="vm-val-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ COMMITMENT BANNER ═══ */}
        <div className="vm-banner vm-reveal" ref={addReveal}>
          <div className="vm-banner-inner">
            <div className="vm-banner-deco" />
            <div className="vm-banner-text">
              <div className="vm-banner-eyebrow">Our Commitment</div>
              <h3>Growing the Leaders of <em>Tomorrow</em></h3>
              <p>For over five decades, our college has stood as a beacon of agricultural excellence — mentoring students who transform the nation's farming landscape and feed millions of families.</p>
            </div>
            <div className="vm-stats-col">
              {stats.map((s) => (
                <div key={s.label} className="vm-stat-box">
                  <span className="vm-stat-num">{s.num}</span>
                  <span className="vm-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ CLOSING QUOTE ═══ */}
        <div className="vm-closer vm-reveal" ref={addReveal}>
          <span className="vm-closer-icon">🌾</span>
          <blockquote>
            "Agriculture is the noblest of all alchemy; for it turns earth and even manure into gold, conferring upon its master the additional reward of health."
          </blockquote>
          <cite>— Paul Chatfield</cite>
          <div className="vm-closer-line" />
        </div>

        <Footer />
      </div>
    </>
  );
}
