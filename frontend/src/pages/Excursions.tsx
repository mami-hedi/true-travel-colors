import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Map, Clock, Users, Utensils, ArrowRight, Star } from "lucide-react";
import sahara from "@/assets/dest-africa.jpg";
import bateau from "@/assets/hotel-djerba.jpg";
import quad from "@/assets/visa-hero.jpg";
import carthage from "@/assets/vols-hero.jpg";

const excursions = [
  {
    title: "Safari Sahara 2 jours",
    city: "Douz • Tozeur",
    desc: "Aventure inoubliable dans le désert tunisien : dromadaire, quad, oasis, nuit sous tente.",
    image: sahara,
    duration: "2 jours",
    price: "À partir de 290 DT",
    rating: 5,
    label: "Best Seller",
    labelColor: "bg-brand-crimson text-primary-foreground",
  },
  {
    title: "Sortie bateau & dauphins",
    city: "Monastir",
    desc: "Balade en mer, baignade, musique, animation et déjeuner inclus.",
    image: bateau,
    duration: "1 jour",
    price: "À partir de 65 DT",
    rating: 5,
    label: "Famille",
    labelColor: "bg-brand-lime text-secondary-foreground",
  },
  {
    title: "Quad & buggy aventure",
    city: "Hammamet",
    desc: "Sensations fortes dans les dunes, encadré par des professionnels.",
    image: quad,
    duration: "3 heures",
    price: "À partir de 85 DT",
    rating: 4,
    label: "Adrénaline",
    labelColor: "bg-brand-crimson text-primary-foreground",
  },
  {
    title: "Carthage & Sidi Bou Saïd",
    city: "Tunis",
    desc: "Découverte culturelle, ruines romaines, médina et village bleu et blanc.",
    image: carthage,
    duration: "1 jour",
    price: "À partir de 70 DT",
    rating: 5,
    label: "Culture",
    labelColor: "bg-brand-lime text-secondary-foreground",
  },
];

const features = [
  { icon: Map, label: "Guide professionnel" },
  { icon: Clock, label: "Programmes flexibles" },
  { icon: Users, label: "Groupes & privés" },
  { icon: Utensils, label: "Repas inclus" },
];

const Excursions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/90 to-brand-lime/30 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-brand-crimson/20 border border-brand-crimson/40 text-brand-crimson text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            🏝️ Excursions & Activités
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5">
            Vivez des <span className="italic text-brand-lime">expériences uniques</span>
          </h1>
          <p className="font-body text-primary-foreground/75 text-xl max-w-2xl mx-auto">
            Des aventures dans le désert aux sorties en mer, découvrez nos meilleures excursions en Tunisie.
          </p>
        </div>
      </section>

      {/* Features */}
      <div className="bg-card border-b border-border py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-muted-foreground">
                <f.icon size={18} className="text-brand-crimson" />
                <span className="font-body text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Excursions grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-bold text-foreground mb-3">
            Nos meilleures <span className="italic text-brand-crimson">excursions</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Sélection d'activités incontournables pour découvrir la Tunisie autrement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {excursions.map((exc) => (
            <div key={exc.title} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row">
              <div className="relative w-full md:w-56 h-56 overflow-hidden">
                <img src={exc.image} alt={exc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${exc.labelColor}`}>
                  {exc.label}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(exc.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-brand-lime text-brand-lime" />
                    ))}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                    {exc.title}
                  </h3>

                  <p className="text-xs text-muted-foreground mb-2">{exc.city}</p>

                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {exc.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <div>
                    <p className="text-xs text-muted-foreground font-body">Durée</p>
                    <p className="font-display text-sm font-bold text-foreground">
                      {exc.duration}
                    </p>
                    <p className="font-display text-lg font-bold text-brand-crimson mt-1">
                      {exc.price}
                    </p>
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

      {/* CTA */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-3xl font-bold text-foreground mb-4">
            Créez votre programme sur mesure
          </h3>
          <p className="text-muted-foreground font-body max-w-xl mx-auto mb-8">
            Excursions privées, groupes, familles, incentives… nous adaptons selon vos envies.
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

export default Excursions;
