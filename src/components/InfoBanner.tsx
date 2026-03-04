import { motion } from "framer-motion";
import { Trophy, Star, Award, GraduationCap } from "lucide-react";

const infoItems = [
  { text: "ADMISSIONS OPEN 2026-27", icon: Star },
  { text: "RANKED AMONG TOP 10 AGRICULTURAL COLLEGES", icon: Trophy },
  { text: "GLOBAL COLLABORATIONS", icon: Award },
  { text: "100% PLACEMENT ASSISTANCE", icon: GraduationCap },
];

const InfoBanner = () => {
  return (
    <div className="bg-deep-green border-y border-accent/20 overflow-hidden py-3 relative">
      {/* Decorative Agriculture Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 px-6"
        >
          {/* First set of items */}
          {infoItems.map((item, index) => (
            <div key={`item-1-${index}`} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-accent" />
              <span className="text-cream text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                {item.text}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {infoItems.map((item, index) => (
            <div key={`item-2-${index}`} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-accent" />
              <span className="text-cream text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Second motion div to follow the first one for seamless scrolling */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 px-6"
        >
          {/* First set of items */}
          {infoItems.map((item, index) => (
            <div key={`item-3-${index}`} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-accent" />
              <span className="text-cream text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                {item.text}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {infoItems.map((item, index) => (
            <div key={`item-4-${index}`} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-accent" />
              <span className="text-cream text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfoBanner;
