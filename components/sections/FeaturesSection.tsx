import {
  Map,
  Activity,
  IndianRupee,
  Wallet,
  CalendarCheck,
  Route,
  Star,
  Building,
  BarChart,
  ArrowUpRight
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative text-[#0a2540]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Row 1 */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-start pt-4 lg:pr-12">
            <h2 className="text-[36px] md:text-[44px] font-bold leading-tight mb-4 tracking-tight">
              Our EV Platform <br /> Capabilities
            </h2>
            <p className="text-[18px] text-[#4a5f73] font-normal pr-12">
              Transforming fragmented infrastructure into a seamless, trusted, and intelligent network for all electric vehicles.
            </p>
          </div>

          <FeatureCard
            icon={<Map size={36} strokeWidth={1.5} />}
            title="Unified map & list"
            description="A single interactive map showing all nearby charging stations from every provider, filterable by speed and connector."
          />
          <FeatureCard
            icon={<Activity size={36} strokeWidth={1.5} />}
            title="Real-time availability"
            description="Live status updates for each charging port to eliminate uncertainty and predictive analytics for wait times."
          />

          {/* Row 2 */}
          <div className="hidden lg:block col-span-1"></div>

          <FeatureCard
            icon={<IndianRupee size={36} strokeWidth={1.5} />}
            title="Transparent pricing"
            description="Easily compare the cost per unit (₹/kWh) for each station, allowing you to find the most economical option effortlessly."
          />
          <FeatureCard
            icon={<Wallet size={36} strokeWidth={1.5} />}
            title="Universal payments"
            description="Integrate a single wallet and support for UPI, Cards, and Netbanking to pay at any station on the network."
          />
          <FeatureCard
            icon={<CalendarCheck size={36} strokeWidth={1.5} />}
            title="One-click booking"
            description="Reserve a charging slot for a specific time and avoid waiting in long queues at the station."
          />

          {/* Row 3 */}
          <FeatureCard
            icon={<Route size={36} strokeWidth={1.5} />}
            title="Smart route planner"
            description="Input your destination and EV model, and automatically plan the most efficient route with optimized charging stops."
          />
          <FeatureCard
            icon={<Star size={36} strokeWidth={1.5} />}
            title="Community reviews"
            description="A trusted platform ecosystem. Rate stations, leave reviews about amenities, and verify infrastructure reliability."
          />
          <FeatureCard
            icon={<Building size={36} strokeWidth={1.5} />}
            title="Provider SaaS"
            description="Premium visibility, usage analytics patterns, and promotional tools tailored for charging station operators."
          />
          <FeatureCard
            icon={<BarChart size={36} strokeWidth={1.5} />}
            title="Data & insights"
            description="Anonymized data insights for city planners, power companies, and auto makers to bridge infrastructure gaps."
          />

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-[#f5f9fc] hover:bg-[#ffca42] transition-colors duration-300 rounded-[20px] p-4 xl:p-6 flex flex-col items-start cursor-pointer group relative h-full">
      <div className="mb-6 text-[#0a2540] group-hover:text-black transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-[20px] font-bold text-[#0a2540] group-hover:text-black mb-3 transition-colors duration-300">{title}</h3>
      <p className="text-[15px] text-[#4a5f73] group-hover:text-black/80 leading-relaxed font-medium transition-colors duration-300">
        {description}
      </p>
      
      {/* Corner arrow visible on hover */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">
        <ArrowUpRight size={20} strokeWidth={2} />
      </div>
    </div>
  );
}
