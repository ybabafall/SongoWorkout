import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: [
        "Paris & Île-de-France",
        "Coaching à domicile ou en extérieur"
      ]
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: [
        "+33 1 42 56 78 90",
        "Service disponible 7j/7"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "contact@songoworkout.fr",
        "info@songoworkout.fr"
      ]
    },
    {
      icon: Clock,
      title: "Disponibilité",
      details: [
        "Lun - Dim: 6h00 - 21h00",
        "Sessions personnalisées"
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, url: "#", label: "@songoworkout" },
    { icon: Facebook, url: "#", label: "Songo Workout" }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-accent-500/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-neutral-900 mb-4 sm:mb-6 animate-spring" style={{ animationDelay: '0.2s' }}>
            Contact
          </h2>
          <div className="divider-luxe max-w-xs sm:max-w-md mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-neutral-900/70 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed font-body animate-spring px-4" style={{ animationDelay: '0.3s' }}>
            Contacte-nous pour commencer ta transformation.
            Notre équipe est là pour t'accompagner dans ton parcours vers le lion noir.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-6 sm:mb-8 text-neutral-900">
                Informations de contact
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="glass-luxe">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-brand-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent size={20} className="sm:w-6 sm:h-6 text-neutral-900" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1 sm:mb-2 text-sm sm:text-base">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-neutral-900/70 text-xs sm:text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="card-premium">
                <h4 className="font-semibold text-neutral-900 mb-3 sm:mb-4 text-base sm:text-lg">Suivez-nous</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-metallic rounded-lg flex items-center justify-center hover:bg-gold-accent transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <IconComponent size={18} className="sm:w-5 sm:h-5 text-black-deep group-hover:text-background" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-xs sm:text-sm text-neutral-900/70 mt-3">
                  Suis nos entraînements et les transformations de la meute
                </p>
              </div>
            </div>

            {/* Zone d'intervention */}
            <div className="card-premium">
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 sm:mb-6 text-neutral-900">
                Zone d'intervention
              </h3>
              <div className="bg-gradient-hero rounded-xl h-64 sm:h-72 md:h-80 flex items-center justify-center relative overflow-hidden">
                {/* Map Placeholder with Metallic Effect */}
                <div className="absolute inset-0 bg-gradient-metallic opacity-20"></div>
                <div className="text-center z-10 px-4">
                  <MapPin size={40} className="sm:w-12 sm:h-12 text-silver-light mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-semibold text-background mb-2">
                    Paris & Île-de-France
                  </h4>
                  <p className="text-sm sm:text-base text-silver-light">
                    Coaching à domicile ou en extérieur
                  </p>
                  <button className="btn-metallic mt-4 sm:mt-6 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                    Voir les zones
                  </button>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted/50 rounded-lg">
                <h5 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">Options de coaching</h5>
                <ul className="text-xs sm:text-sm text-neutral-900/70 space-y-1">
                  <li>• Coaching à domicile avec matériel</li>
                  <li>• Sessions en extérieur (parcs, terrains)</li>
                  <li>• Entraînements de groupe sur demande</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-display font-bold text-metallic">
                  SONGO WORKOUT
                </h3>
                <p className="text-xs sm:text-sm text-neutral-900/70">
                  Coaching Fitness d'Excellence
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs sm:text-sm text-neutral-900/70 mb-2">
                © {new Date().getFullYear()} Songo Workout. Tous droits réservés.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 text-xs text-neutral-900/70">
                <a href="#" className="hover:text-silver-metallic transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="hover:text-silver-metallic transition-colors">
                  Politique de confidentialité
                </a>
                <a href="#" className="hover:text-silver-metallic transition-colors">
                  CGV
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50 text-center">
            <p className="text-xs text-neutral-900/70 px-4">
              Du lionceau au lion noir • Entraînement au poids du corps • Transformation physique et mentale
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;