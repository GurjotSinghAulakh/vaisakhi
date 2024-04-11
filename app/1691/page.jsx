"use client";

import React from "react";
import Hero from "@/components/Hero";

const translations = [
    {
      language: "no",
      tittel: "1691",
      undertittel: "Slaget ved Nadaun– allianse og forræderi",
      image: "/1691.jpg",
      mp3: "/no/1691-no.mp3",
      tekst: "Mens Akal Sena bekjemper fjellkongene, er keiser Aurangzeb opptatt med militære operasjoner i sør-India. \n\n  Når han får rapportene om situasjonen i Punjab, at rajput fjellkongene nektet å anerkjenne den moghul keiseren og betale skatt, beordres Alif Khan til å sette dem på plass. \n\n Fjellkongene med Bhim Chand i spissen danner en allianse, og ber Guru ji om støtte. Guru Gobind Rai aksepterer alliansen, og personlig leder hæren mot guvenørene Alif Khan. Den samlede hæren til sikhene og fjellkongene vinner slaget. Alif Khan rømmer med halen mellom beina. \n\n Etter noen få dager etter slaget, svikter Bhim Chand Guru Gobind Rai og allierer seg med mogulene."
    },
    {
      language: "pu",
      tittel: "1691",
      undertittel: "ਨਾਦੌਨ ਦੀ ਲੜਾਈ - ਗਠਜੋੜ ਅਤੇ ਵਿਸ਼ਵਾਸਘਾਤ",
      image: "/1691.jpg",
      mp3: "",
      tekst: "ਜਦੋਂ ਅਕਾਲ ਸੈਨਾ ਪਹਾੜੀ ਰਾਜਿਆਂ ਨਾਲ ਲੜ ਰਹੀ ਹੈ, ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਦੱਖਣੀ ਭਾਰਤ ਵਿੱਚ ਫੌਜੀ ਕਾਰਵਾਈਆਂ ਵਿੱਚ ਰੁੱਝਿਆ ਹੋਇਆ ਹੈ। \n\n ਜਦੋਂ ਉਸ ਨੂੰ ਪੰਜਾਬ ਦੇ ਹਾਲਾਤਾਂ ਦੀ ਰਿਪੋਰਟ ਮਿਲਦੀ ਹੈ, ਕਿ ਰਾਜਪੂਤ ਪਹਾੜੀ ਰਾਜਿਆਂ ਨੇ ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਨੂੰ ਮਾਨਤਾ ਦੇਣ ਅਤੇ ਤਨਖਾਹ ਦੇਣ ਤੋਂ ਇਨਕਾਰ ਕਰ ਦਿੱਤਾ ਸੀ। ਸ਼ਰਧਾਂਜਲੀ, ਅਲੀਫ਼ ਖਾਨ ਨੂੰ ਉਹਨਾਂ ਨੂੰ ਰੱਖਣ ਦਾ ਹੁਕਮ ਦਿੱਤਾ ਗਿਆ। \n\n ਭੀਮ ਚੰਦ ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਪਹਾੜੀ ਰਾਜੇ ਇੱਕ ਗੱਠਜੋੜ ਬਣਾਉਂਦੇ ਹਨ, ਅਤੇ ਗੁਰੂ ਜੀ ਤੋਂ ਸਮਰਥਨ ਮੰਗਦੇ ਹਨ। ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਨੇ ਗੱਠਜੋੜ ਨੂੰ ਸਵੀਕਾਰ ਕੀਤਾ, ਅਤੇ ਨਿੱਜੀ ਤੌਰ 'ਤੇ ਗਵਰਨਰ ਅਲੀਫ਼ ਦੇ ਵਿਰੁੱਧ ਫੌਜ ਦੀ ਅਗਵਾਈ ਕੀਤੀ। ਖ਼ਾਨ। ਸਿੱਖਾਂ ਅਤੇ ਪਹਾੜੀ ਰਾਜਿਆਂ ਦੀ ਸਾਂਝੀ ਫ਼ੌਜ ਨੇ ਲੜਾਈ ਜਿੱਤ ਲਈ। ਅਲਿਫ਼ ਖ਼ਾਨ ਆਪਣੀਆਂ ਲੱਤਾਂ ਵਿਚਕਾਰ ਪੂਛ ਰੱਖ ਕੇ ਬਚ ਨਿਕਲਿਆ।\n\n ਲੜਾਈ ਦੇ ਕੁਝ ਦਿਨਾਂ ਬਾਅਦ, ਭੀਮ ਚੰਦ ਨੇ ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਨੂੰ ਧੋਖਾ ਦਿੱਤਾ ਅਤੇ ਮੁਗ਼ਲਾਂ ਨਾਲ ਗੱਠਜੋੜ ਕਰ ​​ਲਿਆ।",
    },
    {
      language: "en",
      tittel: "1691",
      undertittel: "The Battle of Nadaun – Alliance and Betrayal",
      image: "/1691.jpg",
      mp3: "/en/1691-en.mp3",
      tekst: "While the Akal Sena is fighting the hill kings, Emperor Aurangzeb is busy with military operations in southern India. \n\n When he receives the reports of the situation in Punjab, that the Rajput hill kings refused to recognize the Moghul emperor and pay tribute, Alif Khan is ordered to put them in place. \n\n The hill kings led by Bhim Chand form an alliance, and ask Guru ji for support. Guru Gobind Rai accepts the alliance, and personally leads the army against the governor Alif Khan. The combined army of the Sikhs and the hill kings wins the battle. Alif Khan escapes with his tail between his legs. \n\n After a few days of the battle, Bhim Chand betrays Guru Gobind Rai and allies himself with the Mughals.",
    },
  ];

export default function Home() {
  return (
    <main>
      <Hero translations={translations}/>
    </main>
  );
}
