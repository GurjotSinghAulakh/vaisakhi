"use client";

import React from "react";
import Hero from "@/components/Hero";

const translations = [
  {
    language: "no",
    tittel: "Turbandagen",
    undertittel: "Undertittel",
    tekst:
      "NO bla bla, bla bla. Bla bla bla bla bla, bla bla bla bla bla bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla.",
  },
  {
    language: "pu",
    tittel: "Turbandagen PU",
    undertittel: "Undertittel PU",
    tekst:
      "PU bla bla, bla bla. Bla bla bla bla bla, bla bla bla bla bla bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla.",
  },
  {
    language: "en",
    tittel: "Turbandagen EN",
    undertittel: "Undertittel EN",
    tekst:
      "EN bla, bla bla. Bla bla bla bla bla, bla bla bla bla bla bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla. Derfor, bla bla bla, og bla bla. Vi bla bla bla, hvor bla blabla blababa bla.",
  },
];

export default function Home() {

  return (
    <main>
      <Hero translations={translations} />
    </main>
  );
}
