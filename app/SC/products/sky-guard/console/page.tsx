import Link from "next/link";
import Image from "next/image";

export default function ConsolePageSC() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/SC/products/sky-guard" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">← 返回天卫系列</Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Sky-Guard 控制台</h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">数字智能飞行决策支持系统</p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="aspect-video relative rounded-xl overflow-hidden bg-black/30">
              <Image src="/assets/images/products/product-skyguard-console-map.png" alt="Sky-Guard Console – 卫星地图视图" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="aspect-video relative rounded-xl overflow-hidden bg-black/30">
              <Image src="/assets/images/products/product-skyguard-console-ui.png" alt="Sky-Guard Console – 雷达显示界面" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">背景</h2>
            <p className="text-zinc-400 leading-relaxed">
              随着低空经济加速发展以及公众对休闲航空兴趣日增，飞行营地——涵盖通用航空、滑翔伞、无人机测试、动力悬挂滑翔机、热气球等轻型航空器——正从经验式管理向数据驱动、智能化运营转型。风速、气温、湿度、气压、云底高和降水等天气条件对轻型航空器的安全与性能有决定性影响。Sky-Guard 控制台弥合了原始气象数据与可执行飞行决策之间的鸿沟。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">核心能力</h2>
            <ul className="text-zinc-400 space-y-3">
              <li><strong className="text-zinc-300">实时天气评估：</strong>持续评估当前条件是否满足各机型安全起降阈值。</li>
              <li><strong className="text-zinc-300">飞行仿真：</strong>在不同气象场景下模拟飞行姿态、爬升率、滑翔比和操控难度。</li>
              <li><strong className="text-zinc-300">最优飞行规划：</strong>推荐最佳起降方向、时机、爬升剖面、等待航线和返航航点。</li>
              <li><strong className="text-zinc-300">理想飞行窗口预测：</strong>基于时段预测运营窗口，优化营地排程与客户预订。</li>
              <li><strong className="text-zinc-300">自动风险告警：</strong>生成飞行风险预警和运营建议，支持教练与飞行员实时决策。</li>
              <li><strong className="text-zinc-300">个性化飞行建议：</strong>根据场地地形、用户画像（年龄、运动强度）和时空上下文定制建议。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">个性化营地功能</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>为每位访客提供个性化飞行决策建议</li>
              <li>营地3天安全风险超前预报</li>
              <li>最优飞行时段建议</li>
              <li>可视化飞行路径预览与仿真</li>
              <li>本地化AI决策模型，持续学习优化</li>
              <li>紧急/突发天气变化告警</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">方案架构</h2>
            <p className="text-zinc-400 leading-relaxed">
              系统融合实时气象数据接入、飞行器性能参数库、气动模型和AI辅助决策算法于统一平台。数据来源包括网格化天气模型输出（1–2 km分辨率）、现场传感器校准和历史运营记录。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">服务层级</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="py-3 pr-4 text-zinc-400 font-medium">功能</th>
                    <th className="py-3 px-4 text-[#f0b429] font-semibold">标准版</th>
                    <th className="py-3 px-4 text-[#f0b429] font-semibold">专业版</th>
                    <th className="py-3 pl-4 text-[#f0b429] font-semibold">企业版</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/5"><td className="py-2 pr-4 text-zinc-400">核心输出</td><td className="py-2 px-4">指标监测与回顾</td><td className="py-2 px-4">指标驱动决策闭环</td><td className="py-2 pl-4">全定制化流程</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4 text-zinc-400">预报时间范围</td><td className="py-2 px-4">24 h 滚动</td><td className="py-2 px-4">48 h 滚动</td><td className="py-2 pl-4">72–120 h 趋势</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4 text-zinc-400">监测点数</td><td className="py-2 px-4">5个自定义位置</td><td className="py-2 px-4">10个自定义位置</td><td className="py-2 pl-4">10+（可扩展）</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4 text-zinc-400">AI服务</td><td className="py-2 px-4">—</td><td className="py-2 px-4">多指标分析</td><td className="py-2 pl-4">自学习模型</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4 text-zinc-400">告警渠道</td><td className="py-2 px-4">网页仪表板</td><td className="py-2 px-4">实时推送通知</td><td className="py-2 pl-4">多渠道+审计追踪</td></tr>
                  <tr><td className="py-2 pr-4 text-zinc-400">交付成果</td><td className="py-2 px-4">飞行数据记录、24h预报、5点报告、网页门户</td><td className="py-2 px-4">日报+视频简报、48h预报、10点报告、推送通知</td><td className="py-2 pl-4">定制决策报告、飞行行为记录、72-120h预报、10-15点报告、多系统推送</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">合规与风险边界</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>本服务仅提供指标和建议性措施，不替代任何经认证的环境数据产品。</li>
              <li>指标仅作为决策辅助，而非安全或合规的唯一依据。运营方须保留最终决定权和现场验证程序。</li>
              <li>当历史数据不足或存在显著偏差时，模型不确定性将增大。系统会标识此类情况，并支持退回规则/保守策略。</li>
            </ul>

            <div className="mt-12 rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">下载产品手册</h3>
                <p className="text-zinc-400 text-sm mt-1">PDF格式A4产品数据表，包含系统概述、服务层级与合规说明。</p>
              </div>
              <a href="/downloads/Sky-Guard_Console_Datasheet.pdf" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors whitespace-nowrap" download>下载 PDF</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
