import { useState } from "react";
import { Check, CreditCard, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const [selectedProgram, setSelectedProgram] = useState("performance");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const programs = [
    {
      id: "starter",
      name: "Starter Plan",
      price: "49€",
      period: "/mois",
      features: [
        "Programme structuré selon ton niveau",
        "Accès à la communauté WhatsApp",
        "1 séance de groupe live par semaine",
        "Feedback quotidien entre membres",
      ],
    },
    {
      id: "performance",
      name: "Performance Plan",
      price: "79€",
      period: "/mois",
      popular: true,
      features: [
        "Tout le Starter Plan",
        "Suivi plus intensif, objectifs précis",
        "Challenge collectif hebdomadaire",
        "Support prioritaire",
        "Accès aux replays des séances",
      ],
    },
    {
      id: "vip",
      name: "VIP Plan",
      price: "199€",
      period: "/mois",
      features: [
        "Coaching individuel 1:1",
        "Programme d'entraînement personnalisé",
        "Appels privés avec le coach",
        "Ajustements hebdomadaires",
        "Accès direct WhatsApp avec le coach",
        "Tout le Performance Plan inclus",
      ],
    },
  ];

  const selectedProgramData = programs.find((p) => p.id === selectedProgram);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Validation basique
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      setIsProcessing(false);
      return;
    }

    // Simulation du paiement
    setTimeout(() => {
      toast({
        title: "Bienvenue dans la meute ! 🎉",
        description: `Tu as rejoint le ${selectedProgramData?.name}. On te recontacte sous 24h pour commencer.`,
      });
      setIsProcessing(false);

      // Sauvegarder dans localStorage
      const subscription = {
        program: selectedProgram,
        client: formData,
        date: new Date().toISOString(),
        id: Date.now().toString(),
      };
      const subscriptions = JSON.parse(
        localStorage.getItem("songo-subscriptions") || "[]"
      );
      subscriptions.push(subscription);
      localStorage.setItem("songo-subscriptions", JSON.stringify(subscriptions));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <Header />
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 border border-white/20 rounded-lg backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <p className="text-ui-base text-white/90 font-mono tracking-widest uppercase">Checkout</p>
            </div>
            <h1 className="text-display-xl font-display font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent" style={{ textShadow: '0 4px 30px rgba(255, 255, 255, 0.3), 0 2px 40px rgba(249, 115, 22, 0.2)', backgroundSize: '200% auto' }}>
              Rejoins la meute
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/50"></div>
              <div className="h-2 w-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/50"></div>
            </div>
            <p className="text-body-lg text-white/90 max-w-2xl mx-auto">
              Choisis ton programme et commence ta transformation dès aujourd'hui.
            </p>
          </div>

          {/* Programme Selection */}
          <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-500 mb-8">
            <h2 className="text-heading-lg font-display font-bold text-white mb-6 tracking-tight">
              1. Choisis ton programme
            </h2>

            <RadioGroup
              value={selectedProgram}
              onValueChange={setSelectedProgram}
              className="grid md:grid-cols-3 gap-6"
            >
              {programs.map((program) => (
                <div
                  key={program.id}
                  className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 flex flex-col ${
                    selectedProgram === program.id
                      ? "border-orange-500 bg-orange-500/5"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  onClick={() => setSelectedProgram(program.id)}
                >
                  {program.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                        Populaire
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col flex-1">
                    <div className="text-center mb-4">
                      <RadioGroupItem
                        value={program.id}
                        id={program.id}
                        className="mx-auto mb-3"
                      />
                      <Label
                        htmlFor={program.id}
                        className="text-heading-md font-display font-bold text-white cursor-pointer block"
                      >
                        {program.name}
                      </Label>
                      <div className="flex items-baseline justify-center mt-2">
                        <span className="text-display-lg font-display font-bold text-white">
                          {program.price}
                        </span>
                        <span className="text-body-sm text-neutral-400 ml-1">
                          {program.period}
                        </span>
                      </div>
                    </div>

                    <div className="h-px bg-white/10 mb-4"></div>

                    <ul className="space-y-3 flex-1">
                      {program.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-body-sm text-neutral-300"
                        >
                          <Check
                            className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                            strokeWidth={3}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-end">
            {/* Colonne gauche : Informations */}
            <div>

            {/* Informations personnelles */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
              <h2 className="text-heading-lg font-display font-bold text-white mb-6 tracking-tight">
                2. Tes informations
              </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">
                        Prénom *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        placeholder="Ton prénom"
                        className="min-h-[56px] bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">
                        Nom *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        placeholder="Ton nom"
                        className="min-h-[56px] bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="email@exemple.com"
                        className="min-h-[56px] bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="06 12 34 56 78"
                        className="min-h-[56px] bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                      />
                    </div>
                  </div>

                  {/* Informations de paiement */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard className="w-5 h-5 text-orange-500" />
                      <h3 className="text-heading-md font-display font-bold text-white">
                        Informations de paiement
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="text-white">
                          Numéro de carte
                        </Label>
                        <Input
                          id="cardNumber"
                          type="text"
                          inputMode="numeric"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) =>
                            handleInputChange("cardNumber", e.target.value)
                          }
                          className="min-h-[56px] bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardExpiry" className="text-white">
                            Date d'expiration
                          </Label>
                          <Input
                            id="cardExpiry"
                            type="text"
                            inputMode="numeric"
                            placeholder="MM/AA"
                            value={formData.cardExpiry}
                            onChange={(e) =>
                              handleInputChange("cardExpiry", e.target.value)
                            }
                            className="min-h-[56px] bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardCvv" className="text-white">
                            CVV
                          </Label>
                          <Input
                            id="cardCvv"
                            type="text"
                            inputMode="numeric"
                            placeholder="123"
                            maxLength={3}
                            value={formData.cardCvv}
                            onChange={(e) =>
                              handleInputChange("cardCvv", e.target.value)
                            }
                            className="min-h-[56px] bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mt-4 p-3 bg-white/5 rounded-lg">
                      <Lock className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-neutral-400">
                        Paiement 100% sécurisé. Tes informations sont protégées
                        et cryptées.
                      </p>
                    </div>
                  </div>
                </form>
            </div>
          </div>

          {/* Colonne droite : Récapitulatif */}
          <div>
            <div className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-500/30 rounded-xl p-8 sticky top-24 backdrop-blur-xl shadow-[0_8px_32px_rgba(249,115,22,0.2)]">
                <h2 className="text-heading-lg font-display font-bold text-white mb-6 tracking-tight">
                  Récapitulatif
                </h2>

                <div className="space-y-4 pb-4 border-b border-white/10">
                  <div>
                    <p className="text-body-sm text-neutral-400 mb-1">
                      Programme sélectionné
                    </p>
                    <p className="text-heading-md font-display font-bold text-white">
                      {selectedProgramData?.name}
                    </p>
                  </div>

                  <div className="flex justify-between items-baseline">
                    <span className="text-body-base text-neutral-300">
                      Abonnement mensuel
                    </span>
                    <span className="text-heading-lg font-display font-bold text-white">
                      {selectedProgramData?.price}
                      <span className="text-body-sm text-neutral-400 font-body">
                        {selectedProgramData?.period}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="py-4 space-y-3">
                  <div className="flex items-center gap-2 text-body-sm text-neutral-300">
                    <Check className="w-4 h-4 text-orange-500" strokeWidth={3} />
                    <span>Sans engagement</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm text-neutral-300">
                    <Check className="w-4 h-4 text-orange-500" strokeWidth={3} />
                    <span>Première séance offerte</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm text-neutral-300">
                    <Check className="w-4 h-4 text-orange-500" strokeWidth={3} />
                    <span>Annulation à tout moment</span>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="w-full min-h-[56px] bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-base rounded-lg shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_24px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                >
                  {isProcessing ? "Traitement en cours..." : "Valider et payer"}
                </Button>

                <p className="text-xs text-neutral-500 text-center mt-4">
                  En validant, tu acceptes nos conditions générales de vente et
                  notre politique de confidentialité.
                </p>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
