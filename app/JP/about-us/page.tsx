const team = [
  {
    name: "Dr. Kevin Lin（林權緯 博士）",
    role: "最高経営責任者 & 最高技術責任者",
    email: "qwlin@metabee.com.hk",
    bio: "計算電磁気学の専門家。アンテナ設計、RIS、RF統合の技術方針を統括。",
  },
  {
    name: "Dr. Aaron NG KUNG BO（吳公保 博士）",
    role: "コンサルタント、RF＆インテグレーション",
    email: "aaronng@metabee.com.hk",
    bio: "無線通信分野のベテランエンジニア。フィールドでのRF性能と規制適合性を確保。",
  },
  {
    name: "Miss Noyes Mok（莫肇怡）",
    role: "テクニカルマネージャー",
    email: "noyesmok@metabee.com.hk",
    bio: "製品開発と製造実行を統括。デジタル信号処理の専門家、20年以上の業界経験。",
  },
  {
    name: "Prof. Hang Wong（黃衡 教授）",
    role: "チーフサイエンティフィックアドバイザー（非常勤）",
    bio: "香港城市大学テラヘルツ・ミリ波国家重点実験室。多機能キャビティアンテナとメタピクセルの発明者。",
  },
];

export default function AboutUsJP() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">会社概要</h1>
          <p className="text-xl text-zinc-400">
            MetaBee Technology Limitedは、低高度経済インフラと自律型ドローン制御システムを専門とする香港拠点のテクノロジー企業です。
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">ミッション</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            MetaBeeは、エンドツーエンドの低高度空域ソリューションを提供し、自律型UAV運用のためのグリーンイノベーションを開発することを使命としています。オペレーターが単機運用から都市規模の低高度無線ネットワーク（LAWN）へ、サービスプロバイダーを変更することなくシームレスに移行できるよう支援します。AI駆動ナビゲーション、衛星・地上ハイブリッド通信、統合センシング通信技術を通じ、粤港澳大湾区およびそれ以遠のお客様の特定ニーズに対応します。
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-10">経営チーム</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-[#f0b429] text-sm font-medium mb-2">{member.role}</p>
                {member.email ? (
                  <p className="text-sm mb-2">
                    <a href={`mailto:${member.email}`} className="text-zinc-300 hover:text-[#f0b429] transition-colors">{member.email}</a>
                  </p>
                ) : null}
                <p className="text-zinc-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
