import { Globe, Shield, HeartHandshake, Headphones, Star, Clock } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Voyages sur-mesure",
    description: "Chaque voyage est conçu selon vos désirs, votre rythme et votre budget. Aucun itinéraire identique.",
    color: "text-brand-lime",
    bg: "bg-brand-lime/10",
  },
  {
    icon: Shield,
    title: "Assurance & sécurité",
    description: "Voyagez l'esprit tranquille avec nos formules d'assurance complètes adaptées à chaque type de voyage.",
    color: "text-brand-crimson",
    bg: "bg-brand-crimson/10",
  },
  {
    icon: Headphones,
    title: "Assistance 24h/7j",
    description: "Notre équipe est disponible à toute heure pour vous assister pendant votre voyage, où que vous soyez.",
    color: "text-brand-lime",
    bg: "bg-brand-lime/10",
  },
  {
    icon: HeartHandshake,
    title: "Expertise locale",
    description: "Des partenaires locaux dans chaque destination pour des expériences authentiques et uniques.",
    color: "text-brand-crimson",
    bg: "bg-brand-crimson/10",
  },
  {
    icon: Star,
    title: "Hôtels sélectionnés",
    description: "Une sélection rigoureuse d'hébergements de charme, des boutique-hôtels aux grands palaces.",
    color: "text-brand-lime",
    bg: "bg-brand-lime/10",
  },
  {
    icon: Clock,
    title: "Planification express",
    description: "Obtenez votre itinéraire personnalisé en 48h. Nous gérons tout : vols, hôtels, transferts et activités.",
    color: "text-brand-crimson",
    bg: "bg-brand-crimson/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-crimson/10 text-brand-crimson text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ✨ Pourquoi nous choisir
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            L'expérience True Travel,{" "}
            <span className="italic text-brand-lime">autrement</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
            Nous mettons tout en œuvre pour que votre voyage soit une expérience inoubliable, de la planification au retour.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                <service.icon size={22} className={service.color} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial highlight */}
        <div className="mt-16 bg-gradient-to-r from-brand-crimson to-brand-lime rounded-3xl p-px">
          <div className="bg-card rounded-3xl p-10 text-center">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-brand-lime text-brand-lime" />
              ))}
            </div>
            <blockquote className="font-display text-xl italic text-foreground max-w-2xl mx-auto mb-4">
              "True Travel a organisé notre voyage de noces aux Maldives avec une attention aux détails extraordinaire. Chaque moment était parfait, du premier au dernier jour."
            </blockquote>
            <p className="font-body text-muted-foreground font-medium">
              — Sophie & Marc D., <span className="text-brand-crimson">Voyage de noces aux Maldives</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
