import Link from "next/link";
import Image from "next/image";

export default function RadarR3000PageJP() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/JP/products/sky-guard" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">← Sky-Guardシリーズに戻る</Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Sky-Guard レーダー R3000</h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">3 km 低高度UAV検出レーダー</p>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12 bg-black/30">
            <Image src="/assets/images/products/product-skyguard-radar.png" alt="Sky-Guard Radar R3000" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 896px" />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">概要</h2>
            <p className="text-zinc-400 leading-relaxed">
              Sky-Guard レーダー R3000は、低高度無人航空機の検出・追跡に特化したコンパクトな全コヒーレントKuバンドパルスドップラーレーダーです。レーダーユニット、電動ターンテーブル、表示制御端末ソフトウェアで構成され、距離・方位角・高度・速度・経緯度のリアルタイム3Dターゲットデータを出力し、併設の電子光学（EO）システムやカウンターUASエフェクターへの精密キューイングが可能です。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">動作モード</h2>
            <p className="text-zinc-400 leading-relaxed">
              <strong className="text-zinc-300">360°全方位低高度監視：</strong>端末ソフトウェアからの指令を受け、レーダーは方位角360°で連続機械走査を行いながら、仰角0°〜30°を電子走査し、自動的にトラックを開始・維持し、結果を表示コンソールに報告します。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">アプリケーション</h2>
            <ul className="text-zinc-400 space-y-2">
              <li><strong className="text-zinc-300">スタンドアロン展開：</strong>三脚に設置し、独立したUAV検出・追跡を実施。</li>
              <li><strong className="text-zinc-300">システム統合：</strong>EO識別システム、ジャミングシステム、スプーフィングシステムと連携し、完全な検出-追跡-無力化能力を実現。</li>
              <li><strong className="text-zinc-300">車載/固定局：</strong>車両ルーフに設置して移動監視局として、または建物屋上に設置して常設監視ポイントとして運用。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">キーテクノロジー</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>全コヒーレントパルスドップラー処理</li>
              <li>和差モノパルス角度測定</li>
              <li>MTDコヒーレント積分</li>
              <li>CFAR（一定誤警報率）検出</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">仕様</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400 w-1/2">周波数帯</td><td className="py-3">Ku, 16 GHz ± 100 MHz</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">方位走査</td><td className="py-3">360° 機械走査</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">仰角走査（電子）</td><td className="py-3">≥ 30°</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">ビーム幅（Az / El）</td><td className="py-3">≤ 3° / ≤ 6°</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">ピーク送信電力</td><td className="py-3">≤ 20 W</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">最大検出距離</td><td className="py-3">≥ 3 km（DJI Phantom 3/4, Pd = 85%）</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">最小検出距離</td><td className="py-3">≤ 250 m</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">最小検出速度</td><td className="py-3">≤ 2.5 m/s</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">距離精度（RMS）</td><td className="py-3">≤ 10 m</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">方位角精度（RMS）</td><td className="py-3">≤ 0.5°</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">仰角精度（RMS）</td><td className="py-3">≤ 0.5°</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">データ更新レート</td><td className="py-3">3 s（全360°走査）</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">レーダーユニット寸法</td><td className="py-3">≤ 650 × 400 × 100 mm</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">レーダー+ターンテーブル寸法</td><td className="py-3">≤ 650 × 650 × 250 mm</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">電源</td><td className="py-3">+28 V DC</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">消費電力</td><td className="py-3">≤ 150 W（ターンテーブル含む）</td></tr>
                  <tr className="border-b border-white/10"><td className="py-3 pr-4 text-zinc-400">システム重量</td><td className="py-3">≤ 30 kg（レーダー+ターンテーブル）</td></tr>
                  <tr><td className="py-3 pr-4 text-zinc-400">インターフェース</td><td className="py-3">ギガビットイーサネット</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">表示制御ソフトウェア</h2>
            <p className="text-zinc-400 leading-relaxed">
              付属の端末ソフトウェアは、レーダー運用制御、パラメータ設定、データ解析、ターゲット表示、実験データロギングを担当。ネイティブプロトコルから顧客指定フォーマットへの変換も行い、サードパーティ指揮統制システムとのシームレスな統合を実現します。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">梱包リスト</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="py-3 pr-4 text-zinc-400 font-medium">#</th>
                    <th className="py-3 px-4 text-zinc-400 font-medium">品目</th>
                    <th className="py-3 px-4 text-zinc-400 font-medium">数量</th>
                    <th className="py-3 pl-4 text-zinc-400 font-medium">備考</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/5"><td className="py-2 pr-4">1</td><td className="py-2 px-4">レーダーユニット</td><td className="py-2 px-4">1</td><td className="py-2 pl-4" /></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4">2</td><td className="py-2 px-4">電動ターンテーブル</td><td className="py-2 px-4">1</td><td className="py-2 pl-4" /></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4">3</td><td className="py-2 px-4">三脚</td><td className="py-2 px-4">1</td><td className="py-2 pl-4" /></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4">4</td><td className="py-2 px-4">GNSS/INSアンテナ</td><td className="py-2 px-4">2</td><td className="py-2 pl-4" /></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4">5</td><td className="py-2 px-4">ケーブルセット</td><td className="py-2 px-4">1</td><td className="py-2 pl-4">電源+データ、10 m</td></tr>
                  <tr><td className="py-2 pr-4">6</td><td className="py-2 px-4">ファスナーキット</td><td className="py-2 px-4">1</td><td className="py-2 pl-4" /></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">データシートをダウンロード</h3>
                <p className="text-zinc-400 text-sm mt-1">完全な仕様と梱包リストを含むA4製品データシート（PDF形式）。</p>
              </div>
              <a href="/downloads/Sky-Guard_Radar_R3000_Datasheet.pdf" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors whitespace-nowrap" download>PDF ダウンロード</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
