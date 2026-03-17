"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const STORIES = [
  {
    id: 1,
    company: "FleetCharge",
    title: "Data Analytics (Energy)",
    description: "Curated data engineering solution for EV charging provider",
    image: "/ev_success_fleet.png",
  },
  {
    id: 2,
    company: "HighwayHub",
    title: "Generative AI (Logistics)",
    description: "Smart station location intelligence system powered by GenAI",
    image: "/ev_success_station.png",
  },
  {
    id: 3,
    company: "UrbanCondos",
    title: "DevOps (Real Estate)",
    description: "Accelerating residential charging infrastructure deployment",
    image: "/ev_success_condo.png",
  },
  {
    id: 4,
    company: "GridInsights",
    title: "Enterprise Application",
    description: "Mobile and desktop solutions for grid demand management",
    image: "/ev_success_analytics.png",
  },
];

export default function SuccessStoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0a2540] leading-tight mb-2 tracking-tight">
              Success stories from companies like yours
            </h2>
            <p className="text-[18px] text-[#4a5f73] font-normal">
              Explore our transformative solutions in action
            </p>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button 
              onClick={() => scroll("left")}
              className="bg-[#f5f9fc] hover:bg-[#e2e8f0] text-[#0a2540] p-4 rounded-xl transition-colors active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="bg-[#f5f9fc] hover:bg-[#e2e8f0] text-[#0a2540] p-4 rounded-xl transition-colors active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory pt-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {STORIES.map((story) => (
            <div 
              key={story.id} 
              className="min-w-[300px] md:min-w-[340px] max-w-[340px] h-[360px] bg-[#1a2b3c] rounded-[24px] overflow-hidden relative shrink-0 snap-start group cursor-pointer"
            >
              {/* Image filling the top portion with gradient fade */}
              <div className="absolute inset-0 h-[85%]">
                <Image 
                  src={story.image} 
                  alt={story.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#1a2b3c]"></div>
              </div>

              {/* Company "Logo" Badge */}
              <div className="absolute top-6 left-6 z-10 bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-[#0a2540] font-bold text-sm tracking-wide">
                  {story.company}
                </span>
              </div>

              {/* Text Content at the bottom */}
              <div className="absolute bottom-0 w-full p-6 flex flex-col justify-end h-full z-10">
                <div className="flex justify-between items-end gap-3">
                  <div>
                    <h3 className="text-[#FFB800] font-bold text-[18px] mb-2 cursor-pointer transition-colors">{story.title}</h3>
                    <p className="text-white text-[14px] leading-relaxed font-medium line-clamp-2">
                      {story.description}
                    </p>
                  </div>
                  <div className="text-[#FFB800] shrink-0 mb-1 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 transform duration-300">
                    <ArrowUpRight size={22} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
