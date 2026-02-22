import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scissors, Sparkles, Hand, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const servicesData = [
    {
        category: "Hair Styling",
        icon: <Scissors className="w-5 h-5" />,
        description: "Precision cuts and vibrant colors",
        items: [
            { name: "Men's Haircut & Finish", price: "$45", desc: "Consultation, wash, cut and style" },
            { name: "Women's Signature Cut", price: "$85", desc: "Personalized styling & blow dry" },
            { name: "Balayage & Toning", price: "$180", desc: "Full head artistic highlights" },
            { name: "Deep Conditioning Mask", price: "$35", desc: "Argan oil intensive treatment" },
            { name: "Global Color Root Touch-up", price: "$65", desc: "Seamless gray coverage" },
            { name: "Blow Dry & Style", price: "$40", desc: "For all hair lengths" },
        ]
    },
    {
        category: "Skin Care",
        icon: <Sparkles className="w-5 h-5" />,
        description: "Rejuvenate and glow",
        items: [
            { name: "Spark Signature Facial", price: "$110", desc: "Hydrating & purifying treatment (60 min)" },
            { name: "Microdermabrasion", price: "$145", desc: "Exfoliation for smoother skin texture" },
            { name: "Vitamin C Glow Facial", price: "$130", desc: "Brightening antioxidant boost" },
            { name: "Chemical Peel", price: "$95", desc: "Professional resurfacing treatment" },
        ]
    },
    {
        category: "Nails & Spa",
        icon: <Hand className="w-5 h-5" />,
        description: "The perfect finishing touch",
        items: [
            { name: "Luxury Manicure", price: "$35", desc: "Exfoliation, massage & polish" },
            { name: "Royal Pedicure", price: "$55", desc: "Aromatic soak & callus removal" },
            { name: "Gel Extension", price: "$70", desc: "Durable and high-shine finish" },
            { name: "Aromatherapy Massage", price: "$90", desc: "Essential oil therapeutic massage (60 min)" },
        ]
    },
    {
        category: "Makeup & Grooming",
        icon: <Heart className="w-5 h-5" />,
        description: "Special occasions and everyday perfection",
        items: [
            { name: "Bridal Makeup Package", price: "$450", desc: "Full trial, wedding day & hair" },
            { name: "Evening Glam Makeup", price: "$120", desc: "Contour, eye makeup & lashes" },
            { name: "Beard Grooming & Shape", price: "$25", desc: "Hot towel and razor finish" },
            { name: "Eyebrow Threading & Tint", price: "$30", desc: "Perfectly arched definition" },
        ]
    }
];

const Services = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden pt-20">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop')",
                        filter: "brightness(0.4)"
                    }}
                />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 animate-fade-in">
                        Our Services
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-body">
                        Indulge in a premium grooming experience. From precision haircuts to rejuvenating spa treatments, we redefine beauty.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-1/4 space-y-8">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">Categories</h3>
                            <nav className="space-y-2">
                                {servicesData.map((category) => (
                                    <button
                                        key={category.category}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-secondary rounded-sm transition-colors group"
                                    >
                                        <span className="text-primary group-hover:scale-110 transition-transform">{category.icon}</span>
                                        <span className="font-medium">{category.category}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="bg-primary p-8 rounded-sm text-white relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-heading font-bold mb-2 italic">Membership Plan</h4>
                                <p className="text-white/80 text-sm mb-6">
                                    Get up to 30% off on all services with our Spark Platinum membership.
                                </p>
                                <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold uppercase tracking-wider">
                                    Join Now
                                </Button>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <Sparkles size={120} />
                            </div>
                        </div>
                    </aside>

                    {/* Service List */}
                    <main className="lg:w-3/4 space-y-16">
                        {servicesData.map((category) => (
                            <div key={category.category} className="space-y-8 animate-fade-in-up">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 text-primary rounded-sm">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-heading font-bold">{category.category}</h2>
                                        <p className="text-muted-foreground text-sm">{category.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                    {category.items.map((item) => (
                                        <div key={item.name} className="group border-b border-border/50 pb-4">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h4 className="text-lg font-medium group-hover:text-primary transition-colors">{item.name}</h4>
                                                <span className="text-primary font-bold">{item.price}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="pt-12 border-t border-border flex justify-center">
                            <Link to="/booking">
                                <Button className="px-12 py-6 text-lg font-bold uppercase tracking-widest bg-primary hover:bg-primary/90">
                                    Book Your Appointment <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </main>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
