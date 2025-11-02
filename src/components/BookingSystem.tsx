import { useState, useCallback } from "react";
import { Calendar, Clock, User, Phone, Mail, Check, Sparkles, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { toast } from "@/hooks/use-toast";

const BookingSystem = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isBooked, setIsBooked] = useState(false);

  const programs = [
    { id: "starter", name: "Starter Plan", price: "À partir de 49€/mois" },
    { id: "performance", name: "Performance Plan", price: "À partir de 79€/mois" },
    { id: "vip", name: "VIP Plan - Coaching 1:1", price: "Sur devis" }
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedProgram || !selectedDate || !selectedTime || !formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simuler la sauvegarde du rendez-vous
    const appointment = {
      program: selectedProgram,
      date: selectedDate,
      time: selectedTime,
      client: formData,
      id: Date.now().toString()
    };

    // Sauvegarder dans le sessionStorage (sécurisé - données supprimées à la fermeture)
    const appointments = JSON.parse(sessionStorage.getItem('songo-appointments') || '[]');
    appointments.push(appointment);
    sessionStorage.setItem('songo-appointments', JSON.stringify(appointments));

    setIsBooked(true);
    toast({
      title: "Bienvenue dans la troupe !",
      description: "Ta transformation commence maintenant. On te recontacte sous 24h.",
    });
  }, [selectedProgram, selectedDate, selectedTime, formData]);

  if (isBooked) {
    return (
      <section id="booking" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-neutral-900/50 backdrop-blur-xl rounded-xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 rounded-full shadow-[0_4px_24px_rgba(249,115,22,0.4)]">
                <Check size={24} className="sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4 text-white tracking-tight">
                Bienvenue dans la troupe
              </h2>
              <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 leading-relaxed font-body">
                On te recontacte sous <span className="text-orange-400 font-semibold">24h</span> pour démarrer ta transformation.
              </p>

              <div className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-500/30 rounded-lg p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 text-left backdrop-blur-sm shadow-[0_4px_24px_rgba(249,115,22,0.2)]">
                <h3 className="text-base sm:text-lg font-display font-semibold text-white mb-3 sm:mb-4 text-center tracking-tight">Récapitulatif</h3>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-white/70 font-body">Programme :</span>
                    <span className="text-white font-semibold font-body text-right">{programs.find(p => p.id === selectedProgram)?.name}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-white/70 font-body">Tarif :</span>
                    <span className="text-orange-400 font-semibold font-body">{programs.find(p => p.id === selectedProgram)?.price}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-white/70 font-body">Date :</span>
                    <span className="text-white font-semibold font-body">{selectedDate && format(selectedDate, 'dd MMMM yyyy', { locale: fr })}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-white/70 font-body">Heure :</span>
                    <span className="text-white font-semibold font-body">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-white/70 font-body">Client :</span>
                    <span className="text-white font-semibold font-body text-right">{formData.firstName} {formData.lastName}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsBooked(false)}
                className="w-full px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-full active:scale-95 sm:hover:scale-105 transition-all duration-500"
              >
                Nouvelle réservation
              </button>

              <div className="mt-4 sm:mt-6 bg-orange-600/10 p-2.5 sm:p-3 rounded-lg border border-orange-500/20">
                <p className="text-xs sm:text-sm text-white/90 font-body text-center">
                  Première session offerte · Sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
            Rejoins la troupe
          </h2>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-white/50"></div>
            <div className="h-2 w-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-white/50"></div>
          </div>

          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed font-body px-4">
            Complète les informations ci-dessous. On te recontacte sous 24h pour démarrer ta transformation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-neutral-900/50 backdrop-blur-xl rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/10 shadow-[0_8px_32px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-500">
            <div className="space-y-5 sm:space-y-6 md:space-y-8">

              {/* Program Selection */}
              <div className="space-y-2 sm:space-y-3">
                <Label className="text-xs sm:text-sm font-semibold text-white font-body flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                  <span>Programme *</span>
                </Label>
                <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                  <SelectTrigger className="h-12 sm:h-14 border-2 border-white/20 hover:border-white/40 focus:border-orange-500 transition-all duration-300 text-sm sm:text-base bg-white/5 backdrop-blur-sm rounded-lg text-white">
                    <SelectValue placeholder="Choisis ton plan d'entraînement" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-white/20 backdrop-blur-xl">
                    {programs.map((program) => (
                      <SelectItem key={program.id} value={program.id} className="py-3 hover:bg-white/10 cursor-pointer text-white">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1 sm:gap-4">
                          <span className="font-medium text-sm font-body text-white">{program.name}</span>
                          <span className="font-semibold text-xs sm:text-sm text-orange-400">{program.price}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-xs sm:text-sm font-semibold text-white font-body flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                    <span>Date *</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 sm:h-14 justify-start text-left font-medium border-2 border-white/20 hover:border-white/40 focus:border-orange-500 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 text-sm sm:text-base bg-white/5 backdrop-blur-sm rounded-lg text-white"
                      >
                        <Calendar className="mr-2 sm:mr-3 h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-400" />
                        {selectedDate ? (
                          <span className="font-body text-white">{format(selectedDate, "dd/MM/yyyy", { locale: fr })}</span>
                        ) : (
                          <span className="text-white/60 font-body">Sélectionner une date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-neutral-900 border-white/20 backdrop-blur-xl">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        initialFocus
                        className="rounded-lg"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Label className="text-xs sm:text-sm font-semibold text-white font-body flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                    <span>Heure *</span>
                  </Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="h-12 sm:h-14 border-2 border-white/20 hover:border-white/40 focus:border-orange-500 transition-all duration-300 text-sm sm:text-base bg-white/5 backdrop-blur-sm rounded-lg text-white">
                      <SelectValue placeholder="Choisissez un créneau" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-white/20 backdrop-blur-xl">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="py-3 hover:bg-white/10 cursor-pointer text-white">
                          <span className="font-medium text-sm font-body text-white">{time}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Informations Client */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="w-5 h-5 text-orange-400" />
                  <h3 className="text-base font-display font-semibold text-white">
                    Vos informations
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-ui-sm font-semibold text-white font-body">
                      Prénom *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Votre prénom"
                      className="w-full min-h-[56px] h-12 border-2 border-white/20 hover:border-white/40 focus:border-orange-500 transition-all duration-300 text-base bg-white/5 backdrop-blur-sm rounded-lg font-body text-white placeholder:text-white/60"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-ui-sm font-semibold text-white font-body">
                      Nom *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Votre nom"
                      className="w-full min-h-[56px] h-12 border-2 border-white/20 hover:border-white/40 focus:border-orange-500 transition-all duration-300 text-base bg-white/5 backdrop-blur-sm rounded-lg font-body text-white placeholder:text-white/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-ui-sm font-semibold text-white font-body flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-orange-400" />
                      <span>Email *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="email@exemple.com"
                      className="w-full min-h-[56px] h-12 border-2 border-white/20 hover:border-white/40 focus:border-orange-500 transition-all duration-300 text-base bg-white/5 backdrop-blur-sm rounded-lg font-body text-white placeholder:text-white/60"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-ui-sm font-semibold text-white font-body flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-orange-400" />
                      <span>Téléphone *</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="06 12 34 56 78"
                      className="w-full min-h-[56px] h-12 border-2 border-white/20 hover:border-white/40 focus:border-orange-500 transition-all duration-300 text-base bg-white/5 backdrop-blur-sm rounded-lg font-body text-white placeholder:text-white/60"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-ui-sm font-semibold text-white/70 font-body">
                    Message (optionnel)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tes objectifs fitness, niveau actuel..."
                    className="w-full resize-none border-2 border-white/20 hover:border-white/40 focus:border-orange-500 transition-all duration-300 min-h-32 text-base bg-white/5 backdrop-blur-sm rounded-lg font-body text-white placeholder:text-white/60"
                    rows={4}
                  />
                  <p className="text-ui-xs text-white/60 font-body mt-2">
                    * Champs obligatoires
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="mt-8 sm:mt-10 md:mt-12">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="h-px flex-1 bg-white/20"></div>
                <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                <div className="h-px flex-1 bg-white/20"></div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="relative group w-full sm:w-auto min-h-[56px] px-6 sm:px-8 md:px-10 lg:px-12 py-4 text-sm sm:text-base font-bold tracking-wide transition-all duration-300 overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-500 hover:to-red-500 active:scale-95 shadow-[0_0_40px_rgba(249,115,22,0.4),0_0_60px_rgba(220,38,38,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6),0_0_80px_rgba(220,38,38,0.4)] rounded-full sm:hover:scale-105 uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                >
                  <span className="relative z-10">
                    Rejoindre la troupe
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>
              </div>

              <div className="text-center mt-6 sm:mt-8">
                <p className="text-xs sm:text-sm text-white/60 font-body px-4">
                  On te recontacte sous <span className="text-white font-semibold">24h</span> pour commencer ta transformation.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;