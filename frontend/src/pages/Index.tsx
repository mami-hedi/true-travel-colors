import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ArrowRight, Hotel, FileCheck, Plane, Star, Phone, Mail, MapPin, Facebook, Instagram, Clock} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Hotel,
    title: "Hôtels & Séjours",
    desc: "Les meilleurs hôtels en Tunisie : Sousse, Monastir, Hammamet, Djerba et bien plus. Tout inclus, demi-pension ou chambre seule.",
    href: "/hotels",
    color: "text-brand-lime",
    bg: "bg-brand-lime/10",
    gradient: "from-brand-lime/5 to-transparent",
  },
  {
    icon: FileCheck,
    title: "Service Visa",
    desc: "Fiable, rapide et complet. Schengen, USA, Canada, UK, Émirats… Montage de dossier, RDV ambassade et réservations incluses.",
    href: "/visa",
    color: "text-brand-crimson",
    bg: "bg-brand-crimson/10",
    gradient: "from-brand-crimson/5 to-transparent",
  },
  {
    icon: Plane,
    title: "Réservation de Vols",
    desc: "Billets d'avion aux meilleurs tarifs depuis Tunis, Monastir et Djerba vers toutes les destinations mondiales.",
    href: "/vols",
    color: "text-brand-lime",
    bg: "bg-brand-lime/10",
    gradient: "from-brand-lime/5 to-transparent",
  },
];

const testimonials = [
  {
    name: "Sonia B.",
    text: "Service visa Schengen impeccable ! Dossier monté en 2 jours, rendez-vous pris la semaine suivante. Merci True Travel !",
    rating: 5,
    service: "Visa Schengen",
  },
  {
    name: "Karim M.",
    text: "Séjour à Hammamet organisé parfaitement. Hôtel 5 étoiles, transport inclus. Je recommande vivement !",
    rating: 5,
    service: "Hôtel Hammamet",
  },
  {
    name: "Leila T.",
    text: "Vol Tunis-Paris au meilleur prix, billet reçu en quelques heures. Équipe très professionnelle.",
    rating: 5,
    service: "Vol International",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-brand-crimson/10 text-brand-crimson text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                ✨ Nos services
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Tout ce dont vous avez besoin <br />
                <span className="italic text-brand-crimson">pour voyager</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
                Hôtels, visas, vols — True Travel gère tout de A à Z pour que vous puissiez voyager sereinement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className={`group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-border bg-gradient-to-br ${service.gradient}`}
                >
                  <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <service.icon size={26} className={service.color} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <div className={`flex items-center gap-2 font-semibold text-sm ${service.color}`}>
                    En savoir plus
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-brand-lime/20 text-secondary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                🏆 Pourquoi nous choisir
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                L'agence de confiance <span className="italic text-brand-lime">depuis des années</span>
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Expertise locale & internationale", desc: "Nous connaissons parfaitement les procédures et destinations pour vous offrir le meilleur service." },
                  { title: "Prix compétitifs garantis", desc: "Grâce à nos partenariats directs avec hôtels, compagnies aériennes et ambassades." },
                  { title: "Accompagnement personnalisé", desc: "Un conseiller dédié vous suit de la planification jusqu'au retour de votre voyage." },
                  { title: "Rapidité & fiabilité", desc: "Devis en 24h, billets émis rapidement, dossiers visa traités avec soin et efficacité." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-crimson flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-primary-foreground text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-foreground">{item.title}</h4>
                      <p className="font-body text-muted-foreground text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-crimson text-primary-foreground font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Demander un devis
                </Link>
                <a
                  href="tel:+21655500082"
                  className="inline-flex items-center gap-2 border-2 border-brand-crimson text-brand-crimson font-bold px-6 py-3 rounded-full hover:bg-brand-crimson/5 transition-colors"
                >
                  +216 55 500 082
                </a>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: "10k+", label: "Clients satisfaits", icon: "😊" },
                { num: "120+", label: "Pays couverts", icon: "🌍" },
                { num: "98%", label: "Visas obtenus", icon: "🛂" },
                { num: "24h", label: "Délai de réponse", icon: "⚡" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-2xl p-6 shadow-card text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="font-display text-3xl font-bold text-brand-crimson">{stat.num}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl font-bold text-foreground mb-3">
                Ce que disent <span className="italic text-brand-crimson">nos clients</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-card rounded-2xl p-7 shadow-card">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-brand-lime text-brand-lime" />
                    ))}
                  </div>
                  <p className="font-body text-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div>
                    <p className="font-display font-bold text-foreground">{t.name}</p>
                    <p className="font-body text-xs text-brand-crimson font-medium mt-0.5">{t.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
      <div className="bg-brand-crimson py-14 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Prêt pour votre prochain voyage ?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Nos experts sont disponibles pour créer l'itinéraire parfait selon vos rêves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+21655500082"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-brand-crimson font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              <Phone size={18} />
              +216 55 500 082
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground font-bold px-8 py-3.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
            >
              <Mail size={18} />
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
      
      </main>
      <Footer />
    </div>
  );
};

export default Index;
