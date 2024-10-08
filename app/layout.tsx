import "@/styles/globals.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans as Font } from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";

import { cn } from "@/lib/utils";

import TopLoader from "@/components/top-loader";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Integrative Programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "relative overflow-x-hidden")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopLoader />
          <main className="container">
            <Header />
            {children}

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
