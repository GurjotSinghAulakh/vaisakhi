"use client";

import React from "react";
import Hero from "@/components/Hero";

const translations = [
    {
      language: "no",
      tittel: "1665",
      undertittel: "Chakk Nanaki blir konstruert",
      image: "/1665.png",
      mp3: "/1665-no.mp3",
      tekst:
        "Guru Tegh Bahadur ji kjøper land for 500 rupee av Rani Champa av Bilaspur. Byen ble kalt for Chakk Nanaki i minne om hans mor, som også var kona til Guru Hargobind Sahib ji. Byen ble senere omdøpt til Anandpur. \n\n Beliggenheten til Chakk Nanaki/Anandpur hadde flere strategiske fordeler: Den var omringet av elven Satluj på den ene siden, og høye fjell og tykk skog på de andre sidene. \n\n Det var også et fruktbart område, som kunne gi to-tre avlinger i året. Chakk Nanaki/Anandpur var derfor i stand til å være en selvforsynt bystat. \n\n Byen lå i en fredfull sone og var skjermet fra mogul invasjoner, i motsetning til tidligere sikh-sentre som Kartarpur og Amritsar, som opplevde flere invasjoner." ,
    },
    {
      language: "pu",
      tittel: "1605",
      undertittel: "ਚੱਕ ਨਾਨਕੀ ਦਾ ਨਿਰਮਾਣ ਹੋਇਆ",
      image: "/1665.png",
      mp3: "",
      tekst:
        "ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਨੇ ਬਿਲਾਸਪੁਰ ਦੀ ਰਾਣੀ ਚੰਪਾ ਤੋਂ 500 ਰੁਪਏ ਵਿੱਚ ਜ਼ਮੀਨ ਖਰੀਦੀ। ਉਨ੍ਹਾਂ ਦੀ ਮਾਤਾ, ਜੋ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੀ ਪਤਨੀ ਵੀ ਸਨ, ਦੀ ਯਾਦ ਵਿੱਚ ਇਸ ਨਗਰ ਦਾ ਨਾਂ ਚੱਕ ਨਾਨਕੀ ਰੱਖਿਆ ਗਿਆ ਸੀ। ਬਾਅਦ ਵਿੱਚ ਇਸ ਸ਼ਹਿਰ ਦਾ ਨਾਂ ਬਦਲ ਕੇ ਆਨੰਦਪੁਰ ਰੱਖ ਦਿੱਤਾ ਗਿਆ। \n\n ਚੱਕ ਨਾਨਕੀ/ਅਨੰਦਪੁਰ ਦੀ ਸਥਿਤੀ ਦੇ ਕਈ ਰਣਨੀਤਕ ਫਾਇਦੇ ਸਨ: ਇਹ ਇੱਕ ਪਾਸੇ ਸਤਲੁਜ ਦਰਿਆ ਨਾਲ ਘਿਰਿਆ ਹੋਇਆ ਸੀ, ਅਤੇ ਦੂਜੇ ਪਾਸੇ ਉੱਚੇ ਪਹਾੜ ਅਤੇ ਸੰਘਣੇ ਜੰਗਲ ਸਨ। \n\n ਇਹ ਇੱਕ ਉਪਜਾਊ ਖੇਤਰ ਵੀ ਸੀ, ਜੋ ਸਾਲ ਵਿੱਚ ਦੋ ਜਾਂ ਤਿੰਨ ਫ਼ਸਲਾਂ ਪੈਦਾ ਕਰ ਸਕਦਾ ਸੀ। ਇਸ ਲਈ ਚੱਕ ਨਾਨਕੀ/ਆਨੰਦਪੁਰ ਇੱਕ ਸਵੈ-ਨਿਰਭਰ ਸ਼ਹਿਰ-ਰਾਜ ਬਣਨ ਦੇ ਯੋਗ ਸੀ। \n\n ਇਹ ਸ਼ਹਿਰ ਇੱਕ ਸ਼ਾਂਤਮਈ ਖੇਤਰ ਵਿੱਚ ਸਥਿਤ ਸੀ ਅਤੇ ਮੁਗਲ ਹਮਲਿਆਂ ਤੋਂ ਪਨਾਹ ਦਿੱਤੀ ਗਈ ਸੀ, ਕਰਤਾਰਪੁਰ ਅਤੇ ਅੰਮ੍ਰਿਤਸਰ ਵਰਗੇ ਪੁਰਾਣੇ ਸਿੱਖ ਕੇਂਦਰਾਂ ਦੇ ਉਲਟ, ਜਿਨ੍ਹਾਂ ਨੇ ਕਈ ਹਮਲਿਆਂ ਦਾ ਅਨੁਭਵ ਕੀਤਾ ਸੀ।",
    },
    {
      language: "en",
      tittel: "1600",
      undertittel: "Chakk Nanaki is constructed",
      image: "/1665.png",
      mp3: "/1665-en.mp3",
      tekst:
        "Guru Tegh Bahadur ji buys land for 500 rs from Rani Champa of Bilaspur. The town was named Chakk Nanaki in memory of his mother, who was also the wife of Guru Hargobind Sahib ji. The town was later renamed Anandpur. ​\n\n The location of Chakk Nanaki/Anandpur had several strategic advantages: it was surrounded by the river Satluj on one side, and high mountains and thick forests on the other sides. ​\n\n It was also a fertile area, which could produce two or three crops a year. Chakk Nanaki/Anandpur was therefore able to be a self-sufficient city-state. ​\n\n The city was located in a peaceful zone and was sheltered from Mughal invasions, unlike earlier Sikh centers such as Kartarpur and Amritsar, which experienced several invasions. ​",
    },
  ];

export default function Home() {
  return (
    <main>
      <Hero translations={translations}/>
    </main>
  );
}
