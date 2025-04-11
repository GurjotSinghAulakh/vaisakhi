"use client";

import React from "react";
import Hero from "@/components/Hero";

const translations = [
    {
      language: "no",
      tittel: "1693",
      undertittel: "Mogul Keiser Aurangzebs erklæring",
      image: "/1693.jpg",
      mp3: "/no/1693-no.mp3",
      tekst: "Keiser Aurangzeb får jevnlige rapporter om Gobind Rai og hans enorme tilslutning – som blir bare større for hver dag som går. \n\n Den fanatiske keiseren frykter en ny motstander i Punjab og i frykt av å miste territorier i området, erklærer han i november 1693: «Alle berørte militære befaler i Punjab blir beordret til å forhindre Gobind Rai fra å samle sine tilhengere.» \n\n Guru Gobind Rai responderer med sin egen erklæring til sikher i fjerne områder, og ber de til å samle seg i Anandpur i mars 1694. Sikher skulle komme bevæpnet, med uklipt hår og skjegg, slik at mogulene ikke skulle være i tvil om deres identitet. \n\n Etter kamper med mogulene underveis, var den enorme forsamlingen et bevis på den triumferende sikh-ånden; at de nektet å la seg skremme av mogulene."
    },
    {
      language: "pu",
      tittel: "1693",
      undertittel: "ਮੁਗਲ ਸਮਰਾਟ ਔਰੰਗਜੇਬ ਦੀ ਘੋਸ਼ਣਾ",
      image: "/1693.jpg",
      mp3: "",
      tekst: "ਸਮਰਾਟ ਔਰੰਗਜੇਬ ਨੂੰ ਲਗਾਤਾਰ ਰਿਪੋਰਟਾ ਮਿਲ ਰਹੀਆਂ ਸਨ ਕਿ ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਦੀ ਹਰ ਪਾਸੇ ਜੈ ਜੈ ਕਾਰ ਅਤੇ ਤਾਕਤ ਵੱਧ ਰਹੀ ਹੈ। \n ਕੱਟੜ ਸਮਰਾਟ ਔਰੰਗਜੇਬ ਨੂੰ ਗੁਰੂ ਜੀ ਦੀ ਵਧਦੀ ਤਾਕਤ ਦਾ ਡਰ ਪੈ ਗਿਆ ਕਿ ਇਹ ਇਲਾਕਾ ਉਸ ਦੇ ਹੱਥੋਂ ਨਿਕਲ ਰਿਹਾ ਹੈ। ਨਵੰਬਰ 1693 ਨੂੰ ਆਪਣੀ ਸੈਨਾ ਨੂੰ ਐਲਾਨ ਕੀਤਾ ਕਿ ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਦੀ ਵਧਦੀ ਤਾਕਤ ਨੂੰ ਰੋਕਿਆ ਜਾਵੇ। \n ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਨੇ ਆਪਣੇ ਸਿੱਖਾਂ ਨੂੰ ਸੁਨੇਹੇ ਭੇਜੇ ਕਿ ਮਾਰਚ 1694 ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਪਹੁੰਚੋ। ਸਿੱਖ ਹਥਿਆਰਬੰਦ,ਦਾੜੀ, ਕੇਸ ਰੱਖ ਕੇ ਆਉਣ। ਮੁਗਲਾ ਨੂੰ ਪਤਾ ਲੱਗ ਸਕੇ ਕਿ ਸਿੱਖਾ ਦੀ ਪਹਿਚਾਨ ਕੀ ਹੈ। \n ਮੁਗਲਾ ਨਾਲ ਮੁਠ-ਭੇੜ ਤੋਂ ਬਾਅਦ,ਇਤਨਾ ਵੱਡਾ ਸਿੱਖਾ ਦਾ ਇਕੱਠ ਸਿੱਖੀ ਸ਼ਕਤੀ ਦੀ ਇਕ ਜਿੱਤ ਦੀ ਮਿਸਾਲ ਸੀ, ਸਿੱਖਾਂ ਤੇ ਮੁਗਲਾ ਦਾ ਡਰ ਚੁਕਿਆ ਗਿਆ।",
    },
    {
      language: "en",
      tittel: "1693",
      undertittel: "Mogul Emperor Aurangzeb's Declaration",
      image: "/1693.jpg",
      mp3: "/en/1693-en.mp3",
      tekst: "Emperor Aurangzeb receives regular reports of Gobind Rai and his enormous following - which only grows larger with each passing day. \n\n Fearing a new adversary in the Punjab and fearing loss of territory in the area, the fanatical emperor declares in November 1693: 'All military commanders in the Punjab concerned are ordered to prevent Gobind Rai from assembling his followers.' \n\n Guru Gobind Rai responds with his own declaration to Sikhs in distant areas, asking them to gather at Anandpur in March 1694. Sikhs were to come armed, with unshorn hair and beards, so that the Mughals would not be in doubt about their identity. \n\n After battles with the Mughals along the way, the huge gathering was a testament to the triumphant Sikh spirit; that they refused to be intimidated by the Mughals.",
    },
  ];

export default function Home() {
  return (
    <main>
      <Hero translations={translations}/>
    </main>
  );
}
