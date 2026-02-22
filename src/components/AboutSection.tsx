import { CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-salon.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Spark Salon Interior"
              className="w-full rounded-sm shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-primary text-primary-foreground px-6 py-4 rounded-sm">
              <p className="text-3xl font-heading font-bold">15+</p>
              <p className="text-xs uppercase tracking-widest">Years of Expertise</p>
            </div>
          </div>

          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-3">
              The Lounge
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
              A MODERN GROOMING DESTINATION
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Spark Saloon & Spa represents the pinnacle of premium grooming. We combine traditional artistry with modern techniques to create an unparalleled experience. Our space is designed as a sanctuary where transformation meets relaxation.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Certified Experts</p>
                  <p className="text-xs text-muted-foreground">Industry leading stylists.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Premium Products</p>
                  <p className="text-xs text-muted-foreground">Only the finest brands.</p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              Meet the Team →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
