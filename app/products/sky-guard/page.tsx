import Link from "next/link";
import Image from "next/image";

const skyGuardProducts = [
  {
    slug: "radar-r3000",
    name: "Sky-Guard Radar R3000",
    tagline: "3 km Low-Altitude UAV Detection Radar",
    description:
      "Compact Ku-band pulse-Doppler radar with 360° mechanical scan, 3 km detection range, and real-time 3D tracking for small UAV targets.",
    image: "/assets/images/products/product-skyguard-radar.png",
  },
  {
    slug: "radar-r5000",
    name: "Sky-Guard Radar R5000",
    tagline: "5 km Low-Altitude UAV Detection Radar",
    description:
      "Extended-range variant with 5 km detection capability and higher transmit power, designed for wide-area perimeter and critical-infrastructure protection.",
    image: "/assets/images/products/product-skyguard-radar.png",
  },
  {
    slug: "console",
    name: "Sky-Guard Console",
    tagline: "Digital Intelligent Flight Decision Support System",
    description:
      "AI-powered platform fusing real-time meteorological data, aerodynamic models, and aircraft performance profiles to deliver actionable flight safety assessments.",
    image: "/assets/images/products/product-skyguard-console-map.png",
  },
];

export default function SkyGuardSeriesPage() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link
            href="/products"
            className="text-[#f0b429] hover:underline text-sm mb-6 inline-block"
          >
            ← Back to Products
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Sky-Guard Product Series
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            A complete low-altitude airspace security ecosystem — from
            high-performance UAV detection radar to AI-driven flight decision
            support — giving operators full situational awareness and actionable
            intelligence.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {skyGuardProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/sky-guard/${product.slug}`}
                className="group block rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:border-[#f0b429]/50 transition-colors"
              >
                <div className="aspect-video relative bg-black/30">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white group-hover:text-[#f0b429] transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-[#f0b429] text-sm font-medium mt-1">
                    {product.tagline}
                  </p>
                  <p className="text-zinc-400 text-sm mt-3">
                    {product.description}
                  </p>
                  <span className="inline-block mt-4 text-[#f0b429] font-medium group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Key Differentiators */}
          <div className="mt-16 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Radar Model Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="py-3 pr-4 text-zinc-400 font-medium">Parameter</th>
                      <th className="py-3 px-4 text-[#f0b429] font-semibold">R3000</th>
                      <th className="py-3 pl-4 text-[#f0b429] font-semibold">R5000</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4 text-zinc-400">Max Detection Range</td>
                      <td className="py-3 px-4">≥ 3 km</td>
                      <td className="py-3 pl-4">≥ 5 km</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4 text-zinc-400">Peak Transmit Power</td>
                      <td className="py-3 px-4">≤ 20 W</td>
                      <td className="py-3 pl-4">≤ 100 W</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4 text-zinc-400">Power Consumption</td>
                      <td className="py-3 px-4">≤ 150 W</td>
                      <td className="py-3 pl-4">≤ 200 W</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-4 text-zinc-400">System Weight</td>
                      <td className="py-3 px-4">≤ 30 kg</td>
                      <td className="py-3 pl-4">≤ 35 kg</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-zinc-400">Frequency Band</td>
                      <td className="py-3 px-4">Ku (16 GHz ± 100 MHz)</td>
                      <td className="py-3 pl-4">Ku (16 GHz ± 100 MHz)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
