import Link from "next/link";
import Image from "next/image";

export default function RadarR5000PageSC() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/SC/products/sky-guard" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">← 返回天卫系列</Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Sky-Guard 雷达 R5000</h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">5公里低空无人机探测雷达</p>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12 bg-black/30">
            <Image src="/assets/images/products/product-skyguard-radar.png" alt="Sky-Guard Radar R5000" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 896px" />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">概述</h2>
            <p className="text-zinc-400 leading-relaxed">
              Sky-Guard 雷达 R5000 是 Sky-Guard 雷达家族的增程型号。它与R3000共享同一套Ku波段全相参脉冲多普勒架构，凭借更高的发射功率，将对消费级小型无人机的最大探测距离提升至5公里。系统由雷达主机、电动转台和显控终端软件组成，可实时输出三维目标数据，适用于广域周界安防和关键基础设施防护。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">工作模式</h2>
            <p className="text-zinc-400 leading-relaxed">
              <strong className="text-zinc-300">360°全域低空监视：</strong>雷达执行连续360°方位机械扫描，同时电子扫描0°–30°俯仰角。目标被自动检测、跟踪并实时上报至显控台。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">应用场景</h2>
            <ul className="text-zinc-400 space-y-2">
              <li><strong className="text-zinc-300">独立部署：</strong>架设于三脚架，用于独立的广域无人机监视。</li>
              <li><strong className="text-zinc-300">系统集成：</strong>联接光电识别、干扰或欺骗子系统，构成完整的探测-跟踪-处置链路。</li>
              <li><strong className="text-zinc-300">车载/固定站：</strong>车载安装快速部署，或建筑物顶安装作为永久周界监测。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">关键技术</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>全相参脉冲多普勒处理</li>
              <li>和差单脉冲测角</li>
              <li>MTD相参积累</li>
              <li>CFAR（恒虚警率）检测</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">技术规格</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400 w-1/2">频段</td><td className="py-3">Ku, 16 GHz ± 100 MHz</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">方位扫描</td><td className="py-3">360° 机械扫描</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">俯仰扫描（电子）</td><td className="py-3">≥ 30°</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">波束宽度（方位/俯仰）</td><td className="py-3">≤ 3° / ≤ 6°</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">峰值发射功率</td><td className="py-3">≤ 100 W</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">最大探测距离</td><td className="py-3">≥ 5 km（DJI Phantom 3/4, Pd = 85%）</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">最小探测距离</td><td className="py-3">≤ 250 m</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">最小可探测速度</td><td className="py-3">≤ 2.5 m/s</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">距离精度（RMS）</td><td className="py-3">≤ 10 m</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">方位精度（RMS）</td><td className="py-3">≤ 0.5°</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">俯仰精度（RMS）</td><td className="py-3">≤ 0.5°</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">数据刷新率</td><td className="py-3">3 s（完整360°扫描）</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">雷达主机尺寸</td><td className="py-3">≤ 650 × 400 × 100 mm</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">雷达+转台尺寸</td><td className="py-3">≤ 650 × 650 × 250 mm</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">供电</td><td className="py-3">+28 V DC</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">功耗</td><td className="py-3">≤ 200 W（含转台）</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">系统重量</td><td className="py-3">≤ 35 kg（雷达+转台+三脚架）</td></tr>
                  <tr><td className="py-3 pr-4 text-zinc-400">接口</td><td className="py-3">千兆以太网</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">显控软件</h2>
            <p className="text-zinc-400 leading-relaxed">
              配套终端软件负责雷达操控、参数配置、数据解析、目标显示和试验数据记录。还可将原生协议转换为客户指定格式，便于与第三方指挥控制系统无缝集成。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">装箱清单</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="py-3 pr-4 text-zinc-400 font-medium">#</th>
                    <th className="py-3 px-4 text-zinc-400 font-medium">物品</th>
                    <th className="py-3 px-4 text-zinc-400 font-medium">数量</th>
                    <th className="py-3 pl-4 text-zinc-400 font-medium">备注</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/5"><td className="py-2 pr-4">1</td><td className="py-2 px-4">雷达主机</td><td className="py-2 px-4">1</td><td className="py-2 pl-4" /></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4">2</td><td className="py-2 px-4">电动转台</td><td className="py-2 px-4">1</td><td className="py-2 pl-4" /></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4">3</td><td className="py-2 px-4">三脚架</td><td className="py-2 px-4">1</td><td className="py-2 pl-4" /></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4">4</td><td className="py-2 px-4">GNSS/INS 天线</td><td className="py-2 px-4">2</td><td className="py-2 pl-4" /></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4">5</td><td className="py-2 px-4">线缆套件</td><td className="py-2 px-4">1</td><td className="py-2 pl-4">电源+数据，10 m</td></tr>
                  <tr><td className="py-2 pr-4">6</td><td className="py-2 px-4">紧固件套装</td><td className="py-2 px-4">1</td><td className="py-2 pl-4" /></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">下载产品手册</h3>
                <p className="text-zinc-400 text-sm mt-1">PDF格式A4产品数据表，包含完整规格与装箱清单。</p>
              </div>
              <a href="/downloads/Sky-Guard_Radar_R5000_Datasheet.pdf" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors whitespace-nowrap" download>下载 PDF</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
