import React from "react";
import { Home, ChevronRight, ShieldCheck, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "./admissions/Admissions.css";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const chairman = {
  name: "Dr. M. Mohan Alva",
  role: "Chairman, Alva's Education Foundation",
  quote: "Our vision is to mold students into innovative leaders with strong cultural and ethical values. Alva's Institute of Agricultural Sciences & Technology remains committed to academic excellence and sustainable development, ensuring every graduate is prepared to serve the global agricultural community.",
  image: "https://alvasschools.com/wp-content/uploads/2024/03/Dr.Mohan-Alva-1.jpg"
};

const trustees = [
  {
    name: "Mr. Vivek Alva",
    role: "Trustee, Alva's Education Foundation",
    quote: "Empowering young professionals with modern agricultural technology while staying deeply rooted in our traditions is the hallmark of Alva's education.",
  },
  {
    name: "Mr. Vinay Alva",
    role: "Trustee, Alva's Education Foundation",
    quote: "Consistency in academic quality and an unwavering dedication to student success drive our administrative vision at every level of the institution.",
  }
];

const management = [
  {
    name: "Dr. Peter Fernandes",
    role: "Dean, AIAST",
    quote: "Fostering rigorous academic standards and research excellence to position AIAST among the premier agricultural science institutions globally.",
  },
  {
    name: "Administrative Officer",
    role: "Administration, AIAST",
    quote: "Streamlining campus operations and infrastructure to create a highly efficient, seamless academic environment for our distinguished faculty and students.",
  }
];

const getInitials = (name: string) => {
  if (name.includes("Administrative")) return "AO";
  return name.replace("Dr. ", "").replace("Mr. ", "").split(" ").map(n => n[0]).join("").substring(0, 2);
};

export default function Administration() {
  return (
    <div className="adm-page overflow-x-hidden">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />

      <main>
        {/* Hero */}
        <PageHero
          badgeIcon={<ShieldCheck size={14} />}
          badgeText="Institutional Governance"
          title={<>Leadership &amp; <span className="text-accent underline decoration-accent/30 underline-offset-8">Administration</span></>}
          subtitle="Guided by visionaries committed to academic excellence, innovation, and holistic student development."
          stats={[]}
        />

        {/* Breadcrumb */}
        <nav className="adm-breadcrumb py-4 bg-slate-50/50 border-b border-slate-100">
          <div className="adm-breadcrumb-inner container mx-auto px-6 flex items-center gap-2 text-[12px] text-slate-500 font-bold uppercase tracking-widest">
            <Home size={12} className="text-accent" />
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span><ChevronRight size={12} /></span>
            <span className="adm-cur text-deep-green">Administration</span>
          </div>
        </nav>

        <div className="adm-body container mx-auto px-6 py-14 space-y-20">
          
          {/* Chairman Section */}
          <motion.section {...fadeIn} className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-deep-green flex items-center justify-center gap-3">
                 <ShieldCheck className="text-accent w-8 h-8" /> Leadership Team
              </h2>
              <div className="w-16 h-1 mt-4 bg-gradient-to-r from-deep-green to-accent mx-auto rounded-full"></div>
            </div>

            {/* Professional Chairman Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  <div className="flex-shrink-0">
                     <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden border border-slate-100 shadow-sm">
                       <img 
                         src={chairman.image} 
                         alt={chairman.name}
                         className="w-full h-full object-cover"
                       />
                     </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                     <h3 className="text-3xl font-black text-deep-green mb-1">{chairman.name}</h3>
                     <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-6">{chairman.role}</p>
                     
                     <div className="pl-0 md:pl-6 md:border-l-4 border-accent/20">
                        <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic">
                          "{chairman.quote}"
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </motion.section>

          {/* Trustees Section */}
          <motion.section {...fadeIn} className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-deep-green flex items-center justify-center gap-3">
                 <Users className="text-accent w-8 h-8" /> Our Trustees
              </h2>
              <div className="w-16 h-1 mt-4 bg-gradient-to-r from-deep-green to-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {trustees.map((trustee, i) => (
                  <div key={i} className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:border-accent/40 transition-colors">
                     <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <div className="w-20 h-20 flex-shrink-0 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center shadow-inner">
                           <span className="text-2xl font-black text-deep-green/80">{getInitials(trustee.name)}</span>
                        </div>
                        <div className="text-center sm:text-left">
                           <h3 className="text-2xl font-black text-deep-green mb-1">{trustee.name}</h3>
                           <p className="text-slate-500 font-semibold tracking-wide uppercase text-xs mb-4">{trustee.role}</p>
                           <p className="text-slate-700 font-medium leading-relaxed italic text-sm">
                             "{trustee.quote}"
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
          </motion.section>

          {/* Key Management Section */}
          <motion.section {...fadeIn} className="max-w-5xl mx-auto border-t border-slate-100 pt-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-deep-green flex items-center justify-center gap-3">
                 <Briefcase className="text-accent w-8 h-8" /> Key Management
              </h2>
              <div className="w-16 h-1 mt-4 bg-gradient-to-r from-deep-green to-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {management.map((mgmt, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-8 hover:bg-white hover:shadow-md transition-all duration-300">
                     <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <div className="w-16 h-16 flex-shrink-0 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                           <span className="text-xl font-black text-deep-green/70">{getInitials(mgmt.name)}</span>
                        </div>
                        <div className="text-center sm:text-left">
                           <h3 className="text-xl font-black text-deep-green mb-1">{mgmt.name}</h3>
                           <p className="text-slate-500 font-semibold tracking-wide uppercase text-xs mb-4">{mgmt.role}</p>
                           <p className="text-slate-700 font-medium leading-relaxed text-sm">
                             "{mgmt.quote}"
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
