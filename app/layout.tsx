import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Systeme.io",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
