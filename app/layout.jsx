import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LanguageProvider from "@/components/LanguageProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Vaisakhi | Unge Sikher",
  description: "Vaisakhi, also known as Baisakhi, is a historical and religious festival in Sikhism. It is usually celebrated on April 13 or 14 every year. Vaisakhi marks the Sikh new year and commemorates the formation of Khalsa panth of warriors under Guru Gobind Singh in 1699. It is additionally a spring harvest festival for the Sikhs."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <link rel="icon" href="/logo-light.png" sizes="any" />
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
