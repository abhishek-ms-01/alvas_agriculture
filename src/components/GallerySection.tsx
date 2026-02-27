import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

const categories = ["All", "Campus", "Labs", "Fields", "Events", "Students"];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80", cat: "Campus", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80", cat: "Labs", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80", cat: "Fields", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&q=80", cat: "Fields", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80", cat: "Events", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80", cat: "Students", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", cat: "Campus", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", cat: "Fields", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80", cat: "Students", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80", cat: "Events", h: "h-64" },
  { src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80", cat: "Fields", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80", cat: "Campus", h: "h-72" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.cat === filter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Visual Tour</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Gallery</h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-primary/10 border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightbox(img.src)}
              >
                <div className={`${img.h} rounded-xl overflow-hidden relative`}>
                  <img
                    src={img.src}
                    alt={img.cat}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-deep-green/0 group-hover:bg-deep-green/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-cream font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {img.cat}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-white/80 hover:text-white" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox.replace("w=600", "w=1200")}
              alt="Gallery"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
