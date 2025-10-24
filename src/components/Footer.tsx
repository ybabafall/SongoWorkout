import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

const Footer = () => {
  const { openSettings } = useCookieConsent();

  return (
    <footer id="contact" className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Column 1: Programmes */}
            <div>
              <h3 className="text-ui-sm font-semibold uppercase tracking-wider mb-4">Programmes</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#programs" className="text-ui-sm font-body text-neutral-300 hover:text-white transition-colors">
                    Starter Plan
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-ui-sm font-body text-neutral-300 hover:text-white transition-colors">
                    Performance Plan
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-ui-sm font-body text-neutral-300 hover:text-white transition-colors">
                    VIP Plan
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: À propos */}
            <div>
              <h3 className="text-ui-sm font-semibold uppercase tracking-wider mb-4">Songo Workout</h3>
              <ul className="space-y-2 mb-5">
                <li>
                  <a href="#philosophy" className="text-ui-sm font-body text-neutral-300 hover:text-white transition-colors">
                    Notre philosophie
                  </a>
                </li>
                <li>
                  <a href="#community" className="text-ui-sm font-body text-neutral-300 hover:text-white transition-colors">
                    La communauté
                  </a>
                </li>
              </ul>

              {/* Social Media */}
              <div>
                <h4 className="text-ui-sm font-semibold uppercase tracking-wider mb-2.5">Suivez-nous</h4>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 border border-white/20 rounded hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-white/20 rounded hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-ui-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start space-x-3">
                  <Mail size={16} className="text-neutral-400 mt-1 flex-shrink-0" />
                  <div className="text-ui-sm font-body text-neutral-300">
                    <p>contact@songoworkout.com</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Instagram size={16} className="text-neutral-400 mt-1 flex-shrink-0" />
                  <div className="text-ui-sm font-body text-neutral-300">
                    <p>@songoworkout</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-ui-sm font-display font-bold tracking-tight">SONGO WORKOUT</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-ui-sm font-body text-neutral-400">
              <a href="/legal" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <span className="text-neutral-600">|</span>
              <a href="/privacy" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <span className="text-neutral-600">|</span>
              <a href="/terms" className="hover:text-white transition-colors">
                Conditions générales
              </a>
              <span className="text-neutral-600">|</span>
              <a href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </a>
              <span className="text-neutral-600">|</span>
              <button onClick={openSettings} className="hover:text-white transition-colors">
                Gérer mes cookies
              </button>
            </div>

            {/* Copyright */}
            <div className="text-ui-sm font-body text-neutral-400">
              © {new Date().getFullYear()} Songo Workout
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
