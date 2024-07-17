import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import StoreProvider from "@/lib/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Channel Statistics - ViewStats",
  description:
    "ViewStats gives you the power of in depth YouTube Channel Statistics. Search any creator, compare performance, see growth trajectories, and much more!",
  keywords: ["youtube", "channel", "statistics", "analytics", "viewstats"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StoreProvider>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
