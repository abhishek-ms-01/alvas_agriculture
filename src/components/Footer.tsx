import { useState, useEffect } from "react";
import { Leaf, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Admissions", href: "#admissions" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Placements", href: "#placements" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-deep-green text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Leaf className="w-5 h-5 text-deep-green" />
              </div>
              <div>
                <p className="font-serif font-bold text-sm">Alva's Agricultural College</p>
                <p className="text-cream/60 text-xs">Moodbidri, Karnataka</p>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed">
              A premier institution dedicated to excellence in agricultural education, research, and rural development under the Alva's Education Foundation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-cream/60 hover:text-accent text-sm transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-cream/60 text-sm">
              <p>Alva's Agricultural College</p>
              <p>Moodbidri, Dakshina Kannada</p>
              <p>Karnataka - 574227</p>
              <p className="mt-3">📞 +91 8258 238 900</p>
              <p>✉️ info@alvas.org</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/40 text-sm">
          © {new Date().getFullYear()} Alva's Agricultural College, Moodbidri. All rights reserved.
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-accent/40 hover:shadow-xl z-50 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
