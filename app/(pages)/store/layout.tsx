import type { Metadata } from "next";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Страница магазина",
  description: "Страница магазина в приложении",
};

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
