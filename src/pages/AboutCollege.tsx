import { 
  Home, 
  ChevronRight, 
  GraduationCap, 
  Leaf, 
  FlaskConical, 
  Users, 
  Award, 
  Microscope, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Sprout, 
  TrendingUp, 
  Globe, 
  BookOpen, 
  Lightbulb 
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "./admissions/Admissions.css";

export default function AboutCollege() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="adm-page overflow-x-hidden">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      
      <main>
        {/* Hero Section */}
        <PageHero
          badgeIcon={<MapPin size={14} />}
          badgeText="Moodbidri, Karnataka"
          title={<>Shaping Future <span className="text-accent underline decoration-accent/30 underline-offset-8">Agri-Innovators</span></>}
          subtitle="Alva's Institute of Agricultural Sciences and Technology (IAST) blends agrarian tradition with cutting-edge bioscience."
          stats={[
            { bold: "2025", text: "Established" },
            { bold: "100%", text: "Skill focus" },
            { bold: "Smart Farm", text: "" },
          ]}
        />

        {/* Breadcrumb */}
        <nav className="adm-breadcrumb py-4 bg-slate-50/50 border-b border-slate-100">
          <div className="adm-breadcrumb-inner container mx-auto px-6 flex items-center gap-2 text-[12px] text-slate-500 font-bold uppercase tracking-widest">
            <Home size={12} className="text-accent" /><a href="/" className="hover:text-accent transition-colors">Home</a>
            <span><ChevronRight size={12} /></span>
            <span className="adm-cur text-deep-green">About Institution</span>
          </div>
        </nav>

        <div className="adm-body container mx-auto px-6 py-10 space-y-16">
          
          {/* Institutional Overview - SMALLER DATA/IMAGE */}
          <section className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-6 flex items-center gap-3">
                <Leaf className="text-accent w-6 h-6" /> About Alva's IAST
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base font-medium">
                <p>
                  Established in 2025, <strong className="text-deep-green/80">Alva's IAST</strong> is a premier destination for agricultural excellence under the Alva's Education Foundation, led by visionary <strong className="text-deep-green/80">Dr. M. Mohan Alva</strong>.
                </p>
                <p>
                  Our mission is to democratize high-quality bioscience education, preparing agile agri-professionals for a resource-conscious world through field-centric pedagogy.
                </p>
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.3 }}
              className="relative rounded-[2rem] overflow-hidden shadow-xl group"
            >
              <img 
                src="https://www.aiet.org.in/wp-content/themes/aiet-2019/images/banner.jpg" 
                alt="Greenhouse Learning" 
                className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-deep-green/80 to-transparent text-white">
                <p className="text-accent font-black uppercase tracking-widest text-[10px] mb-1">Global Standard</p>
                <h3 className="text-lg font-bold">Industry-Ready Field Training</h3>
              </div>
            </motion.div>
          </section>

          {/* Recognitions Section - MORE COMPACT */}
          <section className="bg-deep-green rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
            
            <div className="relative z-10 text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight uppercase">Why Alva's IAST?</h2>
              <p className="text-cream/60 max-w-xl mx-auto text-sm font-semibold italic">
                National Recognitions ensuring competitive credentials.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
              <motion.div 
                {...fadeIn}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-accent w-8 h-8" />
                  <h3 className="text-xl font-black uppercase tracking-tight">Affiliations</h3>
                </div>
                <ul className="space-y-4 text-cream/80 font-medium text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span>Affiliated to <strong className="text-white">Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences</strong> & Govt. of Karnataka.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span>Approved by <strong className="text-white">ICAR and UGC</strong> standards.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-accent w-8 h-8" />
                  <h3 className="text-xl font-black uppercase tracking-tight text-white">Focus</h3>
                </div>
                <p className="text-cream/80 leading-relaxed font-medium text-sm mb-4">
                  Teaching quality & research validated by national benchmarks.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-black uppercase tracking-widest text-accent">
                   <span>• Research</span>
                   <span>• Quality</span>
                   <span>• Placement</span>
                   <span>• Innovation</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Programs Offered - SMALLER IMAGE/GRID */}
          <section className="adm-section">
            <h2 className="text-3xl font-black text-deep-green mb-10 text-center uppercase tracking-tighter italic">Professional Degrees</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  title: "B.Sc. (Hons) Agriculture", 
                  image: "https://mbcollegeofagriculture.in/img/course-about.jpg",
                  duration: "4 Yr",
                  focus: "Crop Production & Soil Health"
                },
                { 
                  title: "B.Tech (Food Technology)", 
                  image: "ai.png",
                  duration: "4 Yr",
                  focus: "Processing & Quality Control"
                }
              ].map((item, i) => (
                <div key={i} className="group overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="h-56 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 bg-accent text-deep-green p-2 rounded-full shadow-lg">
                       <TrendingUp size={16} />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-black text-deep-green mb-2">{item.title}</h3>
                    <p className="text-slate-500 mb-4 text-xs font-bold uppercase tracking-widest">{item.focus}</p>
                    <a href="/admissions/kcet" className="text-accent font-black text-[11px] uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
                      Entrance Criteria —
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Infrastructure & Facilities - SMALLER DATA/IMAGE */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div {...fadeIn} className="order-2 lg:order-1">
               <img 
                 src="Examination Hall.jpeg" 
                 alt="Smart Farm Tech" 
                 className="rounded-[2.5rem] shadow-xl h-[400px] w-full object-cover"
               />
             </motion.div>
             <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="order-1 lg:order-2">
               <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-6 leading-tight">Next-Gen Infrastructure</h2>
               <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                 {[
                   { icon: <Globe size={16} />, text: "Smart Classrooms" },
                   { icon: <Microscope size={16} />, text: "Incubation Labs" },
                   { icon: <BookOpen size={16} />, text: "Campus Wi-Fi" },
                   { icon: <ShieldCheck size={16} />, text: "Hostels" },
                   { icon: <TrendingUp size={16} />, text: "Sports Hub" },
                   { icon: <FlaskConical size={16} />, text: "Cafeteria" },
                   { icon: <Sprout size={16} />, text: "Medical Center" },
                   { icon: <Lightbulb size={16} />, text: "Digital Library" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-slate-800 font-bold group">
                     <div className="text-accent bg-accent/5 p-2 rounded-xl group-hover:bg-accent group-hover:text-white transition-all shadow-sm">{item.icon}</div>
                     <span className="text-[11px] uppercase tracking-wider">{item.text}</span>
                   </div>
                 ))}
               </div>
             </motion.div>
          </section>

          {/* Placements & Research - COMPACT */}
          <section className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div 
              {...fadeIn}
              className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100"
            >
              <h3 className="text-xl font-black text-deep-green mb-4">Placement Cell</h3>
              <p className="text-slate-600 mb-6 text-sm font-medium leading-relaxed">
                Dedicated training ensures 100% placement support through workshops and industry tie-ups.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Workshops", "Global Network", "Industry Ties"].map(li => (
                  <span key={li} className="px-3 py-1 bg-slate-50 rounded-full text-[9px] font-black tracking-widest text-deep-green border border-slate-200 uppercase">{li}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-deep-green p-8 rounded-[2rem] text-white relative overflow-hidden"
            >
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter italic">Innovation</h3>
              <p className="text-cream/70 mb-6 text-sm font-medium">
                Research focus: Biotech, Precision Agri, and Climate-Resilient Farming. 
              </p>
              <div className="flex gap-4">
                 <div className="text-accent bg-accent/20 p-2 rounded-lg cursor-help" title="Patent Filing"><Sprout size={16} /></div>
                 <div className="text-accent bg-accent/20 p-2 rounded-lg cursor-help" title="Research Papers"><BookOpen size={16} /></div>
              </div>
            </motion.div>
          </section>

          {/* Admissions CTA - COMPACT */}
          <section className="bg-accent rounded-[3rem] p-10 md:p-14 text-deep-green text-center shadow-xl relative overflow-hidden">
             <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">Join Our Future</h2>
             <div className="flex flex-wrap justify-center gap-6 mb-10">
               <div className="p-6 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 text-left min-w-[280px]">
                 <h4 className="text-lg font-black uppercase mb-1">B.Sc. Agriculture</h4>
                 <p className="font-bold opacity-80 text-[11px] mb-4 tracking-tight uppercase">10+2 PCB | 45% Gen</p>
                 <span className="text-[9px] font-black bg-deep-green text-white px-3 py-1 rounded-full uppercase tracking-widest">Entrance: KCET | AG-QUOTA</span>
               </div>
               <div className="p-6 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 text-left min-w-[280px]">
                 <h4 className="text-lg font-black uppercase mb-1">B.Tech Food Tech</h4>
                 <p className="font-bold opacity-80 text-[11px] mb-4 tracking-tight uppercase">10+2 PCM | 45% Gen</p>
                 <span className="text-[9px] font-black bg-deep-green text-white px-3 py-1 rounded-full uppercase tracking-widest">Entrance: KCET | AG-QUOTA</span>
               </div>
             </div>

             <motion.a 
               href="/admissions/kcet" 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="inline-block px-12 py-4 bg-deep-green text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg text-sm"
             >
               Apply Now
             </motion.a>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
