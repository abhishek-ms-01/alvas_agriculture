import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  badgeIcon: React.ReactNode;
  badgeText: string;
  title: React.ReactNode;
  subtitle: string;
  stats?: { bold: string; text: string }[];
}

const PageHero: React.FC<PageHeroProps> = ({ badgeIcon, badgeText, title, subtitle, stats }) => {
  return (
    <div className="adm-hero relative min-h-[55vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background image with green overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg"
          alt="Alva's Agricultural College Campus"
          className="w-full h-full object-cover"
          style={{ opacity: 0.28 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-green/70 via-deep-green/40 to-deep-green/10" />
      </div>

      {/* Hero content */}
      <div className="adm-hero-content relative z-10 text-center max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="adm-badge mx-auto mb-4 flex items-center justify-center gap-2"
        >
          {badgeIcon} {badgeText}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="adm-title text-3xl md:text-5xl font-black mb-4 leading-tight text-white uppercase tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="adm-subtitle text-base md:text-lg text-cream/90 mb-8 max-w-3xl mx-auto font-medium"
        >
          {subtitle}
        </motion.p>

        {stats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="adm-stat-row flex flex-wrap justify-center gap-3"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="adm-stat-pill bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-wider"
              >
                <strong>{stat.bold}</strong> {stat.text}
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Q-curve wave divider */}
      <div className="adm-wave absolute bottom-[-1px] left-0 w-full leading-[0] z-[1]">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="fill-background w-full h-[80px]">
          <path d="M0,100 Q720,20 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </div>
  );
};

export default PageHero;
