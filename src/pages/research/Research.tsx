import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Microscope, 
  FlaskConical, 
  BookOpen, 
  Globe, 
  Award, 
  Users, 
  FileText, 
  GraduationCap, 
  Layout, 
  ArrowRight,
  TrendingUp,
  Database
} from "lucide-react";
import { Link } from "react-router-dom";
import "../internship/Internship.css";

const Research = () => {
  const [activeCategory, setActiveCategory] = useState<string>("areas");

  const categories = [
    {
      id: "areas",
      label: "Research Areas",
      icon: <Microscope className="w-5 h-5" />,
      description: "Explore our diverse research domains and innovative projects.",
      links: [
        { label: "Funding", to: "/research/funding", icon: <TrendingUp className="w-4 h-4 text-accent" /> },
        { label: "IPR", to: "/research/ipr", icon: <Award className="w-4 h-4 text-accent" /> },
        { label: "Publication", to: "/research/publications", icon: <BookOpen className="w-4 h-4 text-accent" /> },
        { label: "Patent Application", to: "/research/patent-application", icon: <FileText className="w-4 h-4 text-accent" /> },
        { label: "Multidisciplinary Research Ideas", to: "/research/multidisciplinary", icon: <Globe className="w-4 h-4 text-accent" /> },
      ]
    },
    {
      id: "resources",
      label: "Resources",
      icon: <Database className="w-5 h-5" />,
      description: "Dedicated support and knowledge base for research excellence.",
      links: [
        { label: "Research Team", to: "/research/team", icon: <Users className="w-4 h-4 text-accent" /> },
        { label: "Research Policies", to: "/research/policies", icon: <Layout className="w-4 h-4 text-accent" /> },
        { label: "Research Supervisors", to: "/research/supervisors", icon: <GraduationCap className="w-4 h-4 text-accent" /> },
        { label: "Journals", to: "/research/journals", icon: <BookOpen className="w-4 h-4 text-accent" /> },
        { label: "Conference", to: "/research/conference", icon: <Users className="w-4 h-4 text-accent" /> },
      ]
    },
    {
      id: "facilities",
      label: "Facilities",
      icon: <FlaskConical className="w-5 h-5" />,
      description: "Advanced laboratories and specialized equipment for breakthroughs.",
      links: [
        { label: "Facilities", to: "/research/facilities", icon: <Layout className="w-4 h-4 text-accent" /> },
        { label: "About Research Cell", to: "/research/about", icon: <Users className="w-4 h-4 text-accent" /> },
        { label: "Yearwise Details", to: "/research/yearwise-details", icon: <TrendingUp className="w-4 h-4 text-accent" /> },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* ── Hero ── */}
      <section className="ip-hero">
        <div className="ip-hero-bg-image" style={{ backgroundImage: `url(https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg)` }} />
        <div className="ip-blob ip-blob-1" /><div className="ip-blob ip-blob-2" /><div className="ip-blob ip-blob-3" />
        <div className="ip-hero-content">
          <span className="ip-badge"><Microscope size={12} /> Discovery Hub</span>
          <h1 className="ip-title">Research &amp; <span>Innovation</span></h1>
          <p className="ip-subtitle">
            Pushing the boundaries of agricultural science through interdisciplinary exploration, 
            advanced publications, and sustainable breakthroughs in our state-of-the-art facilities.
          </p>
        </div>
        <div className="ip-wave">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ height: 56 }}>
            <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Main Content Dashboard */}
      <section className="flex-grow py-20 px-6 max-w-[1300px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 h-fit">
          
          {/* Categories Sidebar */}
          <div className="lg:w-[320px] flex flex-col gap-4">
            <p className="text-[11px] font-black tracking-widest text-slate-400 uppercase mb-2">Discovery Hub</p>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex flex-col group p-6 rounded-2xl border transition-all duration-300 text-left ${
                  activeCategory === cat.id 
                  ? "bg-white border-accent shadow-xl shadow-accent/5 translate-x-2" 
                  : "bg-white/50 border-slate-200 hover:border-accent/40 grayscale active:scale-[0.98]"
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-2.5 rounded-xl ${activeCategory === cat.id ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-slate-100 text-deep-green group-hover:bg-accent/10 transition-colors'}`}>
                    {cat.icon}
                  </div>
                  <h3 className={`font-black uppercase tracking-wider text-[14px] ${activeCategory === cat.id ? 'text-deep-green' : 'text-slate-400 group-hover:text-deep-green text-opacity-80'}`}>
                    {cat.label}
                  </h3>
                </div>
                {activeCategory === cat.id && (
                   <p className="text-slate-500 text-[13px] leading-snug animate-in fade-in slide-in-from-top-1 duration-500">
                    {cat.description}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Dynamic Content Panel */}
          <div className="flex-1 bg-white rounded-3xl border border-slate-100 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.08)] overflow-hidden min-h-[500px]">
            <div className="p-12">
              <h2 className="text-deep-green font-black text-3xl uppercase tracking-tighter mb-12 flex items-center gap-4">
                {categories.find(c => c.id === activeCategory)?.label}
                <div className="h-0.5 flex-1 bg-slate-100" />
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.find(c => c.id === activeCategory)?.links.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className="group flex flex-col p-6 rounded-2xl bg-slate-50 hover:bg-deep-green transition-all duration-300 border border-slate-100 hover:border-deep-green hover:shadow-2xl hover:shadow-deep-green/10"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                          {link.icon}
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent group-hover:translate-x-2 transition-all duration-300" />
                      </div>
                      <span className="text-lg font-black text-deep-green group-hover:text-white transition-colors duration-300 uppercase tracking-tight">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Context Banner */}
            <div className="bg-slate-50 px-12 py-8 mt-auto border-t border-slate-100 flex items-center justify-between">
              <p className="text-[12px] font-bold text-slate-400 leading-relaxed max-w-md italic">
                Our research initiatives are driven by academic rigor and community impact, leading the way for sustainable farming solutions.
              </p>
              <div className="h-12 w-px bg-slate-200 mx-8" />
              <div className="flex gap-4">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm text-deep-green">
                  <Database className="w-4 h-4" />
                </div>
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm text-deep-green">
                  <FlaskConical className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
