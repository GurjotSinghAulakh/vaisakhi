import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const translations = [
  { language: "no", tittel: "Turbandagen", undertittel: "Undertittel", tekst: "Bla bla bla, bla bla. Bla bla bla bla bla, bla bla bla bla bla bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla.", },
  { language: "pu", tittel: "Turbandagen PU", undertittel: "Undertittel PU", tekst: "Bla bla bla, bla bla. Bla bla bla bla bla, bla bla bla bla bla bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla.", },
  { language: "en", tittel: "Turbandagen EN", undertittel: "Undertittel EN", tekst: "Bla bla bla, bla bla. Bla bla bla bla bla, bla bla bla bla bla bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla.", },
];

const Hero = () => {

  const a =() => useContext(LanguageContext);
let { language, setLanguage } = a();
  language = "no"
  console.log(language)
  const currentTranslation = translations.find(t => t.language === language);

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        {currentTranslation ? (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold">{currentTranslation.tittel}</h1>
            <p className="text-xl mt-2">{currentTranslation.undertittel}</p>
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
