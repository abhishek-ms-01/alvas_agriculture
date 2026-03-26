import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const useReveal = () => {
  const els = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) (e.target as HTMLElement).classList.add("av"); }),
      { threshold: 0.07 }
    );
    els.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  let i = 0;
  return (d = 0) => (el: HTMLElement | null) => { els.current[i++] = el; if (el) el.style.transitionDelay = `${d}s`; };
};

const pillars = [
  { icon: "🎓", n: "01", title: "Academic Excellence", text: "World-class agricultural education through updated curricula, expert faculty, and state-of-the-art laboratories." },
  { icon: "🔬", n: "02", title: "Research & Innovation", text: "Cutting-edge research in soil science, crop genetics, agri-tech, and sustainable farming practices." },
  { icon: "🌍", n: "03", title: "Community Outreach", text: "Empowering rural farmers through extension programs, training camps, and demonstration farms." },
  { icon: "🤝", n: "04", title: "Industry Linkage", text: "Strong partnerships with agri-industries, NGOs, and government bodies for student placements." },
  { icon: "🌱", n: "05", title: "Sustainability", text: "Championing eco-friendly practices, organic farming, and environmental conservation." },
  { icon: "💡", n: "06", title: "Entrepreneurship", text: "Nurturing agri-entrepreneurs through incubation cells, startup funding, and innovation challenges." },
];

const milestones = [
  { year: "2001", title: "Foundation Established", desc: "AEF formally constituted to transform agricultural education in coastal Karnataka.", icon: "🏛️" },
  { year: "2005", title: "IAST Launched", desc: "Alva's IAST inaugurated as one of the premier agri colleges in the region.", icon: "🌾" },
  { year: "2010", title: "Research Wing Created", desc: "Specialized labs for soil health, plant pathology, and biotechnology established.", icon: "🔬" },
  { year: "2015", title: "Farmer Connect Program", desc: "Landmark outreach initiative connecting 5,000+ smallholder farmers with modern knowledge annually.", icon: "🧑‍🌾" },
  { year: "2018", title: "Smart Farm Campus", desc: "IoT-enabled smart farm across 50 acres integrating precision agriculture technology.", icon: "📡" },
  { year: "2023", title: "State Excellence Award", desc: "Recognized by Karnataka State Government for outstanding contribution to agricultural education.", icon: "🏆" },
];

const scholarships = [
  { name: "Merit Scholarship", amount: "₹25,000/yr", who: "Top 10% of each batch based on academic performance" },
  { name: "Rural Farmer's Award", amount: "₹20,000/yr", who: "Students from farming families with below 5-acre holdings" },
  { name: "Women in Agri Grant", amount: "₹15,000/yr", who: "Female students pursuing B.Sc / M.Sc Agriculture" },
  { name: "Research Fellowship", amount: "₹30,000/yr", who: "Postgraduate students engaged in recognized research projects" },
];

