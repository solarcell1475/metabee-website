import type { Metadata } from "next";
import LocaleHeader from "@/components/LocaleHeader";
import LocaleFooter from "@/components/LocaleFooter";

export const metadata: Metadata = {
  title: "云峰科技（MetaBee）| 低空AI导航与通感一体化",
  description: "云峰科技有限公司是一家总部位于香港的科技企业，专注低空经济基础设施和无人机自主控制系统。",
};

export default function SCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="zh-Hans">
      <LocaleHeader locale="sc" />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <LocaleFooter locale="sc" />
    </div>
  );
}
