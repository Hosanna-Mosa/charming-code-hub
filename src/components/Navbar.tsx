import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold tracking-widest text-primary-foreground">
            SP<span className="text-primary">A</span>RK
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body font-medium tracking-widest uppercase text-primary-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:8886964888" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>888 69 64 888</span>
          </a>
          <a
            href="#book"
            className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-sm"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-foreground border-t border-primary-foreground/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-primary-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-center rounded-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
