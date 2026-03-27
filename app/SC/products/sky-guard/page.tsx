import Link from "next/link";
import Image from "next/image";

const skyGuardProducts = [
  {
    slug: "radar-r3000",
    name: "Sky-Guard 雷达 R3000",
    tagline: "3公里低空无人机探测雷达",
    description: "紧凑型Ku波段脉冲多普勒雷达，360°机械扫描，3公里探测距离，实时3D跟踪小型无人机目标。",
    image: "/assets/images/products/product-skyguard-radar.png",
    imagePosition: "center top",
    animatedPan: true,
  },
  {
    slug: "radar-r5000",
    name: "Sky-Guard 雷达 R5000",
    tagline: "5公里低空无人机探测雷达",
    description: "增程型号，5公里探测能力，更高发射功率，专为广域周界与关键基础设施防护设计。",
    image: "/assets/images/products/product-skyguard-radar.png",
    imagePosition: "center top",
    animatedPan: true,
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
          <div className="grid md:grid-cols-3 gap-8">
            {skyGuardProducts.map((product) => (
              <Link key={product.slug} href={`/SC/products/sky-guard/${product.slug}`} className="group block rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:border-[#f0b429]/50 transition-colors">
                <div className="aspect-video relative bg-black/30">
                  <Image src={product.image} alt={product.name} fill className={`object-cover group-hover:scale-105 transition-transform duration-300 ${product.animatedPan ? "image-pan-top-bottom" : ""}`} style={{ objectPosition: product.imagePosition }} sizes="(max-width: 768px) 100vw, 33vw" />
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

          <div className="mt-16 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">雷达型号对比</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="py-3 pr-4 text-zinc-400 font-medium">参数</th>
                      <th className="py-3 px-4 text-[#f0b429] font-semibold">R3000</th>
                      <th className="py-3 pl-4 text-[#f0b429] font-semibold">R5000</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    <tr className="border-b border-white/5"><td className="py-3 pr-4 text-zinc-400">最大探测距离</td><td className="py-3 px-4">≥ 3 km</td><td className="py-3 pl-4">≥ 5 km</td></tr>
                    <tr className="border-b border-white/5"><td className="py-3 pr-4 text-zinc-400">峰值发射功率</td><td className="py-3 px-4">≤ 20 W</td><td className="py-3 pl-4">≤ 100 W</td></tr>
                    <tr className="border-b border-white/5"><td className="py-3 pr-4 text-zinc-400">功耗</td><td className="py-3 px-4">≤ 150 W</td><td className="py-3 pl-4">≤ 200 W</td></tr>
                    <tr className="border-b border-white/5"><td className="py-3 pr-4 text-zinc-400">系统重量</td><td className="py-3 px-4">≤ 30 kg</td><td className="py-3 pl-4">≤ 35 kg</td></tr>
                    <tr><td className="py-3 pr-4 text-zinc-400">频段</td><td className="py-3 px-4">Ku (16 GHz ± 100 MHz)</td><td className="py-3 pl-4">Ku (16 GHz ± 100 MHz)</td></tr>
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
