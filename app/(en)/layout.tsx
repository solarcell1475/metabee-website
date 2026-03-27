import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
    </>
  );
}
