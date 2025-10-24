import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section id="cta" className="relative isolate overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/5 blur-3xl"></div>

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-neutral-900 to-black border-2 border-white/20 rounded-sm p-10 md:p-16 text-center overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.1),0_0_100px_rgba(249,115,22,0.05)]">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-white/20"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-white/20"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-white/20"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-white/20"></div>

              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-display-xl font-display font-bold text-white mb-6 tracking-tight" style={{ textShadow: '0 4px 30px rgba(255, 255, 255, 0.3), 0 2px 40px rgba(249, 115, 22, 0.2)' }}>
                  Prêt à devenir lion noir ?
                </h3>

                {/* Divider */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/50"></div>
                  <div className="h-2 w-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                  <div className="h-px w-24 bg-gradient-to-l from-transparent to-white/50"></div>
                </div>

                {/* Description */}
                <p className="text-body-lg text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto font-body">
                  Je prends le contrôle. Je forge mon mental. Je sculpte mon corps.
                </p>
                <p className="text-body-base text-neutral-300 mb-12 leading-relaxed max-w-2xl mx-auto font-body">
                  La transformation commence maintenant. Rejoins la meute.<br />
                  Deviens la meilleure version de toi-même.
                </p>

                {/* CTA Button - Touch target optimisé */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="group relative min-h-[56px] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold tracking-wide transition-all duration-300 overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-500 hover:to-red-500 active:scale-95 shadow-[0_0_50px_rgba(249,115,22,0.4),0_0_80px_rgba(220,38,38,0.2)] hover:shadow-[0_0_70px_rgba(249,115,22,0.6),0_0_100px_rgba(220,38,38,0.3)] rounded-sm hover:scale-110 uppercase w-full md:w-auto"
                >
                  <span className="relative z-10">Rejoindre la meute maintenant</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>

                {/* Bottom tagline */}
                <p className="text-ui-base text-neutral-400 font-mono tracking-wider uppercase mt-8">
                  Chaque mouvement te rapproche de ta puissance intérieure
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
