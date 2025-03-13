import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              Business<span className="text-primary">Pro</span>
            </h3>
            <p className="text-muted-foreground">{t("tagline")}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">{t("company")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("careers")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">{t("legal")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("cookies")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">{t("connect")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BusinessPro. {t("rights")}
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("terms")}
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
