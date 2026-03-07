import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/assets/images/hero/hero-city-drone-network.jpg"
          alt="Low-altitude drone network"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Leading Low-Altitude Tech Company in Hong Kong
          </h1>
          <p className="text-xl lg:text-2xl text-zinc-200 mb-8">
            Empowering through AI-driven autonomous navigation and integrated sensing-communication for a smarter future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors"
            >
              See Products
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            An innovative approach, using AI for low-altitude airspace management.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            MetaBee Technology Limited is a Hong Kong-based technology company specializing in low-altitude economy infrastructure and autonomous drone control systems. We combine proprietary AI-driven navigation, intelligent reconfigurable metasurfaces (RIS), and integrated sensing-communication (ISAC) technologies to deliver end-to-end solutions for unmanned aerial vehicles (UAVs) and urban air mobility (UAM) operations across the Greater Bay Area and beyond.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Our vision is to become the one-stop platform provider for low-altitude airspace management—enabling operators to seamlessly transition from single-aircraft autonomous operations to city-scale low-altitude wireless networks (LAWN) without changing service providers.
          </p>
        </div>
      </section>

      {/* Three-Layer Products */}
      <section className="py-16 lg:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center">
            Three-Layer Product Architecture
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-white/10 p-6 bg-white/5 hover:border-[#f0b429]/50 transition-colors">
              <div className="h-40 mb-4 relative rounded-lg overflow-hidden bg-black/30">
                <Image
                  src="/assets/images/products/product-navkit-fpga-pcb.png"
                  alt="NavKit-S"
                  fill
                  className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">NavKit-S</h3>
              <p className="text-zinc-400 text-sm mb-4">
                AI-based onboard autonomous navigation kit for GPS-denied flight.
              </p>
              <Link href="/products/navkit-s" className="text-[#f0b429] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="rounded-xl border border-white/10 p-6 bg-white/5 hover:border-[#f0b429]/50 transition-colors">
              <div className="h-40 mb-4 relative rounded-lg overflow-hidden bg-black/30">
                <Image
                  src="/assets/images/products/product-skyguard-radar.png"
                  alt="Sky-Guard Series"
                  fill
                  className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sky-Guard Series</h3>
              <p className="text-zinc-400 text-sm mb-4">
                UAV detection radar and AI-powered flight decision support system.
              </p>
              <Link href="/products/sky-guard" className="text-[#f0b429] font-medium hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="rounded-xl border border-white/10 p-6 bg-white/5 hover:border-[#f0b429]/50 transition-colors">
              <div className="h-40 mb-4 relative rounded-lg overflow-hidden bg-black/30">
                <Image
                  src="/assets/images/products/product-isac-node.png"
                  alt="Hive-Link / LAWN"
                  fill
                  className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hive-Link / LAWN</h3>
              <p className="text-zinc-400 text-sm mb-4">
                ISAC nodes and city-scale low-altitude wireless network platform.
              </p>
              <Link href="/products/hive-link" className="text-[#f0b429] font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-6 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors"
            >
              See All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            Our Partners
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            With collective power, our partners help contribute to leading the change for a better future in low-altitude economy.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white font-semibold">Innowave</span>
              <p className="text-zinc-500 text-sm mt-1">Satellite IoT Connectivity</p>
            </div>
            <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white font-semibold">City University of Hong Kong</span>
              <p className="text-zinc-500 text-sm mt-1">State Key Lab of Terahertz</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
