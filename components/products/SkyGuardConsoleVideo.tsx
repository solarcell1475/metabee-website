"use client";

import Image from "next/image";
import { useState } from "react";

type Locale = "en" | "sc" | "jp";

const copy = {
  en: {
    eyebrow: "Console + EO System Demo",
    title: "Live console view with EO target confirmation",
    description:
      "This demo video shows the Sky-Guard console fusing map-based situational awareness, spectrum monitoring, target cueing, and EO visual confirmation in one operator workflow.",
    previewLabel: "Video preview",
    playButton: "Watch full console demo",
    closeButton: "Close video",
    duration: "Full demo video · 8:06",
  },
  sc: {
    eyebrow: "控制台 + 光电系统演示",
    title: "控制台实时态势与光电目标确认",
    description:
      "这段演示视频展示 Sky-Guard 控制台如何融合地图态势、频谱监测、目标指引和光电视觉确认，形成完整的操作员工作流。",
    previewLabel: "视频预览",
    playButton: "观看完整控制台演示",
    closeButton: "关闭视频",
    duration: "完整演示视频 · 8:06",
  },
  jp: {
    eyebrow: "コンソール + EOシステムデモ",
    title: "コンソール画面とEO目標確認の連携",
    description:
      "このデモ動画では、Sky-Guardコンソールが地図ベースの状況認識、スペクトラム監視、目標キューイング、EO視覚確認を一つの運用ワークフローに統合する様子を示します。",
    previewLabel: "動画プレビュー",
    playButton: "フルコンソールデモを見る",
    closeButton: "動画を閉じる",
    duration: "フルデモ動画 · 8:06",
  },
} as const;

export default function SkyGuardConsoleVideo({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mb-12 overflow-hidden rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5">
        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative aspect-video bg-black/50 text-left focus:outline-none focus:ring-2 focus:ring-[#f0b429]"
            aria-label={text.playButton}
          >
            <Image
              src="/assets/images/products/detection/skyguard-console-eo-demo-poster.jpg"
              alt={text.previewLabel}
              fill
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
            <span className="absolute left-5 top-5 rounded-full border border-[#f0b429]/50 bg-black/75 px-3 py-1 text-sm font-semibold text-[#f0b429]">
              {text.previewLabel}
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f0b429] text-2xl font-bold text-black shadow-lg transition-transform group-hover:scale-110">
                ▶
              </span>
            </span>
          </button>

          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <p className="mb-2 text-sm font-semibold text-[#f0b429]">
              {text.eyebrow}
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              {text.title}
            </h2>
            <p className="text-zinc-400 leading-relaxed">{text.description}</p>
            <p className="mt-4 text-sm text-zinc-500">{text.duration}</p>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-6 inline-flex w-fit items-center justify-center rounded-lg bg-[#f0b429] px-5 py-3 font-semibold text-black transition-colors hover:bg-[#e6a800]"
            >
              {text.playButton}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-[#050505] shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-[#f0b429]">
                  {text.eyebrow}
                </p>
                <p className="text-white">{text.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-[#f0b429] hover:text-[#f0b429]"
              >
                {text.closeButton}
              </button>
            </div>
            <div className="bg-black p-3">
              <video
                className="aspect-video w-full rounded-lg bg-black"
                controls
                autoPlay
                preload="metadata"
                poster="/assets/images/products/detection/skyguard-console-eo-demo-poster.jpg"
              >
                <source
                  src="/assets/videos/skyguard-console-eo-demo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
