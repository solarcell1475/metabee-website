import Link from "next/link";
import Image from "next/image";

export default function NavKitSPage() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="text-[#f0b429] hover:underline text-sm mb-6 inline-block">
            ← Back to Products
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            NavKit-S
          </h1>
          <p className="text-xl text-[#f0b429] font-medium mb-8">
            Onboard Autonomous Navigation Kit
          </p>

          <div className="aspect-video relative rounded-xl overflow-hidden mb-12 bg-black/30">
            <Image
              src="/assets/images/products/product-navkit-fpga-pcb.png"
              alt="NavKit-S"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Description</h2>
            <p className="text-zinc-400 leading-relaxed">
              NavKit-S is an integrated onboard system that combines AI-based autonomous navigation, multi-sensor environmental awareness, and plug-and-play compatibility with Innowave satellite communication modules. It enables safe, self-directed flight in GPS-weak or completely GPS-denied scenarios.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Core Components</h2>
            <ul className="text-zinc-400 space-y-2">
              <li><strong className="text-zinc-300">AI Control Unit:</strong> ARM-based or FPGA SoC running real-time SLAM, visual odometry, and obstacle avoidance algorithms.</li>
              <li><strong className="text-zinc-300">Vision + Environment Sensing:</strong> Stereo camera, optical flow sensor, ultrasonic/mm-wave radar for short-range obstacle detection.</li>
              <li><strong className="text-zinc-300">GNSS/INS Fusion Module:</strong> High-grade IMU and GNSS receiver with RTK capability for survey-grade positioning when available.</li>
              <li><strong className="text-zinc-300">Satellite Communication Interface:</strong> Standard connector for Innowave narrowband satellite module (L-band, text/command channel).</li>
              <li><strong className="text-zinc-300">Power Management:</strong> Redundant power supply with automatic failover; designed for battery-powered UAVs (5–30 kg class).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Functional Features</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>Autonomous waypoint navigation with real-time path re-planning</li>
              <li>Obstacle avoidance using visual and radar fusion</li>
              <li>GPS-denied indoor/canyon flight via visual SLAM</li>
              <li>Automatic return-to-home with smart landing spot selection</li>
              <li>Sensor data logging and playback for post-mission analysis</li>
              <li>OTA (over-the-air) firmware updates</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Target Applications</h2>
            <p className="text-zinc-400">
              Power line inspection, infrastructure survey, logistics in remote areas, cross-border autonomous operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
