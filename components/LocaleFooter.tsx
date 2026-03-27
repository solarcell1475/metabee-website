import Link from "next/link";
import Image from "next/image";
import { Locale, prefix, navLabels, footerLabels } from "@/lib/i18n";

export default function LocaleFooter({ locale }: { locale: Locale }) {
  const p = prefix(locale);
  const nav = navLabels[locale];
  const ft = footerLabels[locale];

  const navLinks = [
    { href: `${p}/`, label: nav.home },
    { href: `${p}/about-us`, label: nav.about },
    { href: `${p}/projects`, label: nav.projects },
    { href: `${p}/products`, label: nav.products },
    { href: `${p}/contact-us`, label: nav.contact },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <Link href={`${p}/`} className="inline-block mb-4">
              <Image
                src="/assets/images/logo/logo-metabee-footer.png"
                alt="MetaBee"
                width={176}
                height={60}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-zinc-400 max-w-xs">{ft.slogan}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{ft.menu}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-[#f0b429] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{ft.contact}</h4>
            <p className="text-sm text-zinc-400">
              <a href="mailto:info@metabee.com.hk" className="hover:text-[#f0b429] transition-colors">
                info@metabee.com.hk
              </a>
            </p>
            <p className="text-sm text-zinc-400 mt-1">
              <a href="tel:+85293555325" className="hover:text-[#f0b429] transition-colors">
                +852 93555325
              </a>
            </p>
            <p className="text-sm text-zinc-400 mt-2">
              {locale === "sc"
                ? <>香港新界深圳创新科技园<br />8号楼8层单元836</>
                : locale === "jp"
                ? <>香港・深セン<br />イノベーション＆テクノロジーパーク<br />ビル8、8F、ユニット836</>
                : <>Unit 836, 8/F, Building 8<br />Hong Kong-Shenzhen Innovation and Technology Park</>}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-zinc-500 text-center">
            © {new Date().getFullYear()}{" "}
            {locale === "sc"
              ? "云峰科技有限公司（MetaBee Technology Limited）"
              : locale === "jp"
              ? "MetaBee Technology Limited"
              : "MetaBee Technology Limited"}
          </p>
        </div>
      </div>
    </footer>
  );
}
