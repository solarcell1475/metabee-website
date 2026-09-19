import Link from "next/link";
import Image from "next/image";

const skyGuardProducts = [
  {
    slug: "detection/remote-id-node",
    name: "Sky-Guard BG-360R Remote ID 監視ノード",
    tagline: "協調空域把握",
    description:
      "受信専用のRemote ID監視ノード。準拠ドローンのすべての送信——シリアル番号、位置、操縦者位置——をデコードし、都市規模の協調空域状況を構築します。",
    image: "/assets/images/products/detection/bg360r-node-render.jpg",
    imagePosition: "center",
    animatedPan: false,
    imageContain: true,
  },
  {
    slug: "detection/radar-detection",
    name: "Sky-Guard レーダー検出システム",
    tagline: "360°低高度UAV検出",
    description: "低高度UAVの検出、追跡、3D目標出力、EO精密キューイングに対応するKuバンドレーダーサブシステム。",
    image: "/assets/images/products/detection/radar-detection-1.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "detection/fixed-drone-detection",
    name: "Sky-Guard SG-6000F AoA ドローン信号検出システム",
    tagline: "360°パッシブRF検出",
    description: "AoA / Luneburg lensアンテナ感知とSDRアーキテクチャに基づくパッシブRF信号検出システム。20 MHz〜6 GHz、600機種以上の認識、無人運用に対応。",
    image: "/assets/images/products/detection/aoa-luneburg-rooftop-deployment.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "detection/handheld-drone-locator",
    name: "Sky-Guard SG-6000P ハンドヘルド・ドローンロケーター",
    tagline: "携帯型ドローン・操縦者位置特定",
    description: "スペクトラム検出、プロトコル解析、Remote ID、FPV検出、ドローン位置特定、操縦者位置特定に対応する軽量現場端末。",
    image: "/assets/images/products/detection/handheld-locator-1.png",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "detection/eo-tracking",
    name: "Sky-Guard EOトラッキングシステム",
    tagline: "可視光・熱画像確認",
    description: "可視光撮像、赤外線熱画像、マルチスペクトル融合、サーボ追跡を組み合わせたEO追跡サブシステム。",
    image: "/assets/images/products/detection/eo-rooftop-waterfront-deployment.jpg",
    imagePosition: "center",
    animatedPan: false,
  },
  {
    slug: "console",
    name: "Sky-Guard コンソール",
    tagline: "デジタル・インテリジェント飛行意思決定支援システム",
    description: "AI搭載プラットフォーム。リアルタイム気象データ、空力モデル、航空機性能プロファイルを融合し、実行可能な飛行安全評価を提供。",
    image: "/assets/images/products/product-skyguard-console-map.png",
    imagePosition: "center",
    animatedPan: false,
  },
];

export default function SkyGuardSeriesPageJP() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link href="/JP/products" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">← 製品情報に戻る</Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Sky-Guard 製品シリーズ</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            低高度空域セキュリティの完全エコシステム — 高性能UAV検出レーダーからAI飛行意思決定支援まで — オペレーターに完全な状況認識と実行可能なインテリジェンスを提供します。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/JP/products/sky-guard/use-cases"
            className="group mb-12 grid lg:grid-cols-[1.1fr_1fr] overflow-hidden rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 hover:border-[#f0b429]/60 transition-colors"
          >
            <div className="relative aspect-video bg-black/30">
              <Image
                src="/assets/images/products/detection/hk-waterfront-low-altitude.jpg"
                alt="Sky-Guard ユースケース"
                fill
                className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <p className="text-[#f0b429] text-sm font-semibold mb-3">
                ユースケース
              </p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                高プライバシー施設、大規模イベント、沿岸エリア、緊急巡回向けの低高度セキュリティ
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                パッシブRF/AoA検出、EO確認、ハンドヘルド操縦者位置特定を分層防護として配備する方法を紹介します。
              </p>
              <span className="mt-5 text-[#f0b429] font-medium group-hover:underline">
                ユースケースを見る →
              </span>
            </div>
          </Link>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skyGuardProducts.map((product) => (
              <Link key={product.slug} href={`/JP/products/sky-guard/${product.slug}`} className="group block rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:border-[#f0b429]/50 transition-colors">
                <div className="aspect-video relative bg-[#0a0a0a]">
                  <Image src={product.image} alt={product.name} fill className={`${product.imageContain ? "object-contain p-4" : "object-cover"} group-hover:scale-105 transition-transform duration-300 ${product.animatedPan ? "image-pan-top-bottom" : ""}`} style={{ objectPosition: product.imagePosition }} sizes="(max-width: 768px) 100vw, 33vw" />
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
