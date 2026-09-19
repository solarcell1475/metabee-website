import Link from "next/link";
import Image from "next/image";

const skyGuardProducts = [
  {
    slug: "detection/remote-id-node",
    name: "Sky-Guard 天卫 BG-360R Remote ID 监测节点",
    tagline: "合作目标空情感知",
    description:
      "只收不发的 Remote ID 监测节点，解码每架合规无人机的广播——序列号、位置和飞手位置——构建城市级合作目标空情。",
    image: "/assets/images/products/detection/bg360r-node-render.jpg",
    imagePosition: "center",
    animatedPan: false,
    imageContain: true,
  },
  {
    slug: "detection/radar-detection",
    name: "Sky-Guard 天卫雷达探测系统",
    tagline: "360°低空无人机探测",
    description: "Ku 波段雷达子系统，面向低空无人机探测、跟踪、三维目标输出和光电精确引导。",
    image: "/assets/images/products/detection/radar-detection-1.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "detection/fixed-drone-detection",
    name: "Sky-Guard 天卫 SG-6000F AoA 无人机信号侦测系统",
    tagline: "AoA 360° 无源射频信号侦测",
    description: "结合 AoA / Luneburg lens 天线感知与 SDR 架构，覆盖 20 MHz 至 6 GHz，支持 600+ 机型识别和无人值守。",
    image: "/assets/images/products/detection/aoa-luneburg-rooftop-deployment.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "detection/handheld-drone-locator",
    name: "Sky-Guard 天卫 SG-6000P 手持式无人机侦测定位设备",
    tagline: "便携式无人机与飞手定位",
    description: "轻量化现场设备，支持频谱探测、协议解析、Remote ID、FPV 探测、无人机定位与飞手定位。",
    image: "/assets/images/products/detection/handheld-locator-1.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "detection/eo-tracking",
    name: "Sky-Guard 天卫光电跟踪系统",
    tagline: "可见光与热成像确认",
    description: "融合可见光成像、红外热成像、多光谱数据融合和伺服跟踪能力的光电跟踪子系统。",
    image: "/assets/images/products/detection/eo-rooftop-waterfront-deployment.jpg",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "console",
    name: "Sky-Guard 控制台",
    tagline: "数字智能飞行决策支持系统",
    description: "AI驱动平台，融合实时气象数据、气动模型和飞行器性能参数，输出可执行的飞行安全评估。",
    image: "/assets/images/products/product-skyguard-console-map.png",
    imagePosition: "center",
    animatedPan: false,
  },
];

export default function SkyGuardSeriesPageSC() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link href="/SC/products" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">← 返回产品中心</Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Sky-Guard 天卫产品系列</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            完整的低空空域安全生态——从高性能无人机探测雷达到AI飞行决策支持——为运营商提供全面态势感知与可执行情报。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/SC/products/sky-guard/use-cases"
            className="group mb-12 grid lg:grid-cols-[1.1fr_1fr] overflow-hidden rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 hover:border-[#f0b429]/60 transition-colors"
          >
            <div className="relative aspect-video bg-black/30">
              <Image
                src="/assets/images/products/detection/hk-waterfront-low-altitude.jpg"
                alt="Sky-Guard 天卫应用场景"
                fill
                className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <p className="text-[#f0b429] text-sm font-semibold mb-3">应用场景</p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                面向高隐私场地、大型活动、海滨区域和应急巡查的低空安全应用
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                查看无源 RF/AoA 侦测、光电确认和手持飞手定位如何组成分层防护方案。
              </p>
              <span className="mt-5 text-[#f0b429] font-medium group-hover:underline">
                查看应用场景 →
              </span>
            </div>
          </Link>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skyGuardProducts.map((product) => (
              <Link key={product.slug} href={`/SC/products/sky-guard/${product.slug}`} className="group block rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:border-[#f0b429]/50 transition-colors">
                <div className="aspect-video relative bg-[#0a0a0a]">
                  <Image src={product.image} alt={product.name} fill className={`${product.imageContain ? "object-contain p-4" : "object-cover"} group-hover:scale-105 transition-transform duration-300 ${product.animatedPan ? "image-pan-top-bottom" : ""}`} style={{ objectPosition: product.imagePosition }} sizes="(max-width: 768px) 100vw, 33vw" />
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
