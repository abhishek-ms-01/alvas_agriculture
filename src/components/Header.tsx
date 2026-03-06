import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Admissions", href: "#" },
  { label: "Academics", href: "#" },
  { label: "Research", href: "#" },
  { label: "Placements", href: "#", to: "/placements" },
  { label: "Campus Life", href: "#" },
  { label: "Exposure Visit", href: "#", to: "/exposure-visit" },
  { label: "Internship/IPT", href: "#", to: "/internship" },
  { label: "Contact Us", href: "#", to: "/contact-us" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-deep-green/95 backdrop-blur-md shadow-lg py-3"
        : "bg-transparent py-6"
        }`}
    >
      {/* Centered Content Width */}
      <div className="mx-auto max-w-[95%] flex items-center pl-4 pr-6">

        {/* ================= LOGO SECTION ================= */}
        <a
          href="#"
          className="flex items-center gap-4 max-w-[420px]"
        >
          <img
            src="/alvas-org-logo-white.png"
            alt="Alva's Logo"
            className="h-16 w-auto object-contain drop-shadow-md"
          />

          <div className="hidden sm:block">
            <p className="font-sans font-black text-white text-2xl leading-none tracking-wider uppercase">
              ALVA'S
            </p>
            <p className="text-white/80 text-[11px] font-medium tracking-[0.14em] uppercase leading-tight mt-0.5">
              Institute of Agricultural Science &amp; Technology
            </p>
          </div>
        </a>

        {/* 🔴 FLEX SPACER – THIS CREATES THE GAP */}
        <div className="flex-1" />

        {/* ================= NAVIGATION ================= */}
        <div className="flex items-center gap-4">

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="relative px-1 py-1 text-[13px] font-bold uppercase tracking-wider text-cream/80 hover:text-accent transition-colors duration-300 group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-1 py-1 text-[13px] font-bold uppercase tracking-wider text-cream/80 hover:text-accent transition-colors duration-300 group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="lg:hidden text-cream p-2">
              <Menu className="w-6 h-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-deep-green border-primary/20 w-72"
            >
              <SheetTitle className="text-cream font-serif">
                Menu
              </SheetTitle>

              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) =>
                  link.to ? (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-lg text-cream/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-lg text-cream/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
};

export default Header;