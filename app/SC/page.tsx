import Link from "next/link";
import Image from "next/image";

export default function HomeSC() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/assets/images/hero/hero-city-drone-network.jpg"
          alt="低空无人机网络"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            香港领先的低空科技企业
          </h1>
          <p className="text-xl lg:text-2xl text-zinc-200 mb-8">
            以AI驱动自主导航与通感一体化技术，赋能更智慧的低空未来
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/SC/products"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors"
            >
              查看产品
            </Link>
            <Link
              href="/SC/about-us"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            以人工智能赋能低空空域管理的创新方案
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            云峰科技有限公司（MetaBee Technology Limited）是一家总部位于香港的科技企业，专注于低空经济基础设施和无人机自主控制系统。我们整合自主研发的AI导航、智能可重构超表面（RIS）以及通感一体化（ISAC）技术，为无人航空器（UAV）和城市空中交通（UAM）运营提供端到端解决方案，服务大湾区及更广泛市场。
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            我们的愿景是成为低空空域管理的一站式平台服务商——让运营商从单机自主飞行无缝扩展至城市级低空无线网络（LAWN），无需更换服务商。
          </p>
        </div>
      </section>

      {/* Three-Layer Products */}
      <section className="py-16 lg:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center">
            三层产品架构
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-white/10 p-6 bg-white/5 hover:border-[#f0b429]/50 transition-colors">
              <div className="h-40 mb-4 relative rounded-lg overflow-hidden bg-black/30">
                <Image src="/assets/images/products/product-navkit-fpga-pcb.png" alt="NavKit-S" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">NavKit-S 导航套件</h3>
              <p className="text-zinc-400 text-sm mb-4">基于AI的机载自主导航套件，适用于GPS拒止环境。</p>
              <Link href="/SC/products/navkit-s" className="text-[#f0b429] font-medium hover:underline">了解更多 →</Link>
            </div>

            <div className="rounded-xl border border-white/10 p-6 bg-white/5 hover:border-[#f0b429]/50 transition-colors">
              <div className="h-40 mb-4 relative rounded-lg overflow-hidden bg-black/30">
                <Image src="/assets/images/products/product-skyguard-radar.png" alt="Sky-Guard 系列" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sky-Guard 天卫系列</h3>
              <p className="text-zinc-400 text-sm mb-4">无人机探测雷达与AI飞行决策支持系统。</p>
              <Link href="/SC/products/sky-guard" className="text-[#f0b429] font-medium hover:underline">了解更多 →</Link>
            </div>

            <div className="rounded-xl border border-white/10 p-6 bg-white/5 hover:border-[#f0b429]/50 transition-colors">
              <div className="h-40 mb-4 relative rounded-lg overflow-hidden bg-black/30">
                <Image src="/assets/images/products/product-isac-node.png" alt="Hive-Link / LAWN" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hive-Link 蜂巢链 / LAWN</h3>
              <p className="text-zinc-400 text-sm mb-4">通感一体化节点与城市级低空无线网络平台。</p>
              <Link href="/SC/products/hive-link" className="text-[#f0b429] font-medium hover:underline">了解更多 →</Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/SC/products" className="inline-flex items-center justify-center px-6 py-6 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors">
              查看全部产品
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">合作伙伴</h2>
          <p className="text-zinc-400 text-lg mb-8">携手合作伙伴，共同推动低空经济的未来变革。</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white font-semibold">Innowave</span>
              <p className="text-zinc-500 text-sm mt-1">卫星物联网通信</p>
            </div>
            <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white font-semibold">香港城市大学</span>
              <p className="text-zinc-500 text-sm mt-1">太赫兹国家重点实验室</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
