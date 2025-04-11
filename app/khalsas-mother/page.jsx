"use client";

import React from "react";
import Hero from "@/components/Hero";

const translations = [
    {
      language: "no",
      tittel: "Moren til Khalsa",
      image: "/khalsas-mother.png",
      mp3: "/no/khalsas-mother-no.mp3",
      tekst: "Akkurat som Guru Gobind Singh Ji regnes som Khalsaens far, blir Mata Sahib Kaur regnet som Khalsaens mor.  \n\n Hun var en bemerkelsesverdig kvinne og naturlig  leder, som tok rollen sin som den symbolske moren til sikhene på alvor. \n\n Mata Sahib Kaur spilte en avgjørende rolle i ritualet Khande Di Pahul, som blant annet innebærer at Panj Pyare leser Nitnem mens man rører Amrit i en jernskål med en Khanda. Under det første Amrit Sanchar, puttet hun patashe i jernskålen, som lages av sukker, som et tegn på at sikher skulle også være empatiske og barmhjertige i tillegg til å være sterke og modige. \n\n Når en sikh tar Amrit fra Panj Pyare er de født i Nanaks Kongehus. For å skape et egalitært samfunn anser alle sikher Keshgarh Sahib i Anandpur som sitt fødested og Mata Sahib Kaur som deres mor."
    },
    {
      language: "pu",
      tittel: "ਖਾਲਸੇ ਦੀ ਮਾਤਾ",
      image: "/khalsas-mother.png",
      mp3: "",
      tekst: "ਜਿਸ ਤਰ੍ਹਾਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੂੰ ਖਾਲਸੇ ਦਾ ਪਿਤਾ ਆਖਿਆ ਜਾਂਦਾ ਹੈ ਇਸੇ ਤਰ੍ਹਾਂ ਮਾਤਾ ਸਾਹਿਬ ਕੌਰ ਜੀ ਖਾਲਸੇ ਦੀ ਮਾਂ ਹੈ। \n ਮਾਤਾ ਜੀ ਇਕ ਕਮਾਲ ਦੀ ਵਾਗਡੋਰ ਸੰਭਾਲਣ ਵਾਲ਼ੇ ਸਨ । ਜਿਹਨਾ ਨੂੰ ਖਾਲਸੇ ਦੀ ਮਾਂ ਅਖਵਾਉਣ ਦਾ ਦਰਜਾ সিজিঙ্গা। \n ਮਾਤਾ ਜੀ ਨੇ ਖੰਡੇ ਦੀ ਪਾਹੁਲ ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ ਸਮੇਂ ਇਕ ਅਹਿਮ ਰੋਲ ਅਦਾ ਕੀਤਾ। ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ ਵੇਲੇ ਪੰਜ ਪਿਆਰੇ ਪੰਜ ਬਾਣੀਆਂ ਦਾ ਪਾਠ ਕਰ ਰਹੇ ਸੀ ਅਤੇ ਅੰਮ੍ਰਿਤ ਵਾਲੇ ਬਾਟੇ ਵਿੱਚ ਖੰਡਾ ਫੇਰਿਆ ਜਾ ਰਿਹਾ ਸੀ ਤਾਂ ਮਾਤਾ ਜੀ ਨੇ ਪਤਾਸੇ ਲਿਆ ਕੇ ਅੰਮ੍ਰਿਤ ਵਿੱਚ ਪਾ ਦਿੱਤੇ । ਜਿਸ ਨੇ ਅੰਮ੍ਰਿਤਧਾਰੀ ਸਿੱਖਾ ਵਿੱਚ ਹਮਦਰਦੀ ਦਿਆਲਤਾ ਅਤੇ ਬਹਾਦਰੀ ਭਰ ਦਿੱਤੀ। \n ਜਦੋ ਇਕ ਪਰਾਣੀ ਅੰਮ੍ਰਿਤ ਛਕਦਾ ਹੈ ਤਾਂ ਉਸ ਦਾ ਜਨਮ ਗੁਰੂ ਨਾਨਕ ਦੇ ਦਰਬਾਰ ਵਿੱਚ ਹੋ ਜਾਂਦਾ ਹੈ। ਅੰਮ੍ਰਿਤਧਾਰੀ ਸਿੱਖ ਨੂੰ ਇਕ ਸਮਾਨਤਾਵਾਦੀ ਸਮਾਜ ਬਣਾਉਣ ਲਈ,ਉਸ ਦਾ ਪਿਤਾ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ, ਮਾਤਾ ਸਾਹਿਬ ਕੌਰ ਜੀ ਅਤੇ ਵਾਸੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦਾ ਬਣ ਜਾਂਦਾ ਹੈ।", 
    },
    {
      language: "en",
      tittel: "The mother of the Khalsa",
      image: "/khalsas-mother.png",
      mp3: "/en/khalsas-mother-en.mp3",
      tekst: "Just as Guru Gobind Singh Ji is considered the father of the Khalsa, Mata Sahib Kaur is considered the mother of the Khalsa. \n\n She was a remarkable woman and natural leader, who took her role as the symbolic mother of the Sikhs seriously. \n\n Mata Sahib Kaur played a crucial role in the Khande Di Pahul ritual, which includes Panj Pyare reciting Nitnem while stirring Amrit in an iron bowl with a Khanda.During the first Amrit Sanchar, she put patashe in the iron bowl, which is made of sugar , as a sign that Sikhs should also be empathetic and compassionate in addition to being strong and courageous. \n\n When a Sikh takes Amrit from Panj Pyare they are born into Nanak's Royal House. To create an egalitarian society, all Sikhs consider Keshgarh Sahib in Anandpur as their birthplace and Mata Sahib Kaur as their mother.",
    },
  ];

export default function Home() {
  return (
    <main>
      <Hero translations={translations}/>
    </main>
  );
}
