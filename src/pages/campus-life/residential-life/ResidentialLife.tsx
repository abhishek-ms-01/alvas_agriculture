import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Home, Leaf, Coffee, ShieldCheck, HeartPulse, Wifi, Wind, MapPin, Zap } from "lucide-react";
import "./ResidentialLife.css";

const stats = [
  { label: "Hostel Blocks", value: "08+" },
  { label: "Green Campus", value: "100 Acr" },
  { label: "Cuisines", value: "06+" },
  { label: "Safety", value: "24/7" },
];

const features = [
  {
    title: "Premium Hostels",
    tag: "Comfortable Living",
    desc: "Spacious, well-ventilated rooms designed to be a home away from home with dedicated study areas and ample storage.",
    img: "/A.I.E.T CAMPUS -2026-180.jpg"
  },
  {
    title: "Eco-Friendly Lifestyle",
    tag: "Sustainability",
    desc: "A carbon-neutral campus initiative featuring solar power, rain-water harvesting, and zero-waste management systems.",
    img: "/A.I.E.T CAMPUS -2026-465.jpg"
  },
  {
    title: "Organic Dining",
    tag: "Health & Nutrition",
    desc: "Hygienic multi-cuisine cafeterias serving nutritious, farm-fresh meals with special care for diverse dietary needs.",
    img: "/A.I.E.T CAMPUS -2026-467.jpg"
  }
];

const gallery = [
  { src: "/A.I.E.T CAMPUS -2026-65.jpg", tag: "Campus View" },
  { src: "/A.I.E.T CAMPUS -2026-185.jpg", tag: "Garden Space" },
  { src: "/A.I.E.T CAMPUS -2026-198.jpg", tag: "Walkways" },
  { src: "/A.I.E.T CAMPUS -2026-423.jpg", tag: "Hostel Block" },
];

export default function ResidentialLife() {
  return (
    <div className="res-root">
      <Header forceDark={true} />

      {/* --- HERO SECTION --- */}
      <section className="res-hero">
        <div 
          className="res-hero-bg" 
          style={{ backgroundImage: `url('/A.I.E.T CAMPUS -2026-65.jpg')` }} 
        />
        <div className="res-hero-overlay" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="res-content"
        >
          <span className="res-badge"><Leaf size={12} /> Nature-Aligned Living</span>
          <h1 className="res-title"> Residential Life & <em>Green Spaces</em></h1>
          <p className="res-desc">
            Experience a unique blend of modern amenities and natural tranquility. 
            Our 100-acre lush green campus provides the perfect sanctuary for academic focus and personal growth.
          </p>
        </motion.div>
      </section>

      {/* --- STATS --- */}
      <div className="res-stats">
        {stats.map((s, i) => (
          <div key={i} className="res-stat-item">
            <span className="res-stat-val">{s.value}</span>
            <span className="res-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* --- FEATURES GRID --- */}
      <section className="res-sec-padding">
        <div className="max-w-[1300px] mx-auto mb-16 px-4">
          <span className="text-res-accent font-black uppercase tracking-[0.2em] text-[10px]">Infrastructure</span>
          <h2 className="text-4xl font-extrabold text-res-dark mt-2">Campus Excellence</h2>
        </div>
        <div className="res-grid">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="res-card"
            >
              <img src={f.img} alt={f.title} className="res-card-img" />
              <div className="res-card-info">
                <span className="res-card-tag">{f.tag}</span>
                <h3 className="res-card-title">{f.title}</h3>
                <p className="res-card-p">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- AMENITIES SECTION --- */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-res-dark mb-8 leading-tight">
                Modern Amenities <br/><em>In Nature's Lap</em>
              </h2>
              <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-res-dark flex items-center justify-center rounded-2xl text-res-accent">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-res-dark">Safe & Secure</h4>
                        <p className="text-xs text-slate-500 mt-1">200+ Smart CCTV zones and 24/7 security.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-res-dark flex items-center justify-center rounded-2xl text-res-accent">
                        <HeartPulse size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-res-dark">Health Center</h4>
                        <p className="text-xs text-slate-500 mt-1">On-campus medical team and ambulance.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-res-dark flex items-center justify-center rounded-2xl text-res-accent">
                        <Wifi size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-res-dark">High-Speed Wi-Fi</h4>
                        <p className="text-xs text-slate-500 mt-1">Seamless connectivity across all blocks.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-res-dark flex items-center justify-center rounded-2xl text-res-accent">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-res-dark">24x7 Power</h4>
                        <p className="text-xs text-slate-500 mt-1">100% DG backup for uninterrupted study.</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="relative">
                <img 
                    src="/A.I.E.T CAMPUS -2026-221.jpg" 
                    className="rounded-[40px] shadow-2xl" 
                    alt="Campus Facilities"
                />
                <div className="absolute -bottom-8 -left-8 bg-res-accent p-8 rounded-[30px] shadow-xl max-w-[200px]">
                    <span className="text-white text-3xl font-black italic tracking-tighter">100+</span>
                    <p className="text-white/90 text-[10px] font-bold uppercase tracking-widest mt-2">Variety of rare flora species</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section className="res-sec-padding bg-slate-50">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-res-dark uppercase tracking-tighter">Visual Tour</h2>
            <div className="w-16 h-1 bg-res-accent mx-auto mt-4" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4">
            <div className="res-gallery-grid">
                {gallery.map((g, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="res-gallery-box"
                    >
                        <img src={g.src} alt={g.tag} />
                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                            <span className="text-white font-bold text-xs uppercase tracking-widest">{g.tag}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
