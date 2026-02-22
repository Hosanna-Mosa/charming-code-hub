import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="book" className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4 uppercase text-white">
          Ready for Your Spark Transformation?
        </h2>
        <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto text-white/90">
          Secure your appointment today and experience the difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:8886964888"
            className="inline-flex items-center justify-center gap-3 bg-foreground text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-foreground/90 transition-colors rounded-sm"
          >
            <Phone className="w-4 h-4" />
            <div className="text-left">
              <span className="block text-[10px] text-primary-foreground/60">Call Us Anytime</span>
              <span>888 69 64 888</span>
            </div>
          </a>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center border-2 border-primary-foreground text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-primary-foreground hover:text-primary transition-all rounded-sm"
          >
            Book Online Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
