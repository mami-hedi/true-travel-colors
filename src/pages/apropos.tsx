import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Globe, Users, Award, HeartHandshake, Shield } from "lucide-react";

const Apropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-foreground to-foreground/80">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-brand-lime/20 border border-brand-lime/40 text-brand-lime text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            🌍 À propos de nous
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            True Travel,<br />
            <span className="italic text-brand-lime">votre partenaire de confiance</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-xl max-w-2xl mx-auto">
            Agence de voyage spécialisée dans l’organisation de séjours, la réservation de vols et l’assistance visa.
            Nous créons des expériences uniques, adaptées à vos envies.
          </p>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Qui sommes-nous ?
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-5">
              <strong>True Travel</strong> est une agence de voyage basée en Tunisie, spécialisée dans
              l’organisation de voyages sur-mesure, la réservation de vols, la gestion des séjours hôteliers
              et l’accompagnement dans les démarches de visa.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-5">
              Notre mission est de proposer des solutions de voyage fiables, accessibles et adaptées aux besoins
              de chaque client, en garantissant qualité de service, transparence et satisfaction.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Grâce à notre réseau de partenaires internationaux, nous offrons des tarifs compétitifs
              et un accompagnement complet à chaque étape de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Plane, label: "Vols internationaux" },
              { icon: Globe, label: "Séjours & circuits" },
              { icon: Users, label: "Clients satisfaits" },
              { icon: Award, label: "Expertise & fiabilité" },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-card text-center">
                <item.icon size={36} className="text-brand-crimson mx-auto mb-3" />
                <p className="font-body font-semibold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Nos valeurs
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Les principes qui guident notre travail au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HeartHandshake,
                title: "Satisfaction client",
                text: "Votre satisfaction est notre priorité absolue.",
              },
              {
                icon: Shield,
                title: "Fiabilité",
                text: "Des services transparents, sûrs et conformes aux normes.",
              },
              {
                icon: Globe,
                title: "Ouverture sur le monde",
                text: "Des destinations variées et des expériences authentiques.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 shadow-card text-center">
                <item.icon size={40} className="text-brand-lime mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apropos;
