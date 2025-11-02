import { motion } from "framer-motion";

const Philosophy = () => {
  const levels = [
    {
      id: 1,
      name: "Lionceau",
      stage: "Le début",
      description: "Tu prends le contrôle. Tu découvres ta force intérieure. Chaque mouvement est une décision.",
      color: "from-orange-500/20 to-amber-500/10",
      glowColor: "shadow-[0_0_30px_rgba(249,115,22,0.2)]"
    },
    {
      id: 2,
      name: "Lion",
      stage: "La progression",
      description: "Tu forges ton mental. Tu sculptes ton corps. La discipline devient ton identité.",
      color: "from-white/15 to-amber-400/10",
      glowColor: "shadow-[0_0_40px_rgba(255,255,255,0.15)]"
    },
    {
      id: 3,
      name: "Lion Dominant",
      stage: "La maîtrise",
      description: "Tu incarnes la puissance. Tu inspires la troupe. Ta transformation est totale.",
      color: "from-neutral-900/90 to-black",
      glowColor: "shadow-[0_0_50px_rgba(255,255,255,0.3)]"
    }
  ];

  return (
    <section id="philosophy" className="py-16 md:py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Accent lines with glow */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent shadow-[0_0_20px_rgba(249,115,22,0.1)]"></div>

      <div className="container mx-auto relative z-10 px-6 md:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-block mb-4 px-4 py-2 border border-white/20 rounded-lg backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-ui-base text-white/90 font-mono tracking-widest uppercase">Philosophie</p>
            </motion.div>

            <motion.h2
              className="text-display-xl font-display font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent"
              style={{ textShadow: '0 4px 30px rgba(255, 255, 255, 0.3), 0 2px 40px rgba(249, 115, 22, 0.2)', backgroundSize: '200% auto' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Du lionceau au lion dominant
            </motion.h2>

            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/50"></div>
              <div className="h-2 w-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/50"></div>
            </motion.div>

            <motion.p
              className="text-body-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-body mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Chaque membre est un lionceau. Chaque entraînement est une bataille.
            </motion.p>
            <motion.p
              className="text-body-base text-neutral-300 max-w-2xl mx-auto font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Tu progresses à travers des niveaux. Tu deviens lion. Puis lion dominant.<br />
              Ce n'est pas juste du sport. C'est une transformation totale.
            </motion.p>
          </div>

          {/* Levels grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {levels.map((level, index) => (
              <motion.div
                key={level.id}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              >
                {/* Card */}
                <motion.div
                  className={`relative h-full p-8 rounded-lg bg-gradient-to-br ${level.color} border ${
                    level.id === 3 ? 'border-white/30' : 'border-white/10'
                  } backdrop-blur-xl transition-all duration-500 hover:scale-105 ${level.glowColor} overflow-hidden shadow-2xl`}
                  whileHover={{ scale: 1.05, y: -5 }}
                >

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Stage tag */}
                    <div className="inline-block mb-4 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-sm border border-white/10">
                      <p className={`text-ui-xs font-mono tracking-widest uppercase ${
                        level.id === 1 ? 'text-orange-400' :
                        level.id === 2 ? 'text-white/90' :
                        'text-neutral-300'
                      }`}>
                        {level.stage}
                      </p>
                    </div>

                    {/* Name */}
                    <h3 className={`text-heading-lg font-display font-bold mb-4 tracking-tight ${
                      level.id === 1 ? 'text-orange-400' :
                      level.id === 2 ? 'text-white' :
                      'text-white'
                    }`}>
                      {level.name}
                    </h3>

                    {/* Description */}
                    <p className="text-body-base text-neutral-200 leading-relaxed font-body">
                      {level.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>

                {/* Connecting line (not on last item) */}
                {index < levels.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/50 to-transparent transform -translate-y-1/2 z-20"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="text-center">
            <motion.div
              className="inline-block p-8 bg-neutral-900/50 border border-white/20 rounded-lg backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.p
                className="text-body-lg text-white font-body mb-2 leading-relaxed font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Tu n'es pas seul dans ce voyage.
              </motion.p>
              <motion.p
                className="text-body-base text-neutral-300 font-body mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                La troupe avance ensemble. Chaque victoire est partagée.
              </motion.p>
              <motion.p
                className="text-ui-base text-white/90 font-mono tracking-wider uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                C'est toi et ta volonté
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
