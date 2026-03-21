import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/images/logo/logo-metabee-footer.png"
                alt="MetaBee"
                width={176}
                height={60}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-zinc-400 max-w-xs">
              One-stop platform provider for low-altitude airspace management.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Menu</h4>
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
            <h4 className="text-sm font-semibold text-white mb-4">Contact Information</h4>
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
              Unit 836, 8/F, Building 8
              <br />
              Hong Kong-Shenzhen Innovation and Technology Park
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-zinc-500 text-center">
            © {new Date().getFullYear()} MetaBee Technology Limited
          </p>
        </div>
      </div>
    </footer>
  );
}
