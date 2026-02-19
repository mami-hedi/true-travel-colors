import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, ArrowRight, Wifi, Utensils, Waves, Car } from "lucide-react";
import sousseImg from "@/assets/hotel-sousse.jpg";
import hammamet from "@/assets/hotel-hammamet.jpg";
import djerba from "@/assets/hotel-djerba.jpg";
import monastir from "@/assets/hotel-monastir.jpg";

const destinations = [
  {
    city: "Sousse",
    desc: "La perle du Sahel, avec ses plages dorées et son médina animée.",
    image: sousseImg,
    stars: 5,
    prix: "À partir de 89 DT / nuit",
    label: "Bord de mer",
    labelColor: "bg-brand-lime text-secondary-foreground",
  },
  {
    city: "Hammamet",
    desc: "Station balnéaire mythique, réputée pour ses resorts tout-inclus.",
    image: hammamet,
    stars: 5,
    prix: "À partir de 79 DT / nuit",
    label: "Tout inclus",
    labelColor: "bg-brand-crimson text-primary-foreground",
  },
  {
    city: "Djerba",
    desc: "L'île aux mille charmes, entre tradition, détente et soleil.",
    image: djerba,
    stars: 5,
    prix: "À partir de 95 DT / nuit",
    label: "Île paradisiaque",
    labelColor: "bg-brand-lime text-secondary-foreground",
  },
  {
    city: "Monastir",
    desc: "Ville royale avec sa marina, son ribat historique et ses plages.",
    image: monastir,
    stars: 4,
    prix: "À partir de 72 DT / nuit",
    label: "Culturel",
    labelColor: "bg-brand-crimson text-primary-foreground",
  },
];

const amenities = [
  { icon: Wifi, label: "Wi-Fi inclus" },
  { icon: Utensils, label: "Petits-déjeuners" },
  { icon: Waves, label: "Piscine & plage" },
  { icon: Car, label: "Transferts" },
];

const Hotels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/90 to-brand-crimson/30 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-brand-lime/20 border border-brand-lime/40 text-brand-lime text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            🏨 Hébergement & Séjours
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5">
            Les plus beaux hôtels <br />
            <span className="italic text-brand-lime">de Tunisie</span>
          </h1>
          <p className="font-body text-primary-foreground/75 text-xl max-w-2xl mx-auto">
            True Travel sélectionne pour vous les meilleurs hébergements dans les destinations phares de Tunisie : Sousse, Monastir, Hammamet, Djerba et plus encore.
          </p>
        </div>
      </section>

      {/* Amenities bar */}
      <div className="bg-card border-b border-border py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {amenities.map((a) => (
              <div key={a.label} className="flex items-center gap-2 text-muted-foreground">
                <a.icon size={18} className="text-brand-crimson" />
                <span className="font-body text-sm font-medium">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-bold text-foreground mb-3">
            Nos destinations <span className="italic text-brand-crimson">en Tunisie</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Du nord au sud, découvrez nos offres hôtelières soigneusement sélectionnées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((dest) => (
            <div key={dest.city} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row">
              <div className="relative w-full md:w-56 flex-shrink-0 h-56 md:h-auto overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${dest.labelColor}`}>
                  {dest.label}
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(dest.stars)].map((_, i) => (
                      <Star key={i} size={13} className="fill-brand-lime text-brand-lime" />
                    ))}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{dest.city}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{dest.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <p className="text-xs text-muted-foreground font-body">Tarif indicatif</p>
                    <p className="font-display text-lg font-bold text-brand-crimson">{dest.prix}</p>
                  </div>
                  <button className="flex items-center gap-1.5 bg-brand-crimson text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                    Réserver
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info band */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-3xl font-bold text-foreground mb-4">
            D'autres destinations disponibles
          </h3>
          <p className="text-muted-foreground font-body max-w-xl mx-auto mb-8">
            Tabarka, Ain Draham, Tozeur, Kerkennah… Contactez-nous pour toute destination en Tunisie et à l'international.
          </p>
          <a
            href="tel:+21655500082"
            className="inline-flex items-center gap-2 bg-brand-crimson text-primary-foreground font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Appeler : +216 55 500 082
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hotels;
