import Link from "next/link";
import Image from "next/image";

export default function NavKitSPageJP() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/JP/products" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">← 製品情報に戻る</Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">NavKit-S ナビゲーションキット</h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">機載自律ナビゲーションキット</p>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12 bg-black/30">
            <Image src="/assets/images/products/product-navkit-fpga-pcb.png" alt="NavKit-S" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">製品説明</h2>
            <p className="text-zinc-400 leading-relaxed">
              NavKit-Sは、AIベースの自律ナビゲーション、マルチセンサー環境認識、Innowave衛星通信モジュールとのプラグアンドプレイ互換性を組み合わせた統合型機載システムです。GPS信号が弱いまたは完全に利用できないシナリオでも安全な自律飛行を可能にします。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">コアコンポーネント</h2>
            <ul className="text-zinc-400 space-y-2">
              <li><strong className="text-zinc-300">AI制御ユニット：</strong>ARMベースまたはFPGA SoC上でリアルタイムSLAM、ビジュアルオドメトリ、障害物回避アルゴリズムを実行。</li>
              <li><strong className="text-zinc-300">ビジョン＋環境センシング：</strong>ステレオカメラ、オプティカルフローセンサー、超音波/ミリ波レーダーによる近距離障害物検出。</li>
              <li><strong className="text-zinc-300">GNSS/INS融合モジュール：</strong>高精度IMUとGNSS受信機（RTK対応）によるサーベイグレード測位。</li>
              <li><strong className="text-zinc-300">衛星通信インターフェース：</strong>Innowave狭帯域衛星モジュール（Lバンド、テキスト/コマンドチャネル）用標準コネクタ。</li>
              <li><strong className="text-zinc-300">電源管理：</strong>自動フェイルオーバー付き冗長電源。5～30 kgクラスのバッテリー駆動UAV向け設計。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">機能特性</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>リアルタイム経路再計画付き自律ウェイポイントナビゲーション</li>
              <li>ビジョンとレーダーの融合による障害物回避</li>
              <li>ビジュアルSLAMによるGPS非対応の屋内/峡谷飛行</li>
              <li>スマート着陸地点選択による自動帰還</li>
              <li>飛行後分析用のセンサーデータロギングと再生</li>
              <li>OTA（無線）ファームウェアアップデート</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">ターゲットアプリケーション</h2>
            <p className="text-zinc-400">送電線点検、インフラ測量、遠隔地物流、越境自律運用。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
