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
      undertittel: "ਗੋਬਿੰਦ ਰਾਏ",
      image: "/1675.jpg",
      mp3: "",
      tekst: "ਮੁਗਲਾਂ ਨੇ ਗੁਰੂ ਤੇਗ ਬਹਾਦੁਰ ਜੀ ਨੂੰ ਆਪਣਾ ਧਰਮ ਛੱਡਣ ਲਈ ਕਈ ਉਪਰਾਲੇ ਕੀਤੇ । ਜਦੋਂ ਗੁਰੂ ਜੀ ਨੇ ਆਪਣਾ ਧਰਮ ਛੱਡਣ ਤੋਂ ਇਨਕਾਰ ਕਰ ਦਿੱਤਾ ਤਾਂ ਉਹਨਾਂ ਨੂੰ ਦਿੱਲੀ ਵਿੱਚ ਸ਼ਹੀਦ ਕਰ ਦਿੱਤਾ ਗਿਆ। ਉਹਨਾਂ ਦੇ ਨਾਲ ਭਾਈ ਮਤੀ ਦਾਸ, ਭਾਈ ਸਤੀ ਦਾਸ ਅਤੇ ਭਾਈ ਦਿਆਲਾ ਜੀ ਨੂੰ ਵੀ ਸ਼ਹੀਦ ਕਰ ਦਿੱਤਾ। \n ਗੋਬਿੰਦ ਰਾਏ ਨੌ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਜੀ ਬਣੇ ਅਤੇ ਸਿੱਖੀ ਦੀ ਵਾਗਡੋਰ ਸੰਭਾਲੀ। ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੇ ਸ਼ੁਰੂ ਕੀਤੇ ਸਿੱਖੀ ਰਵਾਇਤਾਂ ਨੂੰ ਬਰ-ਕਰਾਰ ਰੱਖਿਆ। ਗੁਰੂ ਜੀ ਨੇ ਮੁਗਲਾਂ ਦੇ ਹਮਲਿਆਂ ਤੋਂ ਬਚਾਅ ਲਈ ਮਾਰਸ਼ਲ ਆਰਟ ਗੱਤਕਾ,ਘੋੜ ਸਵਾਰੀ ਅਤੇ ਅਕਾਲ ਸੈਨਾ ਨੂੰ ਤਿਆਰ ਕੀਤਾ। \n ਗੁਰੂ ਜੀ ਨੇ ਹਰ ਇੱਕ ਆਉਣ ਵਾਲੀ ਮੁਸ਼ਕਲ ਦਾ ਉਪਾਅ ਕੀਤਾ। ਗੁਰੂ ਜੀ ਨੇ 22 ਜੰਗਾਂ ਵਿੱਚ ਜਿੱਤ ਪਰਾਪਤ ਕੀਤੀ। ਪਹਿਲੀ ਜੰਗ ਗੁਰੂ ਜੀ ਨੇ 19 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਕੀਤੀ ਅਤੇ ਸਫਲਤਾ ਪਰਾਪਤ ਕੀਤੀ। \n ਗੁਰੂ ਜੀ ਨੇ 22 ਜੰਗਾਂ ਜੁਲਮ ਅਤੇ ਬੇਇਨਸਾਫੀ ਦੇ ਖਿਲਾਫ ਲੜੀਆਂ, ਨਾ ਕਿ ਆਪਣੇ ਸੁਆਰਥ, ਬਦਲਾ ਜਾਂ ਧਨ- ਦੋਲਤ ਲਈ ਲੜੀਆਂ।"},
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
