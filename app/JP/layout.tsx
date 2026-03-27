import type { Metadata } from "next";
import LocaleHeader from "@/components/LocaleHeader";
import LocaleFooter from "@/components/LocaleFooter";

export const metadata: Metadata = {
  title: "MetaBee Technology | 低高度AIナビゲーション＆統合センシング通信",
  description: "MetaBee Technology Limitedは、低高度経済インフラと自律型ドローン制御システムを専門とする香港のテクノロジー企業です。",
};

export default function JPLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ja">
      <LocaleHeader locale="jp" />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <LocaleFooter locale="jp" />
    </div>
  );
}
