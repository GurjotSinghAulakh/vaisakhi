import LanguageContext from '@/components/LanguageContext';
import LanguageProvider from '@/components/LanguageProvider';
import { useState, useEffect, useContext } from 'react';

function MyApp({ Component, pageProps }) {
    let { language, setLanguage } = useContext(LanguageContext);

  return (
    <LanguageProvider>
        <Component {...pageProps} language={language}  setLanguage={setLanguage} />
    </LanguageProvider>
  );
}

export default MyApp;
