import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center">
            <span className="text-primary text-lg">✂</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-[0.3em] text-primary-foreground mb-4">
          SP<span className="text-primary">A</span>RK
        </h1>
        <p className="text-primary-foreground/50 text-sm tracking-[0.4em] uppercase mb-6">
          Saloon & Spa
        </p>
        <p className="text-xl md:text-2xl font-heading italic text-primary-foreground/90 mb-10 max-w-lg mx-auto">
          Your Transformation, <span className="font-bold not-italic">Our Passion.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-primary-foreground hover:text-foreground transition-all"
          >
            Our Services
          </a>
          <a
            href="#book"
            className="bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Secure Appointment
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
