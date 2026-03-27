import Link from "next/link";
import Image from "next/image";

export default function HiveLinkPageSC() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/SC/products" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">← 返回产品中心</Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Hive-Link 蜂巢链 / LAWN</h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">通感一体化节点与低空无线网络平台</p>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12 bg-black/30">
            <Image src="/assets/images/products/product-isac-node.png" alt="Hive-Link ISAC 生态系统" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Hive-Link 通感一体化节点</h2>
            <p className="text-zinc-400 leading-relaxed">
              Hive-Link节点是配备先进超表面天线、FPGA基信号处理和AI辅助多波束能力的智能地面站。它们提供双功能通感一体化（ISAC）：同时实现低空空地通信（授权无人机）和雷达级的非授权目标感知。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">硬件规格</h2>
            <ul className="text-zinc-400 space-y-2">
              <li><strong className="text-zinc-300">天线：</strong>多功能腔体天线 3.3–3.8 GHz；流体超表面，20 MHz切换；双极化，69.5%相对带宽。增益：16–30 dBi。</li>
              <li><strong className="text-zinc-300">射频前端：</strong>COTS 4–8通道SDR平台（FPGA + 高速ADC/DAC），用于波束赋形和波形生成。</li>
              <li><strong className="text-zinc-300">边缘AI控制器：</strong>NVIDIA Jetson或同等性能，ResNet50目标分类。</li>
              <li><strong className="text-zinc-300">处理延迟：</strong>&lt; 10 ms波束切换；&lt; 100 ms目标检测与分类。</li>
              <li><strong className="text-zinc-300">覆盖范围：</strong>通信1–2 km；被动雷达感知约1 km。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">LAWN / UTM 平台</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              低空无线网络（LAWN）管理平台统筹调度城市或区域内的多个Hive-Link节点，提供：
            </p>
            <ul className="text-zinc-400 space-y-2">
              <li>空域分层管理（垂直分层 0–150m、150–300m、300–1000m）</li>
              <li>飞行计划管理，含自动审批与冲突检测</li>
              <li>非授权目标告警与电子地理围栏</li>
              <li>数据归档与审计，满足监管合规要求</li>
              <li>卫星回退集成，实现优雅降级</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">目标部署场景</h2>
            <p className="text-zinc-400">科技园区、港口、机场进近走廊、城市低空航路指定区域。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
