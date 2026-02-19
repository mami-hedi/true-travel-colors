import { useState, useEffect } from "react";
import { Menu, X, Phone, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Hôtels & Séjours", href: "/hotels" },
  { label: "Vols", href: "/vols" },
  { label: "Excursions", href: "/excursions" },
  { label: "Service Visa", href: "/visa" },
  { label: "À propos", href: "/apropos" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const transparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-card/95 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="True Travel" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-sm font-medium transition-colors duration-200 relative
                ${
                  isActive
                    ? "text-brand-crimson"
                    : transparent
                    ? "text-card hover:text-brand-lime"
                    : "text-foreground hover:text-brand-crimson"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-crimson rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Global search */}
          <Link
            to="/recherche"
            className={`p-2 rounded-full border transition-colors ${
              transparent
                ? "border-card/30 text-card hover:bg-card/10"
                : "border-border text-foreground hover:bg-muted"
            }`}
          >
            <Search size={18} />
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+21655500082"
            className={`flex items-center gap-2 text-sm font-medium ${
              transparent ? "text-card" : "text-brand-crimson"
            }`}
          >
            <Phone size={16} />
            +216 55 500 082
          </a>

          <Link
            to="/contact"
            className="bg-brand-crimson text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${transparent ? "text-card" : "text-foreground"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-medium hover:text-brand-crimson ${
                location.pathname === link.href
                  ? "text-brand-crimson"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Global search */}
          <Link
            to="/recherche"
            className="flex items-center gap-2 text-foreground hover:text-brand-crimson"
            onClick={() => setMenuOpen(false)}
          >
            <Search size={18} />
            Recherche globale
          </Link>

          <a
            href="tel:+21655500082"
            className="flex items-center gap-2 text-brand-crimson font-medium"
          >
            <Phone size={16} />
            +216 55 500 082
          </a>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-brand-crimson text-primary-foreground text-center font-semibold px-5 py-3 rounded-full"
          >
            Demander un devis
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
