export type Locale = "en" | "sc" | "jp";

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/SC")) return "sc";
  if (pathname.startsWith("/JP")) return "jp";
  return "en";
}

export function prefix(locale: Locale): string {
  if (locale === "sc") return "/SC";
  if (locale === "jp") return "/JP";
  return "";
}

export const navLabels: Record<Locale, { home: string; about: string; projects: string; products: string; contact: string }> = {
  en: { home: "Home", about: "About Us", projects: "Projects", products: "Products", contact: "Contact Us" },
  sc: { home: "首页", about: "关于我们", projects: "项目案例", products: "产品中心", contact: "联系我们" },
  jp: { home: "ホーム", about: "会社概要", projects: "プロジェクト", products: "製品情報", contact: "お問い合わせ" },
};

export const footerLabels: Record<Locale, { menu: string; contact: string; slogan: string }> = {
  en: { menu: "Menu", contact: "Contact Information", slogan: "One-stop platform provider for low-altitude airspace management." },
  sc: { menu: "导航", contact: "联系方式", slogan: "低空空域管理一站式平台服务商。" },
  jp: { menu: "メニュー", contact: "お問い合わせ情報", slogan: "低高度空域管理のワンストッププラットフォームプロバイダー。" },
};

export const langSwitchLabels: Record<Locale, string> = { en: "EN", sc: "简中", jp: "日本語" };
