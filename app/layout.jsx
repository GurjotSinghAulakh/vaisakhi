import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LanguageProvider, {
  LanguageContext,
} from "@/components/LanguageProvider";
import { useContext } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Gurjot Singh Aulakh",
  description:
    "I'm Gurjot Singh Aulakh, a Fullstack Developer and QA Engineer. I have a passion for technology and continuous learning. I have experience in working as a Technical Tester at SpareBank 1 Forsikring, participating in hackathons like Bouvets Penguin Battle Royale, and pursuing a Master's in Artificial Intelligence (AI).",
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
