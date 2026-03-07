import Link from "next/link";
import Image from "next/image";

export default function ConsolePage() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products/sky-guard"
            className="text-[#f0b429] hover:underline text-sm mb-6 inline-block"
          >
            ← Back to Sky-Guard Series
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Sky-Guard Console
          </h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">
            Digital Intelligent Flight Decision Support System
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="aspect-video relative rounded-xl overflow-hidden bg-black/30">
              <Image
                src="/assets/images/products/product-skyguard-console-map.png"
                alt="Sky-Guard Console – satellite map view"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="aspect-video relative rounded-xl overflow-hidden bg-black/30">
              <Image
                src="/assets/images/products/product-skyguard-console-ui.png"
                alt="Sky-Guard Console – radar display interface"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Background
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              As the low-altitude economy accelerates and public interest in
              recreational aviation grows, flight camps — serving general
              aviation, paragliding, drone testing, powered hang-gliders, hot-air
              balloons, and other light aircraft — are transitioning from
              experience-based management to data-driven, intelligent operations.
              Weather conditions such as wind speed, temperature, humidity,
              barometric pressure, cloud ceiling, and precipitation have a
              decisive impact on the safety and performance of light aircraft.
              The Sky-Guard Console bridges the gap between raw meteorological
              data and actionable flight decisions.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Core Capabilities
            </h2>
            <ul className="text-zinc-400 space-y-3">
              <li>
                <strong className="text-zinc-300">
                  Real-Time Weather Assessment:
                </strong>{" "}
                Continuously evaluates whether current conditions meet safe
                takeoff and landing thresholds for each aircraft type.
              </li>
              <li>
                <strong className="text-zinc-300">
                  Flight Simulation:
                </strong>{" "}
                Models flight attitude, climb rate, glide ratio, and control
                difficulty under varying meteorological scenarios.
              </li>
              <li>
                <strong className="text-zinc-300">
                  Optimal Flight Planning:
                </strong>{" "}
                Recommends best takeoff/landing direction, timing, climb
                profiles, holding patterns, and return-to-home waypoints.
              </li>
              <li>
                <strong className="text-zinc-300">
                  Ideal Flight Window Prediction:
                </strong>{" "}
                Forecasts time-slot-based operating windows to optimise camp
                scheduling and customer booking.
              </li>
              <li>
                <strong className="text-zinc-300">
                  Automated Risk Alerts:
                </strong>{" "}
                Generates flight-risk warnings and operational
                recommendations to support instructors and pilots in
                real-time decision making.
              </li>
              <li>
                <strong className="text-zinc-300">
                  Personalised Flight Advice:
                </strong>{" "}
                Tailors recommendations based on site terrain, user profile
                (age, activity intensity), and spatiotemporal context.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Personalised Camp Features
            </h2>
            <ul className="text-zinc-400 space-y-2">
              <li>Individual flight decision recommendations per visitor</li>
              <li>3-day advance safety risk forecast for the camp</li>
              <li>Optimal flight period suggestions</li>
              <li>Visual flight-path preview and simulation</li>
              <li>Locally-tuned AI decision model that improves over time</li>
              <li>Emergency / sudden-change weather alerts</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Solution Architecture
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              The system fuses real-time meteorological data ingestion, an
              aircraft performance parameter library, aerodynamic models, and
              AI-assisted decision algorithms into a unified platform. Data
              sources include gridded weather model outputs (1–2 km resolution),
              on-site sensor calibration, and historical operational records.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Service Tiers
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="py-3 pr-4 text-zinc-400 font-medium">Feature</th>
                    <th className="py-3 px-4 text-[#f0b429] font-semibold">Standard</th>
                    <th className="py-3 px-4 text-[#f0b429] font-semibold">Professional</th>
                    <th className="py-3 pl-4 text-[#f0b429] font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4 text-zinc-400">Core Output</td>
                    <td className="py-2 px-4">Index monitoring &amp; review</td>
                    <td className="py-2 px-4">Index-driven decision loop</td>
                    <td className="py-2 pl-4">Full custom pipeline</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4 text-zinc-400">Forecast Horizon</td>
                    <td className="py-2 px-4">24 h rolling</td>
                    <td className="py-2 px-4">48 h rolling</td>
                    <td className="py-2 pl-4">72–120 h trend</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4 text-zinc-400">Monitored Points</td>
                    <td className="py-2 px-4">5 custom locations</td>
                    <td className="py-2 px-4">10 custom locations</td>
                    <td className="py-2 pl-4">10+ (expandable)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4 text-zinc-400">AI Service</td>
                    <td className="py-2 px-4">—</td>
                    <td className="py-2 px-4">Multi-index analytics</td>
                    <td className="py-2 pl-4">Self-learning model</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4 text-zinc-400">Alert Channel</td>
                    <td className="py-2 px-4">Web dashboard</td>
                    <td className="py-2 px-4">Real-time push notifications</td>
                    <td className="py-2 pl-4">Multi-channel + audit trail</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-zinc-400">Deliverables</td>
                    <td className="py-2 px-4">
                      Flight data logging, 24 h forecast, 5-point report, web
                      portal
                    </td>
                    <td className="py-2 px-4">
                      Daily report + video briefing, 48 h forecast, 10-point
                      report, push notifications
                    </td>
                    <td className="py-2 pl-4">
                      Custom decision reports, flight behaviour logging,
                      72–120 h forecast, 10–15 point report, multi-system push
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Compliance &amp; Risk Boundaries
            </h2>
            <ul className="text-zinc-400 space-y-2">
              <li>
                The service provides indices and advisory actions only; it does
                not replace any certified environmental data product.
              </li>
              <li>
                Indices serve as decision support, not the sole basis for safety
                or regulatory compliance. Operators must retain final authority
                and on-site verification procedures.
              </li>
              <li>
                When historical data is insufficient or significantly biased,
                model uncertainty will increase. The system flags such
                conditions and supports fallback to rule-based / conservative
                strategies.
              </li>
            </ul>

            {/* Download CTA */}
            <div className="mt-12 rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  Download Datasheet
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Full A4 product datasheet in PDF format with system overview,
                  service tiers, and compliance notes.
                </p>
              </div>
              <a
                href="/downloads/Sky-Guard_Console_Datasheet.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#f0b429] text-black font-semibold hover:bg-[#e6a800] transition-colors whitespace-nowrap"
                download
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
