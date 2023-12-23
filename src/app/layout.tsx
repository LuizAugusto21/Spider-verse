import "./globals.scss";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aranhaverso",
  description: "Parallax do Aranhaverso com React, Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="opções do menu"
            width={36}
            height={25}
          />
          <Link href="/">
            <Image src="/spider-logo.svg" alt={""} width={260} height={70} />
          </Link>

          <Image src="/icons/user.svg" alt={""} width={36} height={25} />
        </header>
        <body>{children}</body>
      </body>
    </html>
  );
}
