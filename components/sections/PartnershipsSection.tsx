import { Cloud, Server, Database, Trophy, ShieldCheck, Activity } from "lucide-react";

export default function PartnershipsSection() {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center lg:items-start">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-[30%] lg:sticky lg:top-32 pt-6">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#0a2540] mb-4 tracking-tight leading-tight">
            Partnerships and recognitions
          </h2>
          <p className="text-[17px] text-[#4a5f73] font-medium leading-relaxed">
            Built on certified expertise and real-world implementation
          </p>
        </div>

        {/* Right Grids Content */}
        <div className="w-full lg:w-[70%] flex flex-col pt-6 lg:pt-0">
          
          {/* Top Row: Cloud/Infra Partners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 items-center justify-items-center md:justify-items-start">
            
            {/* Microsoft Mock Logo */}
            <div className="flex items-center gap-3">
              <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                <div className="bg-[#F25022]"></div>
                <div className="bg-[#7FBA00]"></div>
                <div className="bg-[#00A4EF]"></div>
                <div className="bg-[#FFB900]"></div>
              </div>
              <div className="font-semibold text-gray-500 text-sm leading-tight">
                Microsoft<br />
                <span className="font-normal text-gray-400">Solutions Partner</span>
              </div>
            </div>

            {/* AWS Mock Logo */}
            <div className="flex flex-col items-center justify-center p-6 border border-[#FF9900] w-full max-w-[180px] h-[100px] relative rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-[30px]">
              <div className="font-bold text-[#232F3E] text-2xl flex items-center mb-1">
                aws<span className="text-[#FF9900] text-sm transform -translate-y-1 ml-0.5">☺</span>
              </div>
              <div className="font-bold text-[#232F3E] text-xs tracking-wider uppercase">Partner</div>
            </div>

            {/* Salesforce Mock Logo */}
            <div className="bg-[#00A1E0] w-full max-w-[180px] h-[100px] rounded-xl flex flex-col justify-center items-center text-white">
              <Cloud className="w-10 h-10 mb-1 fill-white" />
              <div className="font-bold text-sm tracking-wide uppercase">Partner</div>
            </div>

          </div>

          <div className="w-full h-px bg-gray-100 mb-12"></div>

          {/* Bottom Row: Data/AI/Awards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            
            {/* DataRobot Mock */}
            <div className="flex items-center gap-2 font-bold text-gray-800">
               <Activity className="text-gray-400" size={20} /> DataRobot
            </div>

            {/* Top Developers Badge Mock */}
            <div className="relative flex flex-col items-center justify-center">
              <ShieldCheck className="w-20 h-24 text-[#1E3A8A] fill-[#EFF6FF]" strokeWidth={1} />
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                <Trophy className="w-4 h-4 text-[#1E3A8A] mb-1" />
                <span className="text-[9px] font-bold text-[#1E3A8A]">Top<br/>Developers</span>
              </div>
            </div>

            {/* Databricks Mock */}
            <div className="flex flex-col items-center justify-center">
              <Database className="w-8 h-8 text-[#FF3621] mb-2" />
              <span className="font-bold text-gray-800 text-sm">databricks</span>
            </div>

            {/* Clutch 1 */}
            <div className="border border-gray-300 w-full max-w-[130px] aspect-4/3 flex flex-col justify-center items-center relative" style={{ clipPath: "polygon(0 15%, 15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%)" }}>
               <div className="w-full h-full border-t-8 border-b-8 border-gray-100 flex flex-col justify-center items-center py-2">
                 <div className="text-[8px] tracking-widest uppercase text-gray-500 font-bold mb-1">Top Vendor</div>
                 <div className="bg-[#0a2540] text-white font-bold w-full text-center py-1 text-sm tracking-wide">Clutch</div>
                 <div className="text-[10px] text-gray-500 mt-2">INDIA 2026</div>
               </div>
            </div>
            
            {/* Clutch 2 */}
            <div className="border border-gray-300 w-full max-w-[130px] aspect-4/3 flex flex-col justify-center items-center relative" style={{ clipPath: "polygon(0 15%, 15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%)" }}>
               <div className="w-full h-full border-t-8 border-b-8 border-gray-100 flex flex-col justify-center items-center py-2">
                 <div className="text-[8px] tracking-widest uppercase text-gray-500 font-bold text-center px-2 mb-1">Top Energy<br/>Company</div>
                 <div className="bg-[#0a2540] text-white font-bold w-full text-center py-1 text-sm tracking-wide">Clutch</div>
                 <div className="text-[10px] text-gray-500 mt-2">INDIA 2026</div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
