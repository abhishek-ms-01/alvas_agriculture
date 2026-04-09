import { Home, ChevronRight, Building, Leaf, Award, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PageHero from "@/components/PageHero";
import "./admissions/Admissions.css";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const uniqueFeatures = [
  "42 MoUs with leading Universities and Organizations of National and International repute",
  "15+ add on state of the art research labs for innovation, product development and student startups",
  ">100 guest lectures in a year",
  "Well qualified and experienced teaching staff with Doctoral Degree in various Disciplines/Streams",
  "30+ Clubs such as Rostrum-Speakers Club, Srishti-Nature Club, Entrepreneurship Development Centers",
  "UPSC Civil Service Training Centers, GATE Coaching and SSB Training club for joining Indian Armed Forces",
  "Authorized Cambridge English Language Assessment training and Examination Center",
  "1000 MBPS Wi-Fi enabled Campus",
  "24 x 7 Health care facility as the AEF has 250 bedded multi-specialty hospital with Homeopathy and Naturopathy Medical Colleges situated very close to the Campus",
  "Excellent Placement Cell in the Campus",
  "Institute has well-furnished in campus hostels with modern amenities",
  "State of the art Indoor and Outdoor games facilities",
  "College provides excellent transport facility",
  "Multi-gym facility"
];

export default function AEF() {
  return (
    <div className="adm-page overflow-x-hidden">
      <PageBackground count={90} color="22,101,52" opacity={0.13} />
      <Header />

      <main>
        {/* ── HERO ── */}
        <PageHero
          badgeIcon={<Building size={14} />}
          badgeText="About the Foundation"
          title={<>Alva's Education <span className="text-accent underline decoration-accent/30 underline-offset-8">Foundation</span></>}
          subtitle="A Brief Note on Alva's Institute of Agricultural Sciences & Technology"
          stats={[
            { bold: "1995", text: "Established" },
            { bold: "26,000+", text: "Students" },
            { bold: "22", text: "Institutes" },
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
            <span className="adm-cur text-deep-green">AEF</span>
          </div>
        </nav>

        <div className="adm-body container mx-auto px-6 py-10 space-y-16">
          
          {/* Location details */}
          <motion.div {...fadeIn} className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-sm font-bold mb-4">
                <MapPin size={16} className="text-accent" />
                SHOBHAVANA CAMPUS, MIJAR-574225, MANGALORE, D.K.
             </div>
          </motion.div>

          {/* About AEF */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-6 flex items-center gap-3">
              <Building className="text-accent w-6 h-6" /> About Alva's Education Foundation
            </h2>
            <div className="adm-info-box">
              <p className="mb-4">
                <strong>Alva’s Education Foundation (AEF)</strong> established in 1995 with the vision of its Chairman Dr. M. Mohan Alva has succeeded in making Moodbidri an Educational hub in the South Canara Region, with more than 26000 students pursuing various courses ranging from primary to post-graduate courses in Social Sciences, Pure Sciences, Engineering, Agriculture and Management.
              </p>
              <p className="mb-4">
                AEF has become the center of learning for the entire State of Karnataka. There are 22 Institutes functioning under the AEF banner. AEF has students not only from Indian States but also from various countries across the globe.
              </p>
              <p className="mb-4">
                The commitment of AEF towards the Society is evident from the level and quality of infrastructure created for the purpose of imparting traditional as well as contemporary education.
              </p>
              <p>
                Alva’s Education Foundation name is synonymous with discipline, punctuality, humility and fulfilment with an aim of holistic development of students who will ultimately become responsible citizens of the country.
              </p>
            </div>
          </motion.section>

          {/* About AIAST */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-6 flex items-center gap-3">
              <Leaf className="text-accent w-6 h-6" /> Alva’s Institute of Agricultural Sciences and Technology (AIAST)
            </h2>
            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
              <p className="text-slate-700 leading-relaxed font-medium mb-4">
                AIAST is a premier Farm Science Institute of Alva’s Education Foundation established in the Year 2025 offering B.Sc.(Hons.) Agriculture and B. Tech. (Food Technology), which is the first Agriculture College in Coastal Karnataka affiliated to Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences, Iruvakki, Shivamogga.
              </p>
              <p className="text-slate-700 leading-relaxed font-medium">
                AIAST is strategically located adjacent to Moodbidri - Mangalore National Highway, which is 24 kms from Mangalore International Airport. It has a lush green campus over 144 acres spread on a famous herbal garden with more than two thousand varieties of herbal plants with 30 acres of Alva’s SHOBHAVANA.
              </p>
            </div>
          </motion.section>

          {/* Unique Features */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-black text-deep-green mb-8 flex items-center gap-3">
              <Award className="text-accent w-6 h-6" /> Unique Features of the Campus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {uniqueFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4 items-start bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:border-accent/30 transition-colors">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
