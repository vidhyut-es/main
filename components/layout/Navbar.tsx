"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  {
    name: "Features",
    href: "#features",
    hasMegaMenu: true,
    sections: [
      {
        title: "Core Features",
        items: ["Unified Map & List", "Real-Time Availability", "Price Comparison", "One-Click Booking"],
      },
      {
        title: "Advanced",
        items: ["Universal Payment", "Smart Route Planner", "Community Reviews", "Live Analytics"],
      },
      {
        title: "For Operators",
        items: ["Partner Dashboard", "Dynamic Pricing", "Station Management", "Actionable Insights"],
      }
    ],
    promos: [
      {
        title: "Vidhyut Prime",
        subtitle: "Zero convenience fees on your charging sessions globally.",
        buttonText: "Join Prime",
        bgClass: "bg-linear-to-br from-[#0c2445] to-[#1a4478]",
        icon: "⚡"
      },
      {
        title: "For Business",
        subtitle: "The most comprehensive enterprise AI and charging platform.",
        buttonText: "Explore B2B",
        bgClass: "bg-linear-to-bl from-[#05110d] to-[#0c3321]",
        icon: "🏢"
      }
    ]
  },
  {
    name: "Stations",
    href: "#stations",
    hasMegaMenu: true,
    sections: [
      {
        title: "Networks",
        items: ["Tata Power", "Ather Grid", "ChargePoint", "Statiq", "Zeon Charging"],
      },
      {
        title: "Connector Types",
        items: ["CCS2", "CHAdeMO", "Type 2 AC", "Bharat DC001"],
      },
      {
        title: "Locations",
        items: ["Highways", "Malls & Tech Parks", "Restaurants", "Standalone Stations"],
      }
    ],
    promos: [
      {
        title: "Route Planner Pro",
        subtitle: "Plan your EV roadtrips intelligently without range anxiety.",
        buttonText: "Plan Route",
        bgClass: "bg-linear-to-r from-[#3b0a2a] to-[#73124f]",
        icon: "🗺️"
      }
    ]
  },
  { name: "Pricing", href: "#pricing" },
  { name: "Community", href: "#community" },
  { name: "Company", href: "#company" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMegaOpen = !!hoveredMenu;
  const isNavWhite = scrolled || navHovered || isMegaOpen;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 lg:px-16 flex items-center justify-between ${
        isNavWhite ? "bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)]" : "bg-transparent py-4"
      }`}
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => {
        setNavHovered(false);
        setHoveredMenu(null);
      }}
    >
      <div className={`flex items-center py-2 lg:py-2 gap-2 cursor-pointer transition-colors ${
        isNavWhite ? "text-[#0b1c2d]" : "text-white"
      }`}>
        <span className="text-3xl font-extrabold tracking-tight flex items-center gap-1.5">
          <Image src="/logo-nobg.png" alt="Vidhyut Logo" width={70} height={70} />
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-[15px] font-semibold tracking-wide">
        {NAV_LINKS.map((link) => (
          <div 
            key={link.name}
            className={`py-8 cursor-pointer relative ${
              isNavWhite && hoveredMenu === link.name ? "text-[#0b5cff]" : ""
            }`}
            onMouseEnter={() => link.hasMegaMenu ? setHoveredMenu(link.name) : setHoveredMenu(null)}
          >
            <a
              href={link.href}
              className={`${
                isNavWhite ? (hoveredMenu === link.name ? "text-[#0b5cff]" : "text-[#0b1c2d] hover:text-[#0b5cff]") : "text-gray-100 hover:text-[#FFB800]"
              } transition-colors duration-200`}
            >
              {link.name}
            </a>
            {/* Highlight bar underneath the active nav item */}
            {isNavWhite && hoveredMenu === link.name && link.hasMegaMenu && (
              <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFB800]" />
            )}
          </div>
        ))}
        <button className={`px-6 py-2.5 rounded-full font-semibold transition-all active:scale-95 ml-4 ${
          isNavWhite 
            ? "bg-[#0b1c2d] text-white hover:bg-[#1a365d] shadow-[0_4px_14px_rgba(11,28,45,0.2)]" 
            : "bg-white text-black hover:bg-gray-100"
        }`}>
          Contact Us
        </button>
        <button className={`${isNavWhite ? "text-[#0b1c2d] hover:text-[#0b5cff]" : "text-white hover:text-[#FFB800]"} transition-colors ml-2 py-8`}>
          <Search size={20} />
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isMegaOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden cursor-default border-t border-gray-100"
          >
            {NAV_LINKS.filter((l) => l.name === hoveredMenu).map((menu) => (
              <div key={menu.name} className="max-w-7xl mx-auto flex py-10 px-6 lg:px-16 gap-16">
                <div className="flex-1 grid grid-cols-3 gap-10">
                  {menu.sections?.map((section, idx) => (
                    <div key={idx} className="space-y-5">
                      <h4 className="text-[#0a2540] font-bold text-[16px]">{section.title}</h4>
                      <ul className="space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i}>
                            <a href="#" className="text-gray-500 hover:text-[#0b5cff] font-medium text-[15px] hover:translate-x-1 inline-block transition-all">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {menu.promos && (
                  <div className="w-[380px] shrink-0 space-y-4">
                    {menu.promos.map((promo, idx) => (
                      <div key={idx} className={`rounded-xl p-6 relative overflow-hidden text-white shadow-lg group cursor-pointer ${promo.bgClass}`}>
                         <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                              <h5 className="font-bold text-xl mb-2 flex items-center gap-2">
                                {promo.title}
                              </h5>
                              <p className="text-white/80 text-[14px] leading-relaxed mb-6 font-medium">{promo.subtitle}</p>
                            </div>
                            <div>
                              <span className="inline-block bg-white/20 hover:bg-white/30 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur transition-colors">
                                {promo.buttonText}
                              </span>
                            </div>
                         </div>
                         <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform duration-700 text-8xl">
                            {promo.icon}
                         </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
