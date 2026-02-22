import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scissors, Leaf, Paintbrush, UserRound, Sparkles, Hand, Heart, User, Calendar as CalendarIcon, Clock, CheckCircle2, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
    { id: "hair", name: "Hair", icon: <Scissors className="w-6 h-6" /> },
    { id: "skin", name: "Skin Care", icon: <Leaf className="w-6 h-6" /> },
    { id: "nails", name: "Nails", icon: <Paintbrush className="w-6 h-6" /> },
    { id: "makeup", name: "Makeup", icon: <UserRound className="w-6 h-6" /> },
];

const services = [
    { id: "s1", name: "Signature Haircut & Styling", time: "45 mins", price: 65, desc: "Wash, cut, scalp massage & blow-dry" },
    { id: "s2", name: "Global Coloring", time: "90 mins", price: 120, desc: "Full head color with premium organic dyes" },
    { id: "s3", name: "Keratin Treatment", time: "120 mins", price: 180, desc: "Smooth, frizz-free hair for up to 6 months" },
];

const professionals = [
    { id: "p1", name: "Marcus", role: "Master Barber", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
    { id: "p2", name: "Elena", role: "Color Specialist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
    { id: "p3", name: "Julian", role: "Senior Stylist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop" },
    { id: "p4", name: "Any Expert", role: "Best Available", image: null },
];

const slots = ["09:00 AM", "10:30 AM", "11:45 AM", "02:15 PM", "04:00 PM", "05:30 PM"];

const Booking = () => {
    const [step, setStep] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("hair");
    const [selectedService, setSelectedService] = useState(services[0]);
    const [selectedProfessional, setSelectedProfessional] = useState(professionals[0]);
    const [selectedDate, setSelectedDate] = useState(3); // Mocking Nov 3
    const [selectedTime, setSelectedTime] = useState("11:45 AM");

    return (
        <div className="min-h-screen bg-[#0F172A] text-white">
            <Navbar />

            <main className="container mx-auto px-6 pt-32 pb-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="flex-1 space-y-12">
                        <header className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Schedule Your Glow Up</h1>
                            <p className="text-slate-400 text-lg">Experience premium grooming and relaxation tailored just for you.</p>
                        </header>

                        {/* Stepper */}
                        <div className="flex gap-8 border-b border-white/10 pb-4">
                            {[
                                { n: 1, label: "SERVICE" },
                                { n: 2, label: "PROFESSIONAL" },
                                { n: 3, label: "DATE & TIME" }
                            ].map((s) => (
                                <button
                                    key={s.n}
                                    onClick={() => setStep(s.n)}
                                    className={cn(
                                        "text-sm font-bold tracking-widest transition-colors pb-4 -mb-[17px] border-b-2",
                                        step === s.n ? "text-primary border-primary" : "text-slate-500 border-transparent hover:text-slate-300"
                                    )}
                                >
                                    {s.n}. {s.label}
                                </button>
                            ))}
                        </div>

                        {/* Step 1: Services */}
                        <div className={cn("space-y-10 animate-fade-in", step !== 1 && "hidden")}>
                            <div className="space-y-6">
                                <h3 className="text-xl font-heading font-bold">Select Category</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.id)}
                                            className={cn(
                                                "flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all group",
                                                selectedCategory === cat.id
                                                    ? "bg-slate-800/50 border-primary text-white"
                                                    : "bg-slate-800/20 border-white/5 text-slate-400 hover:border-white/20"
                                            )}
                                        >
                                            <div className={cn("mb-4 transition-transform group-hover:scale-110", selectedCategory === cat.id ? "text-primary" : "text-slate-500")}>
                                                {cat.icon}
                                            </div>
                                            <span className="font-semibold">{cat.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-heading font-bold">Hair Services</h3>
                                <div className="space-y-4">
                                    {services.map((service) => (
                                        <button
                                            key={service.id}
                                            onClick={() => setSelectedService(service)}
                                            className={cn(
                                                "w-full flex items-center gap-6 p-6 rounded-xl border-2 text-left transition-all group",
                                                selectedService.id === service.id
                                                    ? "bg-slate-800/50 border-primary"
                                                    : "bg-slate-800/20 border-white/5 hover:border-white/10"
                                            )}
                                        >
                                            <div className={cn(
                                                "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors",
                                                selectedService.id === service.id ? "border-primary bg-primary text-white" : "border-white/10 text-slate-500"
                                            )}>
                                                {selectedService.id === service.id ? <CheckCircle2 size={24} /> : <Plus size={24} />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-baseline mb-1">
                                                    <h4 className="text-lg font-bold">{service.name}</h4>
                                                    <span className="text-xl font-bold text-primary">${service.price}</span>
                                                </div>
                                                <p className="text-slate-400 text-sm">{service.desc} ({service.time})</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-heading font-bold">Choose Professional</h3>
                                    <button className="text-primary text-sm font-semibold hover:underline">See profiles</button>
                                </div>
                                <div className="flex flex-wrap gap-8">
                                    {professionals.map((pro) => (
                                        <button
                                            key={pro.id}
                                            onClick={() => setSelectedProfessional(pro)}
                                            className="flex flex-col items-center gap-3 transition-transform hover:scale-105"
                                        >
                                            <div className={cn(
                                                "w-20 h-20 rounded-full p-1 border-2 transition-colors",
                                                selectedProfessional.id === pro.id ? "border-primary" : "border-transparent"
                                            )}>
                                                {pro.image ? (
                                                    <img src={pro.image} alt={pro.name} className="w-full h-full rounded-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center border-2 border-dashed border-white/20">
                                                        <User className="text-slate-500" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <h4 className="font-bold text-sm">{pro.name}</h4>
                                                <p className="text-[10px] uppercase tracking-tighter text-slate-500">{pro.role}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Step 2 & 3 Placeholder (For demo purposes we show mostly step 1 as per image) */}
                        {step === 2 && (
                            <div className="py-20 text-center space-y-6 animate-fade-in">
                                <User size={64} className="mx-auto text-primary" />
                                <h3 className="text-2xl font-bold">Professional Selection</h3>
                                <p className="text-slate-400">Selection detailed above. Moving to Date & Time...</p>
                                <Button onClick={() => setStep(3)}>Next Step</Button>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="py-20 text-center space-y-6 animate-fade-in">
                                <CalendarIcon size={64} className="mx-auto text-primary" />
                                <h3 className="text-2xl font-bold">Date & Time Selection</h3>
                                <p className="text-slate-400">Please use the sidebar to pick your preferred slot.</p>
                                <Button onClick={() => setStep(1)}>Back to Start</Button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-[400px]">
                        <div className="bg-slate-800/40 border border-white/10 rounded-2xl p-8 sticky top-32 space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-primary">
                                    <CalendarIcon size={20} />
                                    <h3 className="font-bold uppercase tracking-widest text-sm">Pick Your Time</h3>
                                </div>

                                {/* Mini Calendar Mockup */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-bold">November 2023</span>
                                        <div className="flex gap-2">
                                            <button className="p-1 hover:bg-white/10 rounded"><ChevronLeft size={16} /></button>
                                            <button className="p-1 hover:bg-white/10 rounded"><ChevronRight size={16} /></button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 text-center text-[10px] text-slate-500 mb-2">
                                        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                                    </div>
                                    <div className="grid grid-cols-7 gap-1 text-center font-bold text-sm">
                                        {[28, 29, 30, 1, 2, 3, 4].map((d) => (
                                            <button
                                                key={d}
                                                onClick={() => setSelectedDate(d)}
                                                className={cn(
                                                    "py-2 rounded-md transition-all",
                                                    d < 5 && d > 20 ? "text-slate-700" : "text-white hover:bg-white/10",
                                                    selectedDate === d && "bg-primary text-white"
                                                )}
                                            >
                                                {d}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Available Slots</h4>
                                    <div className="grid grid-cols-3 gap-3">
                                        {slots.map((s) => (
                                            <button
                                                key={s}
                                                onClick={() => setSelectedTime(s)}
                                                className={cn(
                                                    "py-3 text-[11px] font-bold rounded-lg border-2 transition-all",
                                                    selectedTime === s ? "border-primary text-primary" : "border-white/5 text-slate-300 hover:border-white/20"
                                                )}
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-8 border-t border-white/10">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Service</span>
                                    <span className="font-bold">{selectedService.name}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Professional</span>
                                    <span className="font-bold">{selectedProfessional.name}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Time</span>
                                    <span className="font-bold">Nov {selectedDate}, {selectedTime}</span>
                                </div>
                                <div className="flex justify-between items-baseline pt-4 border-t border-white/5">
                                    <span className="text-xl font-heading font-bold uppercase tracking-widest">Total</span>
                                    <span className="text-3xl font-bold text-primary">${selectedService.price}.00</span>
                                </div>
                            </div>

                            <Button className="w-full py-8 text-lg font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                                Confirm Appointment
                            </Button>

                            <p className="text-[10px] text-center text-slate-500 mt-4 leading-relaxed">
                                You can cancel or reschedule up to 24 hours before your appointment.
                            </p>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Booking;
