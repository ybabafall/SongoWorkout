import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Programs = () => {
  const navigate = useNavigate();

  const plans = [
    {
      id: 1,
      name: "Starter",
      tagline: "Commence ton ascension",
      features: [
        "Programme structuré selon ton niveau",
        "Accès à la communauté WhatsApp",
        "1 séance de groupe live par semaine",
        "Feedback quotidien entre membres"
      ],
      highlight: false,
      cta: "Commencer"
    },
    {
      id: 2,
      name: "Performance",
      tagline: "Accélère ta transformation",
      features: [
        "Tout le Starter Plan",
        "Suivi plus intensif, objectifs précis",
        "Challenge collectif hebdomadaire",
        "Pour ceux qui veulent aller plus loin"
      ],
      highlight: true,
      cta: "Passer au niveau supérieur"
    },
    {
      id: 3,
      name: "VIP",
      tagline: "Coaching sur-mesure",
      features: [
        "Coaching individuel 1:1",
        "Programme d'entraînement personnalisé",
        "Appels privés avec le coach",
        "Ajustements hebdomadaires",
        "Accès direct WhatsApp avec le coach",
        "Sans engagement"
      ],
      highlight: false,
      cta: "Rejoindre le VIP"
    }
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-1 h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
      <div className="absolute bottom-20 right-0 w-1 h-40 bg-gradient-to-b from-transparent via-orange-500/30 to-transparent shadow-[0_0_20px_rgba(249,115,22,0.1)]"></div>

      <div className="container mx-auto relative z-10 px-6 md:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4 px-4 py-2 border border-white/20 rounded-lg backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-ui-base text-white/90 font-mono tracking-widest uppercase">Programmes</p>
            </motion.div>

            <motion.h2
              className="text-display-xl font-display font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent"
              style={{ textShadow: '0 4px 30px rgba(255, 255, 255, 0.3), 0 2px 40px rgba(249, 115, 22, 0.2)', backgroundSize: '200% auto' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choisis ton combat
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
              className="text-body-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Trois niveaux d'engagement. Une seule destination : la transformation.
            </motion.p>
          </div>

          {/* Plans grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`group relative ${plan.highlight ? 'lg:-mt-4 lg:mb-4' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              >
                {/* Highlight badge */}
                {plan.highlight && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    <div className="px-4 py-1 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-ui-xs font-bold tracking-widest uppercase rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                      Populaire
                    </div>
                  </motion.div>
                )}

                {/* Card */}
                <motion.div
                  className={`relative h-full p-8 rounded-lg border ${
                    plan.highlight
                      ? 'bg-gradient-to-br from-orange-500/10 to-amber-500/5 border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.15),0_0_80px_rgba(251,146,60,0.1)]'
                      : 'bg-neutral-900/50 border-neutral-800 hover:border-white/20'
                  } backdrop-blur-xl transition-all duration-500 hover:scale-105 overflow-hidden shadow-2xl flex flex-col`}
                  whileHover={{ scale: 1.05, y: -5 }}
                >

                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                    backgroundSize: '30px 30px'
                  }}></div>

                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Plan name */}
                    <h3 className={`text-heading-xl font-display font-bold mb-2 tracking-tight ${
                      plan.highlight ? 'text-white' : 'text-white'
                    }`}>
                      {plan.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-body-base text-neutral-300 mb-8 font-body">
                      {plan.tagline}
                    </p>

                    {/* Divider */}
                    <div className={`h-px mb-8 ${plan.highlight ? 'bg-white/30' : 'bg-neutral-800'}`}></div>

                    {/* Features */}
                    <ul className="space-y-4 mb-10 flex-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.highlight ? 'bg-white/20' : 'bg-neutral-800'
                          } mt-0.5`}>
                            <Check className={`w-3 h-3 ${plan.highlight ? 'text-white' : 'text-neutral-400'}`} strokeWidth={3} />
                          </div>
                          <span className="text-body-sm text-neutral-200 font-body leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA - Touch target optimisé */}
                    <motion.button
                      onClick={() => navigate('/checkout')}
                      className={`w-full min-h-[56px] py-4 px-6 text-base font-bold tracking-wide transition-all duration-300 rounded-lg uppercase active:scale-95 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-500 hover:to-red-500 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] focus-visible:ring-offset-neutral-900'
                          : 'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] focus-visible:ring-offset-neutral-900'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.cta}
                    </motion.button>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="text-center">
            <motion.p
              className="text-body-base text-neutral-300 font-body mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Tous les plans incluent un accès à l'esprit meute.
            </motion.p>
            <motion.p
              className="text-ui-base text-neutral-400 font-mono tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Entraînements au poids du corps · Pas de matériel nécessaire · Progression garantie
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
