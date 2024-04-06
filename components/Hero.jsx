import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageProvider";

const Hero = ({ translations }) => {
  const { language } = useContext(LanguageContext);
  if (!translations) {
    return "Loading ...";
  }
  const currentTranslation = translations.find((t) => t.language === language);

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        {currentTranslation ? (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold">{currentTranslation.tittel}</h1>
            <p className="text-xl mt-2">{currentTranslation.undertittel}</p>
            <img src="/logo-light.png" width="200" className="block mx-auto" />
            <audio src="/audio.mp3" controls className="block mx-auto"/>
            <p className="mt-4">{currentTranslation.tekst}</p>
          </div>
        ) : (
          <div>Loading...</div> // or any fallback UI
        )}
      </div>
    </section>
  );
};

export default Hero;
