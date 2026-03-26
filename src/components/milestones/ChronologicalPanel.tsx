import React from "react";

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

export default function ChronologicalPanel() {
  // Group milestones into rows of 3
  const rows: typeof milestones[] = [];
  for (let i = 0; i < milestones.length; i += 3) {
    rows.push(milestones.slice(i, i + 3));
  }

  return (
    <section style={{ padding: "80px 40px 120px", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".3em", color: "#48bb78", textTransform: "uppercase", marginBottom: 12 }}>
            The Journey
          </div>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 900, color: "#1a2e1a" }}>
            Follow the <span style={{ color: "#38a169" }}>path.</span>
          </h2>
        </div>
        {rows.map((row, ri) => {
          const isReversed = ri % 2 === 1;
          const displayRow = isReversed ? [...row].reverse() : row;
          const isLastRow = ri === rows.length - 1;
          return (
            <div key={ri} style={{ position: "relative" }}>
              {/* Horizontal line through the row */}
              <div
                style={{
                  position: "absolute",
                  top: 22,
                  left: 60,
                  right: 60,
                  height: 3,
                  background: `linear-gradient(${isReversed ? "to left" : "to right"}, ${rowColors[ri % 4]}, #48bb78)`,
                  borderRadius: 4,
                  zIndex: 1,
                }}
              />

              {/* Cards row */}
              <div
                style={{
                  display: "flex",
                  flexDirection: isReversed ? "row-reverse" : "row",
                  gap: 24,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {displayRow.map((m, ci) => {
                  const globalIdx = ri * 3 + (isReversed ? row.length - 1 - ci : ci);
                  const c = rowColors[globalIdx % 4];
                  return (
                    <div key={m.year} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                      {/* Node on the line */}
                      <div className="sn-node" style={{ background: c, boxShadow: `0 4px 16px ${c}44`, marginBottom: 16 }}>
                        {m.emoji}
                      </div>

                      {/* Card below */}
                      <div className="sn-card" style={{ width: "100%" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              letterSpacing: ".12em",
                              textTransform: "uppercase",
                              padding: "3px 10px",
                              borderRadius: 50,
                              background: `${c}15`,
                              color: c,
                            }}
                          >
                            {m.tag}
                          </span>
                          <span style={{ fontSize: 14, fontWeight: 900, color: c }}>{m.year}</span>
                        </div>
                        <h3 style={{ fontSize: 16, fontWeight: 800, color: "#1a2e1a", marginBottom: 6 }}>{m.title}</h3>
                        <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Vertical connector to next row (on the turning side) */}
              {!isLastRow && (
                <div style={{ position: "relative", height: 60 }}>
                  <div
                    style={{
                      position: "absolute",
                      [isReversed ? "left" : "right"]: 80,
                      top: 0,
                      width: 3,
                      height: 60,
                      background: `linear-gradient(to bottom, #48bb78, ${rowColors[(ri + 1) % 4]})`,
                      borderRadius: 4,
                      zIndex: 1,
                    }}
                  />
                  {/* Corner curves */}
                  <div
                    style={{
                      position: "absolute",
                      [isReversed ? "left" : "right"]: 60,
                      top: -3,
                      width: 24,
                      height: 24,
                      borderBottom: isReversed ? "none" : "3px solid #48bb78",
                      borderTop: "none",
                      borderRight: isReversed ? "3px solid #48bb78" : "none",
                      borderLeft: isReversed ? "none" : "3px solid #48bb78",
                      borderRadius: isReversed ? "0 0 20px 0" : "0 0 0 20px",
                      zIndex: 1,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      [isReversed ? "left" : "right"]: 60,
                      bottom: -3,
                      width: 24,
                      height: 24,
                      borderTop: isReversed ? "none" : "3px solid " + rowColors[(ri + 1) % 4],
                      borderBottom: "none",
                      borderRight: isReversed ? "3px solid " + rowColors[(ri + 1) % 4] : "none",
                      borderLeft: isReversed ? "none" : "3px solid " + rowColors[(ri + 1) % 4],
                      borderRadius: isReversed ? "0 20px 0 0" : "20px 0 0 0",
                      zIndex: 1,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
