import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Admissions", href: "#admissions" },
  { label: "Facilities", href: "#facilities" },
  { label: "Research", href: "#research" },
  { label: "Highlights", href: "#highlights" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Placements", href: "#placements" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-deep-green/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:glow-gold transition-all">
            <Leaf className="w-5 h-5 text-deep-green" />
          </div>
          <div className="hidden sm:block">
            <p className="font-serif font-bold text-cream text-sm leading-tight">
              Alva's Agricultural
            </p>
            <p className="text-cream/70 text-xs">College, Moodbidri</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-3 py-2 text-sm font-medium text-cream/80 hover:text-accent transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden text-cream p-2">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-deep-green border-primary/20 w-72">
            <SheetTitle className="text-cream font-serif">Menu</SheetTitle>
            <nav className="flex flex-col gap-2 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-cream/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
