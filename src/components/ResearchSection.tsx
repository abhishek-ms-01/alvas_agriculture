import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Microscope, Leaf, Recycle, FlaskConical } from "lucide-react";

const researchAreas = [
  { icon: Microscope, title: "Agricultural Research", desc: "Cutting-edge research in crop improvement, pest management, and soil health.", progress: 92 },
  { icon: Leaf, title: "Sustainable Farming", desc: "Developing eco-friendly farming techniques for a better tomorrow.", progress: 88 },
  { icon: Recycle, title: "Organic Practices", desc: "Promoting chemical-free farming through innovative organic methods.", progress: 75 },
  { icon: FlaskConical, title: "Student Research", desc: "Encouraging innovation through student-led research projects.", progress: 80 },
];

const milestones = [
  { year: "1998", event: "College Founded" },
  { year: "2005", event: "Research Center Established" },
  { year: "2012", event: "ICAR Accreditation" },
  { year: "2018", event: "Organic Farming Lab Launched" },
  { year: "2023", event: "International Research Collaboration" },
];

const ResearchSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="research" className="py-20 md:py-28 relative overflow-hidden">
      {/* Parallax BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-deep-green/90" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Innovation</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream">Research & Innovation</h2>
        </motion.div>

        {/* Research Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {researchAreas.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/15 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <r.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-cream mb-2">{r.title}</h3>
                  <p className="text-cream/60 text-sm mb-4">{r.desc}</p>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className="bg-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${r.progress}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.15 }}
                    />
                  </div>
                  <p className="text-accent text-xs mt-1 text-right">{r.progress}%</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-serif text-2xl font-bold text-cream text-center mb-10">Our Journey</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="glass rounded-xl px-6 py-4 text-center hover:bg-white/15 transition-all"
              >
                <p className="text-accent font-bold text-lg">{m.year}</p>
                <p className="text-cream/70 text-sm">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
