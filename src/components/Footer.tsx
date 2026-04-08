import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  FaBloggerB, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaInstagram, 
  FaWhatsapp 
} from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-college" },
  { label: "Admissions", to: "/admissions/kcet" },
  { label: "Academics", to: "/academics/ug/bsc-agriculture" },
  { label: "Research", to: "/research/about" },
  { label: "Placements", to: "/placements" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "Exposure Visit", to: "/exposure-visit" },
  { label: "Internship/IPT", to: "/internship" },
  { label: "Contact Us", to: "/contact-us" },
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
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/alvas-org-logo-white.png"
                alt="Alva's Logo"
                className="h-16 w-auto object-contain"
              />
              <div>
                <p className="font-sans font-black text-white text-xl leading-none tracking-wider uppercase">ALVA'S</p>
                <p className="text-white/80 text-[10px] font-medium tracking-[0.15em] uppercase leading-tight mt-1">
                  Institute of Agricultural Science &amp; Technology
                </p>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              A premier institution dedicated to excellence in agricultural education, research, and rural development under the Alva's Education Foundation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-white uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-cream/60 hover:text-accent text-sm transition-colors py-1 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-white uppercase tracking-wider text-sm mb-6">Contact Info</h4>
            <div className="space-y-4 text-cream/60 text-sm">
              <div className="flex gap-3">
                <span className="text-accent italic">📍</span>
                <p>Alva's Agricultural College<br />Moodbidri, Dakshina Kannada<br />Karnataka - 574227</p>
              </div>
              <div className="flex gap-3">
                <span className="text-accent italic">📞</span>
                <p>+91 8258 238 900</p>
              </div>
              <div className="flex gap-3">
                <span className="text-accent italic">✉️</span>
                <p>info@alvas.org</p>
              </div>
            </div>
          </div>

          {/* Location & Social */}
          <div className="space-y-4">
            <div>
              <h4 className="font-sans font-bold text-white uppercase tracking-wider text-sm mb-4">LOCATION</h4>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 h-40">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4143736746813!2d74.9926861758652!3d13.072895612646698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3add5bd600001%3A0x6b0ad93f6b0f0f0f!2sAlva's%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1709121234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <div className="mt-6">
                <h4 className="text-[11px] font-black tracking-widest uppercase mb-3 text-white/90">
                  Follow Us
                </h4>
                <div className="flex flex-row flex-nowrap gap-2">
                  <a
                    href="https://alvasengineering.blogspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group shadow-lg"
                  >
                    <FaBloggerB className="text-white text-sm group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.facebook.com/aietmoodbidri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group shadow-lg"
                  >
                    <FaFacebookF className="text-white text-sm group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://twitter.com/aietmoodbidri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group shadow-lg"
                  >
                    <FaTwitter className="text-white text-sm group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.youtube.com/@AlvasInstitute"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group shadow-lg"
                  >
                    <FaYoutube className="text-white text-sm group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.instagram.com/aietmoodbidri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group shadow-lg"
                  >
                    <FaInstagram className="text-white text-sm group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group shadow-lg"
                  >
                    <FaWhatsapp className="text-white text-sm group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-cream/40 text-xs">
          © {new Date().getFullYear()} Alva's Agricultural College, Moodbidri. All rights reserved.
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-accent/40 hover:shadow-xl z-50 ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
