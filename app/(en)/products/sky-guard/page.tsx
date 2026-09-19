import Link from "next/link";
import Image from "next/image";

const skyGuardProducts = [
  {
    slug: "detection/remote-id-node",
    name: "Sky-Guard BG-360R Remote ID Monitoring Node",
    tagline: "Cooperative Airspace Awareness",
    description:
      "Receive-only Remote ID monitoring node that decodes every compliant drone broadcast — serial number, position, and pilot location — feeding city-scale cooperative traffic pictures.",
    image: "/assets/images/products/detection/bg360r-node-render.jpg",
    imagePosition: "center",
    animatedPan: false,
    imageContain: true,
  },
  {
    slug: "detection/radar-detection",
    name: "Sky-Guard Radar Detection System",
    tagline: "360° Low-Altitude UAV Detection",
    description:
      "Ku-band radar subsystem for low-altitude UAV detection, tracking, 3D target output, and precision EO cueing.",
    image: "/assets/images/products/detection/radar-detection-1.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "detection/fixed-drone-detection",
    name: "Sky-Guard SG-6000F AoA Drone Signal Detection System",
    tagline: "AoA 360° Drone Signal Detection",
    description:
      "Passive RF signal detection with AoA / Luneburg lens antenna sensing, 20 MHz to 6 GHz coverage, 600+ model recognition, and unattended operation.",
    image: "/assets/images/products/detection/aoa-luneburg-rooftop-deployment.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "detection/handheld-drone-locator",
    name: "Sky-Guard SG-6000P Handheld Drone Locator",
    tagline: "Portable Drone & Pilot Locating",
    description:
      "Lightweight field device for spectrum detection, protocol analysis, Remote ID, FPV detection, drone locating, and pilot locating.",
    image: "/assets/images/products/detection/handheld-locator-1.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "detection/eo-tracking",
    name: "Sky-Guard EO Tracking System",
    tagline: "Visible-Light & Thermal Confirmation",
    description:
      "Electro-optical tracking subsystem combining visible-light imaging, thermal imaging, multi-spectral fusion, and servo tracking.",
    image: "/assets/images/products/detection/eo-rooftop-waterfront-deployment.jpg",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "console",
    name: "Sky-Guard Console",
    tagline: "Digital Intelligent Flight Decision Support System",
    description:
      "AI-powered platform fusing real-time meteorological data, aerodynamic models, and aircraft performance profiles to deliver actionable flight safety assessments.",
    image: "/assets/images/products/product-skyguard-console-map.png",
    imagePosition: "center",
    animatedPan: false,
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
          <Link
            href="/products/sky-guard/use-cases"
            className="group mb-12 grid lg:grid-cols-[1.1fr_1fr] overflow-hidden rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 hover:border-[#f0b429]/60 transition-colors"
          >
            <div className="relative aspect-video bg-black/30">
              <Image
                src="/assets/images/products/detection/hk-waterfront-low-altitude.jpg"
                alt="Sky-Guard use cases"
                fill
                className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <p className="text-[#f0b429] text-sm font-semibold mb-3">
                Application Scenarios
              </p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Use cases for high-privacy sites, major events, waterfront areas, and emergency patrols
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                See how passive RF/AoA sensing, EO confirmation, and handheld pilot locating are deployed as concentric protection layers.
              </p>
              <span className="mt-5 text-[#f0b429] font-medium group-hover:underline">
                View use cases →
              </span>
            </div>
          </Link>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skyGuardProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/sky-guard/${product.slug}`}
                className="group block rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:border-[#f0b429]/50 transition-colors"
              >
                <div className="aspect-video relative bg-[#0a0a0a]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`${
                      product.imageContain ? "object-contain p-4" : "object-cover"
                    } group-hover:scale-105 transition-transform duration-300 ${
                      product.animatedPan ? "image-pan-top-bottom" : ""
                    }`}
                    style={{ objectPosition: product.imagePosition }}
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
        </div>
      </section>
    </div>
  );
}
