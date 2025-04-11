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
      tekst: "ਇਧਰ ਅਕਾਲ ਸੈਨਾ ਪਹਾੜੀ ਰਾਜਿਆ ਵਿਰੁਧ ਲੜ ਰਹੀ ਸੀ,ਉਧਰ ਦੱਖਣੀ ਭਾਰਤ ਵਿੱਚ ਸਮਰਾਟ ਔਰੰਗਜੇਬ ਤਬਾਹੀ ਮਚਾ ਰਿਹਾ ਸੀ। \n ਜਦੋ ਔਰੰਗਜੇਬ ਨੂੰ ਪੰਜਾਬ ਦੇ ਹਾਲਾਤਾ ਦਾ ਪਤਾ ਲੱਗਾ ਕਿ ਰਾਜਪੂਤ ਪਹਾੜੀ ਰਾਜੇ ਮੁਗਲ ਸਮਰਾਟ ਨੂੰ ਟੈਕਸ ਨਹੀਂ ਦਿੰਦੇ ਅਤੇ ਬਾਗੀ ਹਨ ਤਾਂ ਅਲੀਫ ਖਾਨ ਨੂੰ ਹੁਕਮ ਦਿੱਤਾ ਕਿ ਰਾਜਿਆ ਨੂੰ ਸਬਕ ਸਿਖਾ ਕੇ ਆਉ। \n ਭੀਮ ਚੰਦ ਦੀ ਅਗਵਾਈ ਹੇਠ ਪਹਾੜੀ ਰਾਜਿਆ ਨੇ ਇਕੱਠ ਕੀਤਾ ਅਤੇ ਗੁਰੂ ਜੀ ਨੂੰ ਮੱਦਦ ਕਰਨ ਲਈ ਬੇਨਤੀ ਕੀਤੀ।ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਨੇ ਬੇਨਤੀ ਪ੍ਰਵਾਨ ਕੀਤੀ ਅਤੇ ਆਪ ਅਗਵਾਈ ਕਰਕੇ ਅਲੀਫ ਖਾਨ ਵਿਰੁਧ ਜੰਗ ਲੜਿਆ। ਸਿੱਖਾ ਅਤੇ ਪਹਾੜੀ ਰਾਜਿਆ ਦੀ ਜਿੱਤ ਹੋਈ। ਅਲੀਫ ਖਾਨ ਪਿੱਠ ਦਿੱਖਾ ਕੇ ਭੱਜ ਗਿਆ। \n ਇਸ ਜੰਗ ਤੋਂ ਕੁਝ ਦਿਨਾਂ ਬਾਅਦ ਭੀਮ ਚੰਦ ਗੁਰੂ ਜੀ ਨੂੰ ਧੋਖਾ ਦੇ ਕੇ ਮੁਗਲ ਰਾਜਿਆਂ ਨਾਲ ਜਾ ਰੱਲਿਆ।"
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
