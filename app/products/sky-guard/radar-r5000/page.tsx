import Link from "next/link";
import Image from "next/image";

export default function RadarR5000Page() {
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
            Sky-Guard Radar R5000
          </h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">
            5 km Low-Altitude UAV Detection Radar
          </p>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12 bg-black/30">
            <Image
              src="/assets/images/products/product-skyguard-radar.png"
              alt="Sky-Guard Radar R5000"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Overview
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              The Sky-Guard Radar R5000 is the extended-range member of the
              Sky-Guard radar family. Sharing the same Ku-band fully coherent
              pulse-Doppler architecture as the R3000, it delivers a maximum
              detection range of 5 km against small consumer-class UAVs thanks
              to its higher transmit power. The system comprises a radar unit,
              motorised turntable, and display-and-control terminal software,
              providing real-time 3D target data for wide-area perimeter
              security and critical-infrastructure protection.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Operating Mode
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              <strong className="text-zinc-300">
                360° Full-Domain Low-Altitude Surveillance:
              </strong>{" "}
              The radar performs continuous 360° mechanical azimuth scanning
              while electronically sweeping 0°–30° in elevation. Targets are
              automatically detected, tracked, and reported to the display
              console in real time.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Applications
            </h2>
            <ul className="text-zinc-400 space-y-2">
              <li>
                <strong className="text-zinc-300">Standalone Deployment:</strong>{" "}
                Mount on a tripod for independent wide-area UAV surveillance.
              </li>
              <li>
                <strong className="text-zinc-300">System Integration:</strong>{" "}
                Link with electro-optical identification, jamming, or spoofing
                sub-systems for a full detect-track-neutralise chain.
              </li>
              <li>
                <strong className="text-zinc-300">Mobile / Fixed Station:</strong>{" "}
                Vehicle-mounted for rapid deployment or rooftop-mounted for
                permanent perimeter monitoring.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Key Technology
            </h2>
            <ul className="text-zinc-400 space-y-2">
              <li>Fully coherent pulse-Doppler processing</li>
              <li>Sum-and-difference monopulse angle measurement</li>
              <li>MTD coherent integration</li>
              <li>CFAR (Constant False-Alarm Rate) detection</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400 w-1/2">Frequency Band</td>
                    <td className="py-3">Ku, 16 GHz ± 100 MHz</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Azimuth Scan</td>
                    <td className="py-3">360° mechanical</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Elevation Scan (electronic)</td>
                    <td className="py-3">≥ 30°</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Beam Width (Az / El)</td>
                    <td className="py-3">≤ 3° / ≤ 6°</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Peak Transmit Power</td>
                    <td className="py-3">≤ 100 W</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Max Detection Range</td>
                    <td className="py-3">≥ 5 km (DJI Phantom 3/4, Pd = 85%)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Min Detection Range</td>
                    <td className="py-3">≤ 250 m</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Min Detectable Speed</td>
                    <td className="py-3">≤ 2.5 m/s</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Range Accuracy (RMS)</td>
                    <td className="py-3">≤ 10 m</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Azimuth Accuracy (RMS)</td>
                    <td className="py-3">≤ 0.5°</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Elevation Accuracy (RMS)</td>
                    <td className="py-3">≤ 0.5°</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Data Refresh Rate</td>
                    <td className="py-3">3 s (full 360° sweep)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Radar Unit Dimensions</td>
                    <td className="py-3">≤ 650 × 400 × 100 mm</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Radar + Turntable Dimensions</td>
                    <td className="py-3">≤ 650 × 650 × 250 mm</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Power Supply</td>
                    <td className="py-3">+28 V DC</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">Power Consumption</td>
                    <td className="py-3">≤ 200 W (incl. turntable)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-zinc-400">System Weight</td>
                    <td className="py-3">≤ 35 kg (radar + turntable + tripod)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-zinc-400">Interface</td>
                    <td className="py-3">Gigabit Ethernet</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Display &amp; Control Software
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              The accompanying terminal software handles radar operation control,
              parameter configuration, data parsing, target display, and
              experimental data logging. It also converts native protocols to
              customer-specified formats for seamless integration with
              third-party command and control systems.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
              Packing List
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="py-3 pr-4 text-zinc-400 font-medium">#</th>
                    <th className="py-3 px-4 text-zinc-400 font-medium">Item</th>
                    <th className="py-3 px-4 text-zinc-400 font-medium">Qty</th>
                    <th className="py-3 pl-4 text-zinc-400 font-medium">Remark</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">1</td>
                    <td className="py-2 px-4">Radar Unit</td>
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 pl-4" />
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">2</td>
                    <td className="py-2 px-4">Motorised Turntable</td>
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 pl-4" />
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">3</td>
                    <td className="py-2 px-4">Tripod</td>
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 pl-4" />
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">4</td>
                    <td className="py-2 px-4">GNSS/INS Antenna</td>
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 pl-4" />
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">5</td>
                    <td className="py-2 px-4">Cable Set</td>
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 pl-4">Power + data, 10 m</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">6</td>
                    <td className="py-2 px-4">Fastener Kit</td>
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 pl-4" />
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Download CTA */}
            <div className="mt-12 rounded-xl border border-[#f0b429]/30 bg-[#f0b429]/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  Download Datasheet
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Full A4 product datasheet in PDF format with complete
                  specifications and packing list.
                </p>
              </div>
              <a
                href="/downloads/Sky-Guard_Radar_R5000_Datasheet.pdf"
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
