export default function ProjectsSC() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">项目案例</h1>
          <p className="text-xl text-zinc-400 mb-12">我们在大湾区的试点部署与现场试验。</p>

          <div className="rounded-xl border border-white/10 p-8 bg-white/5">
            <h2 className="text-xl font-semibold text-white mb-4">即将推出</h2>
            <p className="text-zinc-400">
              云峰科技正在与锚定客户在香港、深圳和澳门开展现场试验与客户试点。目标部署地点包括：
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>• 深圳前海合作区</li>
              <li>• 香港科学园</li>
              <li>• 澳门口岸（跨境物流）</li>
            </ul>
            <p className="mt-6 text-zinc-500 text-sm">
              试点项目将随进展陆续公布。如有合作或试点需求，请{" "}
              <a href="/SC/contact-us" className="text-[#f0b429] hover:underline">联系我们</a>。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
