"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle, ChevronRight, Star, CheckCircle2, Clock, MapPin, ShieldCheck, ArrowRight, Home, Layout, Pipette, Hammer, Droplets, Fan, Zap, BadgePercent, Coins, Construction, Wallet, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, FormEvent } from "react";
import { BrandLogos } from "@/components/BrandLogos";

const detailedServices = [
  {
    title: "Full Villa Renovation",
    text: "Complete transformation from architectural planning to the final coat of paint.",
    img: "/renovation1.jpg",
    icon: <Home className="text-[#fa8f4d]" size={20} />,
  },
  {
    title: "Kitchen Revamp",
    text: "Custom cabinets, quartz worktops, and integrated smart appliances.",
    img: "/Kitchen1.jpg",
    icon: <Layout className="text-[#fa8f4d]" size={20} />,
  },
  {
    title: "Bathroom Remodeling",
    text: "Turn your bathroom into a private spa with designer sanitaryware.",
    img: "/bathroom-furbish1.jpeg",
    icon: <Droplets className="text-[#fa8f4d]" size={20} />,
  },
  {
    title: "Flooring & Walls",
    text: "Expert installation of large-format porcelain, marble, or parquet.",
    img: "/flooring1.jpg",
    icon: <Pipette className="text-[#fa8f4d]" size={20} />,
  },
];

const budgetOptions = [
  {
    title: "Essential Refresh",
    subtitle: "Low Budget Friendly",
    price: "Starting from AED 15k",
    text: "Perfect for a quick update. Painting, minor cabinet repairs, and lighting upgrades.",
    features: ["Wall Painting", "Cabinet Resurfacing", "LED Lighting Fix", "Minor Carpentry"]
  },
  {
    title: "Modern Upgrade",
    subtitle: "Mid-Range Budget",
    price: "Custom Quotes",
    text: "Complete kitchen or bathroom furbishing including tiling and plumbing.",
    features: ["Full Tiling", "Sanitary Changes", "Kitchen Counters", "MEP Updates"]
  },
  {
    title: "Elite Lifestyle",
    subtitle: "Luxury Budget",
    price: "Full Renovation",
    text: "Complete villa remodeling with high-end materials and full luxury design.",
    features: ["Structural Changes", "Italian Kitchens", "Smart Home Tech", "Luxury Marble"]
  },
];

const ourWorkImages = [
  { src: "/renovation5.jpg", title: "Luxury Living Transformation" },
  { src: "/KitchenRectify1.jpeg", title: "Contemporary Kitchen Remodel" },
  { src: "/bathroom-furbish3.jpeg", title: "Minimalist Spa Bathroom" },
  { src: "/tilework12.jpg", title: "Full Floor Replacement" },
  { src: "/appartment-revamp4.jpeg", title: "Complete Interior Design" },
  { src: "/SmartInteriorUpgrades.jpeg", title: "Smart Home Integration" },
];

