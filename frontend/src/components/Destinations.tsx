import { ArrowRight, Star } from "lucide-react";
import europeImg from "@/assets/dest-europe.jpg";
import asiaImg from "@/assets/dest-asia.jpg";
import africaImg from "@/assets/dest-africa.jpg";
import americasImg from "@/assets/dest-americas.jpg";

const destinations = [
  {
    id: 1,
    name: "Santorin, Grèce",
    region: "Europe",
    image: europeImg,
    price: "À partir de 1 290€",
    rating: 4.9,
    reviews: 312,
    duration: "8 jours",
    tag: "Coup de cœur",
    tagColor: "bg-brand-crimson text-primary-foreground",
  },
  {
    id: 2,
    name: "Angkor Wat, Cambodge",
    region: "Asie",
    image: asiaImg,
    price: "À partir de 1 890€",
    rating: 4.8,
    reviews: 198,
    duration: "12 jours",
    tag: "Incontournable",
    tagColor: "bg-brand-lime text-secondary-foreground",
  },
  {
    id: 3,
    name: "Serengeti, Tanzanie",
    region: "Afrique",
    image: africaImg,
    price: "À partir de 2 490€",
    rating: 5.0,
    reviews: 145,
    duration: "10 jours",
    tag: "Exclusif",
    tagColor: "bg-brand-crimson text-primary-foreground",
  },
  {
    id: 4,
    name: "Carthagène, Colombie",
    region: "Amériques",
    image: americasImg,
    price: "À partir de 1 490€",
    rating: 4.7,
    reviews: 267,
    duration: "9 jours",
    tag: "Populaire",
    tagColor: "bg-brand-lime text-secondary-foreground",
  },
];

const DestinationCard = ({ dest }: { dest: (typeof destinations)[0] }) => (
  <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
    <div className="relative h-64 overflow-hidden">
      <img
        src={dest.image}
        alt={dest.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

      {/* Tag */}
      <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${dest.tagColor}`}>
        {dest.tag}
      </span>

      {/* Duration */}
      <span className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
        {dest.duration}
      </span>
    </div>

    <div className="p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-body font-medium text-brand-crimson uppercase tracking-wide">
          {dest.region}
        </span>
        <div className="flex items-center gap-1">
          <Star size={13} className="fill-brand-lime text-brand-lime" />
          <span className="text-xs font-semibold text-foreground">{dest.rating}</span>
          <span className="text-xs text-muted-foreground">({dest.reviews})</span>
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground mb-3">{dest.name}</h3>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground font-body">Prix par personne</p>
          <p className="font-display text-lg font-bold text-brand-crimson">{dest.price}</p>
        </div>
        <button className="flex items-center gap-1.5 bg-muted hover:bg-brand-crimson hover:text-primary-foreground text-foreground text-sm font-medium px-4 py-2 rounded-full transition-all duration-200">
          Découvrir
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </div>
);

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-lime/20 text-secondary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🗺️ Nos destinations phares
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explorez le{" "}
            <span className="italic text-brand-crimson">monde entier</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
            Découvrez nos voyages soigneusement sélectionnés dans les plus belles destinations du globe.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 border-2 border-brand-crimson text-brand-crimson font-semibold px-8 py-3.5 rounded-full hover:bg-brand-crimson hover:text-primary-foreground transition-all duration-200">
            Voir toutes nos destinations
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
