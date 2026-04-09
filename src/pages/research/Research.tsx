import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Microscope, 
  FlaskConical, 
  TrendingUp
} from "lucide-react";
import "../internship/Internship.css";

const Research = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* ── Hero ── */}
      <section className="ip-hero">
        <div className="ip-hero-bg-image" style={{ backgroundImage: `url(https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg)` }} />
        <div className="ip-blob ip-blob-1" /><div className="ip-blob ip-blob-2" /><div className="ip-blob ip-blob-3" />
        <div className="ip-hero-content">
          <span className="ip-badge"><Microscope size={12} /> Discovery & Innovation</span>
          <h1 className="ip-title">Research <span>Vision</span></h1>
          <p className="ip-subtitle">
            Establishing the foundations for agricultural excellence. Our Research & Development Cell 
            is dedicated to pioneering sustainable solutions for the future of farming.
          </p>
        </div>
        <div className="ip-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ height: 56 }}>
            <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow py-20 px-6 max-w-[1000px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-slate-100 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          <div className="p-12 lg:p-16">
            <h2 className="text-deep-green font-black text-3xl uppercase tracking-tighter mb-8 flex items-center gap-4">
              Our Research Journey
              <div className="h-0.5 flex-1 bg-slate-100" />
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Alva's Institute of Agricultural Sciences & Technology is proud to announce the formal establishment of its **Research & Development Cell in 2025**. 
                As a newly established center of excellence, we are currently in the vital phase of building our research infrastructure and academic roadmap.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="h-12 w-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-deep-green uppercase tracking-tight mb-4">Strategic Roadmap</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We are developing a 5-year strategic research plan focused on climate-resilient agriculture, precision farming, and sustainable soil health management.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="h-12 w-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-deep-green uppercase tracking-tight mb-4">State-of-the-art Facilities</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Our upcoming specialized laboratories are being equipped with modern analytical instruments to support high-impact postgraduate and doctoral research.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-black text-deep-green uppercase tracking-tight mt-16 mb-6">Core Objectives</h3>
              <ul className="space-y-4 text-slate-600 list-none p-0">
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-accent" />
                  <span>Fostering a culture of inquiry and innovation among faculty and undergraduate students.</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-accent" />
                  <span>Establishing collaborative partnerships with leading agricultural institutions and industries.</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-accent" />
                  <span>Promoting interdisciplinary research to address regional and national agricultural challenges.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Status Footnote */}
          <div className="bg-deep-green px-12 py-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <p className="text-[14px] font-bold leading-relaxed italic opacity-80">
                "Small seeds today, a vast harvest of knowledge tomorrow. We are laying the groundwork for institutional excellence in research."
              </p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-black text-accent mb-0">2025</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Establishment</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-black text-white mb-0">Ongoing</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Phase 1 Setup</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;

