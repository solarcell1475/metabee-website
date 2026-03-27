 "use client";

import dynamic from "next/dynamic";

const DemoPptxClient = dynamic(() => import("./DemoPptxClient"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-black text-zinc-300">
      Loading demo...
    </div>
  ),
});

export default function DemoPptxPage() {
  return <DemoPptxClient />;
}
