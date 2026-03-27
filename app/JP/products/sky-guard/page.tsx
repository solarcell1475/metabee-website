import Link from "next/link";
import Image from "next/image";

const skyGuardProducts = [
  {
    slug: "radar-r3000",
    name: "Sky-Guard レーダー R3000",
    tagline: "3 km 低高度UAV検出レーダー",
    description: "コンパクトなKuバンドパルスドップラーレーダー。360°機械走査、3 km検出距離、小型UAVのリアルタイム3Dトラッキング。",
    image: "/assets/images/products/product-skyguard-radar.png",
    imagePosition: "center top",
    animatedPan: true,
  },
  {
    slug: "radar-r5000",
    name: "Sky-Guard レーダー R5000",
    tagline: "5 km 低高度UAV検出レーダー",
    description: "拡張距離型。5 km検出能力と高出力送信電力を備え、広域ペリメーターおよび重要インフラ防護向け。",
    image: "/assets/images/products/product-skyguard-radar.png",
    imagePosition: "center top",
    animatedPan: true,
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
          <div className="grid md:grid-cols-3 gap-8">
            {skyGuardProducts.map((product) => (
              <Link key={product.slug} href={`/JP/products/sky-guard/${product.slug}`} className="group block rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:border-[#f0b429]/50 transition-colors">
                <div className="aspect-video relative bg-black/30">
                  <Image src={product.image} alt={product.name} fill className={`object-cover group-hover:scale-105 transition-transform duration-300 ${product.animatedPan ? "image-pan-top-bottom" : ""}`} style={{ objectPosition: product.imagePosition }} sizes="(max-width: 768px) 100vw, 33vw" />
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

          <div className="mt-16 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">レーダーモデル比較</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="py-3 pr-4 text-zinc-400 font-medium">パラメータ</th>
                      <th className="py-3 px-4 text-[#f0b429] font-semibold">R3000</th>
                      <th className="py-3 pl-4 text-[#f0b429] font-semibold">R5000</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    <tr className="border-b border-white/5"><td className="py-3 pr-4 text-zinc-400">最大検出距離</td><td className="py-3 px-4">≥ 3 km</td><td className="py-3 pl-4">≥ 5 km</td></tr>
                    <tr className="border-b border-white/5"><td className="py-3 pr-4 text-zinc-400">ピーク送信電力</td><td className="py-3 px-4">≤ 20 W</td><td className="py-3 pl-4">≤ 100 W</td></tr>
                    <tr className="border-b border-white/5"><td className="py-3 pr-4 text-zinc-400">消費電力</td><td className="py-3 px-4">≤ 150 W</td><td className="py-3 pl-4">≤ 200 W</td></tr>
                    <tr className="border-b border-white/5"><td className="py-3 pr-4 text-zinc-400">システム重量</td><td className="py-3 px-4">≤ 30 kg</td><td className="py-3 pl-4">≤ 35 kg</td></tr>
                    <tr><td className="py-3 pr-4 text-zinc-400">周波数帯</td><td className="py-3 px-4">Ku (16 GHz ± 100 MHz)</td><td className="py-3 pl-4">Ku (16 GHz ± 100 MHz)</td></tr>
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
