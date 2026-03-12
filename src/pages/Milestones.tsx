import React from "react";
import MilestonesTabs from "@/components/milestones/MilestonesTabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ═══ MILESTONES — Snake / Zig-zag path layout ═══ */

const milestones = [
  { year: "2001", emoji: "🏛️", title: "AEF Established", desc: "Alva's Education Foundation constituted by Dr. Mohan Alva.", tag: "Foundation" },
  { year: "2005", emoji: "🌾", title: "IAST Inaugurated", desc: "Opened with B.Sc. Agriculture, affiliated to UAS Dharwad.", tag: "Launch" },
  { year: "2007", emoji: "🔬", title: "Research Labs", desc: "State-of-the-art labs for Soil Science, Biotech & Pathology.", tag: "Growth" },
  { year: "2009", emoji: "📋", title: "NAAC Accredited", desc: "Received NAAC accreditation for quality benchmarks.", tag: "Recognition" },
  { year: "2011", emoji: "🎓", title: "PG Programs", desc: "M.Sc. Agronomy, Plant Pathology & Soil Science launched.", tag: "Academic" },
  { year: "2013", emoji: "🌍", title: "Farmer Connect", desc: "3,000+ smallholders connected to modern agri-knowledge.", tag: "Outreach" },
  { year: "2015", emoji: "🤝", title: "First MOU", desc: "Industry partnership for internships, research & tech transfer.", tag: "Partnership" },
  { year: "2018", emoji: "📡", title: "Smart Farm", desc: "50-acre IoT farm with satellite monitoring & precision ag.", tag: "Innovation" },
  { year: "2020", emoji: "💻", title: "E-Learning", desc: "Digital infrastructure for remote learning & virtual labs.", tag: "Digital" },
  { year: "2022", emoji: "🏆", title: "State Award", desc: "Karnataka Government recognition for agricultural education.", tag: "Award" },
  { year: "2023", emoji: "🌐", title: "Global Reach", desc: "Academic exchange with Netherlands & Israel universities.", tag: "Global" },
  { year: "2025", emoji: "🚀", title: "Vision 2030", desc: "Roadmap to become a globally top-50 agri institution.", tag: "Future" },
];

const numbers = [
  { val: "12,000+", label: "Alumni" },
  { val: "₹8 Cr+", label: "Research" },
  { val: "150+", label: "MOUs" },
  { val: "94%", label: "Placements" },
];

const rowColors = ["#22543d", "#276749", "#2f855a", "#38a169"];

export default function Milestones() {
  // Group milestones into rows of 3
  const rows: typeof milestones[] = [];
  for (let i = 0; i < milestones.length; i += 3) {
    rows.push(milestones.slice(i, i + 3));
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        .mls{font-family:'Outfit',sans-serif;background:#fafdf7;color:#1a1a1a;}
        @keyframes fadeUp6{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
        .mls-anim{animation:fadeUp6 .7s ease-out both;}
        .mls-d1{animation-delay:.1s} .mls-d2{animation-delay:.2s} .mls-d3{animation-delay:.3s}
        .sn-card{background:white;border:2px solid #e8f5e0;border-radius:18px;padding:22px 20px;transition:all .3s;cursor:default;position:relative;}
        .sn-card:hover{border-color:#38a169;transform:translateY(-5px);box-shadow:0 16px 48px rgba(34,84,61,.12);}
        .sn-node{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;border:3px solid white;position:relative;z-index:3;}
      `}</style>
      <div className="mls">
        <Header />

        {/* ──── HERO ──── */}
        <section style={{ minHeight:"90vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", padding:"180px 40px 60px" }}>
          <div className="mls-anim" style={{ fontSize:13, fontWeight:700, letterSpacing:".3em", color:"#48bb78", textTransform:"uppercase", marginBottom:28 }}>2001 – Present</div>
          <h1 className="mls-anim mls-d1" style={{ fontSize:"clamp(3.5rem,8vw,7rem)", fontWeight:900, lineHeight:.9, color:"#1a2e1a", margin:"0 0 24px" }}>
            Our<br /><span style={{ color:"#38a169" }}>Milestones</span>
          </h1>
          <p className="mls-anim mls-d2" style={{ fontSize:18, color:"#6b7280", maxWidth:480, lineHeight:1.8, margin:"0 0 56px" }}>
            Two decades of achievements — follow the path of our journey.
          </p>
          <div className="mls-anim mls-d3" style={{ display:"flex", gap:0, borderRadius:20, overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,.06)" }}>
            {numbers.map((n,i) => (
              <div key={n.label} style={{ padding:"26px 36px", background:i%2===0?"#22543d":"#276749", textAlign:"center", minWidth:120 }}>
                <div style={{ fontSize:26, fontWeight:900, color:"white", lineHeight:1 }}>{n.val}</div>
                <div style={{ fontSize:10, fontWeight:500, color:"rgba(255,255,255,.5)", marginTop:6, textTransform:"uppercase", letterSpacing:".1em" }}>{n.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ──── SNAKE TIMELINE ──── */}
                <MilestonesTabs />

        {/* ──── CTA ──── */}
        <section style={{ padding:"80px 40px", background:"#22543d", textAlign:"center" }}>
          <div style={{ fontSize:48, marginBottom:20 }}>🚀</div>
          <h2 style={{ fontSize:32, fontWeight:900, color:"white", marginBottom:12 }}>The Journey Continues...</h2>
          <p style={{ fontSize:15, color:"rgba(255,255,255,.6)", maxWidth:480, margin:"0 auto 32px" }}>Vision 2030 — scaling new heights in agricultural education and global collaboration.</p>
          <div style={{ display:"inline-flex", gap:12, flexWrap:"wrap" }}>
            {["Vision 2030","Centre of Excellence","Global Research"].map(t=>(
              <span key={t} style={{ padding:"8px 20px", border:"1px solid rgba(255,255,255,.15)", borderRadius:50, fontSize:12, color:"rgba(255,255,255,.7)", fontWeight:600 }}>{t}</span>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
