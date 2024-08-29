import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Dijital Reklamcılık",
  description: "Burak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={poppins.className}>
        <main className="mx-auto">
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
