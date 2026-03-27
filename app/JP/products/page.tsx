import Link from "next/link";
import Image from "next/image";

const products = [
  {
    slug: "navkit-s",
    name: "NavKit-S ナビゲーションキット",
    tagline: "機載自律ナビゲーションキット",
    description: "GPS非対応環境でのAIベース自律ナビゲーション。ビジョン、環境センシング、GNSS/INS融合を統合。",
    image: "/assets/images/products/product-navkit-fpga-pcb.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "sky-guard",
    name: "Sky-Guard シリーズ",
    tagline: "レーダー検出＆飛行意思決定支援",
    description: "低高度空域セキュリティの完全エコシステム — UAV検出レーダー（R3000 / R5000）とAI飛行意思決定支援コンソール。",
    image: "/assets/images/products/product-skyguard-radar.png",
    imagePosition: "center top",
    animatedPan: true,
  },
  {
    slug: "hive-link",
    name: "Hive-Link / LAWN",
    tagline: "ISACノード＆低高度ネットワーク",
    description: "統合センシング通信機能を備えた知的地上局。都市規模のLAWN/UTMを支援。",
    image: "/assets/images/products/product-isac-node.png",
    imagePosition: "center",
    animatedPan: false,
  },
];

export default function ProductsJP() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">製品情報</h1>
          <p className="text-xl text-zinc-400">
            MetaBeeの3層モジュラーシステムにより、お客様は1層のみ採用することも、段階的に全3層を統合することも可能です。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/JP/products/${product.slug}`}
                className="group block rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:border-[#f0b429]/50 transition-colors"
              >
                <div className="aspect-video relative bg-black/30">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${product.animatedPan ? "image-pan-top-bottom" : ""}`}
                    style={{ objectPosition: product.imagePosition }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white group-hover:text-[#f0b429] transition-colors">{product.name}</h2>
                  <p className="text-[#f0b429] text-sm font-medium mt-1">{product.tagline}</p>
                  <p className="text-zinc-400 text-sm mt-3">{product.description}</p>
                  <span className="inline-block mt-4 text-[#f0b429] font-medium group-hover:underline">詳細を見る →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
