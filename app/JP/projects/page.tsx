export default function ProjectsJP() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">プロジェクト</h1>
          <p className="text-xl text-zinc-400 mb-12">粤港澳大湾区におけるパイロット展開とフィールドトライアル。</p>

          <div className="rounded-xl border border-white/10 p-8 bg-white/5">
            <h2 className="text-xl font-semibold text-white mb-4">近日公開</h2>
            <p className="text-zinc-400">
              MetaBeeは、香港、深セン、マカオのアンカークライアントとフィールドトライアルおよびカスタマーパイロットを実施中です。展開予定地：
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>• 深セン前海協力区</li>
              <li>• 香港サイエンスパーク</li>
              <li>• マカオ港（越境物流）</li>
            </ul>
            <p className="mt-6 text-zinc-500 text-sm">
              パイロットプロジェクトは進捗に応じて発表します。パートナーシップやパイロットに関するお問い合わせは{" "}
              <a href="/JP/contact-us" className="text-[#f0b429] hover:underline">こちら</a>まで。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
