export default function WhyChooseUsSection() {
  const stats = [
    {
      value: "10k+",
      title: "Charging stations",
      description: " aggregated securely on a single platform across highways and major tier-1 cities."
    },
    {
      value: "99.9%",
      title: "Network uptime",
      description: " guaranteed by intelligent routing, ensuring you never reach an offline charging node."
    },
    {
      value: "500k+",
      title: "Active EV drivers",
      description: " relying on Vidhyut daily for smart route planning and seamless universal payments."
    },
    {
      value: "4.8/5",
      title: "Average rating",
      description: " from verified community reviews tracking real-time infrastructure dependability."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#0a2540] mb-4 tracking-tight">
          Why Vidhyut expertise matters
        </h2>
        <p className="text-[18px] text-[#4a5f73] max-w-3xl mx-auto mb-20 font-medium">
          Over the past decade, we&apos;ve deployed EV infrastructure solutions where reliability isn&apos;t optional—it&apos;s operational.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <div className="text-[48px] md:text-[56px] font-black text-[#3b82f6] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="w-full max-w-[200px] h-px bg-gray-200 my-4"></div>
              <p className="text-[15px] leading-relaxed text-[#4a5f73] font-medium">
                <span className="text-[#0a2540] font-bold">{stat.title}</span>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