export default function VillaRenovationLanding() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsappNumber = "971558177611";
    const message = encodeURIComponent(
      [
        "Villa Renovation Enquiry (Landing Page):",
        `Name: ${fullName}`,
        `Phone: ${phone}`,
        `Location: ${location}`,
        `Details: ${details || "N/A"}`,
      ].join("\n")
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
            <Image 
                src="/hero-main40.jpg" 
                alt="Elite Dubai Villa Renovation" 
                fill 
                className="object-cover object-center opacity-40"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-12 xl:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#fa8f4d] text-[10px] font-bold uppercase tracking-[0.2em]">
                  <Star size={12} fill="currentColor" /> Premium Villa Renovation Dubai
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                  Expert Villa <br />
                  <span className="text-[#fa8f4d]">Renovation Team.</span>
                </h1>
                
                <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-lg font-light">
                  High-end interior design and remodeling in Dubai. We deliver luxury spaces, on time, and within your budget.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild className="h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm gap-2 shadow-lg shadow-green-600/10 border-0 active:scale-95 transition-all">
                    <a href="https://wa.me/971558177611" target="_blank">
                      <MessageCircle size={18} />
                      WhatsApp Now
                    </a>
                  </Button>

                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Button asChild className="h-12 px-6 rounded-full bg-[#fa8f4d] text-white hover:bg-[#e6763f] font-bold text-sm gap-2 transition-all border-0 shadow-lg active:scale-95">
                      <a href="tel:+971558177611">
                        <Phone size={18} /> 
                        Call Specialist
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-y-3 pt-6 border-t border-white/10 max-w-md">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="text-[#fa8f4d]" size={16} /> <span className="text-xs md:text-sm font-medium italic">Budget-Friendly Options</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="text-[#fa8f4d]" size={16} /> <span className="text-xs md:text-sm font-medium">Quality Guaranteed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 hidden xl:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-white max-w-sm ml-auto"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">Get Your Free Quote</h3>
                <p className="text-xs text-slate-500 mb-6 font-light">Enter details for a fast site visit.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Full Name" 
                    required 
                    className="h-11 rounded-xl bg-slate-50 border-0 text-sm px-4"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <Input 
                    placeholder="WhatsApp Number" 
                    required 
                    className="h-11 rounded-xl bg-slate-50 border-0 text-sm px-4"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Input 
                    placeholder="Villa Area (e.g. Al Barsha)" 
                    required 
                    className="h-11 rounded-xl bg-slate-50 border-0 text-sm px-4"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <Textarea 
                    placeholder="Describe your project..." 
                    className="rounded-xl bg-slate-50 border-0 text-sm p-4 h-20"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                  <Button type="submit" className="w-full h-12 rounded-xl bg-[#fa8f4d] hover:bg-[#e6763f] text-white font-bold text-sm shadow-lg border-0">
                    Book Free Site Visit
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOGO STRIP --- */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="container mx-auto px-6">
            <BrandLogos />
        </div>
      </section>

      {/* --- BUDGET SECTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Renovate Within Your Budget</h2>
                <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">Whether you need a quick refresh or a complete luxury overhaul, we have flexible plans to fit every pocket.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {budgetOptions.map((opt, i) => (
                    <motion.div
                        whileHover={{ y: -5 }}
                        key={i}
                        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#fa8f4d] mb-4">
                            {i === 0 ? <Coins size={24} /> : i === 1 ? <Construction size={24} /> : <BadgePercent size={24} />}
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase text-[#fa8f4d] tracking-widest mb-1">{opt.subtitle}</p>
                            <h4 className="text-xl font-bold text-slate-900">{opt.title}</h4>
                        </div>
                        <p className="text-sm text-slate-500 font-light leading-relaxed">{opt.text}</p>
                        <div className="text-lg font-bold text-slate-900 pt-2">{opt.price}</div>
                        
                        <div className="w-full pt-6 space-y-2 text-left">
                            {opt.features.map(f => (
                                <div key={f} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <CheckCircle2 size={12} className="text-[#fa8f4d]" /> {f}
                                </div>
                            ))}
                        </div>

                        <Button asChild variant="outline" className="w-full mt-8 rounded-xl border-slate-200 text-xs font-bold py-5">
                            <Link href="#top">Get Quote</Link>
                        </Button>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* --- LOW BUDGET SPECIAL SECTION --- */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-[#fa8f4d]/5 rounded-[3rem] p-8 md:p-16 border border-[#fa8f4d]/20 relative overflow-hidden text-center md:text-left">
                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none hidden md:block">
                    <Wallet size={120} className="text-[#fa8f4d]" />
                </div>
                <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fa8f4d] text-white text-[10px] font-black uppercase tracking-widest leading-none">
                        Money concern? We can help
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">If your budget is low, <br /><span className="text-[#fa8f4d]">We still work for you.</span></h2>
                    <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl">
                        A beautiful home shouldn't be only for those with millions. We offer <strong>"Smart-Save" Renovations</strong> where we prioritize high-impact areas like painting and lighting to give your villa a new life at the lowest possible cost.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button asChild className="h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-[#fa8f4d] font-bold text-sm shadow-xl border-0 active:scale-95 transition-all">
                           <Link href="#top">Discuss Your Budget</Link>
                        </Button>
                        <div className="flex items-center gap-3 px-6 text-slate-500 font-medium text-sm">
                            <Banknote size={20} className="text-[#25D366]" /> Flexible Payment Options
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- SIMPLE PROCESS --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 italic">Peace of Mind in <span className="text-[#fa8f4d]">3 Simple Steps</span></h2>
            <div className="grid md:grid-cols-3 gap-12 relative">
                <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-px bg-slate-100 z-0" />
                
                <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#fa8f4d] text-white flex items-center justify-center mx-auto text-2xl font-black shadow-lg shadow-orange-500/20">1</div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">Free Site Visit</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">We visit your villa, take measurements, and discuss your budget and style requirements.</p>
                </div>
                <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto text-2xl font-black shadow-lg">2</div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">Clear Quotation</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">Receive a detailed breakdown of costs. No hidden fees. We work with your budget.</p>
                </div>
                <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mx-auto text-2xl font-black shadow-lg shadow-green-500/10">3</div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">Quick Execution</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">Professional workers start the project immediately and finish on time, every time.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-slate-900 mb-4">Our Core Services</h2>
                <div className="h-1 w-16 bg-[#fa8f4d] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {detailedServices.map((s, i) => (
                    <motion.div
                        key={i}
                        className="bg-white rounded-2xl overflow-hidden group flex flex-col h-full border border-slate-100 shadow-sm"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <Image src={s.img} alt={s.title} fill className="object-cover transition-transform group-hover:scale-105" />
                        </div>
                        <div className="p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h4>
                            <p className="text-slate-500 text-xs leading-relaxed font-light">{s.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* --- PROJECTS GALLERY --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4 text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-2">Our Recent Work</h2>
                    <p className="text-sm text-slate-500 font-light">Delivering excellence across Dubai.</p>
                </div>
                <Button asChild size="sm" className="rounded-full bg-slate-900 hover:bg-[#fa8f4d] text-[10px] font-bold uppercase tracking-widest gap-2">
                    <Link href="/projects">View Portfolio <ArrowRight size={14} /></Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ourWorkImages.map((img, i) => (
                    <div key={i} className="group relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-lg bg-slate-200">
                        <Image src={img.src} alt={img.title} fill className="object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <p className="text-white text-sm font-bold">{img.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="bg-slate-950 rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-xl">
                 <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none grayscale brightness-0 invert">
                     <Image src="/hero-main4.jpg" alt="Villa background" fill className="object-cover" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Elite Results for <span className="text-[#fa8f4d]">Every Project.</span></h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <Button asChild className="h-14 px-10 rounded-full bg-[#fa8f4d] hover:bg-white hover:text-[#fa8f4d] font-bold text-sm shadow-md border-0 transition-all">
                        <Link href="#top">Book Free Consult</Link>
                    </Button>
                    <Button asChild className="h-14 px-10 rounded-full bg-white text-slate-950 hover:bg-[#fa8f4d] hover:text-white font-bold text-sm shadow-md border-0 transition-all">
                        <a href="tel:+971558177611">Call Specialists</a>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      {/* --- MOBILE ACTION BAR --- */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[100] flex gap-3">
            <Button asChild className="flex-1 h-16 rounded-2xl bg-[#25D366] text-white border-0 font-bold text-sm gap-2 shadow-[0_10px_30px_rgba(37,211,102,0.3)]">
                <a href="https://wa.me/971558177611" target="_blank">
                  <MessageCircle size={20} /> WhatsApp
                </a>
            </Button>
            <Button asChild className="flex-1 h-16 rounded-2xl bg-slate-950 text-white font-bold text-sm border-0 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <a href="tel:+971558177611">Call Now</a>
            </Button>
      </div>

    </div>
  );
}
