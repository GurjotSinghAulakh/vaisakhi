"use client";

import React from "react";
import Hero from "@/components/Hero";

const translations = [
    {
      language: "no",
      tittel: "1665",
      undertittel: "Chakk Nanaki blir konstruert",
      image: "/1665.png",
      mp3: "/no/1665-no.mp3",
      tekst:
        "Guru Tegh Bahadur ji kjøper land for 500 rupee av Rani Champa av Bilaspur. Byen ble kalt for Chakk Nanaki i minne om hans mor, som også var kona til Guru Hargobind Sahib ji. Byen ble senere omdøpt til Anandpur. \n\n Beliggenheten til Chakk Nanaki/Anandpur hadde flere strategiske fordeler: Den var omringet av elven Satluj på den ene siden, og høye fjell og tykk skog på de andre sidene. \n\n Det var også et fruktbart område, som kunne gi to-tre avlinger i året. Chakk Nanaki/Anandpur var derfor i stand til å være en selvforsynt bystat. \n\n Byen lå i en fredfull sone og var skjermet fra mogul invasjoner, i motsetning til tidligere sikh-sentre som Kartarpur og Amritsar, som opplevde flere invasjoner." ,
    },
    {
      language: "pu",
      tittel: "1665",
      undertittel: "ਖਾਲਸੇ ਦੇ ਜਨਮ ਅਸਥਾਨ ਸ਼੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦਾ ਪਿਛੋਕੜ",
      image: "/1665.png",
      mp3: "",
      tekst:
        "1665 ਈਸਵੀ ਵਿੱਚ ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦਾ ਪਹਿਲਾ ਨਾਂ ਚੱਕ ਨਾਨਕੀ ਸੀ।ਜਿਸ ਨੂੰ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਸਾਹਿਬ ਜੀ ਨੇ 500 ਰੁਪਏ ਵਿੱਚ ਬਿਲਾਸਪੁਰ ਦੀ ਮਹਾਂਰਾਨੀ ਚੰਪਾ ਤੋ ਖਰੀਦਿਆਂ ਸੀ। ਗੁਰੂ ਜੀ ਨੇ ਇਸ ਅਸਥਾਨ ਦਾ ਨਾਂ ਆਪਣੀ ਮਾਤਾ ਜੀ ਦੇ ਨਾਮ ਤੇ ਚੱਕ ਨਾਨਕੀ ਰੱਖਿਆ। ਜਿਸ ਨੂੰ ਅੱਜ ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਜੀ ਦੇ ਨਾਂ ਨਾਲ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ। \n ਚੱਕ ਨਾਨਕੀ/ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਜੀ ਦੇ ਇੱਕ ਪਾਸੇ ਉਂਚੀਆਂ ਪਹਾੜੀਆ ਅਤੇ ਦੁਸਰੇ ਪਾਸੇ ਸੱਤਲੁਜ ਦਰਿਆ ਵਗਦਾ ਹੈ। \n ਚੱਕ ਨਾਨਕੀ/ ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਜ਼ਮੀਨ ਉਪਜਾਉ ਹੋਣ ਕਾਰਨ ਹਰ ਸਾਲ ਤਿੰਨ ਫਸਲਾਂ ਦੀ ਪੈਦਾਵਾਰ ਹੁੰਦੀ ਹੈ।ਜੋ ਇਲਾਕੇ ਦੀ ਅਨਾਜ਼ ਦੀ ਖਪਤ ਨੂੰ ਪੂਰੀ ਕਰਦੀ ਹੈ। \n ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਇਕ ਪਾਸਿਉ ਪਹਾੜੀਆਂ ਕਾਰਨ ਬਹੁਤ ਸ਼ਾਤਮਈ ਇਲਾਕਾ ਹੈ। ਜਿਸ ਨਾਲ ਮੁਗਲਾਂ ਦੇ ਹਮਲਿਆਂ ਤੋ ਬਚਾਅ ਸੀ।ਜੋ ਕਿ ਸਿੱਖਾਂ ਦੇ ਕੇਂਦਰ ਸ੍ਰੀ ਅੰਮਿਤਸਰ ਸਾਹਿਬ ਅਤੇ ਸ੍ਰੀ ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ ਨਹੀਂ ਸੀ ਇਥੇ ਮੁਗਲਾਂ ਨੇ ਅਨੇਕਾਂ ਹੀ ਹਮਲੇ ਕੀਤੇ।",
    },
    {
      language: "en",
      tittel: "1665",
      undertittel: "Chakk Nanaki is constructed",
      image: "/1665.png",
      mp3: "/en/1665-en.mp3",
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
