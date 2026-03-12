import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ═══ ABOUT COLLEGE — Full-bleed horizontal sections, overlapping cards, editorial ═══ */

const stats = [
  { val: "2005", sub: "Established" },
  { val: "12K+", sub: "Alumni" },
  { val: "50", sub: "Acre Campus" },
  { val: "NAAC", sub: "Accredited" },
];

const features = [
  { num: "01", title: "UAS Dharwad Affiliated", desc: "Affiliated with one of India's most prestigious agricultural universities for globally recognized degrees.", color: "#22543d" },
  { num: "02", title: "ICAR Approved Curriculum", desc: "Programs designed under ICAR guidelines ensuring national-standard agricultural education.", color: "#276749" },
  { num: "03", title: "50-Acre IoT Smart Farm", desc: "Hands-on training with satellite monitoring, drip irrigation, drone tech, and robotic sorters.", color: "#2f855a" },
  { num: "04", title: "Cutting-Edge Laboratories", desc: "Fully equipped labs for soil science, biotechnology, plant pathology, and agricultural chemistry.", color: "#38a169" },
  { num: "05", title: "Precision Agriculture Training", desc: "GPS-guided field equipment, drone-based crop monitoring, and remote sensing tools.", color: "#48bb78" },
  { num: "06", title: "Award-Winning Research", desc: "Ranked among Karnataka's top agricultural colleges for funded research and publications.", color: "#68d391" },
];

const courses = [
  { tier: "UG", name: "Undergraduate", list: ["B.Sc. (Hons.) Agriculture", "B.Sc. Horticulture", "B.Sc. Forestry", "B.Tech. Agri Engineering"] },
  { tier: "PG", name: "Postgraduate", list: ["M.Sc. Agronomy", "M.Sc. Plant Pathology", "M.Sc. Soil Science", "M.Sc. Genetics & Breeding"] },
  { tier: "PhD", name: "Doctorate", list: ["Ph.D. Agronomy", "Ph.D. Biotechnology", "Ph.D. Agri Economics", "Ph.D. Entomology"] },
];

const campus = [
  { emoji: "🏠", label: "Hostels" }, { emoji: "📚", label: "Library" }, { emoji: "🍽️", label: "Canteen" },
  { emoji: "⚽", label: "Sports" }, { emoji: "🏥", label: "Health" }, { emoji: "🚌", label: "Transport" },
  { emoji: "💻", label: "Wi-Fi" }, { emoji: "🧪", label: "Labs" },
];

