import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import PageNavigation from "./_components/page-navigation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <PageNavigation />
        <main className="p-4 min-h-full">{children}</main>
      </body>
    </html>
  );
}
