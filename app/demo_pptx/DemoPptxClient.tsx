"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  bullets: string[];
  image?: string;
  mediaType?: "image" | "video";
  animatedMedia?: boolean;
  kicker?: string;
  mediaAnimation?: "kenburns" | "vertical-pan";
  mediaFit?: "cover" | "contain";
  mediaPanelClassName?: string;
  showMediaBadge?: boolean;
};

const slides: Slide[] = [
  {
    id: "cover",
    title: "Low-Altitude Economy Management",
    subtitle: "& Integrated Anti-Drone System",
    bullets: [
      "MetaBee modular product line for airspace operations, security, and city-scale low-altitude infrastructure.",
      "Web presentation mode for customer demo and executive review.",
    ],
    image: "/assets/images/hero/hero-city-drone-network.jpg",
    mediaType: "image",
    animatedMedia: true,
    mediaAnimation: "kenburns",
    mediaFit: "cover",
    kicker: "MetaBee Product Line",
    showMediaBadge: true,
  },
  {
    id: "solution",
    title: "Secure the Skies",
    subtitle: "Low-Altitude Defense",
    bullets: [
      "Protecting oilfield infrastructure now requires a true 3D security perimeter.",
      "A single sensor is not enough; the key lies in the synergy between Radar, Spectrum, and Optoelectronics.",
      "How the integrated system works: Detect (Spectrum) - Deep Listen monitors RF signals 24/7, identifying drones the moment they power on.",
    ],
    image: "/assets/images/demo/integrated-anti-drone-system.png",
    mediaType: "image",
    animatedMedia: false,
    kicker: "Architecture Overview",
    mediaFit: "contain",
    mediaPanelClassName: "bg-white p-3",
    showMediaBadge: false,
  },
  {
    id: "skyguard",
    title: "Sky-Guard Series",
    subtitle: "Integrated Anti-Drone Core",
    bullets: [
      "R3000: Ku-band pulse-Doppler radar, 360 degree scan, up to 3 km detection for typical small UAV targets.",
      "R5000: extended-range model with higher transmit power and up to 5 km detection capability.",
      "Sky-Guard Console: AI-assisted situational awareness and flight decision support for operational users.",
      "Designed for integration with EO/IR payloads and counter-UAS subsystems through Ethernet-based system architecture.",
    ],
    image: "/assets/images/products/product-skyguard-radar.png",
    mediaType: "image",
    animatedMedia: true,
    kicker: "Integrated Anti-Drone Core",
    mediaAnimation: "vertical-pan",
    mediaFit: "cover",
    showMediaBadge: true,
  },
  {
    id: "solution-field",
    title: "Operational Radar Deployment",
    subtitle: "Field Demonstration",
    bullets: [
      "Field footage showing a compact radar unit deployed on a tripod in an open-area test environment.",
      "Demonstrates rapid setup, mobile deployment flexibility, and suitability for perimeter security and temporary mission sites.",
      "Illustrates how MetaBee solutions translate from system architecture into practical, on-site low-altitude surveillance capability.",
    ],
    image: "/assets/images/demo/field-demo.mp4",
    mediaType: "video",
    animatedMedia: false,
    kicker: "Field Demonstration",
    mediaFit: "cover",
    showMediaBadge: true,
  },
  {
    id: "navkit",
    title: "NavKit-S",
    subtitle: "Onboard Autonomous Navigation Kit",
    bullets: [
      "Designed for GPS-denied or degraded GNSS environments.",
      "Combines vision, environmental sensing, and GNSS/INS fusion.",
      "Supports continuity, resilience, and safer execution for authorized low-altitude operations.",
    ],
    image: "/assets/images/products/product-navkit-fpga-pcb.png",
    mediaType: "image",
    animatedMedia: true,
    kicker: "Navigation Intelligence",
    mediaAnimation: "kenburns",
    mediaFit: "cover",
    showMediaBadge: true,
  },
  {
    id: "hivelink",
    title: "Hive-Link / LAWN",
    subtitle: "ISAC Nodes & Network Platform",
    bullets: [
      "Intelligent sensing and communication nodes for low-altitude network coverage.",
      "Supports scale-up from isolated sites to city-level LAE network operations.",
      "Complements NavKit-S and Sky-Guard as a modular product ecosystem.",
    ],
    image: "/assets/images/products/product-isac-node.png",
    mediaType: "image",
    animatedMedia: true,
    kicker: "Low-Altitude Network",
    mediaAnimation: "kenburns",
    mediaFit: "cover",
    showMediaBadge: true,
  },
  {
    id: "architecture",
    title: "Integrated Deployment Architecture",
    bullets: [
      "Edge layer: radar plus RF sensing plus EO/IR tracking on site.",
      "Network layer: LAN/WAN secure transport and control links.",
      "Center layer: fusion, logging, policy, and operator console.",
      "Expansion layer: aircraft-side NavKit-S plus ground-side Hive-Link for managed LAE scale-out.",
    ],
    image: "/assets/images/products/product-skyguard-console-map.png",
    mediaType: "image",
    animatedMedia: true,
    kicker: "Deployment Blueprint",
    mediaAnimation: "kenburns",
    mediaFit: "cover",
    showMediaBadge: true,
  },
  {
    id: "cover-zh",
    title: "低空经济管理",
    subtitle: "& 一体化反无人机系统",
    bullets: [
      "MetaBee 模块化产品线，覆盖空域运营、安防及城市级低空基础设施。",
      "网页演示模式，适用于客户展示与高层汇报。",
    ],
    image: "/assets/images/hero/hero-city-drone-network.jpg",
    mediaType: "image",
    animatedMedia: true,
    mediaAnimation: "kenburns",
    mediaFit: "cover",
    kicker: "MetaBee 产品线",
    showMediaBadge: true,
  },
  {
    id: "solution-zh",
    title: "守护天空",
    subtitle: "低空防御体系",
    bullets: [
      "保护油田等关键基础设施，如今需要构建真正的三维安全防线。",
      "单一传感器远远不够，关键在于雷达、频谱与光电三者的协同联动。",
      "一体化系统工作流程：探测（频谱）— Deep Listen 全天候监控射频信号，在无人机开机瞬间即时识别。",
    ],
    image: "/assets/images/demo/integrated-anti-drone-system.png",
    mediaType: "image",
    animatedMedia: false,
    kicker: "架构总览",
    mediaFit: "contain",
    mediaPanelClassName: "bg-white p-3",
    showMediaBadge: false,
  },
  {
    id: "skyguard-zh",
    title: "Sky-Guard 系列",
    subtitle: "一体化反无人机核心",
    bullets: [
      "R3000：Ku 波段脉冲多普勒雷达，360° 扫描，典型小型无人机目标探测距离可达 3 公里。",
      "R5000：增程型号，发射功率更高，探测能力可达 5 公里。",
      "Sky-Guard 控制台：AI 辅助态势感知与飞行决策支持，面向一线操作人员。",
      "通过以太网系统架构设计，支持与 EO/IR 载荷及反无人机子系统的集成。",
    ],
    image: "/assets/images/products/product-skyguard-radar.png",
    mediaType: "image",
    animatedMedia: true,
    kicker: "一体化反无人机核心",
    mediaAnimation: "vertical-pan",
    mediaFit: "cover",
    showMediaBadge: true,
  },
  {
    id: "solution-field-zh",
    title: "雷达实战部署",
    subtitle: "现场演示",
    bullets: [
      "现场实拍：小型雷达以三脚架方式部署于开阔测试环境中。",
      "展示快速架设、机动灵活部署能力，适用于周界安防与临时任务站点。",
      "直观呈现 MetaBee 方案如何从系统架构落地为实际的低空监控能力。",
    ],
    image: "/assets/images/demo/field-demo.mp4",
    mediaType: "video",
    animatedMedia: false,
    kicker: "现场演示",
    mediaFit: "cover",
    showMediaBadge: true,
  },
  {
    id: "navkit-zh",
    title: "NavKit-S",
    subtitle: "机载自主导航套件",
    bullets: [
      "专为 GPS 拒止或 GNSS 降级环境设计。",
      "融合视觉、环境感知与 GNSS/INS 组合导航。",
      "为授权低空飞行任务提供连续性、韧性与更安全的执行保障。",
    ],
    image: "/assets/images/products/product-navkit-fpga-pcb.png",
    mediaType: "image",
    animatedMedia: true,
    kicker: "导航智能",
    mediaAnimation: "kenburns",
    mediaFit: "cover",
    showMediaBadge: true,
  },
  {
    id: "hivelink-zh",
    title: "Hive-Link / LAWN",
    subtitle: "ISAC 节点与网络平台",
    bullets: [
      "面向低空网络覆盖的智能感知通信节点。",
      "支持从单一站点扩展至城市级低空经济网络运营。",
      "与 NavKit-S 和 Sky-Guard 形成模块化产品生态。",
    ],
    image: "/assets/images/products/product-isac-node.png",
    mediaType: "image",
    animatedMedia: true,
    kicker: "低空网络",
    mediaAnimation: "kenburns",
    mediaFit: "cover",
    showMediaBadge: true,
  },
  {
    id: "architecture-zh",
    title: "一体化部署架构",
    bullets: [
      "边缘层：雷达 + 射频感知 + 光电跟踪，部署于现场。",
      "网络层：LAN/WAN 安全传输与控制链路。",
      "中心层：融合处理、日志记录、策略管理与操作员控制台。",
      "扩展层：机载 NavKit-S + 地面 Hive-Link，实现托管式低空经济规模化部署。",
    ],
    image: "/assets/images/products/product-skyguard-console-map.png",
    mediaType: "image",
    animatedMedia: true,
    kicker: "部署蓝图",
    mediaAnimation: "kenburns",
    mediaFit: "cover",
    showMediaBadge: true,
  },
];

