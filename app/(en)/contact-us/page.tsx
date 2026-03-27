export default function ContactUs() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>

          <div className="space-y-6 text-zinc-400">
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Address</h3>
              <p>
                Unit 836, 8/F, Building 8
                <br />
                Hong Kong-Shenzhen Innovation and Technology Park
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Email</h3>
              <a href="mailto:info@metabee.com.hk" className="text-[#f0b429] hover:underline">
                info@metabee.com.hk
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+85293555325" className="text-[#f0b429] hover:underline">
                +852 93555325
              </a>
            </div>
          </div>

          <p className="mt-12 text-zinc-500 text-sm">
            For partnership, pilot programme, or product enquiries, please reach out via email or phone.
          </p>
        </div>
      </section>
    </div>
  );
}
