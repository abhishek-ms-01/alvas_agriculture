import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, CheckCircle, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = [
  { icon: FileText, title: "Apply Online", desc: "Fill out the application form with your details" },
  { icon: CheckCircle, title: "Entrance Process", desc: "Appear for the entrance examination" },
  { icon: ArrowRight, title: "Admission Confirmation", desc: "Complete document verification & enrollment" },
];

const AdmissionsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="admissions" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-primary via-primary to-deep-green rounded-3xl p-8 md:p-12 text-center mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=50)", backgroundSize: "cover" }} />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">Begin Your Agricultural Journey</h2>
            <p className="text-cream/80 max-w-xl mx-auto mb-8">Admissions are now open for the academic year 2025-26. Take the first step towards a rewarding career in agriculture.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-semibold">
                Apply Now
              </Button>
              <Button variant="outline" className="border-cream/40 text-cream hover:bg-cream/10 rounded-full px-8 py-6 text-base">
                <Download className="w-4 h-4 mr-2" /> Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center relative">
                <step.icon className="w-7 h-7 text-accent" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-xl mx-auto bg-card rounded-2xl shadow-xl p-8 border"
        >
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">Admission Enquiry</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <Input placeholder="Full Name" className="rounded-xl h-12" />
              </div>
              <div className="relative">
                <Input type="email" placeholder="Email Address" className="rounded-xl h-12" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input type="tel" placeholder="Phone Number" className="rounded-xl h-12" />
              <Input placeholder="Course Interested" className="rounded-xl h-12" />
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 text-base font-semibold">
              Submit Enquiry
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
