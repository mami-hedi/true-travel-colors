import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, Plane } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      

      {/* Footer content */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <img src={logo} alt="True Travel" className="h-14 w-auto object-contain bg-card rounded-lg p-1 mb-5" />
          <p className="font-body text-primary-foreground/70 leading-relaxed max-w-xs mb-6">
            Votre agence de voyage de confiance. Nous créons des voyages sur-mesure mémorables : hôtels, visas, vols et bien plus.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram].map((Icon, i) => (
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
            {[
              { label: "Accueil", href: "/" },
  { label: "Hôtels & Séjours", href: "/hotels" },
  { label: "Vols", href: "/vols" },
  { label: "Excursions", href: "/excursions" },
  { label: "Service Visa", href: "/visa" },
  { label: "À propos", href: "/apropos" },
  { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="hover:text-brand-lime transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-5 text-brand-lime">Nous trouver</h4>
          <ul className="space-y-4 font-body text-primary-foreground/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-lime flex-shrink-0 mt-0.5" />
              <span>Ennaser 2, Résidence Le Boulevard, Tunisie</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-lime flex-shrink-0" />
              <a href="tel:+21655500082" className="hover:text-brand-lime transition-colors">+216 55 500 082</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-lime flex-shrink-0" />
              <a href="mailto:contact@truetravel.tn" className="hover:text-brand-lime transition-colors">contact@truetravel.tn</a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-brand-lime flex-shrink-0" />
              <span>Lun–Sam : 8h30–18h30</span>
            </li>
            <li className="flex items-center gap-3">
              <Plane size={18} className="text-brand-lime flex-shrink-0" />
              <span>Dim : 9h–13h</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 font-body text-sm text-primary-foreground/50">
          <p>© 2026 True Travel – Agence de Voyage. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-lime transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-brand-lime transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
