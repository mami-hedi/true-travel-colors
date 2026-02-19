import { Search, MapPin, Calendar, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt="Destination de rêve"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Floating badge */}
      <div className="absolute top-28 right-8 md:right-20 bg-brand-lime/90 backdrop-blur-sm text-secondary-foreground text-xs font-semibold px-4 py-2 rounded-full animate-float">
        ✈️ +500 destinations mondiales
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block bg-brand-crimson/20 border border-brand-crimson/40 text-primary-foreground text-sm font-body font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-in">
          🌍 Agence de voyage certifiée
        </span>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
          Votre voyage <br />
          <span className="italic text-brand-lime">de rêve</span>{" "}
          <span className="text-primary-foreground">commence ici</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-up">
          True Travel conçoit des voyages sur-mesure qui correspondent parfaitement à vos envies et votre budget. Laissez-vous guider par nos experts.
        </p>

        {/* Search bar */}
        <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 max-w-3xl mx-auto shadow-card-hover animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
              <MapPin size={18} className="text-brand-crimson flex-shrink-0" />
              <div className="text-left">
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
              <div className="text-left">
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
              <div className="text-left">
                <p className="text-xs text-muted-foreground font-body">Voyageurs</p>
                <input
                  type="text"
                  placeholder="Combien de personnes ?"
                  className="bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground outline-none w-full"
                />
              </div>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-brand-crimson text-primary-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-[1.01]">
            <Search size={18} />
            Rechercher mon voyage
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mt-12 animate-fade-in">
          {[
            { num: "15+", label: "Ans d'expérience" },
            { num: "10k+", label: "Clients satisfaits" },
            { num: "120+", label: "Pays disponibles" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-brand-lime">{stat.num}</p>
              <p className="font-body text-sm text-primary-foreground/70 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-primary-foreground/60 text-xs font-body">Défiler</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
