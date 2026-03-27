import Link from "next/link";
import Image from "next/image";

export default function HomeJP() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/assets/images/hero/hero-city-drone-network.jpg"
          alt="低高度ドローンネットワーク"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            香港をリードする低高度テクノロジー企業
          </h1>
          <p className="text-xl lg:text-2xl text-zinc-200 mb-8">
            AI駆動の自律ナビゲーションと統合センシング通信で、よりスマートな未来を実現
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/JP/products"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors"
            >
              製品情報を見る
            </Link>
            <Link
              href="/JP/about-us"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
            AIによる低高度空域管理の革新的アプローチ
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            MetaBee Technology Limited は香港に本社を置くテクノロジー企業で、低高度経済インフラと自律型ドローン制御システムを専門としています。独自のAI駆動ナビゲーション、インテリジェントリコンフィギュラブルメタサーフェス（RIS）、統合センシング通信（ISAC）技術を組み合わせ、無人航空機（UAV）および都市型エアモビリティ（UAM）向けのエンドツーエンドソリューションを粤港澳大湾区およびそれ以遠で提供しています。
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            私たちのビジョンは、低高度空域管理のワンストッププラットフォームプロバイダーとなること——オペレーターが単機自律運用から都市規模の低高度無線ネットワーク（LAWN）へ、サービスプロバイダーを変更することなくシームレスに移行できるようにすることです。
          </p>
        </div>
      </section>

      {/* Three-Layer Products */}
      <section className="py-16 lg:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-12 text-center">
            3層プロダクトアーキテクチャ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-white/10 p-6 bg-white/5 hover:border-[#f0b429]/50 transition-colors">
              <div className="h-40 mb-4 relative rounded-lg overflow-hidden bg-black/30">
                <Image src="/assets/images/products/product-navkit-fpga-pcb.png" alt="NavKit-S" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">NavKit-S ナビゲーションキット</h3>
              <p className="text-zinc-400 text-sm mb-4">GPS非対応環境向けAIベースの機載自律ナビゲーションキット。</p>
              <Link href="/JP/products/navkit-s" className="text-[#f0b429] font-medium hover:underline">詳細を見る →</Link>
            </div>

            <div className="rounded-xl border border-white/10 p-6 bg-white/5 hover:border-[#f0b429]/50 transition-colors">
              <div className="h-40 mb-4 relative rounded-lg overflow-hidden bg-black/30">
                <Image src="/assets/images/products/product-skyguard-radar.png" alt="Sky-Guard シリーズ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sky-Guard シリーズ</h3>
              <p className="text-zinc-400 text-sm mb-4">UAV検出レーダーとAI飛行意思決定支援システム。</p>
              <Link href="/JP/products/sky-guard" className="text-[#f0b429] font-medium hover:underline">詳細を見る →</Link>
            </div>

            <div className="rounded-xl border border-white/10 p-6 bg-white/5 hover:border-[#f0b429]/50 transition-colors">
              <div className="h-40 mb-4 relative rounded-lg overflow-hidden bg-black/30">
                <Image src="/assets/images/products/product-isac-node.png" alt="Hive-Link / LAWN" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hive-Link / LAWN</h3>
              <p className="text-zinc-400 text-sm mb-4">ISACノードと都市規模低高度無線ネットワークプラットフォーム。</p>
              <Link href="/JP/products/hive-link" className="text-[#f0b429] font-medium hover:underline">詳細を見る →</Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/JP/products" className="inline-flex items-center justify-center px-6 py-6 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors">
              全製品を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">パートナー</h2>
          <p className="text-zinc-400 text-lg mb-8">パートナーと共に、低高度経済のより良い未来をリードしています。</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white font-semibold">Innowave</span>
              <p className="text-zinc-500 text-sm mt-1">衛星IoT接続</p>
            </div>
            <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white font-semibold">香港城市大学</span>
              <p className="text-zinc-500 text-sm mt-1">テラヘルツ国家重点実験室</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
