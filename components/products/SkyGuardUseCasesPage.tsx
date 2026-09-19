import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "sc" | "jp";

const copy = {
  en: {
    backHref: "/products/sky-guard",
    backLabel: "← Back to Sky-Guard Series",
    title: "Sky-Guard Use Cases",
    tagline: "Application scenarios for high-privacy sites and low-altitude security operations",
    intro:
      "Sky-Guard is designed for sensitive airspace where operators need passive visibility, traceability, and evidence before response. The system starts with RF/AoA signal detection, uses EO tracking for visual confirmation, and supports handheld patrols for on-site pilot locating.",
    scenarioTitle: "Priority Application Scenarios",
    deploymentTitle: "Recommended Deployment Logic",
    customersTitle: "Typical Target Customers",
    cta: "Explore Sky-Guard products →",
    customers: [
      "Correctional services and high-privacy government sites",
      "Police, stadiums, concerts, and major public events",
      "Fire services, emergency response, and temporary command posts",
      "Embassies, consulates, banks, and financial institutions",
      "Private residences, clubs, waterfront estates, and sensitive perimeters",
    ],
    deployment: [
      {
        title: "Outer ring: detect and identify",
        text: "AoA RF sensing monitors drone control, telemetry, and Remote ID signals around the key area.",
      },
      {
        title: "Middle ring: visual lock and evidence",
        text: "EO tracking slews to the bearing cue and records visible / infrared evidence for operator review.",
      },
      {
        title: "Inner ring: on-site response",
        text: "Handheld locators guide patrol teams toward the drone pilot or remote operator when action is required.",
      },
    ],
    scenarios: [
      {
        title: "High-Privacy Sites",
        image: "/assets/images/products/detection/aoa-luneburg-rooftop-deployment.png",
        text: "Passive detection protects sensitive sites without transmitting RF energy or disrupting lawful communications.",
      },
      {
        title: "Stadium & Major Event Protection",
        image: "/assets/images/products/detection/rf-platform-map-interface.png",
        text: "Temporary airspace awareness for sports venues, concerts, ceremonies, and public gatherings.",
      },
      {
        title: "Coastal / Waterfront Key-Area Monitoring",
        image: "/assets/images/products/detection/hk-waterfront-low-altitude.jpg",
        text: "Continuous low-altitude monitoring for open waterfronts, ports, and perimeter areas with wide lines of sight.",
      },
      {
        title: "Visual Confirmation & Evidence",
        image: "/assets/images/products/detection/eo-visual-confirmation.png",
        text: "EO tracking confirms the target with visible and thermal imagery before escalation.",
      },
      {
        title: "Emergency & Mobile Patrol",
        image: "/assets/images/products/detection/eo-rooftop-waterfront-deployment.jpg",
        text: "Portable and mobile deployment supports temporary incident response and fast site assessment.",
      },
      {
        title: "Pilot Traceability",
        image: "/assets/images/products/detection/rf-platform-map-closeup.png",
        text: "Where supported, RF and protocol data help identify drone model, track, Remote ID, and pilot-related location cues.",
      },
    ],
  },
  sc: {
    backHref: "/SC/products/sky-guard",
    backLabel: "← 返回天卫系列",
    title: "Sky-Guard 天卫应用场景",
    tagline: "面向高隐私场地与低空安全运营的应用方案",
    intro:
      "Sky-Guard 面向需要被动可视化、可追溯和取证能力的敏感空域。系统以 RF/AoA 信号侦测发现目标，以光电跟踪完成视觉确认，并通过手持设备支撑现场飞手定位和响应。",
    scenarioTitle: "重点应用场景",
    deploymentTitle: "推荐部署逻辑",
    customersTitle: "典型目标客户",
    cta: "查看 Sky-Guard 产品 →",
    customers: [
      "惩教、政府及高隐私敏感场地",
      "警务、体育场、演唱会及大型公众活动",
      "消防、应急响应和临时指挥点",
      "使领馆、银行及金融机构",
      "私人住宅、会所、海滨物业及敏感周界",
    ],
    deployment: [
      {
        title: "外圈：探测与识别",
        text: "AoA 射频侦测围绕重点区域监听无人机控制、遥测和 Remote ID 信号。",
      },
      {
        title: "中圈：视觉锁定与取证",
        text: "光电系统根据方位指引转向目标，记录可见光/红外证据供操作员研判。",
      },
      {
        title: "内圈：现场响应",
        text: "手持定位设备引导巡查人员寻找飞手或遥控器位置，支撑现场处置。",
      },
    ],
    scenarios: [
      {
        title: "高隐私敏感场地",
        image: "/assets/images/products/detection/aoa-luneburg-rooftop-deployment.png",
        text: "无源侦测不主动发射，不干扰合法通信，适合高隐私和敏感区域防护。",
      },
      {
        title: "体育场与大型活动防护",
        image: "/assets/images/products/detection/rf-platform-map-interface.png",
        text: "为体育赛事、演唱会、典礼和大型公众活动提供临时低空态势感知。",
      },
      {
        title: "海滨/临水重点区域监测",
        image: "/assets/images/products/detection/hk-waterfront-low-altitude.jpg",
        text: "适用于海滨、港口和开阔周界，持续监测低空活动和异常目标。",
      },
      {
        title: "视觉确认与证据留存",
        image: "/assets/images/products/detection/eo-visual-confirmation.png",
        text: "光电跟踪以可见光与红外画面确认目标，为升级处置提供证据。",
      },
      {
        title: "应急与移动巡查",
        image: "/assets/images/products/detection/eo-rooftop-waterfront-deployment.jpg",
        text: "支持临时事件响应、移动部署和快速现场低空风险评估。",
      },
      {
        title: "飞手追溯",
        image: "/assets/images/products/detection/rf-platform-map-closeup.png",
        text: "在支持的机型和协议下，输出型号、轨迹、Remote ID 和飞手相关位置线索。",
      },
    ],
  },
  jp: {
    backHref: "/JP/products/sky-guard",
    backLabel: "← Sky-Guard シリーズに戻る",
    title: "Sky-Guard ユースケース",
    tagline: "高プライバシー施設と低高度セキュリティ運用向けの適用シナリオ",
    intro:
      "Sky-Guardは、パッシブな可視化、追跡性、証拠取得が必要な敏感空域向けに設計されています。RF/AoA信号検出で対象を発見し、EO追跡で視覚確認を行い、ハンドヘルド機器で現場の操縦者位置特定を支援します。",
    scenarioTitle: "主な適用シナリオ",
    deploymentTitle: "推奨配備ロジック",
    customersTitle: "想定顧客",
    cta: "Sky-Guard 製品を見る →",
    customers: [
      "矯正施設、政府機関、高プライバシー施設",
      "警察、スタジアム、コンサート、大規模イベント",
      "消防、緊急対応、臨時指揮所",
      "大使館、領事館、銀行、金融機関",
      "私邸、クラブ、ウォーターフロント施設、敏感な周界",
    ],
    deployment: [
      {
        title: "外周: 検出と識別",
        text: "AoA RF検出が重点エリア周辺の制御、テレメトリ、Remote ID信号を監視します。",
      },
      {
        title: "中間: 視覚ロックと証拠化",
        text: "EOシステムが方位キューに基づき対象を捕捉し、可視光/赤外映像を記録します。",
      },
      {
        title: "内周: 現場対応",
        text: "ハンドヘルドロケーターが巡回チームの操縦者位置特定を支援します。",
      },
    ],
    scenarios: [
      {
        title: "高プライバシー施設",
        image: "/assets/images/products/detection/aoa-luneburg-rooftop-deployment.png",
        text: "パッシブ検出はRFを送信せず、合法通信を妨げずに敏感施設を保護します。",
      },
      {
        title: "スタジアム・大規模イベント",
        image: "/assets/images/products/detection/rf-platform-map-interface.png",
        text: "スポーツ会場、コンサート、式典、公共イベント向けの一時的な空域認識を提供します。",
      },
      {
        title: "沿岸・ウォーターフロント監視",
        image: "/assets/images/products/detection/hk-waterfront-low-altitude.jpg",
        text: "港湾、海沿い、開けた周界で低高度活動と異常目標を継続監視します。",
      },
      {
        title: "視覚確認と証拠化",
        image: "/assets/images/products/detection/eo-visual-confirmation.png",
        text: "EO追跡が可視光と赤外映像で目標を確認し、対応判断を支援します。",
      },
      {
        title: "緊急対応・移動巡回",
        image: "/assets/images/products/detection/eo-rooftop-waterfront-deployment.jpg",
        text: "臨時対応、移動配備、迅速な現場リスク評価に対応します。",
      },
      {
        title: "操縦者トレース",
        image: "/assets/images/products/detection/rf-platform-map-closeup.png",
        text: "対応機種では、モデル、軌跡、Remote ID、操縦者関連の位置手掛かりを出力します。",
      },
    ],
  },
} as const;

