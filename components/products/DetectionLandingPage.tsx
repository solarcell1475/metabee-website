import Image from "next/image";
import Link from "next/link";
import {
  DetectionLocale,
  detectionLandingCopy,
  detectionProducts,
} from "@/lib/products/detection";

const localePrefix: Record<DetectionLocale, string> = {
  en: "",
  sc: "/SC",
  jp: "/JP",
};

export default function DetectionLandingPage({
  locale,
}: {
  locale: DetectionLocale;
}) {
  const copy = detectionLandingCopy[locale];
  const prefix = localePrefix[locale];

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link
            href={copy.backHref}
            className="text-[#f0b429] hover:underline text-sm mb-6 inline-block"
          >
            {copy.backLabel}
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.title}
          </h1>
          <p className="text-xl text-[#f0b429] font-medium mb-6">
            {copy.tagline}
          </p>
          <p className="text-xl text-zinc-400 leading-relaxed">
            {copy.description}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {detectionProducts.map((product) => {
              const content = product.content[locale];

              return (
                <Link
                  key={product.slug}
                  href={`${prefix}/products/sky-guard/detection/${product.slug}`}
                  className="group block rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:border-[#f0b429]/50 transition-colors"
                >
                  <div
                    className={`aspect-video relative ${
                      product.visualBackground === "dark" || product.visualFit === "cover"
                        ? "bg-[#0a0a0a]"
                        : "bg-white"
                    }`}
                  >
                    <Image
                      src={product.productImage}
                      alt={content.title}
                      fill
                      className={`${
                        product.visualFit === "cover"
                          ? "object-cover"
                          : "object-contain p-6"
                      } group-hover:scale-105 transition-transform duration-300`}
                      style={{ objectPosition: product.imagePosition }}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white group-hover:text-[#f0b429] transition-colors">
                      {content.title}
                    </h2>
                    <p className="text-[#f0b429] text-sm font-medium mt-1">
                      {content.tagline}
                    </p>
                    <p className="text-zinc-400 text-sm mt-3">
                      {content.summary}
                    </p>
                    <span className="inline-block mt-4 text-[#f0b429] font-medium group-hover:underline">
                      {copy.cardsCta}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              {copy.flowTitle}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {copy.flow.map((step, index) => (
                <div key={step.title} className="rounded-lg bg-black/30 p-5">
                  <div className="text-[#f0b429] font-semibold mb-3">
                    {String(index + 1).padStart(2, "0")} / {step.title}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
