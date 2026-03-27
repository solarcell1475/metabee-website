export default function ContactUsJP() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">お問い合わせ</h1>

          <div className="space-y-6 text-zinc-400">
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">住所</h3>
              <p>
                香港・深センイノベーション＆テクノロジーパーク
                <br />
                ビル8、8F、ユニット836
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-2">メール</h3>
              <a href="mailto:info@metabee.com.hk" className="text-[#f0b429] hover:underline">info@metabee.com.hk</a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-2">電話</h3>
              <a href="tel:+85293555325" className="text-[#f0b429] hover:underline">+852 93555325</a>
            </div>
          </div>

          <p className="mt-12 text-zinc-500 text-sm">
            パートナーシップ、パイロットプログラム、製品に関するお問い合わせは、メールまたは電話でご連絡ください。
          </p>
        </div>
      </section>
    </div>
  );
}
