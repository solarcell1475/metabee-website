import Image from "next/image";
import Link from "next/link";
import {
  DetectionLocale,
  DetectionProductSlug,
  detectionLandingCopy,
  getDetectionProduct,
} from "@/lib/products/detection";

const labels: Record<
  DetectionLocale,
  {
    overview: string;
    highlights: string;
    features: string;
    applications: string;
    specs: string;
    visual: string;
    gallery: string;
    selectedProduct: string;
    downloadTitle: string;
    downloadDescription: string;
    backLabel: string;
  }
> = {
  en: {
    overview: "Overview",
    highlights: "Operational Highlights",
    features: "Key Capabilities",
    applications: "Application Scenarios",
    specs: "Key Specifications",
    visual: "Product Visual",
    gallery: "Field Photos & Interfaces",
    selectedProduct: "Selected product",
    downloadTitle: "Download Datasheet",
    downloadDescription:
      "A4 product datasheet in PDF format with detailed features and specifications.",
    backLabel: "← Back to Sky-Guard Series",
  },
  sc: {
    overview: "概述",
    highlights: "运行亮点",
    features: "核心能力",
    applications: "应用场景重点",
    specs: "关键参数",
    visual: "产品图片",
    gallery: "现场照片与系统界面",
    selectedProduct: "当前产品",
    downloadTitle: "下载产品手册",
    downloadDescription: "PDF 格式 A4 产品手册，包含详细功能与技术参数。",
    backLabel: "← 返回天卫系列",
  },
  jp: {
    overview: "概要",
    highlights: "運用ハイライト",
    features: "主な機能",
    applications: "適用シナリオ",
    specs: "主要仕様",
    visual: "製品ビジュアル",
    gallery: "現場写真・インターフェース",
    selectedProduct: "選択中の製品",
    downloadTitle: "Download Datasheet",
    downloadDescription:
      "Detailed product datasheet in English PDF format with features and specifications.",
    backLabel: "← Sky-Guard シリーズに戻る",
  },
};

export default function DetectionProductPage({
  locale,
  slug,
}: {
  locale: DetectionLocale;
  slug: DetectionProductSlug;
}) {
  const product = getDetectionProduct(slug);

  if (!product) {
    return null;
  }

  const content = product.content[locale];
  const copy = detectionLandingCopy[locale];
  const pageLabels = labels[locale];
  const darkVisual = product.visualBackground === "dark";
  const coverVisual = product.visualFit === "cover";

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={copy.backHref}
            className="text-[#f0b429] hover:underline text-sm mb-6 inline-block"
          >
            {pageLabels.backLabel}
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">
            {content.tagline}
          </p>

          <div className="group relative aspect-video rounded-xl overflow-hidden mb-12 border border-[#f0b429]/25 bg-[#050505]">
            {!coverVisual && (
              <div className="absolute inset-0 opacity-70">
                <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-[#f0b429]/30" />
                <div className="absolute -top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full border border-[#f0b429]/25" />
                <div className="absolute -top-4 left-1/2 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full border border-[#f0b429]/20" />
              </div>
            )}
            <div className="absolute left-5 top-5 z-10 rounded-full border border-[#f0b429]/40 bg-black/70 px-4 py-1.5 text-sm font-semibold text-[#f0b429]">
              {pageLabels.selectedProduct}
            </div>
            {darkVisual || coverVisual ? (
              <Image
                src={product.productImage}
                alt={content.title}
                fill
                className={`${
                  coverVisual
                    ? "object-cover"
                    : "object-contain px-3 pt-12 pb-24"
                } transition-transform duration-500 group-hover:scale-[1.03]`}
                style={{ objectPosition: product.imagePosition }}
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            ) : (
              <div className="absolute inset-x-8 top-16 bottom-24 rounded-2xl bg-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
                <Image
                  src={product.productImage}
                  alt={content.title}
                  fill
                  className="object-contain p-2"
                  style={{ objectPosition: product.imagePosition }}
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-black/90 px-8 py-6">
              <p className="text-2xl font-semibold text-white">{content.title}</p>
              <p className="mt-1 text-[#f0b429]">{content.tagline}</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              {pageLabels.overview}
            </h2>
            <p className="text-zinc-400 leading-relaxed">{content.summary}</p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              {pageLabels.highlights}
            </h2>
            <ul className="text-zinc-400 space-y-2">
              {content.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              {pageLabels.features}
            </h2>
            <ul className="text-zinc-400 space-y-2">
              {content.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              {pageLabels.applications}
            </h2>
            <ul className="text-zinc-400 space-y-2">
              {content.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              {pageLabels.specs}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="text-zinc-300">
                  {content.specs.map((spec, index) => (
                    <tr
                      key={spec.label}
                      className={
                        index === content.specs.length - 1
                          ? ""
                          : "border-b border-white/10"
                      }
                    >
                      <td className="py-3 pr-4 text-zinc-400 w-1/2">
                        {spec.label}
                      </td>
                      <td className="py-3">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              {pageLabels.visual}
            </h2>
            <div
              className={`relative aspect-video rounded-xl overflow-hidden ${
                darkVisual ? "bg-[#0a0a0a] border border-white/10" : "bg-white"
              }`}
            >
              <Image
                src={product.productImage}
                alt={content.title}
                fill
                className="object-contain p-6"
                style={{ objectPosition: product.imagePosition }}
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>

            {product.galleryImages && product.galleryImages.length > 0 ? (
              <>
                <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
                  {pageLabels.gallery}
                </h2>
                <div className="not-prose grid md:grid-cols-2 gap-4">
                  {product.galleryImages.map((image) => (
                    <div
                      key={image.src}
                      className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain p-3 transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 448px"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : null}

            <div className="mt-12 rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {pageLabels.downloadTitle}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {pageLabels.downloadDescription}
                </p>
              </div>
              <a
                href={content.pdfHref}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors whitespace-nowrap"
                download
              >
                {content.pdfText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
