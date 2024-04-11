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
      undertittel: "ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਦਾ ਐਲਾਨ",
      image: "/1693.jpg",
      mp3: "",
      tekst: "ਸਮਰਾਟ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਗੋਬਿੰਦ ਰਾਏ ਅਤੇ ਉਸਦੇ ਬਹੁਤ ਸਾਰੇ ਅਨੁਯਾਈਆਂ ਦੀਆਂ ਲਗਾਤਾਰ ਰਿਪੋਰਟਾਂ ਮਿਲਦੀਆਂ ਹਨ - ਜੋ ਹਰ ਗੁਜ਼ਰਦੇ ਦਿਨ ਦੇ ਨਾਲ ਵਧਦੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। \n\n ਪੰਜਾਬ ਵਿੱਚ ਇੱਕ ਨਵੇਂ ਵਿਰੋਧੀ ਤੋਂ ਡਰਦੇ ਹੋਏ ਅਤੇ ਖੇਤਰ ਵਿੱਚ ਖੇਤਰ ਦੇ ਨੁਕਸਾਨ ਦੇ ਡਰੋਂ, ਕੱਟੜ ਬਾਦਸ਼ਾਹ ਨੇ ਨਵੰਬਰ 1693 ਵਿੱਚ ਐਲਾਨ ਕੀਤਾ। : 'ਸਬੰਧਤ ਪੰਜਾਬ ਦੇ ਸਾਰੇ ਫੌਜੀ ਕਮਾਂਡਰਾਂ ਨੂੰ ਹੁਕਮ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ ਕਿ ਉਹ ਗੋਬਿੰਦ ਰਾਏ ਨੂੰ ਆਪਣੇ ਪੈਰੋਕਾਰਾਂ ਨੂੰ ਇਕੱਠੇ ਕਰਨ ਤੋਂ ਰੋਕਣ।' \n\n ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਨੇ ਦੂਰ-ਦੁਰਾਡੇ ਇਲਾਕਿਆਂ ਦੇ ਸਿੱਖਾਂ ਨੂੰ ਮਾਰਚ 1694 ਵਿੱਚ ਅਨੰਦਪੁਰ ਵਿਖੇ ਇਕੱਠੇ ਹੋਣ ਲਈ ਆਪਣੇ ਐਲਾਨ ਨਾਲ ਜਵਾਬ ਦਿੱਤਾ। ਸਿੱਖਾਂ ਨੂੰ ਹਥਿਆਰਬੰਦ, ਕੱਟੇ ਵਾਲਾਂ ਅਤੇ ਦਾੜ੍ਹੀਆਂ ਨਾਲ ਆਉਣਾ ਸੀ, ਤਾਂ ਜੋ ਮੁਗਲਾਂ ਨੂੰ ਸ਼ੱਕ ਨਾ ਹੋਵੇ। ਉਹਨਾਂ ਦੀ ਪਛਾਣ। \n\n ਰਸਤੇ ਵਿੱਚ ਮੁਗਲਾਂ ਨਾਲ ਲੜਾਈਆਂ ਤੋਂ ਬਾਅਦ, ਵਿਸ਼ਾਲ ਇਕੱਠ ਸਿੱਖ ਭਾਵਨਾ ਦੀ ਜਿੱਤ ਦਾ ਪ੍ਰਮਾਣ ਸੀ; ਕਿ ਉਹਨਾਂ ਨੇ ਮੁਗਲਾਂ ਦੁਆਰਾ ਡਰਾਉਣ ਤੋਂ ਇਨਕਾਰ ਕਰ ਦਿੱਤਾ।",
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
