import Link from "next/link";
import Image from "next/image";

export default function NavKitSPageSC() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/SC/products" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">← 返回产品中心</Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">NavKit-S 导航套件</h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">机载自主导航套件</p>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12 bg-black/30">
            <Image src="/assets/images/products/product-navkit-fpga-pcb.png" alt="NavKit-S" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">产品描述</h2>
            <p className="text-zinc-400 leading-relaxed">
              NavKit-S 是一款集成式机载系统，结合了基于AI的自主导航、多传感器环境感知以及与Innowave卫星通信模块的即插即用兼容能力。它可在GPS信号弱或完全拒止的场景下实现安全的自主飞行。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">核心组件</h2>
            <ul className="text-zinc-400 space-y-2">
              <li><strong className="text-zinc-300">AI控制单元：</strong>基于ARM或FPGA SoC，运行实时SLAM、视觉里程计和避障算法。</li>
              <li><strong className="text-zinc-300">视觉+环境传感：</strong>双目相机、光流传感器、超声波/毫米波雷达，用于短距障碍物检测。</li>
              <li><strong className="text-zinc-300">GNSS/INS融合模块：</strong>高精度IMU与GNSS接收机，支持RTK厘米级定位。</li>
              <li><strong className="text-zinc-300">卫星通信接口：</strong>标准接口，适配Innowave窄带卫星模块（L频段，文本/指令通道）。</li>
              <li><strong className="text-zinc-300">电源管理：</strong>冗余供电与自动切换；专为电池供电的5–30 kg级无人机设计。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">功能特性</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>自主航点导航与实时航径重规划</li>
              <li>基于视觉与雷达融合的避障</li>
              <li>GPS拒止室内/峡谷环境视觉SLAM飞行</li>
              <li>智能着陆点选择的自动返航</li>
              <li>传感器数据记录与回放，用于飞行后分析</li>
              <li>OTA空中固件升级</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">目标应用</h2>
            <p className="text-zinc-400">电力线巡检、基础设施测量、偏远地区物流、跨境自主运营。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
