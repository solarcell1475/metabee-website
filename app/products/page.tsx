import Link from "next/link";
import Image from "next/image";

const products = [
  {
    slug: "navkit-s",
    name: "NavKit-S",
    tagline: "Onboard Autonomous Navigation Kit",
    description: "AI-based autonomous navigation for GPS-denied flight. Combines vision, environmental sensing, and GNSS/INS fusion.",
    image: "/assets/images/products/product-navkit-fpga-pcb.png",
    imagePosition: "center",
  },
  {
    slug: "sky-guard",
    name: "Sky-Guard Series",
    tagline: "Radar Detection & Flight Decision Support",
    description: "Complete low-altitude airspace security ecosystem — UAV detection radar (R3000 / R5000) and AI-powered flight decision support console.",
    image: "/assets/images/products/product-skyguard-radar.png",
    imagePosition: "center top",
  },
  {
    slug: "hive-link",
    name: "Hive-Link / LAWN",
    tagline: "ISAC Nodes & Low-Altitude Network",
    description: "Intelligent ground stations with integrated sensing and communication for city-scale LAWN/UTM.",
    image: "/assets/images/products/product-isac-node.png",
    imagePosition: "center",
  },
];

export default function Products() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Products
          </h1>
          <p className="text-xl text-zinc-400">
            MetaBee&apos;s three-layer modular system allows customers to adopt one layer or integrate all three over time.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group block rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:border-[#f0b429]/50 transition-colors"
              >
                <div className="aspect-video relative bg-black/30">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: product.imagePosition }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white group-hover:text-[#f0b429] transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-[#f0b429] text-sm font-medium mt-1">{product.tagline}</p>
                  <p className="text-zinc-400 text-sm mt-3">{product.description}</p>
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
