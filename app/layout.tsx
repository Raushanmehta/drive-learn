import { Suspense } from "react";
import type { Metadata } from "next";
import { roboto, poppins } from "@/lib/fonts";
import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Drive Learn",
  description: "Drive Learn Driving School Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${poppins.variable} ${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Topbar />
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
