import { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import AboutMegaMenu from "./AboutMegaMenu";
import AcademicsMegaMenu from "./AcademicsMegaMenu";
import { AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#" },
  {
    label: "Admissions",
    href: "#",
    megaMenu: [
      {
        category: "ADMISSION PROCEDURE",
        links: [
          { label: "Admission Through KCET", to: "/admissions/kcet" },
          { label: "Admission Through Management", to: "/admissions/management" },
          { label: "Documents Required", to: "/admissions/documents" },
        ],
      },
      {
        category: "SCHOLARSHIPS",
        links: [
          { label: "List of Scholarship Schemes", to: "/admissions/scholarships/list" },
          { label: "Scholarship Schemes", to: "/admissions/scholarships/schemes" },
        ],
      },
    ],
  },
  { label: "Academics", href: "#", isAcademics: true },
  { label: "Research", href: "#", to: "/research" },
  { label: "Placements", href: "#", to: "/placements" },
  { label: "Campus Life", href: "#", to: "/campus-life" },
  { label: "Exposure Visit", href: "#", to: "/exposure-visit" },
  { label: "Internship/IPT", href: "#", to: "/internship" },
  { label: "Contact Us", href: "#", to: "/contact-us" },
];

const Header = ({ forceDark = false }: { forceDark?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showAcademicsMenu, setShowAcademicsMenu] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileAdmissionsOpen, setMobileAdmissionsOpen] = useState(false);

  // Timer refs — bridge the gap between nav trigger and floating menu
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const academicsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openAbout = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    if (academicsTimer.current) clearTimeout(academicsTimer.current);
    setShowAcademicsMenu(false);
    setShowAboutMenu(true);
  };
  const closeAbout = () => {
    aboutTimer.current = setTimeout(() => setShowAboutMenu(false), 180);
  };
  const keepAboutOpen = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
  };

  const openAcademics = () => {
    if (academicsTimer.current) clearTimeout(academicsTimer.current);
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    setShowAboutMenu(false);
    setShowAcademicsMenu(true);
  };
  const closeAcademics = () => {
    academicsTimer.current = setTimeout(() => setShowAcademicsMenu(false), 180);
  };
  const keepAcademicsOpen = () => {
    if (academicsTimer.current) clearTimeout(academicsTimer.current);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || forceDark
          ? "bg-deep-green/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* CET Codes Thin Strip */}
      <div className={`hidden lg:flex items-center justify-end mx-auto max-w-[95%] px-4 transition-all duration-300 ${scrolled || forceDark ? 'h-0 py-0 opacity-0 overflow-hidden' : 'pt-1 pb-0'}`}>
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-[9px] font-bold uppercase tracking-wider">CET Code</span>
          <span className="text-white/55 text-[9px] font-bold">Agri:</span>
          <span className="text-accent text-[9px] font-black">P 038 / N 038</span>
          <span className="text-white/15">|</span>
          <span className="text-white/55 text-[9px] font-bold">Food Tech:</span>
          <span className="text-accent text-[9px] font-black">R 038 / F 038</span>
          <span className="text-white/15">|</span>
          <Link to="/contact-us" className="bg-accent text-deep-green text-[9px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full hover:bg-accent/90 transition-colors">
            Admissions Enquiry
          </Link>
        </div>
      </div>

      {/* Main Nav Row */}
      <div className={`mx-auto max-w-[95%] flex items-center pl-4 pr-6 py-1`}>

        {/* ================= LOGO SECTION ================= */}
        <a href="/" className="flex items-center gap-4 max-w-[420px]">
          <img
            src="/alvas-org-logo-white.png"
            alt="Alva's Logo"
            className="h-14 w-auto object-contain drop-shadow-md"
          />
          <div className="flex flex-col">
            <p className="font-sans font-black text-white text-lg sm:text-2xl leading-none tracking-wider uppercase">
              ALVA'S
            </p>
            <p className="text-white/80 text-[9px] sm:text-[11px] font-medium tracking-[0.08em] sm:tracking-[0.14em] uppercase leading-tight mt-0.5 max-w-[180px] sm:max-w-none">
              Institute of Agricultural Sciences &amp; Technology
            </p>
          </div>
        </a>

        {/* FLEX SPACER */}
        <div className="flex-1" />

        {/* ================= NAVIGATION ================= */}
        <div className="flex items-center gap-4 relative">

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-4 xl:gap-5 2xl:gap-6">
            {navLinks.map((link) =>
              link.label === "About" ? (
                /* About — uses the hover mega-menu */
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openAbout}
                  onMouseLeave={closeAbout}
                >
                  <a
                    href={link.href}
                    className="relative px-1 py-1 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider text-white/90 hover:text-accent transition-colors duration-300 group whitespace-nowrap flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
                  </a>
                </div>
              ) : (link as any).isAcademics ? (
                /* Academics — uses the hover mega-menu */
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openAcademics}
                  onMouseLeave={closeAcademics}
                >
                  <a
                    href={link.href}
                    className="relative px-1 py-1 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider text-white/90 hover:text-accent transition-colors duration-300 group whitespace-nowrap flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
                  </a>
                </div>
              ) : link.megaMenu ? (
                /* Admissions / Research — inline dropdown mega-menu (white/yellow theme) */
                <div key={link.label} className="relative group py-2">
                  <button className="flex items-center gap-1.5 px-1 py-1 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider text-white/90 hover:text-accent transition-colors duration-300 whitespace-nowrap">
                    {link.label}
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
                  </button>

                  {/* Mega-Menu Dropdown — white/yellow theme */}
                  <div className="absolute top-full left-1/2 -translate-x-[45%] pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden min-w-[780px] p-8 flex gap-10">
                      {link.megaMenu.map((cat) => (
                        <div key={cat.category} className="flex-1">
                          <h4 className="text-[11px] font-black tracking-[0.2em] text-accent border-b border-amber-200 pb-2 mb-5 uppercase">
                            {cat.category}
                          </h4>
                          <div className="flex flex-col gap-0.5">
                            {cat.links.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.to}
                                className="group/item flex items-center px-2 py-2 text-[13.5px] font-semibold text-slate-600 hover:text-accent hover:bg-amber-50 rounded-lg transition-all duration-200"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : link.to ? (
                /* Links with a route */
                <Link
                  key={link.label}
                  to={link.to}
                  className="relative px-1 py-1 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider text-white/90 hover:text-accent transition-colors duration-300 group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              ) : (
                /* Plain href links */
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-1 py-1 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider text-white/90 hover:text-accent transition-colors duration-300 group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="xl:hidden text-white p-2">
              <Menu className="w-6 h-6" />
            </SheetTrigger>

            <SheetContent side="right" className="bg-deep-green border-primary/20 w-72">
              <SheetTitle className="text-white font-serif">Menu</SheetTitle>

              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.label === "About" ? (
                      /* About — mobile accordion */
                      <div className="flex flex-col">
                        <button
                          onClick={() => setMobileAboutOpen((v) => !v)}
                          className="px-4 py-3 text-lg text-white/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium flex items-center justify-between w-full"
                        >
                          About
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180 text-accent' : 'opacity-50'}`} />
                        </button>
                        {mobileAboutOpen && (
                          <div className="flex flex-col gap-1 pl-4 border-l border-white/10 ml-4 mt-1 mb-2">
                            {[
                              { label: "About College", to: "/about-college" },
                              { label: "Vision & Mission", to: "/vision-mission" },
                              { label: "Milestones", to: "/milestones" },
                              { label: "Chairman's Message", to: "/chairman-message" },
                              { label: "Dean's Message", to: "/dean-message" },
                              { label: "Administration", to: "/administration" },
                              { label: "MOU", to: "/mou" },
                              { label: "AEF", to: "/aef" },
                              { label: "Accreditations", to: "/about/naac" },
                              { label: "Mandatory Disclosure", to: "/about/mandatory-disclosure" },
                            ].map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.to}
                                onClick={() => { setOpen(false); setMobileAboutOpen(false); }}
                                className="px-3 py-2 text-[15px] text-white/70 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (link as any).isAcademics ? (
                      /* Academics — mobile accordion */
                      <div className="flex flex-col">
                        <button
                          onClick={() => setMobileAcademicsOpen((v) => !v)}
                          className="px-4 py-3 text-lg text-white/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium flex items-center justify-between w-full"
                        >
                          Academics
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAcademicsOpen ? 'rotate-180 text-accent' : 'opacity-50'}`} />
                        </button>
                        {mobileAcademicsOpen && (
                          <div className="flex flex-col gap-1 pl-4 border-l border-white/10 ml-4 mt-1 mb-2">
                            {[
                              { label: "B.Sc Agriculture", to: "/academics/ug/bsc-agriculture" },
                              { label: "B.Tech Food Technology", to: "/academics/ug/btech-food-technology" },
                            ].map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.to}
                                onClick={() => { setOpen(false); setMobileAcademicsOpen(false); }}
                                className="px-3 py-2 text-[15px] text-white/70 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : link.megaMenu ? (
                      /* Admissions — mobile accordion */
                      <div className="flex flex-col">
                        <button
                          onClick={() => setMobileAdmissionsOpen((v) => !v)}
                          className="px-4 py-3 text-lg text-white/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium flex items-center justify-between w-full"
                        >
                          Admissions
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAdmissionsOpen ? 'rotate-180 text-accent' : 'opacity-50'}`} />
                        </button>
                        {mobileAdmissionsOpen && (
                          <div className="flex flex-col gap-4 pl-4 border-l border-white/10 ml-4 mt-1 mb-4">
                            {link.megaMenu.map((cat) => (
                              <div key={cat.category}>
                                <span className="px-3 py-1 text-[10px] font-black text-white/40 uppercase tracking-widest block mb-2">
                                  {cat.category}
                                </span>
                                <div className="flex flex-col gap-1">
                                  {cat.links.map((sub) => (
                                    <Link
                                      key={sub.label}
                                      to={sub.to}
                                      onClick={() => { setOpen(false); setMobileAdmissionsOpen(false); }}
                                      className="px-3 py-2 text-[15px] text-white/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : link.to ? (
                      <Link
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className="px-4 py-3 text-lg text-white/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium block"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="px-4 py-3 text-lg text-white/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium block"
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* ================= ABOUT MEGA MENU (SCREEN CENTERED) ================= */}
      <AnimatePresence>
        {showAboutMenu && (
          <div
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            onMouseEnter={keepAboutOpen}
            onMouseLeave={closeAbout}
          >
            <div className="pointer-events-auto">
              <AboutMegaMenu onClose={() => setShowAboutMenu(false)} />
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= ACADEMICS MEGA MENU (SCREEN CENTERED) ================= */}
      <AnimatePresence>
        {showAcademicsMenu && (
          <div
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            onMouseEnter={keepAcademicsOpen}
            onMouseLeave={closeAcademics}
          >
            <div className="pointer-events-auto">
              <AcademicsMegaMenu onClose={() => setShowAcademicsMenu(false)} />
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
