import { Home, ChevronRight, Trophy, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";

const milestones = [
  {
    year: "2001",
    icon: <Trophy size={20} />,
    title: "Genesis of AEF",
    desc: "Alva's Education Foundation established by Dr. M. Mohan Alva in 2001 with a vision to build world-class Educational Institutions in Coastal Karnataka."
  },
  {
    year: "2025",
    icon: <GraduationCap size={20} />,
    title: "About AIAST",
    desc: "Alva's Institute of Agricultural Sciences & Technology was established in 2025, affiliated to Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences, Iruvakki, Shivamogga."
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Milestones() {
  return (
    <div className="adm-page overflow-x-hidden">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />

      <main>
        {/* ── HERO ── */}
        <PageHero
          badgeIcon={<MapPin size={14} />}
          badgeText="Institution at a Glance"
          title={<>Our <span className="text-accent underline decoration-accent/30 underline-offset-8">Milestones</span></>}
          subtitle="Two decades of excellence, innovation, and service — the remarkable journey of Alva's IAST."
          stats={[
            { bold: "2001", text: "AEF Founded" },
            { bold: "2025", text: "IAST Established" },
          ]}
        />

        {/* Breadcrumb */}
        <nav className="adm-breadcrumb py-4 bg-slate-50/50 border-b border-slate-100">
          <div className="adm-breadcrumb-inner container mx-auto px-6 flex items-center gap-2 text-[12px] text-slate-500 font-bold uppercase tracking-widest">
            <Home size={12} className="text-accent" /><a href="/" className="hover:text-accent transition-colors">Home</a>
            <span><ChevronRight size={12} /></span>
            <span>Institution at a Glance</span>
            <span><ChevronRight size={12} /></span>
            <span className="adm-cur text-deep-green">Milestones</span>
          </div>
        </nav>

        <div className="adm-body container mx-auto px-6 py-10 space-y-16">

          {/* Overview */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-6 flex items-center gap-3">
              <Trophy className="text-accent w-6 h-6" /> Our Journey
            </h2>
            <div className="adm-info-box">
              <p>
                Alva's Institute of Agricultural Sciences &amp; Technology was established in 2025 under the Alva's Education Foundation, founded by Dr. M. Mohan Alva in 2001. Affiliated to Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences, Iruvakki, Shivamogga
              </p>
            </div>
          </motion.section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-8 flex items-center gap-3">
              <Trophy className="text-accent w-6 h-6" /> Timeline of Achievements
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden md:block" />

              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="flex gap-5 items-start group"
                  >
                    {/* Year badge + icon */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0 z-10">
                      <div className="w-14 h-14 rounded-2xl bg-deep-green/5 border-2 border-accent/20 group-hover:border-accent group-hover:bg-accent/5 flex items-center justify-content-center justify-center text-accent transition-all duration-300">
                        {m.icon}
                      </div>
                      <span className="text-[10px] font-black text-accent tracking-widest uppercase">{m.year}</span>
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-sm group-hover:shadow-md group-hover:border-accent/20 transition-all duration-300">
                      <h3 className="font-black text-deep-green text-base mb-1">{m.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
