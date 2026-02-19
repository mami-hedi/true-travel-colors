import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "#" },
    { label: "Destinations", href: "#destinations" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="True Travel - Agence de Voyage"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-brand-crimson ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+33000000000"
            className="flex items-center gap-2 text-sm font-medium text-brand-crimson"
          >
            <Phone size={16} />
            <span>Nous appeler</span>
          </a>
          <a
            href="#contact"
            className="bg-brand-crimson text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Demander un devis
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? "text-foreground" : "text-card"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground font-medium hover:text-brand-crimson transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-crimson text-primary-foreground text-center font-semibold px-5 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Demander un devis
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
