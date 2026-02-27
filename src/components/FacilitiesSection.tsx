import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ChevronLeft,
  ChevronRight,
  Building,
  Dumbbell,
  GraduationCap,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = [
  { id: "infrastructure", label: "Infrastructure", icon: Building },
  { id: "academic", label: "Academic", icon: GraduationCap },
  { id: "sports", label: "Sports & Life", icon: Dumbbell },
];

const facilitiesData = {
  infrastructure: [
    {
      name: "Smart Classrooms",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    },
    {
      name: "Modern Laboratories",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
    },
    {
      name: "Hostel",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    },
    {
      name: "Transportation",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    },
  ],
  academic: [
    {
      name: "Research Farms",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80",
    },
    {
      name: "Library",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80",
    },
  ],
  sports: [
    {
      name: "Modern Gym",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    },
    {
      name: "Sports Complex",
      image:
        "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=600&q=80",
    },
  ],
};

const FacilitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState("infrastructure");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="facilities"
      className="py-20 md:py-28 bg-background overflow-hidden"
    >
      <div ref={ref}>
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">
                Infrastructure
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                World-Class Facilities
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 mb-10">
          <Tabs
            defaultValue="infrastructure"
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="bg-muted/50 p-1 h-auto flex-wrap justify-start md:justify-center gap-2 rounded-2xl">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2 transition-all"
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent
                key={cat.id}
                value={cat.id}
                className="mt-8 outline-none"
              >
                <div
                  ref={cat.id === activeTab ? scrollRef : null}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                  style={{ scrollbarWidth: "none" }}
                >
                  <AnimatePresence mode="popLayout">
                    {facilitiesData[cat.id as keyof typeof facilitiesData].map(
                      (f, i) => (
                        <motion.div
                          key={f.name}
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 20 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex-shrink-0 w-[280px] md:w-[340px] h-[260px] rounded-2xl overflow-hidden relative group cursor-pointer snap-start"
                        >
                          <img
                            src={f.image}
                            alt={f.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                            <h3 className="font-serif text-xl font-bold text-cream">
                              {f.name}
                            </h3>
                            <div className="h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-16 mt-2" />
                          </div>
                        </motion.div>
                      ),
                    )}
                  </AnimatePresence>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
