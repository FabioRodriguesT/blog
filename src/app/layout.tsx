import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - Este é um blog com Next.js",
  description: "Essa seria a descrição dessa página.",
};

type RootLayouProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayouProps>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
