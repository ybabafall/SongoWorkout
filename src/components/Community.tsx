import { Users, MessageCircle, Video, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import communityImage from "@/assets/IMG_1009-optimized.jpg";

const Community = () => {
  const features = [
    {
      id: 1,
      icon: Users,
      title: "La meute",
      description: "Tu n'es pas seul. Chaque membre avance avec toi. On se pousse, on se motive, on s'inspire.",
      color: "text-white"
    },
    {
      id: 2,
      icon: Video,
      title: "Séances live",
      description: "Chaque semaine, on transpire ensemble. Sessions de groupe en direct pour forger l'esprit collectif.",
      color: "text-orange-400"
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "WhatsApp 24/7",
      description: "Feedback quotidien, partage de victoires, soutien constant. La communauté est toujours là.",
      color: "text-white"
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Progression collective",
      description: "Chaque transformation inspire la meute. Tes victoires deviennent notre force.",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="community" className="py-16 md:py-24 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent shadow-[0_0_20px_rgba(249,115,22,0.1)]"></div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-40 right-10 w-40 h-40 border border-white/10 rotate-45 rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.05)]"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 border border-cyan-400/10 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.05)]"></div>

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
              <p className="text-ui-base text-white/90 font-mono tracking-widest uppercase">Communauté</p>
            </motion.div>

            <motion.h2
              className="text-display-xl font-display font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent"
              style={{ textShadow: '0 4px 30px rgba(255, 255, 255, 0.3), 0 2px 40px rgba(249, 115, 22, 0.2)', backgroundSize: '200% auto' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              L'esprit meute
            </motion.h2>

            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/50"></div>
              <div className="h-2 w-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/50"></div>
            </motion.div>

            <motion.p
              className="text-body-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-body mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Seul, tu vas vite. Ensemble, on va loin.
            </motion.p>
            <motion.p
              className="text-body-base text-neutral-300 max-w-2xl mx-auto font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Songo Workout, c'est plus qu'un programme. C'est une famille de guerriers<br />
              qui partagent la même volonté de transformation.
            </motion.p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isOrange = index % 2 === 1;
              return (
                <motion.div
                  key={feature.id}
                  className={`group relative p-8 rounded-xl backdrop-blur-xl transition-all duration-500 hover:scale-105 overflow-hidden shadow-2xl ${
                    isOrange
                      ? 'bg-gradient-to-br from-orange-600/20 to-red-600/10 border border-orange-500/30 hover:border-orange-400/50 shadow-[0_8px_32px_rgba(249,115,22,0.2)] hover:shadow-[0_12px_48px_rgba(249,115,22,0.4)]'
                      : 'bg-white/5 border border-white/10 hover:border-white/30 shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_48px_rgba(255,255,255,0.15)]'
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isOrange
                      ? 'bg-gradient-to-br from-orange-500/10 to-red-500/5'
                      : 'bg-gradient-to-br from-white/10 to-transparent'
                  }`}></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`mb-6 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      isOrange
                        ? 'bg-gradient-to-br from-orange-500 to-red-600 shadow-[0_4px_24px_rgba(249,115,22,0.4)]'
                        : 'bg-gradient-to-br from-white/10 to-white/5 shadow-[0_4px_24px_rgba(255,255,255,0.1)]'
                    }`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-heading-lg font-display font-bold text-white mb-4 tracking-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-body-base text-neutral-200 leading-relaxed font-body">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 opacity-20 ${
                    isOrange ? 'bg-gradient-to-br from-orange-400 to-transparent' : 'bg-gradient-to-br from-white to-transparent'
                  }`} style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA box */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full"></div>

            <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-white/20 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={communityImage}
                  alt="Songo Workout Community"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-50"
                  style={{
                    objectPosition: 'center',
                    transform: 'translateZ(0)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/70"></div>
              </div>

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>

              <div className="relative z-10 p-10 md:p-12 text-center">
                {/* Text */}
                <h3 className="text-heading-xl font-display font-bold text-white mb-4 tracking-tight">
                  Prêt à rejoindre la meute ?
                </h3>
                <p className="text-body-base text-neutral-300 font-body mb-8 max-w-2xl mx-auto">
                  Chaque mouvement te rapproche de ta puissance intérieure.<br />
                  La transformation commence maintenant.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <p className="text-display-lg font-display font-bold text-white mb-1 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">100+</p>
                    <p className="text-ui-sm text-neutral-400 font-mono uppercase tracking-wider">Lionceaux</p>
                  </div>
                  <div className="text-center border-x border-neutral-800">
                    <p className="text-display-lg font-display font-bold text-orange-400 mb-1 drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]">24/7</p>
                    <p className="text-ui-sm text-neutral-400 font-mono uppercase tracking-wider">Soutien</p>
                  </div>
                  <div className="text-center">
                    <p className="text-display-lg font-display font-bold text-white mb-1 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">1</p>
                    <p className="text-ui-sm text-neutral-400 font-mono uppercase tracking-wider">Meute</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-body-lg text-white font-display italic mb-6">
                  "C'est toi et ta volonté"
                </p>
                <p className="text-ui-base text-neutral-400 font-mono tracking-wider uppercase mb-10">
                  Chaque goutte de sueur est une victoire
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => window.location.href = '/checkout'}
                  className="min-h-[56px] px-10 py-4 text-base font-bold tracking-wide transition-all duration-300 overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-500 hover:to-red-500 active:scale-95 shadow-[0_0_40px_rgba(249,115,22,0.4),0_0_60px_rgba(220,38,38,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6),0_0_80px_rgba(220,38,38,0.4)] rounded-lg hover:scale-105 uppercase"
                >
                  Rejoindre la meute
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
