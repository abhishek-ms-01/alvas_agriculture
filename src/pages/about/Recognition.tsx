import { Home, ChevronRight, BadgeCheck, Building, FlaskConical, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Recognition = () => {
  return (
    <div className="adm-page overflow-x-hidden">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>

        {/* ── HERO ── */}
        <PageHero
          badgeIcon={<MapPin size={14} />}
          badgeText="Institution at a Glance"
          title={<>Accreditations &amp; <span className="text-accent underline decoration-accent/30 underline-offset-8">Recognition</span></>}
          subtitle="Formally recognised and approved by leading national regulatory and statutory bodies."
          stats={[
            { bold: "NAAC", text: "" },
            { bold: "ICAR", text: "" },
            { bold: "Govt. of Karnataka", text: "" },
          ]}
        />

        {/* Breadcrumb */}
        <nav className="adm-breadcrumb py-4 bg-slate-50/50 border-b border-slate-100">
          <div className="adm-breadcrumb-inner container mx-auto px-6 flex items-center gap-2 text-[12px] text-slate-500 font-bold uppercase tracking-widest">
            <Home size={12} className="text-accent" />
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span><ChevronRight size={12} /></span>
            <span>Institution at a Glance</span>
            <span><ChevronRight size={12} /></span>
            <span className="adm-cur text-deep-green">Accreditations</span>
          </div>
        </nav>

        <div className="adm-body container mx-auto px-6 py-10 space-y-14">

          {/* Current Accreditations */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-8 flex items-center gap-3">
              <BadgeCheck className="text-accent w-6 h-6" /> Accreditations
            </h2>
            <div className="space-y-5">
              {[
                {
                  icon: <BadgeCheck size={24} />,
                  title: "NAAC",
                  full: "National Assessment and Accreditation Council",
                  desc: "Ensures quality assurance and assessment of higher education institutions in India based on academic and institutional standards.",
                  status: "Accredited",
                  color: "bg-green-50 border-green-200 text-green-700"
                },
                {
                  icon: <FlaskConical size={24} />,
                  title: "ICAR",
                  full: "Indian Council of Agricultural Research",
                  desc: "The apex body responsible for coordinating, guiding, and managing research and education in agriculture and allied sciences in India.",
                  status: "Accredited",
                  color: "bg-green-50 border-green-200 text-green-700"
                },
                {
                  icon: <Building size={24} />,
                  title: "Statutory Approval – Government of Karnataka",
                  full: "",
                  desc: "The institute is duly approved by the Government of Karnataka to offer academic programs.",
                  status: "Approved",
                  color: "bg-blue-50 border-blue-200 text-blue-700"
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-5 items-start bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-deep-green/5 border-2 border-accent/20 group-hover:border-accent group-hover:bg-accent/5 flex items-center justify-center text-accent transition-all duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="font-black text-deep-green text-base">{item.title}</h3>
                      {item.full && <span className="text-xs text-slate-500 font-medium">({item.full})</span>}
                      <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${item.color}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Upcoming Accreditations */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-8 flex items-center gap-3">
              <Clock className="text-accent w-6 h-6" /> Upcoming Accreditations
            </h2>
            <div className="adm-info-box mb-6">
              <p className="text-slate-700 font-medium">
                The institute is in the process of applying for accreditation with the following bodies:
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: <FlaskConical size={22} />,
                  title: "ICAR",
                  full: "Indian Council of Agricultural Research",
                },
                {
                  icon: <BadgeCheck size={22} />,
                  title: "NAAC",
                  full: "National Assessment and Accreditation Council",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-5 items-center bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-black text-amber-900 text-base">{item.title}</span>
                    <span className="text-xs text-amber-700 font-medium ml-2">({item.full})</span>
                  </div>
                  <span className="ml-auto text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border bg-amber-100 border-amber-300 text-amber-700">
                    In Progress
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recognition;
