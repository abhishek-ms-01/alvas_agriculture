import { Home, ChevronRight, FileText, Eye, Link2, Clock, Mail } from "lucide-react";
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

const MandatoryDisclosure = () => {
  return (
    <div className="adm-page overflow-x-hidden">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>

        {/* Hero */}
        <PageHero
          badgeIcon={<FileText size={14} />}
          badgeText="About"
          title={<>Mandatory <span className="text-accent underline decoration-accent/30 underline-offset-8">Disclosure</span></>}
          subtitle="Transparency and accountability through proactive disclosure of institutional information as mandated by regulatory authorities."
          stats={[
            { bold: "RTI", text: "Compliance" },
            { bold: "Affiliations", text: "& Recognition" },
          ]}
        />

        {/* Breadcrumb */}
        <nav className="adm-breadcrumb py-4 bg-slate-50/50 border-b border-slate-100">
          <div className="adm-breadcrumb-inner container mx-auto px-6 flex items-center gap-2 text-[12px] text-slate-500 font-bold uppercase tracking-widest">
            <Home size={12} className="text-accent" />
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span><ChevronRight size={12} /></span>
            <span>About</span>
            <span><ChevronRight size={12} /></span>
            <span className="adm-cur text-deep-green">Mandatory Disclosure</span>
          </div>
        </nav>

        <div className="adm-body container mx-auto px-6 py-10 space-y-14">

          {/* 1. RTI */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-8 flex items-center gap-3">
              <Eye className="text-accent w-6 h-6" /> Right to Information (RTI)
            </h2>

            <div className="adm-info-box mb-6">
              <p className="text-slate-700 font-medium">
                In compliance with the Right to Information Act, 2005, Alva's Institute of Agricultural Sciences & Technology proactively discloses institutional information to promote transparency and accountability.
              </p>
            </div>

            {/* RTI Officials */}
            <div className="space-y-4 mb-8">
              {[
                { role: "First Appellate Authority", name: "Dr. S. N. Vasudevan", designation: "Dean (Agri.)", email: "snvasudevan1963@gmail.com", phone: "9448300046" },
                { role: "Public Information Officer (PIO)", name: "Administrative Officer", designation: "Admin Department", email: "rti@alvas.ac.in", phone: "+91-824-2277286" },
              ].map((o, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-5 items-start bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-deep-green/5 border-2 border-accent/20 group-hover:border-accent group-hover:bg-accent/5 flex items-center justify-center text-accent transition-all duration-300 flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="font-black text-deep-green text-base">{o.role}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {o.name} — {o.designation} | {o.email} | {o.phone}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.section>

          {/* 2. Affiliations */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-8 flex items-center gap-3">
              <Link2 className="text-accent w-6 h-6" /> Institutional Affiliations
            </h2>

            <div className="space-y-4">
              {[
                {
                  name: "Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences",
                  type: "Parent University",
                  desc: "Alva's IAST is an affiliated college — the university governs curriculum, examinations, and degree award for all programmes."
                },
                {
                  name: "Indian Council of Agricultural Research (ICAR), New Delhi",
                  type: "National Apex Body",
                  desc: "B.Sc. Agriculture curriculum follows the 5th Dean's Committee recommendations prescribed by ICAR, ensuring national-level uniformity and quality."
                },
                {
                  name: "Karnataka State Higher Education Council (KSHEC)",
                  type: "State Regulatory Body",
                  desc: "Alva's Institute reports to KSHEC for annual returns, fee fixation compliance, and strategic planning."
                },
                {
                  name: "Karnataka Examinations Authority (KEA)",
                  type: "Admission Authority",
                  desc: "KEA conducts centralised admission counselling for KCET-based admissions to Alva's Institute."
                },
                {
                  name: "Alva's Education Foundation (AEF)",
                  type: "Parent Trust",
                  desc: "The institute operates under AEF's governance framework, founded by Dr. M. Mohan Alva."
                },
              ].map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-5 items-start bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-deep-green/5 border-2 border-accent/20 group-hover:border-accent group-hover:bg-accent/5 flex items-center justify-center text-accent transition-all duration-300 flex-shrink-0">
                    <Link2 size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="font-black text-deep-green text-base">{a.name}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border bg-green-50 border-green-200 text-green-700">
                        {a.type}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{a.desc}</p>
                  </div>
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

export default MandatoryDisclosure;
