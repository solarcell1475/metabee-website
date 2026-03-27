import Link from "next/link";
import Image from "next/image";

const products = [
  {
    slug: "navkit-s",
    name: "NavKit-S 导航套件",
    tagline: "机载自主导航套件",
    description: "基于AI的自主导航系统，适用于GPS拒止飞行。结合视觉感知、环境传感及GNSS/INS融合技术。",
    image: "/assets/images/products/product-navkit-fpga-pcb.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "sky-guard",
    name: "Sky-Guard 天卫系列",
    tagline: "雷达探测与飞行决策支持",
    description: "完整的低空空域安全生态——无人机探测雷达（R3000 / R5000）与AI飞行决策支持控制台。",
    image: "/assets/images/products/product-skyguard-radar.png",
    imagePosition: "center top",
    animatedPan: true,
  },
  {
    slug: "hive-link",
    name: "Hive-Link 蜂巢链 / LAWN",
    tagline: "通感一体化节点与低空网络",
    description: "具备通感一体化能力的智能地面站，支撑城市级低空无线网络（LAWN）与无人机交通管理（UTM）。",
    image: "/assets/images/products/product-isac-node.png",
    imagePosition: "center",
    animatedPan: false,
  },
];

export default function ProductsSC() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">产品中心</h1>
          <p className="text-xl text-zinc-400">
            云峰科技三层模块化系统，客户可选择单层部署或随时间整合为完整方案。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/SC/products/${product.slug}`}
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
                  <span className="inline-block mt-4 text-[#f0b429] font-medium group-hover:underline">了解更多 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