export default function AEF() {
  const rev = useReveal();
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;500;600;700;800&display=swap');
        .aef-root{font-family:'Inter',sans-serif;background:#f6fbf2;}
        .ar{opacity:0;transform:translateY(44px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
        .ar.av{opacity:1;transform:none;}
        .asl{opacity:0;transform:translateX(-56px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
        .asl.av{opacity:1;transform:none;}
        .asr{opacity:0;transform:translateX(56px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
        .asr.av{opacity:1;transform:none;}
        .apc{background:white;border:1.5px solid #e4f0d8;border-radius:20px;padding:32px 28px;transition:box-shadow .35s,border-color .35s,transform .35s;cursor:default;}
        .apc:hover{box-shadow:0 20px 60px -10px rgba(26,77,0,.13);border-color:#5cb800;transform:translateY(-6px);}
        @keyframes afloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
        @keyframes ashim{0%{background-position:-200% center}100%{background-position:200% center}}
        .ashim{background:linear-gradient(90deg,#1a6600 0%,#5cb800 40%,#1a6600 60%,#2e7d11 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:ashim 3.5s linear infinite;}
        .agold{background:linear-gradient(90deg,#b8850a 0%,#f5d000 40%,#b8850a 60%,#e8b800 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:ashim 3s linear infinite;}
      `}</style>
      <div className="aef-root">
        <Header />

        {/* HERO */}
        <section style={{ minHeight:"100vh",display:"flex",flexDirection:"column",background:"linear-gradient(145deg,#f0fbe8 0%,#e6f6d8 40%,#f8fff4 100%)",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",inset:0,backgroundImage:"radial-gradient(circle,rgba(46,125,17,.12) 1px,transparent 1px)",backgroundSize:"36px 36px" }} />
          <div style={{ position:"absolute",bottom:-60,left:"50%",transform:"translateX(-50%)",fontSize:"28vw",fontWeight:900,fontFamily:"Playfair Display,serif",color:"rgba(26,77,0,.04)",lineHeight:1,userSelect:"none",whiteSpace:"nowrap" }}>AEF</div>
          {[{ top:"18%",right:"10%",s:260 },{ top:"65%",left:"5%",s:150 }].map((r,i)=>(
            <div key={i} style={{ position:"absolute",top:r.top,left:(r as any).left,right:(r as any).right,width:r.s,height:r.s,borderRadius:"50%",border:"1.5px solid rgba(92,184,0,.18)",animation:`afloat ${6+i}s ease-in-out ${i}s infinite` }}>
              <div style={{ position:"absolute",inset:18,borderRadius:"50%",border:"1px solid rgba(245,208,0,.18)" }} />
            </div>
          ))}
          <div style={{ position:"absolute",left:0,top:"50%",transform:"translateY(-50%)",width:5,height:"38%",borderRadius:"0 4px 4px 0",background:"linear-gradient(to bottom,transparent,#f5d000,transparent)" }} />

          <div style={{ flex:1,display:"flex",alignItems:"center",maxWidth:1200,margin:"0 auto",padding:"160px 60px 80px",gap:80,width:"100%",position:"relative",zIndex:2 }}>
            <div style={{ flex:"0 0 54%" }}>
              <div style={{ display:"inline-flex",alignItems:"center",gap:10,marginBottom:32,padding:"7px 20px",border:"1.5px solid rgba(184,133,10,.3)",borderRadius:50,background:"rgba(255,255,255,.7)",backdropFilter:"blur(8px)" }}>
                <div style={{ width:6,height:6,borderRadius:"50%",background:"#b8850a" }} />
                <span style={{ fontSize:11,fontWeight:700,letterSpacing:"0.25em",color:"#7a5c00",textTransform:"uppercase" }}>Est. 2001 · Moodabidri, Karnataka</span>
              </div>
              <h1 style={{ fontFamily:"Playfair Display,serif",lineHeight:1.05,marginBottom:24 }}>
                <span style={{ display:"block",fontSize:"clamp(2.8rem,5vw,4.8rem)",fontWeight:700,color:"#1a4d00",opacity:.85 }}>Alva's Education</span>
                <span className="agold" style={{ display:"block",fontSize:"clamp(2.8rem,5vw,4.8rem)",fontWeight:900,fontStyle:"italic" }}>Foundation</span>
              </h1>
              <div style={{ width:64,height:3,background:"linear-gradient(to right,#f5d000,#5cb800)",borderRadius:4,marginBottom:28 }} />
              <p style={{ fontSize:17,color:"#4a6640",lineHeight:1.9,maxWidth:480,fontWeight:300 }}>A visionary philanthropic foundation dedicated to nurturing the next generation of agricultural leaders through education, research, and community empowerment.</p>
              <div style={{ display:"flex",marginTop:48,background:"white",borderRadius:20,boxShadow:"0 12px 40px rgba(26,77,0,.08)",border:"1px solid #e4f0d8",overflow:"hidden" }}>
                {[{ val:"20+",unit:"Yrs",label:"Of Excellence" },{ val:"12K+",unit:"Alumni",label:"Graduates" },{ val:"50",unit:"Acres",label:"Campus" },{ val:"9",unit:"Depts",label:"Departments" }].map((s,i)=>(
                  <div key={s.label} style={{ flex:1,padding:"22px 14px",textAlign:"center",borderLeft:i>0?"1px solid #edf5e4":"none" }}>
                    <div style={{ display:"flex",alignItems:"baseline",gap:4,justifyContent:"center",marginBottom:4 }}>
                      <span style={{ fontSize:30,fontWeight:900,color:"#1a4d00",fontFamily:"Playfair Display,serif" }}>{s.val}</span>
                      <span style={{ fontSize:13,fontWeight:700,color:"#5cb800" }}>{s.unit}</span>
                    </div>
                    <div style={{ fontSize:11,color:"#8aaa7a",textTransform:"uppercase",letterSpacing:"0.12em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ background:"white",borderRadius:28,padding:44,boxShadow:"0 30px 80px -15px rgba(26,77,0,.12)",border:"1.5px solid #e4f0d8",position:"relative",overflow:"hidden" }}>
                <div style={{ position:"absolute",top:0,right:0,width:130,height:130,background:"radial-gradient(circle at top right,rgba(245,208,0,.1),transparent 70%)" }} />
                {[{ icon:"👁️",label:"Vision",text:"To be a globally recognized centre of excellence in agricultural education, research, and sustainable rural development." },
                  { icon:"🎯",label:"Mission",text:"To provide quality, value-based agricultural education fostering innovation, leadership, and commitment to sustainable food security." }
                ].map(tab=>(
                  <div key={tab.label} style={{ marginBottom:24 }}>
                    <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:10 }}>
                      <div style={{ width:32,height:32,borderRadius:9,background:"rgba(92,184,0,.1)",border:"1px solid rgba(92,184,0,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16 }}>{tab.icon}</div>
                      <div style={{ fontSize:11,fontWeight:800,letterSpacing:"0.2em",color:"#2e7d11",textTransform:"uppercase" }}>{tab.label}</div>
                    </div>
                    <p style={{ fontSize:14,color:"#445544",lineHeight:1.85,borderLeft:"3px solid #5cb800",paddingLeft:14,margin:0 }}>{tab.text}</p>
                  </div>
                ))}
                <div style={{ padding:"18px 20px",background:"#f6fdf0",borderRadius:12,border:"1px solid #d4edbe" }}>
                  <p style={{ fontSize:13,color:"#5a7a4a",fontStyle:"italic",lineHeight:1.75,margin:0 }}>"We believe agriculture is not just a profession — it is a calling. AEF exists to honor that calling by creating institutions that inspire, educate, and transform."</p>
                  <div style={{ marginTop:8,fontSize:12,fontWeight:600,color:"#b8850a" }}>— Dr. Mohan Alva, Founder</div>
                </div>
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

        {/* PILLARS */}
        <section style={{ background:"white",padding:"120px 60px" }}>
          <div style={{ maxWidth:1200,margin:"0 auto" }}>
            <div className="ar" ref={rev() as any} style={{ textAlign:"center",marginBottom:80 }}>
              <div style={{ display:"inline-block",fontSize:11,fontWeight:800,letterSpacing:"0.25em",color:"#b8850a",textTransform:"uppercase",marginBottom:16,padding:"6px 20px",background:"rgba(245,208,0,.1)",borderRadius:50 }}>Foundation Pillars</div>
              <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(2.4rem,4vw,3.6rem)",fontWeight:900,color:"#0d2e00",lineHeight:1.1 }}>What drives <em className="ashim">AEF?</em></h2>
              <div style={{ width:56,height:3,background:"linear-gradient(to right,#f5d000,#5cb800)",borderRadius:4,margin:"24px auto 0" }} />
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22 }}>
              {pillars.map((p,i)=>(
                <div key={p.n} className={`apc ar`} ref={rev(i*.07) as any}>
                  <div style={{ display:"flex",justifyContent:"space-between",marginBottom:18 }}>
                    <div style={{ fontSize:42 }}>{p.icon}</div>
                    <div style={{ fontFamily:"Playfair Display,serif",fontSize:48,fontWeight:900,color:"rgba(26,77,0,.05)",lineHeight:1 }}>{p.n}</div>
                  </div>
                  <h3 style={{ fontSize:17,fontWeight:700,color:"#1a4d00",marginBottom:10 }}>{p.title}</h3>
                  <p style={{ fontSize:14,color:"#6a8a6a",lineHeight:1.8 }}>{p.text}</p>
                  <div style={{ marginTop:20,height:2,width:32,background:"linear-gradient(to right,#f5d000,#5cb800)",borderRadius:4 }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MILESTONES */}
        <section style={{ background:"linear-gradient(160deg,#f0fbe8 0%,#e6f6d8 100%)",padding:"130px 60px",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:4,background:"linear-gradient(to right,#f5d000,#5cb800,#f5d000)" }} />
          <div style={{ maxWidth:1100,margin:"0 auto" }}>
            <div className="ar" ref={rev() as any} style={{ textAlign:"center",marginBottom:80 }}>
              <div style={{ display:"inline-block",fontSize:11,fontWeight:800,letterSpacing:"0.25em",color:"#2e7d11",textTransform:"uppercase",marginBottom:16,padding:"6px 20px",background:"rgba(46,125,17,.08)",borderRadius:50 }}>Our Journey</div>
              <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(2.4rem,4vw,3.6rem)",fontWeight:900,color:"#0d2e00" }}>Milestones of <em className="ashim">Excellence</em></h2>
            </div>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:24 }}>
              {milestones.map((m,i)=>(
                <div key={m.year} className="ar" ref={rev(i*.08) as any}
                  style={{ display:"flex",gap:20,background:"white",borderRadius:20,padding:"26px 26px",border:"1.5px solid #d4edbe",boxShadow:"0 8px 30px rgba(26,77,0,.06)",transition:"box-shadow .3s,transform .3s",cursor:"default" }}
                  onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 20px 60px rgba(26,77,0,.13)";e.currentTarget.style.transform="translateY(-4px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 8px 30px rgba(26,77,0,.06)";e.currentTarget.style.transform="none";}}
                >
                  <div style={{ flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",gap:8 }}>
                    <div style={{ width:50,height:50,borderRadius:13,background:i%2===0?"rgba(26,77,0,.07)":"rgba(245,208,0,.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22 }}>{m.icon}</div>
                    <div style={{ fontSize:13,fontWeight:900,color:i%2===0?"#1a4d00":"#b8850a",fontFamily:"Playfair Display,serif" }}>{m.year}</div>
                  </div>
                  <div>
                    <h3 style={{ fontSize:16,fontWeight:700,color:"#1a4d00",marginBottom:7 }}>{m.title}</h3>
                    <p style={{ fontSize:13,color:"#6a8a6a",lineHeight:1.75 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCHOLARSHIPS */}
        <section style={{ background:"white",padding:"130px 60px" }}>
          <div style={{ maxWidth:1100,margin:"0 auto" }}>
            <div className="ar" ref={rev() as any} style={{ marginBottom:56 }}>
              <div style={{ display:"inline-block",fontSize:11,fontWeight:800,letterSpacing:"0.25em",color:"#2e7d11",textTransform:"uppercase",marginBottom:16,padding:"6px 20px",background:"rgba(46,125,17,.07)",borderRadius:50 }}>Financial Support</div>
              <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:"clamp(2.2rem,3.5vw,3.2rem)",fontWeight:900,color:"#0d2e00" }}>Scholarships & <em className="agold">Financial Aid</em></h2>
            </div>
            <div style={{ display:"grid",gap:14 }}>
              {scholarships.map((s,i)=>(
                <div key={s.name} className="ar" ref={rev(i*.06) as any}
                  style={{ display:"flex",alignItems:"center",gap:24,background:i%2===0?"#f8fff4":"white",border:"1.5px solid #e4f0d8",borderRadius:18,padding:"22px 30px",transition:"box-shadow .3s,transform .3s",cursor:"default" }}
                  onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 12px 40px rgba(26,77,0,.1)";e.currentTarget.style.transform="translateX(6px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="none";}}
                >
                  <div style={{ width:54,height:54,borderRadius:15,background:"linear-gradient(135deg,#1a4d00,#2e7d11)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:24 }}>🎓</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:17,fontWeight:700,color:"#1a4d00",marginBottom:4 }}>{s.name}</div>
                    <div style={{ fontSize:13,color:"#6a8a6a" }}>{s.who}</div>
                  </div>
                  <div style={{ textAlign:"right",flexShrink:0 }}>
                    <div style={{ fontSize:22,fontWeight:900,color:"#b8850a",fontFamily:"Playfair Display,serif" }}>{s.amount}</div>
                    <div style={{ fontSize:11,color:"#8aaa7a",marginTop:4 }}>Per Academic Year</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT BANNER */}
        <section style={{ background:"linear-gradient(135deg,#1a4d00,#2e7d11)",padding:"80px 60px",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:0,left:0,right:0,height:4,background:"linear-gradient(to right,#f5d000,#5cb800,#f5d000)" }} />
          <div style={{ maxWidth:900,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1 }}>
            <div style={{ fontSize:48,marginBottom:20 }}>📩</div>
            <h2 style={{ fontFamily:"Playfair Display,serif",fontSize:36,fontWeight:900,color:"white",marginBottom:16 }}>Be a Part of Our Journey</h2>
            <p style={{ fontSize:16,color:"rgba(255,255,255,.7)",lineHeight:1.8,marginBottom:36,maxWidth:600,margin:"0 auto 36px" }}>For queries regarding scholarships, partnerships, or MOU collaborations, reach out to the AEF office.</p>
            <div style={{ display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap" }}>
              {[{ icon:"📧",label:"aef@alvas.org" },{ icon:"📞",label:"+91 8258 262726" },{ icon:"📍",label:"Moodabidri, Karnataka - 574227" }].map(c=>(
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
