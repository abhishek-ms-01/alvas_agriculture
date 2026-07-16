import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Contact Us</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map + Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5!2d74.99!3d12.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMoodbidri%2C+Karnataka!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Alva's Agricultural College, Moodbidri, Dakshina Kannada, Karnataka - 574227</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-muted-foreground">+91 8258 238 900</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-muted-foreground">info@alvas.org</p>
              </div>

              <div className="flex gap-3 pt-4">
                {socials.map((s) => (
                  <button
                    key={s.label}
                    className="w-10 h-10 rounded-full bg-card border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:shadow-[0_0_15px_hsl(43_80%_50%/0.3)] transition-all"
                    aria-label={s.label}
                  >
                    <s.icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form className="bg-card rounded-2xl shadow-xl p-8 border space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="rounded-xl h-12" />
                <Input type="email" placeholder="Your Email" className="rounded-xl h-12" />
              </div>
              <Input placeholder="Subject" className="rounded-xl h-12" />
              <Textarea placeholder="Your Message" className="rounded-xl min-h-[150px] resize-none" />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 text-base font-semibold">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
