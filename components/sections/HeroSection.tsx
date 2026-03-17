"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    titleNormal: "Powering Your Journey,",
    titleBold: "Simplified.",
    description:
      "The Indian EV market is expanding rapidly, but charging infrastructure is fragmented. Vidhyut empowers you to discover, compare prices, check real-time availability, book slots, and pay seamlessly across all charging station operators.",
    buttonText: "Discover Vidhyut App",
    image: "/bg.png",
  },
  {
    id: 2,
    titleNormal: "Eliminate",
    titleBold: "Range Anxiety.",
    description:
      "No more juggling multiple apps for Tata Power, Ather Grid, ChargePoint, or Statiq. Vidhyut provides a unified map showing all nearby charging stations with live availability and universal payment.",
    buttonText: "Explore Features",
    image: "/bg-2.png",
  },
  {
    id: 3,
    titleNormal: "Universal",
    titleBold: "Payment System.",
    description:
      "Integrate a single wallet and support for all major payment methods (UPI, Cards, Netbanking) to pay at any station on the network directly through our app. Your charging session, your rules.",
    buttonText: "See Pricing Model",
    image: "/bg-3.png",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen min-h-screen text-white bg-black overflow-hidden flex flex-col justify-center shrink-0">
      {/* Background with slight parallax and dark overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-10" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image 
              src={SLIDES[currentSlide].image} 
              alt="Futuristic EV Charging Background" 
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Carousel Section */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-32 lg:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-light leading-[1.15] tracking-tight">
              {SLIDES[currentSlide].titleNormal}{" "}
              <span className="font-bold">{SLIDES[currentSlide].titleBold}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-light tracking-wide">
              {SLIDES[currentSlide].description}
            </p>

            <div className="pt-8">
              <button className="bg-[#FFB800] text-black px-8 py-4 rounded-full font-bold hover:bg-[#E5A600] transition-all shadow-[0_0_20px_rgba(255,184,0,0.3)] hover:shadow-[0_0_30px_rgba(255,184,0,0.5)] active:scale-95 text-sm uppercase tracking-wider">
                {SLIDES[currentSlide].buttonText}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        <button
          onClick={prevSlide}
          className="bg-[#0b121b]/80 hover:bg-[#1a2b40] p-3 rounded-md text-white backdrop-blur transition-all active:scale-95 border border-white/10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#0b121b]/80 hover:bg-[#1a2b40] p-3 rounded-md text-white backdrop-blur transition-all active:scale-95 border border-white/10"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Decorative Slide Indicators */}
      <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "h-12 bg-[#FFB800]" : "h-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom Right Floating Button */}
      <div className="absolute bottom-12 right-6 lg:right-16 z-30">
        <button className="bg-transparent border border-white/20 hover:bg-white/10 hover:border-white/40 p-4 rounded-full text-white backdrop-blur transition-all active:scale-95 flex items-center justify-center">
          <Mail size={24} className="opacity-80" />
        </button>
      </div>
    </section>
  );
}
