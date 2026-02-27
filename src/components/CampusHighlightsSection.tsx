import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    title: "National Ag-Science Fair 2025",
    date: "March 15, 2025",
    desc: "Alva's is orgulloso to host the upcoming National Level Ag-Science Fair, featuring innovations from across the country.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80",
  },
  {
    title: "New Hydroponics Research Wing",
    date: "Feb 28, 2025",
    desc: "We are expanding our vertical farming research with a state-of-the-art hydroponics facility for advanced crop studies.",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&q=80",
  },
  {
    title: "Campus Connectivity Initiative",
    date: "Feb 20, 2025",
    desc: "Complete Wi-Fi coverage across all research farms and student zones is now live, facilitating real-time data collection.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
  },
];

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/5 blur-3xl"
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

const CampusHighlightsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="highlights" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">What's New</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Campus Highlights</h2>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 gap-2 p-0 h-auto font-bold group">
            View All News <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={h.image}
                  alt={h.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3 font-semibold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  {h.date}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {h.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {h.desc}
                </p>
                <div className="h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusHighlightsSection;
