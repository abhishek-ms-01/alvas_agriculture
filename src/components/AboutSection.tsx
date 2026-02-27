import { motion } from "framer-motion";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import { GraduationCap, Users, BookOpen, FlaskConical, Quote } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Years of Excellence", value: 25 },
  { icon: Users, label: "Students Enrolled", value: 2500 },
  { icon: BookOpen, label: "Experienced Faculty", value: 120 },
  { icon: FlaskConical, label: "Research Projects", value: 85 },
];

const StatCard = ({ icon: Icon, label, value, visible }: { icon: any; label: string; value: number; visible: boolean }) => {
  const count = useCountUp(value, 2000, visible);
  return (
    <div className="text-center p-6">
      <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-accent/10 flex items-center justify-center">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <p className="text-3xl md:text-4xl font-serif font-bold text-primary">{count}+</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80"
              alt="Campus"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl overflow-hidden shadow-xl hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=80"
                alt="Agriculture"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">About Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy of Agricultural Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Alva's Agricultural College, Moodbidri, is a premier institution dedicated to advancing agricultural education and research. Nestled in the lush greenery of Karnataka, our college combines traditional wisdom with modern scientific approaches.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With state-of-the-art facilities, expert faculty, and a commitment to sustainable farming practices, we prepare students to become the agricultural leaders of tomorrow.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-2xl shadow-lg p-6 border"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} visible={isVisible} />
          ))}
        </motion.div>

        {/* Chairman Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary animate-spin-slow" style={{ animationDuration: "8s" }} />
              <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
                  alt="Dr. M. Mohan Alva"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <Quote className="w-8 h-8 text-accent/40 mx-auto mb-4" />
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
              "Education is the most powerful weapon which you can use to change the world. At Alva's, we cultivate not just crops, but minds that will feed the future."
            </p>
            <p className="font-bold text-primary text-lg">Dr. M. Mohan Alva</p>
            <p className="text-muted-foreground text-sm">Chairman, Alva's Education Foundation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
