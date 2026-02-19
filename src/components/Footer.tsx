import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Plane } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
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
              href="tel:+33000000000"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-brand-crimson font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              <Phone size={18} />
              Appeler maintenant
            </a>
            <a
              href="mailto:contact@truetravel.fr"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground font-bold px-8 py-3.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
            >
              <Mail size={18} />
              Nous écrire
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <img src={logo} alt="True Travel" className="h-14 w-auto object-contain bg-card rounded-lg p-1 mb-5" />
          <p className="font-body text-primary-foreground/70 leading-relaxed max-w-xs mb-6">
            Votre agence de voyage de confiance depuis plus de 15 ans. Nous créons des voyages sur-mesure mémorables aux quatre coins du monde.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-brand-lime hover:text-secondary-foreground flex items-center justify-center transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-5 text-brand-lime">Navigation</h4>
          <ul className="space-y-3 font-body text-primary-foreground/70">
            {["Accueil", "Destinations", "Services", "À propos", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-brand-lime transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-5 text-brand-lime">Contact</h4>
          <ul className="space-y-4 font-body text-primary-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-lime flex-shrink-0 mt-0.5" />
              <span>12 Rue du Voyage, 75001 Paris, France</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-lime flex-shrink-0" />
              <a href="tel:+33000000000" className="hover:text-brand-lime transition-colors">+33 (0)1 00 00 00 00</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-lime flex-shrink-0" />
              <a href="mailto:contact@truetravel.fr" className="hover:text-brand-lime transition-colors">contact@truetravel.fr</a>
            </li>
            <li className="flex items-center gap-3">
              <Plane size={18} className="text-brand-lime flex-shrink-0" />
              <span>Lun–Sam : 9h–19h</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 font-body text-sm text-primary-foreground/50">
          <p>© 2024 True Travel – Agence de Voyage. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-lime transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-brand-lime transition-colors">CGV</a>
            <a href="#" className="hover:text-brand-lime transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
