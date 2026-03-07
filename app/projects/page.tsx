export default function Projects() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-zinc-400 mb-12">
            Our pilot deployments and field trials across the Greater Bay Area.
          </p>

          <div className="rounded-xl border border-white/10 p-8 bg-white/5">
            <h2 className="text-xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-zinc-400">
              MetaBee is conducting field trials and customer pilots with anchor clients in Hong Kong, Shenzhen, and Macau. Target deployment locations include:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>• Shenzhen Qianhai Cooperation Zone</li>
              <li>• Hong Kong Science Park</li>
              <li>• Macau Port (cross-border logistics)</li>
            </ul>
            <p className="mt-6 text-zinc-500 text-sm">
              Pilot projects will be announced as they progress. For partnership or pilot enquiries, please{" "}
              <a href="/contact-us" className="text-[#f0b429] hover:underline">contact us</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
