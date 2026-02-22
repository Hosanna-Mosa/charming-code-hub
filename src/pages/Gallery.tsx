import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Camera, Instagram, Expand } from "lucide-react";

const galleryImages = [
    { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop", title: "Salon Interior", category: "Space" },
    { url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop", title: "Luxury Spa", category: "Spa" },
    { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop", title: "Hair Styling", category: "Hair" },
    { url: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=2070&auto=format&fit=crop", title: "Makeup Artistry", category: "Makeup" },
    { url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop", title: "Nail Care", category: "Nails" },
    { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop", title: "Barber Service", category: "Grooming" },
    { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop", title: "Product Lounge", category: "Space" },
    { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop", title: "Global Coloring", category: "Hair" },
];

const Gallery = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center justify-center overflow-hidden pt-20">
                <div
                    className="absolute inset-0 bg-[#0F172A]"
                />
                <div className="relative z-10 text-center px-6">
                    <p className="text-primary text-sm tracking-[0.4em] uppercase font-bold mb-4 animate-fade-in">Visual Journey</p>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 animate-fade-in-up">
                        Our Gallery
                    </h1>
                    <div className="w-12 h-0.5 bg-primary mx-auto" />
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {galleryImages.map((img, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden aspect-square bg-secondary animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                    <span className="text-xs text-primary font-bold uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
                                    <h3 className="text-white font-heading font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.title}</h3>
                                    <button className="mt-4 p-2 bg-white/10 rounded-full text-white hover:bg-primary transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                        <Expand size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social CTA */}
                    <div className="mt-20 text-center bg-secondary py-16 px-6">
                        <Instagram className="w-10 h-10 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-heading font-bold mb-4">Follow Our Moments</h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            Stay updated with daily inspirations, client transformations, and exclusive behind-the-scenes content on our Instagram.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-8 py-3 font-bold uppercase tracking-widest hover:bg-primary transition-colors"
                        >
                            @spark_saloon_spa
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Gallery;