export default function AboutCollege() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        .abc *{box-sizing:border-box;}
        .abc{font-family:'Outfit',sans-serif;background:#fafdf7;color:#1a1a1a;}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
        .abc-anim{animation:fadeUp .7s ease-out both;}
        .abc-anim-d1{animation-delay:.1s} .abc-anim-d2{animation-delay:.2s} .abc-anim-d3{animation-delay:.3s} .abc-anim-d4{animation-delay:.4s}
      `}</style>
      <div className="abc">
        <Header />

        {/* ──── HERO — Giant centered text with stats strip ──── */}
        <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", padding:"180px 40px 60px", position:"relative", background:"#fafdf7" }}>
          <div className="abc-anim" style={{ fontSize:13, fontWeight:700, letterSpacing:".3em", color:"#48bb78", textTransform:"uppercase", marginBottom:28 }}>Since 2005 · Moodabidri, Karnataka</div>
          <h1 className="abc-anim abc-anim-d1" style={{ fontSize:"clamp(3.5rem,8vw,7rem)", fontWeight:900, lineHeight:.9, color:"#1a2e1a", margin:"0 0 24px" }}>
            Alva's<br /><span style={{ color:"#38a169" }}>IAST</span>
          </h1>
          <p className="abc-anim abc-anim-d2" style={{ fontSize:18, color:"#6b7280", maxWidth:520, lineHeight:1.8, fontWeight:400, margin:"0 0 60px" }}>
            A premier institution shaping agri-professionals who transform Indian agriculture through knowledge, skill, and innovation.
          </p>

          {/* Stats row */}
          <div className="abc-anim abc-anim-d3" style={{ display:"flex", gap:0, borderRadius:20, overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,.06)" }}>
            {stats.map((s,i) => (
              <div key={s.sub} style={{ padding:"32px 48px", background:i%2===0?"#22543d":"#276749", textAlign:"center", minWidth:140 }}>
                <div style={{ fontSize:32, fontWeight:900, color:"white", lineHeight:1 }}>{s.val}</div>
                <div style={{ fontSize:11, fontWeight:500, color:"rgba(255,255,255,.6)", marginTop:8, textTransform:"uppercase", letterSpacing:".15em" }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div style={{ position:"absolute", bottom:40, left:"50%", transform:"translateX(-50%)" }}>
            <div style={{ width:1, height:50, background:"linear-gradient(to bottom,#48bb78,transparent)" }} />
          </div>
        </section>

        {/* ──── FEATURES — Large numbered list ──── */}
        <section style={{ padding:"100px 0", background:"white" }}>
          <div style={{ maxWidth:900, margin:"0 auto", padding:"0 40px" }}>
            <div style={{ fontSize:13, fontWeight:700, letterSpacing:".3em", color:"#48bb78", textTransform:"uppercase", marginBottom:12 }}>Why Choose Us</div>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:900, color:"#1a2e1a", marginBottom:60, lineHeight:1.1 }}>What makes us<br /><span style={{ color:"#38a169" }}>different.</span></h2>


          </div>
        </section>

        {/* ──── COURSES — Side-by-side tier cards with light bg ──── */}
        <section style={{ padding:"100px 40px", background:"linear-gradient(135deg, #eef8e6, #f4fbef)" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:60 }}>
              <div style={{ fontSize:13, fontWeight:700, letterSpacing:".3em", color:"#38a169", textTransform:"uppercase", marginBottom:12 }}>Academic Programs</div>
              <h2 style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:900, color:"#1a2e1a", lineHeight:1.1 }}>Courses offered.</h2>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
              {courses.map((c,i) => (
                <div key={c.tier} style={{ borderRadius:20, overflow:"hidden", background:"white", border:"2px solid #e8f5e0", transition:"all .35s", cursor:"default", boxShadow:"0 4px 16px rgba(0,0,0,.03)" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="#38a169";e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 16px 48px rgba(34,84,61,.1)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="#e8f5e0";e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,.03)";}}>
                  <div style={{ padding:"28px 26px 20px" }}>
                    <div style={{ fontSize:48, fontWeight:900, color:"#38a169", opacity:.25, lineHeight:1 }}>{c.tier}</div>
                    <div style={{ fontSize:18, fontWeight:800, color:"#1a2e1a", marginTop:4 }}>{c.name}</div>
                  </div>
                  <ul style={{ listStyle:"none", padding:"0 26px 26px", margin:0 }}>
                    {c.list.map((l,j)=>(
                      <li key={l} style={{ padding:"10px 0", borderTop:j>0?"1px solid #f0f5eb":"none", display:"flex", gap:10, alignItems:"center" }}>
                        <span style={{ width:5, height:5, borderRadius:"50%", background:"#38a169", flexShrink:0 }} />
                        <span style={{ fontSize:14, color:"#4a5568", fontWeight:400 }}>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──── CAMPUS — Emoji icon bubbles ──── */}
        <section style={{ padding:"100px 40px", background:"#fafdf7" }}>
          <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
            <div style={{ fontSize:13, fontWeight:700, letterSpacing:".3em", color:"#48bb78", textTransform:"uppercase", marginBottom:12 }}>Campus Life</div>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:900, color:"#1a2e1a", marginBottom:50 }}>Everything you need.</h2>
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:20 }}>
              {campus.map(c => (
                <div key={c.label} style={{ width:100, height:100, borderRadius:"50%", background:"white", border:"2px solid #e8f5e0", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4, transition:"all .3s", cursor:"default", boxShadow:"0 4px 16px rgba(0,0,0,.03)" }}
                  onMouseEnter={e=>{e.currentTarget.style.background="#22543d";e.currentTarget.style.borderColor="#22543d";e.currentTarget.style.transform="scale(1.12)";(e.currentTarget.querySelector('.cl') as any).style.color="rgba(255,255,255,.8)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="white";e.currentTarget.style.borderColor="#e8f5e0";e.currentTarget.style.transform="none";(e.currentTarget.querySelector('.cl') as any).style.color="#6b7280";}}>
                  <span style={{ fontSize:28 }}>{c.emoji}</span>
                  <span className="cl" style={{ fontSize:10, fontWeight:700, color:"#6b7280", textTransform:"uppercase", letterSpacing:".08em", transition:"color .3s" }}>{c.label}</span>
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
