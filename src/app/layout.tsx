import type { Metadata } from "next";
import '../scss/main.scss'
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "IP Address Tracker",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
