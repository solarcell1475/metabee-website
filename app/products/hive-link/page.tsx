import Link from "next/link";
import Image from "next/image";

export default function HiveLinkPage() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">
            ← Back to Products
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Hive-Link / LAWN
          </h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">
            ISAC Nodes & Low-Altitude Wireless Network Platform
          </p>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12 bg-black/30">
            <Image
              src="/assets/images/products/product-isac-node.png"
              alt="Hive-Link ISAC Ecosystem"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Hive-Link ISAC Nodes</h2>
            <p className="text-zinc-400 leading-relaxed">
              Hive-Link nodes are intelligent ground stations equipped with advanced metasurface antennas, FPGA-based signal processing, and AI-assisted multibeam capabilities. They provide dual-function integrated sensing and communication (ISAC): simultaneous low-altitude air-to-ground communication (for authorized UAVs) and radar-level sensing of unauthorized targets.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Hardware Specifications</h2>
            <ul className="text-zinc-400 space-y-2">
              <li><strong className="text-zinc-300">Antenna:</strong> Multi-functional cavity antenna 3.3–3.8 GHz; fluid meta-surface with 20 MHz switching; dual-polarization, 69.5% fractional bandwidth. Gain: 16–30 dBi.</li>
              <li><strong className="text-zinc-300">RF Front-End:</strong> COTS 4–8 channel SDR platform (FPGA + high-speed ADC/DAC) for beamforming and waveform generation.</li>
              <li><strong className="text-zinc-300">Edge AI Controller:</strong> NVIDIA Jetson or equivalent, ResNet50-based target classification.</li>
              <li><strong className="text-zinc-300">Processing Latency:</strong> &lt; 10 ms beam switching; &lt; 100 ms target detection and classification.</li>
              <li><strong className="text-zinc-300">Coverage Range:</strong> 1–2 km for communication; ~1 km for passive radar sensing.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">LAWN / UTM Platform</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The Low-Altitude Wireless Network (LAWN) management platform orchestrates multiple Hive-Link nodes across a city or region, providing:
            </p>
            <ul className="text-zinc-400 space-y-2">
              <li>Airspace segmentation (vertical layers 0–150m, 150–300m, 300–1000m)</li>
              <li>Flight plan management with auto-approval and conflict detection</li>
              <li>Unauthorized target alerts and electronic geo-fencing</li>
              <li>Data archive and audit for regulatory compliance</li>
              <li>Integration with satellite fallback for graceful degradation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Target Deployments</h2>
            <p className="text-zinc-400">
              Science parks, ports, airport approach corridors, designated low-altitude airway corridors in cities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