export default function SkyGuardUseCasesPage({ locale }: { locale: Locale }) {
  const page = copy[locale];

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link
            href={page.backHref}
            className="text-[#f0b429] hover:underline text-sm mb-6 inline-block"
          >
            {page.backLabel}
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {page.title}
          </h1>
          <p className="text-xl text-[#f0b429] font-medium mb-6">
            {page.tagline}
          </p>
          <p className="text-xl text-zinc-400 leading-relaxed">{page.intro}</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden mb-16">
            <div className="grid lg:grid-cols-[1.05fr_1fr]">
              <div className="relative aspect-video bg-black/30">
                <Image
                  src="/assets/images/products/detection/hk-waterfront-low-altitude.jpg"
                  alt={page.title}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
                  {page.deploymentTitle}
                </h2>
                <div className="grid gap-4">
                  {page.deployment.map((item) => (
                    <div key={item.title} className="rounded-xl bg-black/30 p-4">
                      <h3 className="text-[#f0b429] font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-white mb-6">
            {page.scenarioTitle}
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {page.scenarios.map((scenario) => (
              <article
                key={scenario.title}
                className="rounded-xl border border-white/10 overflow-hidden bg-white/5"
              >
                <div className="aspect-video relative bg-black/30">
                  <Image
                    src={scenario.image}
                    alt={scenario.title}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {scenario.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-3">
                    {scenario.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-[1fr_18rem] gap-8 rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 p-6 lg:p-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {page.customersTitle}
              </h2>
              <ul className="grid md:grid-cols-2 gap-3 text-zinc-300">
                {page.customers.map((customer) => (
                  <li key={customer}>• {customer}</li>
                ))}
              </ul>
            </div>
            <Link
              href={page.backHref}
              className="inline-flex items-center justify-center self-center rounded-lg bg-[#f0b429] px-6 py-3 font-semibold text-black hover:bg-[#e6a800] transition-colors"
            >
              {page.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
