import { Home, ChevronRight, Building, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "../admissions/Admissions.css";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Recognition = () => {
  return (
    <div className="adm-page overflow-x-hidden">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />
      <main>

        {/* ── HERO ── */}
        <PageHero
          badgeIcon={<MapPin size={14} />}
          badgeText="Institution at a Glance"
          title={<>Accreditations &amp; <span className="text-accent underline decoration-accent/30 underline-offset-8">Recognition</span></>}
          subtitle="Formally recognised and approved by leading national regulatory and statutory bodies."
          stats={[
            { bold: "Govt. of Karnataka", text: "Approved" },
            { bold: "K.S.N.U.A.H.S.", text: "Affiliated" },
          ]}
        />

        {/* Breadcrumb */}
        <nav className="adm-breadcrumb py-4 bg-slate-50/50 border-b border-slate-100">
          <div className="adm-breadcrumb-inner container mx-auto px-6 flex items-center gap-2 text-[12px] text-slate-500 font-bold uppercase tracking-widest">
            <Home size={12} className="text-accent" />
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <span><ChevronRight size={12} /></span>
            <span>Institution at a Glance</span>
            <span><ChevronRight size={12} /></span>
            <span className="adm-cur text-deep-green">Accreditations</span>
          </div>
        </nav>

        <div className="adm-body container mx-auto px-6 py-10 space-y-14">

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recognition;
