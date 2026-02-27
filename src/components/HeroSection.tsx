import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Droplets, Sprout, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=80",
  "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1920&q=80",
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80",
];

const floatingIcons = [
  { Icon: Leaf, className: "top-[20%] left-[10%] text-accent/40", delay: 0 },
  { Icon: Droplets, className: "top-[60%] right-[8%] text-accent/30", delay: 1 },
  { Icon: Sprout, className: "bottom-[25%] left-[15%] text-primary-foreground/20", delay: 2 },
  { Icon: Leaf, className: "top-[35%] right-[20%] text-accent/25", delay: 0.5 },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentSlide]}
            alt="Campus"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-green/70 via-deep-green/50 to-deep-green/80" />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${className} hidden md:block`}
          animate={{ y: [0, -15, 5, 0], rotate: [0, 5, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-accent font-medium tracking-widest uppercase text-sm mb-4"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight max-w-5xl"
        >
          Cultivating Knowledge.
          <br />
          <span className="text-accent">Harvesting the Future.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-cream/80 text-lg md:text-xl max-w-2xl"
        >
          Alva's Agricultural College, Moodbidri — Excellence in Agricultural Education
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-accent/30 hover:shadow-xl transition-all"
          >
            Apply Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cream/40 text-cream hover:bg-cream/10 font-semibold px-8 py-6 text-base rounded-full backdrop-blur-sm"
          >
            Explore Campus
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-accent transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? "bg-accent w-6" : "bg-cream/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
