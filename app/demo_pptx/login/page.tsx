import DemoPptxLoginForm from "./ui/DemoPptxLoginForm";

export default function DemoPptxLoginPage({
  searchParams,
}: {
  searchParams: { next?: string };
}) {
  const nextPath = searchParams.next || "/demo_pptx";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-4 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,180,41,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(75,85,99,0.28),transparent_24%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative w-full max-w-md rounded-[28px] border border-white/15 bg-black/50 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f0b429]">
          MetaBee Demo
        </p>
        <h1 className="mb-2 text-3xl font-semibold leading-tight">
          Product presentation access
        </h1>
        <p className="mb-6 text-sm leading-relaxed text-zinc-400">
          Enter username and password to open the immersive LAE management and integrated anti-drone presentation.
        </p>
        <DemoPptxLoginForm nextPath={nextPath} />
      </div>
    </section>
  );
}
