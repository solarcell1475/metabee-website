export type DetectionLocale = "en" | "sc" | "jp";

export type DetectionProductSlug =
  | "remote-id-node"
  | "radar-detection"
  | "fixed-drone-detection"
  | "handheld-drone-locator"
  | "eo-tracking";

export type DetectionProductContent = {
  title: string;
  tagline: string;
  summary: string;
  highlights: string[];
  features: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  pdfHref: string;
  pdfText: string;
};

export type DetectionProduct = {
  slug: DetectionProductSlug;
  coverImage: string;
  productImage: string;
  galleryImages?: { src: string; alt: string }[];
  imagePosition: string;
  visualBackground?: "light" | "dark";
  visualFit?: "contain" | "cover";
  content: Record<DetectionLocale, DetectionProductContent>;
};

export const detectionCoverImage =
  "/assets/images/products/detection/sky-guard-detection-cover.png";

export const detectionProducts: DetectionProduct[] = [
  {
    slug: "remote-id-node",
    coverImage: detectionCoverImage,
    productImage: "/assets/images/products/detection/bg360r-node-render.jpg",
    galleryImages: [
      {
        src: "/assets/images/products/detection/bg360r-rooftop-deployment.jpg",
        alt: "BG-360R Remote ID node rooftop deployment",
      },
      {
        src: "/assets/images/products/detection/bg360r-field-deployment.jpg",
        alt: "BG-360R Remote ID node field deployment",
      },
    ],
    imagePosition: "center",
    visualBackground: "dark",
    content: {
      en: {
        title: "Sky-Guard BG-360R Remote ID Monitoring Node",
        tagline: "Receive-only Remote ID reception for cooperative airspace awareness",
        summary:
          "A fixed-mounted, receive-only Remote ID monitoring node. Each node listens to Remote ID broadcasts from compliant drones — serial number, type, position, speed, altitude, and pilot location — building a live cooperative traffic picture for sites, corridors, and city-scale networks. Aircraft without Remote ID stand out for spectrum-sensor confirmation.",
        highlights: [
          "Receive-only operation with zero RF emissions — licence-friendly for dense urban and corridor deployments.",
          "Decodes Remote ID broadcasts: serial number, type, position, speed, altitude, and pilot location.",
          "≤ 25 W power draw — solar-viable for standalone node deployments.",
        ],
        features: [
          "Dual-band Remote ID receiver in a sealed sensor dome",
          "50+ concurrent aircraft with 1–3 s position updates",
          "Networked operation with the LAWN platform and third-party UTM feeds",
          "360° horizontal, 90° vertical coverage per node",
          "Cooperative traffic layer that flags non-broadcasting aircraft for spectrum-sensor confirmation",
        ],
        applications: [
          "Low-altitude compliance monitoring for cities and corridors",
          "Cooperative traffic layer for UTM and flight-service platforms",
          "Airspace awareness for airports, events, and critical infrastructure",
        ],
        specs: [
          { label: "Model", value: "BG-360R" },
          { label: "Detection Mode", value: "Remote ID broadcast reception (receive-only)" },
          { label: "Coverage", value: "0–1 km urban / 1–3 km open, per node" },
          { label: "Concurrent Targets", value: "50+ aircraft" },
          { label: "Refresh Rate", value: "1–3 s position updates" },
          { label: "Field of View", value: "360° horizontal; 90° vertical" },
          { label: "Power Draw", value: "≤ 25 W — solar-viable" },
          { label: "RF Emissions", value: "None (receive-only)" },
        ],
        pdfHref: "/downloads/Sky-Guard_Remote_ID_Monitoring_Node_Datasheet_EN.pdf",
        pdfText: "Download English PDF",
      },
      sc: {
        title: "Sky-Guard 天卫 BG-360R Remote ID 监测节点",
        tagline: "只收不发的 Remote ID 接收，构建合作目标空情感知",
        summary:
          "固定安装、只收不发的 Remote ID 监测节点。每个节点持续接收合规无人机的 Remote ID 广播——序列号、机型、位置、速度、高度和飞手位置——为站点、走廊和城市级网络构建实时合作目标空情。未广播 Remote ID 的目标即时凸显，转交频谱传感器确认。",
        highlights: [
          "只收不发、零射频辐射，适合城市与走廊密集部署。",
          "解码 Remote ID 广播：序列号、机型、位置、速度、高度与飞手位置。",
          "功耗 ≤ 25 W，支持太阳能独立供电。",
        ],
        features: [
          "密封传感器罩内的双频 Remote ID 接收机",
          "50+ 架并发目标，位置更新 1–3 s",
          "接入 LAWN 平台及第三方 UTM 数据链路组网",
          "单节点水平 360°、垂直 90° 覆盖",
          "合作目标感知层，未广播目标自动转交频谱传感器确认",
        ],
        applications: [
          "城市与走廊低空空域合规监测",
          "UTM 与飞行服务平台的合作目标感知层",
          "机场、大型活动和关键基础设施空域感知",
        ],
        specs: [
          { label: "型号", value: "BG-360R" },
          { label: "工作模式", value: "Remote ID 广播接收（只收不发）" },
          { label: "覆盖范围", value: "单节点城市 0–1 km / 空旷 1–3 km" },
          { label: "同时侦测数量", value: "≥ 50 架" },
          { label: "刷新率", value: "位置更新 1–3 s" },
          { label: "视场", value: "水平 360°；垂直 90°" },
          { label: "功耗", value: "≤ 25 W，支持太阳能" },
          { label: "射频辐射", value: "无（纯接收）" },
        ],
        pdfHref: "/downloads/Sky-Guard_天卫BG-360R_Remote_ID监测节点_产品手册.pdf",
        pdfText: "下载中文 PDF",
      },
      jp: {
        title: "Sky-Guard BG-360R Remote ID 監視ノード",
        tagline: "受信専用のRemote ID受信による協調空域把握",
        summary:
          "固定設置・受信専用のRemote ID監視ノードです。各ノードは準拠ドローンのRemote ID送信——シリアル番号、機種、位置、速度、高度、操縦者位置——を常時受信し、サイト、回廊、都市規模ネットワーク向けのリアルタイム協調空域状況を構築します。Remote IDを送信しない機体は際立ち、スペクトラムセンサーによる確認へ引き継ぎます。",
        highlights: [
          "送信なし・電波放出ゼロの受信専用動作。都市・回廊への高密度展開に適します。",
          "Remote ID送信（シリアル番号、機種、位置、速度、高度、操縦者位置）をデコード。",
          "消費電力 ≤ 25 W、ソーラー運用に対応。",
        ],
        features: [
          "密閉センサーダーム内のデュアルバンドRemote ID受信機",
          "50機以上の同時追跡、位置更新1〜3秒",
          "LAWNプラットフォームおよび第三者UTMフィードとのネットワーク運用",
          "1ノードあたり水平360°・垂直90°のカバレッジ",
          "協調トラフィック層として、未送信機体をスペクトラムセンサー確認へ表示",
        ],
        applications: [
          "都市・回廊の低高度空域コンプライアンス監視",
          "UTM・飛行サービスプラットフォームの協調トラフィック層",
          "空港、大規模イベント、重要インフラの空域把握",
        ],
        specs: [
          { label: "モデル", value: "BG-360R" },
          { label: "検出方式", value: "Remote ID送信の受信（受信専用）" },
          { label: "カバー範囲", value: "都市 0–1 km / 開放地 1–3 km（1ノードあたり）" },
          { label: "同時検出数", value: "≥ 50機" },
          { label: "更新レート", value: "位置更新 1–3 s" },
          { label: "視野", value: "水平 360°、垂直 90°" },
          { label: "消費電力", value: "≤ 25 W、ソーラー運用対応" },
          { label: "電波放出", value: "なし（受信専用）" },
        ],
        pdfHref: "/downloads/Sky-Guard_Remote_ID_Monitoring_Node_Datasheet_EN.pdf",
        pdfText: "Download English PDF",
      },
    },
  },
  {
    slug: "radar-detection",
    coverImage: detectionCoverImage,
    productImage: "/assets/images/products/detection/radar-detection-1.png",
    imagePosition: "center",
    visualBackground: "dark",
    visualFit: "cover",
    galleryImages: [
      {
        src: "/assets/images/products/detection/radar-detection-2.png",
        alt: "Sky-Guard radar operator terminal map view",
      },
      {
        src: "/assets/images/products/detection/radar-detection-3.png",
        alt: "Sky-Guard radar unit and turntable",
      },
      {
        src: "/assets/images/products/detection/hk-waterfront-low-altitude.jpg",
        alt: "Hong Kong waterfront low-altitude monitoring context",
      },
    ],
    content: {
      en: {
        title: "Sky-Guard Radar Detection System",
        tagline: "360° low-altitude UAV detection and precision EO cueing",
        summary:
          "A Ku-band radar subsystem composed of the radar unit, motorised turntable, and operator terminal software. It detects and tracks low-altitude UAV targets, outputs real-time 3D target parameters, and provides precise cueing for electro-optical, jamming, and spoofing subsystems.",
        highlights: [
          "360° mechanical azimuth scan with electronic elevation coverage from 0° to 30°.",
          "Outputs range, azimuth, altitude, speed, longitude, and latitude in real time.",
          "Supports tripod deployment, vehicle-roof mobile monitoring, or fixed rooftop stations.",
        ],
        features: [
          "Fully coherent pulse-Doppler processing",
          "Sum-and-difference monopulse angle measurement",
          "MTD coherent integration and CFAR detection",
          "Track initiation, target association, and terminal reporting",
          "Guidance output for EO identification and counter-UAS effectors",
        ],
        applications: [
          "Perimeter surveillance for critical infrastructure",
          "Mobile low-altitude monitoring stations",
          "Integrated detect-track-identify-response systems",
        ],
        specs: [
          { label: "Frequency Band", value: "Ku, 16 GHz ± 100 MHz" },
          { label: "Azimuth / Elevation", value: "360° mechanical / ≥ 30° electronic" },
          { label: "Max Detection Range", value: "≥ 3 km (DJI Phantom 3/4, Pd = 85%)" },
          { label: "Minimum Detection Range", value: "≤ 250 m" },
          { label: "Minimum Detectable Speed", value: "≤ 1.5 m/s" },
          { label: "3D Accuracy", value: "Range ≤ 10 m; azimuth/elevation ≤ 0.5° RMS" },
          { label: "Refresh Rate", value: "3 s per 360° scan" },
          { label: "Weight / Power", value: "≤ 30 kg; ≤ 150 W including turntable" },
        ],
        pdfHref: "/downloads/Sky-Guard_Radar_Detection_System_Datasheet_EN.pdf",
        pdfText: "Download English PDF",
      },
      sc: {
        title: "Sky-Guard 天卫雷达探测系统",
        tagline: "360°低空无人机探测与光电精确引导",
        summary:
          "由雷达主机、转台和操控终端软件组成，面向低空无人机目标探测与跟踪，可实时输出距离、方位、高度、速度、经纬度等三维目标信息，并为光电识别、干扰或诱骗系统提供精确引导。",
        highlights: [
          "方位 360° 机械周扫，俯仰 0°–30° 相扫覆盖。",
          "实时输出距离、方位角、高度、速度、经纬度等目标参数。",
          "支持三脚架独立部署、车顶移动监测站和楼顶固定站部署。",
        ],
        features: [
          "全相参脉冲多普勒体制",
          "和差单脉冲测角",
          "MTD 相参积累与 CFAR 恒虚警检测",
          "目标建航、跟踪、关联与显控终端上报",
          "可向光电识别和反无人机处置系统输出引导信息",
        ],
        applications: [
          "关键基础设施周界低空监视",
          "车载移动低空监测站",
          "探测、跟踪、识别、处置一体化系统",
        ],
        specs: [
          { label: "工作频段", value: "Ku，16 GHz ± 100 MHz" },
          { label: "方位 / 俯仰", value: "360° 机械扫描 / ≥ 30° 电子扫描" },
          { label: "最大探测距离", value: "≥ 3 km（大疆精灵 3/4，Pd = 85%）" },
          { label: "最小探测距离", value: "≤ 250 m" },
          { label: "最低探测速度", value: "≤ 1.5 m/s" },
          { label: "三坐标精度", value: "距离 ≤ 10 m；方位/俯仰 ≤ 0.5° RMS" },
          { label: "数据刷新率", value: "3 s / 360° 周扫" },
          { label: "重量 / 功耗", value: "≤ 30 kg；≤ 150 W（含转台）" },
        ],
        pdfHref: "/downloads/Sky-Guard_天卫雷达探测系统_产品手册.pdf",
        pdfText: "下载中文 PDF",
      },
      jp: {
        title: "Sky-Guard レーダー検出システム",
        tagline: "360°低高度UAV検出とEO精密キューイング",
        summary:
          "レーダー本体、電動ターンテーブル、操作端末ソフトウェアで構成されるKuバンド検出システムです。低高度UAVを検出・追跡し、距離、方位、高度、速度、経緯度などの3D目標情報をリアルタイムに出力します。",
        highlights: [
          "方位360°機械走査、俯仰0°–30°電子走査に対応。",
          "EO識別、妨害、スプーフィングシステムへの精密キューイングが可能。",
          "三脚、車載、屋上固定局など複数の配備形態に対応。",
        ],
        features: [
          "全コヒーレント・パルスドップラー処理",
          "和差モノパルス角度測定",
          "MTDコヒーレント積分とCFAR検出",
          "航跡生成、追跡、端末への結果報告",
          "EOおよび対UASサブシステム連携",
        ],
        applications: [
          "重要インフラの低高度周界監視",
          "車載型モバイル監視ステーション",
          "検出・追跡・識別・対処の統合システム",
        ],
        specs: [
          { label: "周波数帯", value: "Ku, 16 GHz ± 100 MHz" },
          { label: "方位 / 俯仰", value: "360°機械走査 / ≥ 30°電子走査" },
          { label: "最大検出距離", value: "≥ 3 km（DJI Phantom 3/4, Pd = 85%）" },
          { label: "最小検出距離", value: "≤ 250 m" },
          { label: "最小検出速度", value: "≤ 1.5 m/s" },
          { label: "3D精度", value: "距離 ≤ 10 m、方位/俯仰 ≤ 0.5° RMS" },
          { label: "更新レート", value: "3 s / 360°走査" },
          { label: "重量 / 消費電力", value: "≤ 30 kg、≤ 150 W（ターンテーブル含む）" },
        ],
        pdfHref: "/downloads/Sky-Guard_Radar_Detection_System_Datasheet_EN.pdf",
        pdfText: "Download English PDF",
      },
    },
  },
  {
    slug: "fixed-drone-detection",
    coverImage: detectionCoverImage,
    productImage: "/assets/images/products/detection/aoa-luneburg-rooftop-deployment.png",
    galleryImages: [
      {
        src: "/assets/images/products/detection/aoa-luneburg-tripod-product.jpeg",
        alt: "AoA Luneburg lens antenna tripod product",
      },
      {
        src: "/assets/images/products/detection/aoa-luneburg-studio-product.png",
        alt: "AoA Luneburg lens antenna studio product view",
      },
      {
        src: "/assets/images/products/detection/rf-platform-map-closeup.png",
        alt: "AoA RF platform map closeup",
      },
    ],
    imagePosition: "center",
    content: {
      en: {
        title: "Sky-Guard SG-6000F AoA Drone Signal Detection System",
        tagline: "Passive 360° RF sensing for unattended site protection",
        summary:
          "A fixed-mounted passive drone detection system based on SDR architecture and spectrum identification technology. It performs 360° reconnaissance, identification, direction finding, and tracking for multiple UAV types, supporting long-range detection and integration with external systems.",
        highlights: [
          "Passive RF detection with no active emissions.",
          "Customisable detection bands from 20 MHz to 6 GHz.",
          "24/7 unattended wake-up, alerting, historical query, and trajectory playback.",
        ],
        features: [
          "Spectrum recognition, protocol parsing, and Remote ID detection",
          "O4 online decoding support",
          "Simultaneous alerting for 100+ UAV targets",
          "600+ drone model recognition database",
          "Black/white list management and FPV video signal access",
        ],
        applications: [
          "Permanent low-altitude perimeter monitoring",
          "Critical infrastructure and campus protection",
          "Sensor layer for integrated counter-UAS deployments",
        ],
        specs: [
          { label: "Model", value: "SG-6000F" },
          { label: "Detection Mode", value: "Radio-frequency passive detection" },
          { label: "Coverage Band", value: "20 MHz to 6000 MHz" },
          { label: "Instantaneous Bandwidth", value: "200 MHz" },
          { label: "Detection Direction", value: "360° omnidirectional" },
          { label: "Detection Range", value: "5–8 km open areas; 1–3 km urban areas" },
          { label: "Simultaneous Targets", value: "≥ 100 aircraft" },
          { label: "Protection / Temperature", value: "IP66; -30°C to +65°C" },
          { label: "Size / Weight", value: "Approx. Φ450 × H400 mm; approx. 13 kg" },
        ],
        pdfHref: "/downloads/Sky-Guard_AoA_Drone_Signal_Detection_System_Datasheet_EN.pdf",
        pdfText: "Download English PDF",
      },
      sc: {
        title: "Sky-Guard 天卫 SG-6000F AoA 无人机信号侦测系统",
        tagline: "面向无人值守站点防护的 360° AoA 无源射频侦测",
        summary:
          "基于 SDR 架构、频谱识别技术和 AoA / Luneburg lens 天线能力的无源无人机信号侦测系统，可对各类无人机进行 360° 全向侦察、识别、测向与跟踪，支持远距离探测和多系统集成。",
        highlights: [
          "无源射频侦测，不主动发射信号。",
          "20 MHz 至 6 GHz 多频段覆盖，重点频段可配置。",
          "AoA / Luneburg lens 多波束天线提升 360° 方位感知和测向能力。",
          "支持 24 小时无人值守、自动唤醒、告警、历史查询与轨迹回放。",
        ],
        features: [
          "频谱识别、协议解析侦测和 Remote ID",
          "支持 O4 在线解码上报",
          "同时支持 100 架以上多目标入侵预警",
          "600+ 无人机机型识别库",
          "黑白名单管理及模拟 FPV 图传信号接入",
        ],
        applications: [
          "固定站点低空周界监测",
          "关键基础设施、园区和活动区域防护",
          "反无人机系统中的无源侦测传感层",
        ],
        specs: [
          { label: "型号", value: "SG-6000F" },
          { label: "工作模式", value: "无线电无源侦测" },
          { label: "侦测覆盖频段", value: "20 MHz 至 6000 MHz" },
          { label: "最大瞬时带宽", value: "200 MHz" },
          { label: "侦测方向", value: "360° 全向" },
          { label: "侦测距离", value: "空旷环境 5–8 km；城市环境 1–3 km" },
          { label: "同时侦测数量", value: "≥ 100 架" },
          { label: "防护 / 温度", value: "IP66；-30°C 至 +65°C" },
          { label: "尺寸 / 重量", value: "约 Φ450 × H400 mm；约 13 kg" },
        ],
        pdfHref: "/downloads/Sky-Guard_天卫AoA无人机信号侦测系统_产品手册.pdf",
        pdfText: "下载中文 PDF",
      },
      jp: {
        title: "Sky-Guard SG-6000F AoA ドローン信号検出システム",
        tagline: "無人運用サイト向け360°パッシブRF検出",
        summary:
          "SDRアーキテクチャとスペクトラム識別技術に基づく固定式パッシブ検出システムです。各種UAVの360°偵察、識別、方向探知、追跡を行い、長距離検出と外部システム連携に対応します。",
        highlights: [
          "能動送信を行わないパッシブRF検出。",
          "20 MHzから6 GHzまでの検出帯域をカスタマイズ可能。",
          "24時間無人運用、アラート、履歴照会、軌跡再生に対応。",
        ],
        features: [
          "スペクトラム認識、プロトコル解析、Remote ID検出",
          "O4オンラインデコード対応",
          "100機以上の同時侵入アラート",
          "600機種以上の認識データベース",
          "ブラック/ホワイトリスト管理とFPV信号入力",
        ],
        applications: [
          "常設型の低高度周界監視",
          "重要インフラ、キャンパス、イベント会場の保護",
          "統合対UASシステムのパッシブセンサー層",
        ],
        specs: [
          { label: "モデル", value: "SG-6000F" },
          { label: "検出方式", value: "無線周波数パッシブ検出" },
          { label: "対応周波数", value: "20 MHz〜6000 MHz" },
          { label: "瞬時帯域幅", value: "200 MHz" },
          { label: "検出方向", value: "360°全方位" },
          { label: "検出距離", value: "開放環境 5–8 km、都市環境 1–3 km" },
          { label: "同時検出数", value: "≥ 100機" },
          { label: "保護等級 / 温度", value: "IP66、-30°C〜+65°C" },
          { label: "寸法 / 重量", value: "約 Φ450 × H400 mm、約13 kg" },
        ],
        pdfHref: "/downloads/Sky-Guard_AoA_Drone_Signal_Detection_System_Datasheet_EN.pdf",
        pdfText: "Download English PDF",
      },
    },
  },
  {
    slug: "handheld-drone-locator",
    coverImage: detectionCoverImage,
    productImage: "/assets/images/products/detection/handheld-locator-1.png",
    galleryImages: [
      {
        src: "/assets/images/products/detection/rf-platform-map-interface.png",
        alt: "Pilot locating and track interface",
      },
      {
        src: "/assets/images/products/detection/hk-waterfront-low-altitude.jpg",
        alt: "Field security operation context",
      },
    ],
    imagePosition: "center",
    content: {
      en: {
        title: "Sky-Guard SG-6000P Handheld Drone Locator",
        tagline: "Portable drone and pilot locating for field security teams",
        summary:
          "A new-generation handheld drone detection and locating device for low-altitude security operations. It integrates spectrum detection, protocol analysis, Remote ID recognition, FPV detection, and real-time warning in a lightweight field-ready form factor.",
        highlights: [
          "Portable single-operator device weighing approximately 658 g with antenna.",
          "Detects 900+ drone types including DJI O4, Autel, Feimi, Wi-Fi drones, and FPV racing drones.",
          "Supports drone positioning, pilot positioning, trajectory playback, and route navigation.",
        ],
        features: [
          "Low-frequency FPV detection and first-person-view image demodulation",
          "Drone and remote-controller positioning for supported OcuSync models",
          "Remote ID support including GB 42590-2023 and ASTM F3411",
          "Black/white list management, history records, and sound/vibration alarm",
          "Online/offline operation and platform networking",
        ],
        applications: [
          "Mobile patrol and temporary event security",
          "FPV and homemade racing drone monitoring",
          "Field investigation and pilot-location workflows",
        ],
        specs: [
          { label: "Model", value: "SG-6000P" },
          { label: "Frequency Range", value: "100 MHz to 6 GHz" },
          { label: "Detection Radius", value: "1.5–2 km urban; 2–3 km open areas" },
          { label: "Response Time", value: "3–5 s" },
          { label: "Simultaneous Detection", value: "≥ 10 targets" },
          { label: "Dimensions / Weight", value: "185 × 80 × 33 mm; 658 ± 10 g with antenna" },
          { label: "Battery / Runtime", value: "8000 mAh; 3–4 h typical runtime" },
          { label: "Display", value: "6-inch touch screen, 1080 × 2160" },
          { label: "System", value: "Android 12; 8 GB memory; 256 GB storage" },
        ],
        pdfHref: "/downloads/Sky-Guard_Handheld_Drone_Locator_Datasheet_EN.pdf",
        pdfText: "Download English PDF",
      },
      sc: {
        title: "Sky-Guard 天卫 SG-6000P 手持式无人机侦测定位设备",
        tagline: "面向现场安保团队的便携式无人机与飞手定位",
        summary:
          "全新一代手持式无人机侦测定位设备，面向低空安防现场应用，集频谱探测、协议解析、Remote ID 识别、FPV 探测和实时告警于一体，轻量便携、即开即用。",
        highlights: [
          "单兵便携，含天线重量约 658 g。",
          "支持 900+ 型无人机侦测，包括大疆 O4、道通、飞米、Wi-Fi 机和自制穿越机。",
          "支持无人机定位、飞手定位、轨迹回放和位置导航。",
        ],
        features: [
          "低频 FPV 探测与第一视角图像解调",
          "支持 OcuSync 机型无人机与遥控器定位",
          "支持 GB 42590-2023、ASTM F3411 等 Remote ID 标准",
          "黑白名单、历史记录、声音/振动告警",
          "支持在线/离线使用及平台组网联动",
        ],
        applications: [
          "移动巡逻和临时活动安保",
          "FPV、自制穿越机专项监管",
          "现场排查和飞手定位工作流",
        ],
        specs: [
          { label: "型号", value: "SG-6000P" },
          { label: "探测频段", value: "100 MHz 至 6 GHz" },
          { label: "侦测半径", value: "城市环境 1.5–2 km；空旷环境 2–3 km" },
          { label: "响应时间", value: "3–5 s" },
          { label: "同时侦测数量", value: "≥ 10 架次" },
          { label: "尺寸 / 重量", value: "185 × 80 × 33 mm；658 ± 10 g（含天线）" },
          { label: "电池 / 续航", value: "8000 mAh；典型续航 3–4 小时" },
          { label: "显示屏", value: "6 英寸触控屏，1080 × 2160" },
          { label: "系统", value: "Android 12；8 GB 内存；256 GB 存储" },
        ],
        pdfHref: "/downloads/Sky-Guard_天卫手持式无人机侦测定位设备_产品手册.pdf",
        pdfText: "下载中文 PDF",
      },
      jp: {
        title: "Sky-Guard SG-6000P ハンドヘルド・ドローンロケーター",
        tagline: "現場警備チーム向けの携帯型ドローン・操縦者位置特定",
        summary:
          "低高度セキュリティ運用向けの新世代ハンドヘルド検出・位置特定デバイスです。スペクトラム検出、プロトコル解析、Remote ID、FPV検出、リアルタイム警報を軽量な携帯端末に統合します。",
        highlights: [
          "アンテナ込み約658 gの携帯型単独運用デバイス。",
          "DJI O4、Autel、Feimi、Wi-Fi機、FPVレーシングドローンなど900機種以上に対応。",
          "ドローン位置、操縦者位置、軌跡再生、ナビゲーションを支援。",
        ],
        features: [
          "低周波FPV検出と一人称映像の復調",
          "対応OcuSync機種のドローン/送信機位置特定",
          "GB 42590-2023、ASTM F3411などのRemote ID対応",
          "ブラック/ホワイトリスト、履歴記録、音/振動警報",
          "オンライン/オフライン運用とプラットフォーム連携",
        ],
        applications: [
          "移動巡回と臨時イベント警備",
          "FPV・自作レーシングドローンの監視",
          "現場調査と操縦者位置特定",
        ],
        specs: [
          { label: "モデル", value: "SG-6000P" },
          { label: "周波数範囲", value: "100 MHz〜6 GHz" },
          { label: "検出半径", value: "都市環境 1.5–2 km、開放環境 2–3 km" },
          { label: "応答時間", value: "3–5 s" },
          { label: "同時検出数", value: "≥ 10ターゲット" },
          { label: "寸法 / 重量", value: "185 × 80 × 33 mm、658 ± 10 g（アンテナ含む）" },
          { label: "バッテリー / 稼働", value: "8000 mAh、標準3–4時間" },
          { label: "ディスプレイ", value: "6インチタッチスクリーン、1080 × 2160" },
          { label: "システム", value: "Android 12、8 GBメモリ、256 GBストレージ" },
        ],
        pdfHref: "/downloads/Sky-Guard_Handheld_Drone_Locator_Datasheet_EN.pdf",
        pdfText: "Download English PDF",
      },
    },
  },
  {
    slug: "eo-tracking",
    coverImage: detectionCoverImage,
    productImage: "/assets/images/products/detection/eo-rooftop-waterfront-deployment.jpg",
    galleryImages: [
      {
        src: "/assets/images/products/detection/eo-tracking-camera-head.png",
        alt: "EO tracking camera head",
      },
      {
        src: "/assets/images/products/detection/eo-tracking-target-cue.png",
        alt: "EO target cue view",
      },
      {
        src: "/assets/images/products/detection/eo-control-interface.png",
        alt: "EO control and tracking interface",
      },
      {
        src: "/assets/images/products/detection/eo-visual-confirmation.png",
        alt: "EO visual confirmation screen",
      },
    ],
    imagePosition: "center",
    content: {
      en: {
        title: "Sky-Guard EO Tracking System",
        tagline: "Visible-light and thermal imaging for target confirmation",
        summary:
          "An electro-optical tracking subsystem combining visible-light imaging, infrared thermal imaging, multi-spectral fusion, and servo tracking. It delivers day/night target detection, tracking, identification, and intelligent warning for low, slow, and small aerial targets.",
        highlights: [
          "Visible-light + thermal imaging channels with multi-spectral data fusion.",
          "48× optical continuous zoom with automatic focus and optical defogging.",
          "Horizontal 360° continuous rotation and -90° to +90° pitch coverage.",
        ],
        features: [
          "Edge algorithms for optional classification of 80+ target types",
          "Heat-source detection, tracking, pre-warning, and alarm linkage",
          "Radar guidance, spectrum-positioning guidance, GPS, and environmental-data access",
          "Azimuth, field-of-view, temperature, humidity, and angle feedback",
          "IP66 protection, low-temperature operation, and optional vibration damping",
        ],
        applications: [
          "EO confirmation after radar or RF detection",
          "Low-altitude security defense and military reconnaissance",
          "Day/night monitoring of LSS targets and larger aircraft",
        ],
        specs: [
          { label: "Visible Camera", value: "1920 × 1080 @ 25/30 fps" },
          { label: "Optical Lens", value: "F6.5–312 mm, 48× continuous zoom" },
          { label: "Thermal Imaging", value: "Uncooled 640 × 512; 75 mm fixed lens" },
          { label: "Day UAV Detection", value: "≥ 2.5 km detection; ≥ 2 km tracking" },
          { label: "Night UAV Detection", value: "≥ 1.2 km detection; ≥ 1 km tracking" },
          { label: "Gimbal", value: "360° pan; -90° to +90° tilt; ±0.01° preset accuracy" },
          { label: "Power / Weight", value: "≤ 30 W steady-state; ≤ 8 kg" },
          { label: "Protection", value: "IP66" },
        ],
        pdfHref: "/downloads/Sky-Guard_EO_Tracking_System_Datasheet_EN.pdf",
        pdfText: "Download English PDF",
      },
      sc: {
        title: "Sky-Guard 天卫光电跟踪系统",
        tagline: "可见光与红外热成像融合的目标确认与跟踪",
        summary:
          "光电跟踪系统融合可见光成像、红外热成像、多光谱数据融合和伺服跟踪能力，可实现低小慢目标的昼夜探测、跟踪、识别和智能预警。",
        highlights: [
          "可见光 + 红外热成像，多通道成像与数据融合。",
          "48 倍光学连续变焦，支持自动聚焦和光学透雾。",
          "水平 360° 无限位旋转，俯仰 -90° 至 +90° 覆盖。",
        ],
        features: [
          "边缘算法可选支持 80+ 类目标分类识别",
          "热源检测、追踪、预警和报警联动",
          "可接入雷达引导、频谱定位引导、GPS 和环境数据",
          "方位角、视场角、温湿度和角度偏转多重数据回传",
          "IP66 防护，支持低温运行和可选减震设计",
        ],
        applications: [
          "雷达或射频侦测后的光电确认",
          "低空安全防御和军事侦察",
          "低小慢目标及大型飞机昼夜监控",
        ],
        specs: [
          { label: "可见光相机", value: "1920 × 1080 @ 25/30 fps" },
          { label: "光学镜头", value: "F6.5–312 mm，48 倍连续变焦" },
          { label: "红外热像", value: "非制冷 640 × 512；75 mm 定焦镜头" },
          { label: "白天无人机探测", value: "探测 ≥ 2.5 km；跟踪 ≥ 2 km" },
          { label: "夜间无人机探测", value: "探测 ≥ 1.2 km；跟踪 ≥ 1 km" },
          { label: "云台", value: "360° 水平；-90° 至 +90° 俯仰；预置位精度 ±0.01°" },
          { label: "功耗 / 重量", value: "稳态 ≤ 30 W；整机 ≤ 8 kg" },
          { label: "防护等级", value: "IP66" },
        ],
        pdfHref: "/downloads/Sky-Guard_天卫光电跟踪系统_产品手册.pdf",
        pdfText: "下载中文 PDF",
      },
      jp: {
        title: "Sky-Guard EOトラッキングシステム",
        tagline: "可視光・熱画像による目標確認と追跡",
        summary:
          "可視光撮像、赤外線熱画像、マルチスペクトル融合、サーボ追跡を組み合わせたEO追跡サブシステムです。低速・低高度・小型目標の昼夜検出、追跡、識別、警報に対応します。",
        highlights: [
          "可視光と熱画像のマルチチャンネル融合。",
          "48倍光学連続ズーム、自動フォーカス、光学デフォグ対応。",
          "水平360°連続回転、俯仰-90°〜+90°に対応。",
        ],
        features: [
          "80種類以上の目標分類に対応可能なエッジアルゴリズム",
          "熱源検出、追跡、事前警報、アラーム連動",
          "レーダー誘導、スペクトラム測位、GPS、環境データ入力",
          "方位角、視野角、温湿度、角度偏差のフィードバック",
          "IP66保護、低温動作、オプションの防振設計",
        ],
        applications: [
          "レーダー/RF検出後のEO確認",
          "低高度セキュリティ防護と偵察",
          "LSS目標および大型航空機の昼夜監視",
        ],
        specs: [
          { label: "可視カメラ", value: "1920 × 1080 @ 25/30 fps" },
          { label: "光学レンズ", value: "F6.5–312 mm、48倍連続ズーム" },
          { label: "熱画像", value: "非冷却 640 × 512、75 mm固定レンズ" },
          { label: "昼間UAV検出", value: "検出 ≥ 2.5 km、追跡 ≥ 2 km" },
          { label: "夜間UAV検出", value: "検出 ≥ 1.2 km、追跡 ≥ 1 km" },
          { label: "ジンバル", value: "360°パン、-90°〜+90°チルト、プリセット精度 ±0.01°" },
          { label: "電力 / 重量", value: "定常 ≤ 30 W、≤ 8 kg" },
          { label: "保護等級", value: "IP66" },
        ],
        pdfHref: "/downloads/Sky-Guard_EO_Tracking_System_Datasheet_EN.pdf",
        pdfText: "Download English PDF",
      },
    },
  },
];

