import Link from "next/link";
import Image from "next/image";

export default function HiveLinkPageJP() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/JP/products" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">← 製品情報に戻る</Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Hive-Link / LAWN</h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">ISACノード＆低高度無線ネットワークプラットフォーム</p>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12 bg-black/30">
            <Image src="/assets/images/products/product-isac-node.png" alt="Hive-Link ISACエコシステム" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Hive-Link ISACノード</h2>
            <p className="text-zinc-400 leading-relaxed">
              Hive-Linkノードは、先進メタサーフェスアンテナ、FPGAベース信号処理、AI支援マルチビーム機能を備えた知的地上局です。統合センシング通信（ISAC）のデュアル機能を提供：認可UAVとの低高度空対地通信と、非認可ターゲットのレーダーレベルセンシングを同時に実行します。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">ハードウェア仕様</h2>
            <ul className="text-zinc-400 space-y-2">
              <li><strong className="text-zinc-300">アンテナ：</strong>多機能キャビティアンテナ 3.3–3.8 GHz；流体メタサーフェス、20 MHz切替；デュアル偏波、69.5%比帯域幅。利得：16–30 dBi。</li>
              <li><strong className="text-zinc-300">RFフロントエンド：</strong>COTS 4–8チャネルSDRプラットフォーム（FPGA + 高速ADC/DAC）によるビームフォーミングと波形生成。</li>
              <li><strong className="text-zinc-300">エッジAIコントローラ：</strong>NVIDIA Jetsonまたは同等品、ResNet50ベースのターゲット分類。</li>
              <li><strong className="text-zinc-300">処理レイテンシ：</strong>&lt; 10 ms ビーム切替；&lt; 100 ms ターゲット検出・分類。</li>
              <li><strong className="text-zinc-300">カバレッジ範囲：</strong>通信1–2 km；パッシブレーダーセンシング約1 km。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">LAWN / UTMプラットフォーム</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              低高度無線ネットワーク（LAWN）管理プラットフォームは、都市または地域全体の複数のHive-Linkノードをオーケストレーションし、以下を提供します：
            </p>
            <ul className="text-zinc-400 space-y-2">
              <li>空域セグメンテーション（垂直レイヤー 0–150m、150–300m、300–1000m）</li>
              <li>自動承認と衝突検出付きフライトプラン管理</li>
              <li>非認可ターゲットアラートと電子ジオフェンシング</li>
              <li>規制コンプライアンス向けデータアーカイブと監査</li>
              <li>グレースフルデグラデーションのための衛星フォールバック統合</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">ターゲット展開先</h2>
            <p className="text-zinc-400">サイエンスパーク、港湾、空港アプローチコリドー、都市内の指定低高度エアウェイコリドー。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
