import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Clock, Tag, Shield, Headphones, Phone, ArrowRight } from "lucide-react";
import volsHero from "@/assets/vols-hero.jpg";

const airlines = [
  { name: "Tunisair", flag: "🇹🇳" },
  { name: "Air France", flag: "🇫🇷" },
  { name: "Lufthansa", flag: "🇩🇪" },
  { name: "Turkish Airlines", flag: "🇹🇷" },
  { name: "Emirates", flag: "🇦🇪" },
  { name: "Royal Air Maroc", flag: "🇲🇦" },
  { name: "Air Arabia", flag: "🇦🇪" },
  { name: "Nouvelair", flag: "🇹🇳" },
];

const advantages = [
  {
    icon: Tag,
    title: "Meilleurs tarifs garantis",
    desc: "Nous comparons des centaines de vols pour vous proposer le prix le plus compétitif du marché.",
    color: "text-brand-lime",
    bg: "bg-brand-lime/10",
  },
  {
    icon: Clock,
    title: "Réservation rapide",
    desc: "Votre billet émis en moins de 24h. Service express disponible pour les départs urgents.",
    color: "text-brand-crimson",
    bg: "bg-brand-crimson/10",
  },
  {
    icon: Shield,
    title: "Billets sécurisés",
    desc: "Tous nos billets sont émis par des compagnies agréées et IATA. Aucune arnaque possible.",
    color: "text-brand-lime",
    bg: "bg-brand-lime/10",
  },
  {
    icon: Headphones,
    title: "Assistance complète",
    desc: "En cas de changement, annulation ou problème, notre équipe vous accompagne à chaque étape.",
    color: "text-brand-crimson",
    bg: "bg-brand-crimson/10",
  },
];

const destinations = [
  { dest: "Tunis → Paris", type: "Aller-retour", dispo: "Tous les jours" },
  { dest: "Tunis → Dubai", type: "Aller-retour", dispo: "3x / semaine" },
  { dest: "Tunis → Istanbul", type: "Aller-retour", dispo: "Quotidien" },
  { dest: "Tunis → Londres", type: "Aller-retour", dispo: "4x / semaine" },
  { dest: "Tunis → Montréal", type: "Aller-retour", dispo: "Via Paris/Casablanca" },
  { dest: "Tunis → New York", type: "Aller-retour", dispo: "Via escale" },
  { dest: "Monastir → Europe", type: "Charter saisonnier", dispo: "Été & Hiver" },
  { dest: "Djerba → Europe", type: "Charter saisonnier", dispo: "Toute l'année" },
];

const Vols = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={volsHero} alt="Réservation de vols" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
        <div className="relative z-10 container mx-auto px-4 pb-16 pt-32">
          <span className="inline-block bg-brand-lime/80 text-secondary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            ✈️ Réservation de Vols
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5 max-w-3xl">
            Volez vers{" "}
            <span className="italic text-brand-lime">n'importe où</span>{" "}
            dans le monde
          </h1>
          <p className="font-body text-primary-foreground/80 text-xl max-w-2xl mb-8">
            True Travel vous propose les meilleurs vols aux meilleurs prix. Départs depuis Tunis, Monastir, Djerba et les principaux aéroports tunisiens.
          </p>
          <a
            href="tel:+21655500082"
            className="inline-flex items-center gap-2 bg-brand-crimson text-primary-foreground font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            <Phone size={20} />
            Obtenir un tarif
          </a>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Pourquoi réserver chez <span className="italic text-brand-crimson">True Travel ?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 ${adv.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <adv.icon size={22} className={adv.color} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{adv.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations populaires */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Destinations <span className="italic text-brand-lime">populaires</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Vols réguliers, charters et connexions internationales disponibles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {destinations.map((d) => (
              <div key={d.dest} className="bg-card rounded-xl p-5 shadow-card flex items-center justify-between group hover:border-brand-crimson border border-transparent transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-crimson/10 rounded-full flex items-center justify-center">
                    <Plane size={18} className="text-brand-crimson" />
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-foreground">{d.dest}</p>
                    <p className="font-body text-xs text-muted-foreground">{d.type} • {d.dispo}</p>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-brand-crimson font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Réserver <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compagnies partenaires */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="font-display text-2xl font-bold text-center text-foreground mb-10">
            Nos compagnies <span className="text-brand-crimson italic">partenaires</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {airlines.map((airline) => (
              <div key={airline.name} className="bg-card border border-border rounded-xl px-5 py-3 flex items-center gap-2 shadow-card hover:shadow-card-hover transition-all duration-200 hover:border-brand-lime">
                <span className="text-xl">{airline.flag}</span>
                <span className="font-body font-medium text-foreground text-sm">{airline.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-crimson to-brand-lime/80 py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Prêt à décoller ?
          </h3>
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
            Appelez-nous ou venez directement à notre agence. Nous trouvons le meilleur vol pour votre destination.
          </p>
          <a
            href="tel:+21655500082"
            className="inline-flex items-center gap-2 bg-card text-brand-crimson font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity text-lg shadow-card"
          >
            <Phone size={20} />
            +216 55 500 082
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vols;
