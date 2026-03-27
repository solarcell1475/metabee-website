export default function ContactUsSC() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">联系我们</h1>

          <div className="space-y-6 text-zinc-400">
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">地址</h3>
              <p>
                香港新界深圳创新科技园
                <br />
                8号楼8层单元836
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-2">电邮</h3>
              <a href="mailto:info@metabee.com.hk" className="text-[#f0b429] hover:underline">info@metabee.com.hk</a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-2">电话</h3>
              <a href="tel:+85293555325" className="text-[#f0b429] hover:underline">+852 93555325</a>
            </div>
          </div>

          <p className="mt-12 text-zinc-500 text-sm">
            如有合作、试点计划或产品咨询，请通过电邮或电话与我们联系。
          </p>
        </div>
      </section>
    </div>
  );
}
