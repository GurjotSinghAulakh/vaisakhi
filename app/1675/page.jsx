"use client";

import React from "react";
import Hero from "@/components/Hero";

const translations = [
    {
      language: "no",
      tittel: "1675",
      undertittel: "Arvtageren Gobind Rai",
      image: "/1675.jpg",
      mp3: "/no/1675-no.mp3",
      tekst:
        "Etter å ha nektet å gi etter for kravene om å konvertere, blir den niende guru, Guru Tegh Bahadur ji, shaheed sammen med Bhai Mati Das, Sati Das og Dayala ji i Delhi. \n\n Gobind Rai blir til Guru Gobind Rai i en alder av 9 år. Han fortsetter tradisjonene om gatka og strategisk ruster opp Akal Sena, sikh militær styrke opprettet av Guru Hargobind Sahib ji. \n\n Han forbereder seg til den konfliktfylte fremtiden, der han totalt deltar i 22 slag – 14 store slag og 8 mindre kamper. Guru ji var kun 19 år gammel da han kjempet i første slaget. \n\n I sine 22 slag, initierte Guru ji aldri konflikten. Han trodde på forsvarskrig, og kjempet ikke for å ta hevn, penger eller andre destruktive mål." ,
    },
    {
      language: "pu",
      tittel: "1675",
      undertittel: "ਵਾਰਸ ਗੋਬਿੰਦ ਰਾਏ",
      image: "/1675.jpg",
      mp3: "",
      tekst:
      "ਪਰਿਵਰਤਨ ਦੀਆਂ ਮੰਗਾਂ ਨੂੰ ਮੰਨਣ ਤੋਂ ਇਨਕਾਰ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਨੌਵੇਂ ਗੁਰੂ, ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ, ਭਾਈ ਮਤੀ ਦਾਸ, ਸਤੀ ਦਾਸ ਅਤੇ ਦਿਆਲਾ ਜੀ ਦੇ ਨਾਲ ਦਿੱਲੀ ਵਿੱਚ ਸ਼ਹੀਦ ਹੋ ਗਏ। \n\nਗੋਬਿੰਦ ਰਾਏ 9 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਬਣ ਗਏ। ਉਹ ਗੱਤਕੇ ਦੀਆਂ ਪਰੰਪਰਾਵਾਂ ਨੂੰ ਜਾਰੀ ਰੱਖਦਾ ਹੈ ਅਤੇ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੁਆਰਾ ਬਣਾਈ ਅਕਾਲ ਸੈਨਾ, ਸਿੱਖ ਫੌਜੀ ਬਲ ਨੂੰ ਰਣਨੀਤਕ ਤੌਰ 'ਤੇ ਲੈਸ ਕਰਦਾ ਹੈ।\n\n ਉਹ ਕੁੱਲ 22 ਲੜਾਈਆਂ - 14 ਵੱਡੀਆਂ ਲੜਾਈਆਂ ਅਤੇ 8 ਵਿੱਚ ਹਿੱਸਾ ਲੈਂਦਿਆਂ, ਸੰਘਰਸ਼ ਭਰੇ ਭਵਿੱਖ ਲਈ ਤਿਆਰੀ ਕਰਦਾ ਹੈ। ਛੋਟੀਆਂ ਲੜਾਈਆਂ। ਗੁਰੂ ਜੀ ਦੀ ਉਮਰ ਸਿਰਫ 19 ਸਾਲ ਦੀ ਸੀ ਜਦੋਂ ਉਹਨਾਂ ਨੇ ਪਹਿਲੀ ਲੜਾਈ ਲੜੀ। \n\n ਆਪਣੀਆਂ 22 ਲੜਾਈਆਂ ਵਿੱਚ, ਗੁਰੂ ਜੀ ਨੇ ਕਦੇ ਵੀ ਸੰਘਰਸ਼ ਦੀ ਸ਼ੁਰੂਆਤ ਨਹੀਂ ਕੀਤੀ। ਉਹ ਰੱਖਿਆਤਮਕ ਯੁੱਧ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਰੱਖਦੇ ਸਨ, ਅਤੇ ਬਦਲਾ ਲੈਣ, ਪੈਸੇ ਜਾਂ ਹੋਰ ਲੈਣ ਲਈ ਨਹੀਂ ਲੜਦੇ ਸਨ। ਵਿਨਾਸ਼ਕਾਰੀ ਟੀਚੇ।" ,    
    },
    {
      language: "en",
      tittel: "1675",
      undertittel: "The heir Gobind Rai",
      image: "/1675.jpg",
      mp3: "/en/1675-en.mp3",
      tekst:
      "After refusing to yield to demands to convert, the ninth guru, Guru Tegh Bahadur ji, becomes shaheed along with Bhai Mati Das, Sati Das and Dayala ji in Delhi. \n\n Gobind Rai becomes Guru Gobind Rai at the age of 9. He continues the traditions of gatka and strategically equips the Akal Sena, Sikh military force created by Guru Hargobind Sahib ji.\n\n He prepares for the conflict-filled future, participating in a total of 22 battles – 14 major battles and 8 minor battles. Guru ji was only 19 years old when he fought the first battle. \n\n In his 22 battles, Guru ji never initiated the conflict. He believed in defensive war, and did not fight to take revenge, money or other destructive goals." ,    },
      
  ];

export default function Home() {
  return (
    <main>
      <Hero translations={translations}/>
    </main>
  );
}
