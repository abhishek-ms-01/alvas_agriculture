import { Home, ChevronRight, Handshake, Globe2, Lightbulb, GraduationCap, Building2 } from "lucide-react";
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

export default function MOU() {
  return (
    <div className="adm-page overflow-x-hidden">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />

      <main>
        {/* Hero */}
        <PageHero
          badgeIcon={<Handshake size={14} />}
          badgeText="Partnerships"
          title={<>Memorandum of <span className="text-accent underline decoration-accent/30 underline-offset-8">Understanding</span></>}
          subtitle="Collaborating with institutions of national and international repute to foster innovation and academic excellence."
          stats={[
            { bold: "42", text: "MoUs Signed" },
            { bold: "Global", text: "Partnerships" },
          ]}
        />

        {/* Breadcrumb */}
        <nav className="adm-breadcrumb py-4 bg-slate-50/50 border-b border-slate-100">
          <div className="adm-breadcrumb-inner container mx-auto px-6 flex items-center gap-2 text-[12px] text-slate-500 font-bold uppercase tracking-widest">
            <Home size={12} className="text-accent" />
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span><ChevronRight size={12} /></span>
            <span className="adm-cur text-deep-green">MOU</span>
          </div>
        </nav>

        <div className="adm-body container mx-auto px-6 py-14 space-y-16">
          
          <motion.section {...fadeIn} className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-green-50 border-2 border-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
               <Globe2 className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-deep-green mb-6 leading-tight">
              42 MoUs with Leading Universities<br/>&amp; Organizations
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Alva's Institute of Agricultural Sciences &amp; Technology has established <strong>42 Memorandums of Understanding (MoUs)</strong> with prestigious universities and organizations of both national and international repute. These strategic partnerships empower our students and faculty by providing access to advanced research, industry expertise, and global opportunities.
            </p>
          </motion.section>

          <motion.section {...fadeIn} className="max-w-5xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Lab & Innovation block */}
                <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow group">
                   <div className="w-14 h-14 bg-deep-green/5 border-2 border-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/5 group-hover:border-accent transition-colors">
                      <Lightbulb className="w-6 h-6 text-accent" />
                   </div>
                   <h3 className="text-xl font-black text-deep-green mb-3">Research &amp; Innovation</h3>
                   <p className="text-slate-600 font-medium leading-relaxed">
                      Supported by 15+ add-on state-of-the-art research labs dedicated to innovation, product development, and accelerating student startups.
                   </p>
                </div>

                {/* Academic Exchange block */}
                <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow group">
                   <div className="w-14 h-14 bg-deep-green/5 border-2 border-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/5 group-hover:border-accent transition-colors">
                      <GraduationCap className="w-6 h-6 text-accent" />
                   </div>
                   <h3 className="text-xl font-black text-deep-green mb-3">Expert Knowledge Exchange</h3>
                   <p className="text-slate-600 font-medium leading-relaxed">
                      Our partnerships facilitate over 100 guest lectures in a year, connecting students with global experts, researchers, and industry leaders.
                   </p>
                </div>

                {/* Industry & Career block */}
                <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow group">
                   <div className="w-14 h-14 bg-deep-green/5 border-2 border-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/5 group-hover:border-accent transition-colors">
                      <Building2 className="w-6 h-6 text-accent" />
                   </div>
                   <h3 className="text-xl font-black text-deep-green mb-3">Placement &amp; Training</h3>
                   <p className="text-slate-600 font-medium leading-relaxed">
                      Leveraging industry collaborations, our excellent Placement Cell ensures students are industry-ready. The campus is also an Authorized Cambridge English Language Assessment training and Examination Center.
                   </p>
                </div>

                <div className="bg-gradient-to-br from-deep-green to-green-800 rounded-2xl p-8 shadow-md text-white flex flex-col justify-center">
                   <h3 className="text-xl font-black mb-3">Expanding Horizons</h3>
                   <p className="text-green-50 font-medium leading-relaxed">
                      We continually seek out new partnerships to bridge the gap between academic theory and agricultural industry practices.
                   </p>
                </div>

             </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
