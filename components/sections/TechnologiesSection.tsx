"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUp, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TECHNOLOGIES = [
  {
    id: 1,
    title: "AI & Predictive Analytics",
    description: "Elevating charging network performance with AI-powered automation and analytical solutions.",
    bullets: [
      "Real-time monitoring of equipment status for actionable feedback",
      "Predict charging station failures before they happen",
      "Optimize power distribution across nodes dynamically",
      "Automate dynamic pricing based on grid load"
    ],
    image: "/bg-2.png",
  },
  {
    id: 2,
    title: "IoT & Telematics",
    description: "Seamlessly connecting chargers, vehicles, and the grid in real-time.",
    bullets: [
      "Secure and instant handshake protocols for plug-and-charge",
      "Continuous health telemetry from all charging nodes",
      "Over-the-air firmware updates for station hardware",
      "Edge computing for faster payment processing"
    ],
    image: "/bg-3.png",
  },
  {
    id: 3,
    title: "Cloud Infrastructure",
    description: "Highly scalable, distributed cloud architecture designed for mission-critical EV networks.",
    bullets: [
      "Multi-region failover ensuring 99.99% uptime",
      "Microservices architecture for rapid feature deployment",
      "Elastic scaling to handle holiday travel demand spikes",
      "Enterprise-grade security and data isolation capabilities"
    ],
    image: "/ev_success_fleet.png",
  }
];

export default function TechnologiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");

  const nextSlide = () => {
    setDirection("down");
    setCurrentIndex((prev) => (prev === TECHNOLOGIES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("up");
    setCurrentIndex((prev) => (prev === 0 ? TECHNOLOGIES.length - 1 : prev - 1));
  };

  const currentTech = TECHNOLOGIES[currentIndex];

  return (
    <section className="bg-[#0a151f] text-white w-full overflow-hidden flex flex-col justify-center relative">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row min-h-[600px] h-auto lg:h-[650px]">
        
        {/* Left STATIC column */}
        <div className="w-full lg:w-[25%] flex flex-col justify-center pl-6 lg:pl-16 pr-0 relative z-30 pt-16 lg:pt-0">
             {/* The dark tab that breaks over the image */}
            <div className="bg-[#0a151f] py-8 px-6 -ml-6 lg:-mr-32 w-[calc(100%+24px)] lg:w-[calc(100%+128px)] mb-10 relative z-30">
                <h2 className="text-[36px] md:text-[44px] tracking-tight font-bold text-white leading-tight">
                    Technologies <br className="hidden lg:block"/> we offer
                </h2>
            </div>
            <p className="text-[20px] lg:text-[22px] text-gray-300 font-light leading-relaxed max-w-[280px]">
                We use new-age technologies to drive innovation and impact
            </p>
        </div>

        {/* Center IMAGE column */}
        <div className="w-full lg:w-[35%] h-[400px] lg:h-full relative z-10 my-10 lg:my-0 shadow-2xl shadow-black/50 overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: direction === "down" ? 100 : -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: direction === "down" ? -100 : 100 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image 
                        src={currentTech.image}
                        alt={currentTech.title}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Right CONTENT column */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 lg:pl-20 lg:pr-16 pb-16 lg:pb-0 relative z-20 bg-[#0a151f]">
             <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col justify-center pr-12 lg:pr-24 h-full"
                >
                    <h3 className="text-[22px] lg:text-[24px] font-bold text-white mb-3">
                        {currentTech.title}
                    </h3>
                    <p className="text-[15px] lg:text-[16px] text-gray-300 mb-8 leading-relaxed font-normal">
                        {currentTech.description}
                    </p>
                    
                    <ul className="space-y-5 mb-10">
                        {currentTech.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start text-[14px] lg:text-[15px] text-gray-300 font-medium leading-snug">
                                <span className="mr-3 text-white mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFB800] shrink-0"></span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <button className="bg-[#FFB800] text-[#0a151f] px-8 py-3 rounded-full font-bold text-[15px] tracking-wide hover:bg-[#ffca42] transition-colors shadow-lg shadow-[#FFB800]/20 active:scale-95">
                            Read more
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons Container anchored to the right edge */}
            <div className="absolute right-6 lg:right-4 xl:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3 py-10 lg:py-0">
                <button 
                  onClick={prevSlide}
                  className="bg-[#1e2a38] p-3 rounded-lg hover:bg-[#2a3847] transition-all active:scale-90 shadow-md border border-white/5"
                >
                    <ArrowUp size={20} className="text-gray-300" strokeWidth={1.5} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="bg-[#1e2a38] p-3 rounded-lg hover:bg-[#2a3847] transition-all active:scale-90 shadow-md border border-white/5"
                >
                    <ArrowDown size={20} className="text-gray-300" strokeWidth={1.5} />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
}
