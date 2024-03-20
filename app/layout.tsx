import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/nav/Sidebar";
import { useSupase } from "@/hooks/useSupabase";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cénéris Legndarium",
  description: "Toutes les légendes en un recueil ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-arches flex  max-w-screen ">
        <Sidebar />
        <main className="w-full flex  flex-col">{children}</main>
      </body>
    </html>
  );
}
