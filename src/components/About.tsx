import { useMemo } from "react";
import { motion } from "framer-motion";
import { Home, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // SVG noise pour la texture papier
  const noise = useMemo(
    () =>
      `url('data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
          <filter id="n">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.035"/>
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#n)"/>
        </svg>
      `)}')`,
    []
  );

  const homeServiceFeatures = [
    {
      icon: Home,
      title: "À votre domicile",
      description: "Nos experts se déplacent avec tout le matériel nécessaire",
    },
    {
      icon: Star,
      title: "Même excellence",
      description: "L'entraînement signature Songo Workout dans le confort de ton intérieur",
    },
    {
      icon: Clock,
      title: "Flexibilité",
      description: "Réservez aux horaires qui vous conviennent",
    },
  ];

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">

          {/* Notre Histoire Section */}
          <div className="py-20 px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-lg font-display font-semibold text-neutral-900 mb-6 animate-spring tracking-tight">
                Notre Histoire
              </h2>
              <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-body-base text-neutral-900/80 leading-relaxed font-body">
                Songo Workout est né d'une vision : créer une communauté de guerriers qui transforment leur corps et leur mental par l'entraînement au poids du corps. Du lionceau au lion dominant, chaque membre progresse à son rythme dans un esprit de troupe unique.
              </p>

              <p className="text-body-base text-neutral-900/80 leading-relaxed font-body">
                Aujourd'hui, Songo Workout s'impose comme une référence dans l'univers du coaching fitness. Notre méthode allie entraînement progressif, suivi personnalisé et communauté soudée pour offrir une transformation physique et mentale sans équivalent.
              </p>

              <div className="bg-white/80 rounded-xl p-8 border border-neutral-900/10">
                <p className="text-body-base text-neutral-900 font-medium italic leading-relaxed font-body text-center">
                  « C'est moi et ma volonté. Chaque membre est unique. Notre mission est de révéler ton plein potentiel par une approche sur mesure qui forge ton mental et sculpte ton corps. »
                </p>
              </div>
            </div>
          </div>

          {/* Expérience à Domicile Section */}
          <div className="py-20 px-6 bg-laboratory-50 -mx-6 relative isolate overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: noise }}
            />

            <div className="relative z-10">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-display-lg font-display font-semibold text-neutral-900 mb-6 tracking-tight"
                >
                  L'Expérience Songo Workout à Domicile
                </motion.h2>
                <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
                <p className="text-body-base text-neutral-700 max-w-3xl mx-auto leading-relaxed font-body">
                  Pour ceux qui privilégient l'intimité de leur intérieur, Songo Workout propose désormais son entraînement signature directement chez toi.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                {homeServiceFeatures.map((feature, i) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.article
                      key={i}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                      className="group relative rounded-3xl bg-white/70 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-white/70 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.3xl)-1px)] before:bg-gradient-to-b before:from-white/60 before:to-white/10 before:opacity-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center"
                    >
                      {/* Icon */}
                      <div className="relative flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-gradient-to-b from-white to-white/40 text-neutral-800 ring-1 ring-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_18px_rgba(0,0,0,0.06)]">
                        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <IconComponent className="h-7 w-7" strokeWidth={1.25} />
                        </div>
                        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/70" />
                        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/[0.02] opacity-70" />
                      </div>

                      {/* Title */}
                      <h3 className="mt-6 whitespace-pre-line font-display text-2xl leading-tight text-neutral-900">
                        {feature.title}
                      </h3>

                      {/* Divider luxe */}
                      <div className="mt-4 flex items-center gap-2">
                        <span className="h-px flex-1 bg-neutral-200" />
                        <span className="h-1 w-8 rounded-full bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 opacity-80" />
                        <span className="h-px flex-1 bg-neutral-200" />
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-sm/6 text-neutral-700">
                        {feature.description}
                      </p>

                      {/* Liseré or au survol */}
                      <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-brand-400/60 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-body-base text-neutral-900/80 leading-relaxed font-body text-center mb-8">
                Le coach se déplace avec tout le matériel nécessaire. Tu bénéficies du même programme personnalisé, du même suivi et de la même qualité d'entraînement que les sessions de groupe.
              </p>
              <p className="text-body-base text-neutral-900/70 leading-relaxed font-body text-center italic">
                Disponible selon ta localisation · Tarif sur devis
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white/80 rounded-xl p-12 text-center shadow-laboratory-medium">
              <h3 className="text-heading-xl font-display font-semibold text-neutral-900 mb-6 tracking-tight leading-tight">
                Commence ta transformation
              </h3>
              <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
              <p className="text-body-base text-neutral-900/85 mb-8 leading-relaxed max-w-2xl mx-auto font-body">
                Rejoins la troupe Songo Workout et commence ton parcours du lionceau au lion dominant.
              </p>
              <button
                onClick={() => navigate('/checkout')}
                className="relative group px-[clamp(2rem,5vw,2.75rem)] py-[clamp(0.4rem,1.2vw,0.6rem)] text-ui-base font-medium transition-all duration-500 overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-500 hover:to-red-500 shadow-[0_4px_12px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.4)] rounded-full hover:scale-105"
              >
                <span className="relative z-10">
                  Rejoindre la troupe
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;