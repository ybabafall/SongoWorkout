import { motion } from "framer-motion";
import img1 from "@/assets/IMG_1008-optimized.jpg";
import img2 from "@/assets/IMG_1009-optimized.jpg";
import img3 from "@/assets/IMG_1012-optimized.jpg";
import img4 from "@/assets/IMG_1013-optimized.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: img1,
      alt: "Force brute - Pull-ups",
      title: "Puissance du dos",
      description: "Tractions au poids du corps. Le dos se forge dans l'effort."
    },
    {
      id: 2,
      src: img2,
      alt: "Intensité maximale - Dips",
      title: "Focus total",
      description: "Chaque répétition compte. Le mental dirige le corps."
    },
    {
      id: 3,
      src: img3,
      alt: "Repos du guerrier",
      title: "Transformation visible",
      description: "Le physique reflète la volonté. Les résultats parlent."
    },
    {
      id: 4,
      src: img4,
      alt: "Concentration absolue - Push-ups",
      title: "Discipline incarnée",
      description: "La pompe parfaite. La technique forge le champion."
    }
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Header */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16">
        <div className="text-center">
          <motion.div
            className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 rounded-lg backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm text-white/90 font-mono tracking-widest uppercase">La transformation</p>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent"
            style={{ textShadow: '0 4px 30px rgba(255, 255, 255, 0.3), 0 2px 40px rgba(249, 115, 22, 0.2)', backgroundSize: '200% auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Résultats concrets
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-white/50"></div>
            <div className="h-2 w-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-white/50"></div>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-body px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Poids du corps. Discipline. Puissance. Voici ce que la volonté produit.
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-white/30 transition-all duration-500 sm:hover:scale-[1.02] shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-auto"
                  style={{ transform: 'translateZ(0)' }}
                />
                {/* Overlay léger seulement en bas pour le texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-1 sm:mb-2 tracking-tight drop-shadow-lg">
                  {image.title}
                </h3>
                <p className="text-xs sm:text-sm text-white leading-relaxed font-body drop-shadow-md">
                  {image.description}
                </p>
              </div>

              {/* Luminous border effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 border-2 border-white/20 rounded-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;