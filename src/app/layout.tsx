import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hanetsuki's Generated midjourney",
  description: "hanetsuki's Generated midjourney",
  alternates: {
    canonical: "https://midjourney.tsuki-lab.net/",
  },
  openGraph: {
    title: "hanetsuki's Generated midjourney",
    description: "hanetsuki's Generated midjourney",
    type: "website",
    url: "https://midjourney.tsuki-lab.net/",
  },
  twitter: {
    card: "summary",
    title: "hanetsuki's Generated midjourney",
    creator: "@hanetsuki_dev",
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <h1 className="text-center text-xl mb-8 mt-4">
          <Link href="/">hanetsuki &apos;s Generated midjourney</Link>
        </h1>
        {children}
        {modal}
      </body>
    </html>
  );
}
