import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Building } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-foreground to-foreground/80">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-brand-lime/20 border border-brand-lime/40 text-brand-lime text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            📞 Contactez-nous
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Parlons de votre <br />
            <span className="italic text-brand-lime">prochain voyage</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-xl max-w-xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et préparer votre voyage sur-mesure.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info side */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Address */}
            <div className="bg-card rounded-2xl p-7 shadow-card">
              <div className="w-12 h-12 bg-brand-crimson/10 rounded-xl flex items-center justify-center mb-5">
                <Building size={22} className="text-brand-crimson" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Notre agence</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                True Travel<br />
                Ennaser 2, Résidence Le Boulevard<br />
                Tunisie
              </p>
            </div>

            {/* Phone */}
            <a href="tel:+21655500082" className="bg-brand-crimson rounded-2xl p-7 shadow-card hover:opacity-95 transition-opacity group">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-5">
                <Phone size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">Téléphone</h3>
              <p className="font-body text-primary-foreground/90 text-xl font-semibold">+216 55 500 082</p>
              <p className="font-body text-primary-foreground/70 text-sm mt-1">Disponible Lun–Sam 8h30–18h30</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/21655500082"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[hsl(142,71%,45%)] rounded-2xl p-7 shadow-card hover:opacity-95 transition-opacity"
            >
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-5">
                <MessageCircle size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">WhatsApp</h3>
              <p className="font-body text-primary-foreground/80 text-sm">Envoyez-nous un message directement</p>
            </a>

            {/* Hours */}
            <div className="bg-card rounded-2xl p-7 shadow-card">
              <div className="w-12 h-12 bg-brand-lime/10 rounded-xl flex items-center justify-center mb-5">
                <Clock size={22} className="text-brand-lime" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Horaires</h3>
              <div className="space-y-2 font-body text-sm">
                {[
                  { day: "Lundi – Vendredi", hours: "8h30 – 18h30" },
                  { day: "Samedi", hours: "9h00 – 17h00" },
                  { day: "Dimanche", hours: "9h00 – 13h00" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-semibold text-foreground">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:col-span-3 bg-card rounded-2xl p-8 md:p-10 shadow-card">
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">Demande de devis</h2>
            <p className="font-body text-muted-foreground mb-8">Réponse sous 24h garantie.</p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Nom complet *</label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
                    className="w-full bg-muted rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-brand-crimson transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+216 XX XXX XXX"
                    className="w-full bg-muted rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-brand-crimson transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full bg-muted rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-brand-crimson transition-colors"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">Service souhaité *</label>
                <select
                  required
                  className="w-full bg-muted rounded-xl px-4 py-3 font-body text-foreground outline-none border border-transparent focus:border-brand-crimson transition-colors appearance-none"
                >
                  <option value="">Sélectionner un service...</option>
                  <option value="hotel">Hébergement Hôtel</option>
                  <option value="visa">Service Visa</option>
                  <option value="vol">Réservation Vol</option>
                  <option value="voyage">Voyage sur-mesure</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">Destination & dates</label>
                <input
                  type="text"
                  placeholder="Ex : Paris, du 15 au 22 juillet"
                  className="w-full bg-muted rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-brand-crimson transition-colors"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1.5">Votre message</label>
                <textarea
                  rows={4}
                  placeholder="Décrivez votre projet de voyage, vos préférences, le nombre de personnes..."
                  className="w-full bg-muted rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-brand-crimson transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-crimson text-primary-foreground font-bold py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
              >
                <Send size={18} />
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
            <div className="bg-muted h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={40} className="text-brand-crimson mx-auto mb-3" />
                <p className="font-display text-xl font-bold text-foreground">Ennaser 2, Résidence Le Boulevard</p>
                <p className="font-body text-muted-foreground">True Travel – Agence de Voyage, Tunisie</p>
                <a
                  href="https://maps.google.com/?q=Ennaser+2+Residence+Le+Boulevard+Tunisie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-brand-crimson text-primary-foreground font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm"
                >
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
