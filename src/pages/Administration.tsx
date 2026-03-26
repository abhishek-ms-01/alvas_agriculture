import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const useReveal = () => {
  const els = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("dv"); }),
      { threshold: 0.07 }
    );
    els.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  let i = 0;
  return (d = 0) => (el: HTMLElement | null) => { els.current[i++] = el; if (el) el.style.transitionDelay = `${d}s`; };
};

const leadership = [
  { role: "Principal", name: "Dr. A. K. Sharma", qual: "Ph.D. Agronomy, IARI New Delhi", exp: "28 Years", icon: "🎓", desc: "Provides visionary leadership to academics, research, and institutional growth." },
  { role: "Vice Principal (Academic)", name: "Dr. Meena Rodrigues", qual: "Ph.D. Plant Pathology, UAS Dharwad", exp: "20 Years", icon: "📚", desc: "Oversees curriculum development, examinations, and faculty coordination." },
  { role: "Vice Principal (Research)", name: "Dr. Ramesh Gowda", qual: "Ph.D. Soil Science, ICAR", exp: "18 Years", icon: "🔬", desc: "Leads funded research projects, publications, and scholar mentoring." },
  { role: "Dean of Students", name: "Prof. Kavitha Nair", qual: "M.Sc. Agriculture, UAS Bangalore", exp: "15 Years", icon: "🤝", desc: "Champions student welfare, grievance redressal, and extra-curricular excellence." },
];

const departments = [
  { icon: "🌾", name: "Agronomy", hod: "Dr. Suresh Patel", focus: "Crop production, field management, and agro-climatology." },
  { icon: "🧬", name: "Plant Genetics & Breeding", hod: "Dr. Lakshmi Rao", focus: "Variety development, seed production, and biotechnology." },
  { icon: "🐛", name: "Plant Pathology & Entomology", hod: "Dr. Vijay Kumar", focus: "Disease management, pest control, and integrated crop protection." },
  { icon: "🪱", name: "Soil Science & Agri Chemistry", hod: "Dr. Anitha Shetty", focus: "Soil health, fertility management, and precision nutrient use." },
  { icon: "💧", name: "Agricultural Engineering", hod: "Er. Pradeep Nayak", focus: "Irrigation, farm machinery, post-harvest tech, and rural structures." },
  { icon: "📈", name: "Agricultural Economics", hod: "Dr. Padma Bhat", focus: "Farm management, agri-marketing, and commodity value chains." },
  { icon: "🌿", name: "Horticulture", hod: "Dr. Ravi Kamath", focus: "Fruit crops, vegetables, floriculture, and plantation crops." },
  { icon: "🐄", name: "Animal Husbandry", hod: "Dr. Sunita Amin", focus: "Livestock management, dairy science, and poultry enterprise." },
  { icon: "🌲", name: "Forestry & Agroforestry", hod: "Dr. Girish Hegde", focus: "Farm forestry, silviculture, and integrated land-use systems." },
];

const admin = [
  { icon: "📋", dept: "Academic Section", head: "Mr. Surendra Kumar", duties: ["Admission processing", "Hall ticket issue", "Degree & certification", "Attendance records"] },
  { icon: "💰", dept: "Finance & Accounts", head: "Mr. Ganesh Rao", duties: ["Fee collection", "Scholarship disbursal", "Budget management", "Audit coordination"] },
  { icon: "📖", dept: "Examination Cell", head: "Dr. Sumathi Bhat", duties: ["Internal assessments", "University exam coordination", "Results & grade cards", "Revaluation requests"] },
  { icon: "🏡", dept: "Hostel & Welfare", head: "Mr. Devraj Shetty", duties: ["Hostel allotment", "Mess management", "Student welfare funds", "Anti-ragging cell"] },
];

