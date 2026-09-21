import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://twoj-katalog.pl'),
  title: {
    default: 'Katalog Produktów',
    template: '%s | Katalog Produktów',
  },
  description: 'Najlepszy katalog produktów w sieci.',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
