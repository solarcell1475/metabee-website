import Link from "next/link";
import Image from "next/image";

export default function ConsolePageJP() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/JP/products/sky-guard" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">← Sky-Guardシリーズに戻る</Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Sky-Guard コンソール</h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">デジタル・インテリジェント飛行意思決定支援システム</p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="aspect-video relative rounded-xl overflow-hidden bg-black/30">
              <Image src="/assets/images/products/product-skyguard-console-map.png" alt="Sky-Guard Console – 衛星マップビュー" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="aspect-video relative rounded-xl overflow-hidden bg-black/30">
              <Image src="/assets/images/products/product-skyguard-console-ui.png" alt="Sky-Guard Console – レーダー表示インターフェース" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">背景</h2>
            <p className="text-zinc-400 leading-relaxed">
              低高度経済の加速と一般航空への関心の高まりに伴い、フライトキャンプ（一般航空、パラグライダー、ドローンテスト、動力ハンググライダー、熱気球など）は、経験ベースの管理からデータ駆動のインテリジェント運営へと移行しつつあります。風速、気温、湿度、気圧、雲底高、降水量などの気象条件は、軽航空機の安全性と性能に決定的な影響を与えます。Sky-Guardコンソールは、生の気象データと実行可能な飛行意思決定とのギャップを埋めます。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">コア機能</h2>
            <ul className="text-zinc-400 space-y-3">
              <li><strong className="text-zinc-300">リアルタイム気象評価：</strong>各機種の安全な離着陸閾値を現在の条件が満たしているか継続的に評価。</li>
              <li><strong className="text-zinc-300">飛行シミュレーション：</strong>さまざまな気象シナリオ下での飛行姿勢、上昇率、滑空比、操縦難易度をモデル化。</li>
              <li><strong className="text-zinc-300">最適フライトプランニング：</strong>最適な離着陸方向、タイミング、上昇プロファイル、ホールディングパターン、帰還ウェイポイントを推奨。</li>
              <li><strong className="text-zinc-300">理想的フライトウィンドウ予測：</strong>タイムスロットベースの運用ウィンドウを予測し、キャンプスケジュールと顧客予約を最適化。</li>
              <li><strong className="text-zinc-300">自動リスクアラート：</strong>飛行リスク警告と運用推奨を生成し、インストラクターとパイロットのリアルタイム意思決定を支援。</li>
              <li><strong className="text-zinc-300">パーソナライズドフライトアドバイス：</strong>サイト地形、ユーザープロファイル（年齢、活動強度）、時空間コンテキストに基づき推奨をカスタマイズ。</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">パーソナライズドキャンプ機能</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>訪問者ごとの個別飛行意思決定推奨</li>
              <li>キャンプの3日先安全リスク予報</li>
              <li>最適飛行時間帯の提案</li>
              <li>ビジュアルフライトパスプレビューとシミュレーション</li>
              <li>経時的に改善するローカルチューニングAI意思決定モデル</li>
              <li>緊急/突発的気象変化アラート</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">ソリューションアーキテクチャ</h2>
            <p className="text-zinc-400 leading-relaxed">
              リアルタイム気象データ取得、航空機性能パラメータライブラリ、空力モデル、AI支援意思決定アルゴリズムを統合プラットフォームに融合。データソースには、グリッド気象モデル出力（1〜2 km解像度）、現地センサー校正、過去の運用記録が含まれます。
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">サービスティア</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="py-3 pr-4 text-zinc-400 font-medium">機能</th>
                    <th className="py-3 px-4 text-[#f0b429] font-semibold">スタンダード</th>
                    <th className="py-3 px-4 text-[#f0b429] font-semibold">プロフェッショナル</th>
                    <th className="py-3 pl-4 text-[#f0b429] font-semibold">エンタープライズ</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/5"><td className="py-2 pr-4 text-zinc-400">コア出力</td><td className="py-2 px-4">インデックス監視＆レビュー</td><td className="py-2 px-4">インデックス駆動意思決定ループ</td><td className="py-2 pl-4">フルカスタムパイプライン</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4 text-zinc-400">予報期間</td><td className="py-2 px-4">24時間ローリング</td><td className="py-2 px-4">48時間ローリング</td><td className="py-2 pl-4">72〜120時間トレンド</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4 text-zinc-400">監視ポイント数</td><td className="py-2 px-4">5カスタム地点</td><td className="py-2 px-4">10カスタム地点</td><td className="py-2 pl-4">10+（拡張可能）</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4 text-zinc-400">AIサービス</td><td className="py-2 px-4">—</td><td className="py-2 px-4">マルチインデックス分析</td><td className="py-2 pl-4">自己学習モデル</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2 pr-4 text-zinc-400">アラートチャネル</td><td className="py-2 px-4">Webダッシュボード</td><td className="py-2 px-4">リアルタイムプッシュ通知</td><td className="py-2 pl-4">マルチチャネル+監査証跡</td></tr>
                  <tr><td className="py-2 pr-4 text-zinc-400">成果物</td><td className="py-2 px-4">飛行データロギング、24h予報、5地点レポート、Webポータル</td><td className="py-2 px-4">日次レポート＋動画ブリーフィング、48h予報、10地点レポート、プッシュ通知</td><td className="py-2 pl-4">カスタム意思決定レポート、飛行行動ロギング、72-120h予報、10-15地点レポート、マルチシステムプッシュ</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">コンプライアンス＆リスク境界</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>本サービスはインデックスとアドバイザリーアクションのみを提供し、認証済み環境データ製品に代わるものではありません。</li>
              <li>インデックスは意思決定支援であり、安全性や規制コンプライアンスの唯一の根拠ではありません。オペレーターは最終判断権と現地検証手順を保持する必要があります。</li>
              <li>過去データが不十分またはバイアスが大きい場合、モデル不確実性が増大します。システムはそのような状況をフラグし、ルールベース/保守的戦略へのフォールバックをサポートします。</li>
            </ul>

            <div className="mt-12 rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">データシートをダウンロード</h3>
                <p className="text-zinc-400 text-sm mt-1">システム概要、サービスティア、コンプライアンスノートを含むA4製品データシート（PDF形式）。</p>
              </div>
              <a href="/downloads/Sky-Guard_Console_Datasheet.pdf" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors whitespace-nowrap" download>PDF ダウンロード</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
