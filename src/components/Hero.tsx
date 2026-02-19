import { Search, MapPin, Calendar, Users, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-0 min-h-[75vh] flex items-end overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt="True Travel - Agence de voyage"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-16 pt-32">
        <span className="inline-block bg-brand-crimson/80 text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
          ✈️ Agence de voyage en Tunisie
        </span>

        <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5 max-w-4xl">
          Votre voyage{" "}
          <span className="italic text-brand-lime">sur-mesure</span>,<br />
          commence ici
        </h1>

        <p className="font-body text-primary-foreground/80 text-xl max-w-2xl mb-10">
          Séjours, hôtels, billets d’avion et service visa — True Travel vous accompagne
          de A à Z dans tous vos projets de voyage.
        </p>

        {/* Search bar */}
        <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 max-w-4xl shadow-card-hover">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
              <MapPin size={18} className="text-brand-crimson flex-shrink-0" />
              <div className="text-left w-full">
                <p className="text-xs text-muted-foreground font-body">Destination</p>
                <input
                  type="text"
                  placeholder="Où souhaitez-vous aller ?"
                  className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground outline-none w-full"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
              <Calendar size={18} className="text-brand-crimson flex-shrink-0" />
              <div className="text-left w-full">
                <p className="text-xs text-muted-foreground font-body">Dates</p>
                <input
                  type="text"
                  placeholder="Quand partez-vous ?"
                  className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground outline-none w-full"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
              <Users size={18} className="text-brand-crimson flex-shrink-0" />
              <div className="text-left w-full">
                <p className="text-xs text-muted-foreground font-body">Voyageurs</p>
                <input
                  type="text"
                  placeholder="Combien de personnes ?"
                  className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground outline-none w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-brand-crimson text-primary-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-all">
              <Search size={18} />
              Rechercher
            </button>

            <a
              href="tel:+21655500082"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-crimson text-brand-crimson font-bold px-6 py-3.5 rounded-xl hover:bg-brand-crimson/5 transition-colors"
            >
              <Phone size={18} />
              Appeler
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
