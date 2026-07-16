import { motion } from "framer-motion";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { TrendingUp, Award, Briefcase } from "lucide-react";

const recruiters = [
  "Tata AgriBusiness", "ITC Ltd", "UPL", "Bayer CropScience", "Mahindra Agri",
  "Syngenta", "IFFCO", "Amul", "Godrej Agrovet", "Rallis India",
  "Coromandel Intl", "Nuziveedu Seeds",
];

const stats = [
  { icon: TrendingUp, label: "Placement Rate", value: 95 },
  { icon: Award, label: "Avg Package (LPA)", value: 6 },
  { icon: Briefcase, label: "Recruiting Companies", value: 50 },
];

const PlacementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="placements" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Careers</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Placements & Career</h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
          {stats.map((s, i) => {
            const count = useCountUp(s.value, 2000, isVisible);
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <s.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-3xl font-serif font-bold text-primary">{count}{s.label.includes("Rate") ? "%" : "+"}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Recruiter Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="overflow-hidden relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/50 to-transparent z-10" />
          <div className="flex animate-slide-logos whitespace-nowrap">
            {[...recruiters, ...recruiters].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-4 px-8 py-4 bg-card rounded-xl border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { name: "Priya Sharma", role: "Agronomist at Bayer", quote: "The practical training at Alva's gave me a real-world edge." },
            { name: "Raj Kumar", role: "Research Analyst at ITC", quote: "Faculty mentorship helped me discover my passion for research." },
            { name: "Anitha R.", role: "Farm Manager at Mahindra", quote: "The exposure to modern techniques prepared me for industry challenges." },
          ].map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.15 }}
              className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-shadow"
            >
              <p className="text-muted-foreground text-sm italic mb-4">"{story.quote}"</p>
              <p className="font-bold text-foreground">{story.name}</p>
              <p className="text-accent text-sm">{story.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementsSection;
