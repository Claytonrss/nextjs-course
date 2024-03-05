import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/components/menu";

export const metadata: Metadata = {
  title: "Curso de NextJS",
  description: "Criado por Clayton Rafael",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
