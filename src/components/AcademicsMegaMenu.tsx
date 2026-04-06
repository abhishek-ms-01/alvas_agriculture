import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


interface AcademicsMegaMenuProps {
  onClose: () => void;
}

const AcademicsMegaMenu = ({ onClose }: AcademicsMegaMenuProps) => {
  const navigate = useNavigate();

  const containerVars = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.05 },
    },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } },
  };

  const columns = [
    {
      category: "UG PROGRAMMES",
      links: [
        { label: "B.Sc. (Hons) Agriculture", path: "/academics/ug/bsc-agriculture" },
        { label: "B.Tech (Food Technology)", path: "/academics/ug/btech-food-technology" },
      ],
    },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-[320px] w-[90vw] bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-2xl border border-slate-200 overflow-hidden"
    >
      <div className="p-8">
        <div className="flex gap-10">
          {columns.map((col) => (
            <div key={col.category} className="flex-1">
              {/* Column header */}
              <h2 className="text-accent font-black text-[12px] uppercase tracking-widest mb-2.5">
                {col.category}
              </h2>
              <div className="w-full h-px bg-slate-100 mb-5" />

              {/* Links */}
              <ul className="space-y-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.path)}
                      className="w-full text-left flex items-center py-1.5 px-2 text-[13.5px] font-semibold text-slate-600 hover:text-accent hover:bg-amber-50 rounded-lg transition-all duration-200 group"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AcademicsMegaMenu;
