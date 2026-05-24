import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/sections/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stratos = localFont({
  src: [
    {
      path: "../../public/fonts/stratos/StratosLCWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stratos",
  display: "swap",
});

const fira = localFont({
  src: [
    {
      path: "../../public/fonts/fira/FiraSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Киселев Дмитрий — Frontend разработчик",
  description:
    "Frontend-разработчик с 4+ годами опыта. Создаю клиентские приложения на React и TypeScript. CRM, интерактивные карты, мультимедийные приложения.",
  authors: [{ name: "Киселев Дмитрий" }],
  keywords: [
    "frontend developer",
    "React",
    "TypeScript",
    "веб-разработка",
    "портфолио",
    "разработчик",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${stratos.variable} ${fira.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
