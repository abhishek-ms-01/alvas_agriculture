import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight,
  ChevronRight
} from "lucide-react";

interface AboutMegaMenuProps {
  onClose: () => void;
}

const AboutMegaMenu = ({ onClose }: AboutMegaMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const containerVars = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05 
      }
    },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } }
  };

  const navItems = [
    { title: "Institution", items: [
        { label: "About College", path: "/about-college" },
        { label: "Vision Mission", path: "/vision-mission" },
        { label: "Milestones", path: "/milestones" },
      ]
    },
    { title: "Accreditations", items: ["NAAC", "Recognition", "Statutory Approvals"] },
    { title: "Mandatory Disclosure", items: ["RTI", "NCTE", "Affiliations"] },
    { title: "MOU", items: [], path: "/mou" },
    { title: "AEF", items: [], path: "/aef" },
    { title: "Administration", items: [], path: "/administration" }
  ];

  const leadership = [
    {
      title: "CHAIRMAN'S MESSAGE",
      name: "DR. MOHAN ALVA",
      quote: "\"Welcome to Alva's! Our mission is to provide quality education and foster growth.\"",
      img: "https://alvasschools.com/wp-content/uploads/2024/03/Dr.Mohan-Alva-1.jpg",
      path: "/chairman-message"
    },
    {
      title: "DEAN'S MESSAGE",
      name: "DR. VASUDEV",
      quote: "\"We foster an environment of academic excellence and holistic development for all.\"",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      path: "/dean-message"
    }
  ];

  const activeIndex = navItems.findIndex(i => i.title === activeCategory);

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-[1050px] w-[95vw] bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-2xl border border-slate-200 overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="p-8 relative bg-white">
        <div className="flex gap-10">
          {/* Section 1: Navigation Categories (Left) */}
          <div className="w-[28%] flex flex-col pt-0">
            {navItems.map((item) => {
              const hasSubItems = item.items.length > 0;
              const isActive = activeCategory === item.title;

              return (
                <div 
                  key={item.title} 
                  className="flex flex-col"
                  onMouseEnter={() => hasSubItems && setActiveCategory(item.title)}
                >
                  <a 
                    href={item.path || "#"} 
                    className={`flex items-center justify-between w-full py-2.5 transition-all duration-300 group`}
                    onClick={(e) => {
                      if (hasSubItems) e.preventDefault();
                    }}
                  >
                    <h3 className={`text-[14px] font-bold tracking-tight transition-all duration-300 ${isActive ? 'text-accent' : 'text-deep-green group-hover:text-accent'}`}>
                      {item.title}
                    </h3>
                    {hasSubItems && (
                      <ChevronRight className={`w-3.5 h-3.5 transition-all duration-500 ${isActive ? 'text-accent scale-110 translate-x-1' : 'text-slate-300 group-hover:text-accent'}`} />
                    )}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Section 2: Content Area (Middle & Right) */}
          <div className="flex-1 relative">
            <div className="flex gap-8 h-full">
              {leadership.map((person) => (
                <div key={person.name} className="flex-1 flex flex-col">
                  {/* Category Header with Underline */}
                  <div className="mb-8 w-full flex flex-col items-center text-center">
                    <h2 className="text-accent font-black text-[14px] uppercase tracking-widest mb-2.5">
                      {person.title}
                    </h2>
                    <div className="w-full h-px bg-slate-100" />
                  </div>

                  {/* Profile Layout */}
                  <div className="flex flex-col items-center text-center gap-4">
                    <img 
                      src={person.img} 
                      alt={person.name} 
                      className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-slate-50"
                    />
                    <div className="pt-1.5 flex flex-col items-center">
                      <p className="text-deep-green font-black text-[15px] uppercase tracking-wide mb-1">
                        {person.name}
                      </p>
                      <p className="text-slate-500 italic text-[13px] leading-relaxed mb-5 block min-h-[40px]">
                        {person.quote}
                      </p>
                      <a 
                        href={person.path}
                        className="text-accent font-[900] text-[11px] uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform w-fit"
                        onClick={() => onClose()}
                      >
                        KNOW MORE <ArrowRight className="w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hover Sub-Menu Overlay Card */}
            <AnimatePresence>
              {activeCategory && navItems.find(i => i.title === activeCategory)?.items.length! > 0 && (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute left-[-1.5rem] w-[260px] z-20"
                  style={{ top: `${activeIndex * 40}px`, paddingLeft: 8 }}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <div className="bg-white rounded-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] border-l-4 border-accent p-5 pr-8">
                    <ul className="space-y-3.5">
                      {navItems.find(i => i.title === activeCategory)?.items.map((subItem: any) => {
                        const label = typeof subItem === "string" ? subItem : subItem.label;
                        const path = typeof subItem === "string" ? "#" : subItem.path;
                        return (
                          <li key={label}>
                            <a 
                              href={path}
                              onClick={(e) => {
                                if (path !== "#") {
                                  e.preventDefault();
                                  navigate(path);
                                  onClose();
                                }
                              }}
                              className="text-[#334155] hover:text-accent font-[900] text-[13.5px] tracking-tight transition-colors duration-200 block"
                            >
                              {label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMegaMenu;
