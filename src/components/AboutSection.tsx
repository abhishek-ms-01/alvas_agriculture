import { motion } from "framer-motion";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import {
  GraduationCap,
  Users,
  BookOpen,
  FlaskConical,
} from "lucide-react";

/* ---------------- STATS ---------------- */

const stats = [
  { icon: GraduationCap, label: "Years of Excellence", value: 25 },
  { icon: Users, label: "Students Enrolled", value: 2500 },
  { icon: BookOpen, label: "Experienced Faculty", value: 120 },
  { icon: FlaskConical, label: "Research Projects", value: 85 },
];

const StatCard = ({
  icon: Icon,
  label,
  value,
  visible,
}: {
  icon: any;
  label: string;
  value: number;
  visible: boolean;
}) => {
  const count = useCountUp(value, 2000, visible);

  return (
    <div className="text-center p-6">
      <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-accent/10 flex items-center justify-center">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
        {count}+
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

/* ---------------- COURSES ---------------- */

const courses = [
  {
    title: "B.Sc. (Hons) Agriculture",
    duration: "4 Years",
    eligibility: "10+2 with Science",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
  },
  {
    title: "B.Tech (Food Technology)",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800&q=80",
  },
];

/* ---------------- ABOUT SECTION ---------------- */

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        
        {/* ABOUT CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://npf-unlayer.s3.ap-south-1.amazonaws.com/unlayer%2Fimages%2F1751298239226-aiet_compressed.jpg"
              alt="Alva's Agricultural College"
              className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black text-deep-green mb-8 leading-[1.1]">
              A Legacy of <br />
              <span className="text-accent text-3xl md:text-4xl lg:text-5xl underline decoration-accent/30 underline-offset-8">
                Agricultural Excellence
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                Alva's Agricultural College, Moodbidri, is a premier institution
                dedicated to advancing agricultural education and research.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic border-l-4 border-accent pl-5">
                With state-of-the-art facilities and expert faculty, we prepare
                students to become agricultural leaders of tomorrow.
              </p>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-2xl shadow-lg p-6 border mb-28"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} visible={isVisible} />
          ))}
        </motion.div>

        {/* ================= COURSES SECTION (ADDED) ================= */}

        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold">
            Programs
          </p>
          <h3 className="font-serif text-4xl md:text-5xl font-black text-deep-green mt-3">
            Our Courses
          </h3>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Industry-focused programs designed to shape the future of
            agriculture and food technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer
                         transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/90 via-deep-green/40 to-transparent" />

              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 p-8 text-white">
                <h4 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                  {course.title}
                </h4>
                <div className="flex gap-6 text-sm opacity-90">
                  <span>⏱ {course.duration}</span>
                  <span>🎓 {course.eligibility}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;