import { Instagram, Twitter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold tracking-widest mb-4">
              SP<span className="text-primary">A</span>RK
            </h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              The ultimate destination for luxury grooming and relaxation. Experience the spark of beauty and confidence.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About Spark", path: "/about" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <div className="flex justify-between">
                <span>Mon - Sat</span>
                <span>09:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 - 20:00</span>
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-primary font-semibold">Spark 24/7</span>
                <span className="text-primary font-semibold">On Call</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/60 mb-4">
              Join our list for exclusive offers and trends.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary rounded-l-sm"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2.5 hover:bg-primary/90 transition-colors rounded-r-sm">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2024 SPARK Saloon and Spa. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
