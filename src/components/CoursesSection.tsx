import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "B.Sc Agriculture",
    duration: "4 Years",
    eligibility: "10+2 with Science",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
    description: "Comprehensive undergraduate program covering crop science, soil management, and agricultural economics.",
  },
  {
    title: "M.Sc Agriculture",
    duration: "2 Years",
    eligibility: "B.Sc Agriculture",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    description: "Advanced postgraduate program with specializations in plant breeding, agronomy, and biotechnology.",
  },
  {
    title: "Diploma in Agriculture",
    duration: "2 Years",
    eligibility: "10th Pass",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
    description: "Practical-oriented diploma program focused on modern farming techniques and rural development.",
  },
];

const CourseCard = ({ course, index }: { course: typeof courses[0]; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="perspective-1000 h-[420px] cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl" style={{ backfaceVisibility: "hidden" }}>
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-green/90 via-deep-green/40 to-transparent" />
          <div className="absolute bottom-0 p-6 text-cream">
            <h3 className="font-serif text-2xl font-bold mb-2">{course.title}</h3>
            <div className="flex items-center gap-4 text-sm text-cream/70">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{course.duration}</span>
              <span className="flex items-center gap-1"><Award className="w-4 h-4" />{course.eligibility}</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl bg-primary p-8 flex flex-col justify-center text-primary-foreground shadow-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="font-serif text-2xl font-bold mb-4">{course.title}</h3>
          <p className="text-primary-foreground/80 mb-2"><strong>Duration:</strong> {course.duration}</p>
          <p className="text-primary-foreground/80 mb-4"><strong>Eligibility:</strong> {course.eligibility}</p>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">{course.description}</p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full w-fit">
            Learn More <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="courses" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Programs</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Courses</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Discover our comprehensive range of agricultural programs designed to shape the future of farming
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <CourseCard key={course.title} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