export default function Administration() {
  const rev = useReveal();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;500;600;700;800&display=swap');
        .adm-root{font-family:'Inter',sans-serif;background:#f6fbf2;}
        .dr{opacity:0;transform:translateY(44px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
        .dr.dv{opacity:1;transform:none;}
        .dsl{opacity:0;transform:translateX(-56px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
        .dsl.dv{opacity:1;transform:none;}
        .dsr{opacity:0;transform:translateX(56px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
        .dsr.dv{opacity:1;transform:none;}
        .lcard{background:white;border:1.5px solid #e4f0d8;border-radius:20px;padding:32px 28px;transition:box-shadow .35s,border-color .35s,transform .35s;cursor:default;}
        .lcard:hover{box-shadow:0 20px 60px -10px rgba(26,77,0,.13);border-color:#5cb800;transform:translateY(-6px);}
        .dcard{background:white;border:1.5px solid #e4f0d8;border-radius:18px;padding:24px;transition:box-shadow .3s,transform .3s;cursor:default;}
        .dcard:hover{box-shadow:0 16px 50px rgba(26,77,0,.1);border-color:#5cb800;transform:translateY(-4px);}
        @keyframes dfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
        @keyframes dshim{0%{background-position:-200% center}100%{background-position:200% center}}
        .dshim{background:linear-gradient(90deg,#1a6600 0%,#5cb800 40%,#1a6600 60%,#2e7d11 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:dshim 3.5s linear infinite;}
        .dgold{background:linear-gradient(90deg,#b8850a 0%,#f5d000 40%,#b8850a 60%,#e8b800 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:dshim 3s linear infinite;}
      `}</style>
      <div className="adm-root">
        <Header />

        {/* HERO */}
        <section style={{ minHeight:"100vh",display:"flex",flexDirection:"column",background:"linear-gradient(145deg,#f0fbe8 0%,#e6f6d8 40%,#f8fff4 100%)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",inset:0,backgroundImage:"radial-gradient(circle,rgba(46,125,17,.12) 1px,transparent 1px)",backgroundSize:"36px 36px" }} />
          <div style={{ position:"absolute",bottom:-60,left:"50%",transform:"translateX(-50%)",fontSize:"22vw",fontWeight:900,fontFamily:"Playfair Display,serif",color:"rgba(26,77,0,.04)",lineHeight:1,userSelect:"none",whiteSpace:"nowrap" }}>ADMIN</div>
          {[{ top:"18%",right:"8%",s:240 },{ top:"62%",left:"4%",s:140 }].map((r,i)=>(
            <div key={i} style={{ position:"absolute",top:r.top,left:(r as any).left,right:(r as any).right,width:r.s,height:r.s,borderRadius:"50%",border:"1.5px solid rgba(92,184,0,.18)",animation:`dfloat ${6+i}s ease-in-out ${i}s infinite` }}>
              <div style={{ position:"absolute",inset:16,borderRadius:"50%",border:"1px solid rgba(245,208,0,.18)" }} />
            </div>
          ))}
          <div style={{ position:"absolute",left:0,top:"50%",transform:"translateY(-50%)",width:5,height:"38%",borderRadius:"0 4px 4px 0",background:"linear-gradient(to bottom,transparent,#5cb800,transparent)" }} />

          <div style={{ flex:1,display:"flex",alignItems:"center",maxWidth:1200,margin:"0 auto",padding:"160px 60px 80px",gap:80,width:"100%",position:"relative",zIndex:2 }}>
            <div style={{ flex:"0 0 52%" }}>
              <div style={{ display:"inline-flex",alignItems:"center",gap:10,marginBottom:32,padding:"7px 20px",border:"1.5px solid rgba(46,125,17,.25)",borderRadius:50,background:"rgba(255,255,255,.7)",backdropFilter:"blur(8px)" }}>
                <div style={{ width:6,height:6,borderRadius:"50%",background:"#2e7d11" }} />
                <span style={{ fontSize:11,fontWeight:700,letterSpacing:"0.25em",color:"#1a4d00",textTransform:"uppercase" }}>Alva's IAST · Institutional Governance</span>
              </div>
              <h1 style={{ fontFamily:"Playfair Display,serif",lineHeight:1.05,marginBottom:24 }}>
                <span style={{ display:"block",fontSize:"clamp(2.8rem,5vw,4.8rem)",fontWeight:700,color:"#1a4d00",opacity:.85 }}>Administration</span>
                <span className="dshim" style={{ display:"block",fontSize:"clamp(2.8rem,5vw,4.8rem)",fontWeight:900,fontStyle:"italic" }}>& Governance</span>
              </h1>
              <div style={{ width:64,height:3,background:"linear-gradient(to right,#5cb800,#f5d000)",borderRadius:4,marginBottom:28 }} />
              <p style={{ fontSize:17,color:"#4a6640",lineHeight:1.9,maxWidth:480,fontWeight:300 }}>A transparent and committed administrative framework ensuring academic excellence, student welfare, and institutional integrity at Alva's Institute of Agricultural Science & Technology.</p>
              <div style={{ display:"flex",marginTop:48,background:"white",borderRadius:20,boxShadow:"0 12px 40px rgba(26,77,0,.08)",border:"1px solid #e4f0d8",overflow:"hidden" }}>
                {[{ val:"4",unit:"",label:"Leadership Roles" },{ val:"9",unit:"",label:"Departments" },{ val:"120+",unit:"",label:"Faculty & Staff" },{ val:"NAAC",unit:"",label:"Accredited" }].map((s,i)=>(
                  <div key={s.label} style={{ flex:1,padding:"22px 14px",textAlign:"center",borderLeft:i>0?"1px solid #edf5e4":"none" }}>
                    <div style={{ display:"flex",alignItems:"baseline",gap:4,justifyContent:"center",marginBottom:4 }}>
                      <span style={{ fontSize:28,fontWeight:900,color:"#1a4d00",fontFamily:"Playfair Display,serif" }}>{s.val}</span>
                      {s.unit&&<span style={{ fontSize:12,fontWeight:700,color:"#5cb800" }}>{s.unit}</span>}
                    </div>
                    <div style={{ fontSize:11,color:"#8aaa7a",textTransform:"uppercase",letterSpacing:"0.12em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ background:"white",borderRadius:28,padding:44,boxShadow:"0 30px 80px -15px rgba(26,77,0,.12)",border:"1.5px solid #e4f0d8",position:"relative",overflow:"hidden" }}>
                <div style={{ position:"absolute",top:0,right:0,width:130,height:130,background:"radial-gradient(circle at top right,rgba(92,184,0,.08),transparent 70%)" }} />
                <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24 }}>
                  <div style={{ width:36,height:36,borderRadius:9,background:"rgba(92,184,0,.1)",border:"1px solid rgba(92,184,0,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18 }}>🏛️</div>
                  <div style={{ fontSize:11,fontWeight:800,letterSpacing:"0.2em",color:"#2e7d11",textTransform:"uppercase" }}>Governance Principles</div>
                </div>
                {[
                  { icon:"⚖️", title:"Transparency", text:"All administrative decisions follow open, documented processes aligned with UAS affiliates and UGC norms." },
                  { icon:"🎯", title:"Academic Integrity", text:"Upholding the highest standards in assessment, research ethics, and faculty conduct." },
                  { icon:"🌱", title:"Student-First Policy", text:"Every administrative action prioritizes student success, safety, and holistic development." },
                ].map(p=>(
                  <div key={p.title} style={{ display:"flex",gap:14,marginBottom:18,padding:"14px 16px",background:"#f8fff4",borderRadius:12,border:"1px solid #e4f0d8" }}>
                    <span style={{ fontSize:22,flexShrink:0 }}>{p.icon}</span>
                    <div>
                      <div style={{ fontSize:14,fontWeight:700,color:"#1a4d00",marginBottom:4 }}>{p.title}</div>
                      <div style={{ fontSize:13,color:"#6a8a6a",lineHeight:1.7 }}>{p.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ textAlign:"center",paddingBottom:44,position:"relative",zIndex:2 }}>
            <div style={{ display:"inline-flex",flexDirection:"column",alignItems:"center",gap:8 }}>
              <span style={{ fontSize:10,letterSpacing:"0.3em",color:"rgba(26,77,0,.3)",textTransform:"uppercase" }}>Scroll</span>
              <div style={{ width:1,height:40,background:"linear-gradient(to bottom,rgba(26,77,0,.2),transparent)" }} />
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section style={{ background:"white",padding:"120px 60px" }}>
          <div style={{ maxWidth:1200,margin:"0 auto" }}>
            <div className="dr" ref={rev() as any} style={{ textAlign:"center",marginBottom:80 }}>
              <div style={{ display:"inline-block",fontSize:11,fontWeight:800,letterSpacing:"0.25em",color:"#2e7d11",textTransform:"uppercase",marginBottom:16,padding:"6px 20px",background:"rgba(46,125,17,.07)",borderRadius:50 }}>Senior Leadership</div>
              <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(2.4rem,4vw,3.6rem)",fontWeight:900,color:"#0d2e00",lineHeight:1.1 }}>Meet the <em className="dshim">Leadership</em></h2>
              <div style={{ width:56,height:3,background:"linear-gradient(to right,#5cb800,#f5d000)",borderRadius:4,margin:"24px auto 0" }} />
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:24 }}>
              {leadership.map((l,i)=>(
                <div key={l.name} className={`lcard dr`} ref={rev(i*.08) as any}>
                  <div style={{ display:"flex",gap:20,alignItems:"flex-start" }}>
                    <div style={{ width:60,height:60,borderRadius:16,background:i%2===0?"linear-gradient(135deg,#1a4d00,#2e7d11)":"linear-gradient(135deg,#b8850a,#f5d000)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,flexShrink:0 }}>{l.icon}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:11,fontWeight:700,letterSpacing:"0.15em",color:i%2===0?"#2e7d11":"#b8850a",textTransform:"uppercase",marginBottom:4 }}>{l.role}</div>
                      <div style={{ fontSize:18,fontWeight:800,color:"#1a4d00",marginBottom:2,fontFamily:"Playfair Display,serif" }}>{l.name}</div>
                      <div style={{ fontSize:12,color:"#8aaa7a",marginBottom:12 }}>{l.qual}</div>
                      <p style={{ fontSize:13,color:"#5a7a5a",lineHeight:1.75 }}>{l.desc}</p>
                      <div style={{ marginTop:14,display:"inline-flex",alignItems:"center",gap:6,background:i%2===0?"rgba(26,77,0,.07)":"rgba(245,208,0,.15)",borderRadius:50,padding:"5px 14px" }}>
                        <span style={{ fontSize:11,fontWeight:700,color:i%2===0?"#1a4d00":"#7a5c00" }}>🕐 {l.exp} Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEPARTMENTS */}
        <section style={{ background:"linear-gradient(160deg,#f0fbe8 0%,#e6f6d8 100%)",padding:"130px 60px",position:"relative" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:4,background:"linear-gradient(to right,#5cb800,#f5d000,#5cb800)" }} />
          <div style={{ maxWidth:1200,margin:"0 auto" }}>
            <div className="dr" ref={rev() as any} style={{ textAlign:"center",marginBottom:80 }}>
              <div style={{ display:"inline-block",fontSize:11,fontWeight:800,letterSpacing:"0.25em",color:"#2e7d11",textTransform:"uppercase",marginBottom:16,padding:"6px 20px",background:"rgba(46,125,17,.08)",borderRadius:50 }}>Academic Structure</div>
              <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(2.4rem,4vw,3.6rem)",fontWeight:900,color:"#0d2e00" }}>Academic <em className="dshim">Departments</em></h2>
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20 }}>
              {departments.map((d,i)=>(
                <div key={d.name} className={`dcard dr`} ref={rev(i*.06) as any}>
                  <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:14 }}>
                    <div style={{ width:48,height:48,borderRadius:13,background:i%2===0?"rgba(26,77,0,.08)":"rgba(245,208,0,.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0 }}>{d.icon}</div>
                    <div>
                      <div style={{ fontSize:15,fontWeight:700,color:"#1a4d00",lineHeight:1.3 }}>{d.name}</div>
                      <div style={{ fontSize:11,color:"#8aaa7a",marginTop:2 }}>HOD: {d.hod}</div>
                    </div>
                  </div>
                  <p style={{ fontSize:13,color:"#6a8a6a",lineHeight:1.75 }}>{d.focus}</p>
                  <div style={{ marginTop:16,height:2,width:28,background:"linear-gradient(to right,#5cb800,#f5d000)",borderRadius:4 }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ADMIN SECTIONS */}
        <section style={{ background:"white",padding:"130px 60px" }}>
          <div style={{ maxWidth:1100,margin:"0 auto" }}>
            <div className="dr" ref={rev() as any} style={{ marginBottom:64 }}>
              <div style={{ display:"inline-block",fontSize:11,fontWeight:800,letterSpacing:"0.25em",color:"#2e7d11",textTransform:"uppercase",marginBottom:16,padding:"6px 20px",background:"rgba(46,125,17,.07)",borderRadius:50 }}>Office Structure</div>
              <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(2.2rem,3.5vw,3.2rem)",fontWeight:900,color:"#0d2e00" }}>Administrative <em className="dgold">Sections</em></h2>
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:24 }}>
              {admin.map((a,i)=>(
                <div key={a.dept} className="dr" ref={rev(i*.07) as any} style={{ background:i%2===0?"#f8fff4":"white",border:"1.5px solid #d4edbe",borderRadius:22,overflow:"hidden",boxShadow:"0 8px 30px rgba(26,77,0,.06)" }}>
                  <div style={{ background:i%2===0?"linear-gradient(135deg,#1a4d00,#2e7d11)":"linear-gradient(135deg,#b8850a,#c8a010)",padding:"22px 28px",display:"flex",alignItems:"center",gap:16 }}>
                    <div style={{ width:46,height:46,borderRadius:12,background:"rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22 }}>{a.icon}</div>
                    <div>
                      <div style={{ fontSize:16,fontWeight:800,color:"white",fontFamily:"Playfair Display,serif" }}>{a.dept}</div>
                      <div style={{ fontSize:12,color:"rgba(255,255,255,.65)",marginTop:2 }}>Head: {a.head}</div>
                    </div>
                  </div>
                  <ul style={{ padding:"20px 24px",listStyle:"none",margin:0 }}>
                    {a.duties.map(d=>(
                      <li key={d} style={{ display:"flex",gap:12,alignItems:"flex-start",padding:"10px 0",borderBottom:"1px solid #edf5e4",fontSize:14,color:"#3a5a3a",lineHeight:1.6 }}>
                        <div style={{ width:7,height:7,borderRadius:"50%",background:"#5cb800",flexShrink:0,marginTop:7 }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT BANNER */}
        <section style={{ background:"linear-gradient(135deg,#1a4d00,#2e7d11)",padding:"80px 60px",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:4,background:"linear-gradient(to right,#f5d000,#5cb800,#f5d000)" }} />
          <div style={{ maxWidth:900,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1 }}>
            <div style={{ fontSize:48,marginBottom:20 }}>🏛️</div>
            <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:36,fontWeight:900,color:"white",marginBottom:16 }}>Connect with Administration</h2>
            <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",lineHeight:1.8,marginBottom:36,maxWidth:600,margin:"0 auto 36px" }}>For academic queries, grievances, admissions, or official correspondence, reach our administrative offices.</p>
            <div style={{ display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap" }}>
              {[{ icon:"📧",label:"admin@alvasiast.org" },{ icon:"📞",label:"+91 8258 262726" },{ icon:"⏰",label:"Mon–Sat: 9:00 AM – 5:00 PM" }].map(c=>(
                <div key={c.label} style={{ display:"flex",alignItems:"center",gap:10,background:"rgba(255,255,255,.1)",borderRadius:50,padding:"12px 22px",border:"1px solid rgba(255,255,255,.15)" }}>
                  <span>{c.icon}</span>
                  <span style={{ fontSize:14,color:"rgba(255,255,255,.85)",fontWeight:500 }}>{c.label}</span>
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
