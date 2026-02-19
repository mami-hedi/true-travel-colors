import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, FileText, CalendarCheck, Ticket, Globe, Phone } from "lucide-react";
import visaHero from "@/assets/visa-hero.jpg";

const visaTypes = [
  {
    emoji: "🏖️",
    title: "Visa Touristique",
    desc: "Pour vos vacances, voyages de loisirs ou visites familiales.",
    color: "border-brand-lime",
    bgIcon: "bg-brand-lime/10",
    iconColor: "text-brand-lime",
  },
  {
    emoji: "💼",
    title: "Visa Professionnel",
    desc: "Pour vos déplacements d'affaires, conférences ou formations.",
    color: "border-brand-crimson",
    bgIcon: "bg-brand-crimson/10",
    iconColor: "text-brand-crimson",
  },
  {
    emoji: "🎓",
    title: "Visa Études",
    desc: "Pour vos séjours académiques, universités et échanges étudiants.",
    color: "border-brand-lime",
    bgIcon: "bg-brand-lime/10",
    iconColor: "text-brand-lime",
  },
];

const steps = [
  {
    icon: FileText,
    num: "01",
    title: "Montage du dossier",
    desc: "Nous préparons votre dossier complet et vérifions chaque document requis par l'ambassade pour maximiser vos chances d'obtention.",
    color: "text-brand-crimson",
    bg: "bg-brand-crimson/10",
  },
  {
    icon: CalendarCheck,
    num: "02",
    title: "Rendez-vous ambassade",
    desc: "Nous prenons en charge la prise de rendez-vous auprès de l'ambassade ou du consulat concerné dans les meilleurs délais.",
    color: "text-brand-lime",
    bg: "bg-brand-lime/10",
  },
  {
    icon: Ticket,
    num: "03",
    title: "Réservations incluses",
    desc: "Les réservations de billets d'avion et d'hôtels nécessaires pour votre dossier sont incluses dans notre service visa.",
    color: "text-brand-crimson",
    bg: "bg-brand-crimson/10",
  },
  {
    icon: CheckCircle2,
    num: "04",
    title: "Suivi & remise du visa",
    desc: "Nous assurons le suivi de votre demande et vous remettons votre visa dès son obtention.",
    color: "text-brand-lime",
    bg: "bg-brand-lime/10",
  },
];

const destinations = [
  { flag: "🇪🇺", name: "Schengen", countries: "France, Allemagne, Espagne, Italie, Portugal..." },
  { flag: "🇺🇸", name: "États-Unis", countries: "Visa B1/B2, Touriste & Affaires" },
  { flag: "🇨🇦", name: "Canada", countries: "Visa visiteur, étudiant, travail" },
  { flag: "🇬🇧", name: "Royaume-Uni", countries: "Standard Visitor Visa" },
  { flag: "🇦🇪", name: "Émirats Arabes Unis", countries: "Dubaï, Abu Dhabi, Sharjah" },
  { flag: "🌍", name: "Autres destinations", countries: "Chine, Turquie, Malaisie, Russie..." },
];

const Visa = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-0 min-h-[60vh] flex items-end overflow-hidden">
        <img src={visaHero} alt="Service Visa" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/30" />
        <div className="relative z-10 container mx-auto px-4 pb-16 pt-32">
          <span className="inline-block bg-brand-crimson/80 text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            🛂 Service Visa
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5 max-w-3xl">
            Un service visa{" "}
            <span className="italic text-brand-lime">fiable, rapide</span>{" "}
            et complet
          </h1>
          <p className="font-body text-primary-foreground/80 text-xl max-w-2xl mb-8">
            Que ce soit pour un séjour touristique, professionnel ou d'études, True Travel vous accompagne à chaque étape de votre demande de visa.
          </p>
          <a
            href="tel:+21655500082"
            className="inline-flex items-center gap-2 bg-brand-crimson text-primary-foreground font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            <Phone size={20} />
            Consulter gratuitement
          </a>
        </div>
      </section>

      {/* Types de visa */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Pour quel type de <span className="italic text-brand-crimson">séjour ?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaTypes.map((v) => (
              <div key={v.title} className={`bg-card rounded-2xl p-8 border-2 ${v.color} shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center`}>
                <div className="text-5xl mb-5">{v.emoji}</div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-brand-lime/20 text-secondary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              ⚙️ Notre processus
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Nous gérons tout <span className="italic text-brand-lime">pour vous</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-card rounded-2xl p-6 shadow-card text-center relative">
                <span className="absolute -top-3 left-6 font-display text-5xl font-bold text-muted/60">{step.num}</span>
                <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 mt-4`}>
                  <step.icon size={26} className={step.color} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations visa */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">
              Toutes les <span className="italic text-brand-crimson">destinations</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Nous traitons les demandes de visa pour le monde entier.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((dest) => (
              <div key={dest.name} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{dest.flag}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{dest.name}</h3>
                  <p className="font-body text-muted-foreground text-sm">{dest.countries}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <Globe size={40} className="text-brand-lime mx-auto mb-4" />
          <h3 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Besoin d'un visa ? Contactez-nous maintenant !
          </h3>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Consultation gratuite. Nos experts analysent votre situation et vous guident vers la meilleure solution.
          </p>
          <a
            href="tel:+21655500082"
            className="inline-flex items-center gap-2 bg-brand-crimson text-primary-foreground font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity text-lg"
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

export default Visa;
