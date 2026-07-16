import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Calendar, Heart, Trophy } from "lucide-react";

const activities = [
  { icon: Users, title: "Student Clubs", desc: "Agricultural Society, Eco Club, Debate Club, and more.", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80" },
  { icon: Calendar, title: "Annual Events", desc: "Krishi Mela, Science Exhibition, Cultural Fest, and Sports Day.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80" },
  { icon: Heart, title: "NSS & Community", desc: "National Service Scheme, rural outreach, and village adoption programs.", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80" },
  { icon: Trophy, title: "Sports", desc: "Cricket, football, athletics, kabaddi, and indoor games facilities.", image: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=600&q=80" },
];

const StudentLifeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Campus Life</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Student Life</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden h-64 cursor-pointer"
            >
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/90 via-deep-green/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-cream">
                <div className="flex items-center gap-2 mb-2">
                  <a.icon className="w-5 h-5 text-accent" />
                  <h3 className="font-serif text-xl font-bold">{a.title}</h3>
                </div>
                <p className="text-cream/70 text-sm">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
