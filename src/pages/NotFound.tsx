import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[100svh] flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-[clamp(4rem,15vw,8rem)] h-[clamp(4rem,15vw,8rem)] border border-orange-500 rounded-full animate-float-gentle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[clamp(3rem,12vw,6rem)] h-[clamp(3rem,12vw,6rem)] border border-orange-500 rounded animate-float-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center px-4 xs:px-6 relative z-10 max-w-2xl mx-auto">
        <div className="mb-[clamp(2rem,5vw,3rem)]">
          <h1 className="text-[clamp(4rem,15vw,8rem)] font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4 leading-none">
            404
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-500"></div>
            <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-display font-semibold text-neutral-900 mb-4">
            Page introuvable
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-neutral-700 mb-8 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col xs:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 px-[clamp(1.5rem,4vw,2rem)] py-[clamp(0.75rem,2vw,1rem)] border-2 border-orange-600/40 text-orange-600 rounded-full font-body font-medium text-[clamp(0.875rem,1.5vw,1rem)] hover:border-orange-600 hover:bg-orange-500/5 transition-all duration-300 hover:scale-105 min-w-[clamp(10rem,30vw,12rem)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour</span>
          </button>

          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 px-[clamp(1.5rem,4vw,2rem)] py-[clamp(0.75rem,2vw,1rem)] bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-body font-medium text-[clamp(0.875rem,1.5vw,1rem)] hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_24px_rgba(249,115,22,0.4)] min-w-[clamp(10rem,30vw,12rem)]"
          >
            <Home className="w-4 h-4" />
            <span>Accueil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
