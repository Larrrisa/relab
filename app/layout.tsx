import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./redux/provider";

export const metadata: Metadata = {
  title: "Главная страница приложения",
  description: "Главная страница приложения с таблицами",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
