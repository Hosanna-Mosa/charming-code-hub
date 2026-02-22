import { Scissors, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceSkin from "@/assets/service-skin.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";

const services = [
  { title: "Hair", image: serviceHair, icon: Scissors, link: "/services" },
  { title: "Nails", image: serviceNails, icon: Sparkles, link: "/services" },
  { title: "Skin", image: serviceSkin, icon: Sparkles, link: "/services" },
  { title: "Makeup", image: serviceMakeup, icon: Sparkles, link: "/services" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-3">
          Experience Excellence
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          PREMIUM SERVICES
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <service.icon className="w-5 h-5 text-primary-foreground mb-2" />
                <h3 className="text-lg font-heading font-bold text-primary-foreground">
                  {service.title}
                </h3>
                <p className="text-xs tracking-widest uppercase text-primary-foreground/70 mt-1 group-hover:text-primary transition-colors">
                  Explore →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
