import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center justify-center overflow-hidden pt-20">
                <div
                    className="absolute inset-0 bg-[#0F172A]"
                />
                <div className="relative z-10 text-center px-6">
                    <p className="text-primary text-sm tracking-[0.4em] uppercase font-bold mb-4 animate-fade-in">Get In Touch</p>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 animate-fade-in-up">
                        Contact Us
                    </h1>
                    <div className="w-12 h-0.5 bg-primary mx-auto" />
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-2xl font-heading font-bold italic">Visit Our Sanctuary</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Location</h4>
                                            <p className="text-muted-foreground text-sm">123 Luxury Lane, Spark Square<br />Design District, ST 56789</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Phone</h4>
                                            <p className="text-muted-foreground text-sm">Main: 888 69 64 888<br />Booking: 888 69 64 889</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Email</h4>
                                            <p className="text-muted-foreground text-sm">hello@sparklifestyle.com<br />careers@sparklifestyle.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-10 border-t border-border">
                                <h2 className="text-2xl font-heading font-bold italic">Follow Us</h2>
                                <div className="flex gap-4">
                                    {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                                        <a key={idx} href="#" className="w-10 h-10 border border-border flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all text-muted-foreground">
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2 bg-secondary p-8 md:p-12 rounded-sm shadow-sm">
                            <h2 className="text-2xl font-heading font-bold mb-8">Send us a Message</h2>
                            <form className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="How can we help?"
                                        className="w-full bg-white border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                                    <textarea
                                        rows={6}
                                        placeholder="Your message here..."
                                        className="w-full bg-white border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <Button className="w-full md:w-auto px-12 py-6 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-sm">
                                        Send Message <Send className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Mockup */}
            <section className="h-[400px] bg-slate-200 relative">
                <div className="absolute inset-0 grayscale flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1524666041070-9d87656c25bb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="p-8 bg-white shadow-2xl rounded-sm text-center">
                        <MapPin className="text-primary mx-auto mb-2" size={32} />
                        <p className="font-heading font-bold">SPARK Saloon & Spa</p>
                        <p className="text-xs text-muted-foreground">Opening 09:00 AM - 09:00 PM</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
