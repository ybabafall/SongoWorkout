import { useState, useEffect, useCallback, useMemo } from "react";
import { Menu, X, Sparkles, Crown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const isMobile = useMemo(() => window.innerWidth < 1024, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Sur mobile, garder le header toujours visible pour une meilleure UX
      // Sur desktop, comportement auto-hide classique

      if (isMobile) {
        // Mobile : toujours visible
        setIsVisible(true);
      } else {
        // Desktop : auto-hide au scroll down
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsMenuOpen(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobile]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (sectionId === 'about') {
      navigate('/about');
    } else if (sectionId === 'hero') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Pour services, si on n'est pas sur la page principale, y aller d'abord
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  }, [location.pathname, navigate]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className={`container mx-auto py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6 transition-all duration-700 ${
        isHomePage
          ? (isScrolled
            ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10 rounded-b-2xl'
            : '')
          : 'bg-black/90 backdrop-blur-2xl border-b border-white/10 rounded-b-2xl'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo à gauche - toujours visible */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center cursor-pointer group"
          >
            <span className="text-base sm:text-lg md:text-xl font-display font-bold tracking-tight text-white group-hover:text-orange-600 transition-colors">
              SONGO WORKOUT
            </span>
          </div>

          {/* Navigation Desktop - à droite */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { id: 'hero', label: 'Accueil' },
              { id: 'philosophy', label: 'Philosophie' },
              { id: 'programs', label: 'Programmes' },
              { id: 'community', label: 'Communauté' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group text-base font-body font-semibold tracking-wide transition-all duration-300 text-white/80 hover:text-white"
              >
                {item.label}
                {/* Soulignement au hover */}
                <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 bg-orange-600"></span>
              </button>
            ))}
          </div>

          {/* Menu Burger Minimaliste - Touch target 48x48px */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 min-w-[48px] min-h-[48px] flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-lg"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="relative w-5 h-4 flex items-center justify-center">
              <div className={`absolute w-5 h-px transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></div>
              <div className={`absolute w-5 h-px transition-all duration-300 bg-white ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></div>
              <div className={`absolute w-5 h-px transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></div>
            </div>
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full mt-0">
            <div className="mt-2 sm:mt-4 bg-white/90 px-4 sm:px-6 md:px-10 py-6 sm:py-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl before:pointer-events-none before:absolute before:inset-px before:bg-gradient-to-b before:from-white/80 before:to-white/30 before:opacity-100 relative">
              <div className="space-y-1 sm:space-y-2 relative z-10">
                {/* Navigation Links */}
                {[
                  { id: 'hero', label: 'Accueil' },
                  { id: 'philosophy', label: 'Philosophie' },
                  { id: 'programs', label: 'Programmes' },
                  { id: 'community', label: 'Communauté' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left text-neutral-900/80 hover:text-neutral-900 font-semibold py-3 sm:py-4 px-4 sm:px-5 rounded-xl hover:bg-white/40 hover:backdrop-blur-sm transition-all duration-500 font-body text-sm sm:text-base tracking-wide border border-transparent hover:border-orange-600/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Divider luxe */}
                <div className="py-3">
                  <div className="h-px flex items-center gap-2">
                    <span className="h-px flex-1 bg-neutral-200" />
                    <span className="h-1 w-8 rounded-full bg-gradient-to-r from-white via-orange-400 to-white opacity-80" />
                    <span className="h-px flex-1 bg-neutral-200" />
                  </div>
                </div>

                {/* CTA Mobile */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-bold tracking-wide transition-all duration-500 rounded-sm font-body shadow-[0_8px_32px_rgba(249,115,22,0.2)] hover:shadow-[0_12px_48px_rgba(249,115,22,0.4)] active:scale-[0.98] sm:hover:scale-[1.02] relative overflow-hidden group uppercase"
                >
                  <span className="relative z-10">Rejoindre la troupe</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;