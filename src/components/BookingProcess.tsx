import { motion } from "framer-motion";
import { Calendar, FileText, CreditCard } from "lucide-react";

const BookingProcess = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      icon: Calendar,
      title: "Choisissez la date\net le créneau",
      description: "Sélectionnez le moment qui vous convient le mieux pour votre session Songo Workout.",
    },
    {
      id: 2,
      number: "02",
      icon: FileText,
      title: "Indiquez vos informations\net vos objectifs",
      description: "Partagez-nous vos objectifs fitness pour que nous préparions votre programme personnalisé.",
    },
    {
      id: 3,
      number: "03",
      icon: CreditCard,
      title: "Choisissez votre\nprogramme",
      description: "Sélectionnez le plan qui correspond à vos ambitions. Rejoignez la troupe dès maintenant.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-neutral-950 via-black to-neutral-950">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <motion.div
              className="inline-block mb-4 px-4 py-2 border border-white/20 rounded-lg backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-ui-base text-white/90 font-mono tracking-widest uppercase">Comment ça marche</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-display-lg font-display font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent"
              style={{ textShadow: '0 4px 30px rgba(255, 255, 255, 0.3), 0 2px 40px rgba(249, 115, 22, 0.2)', backgroundSize: '200% auto' }}
            >
              Deviens lion dominant
            </motion.h2>

            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
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
              className="text-body-base text-white/90 max-w-3xl mx-auto leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              En quelques clics, rejoins la troupe Songo Workout.<br />
              Commence ta transformation dès aujourd'hui.
            </motion.p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {steps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <motion.article
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                  className="group relative rounded-3xl bg-white/5 p-6 shadow-[0_8px_32px_rgba(255,255,255,0.05)] ring-1 ring-white/10 backdrop-blur-xl hover:shadow-[0_12px_48px_rgba(255,255,255,0.15)] hover:ring-white/30 transition-all duration-500"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Badge */}
                  <div className="absolute -left-3 -top-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-3 py-1 text-xs font-medium tracking-wider text-white shadow-[0_4px_24px_rgba(249,115,22,0.4)]">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-white/10 to-white/5 text-white ring-1 ring-white/20 shadow-[0_4px_18px_rgba(255,255,255,0.1)]">
                      <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <IconComponent className="h-7 w-7" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 whitespace-pre-line font-display text-2xl leading-tight text-white text-center font-bold tracking-tight">
                      {step.title}
                    </h3>

                    {/* Divider luxe */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className="h-px flex-1 bg-white/20" />
                      <span className="h-1 w-8 rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />
                      <span className="h-px flex-1 bg-white/20" />
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm/6 text-neutral-200 text-center leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white to-transparent opacity-20 rounded-tr-3xl" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                </motion.article>
              );
            })}
          </div>

          {/* Service info text */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.p
              className="text-body-base text-neutral-300 font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Entraînements au poids du corps, suivi personnalisé, et communauté de guerriers prêts à se transformer avec toi.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
