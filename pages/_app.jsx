"use client";

import LanguageProvider, {
  LanguageContext,
} from "@/components/LanguageProvider";
import { useContext } from "react";

function MyApp({ Component, pageProps }) {
  let { language, setLanguage } = useContext(LanguageContext);

  return (
    <LanguageProvider>
      <Component {...pageProps} language={language} setLanguage={setLanguage} />
    </LanguageProvider>
  );
}

export default MyApp;
