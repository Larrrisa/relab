import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Авторизация в приложении",
  description: "Авторизация пользователя в приложении",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