export const detectionLandingCopy: Record<
  DetectionLocale,
  {
    backHref: string;
    backLabel: string;
    title: string;
    tagline: string;
    description: string;
    cardsCta: string;
    flowTitle: string;
    flow: { title: string; text: string }[];
  }
> = {
  en: {
    backHref: "/products/sky-guard",
    backLabel: "← Back to Sky-Guard Series",
    title: "Sky-Guard Detection Systems",
    tagline: "Radar, RF sensing, handheld locating, and EO tracking for low-altitude security",
    description:
      "A modular detection layer for counter-UAS and low-altitude airspace operations. Operators can deploy each subsystem independently or combine radar, passive RF sensing, handheld field tools, and EO confirmation into a complete detect-track-identify workflow.",
    cardsCta: "View specs & datasheet →",
    flowTitle: "Detection Workflow",
    flow: [
      { title: "Detect", text: "Radar and passive RF sensors discover low-altitude UAV activity across fixed or mobile sites." },
      { title: "Locate", text: "System outputs target position, pilot cues, trajectory, model, and identity information where supported." },
      { title: "Confirm", text: "EO tracking provides visual and thermal confirmation before escalation or response." },
      { title: "Integrate", text: "Open interfaces support console, jamming, spoofing, and third-party command systems." },
    ],
  },
  sc: {
    backHref: "/SC/products/sky-guard",
    backLabel: "← 返回天卫系列",
    title: "Sky-Guard 天卫侦测系统",
    tagline: "面向低空安全的雷达、射频侦测、手持定位与光电跟踪",
    description:
      "模块化反无人机与低空空域侦测层，可单独部署各子系统，也可将雷达、无源射频、手持现场工具和光电确认整合为完整的探测、跟踪、识别流程。",
    cardsCta: "查看详细规格与产品手册 →",
    flowTitle: "侦测流程",
    flow: [
      { title: "探测", text: "雷达与无源射频传感器发现固定或移动站点周边的低空无人机活动。" },
      { title: "定位", text: "在支持的机型与协议下输出目标位置、飞手线索、轨迹、型号和身份信息。" },
      { title: "确认", text: "光电跟踪提供可见光和热成像确认，支撑后续升级处置。" },
      { title: "集成", text: "开放接口支持控制台、干扰、诱骗和第三方指挥系统联动。" },
    ],
  },
  jp: {
    backHref: "/JP/products/sky-guard",
    backLabel: "← Sky-Guard シリーズに戻る",
    title: "Sky-Guard 検出システム",
    tagline: "低高度セキュリティ向けレーダー、RF検出、携帯型位置特定、EO追跡",
    description:
      "対UASおよび低高度空域運用向けのモジュール型検出レイヤーです。各サブシステムを単独で配備することも、レーダー、パッシブRF、現場用ハンドヘルド、EO確認を統合して検出・追跡・識別の流れを構成することもできます。",
    cardsCta: "仕様・データシートを見る →",
    flowTitle: "検出ワークフロー",
    flow: [
      { title: "検出", text: "レーダーとパッシブRFセンサーが固定/移動サイト周辺の低高度UAV活動を発見します。" },
      { title: "位置特定", text: "対応機種・プロトコルでは、目標位置、操縦者手掛かり、軌跡、機種、ID情報を出力します。" },
      { title: "確認", text: "EO追跡により可視光・熱画像で確認し、エスカレーションや対応を支援します。" },
      { title: "統合", text: "コンソール、妨害、スプーフィング、第三者指揮システムとの連携に対応します。" },
    ],
  },
};

export function getDetectionProduct(slug: DetectionProductSlug) {
  return detectionProducts.find((product) => product.slug === slug);
}