export default function DemoPptxClient() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const wheelLockUntilRef = useRef(0);
  const wheelDeltaRef = useRef(0);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeSlideRef = useRef("cover");
  const [activeSlide, setActiveSlide] = useState<string>("cover");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoplaying, setIsAutoplaying] = useState(false);
  const [isAuthed] = useState(
    () => sessionStorage.getItem("metabee_demo_auth") === "ok",
  );

  const slideIds = useMemo(() => slides.map((s) => s.id), []);
  const activeIndex = Math.max(0, slideIds.indexOf(activeSlide));

  useEffect(() => {
    activeSlideRef.current = activeSlide;
  }, [activeSlide]);

  function scrollToSlide(index: number) {
    const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
    const target = sectionRefs.current[slides[safeIndex].id];
    const container = scrollRef.current;
    if (!target || !container) return;
    const targetTop =
      target.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop;
    container.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }

  function stopAutoplay() {
    if (autoplayIntervalRef.current) {
      clearTimeout(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
    setIsAutoplaying(false);
  }

  function startAutoplay() {
    stopAutoplay();
    scrollToSlide(0);
    setIsAutoplaying(true);
  }

  useEffect(() => {
    if (!isAuthed) {
      window.location.replace("/demo_pptx/login?next=/demo_pptx");
      return;
    }
  }, [isAuthed]);

  useEffect(() => {
    if (!isAutoplaying) {
      if (autoplayIntervalRef.current) {
        clearTimeout(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
      return;
    }

    const longerIds = new Set(["skyguard", "solution-field", "skyguard-zh", "solution-field-zh"]);

    function scheduleNext() {
      const currentId = activeSlideRef.current;
      const delay = longerIds.has(currentId) ? 15000 : 10000;

      autoplayIntervalRef.current = setTimeout(() => {
        const currentIndex = slideIds.indexOf(activeSlideRef.current);
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % slides.length : 0;
        const nextId = slideIds[nextIndex];
        setActiveSlide(nextId);
        scrollToSlide(nextIndex);
        scheduleNext();
      }, delay);
    }

    scheduleNext();

    return () => {
      if (autoplayIntervalRef.current) {
        clearTimeout(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
    };
  }, [isAutoplaying, slideIds]);

  useEffect(() => {
    if (!isAuthed) return;
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const topVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (topVisible?.target?.id) {
          setActiveSlide(topVisible.target.id);
        }
      },
      { root: container, threshold: [0.35, 0.6, 0.85] },
    );

    slideIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isAuthed, slideIds]);

  useEffect(() => {
    if (!isAuthed) return;

    function onKeyDown(event: KeyboardEvent) {
      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        scrollToSlide(activeIndex + 1);
      }
      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        scrollToSlide(activeIndex - 1);
      }
      if (event.key === "Home") {
        event.preventDefault();
        scrollToSlide(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        scrollToSlide(slides.length - 1);
      }
    }

    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, [activeIndex, isAuthed]);

  useEffect(() => {
    if (!isAuthed) return;
    const container = scrollRef.current;
    if (!container) return;

    function onWheel(event: WheelEvent) {
      // Turn free scrolling into one-slide-per-gesture navigation.
      event.preventDefault();

      const now = Date.now();
      if (now < wheelLockUntilRef.current) {
        return;
      }

      wheelDeltaRef.current += event.deltaY;

      // Ignore small touchpad noise until it becomes a deliberate gesture.
      if (Math.abs(wheelDeltaRef.current) < 45) {
        return;
      }

      const direction = wheelDeltaRef.current > 0 ? 1 : -1;
      wheelDeltaRef.current = 0;
      wheelLockUntilRef.current = now + 850;
      scrollToSlide(activeIndex + direction);
    }

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, [activeIndex, isAuthed]);

  function logout() {
    sessionStorage.removeItem("metabee_demo_auth");
    window.location.replace("/demo_pptx/login");
  }

  async function toggleFullscreen() {
    const root = scrollRef.current?.parentElement;
    if (!root) return;
    if (!document.fullscreenElement) {
      await root.requestFullscreen();
      return;
    }
    await document.exitFullscreen();
  }

  if (!isAuthed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-zinc-300">
        Loading demo...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <style jsx global>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate3d(0px, 0px, 0px);
          }
          50% {
            transform: scale(1.06) translate3d(-8px, -4px, 0px);
          }
          100% {
            transform: scale(1.1) translate3d(8px, 6px, 0px);
          }
        }

        @keyframes verticalPan {
          0% {
            object-position: center top;
          }
          100% {
            object-position: center bottom;
          }
        }

        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 10px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .demo-scroll::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(240,180,41,0.16),transparent_22%),radial-gradient(circle_at_85%_28%,rgba(38,38,38,0.7),transparent_28%),linear-gradient(180deg,#050505_0%,#000_100%)]" />

      <div className="fixed left-5 top-5 z-30 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-sm text-zinc-200 backdrop-blur-xl">
        MetaBee Demo
      </div>

      <div className="fixed right-5 top-5 z-30 flex gap-2">
        <button
          type="button"
          onClick={startAutoplay}
          disabled={isAutoplaying}
          className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs text-zinc-200 backdrop-blur-xl transition hover:border-[#f0b429] disabled:opacity-40"
        >
          Start
        </button>
        <button
          type="button"
          onClick={stopAutoplay}
          disabled={!isAutoplaying}
          className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs text-zinc-200 backdrop-blur-xl transition hover:border-[#f0b429] disabled:opacity-40"
        >
          Stop
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs text-zinc-200 backdrop-blur-xl transition hover:border-[#f0b429]"
        >
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
        <button
          type="button"
          onClick={logout}
          className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs text-zinc-200 backdrop-blur-xl transition hover:border-[#f0b429]"
        >
          Logout
        </button>
      </div>

      <div className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 lg:flex flex-col gap-2">
        {slides.map((slide, idx) => {
          const isActive = slide.id === activeSlide;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => scrollToSlide(idx)}
              className={`group flex items-center justify-end gap-3 ${
                isActive ? "opacity-100" : "opacity-65 hover:opacity-100"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span
                className={`text-[11px] uppercase tracking-[0.18em] text-zinc-400 transition ${
                  isActive ? "text-[#f0b429]" : ""
                }`}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span
                className={`block rounded-full transition-all ${
                  isActive
                    ? "h-8 w-2 bg-[#f0b429]"
                    : "h-2.5 w-2.5 bg-white/35 group-hover:bg-white/65"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        ref={scrollRef}
        className="demo-scroll h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth overscroll-contain"
      >
        {slides.map((slide, idx) => (
          <section
            key={slide.id}
            id={slide.id}
            ref={(element) => {
              sectionRefs.current[slide.id] = element;
            }}
            className="flex min-h-screen snap-start items-center px-2"
          >
            <div
              className={`mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 transition-all duration-1000 ease-out lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:px-12 ${
                activeSlide === slide.id ? "translate-y-0 opacity-100" : "translate-y-1 opacity-55"
              }`}
              style={
                activeSlide === slide.id
                  ? { animation: "floatUp 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both" }
                  : undefined
              }
            >
              <div className="lg:pr-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0b429] sm:text-sm">
                  {slide.kicker ?? "MetaBee"} · Slide {idx + 1}/{slides.length}
                </p>
                <div className="mb-6 h-px w-20 bg-gradient-to-r from-[#f0b429] to-transparent" />
                <h1 className="max-w-[10ch] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                {slide.subtitle ? (
                  <p className="mt-4 max-w-xl text-xl leading-snug text-zinc-300 lg:text-2xl">
                    {slide.subtitle}
                  </p>
                ) : null}

                <ul className="mt-10 max-w-xl space-y-4 text-zinc-200">
                  {slide.bullets.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-base leading-relaxed text-zinc-300 md:text-lg"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0b429]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  <button
                    type="button"
                    onClick={() => scrollToSlide(activeIndex - 1)}
                    className="rounded-full border border-white/10 px-4 py-2 transition hover:border-[#f0b429] disabled:opacity-30"
                    disabled={idx === 0}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSlide(activeIndex + 1)}
                    className="rounded-full border border-white/10 px-4 py-2 transition hover:border-[#f0b429] disabled:opacity-30"
                    disabled={idx === slides.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="relative lg:px-6">
                {slide.mediaType === "video" && slide.image ? (
                  <div
                    className={`group relative aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.6)] transition-transform duration-500 lg:scale-[1.2] ${
                      slide.mediaPanelClassName ?? "bg-[#0c0c0c]"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-black/30 via-transparent to-white/8" />
                    <video
                      src={slide.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={`h-full w-full transition duration-700 group-hover:scale-[1.02] ${
                        slide.mediaFit === "contain" ? "object-contain" : "object-cover"
                      }`}
                    />
                    {slide.showMediaBadge !== false ? (
                      <div className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                        {slide.kicker ?? "Live footage"}
                      </div>
                    ) : null}
                  </div>
                ) : slide.image ? (
                  <div
                    className={`group relative aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.6)] transition-transform duration-500 lg:scale-[1.2] ${
                      slide.mediaPanelClassName ?? "bg-[#0c0c0c]"
                    }`}
                  >
                    {slide.showMediaBadge !== false ? (
                      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-black/28 via-transparent to-white/10" />
                    ) : null}
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={1280}
                      height={720}
                      className={`h-full w-full ${
                        slide.animatedMedia ? "will-change-transform" : ""
                      } ${slide.mediaFit === "contain" ? "object-contain" : "object-cover"}`}
                      style={
                        slide.animatedMedia
                          ? {
                              animation:
                                slide.mediaAnimation === "vertical-pan"
                                  ? "verticalPan 7s ease-in-out infinite alternate"
                                  : "kenburns 16s ease-in-out infinite alternate",
                            }
                          : undefined
                      }
                    />
                    {slide.showMediaBadge !== false ? (
                      <div className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                        {slide.kicker ?? "MetaBee"}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="flex aspect-video items-center justify-center rounded-[28px] border border-dashed border-white/15 bg-white/[0.03] text-zinc-500">
                    Product and solution structure
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="fixed bottom-5 left-1/2 z-30 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] tracking-[0.22em] text-zinc-400 backdrop-blur-xl md:block">
        Use mouse wheel, trackpad, or keyboard arrows
      </div>
    </div>
  );
}
