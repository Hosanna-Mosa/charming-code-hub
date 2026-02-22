import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-salon.jpg";
import { CheckCircle, Sparkles, Award, Users } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop')",
                        filter: "brightness(0.4)"
                    }}
                />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 animate-fade-in">
                        About Spark
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-body">
                        Redefining luxury grooming since 2008. Discover our story and the passion behind every transformation.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div className="relative group">
                            <img
                                src={aboutImage}
                                alt="Spark Salon Interior"
                                className="w-full rounded-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground px-8 py-6 rounded-sm shadow-xl hidden lg:block">
                                <p className="text-4xl font-heading font-bold">15+</p>
                                <p className="text-xs uppercase tracking-[0.2em] font-semibold">Years of Excellence</p>
                            </div>
                        </div>

                        <div className="space-y-8 animate-fade-in-up">
                            <div>
                                <p className="text-primary text-sm tracking-[0.3em] uppercase font-bold mb-3">Our Vision</p>
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                                    CREATING A NEW STANDARD IN BEAUTY
                                </h2>
                            </div>

                            <p className="text-muted-foreground text-lg leading-relaxed italic">
                                "We believe that every individual has a unique spark. Our mission is to illuminate that spark through expert craftsmanship and personalized care."
                            </p>

                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Established as a sanctuary for those who value quality over quantity, Spark Saloon & Spa has grown into a cornerstone of luxury in the city. Our journey began with a simple idea: to provide a grooming experience that feels like a retreat, not just an appointment.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-border">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Award size={20} />
                                        <span className="font-bold uppercase tracking-widest text-xs">Quality</span>
                                    </div>
                                    <p className="text-sm font-medium">Award winning techniques and premium products.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Users size={20} />
                                        <span className="font-bold uppercase tracking-widest text-xs">Team</span>
                                    </div>
                                    <p className="text-sm font-medium">Internationally certified master stylists.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-4">Our Core Values</h2>
                        <div className="w-12 h-0.5 bg-primary mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {[
                            { title: "Craftsmanship", desc: "Every cut, color, and treatment is performed with meticulous attention to detail." },
                            { title: "Innovation", desc: "We constantly update our skills and tools to reflect the latest global trends." },
                            { title: "Hospitality", desc: "Our space is your sanctuary. We prioritize your comfort and relaxation above all." }
                        ].map((value) => (
                            <div key={value.title} className="text-center space-y-4 p-8 bg-white border border-border/50 rounded-sm hover:shadow-xl transition-all">
                                <h3 className="text-xl font-heading font-bold text-primary italic">{value.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
