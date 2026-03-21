const team = [
  {
    name: "Dr. Kenny To",
    role: "Chief Executive Officer",
    bio: "Ph.D. in THz Engineering (CityU), former antenna architect at Huawei; leads NavKit-S AI and overall systems engineering.",
  },
  {
    name: "Dr. Kevin Lin",
    role: "Chief Technical Officer",
    bio: "Computational electromagnetics expert; oversees antenna design, RIS, and RF integration.",
  },
  {
    name: "Dr. Kung Bo Ng",
    role: "Consultant, RF & Integration",
    bio: "Veteran wireless communications engineer; ensures field-hardened RF performance and compliance.",
  },
  {
    name: "Prof. Hang Wong",
    role: "Chief Scientific Advisor (Non-executive)",
    bio: "State Key Laboratory of Terahertz and Millimeter Waves (CityU); inventor of multi-functional cavity antennas and meta-pixel.",
  },
];

export default function AboutUs() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-zinc-400">
            MetaBee Technology Limited is a Hong Kong-based technology company specializing in low-altitude economy infrastructure and autonomous drone control systems.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 lg:py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            MetaBee is to provide end-to-end low-altitude airspace solutions and develop green innovations for autonomous UAV operations—enabling operators to seamlessly transition from single-aircraft operations to city-scale low-altitude wireless networks (LAWN) without changing service providers. We are dedicated to delivering AI-driven navigation, hybrid satellite-ground communication, and integrated sensing-communication technologies that meet the specific needs of our clients across the Greater Bay Area and beyond.
          </p>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-12 lg:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-10">Management Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-[#f0b429] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-zinc-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
