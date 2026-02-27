import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Kumar",
    role: "B.Sc. Agriculture, 3rd Year",
    text: "The practical exposure at Alva's is unparalleled. Working on the research farms has given me insights that no textbook could provide.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Priya Sharma",
    role: "M.Sc. Horticulture, Final Year",
    text: "The faculty here doesn't just teach; they mentor. The research-driven approach has shaped my career path in sustainable farming.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Siddharth Rao",
    role: "B.Sc. Agriculture, Alumnus",
    text: "The placements team worked tirelessly to help me land a role at a top agritech firm. I'm forever grateful for the foundation built here.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/5 blur-3xl"
          style={{
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const StudentVoicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Student Voices</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-all group"
            >
              <Quote className="w-10 h-10 text-accent/20 mb-6 group-hover:text-accent/40 transition-colors" />
              <p className="text-foreground/80 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentVoicesSection;
