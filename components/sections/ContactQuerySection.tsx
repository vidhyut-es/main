import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactQuerySection() {
  return (
    <section className="py-12 lg:h-screen lg:max-h-[900px] flex items-center justify-center relative">
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16">
        
        {/* Main Dark Card Container */}
        <div className="bg-[#1a2b3c] rounded-[32px] p-6 lg:p-10 relative shadow-2xl overflow-hidden text-left">
          
          {/* Top Right Floating Badge */}
          <div className="absolute top-0 right-10 bg-[#FFB800] text-[#0a2540] font-bold px-5 py-1.5 text-sm rounded-b-xl shadow-lg z-20">
            Book a strategy call
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-10 relative z-10 pt-4">
            {/* Left Content */}
            <div className="flex-1 lg:max-w-[55%] xl:max-w-[60%]">
              <h2 className="text-[32px] md:text-[36px] font-bold text-white mb-4 tracking-tight leading-tight">
                Curious, but have questions?
              </h2>
              
              <p className="text-gray-300 text-[15px] leading-relaxed mb-4 font-medium">
                <span className="text-[#FFB800] font-bold">Connect with our EV Specialists</span> to learn more about the Vidhyut Partnership Program. It is an investment opportunity revolutionizing EV charging networks in India.
                <br /><br />
                Discover innovative strategies, technological integration, and financing options.
              </p>
              
              <p className="text-white text-[15px] leading-relaxed mb-6 font-medium tracking-wide">
                Don&apos;t miss out on this opportunity to be a pioneer in changing India&apos;s EV landscape.
              </p>
              
              <button className="bg-[#FFB800] text-[#0a2540] px-6 py-3 rounded-full font-bold text-[15px] tracking-wide hover:bg-[#ffca42] transition-colors shadow-lg shadow-[#FFB800]/20 active:scale-95 flex items-center gap-2">
                Register for a Call <ArrowUpRight size={18} strokeWidth={2} />
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full lg:flex-1 h-[240px] lg:h-[280px] rounded-2xl overflow-hidden relative shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 mt-2 lg:mt-0">
              <Image 
                src="/support_meeting.png" 
                alt="Video Conference Meeting" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* What To Expect Section Base */}
          <div className="relative z-10">
            <h3 className="text-[#FFB800] text-[16px] font-bold tracking-[0.15em] uppercase mb-5">
              What To Expect
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 relative">
                
              <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                <div className="mt-0.5 shrink-0 text-[#FFB800]">
                  <CheckCircle2 size={22} strokeWidth={1.5} />
                </div>
                <p className="text-gray-200 text-[14px] leading-relaxed font-medium">
                  End-to-end walkthrough of owning a Vidhyut charging node
                </p>
              </div>
              
              <div className="flex items-start gap-4 pb-4 border-b border-white/10 pt-4 md:pt-0">
                <div className="mt-0.5 shrink-0 text-[#FFB800]">
                  <CheckCircle2 size={22} strokeWidth={1.5} />
                </div>
                <p className="text-gray-200 text-[14px] leading-relaxed font-medium">
                  Exclusive insights on expected ROI by infrastructure experts
                </p>
              </div>
              
              <div className="flex items-start gap-4 pt-4">
                <div className="mt-0.5 shrink-0 text-[#FFB800]">
                  <CheckCircle2 size={22} strokeWidth={1.5} />
                </div>
                <p className="text-gray-200 text-[14px] leading-relaxed font-medium">
                  Strategic guidance on Investment models & site selection
                </p>
              </div>
              
              <div className="flex items-start gap-4 pt-4">
                <div className="mt-0.5 shrink-0 text-[#FFB800]">
                  <CheckCircle2 size={22} strokeWidth={1.5} />
                </div>
                <p className="text-gray-200 text-[14px] leading-relaxed font-medium">
                  Live Q&A with our EV deployment and finance specialists
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
