"use client";

import React from "react";
import Hero from "@/components/Hero";

const translations = [
    {
      language: "no",
      tittel: "1699",
      undertittel: "Vaisakhi: Khalsa blir dannet",
      image: "/1699.jpg",
      mp3: "/1699-no.mp3",
      tekst: "I forkant av april, beordrer Guru Gobind Rai sikher til å samle seg i Anandpur. Nå var tiden moden for å sette rammeverket for sikhismen og det som ble uniformen til en sikh. \n\n Den 13. april 1699 samler mellom 50 000-100 000 sikher seg ved Keshgarh Sahib, Anandpur. Guru Gobind Rai Ji, med et sverd i hånda, ber 5 frivillige til å ofre seg: Bhai Daya Ram, Dharam Das, Himmat Rai, Mohkam Chand og Sahib Chand reiser seg én etter én. \n\n Etter ritualet, Khande di Pahul, ble disse omdøpt til: Bhai Daya Singh, Bhai Dharam Singh, Bhai Himmat Singh, Bhai Mohkam Singh og Bhai Sahib Singh. Guruji erklærte disse fem for sine «Panj Pyare», og første medlemmer av Khalsa, som er et sikh bror- og søsterskap. Ordet Khalsa betyr å være ren tvers igjennom. \n\n Guru Gobind Rai ba senere Panj Pyare om å innvie han i Khalsa, og dermed ble han til Guru Gobind Singh Ji. \n\n Medlemmer av Khalsaen skulle bære fem symboler: \n •	Kesh: uklipt hår – symbol på aksept. \n •	Kangha: kam – symbol på renhet. \n •	Kara: jern armbånd – symbol som minner om sikh prinsipper. \n •	Kirpan: dolk – symbol på det å stå opp for rettferdighet. \n •	Kachera: underbukse – symbol på å opprettholde høy karakter. \n\n Medlemmer av Khalsaen skulle videre bære navnene Singh (menn - løve) og Kaur (kvinner - løvinne/prinsesse)."
    },
    {
      language: "pu",
      tittel: "1699",
      undertittel: "ਵਿਸਾਖੀ: ਖਾਲਸਾ ਸਾਜਿਆ",
      image: "/1699.jpg",
      mp3: "/1699-no.mp3",
      tekst: "ਅਪ੍ਰੈਲ ਦੀ ਪੂਰਵ ਸੰਧਿਆ 'ਤੇ, ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਸਿੱਖਾਂ ਨੂੰ ਅਨੰਦਪੁਰ ਵਿੱਚ ਇਕੱਠੇ ਹੋਣ ਦਾ ਆਦੇਸ਼ ਦਿੰਦੇ ਹਨ। ਹੁਣ ਸਿੱਖ ਧਰਮ ਲਈ ਢਾਂਚਾ ਨਿਰਧਾਰਤ ਕਰਨ ਦਾ ਸਮਾਂ ਸੀ ਅਤੇ ਸਿੱਖ ਦੀ ਵਰਦੀ ਕੀ ਬਣ ਗਈ ਸੀ। \n\n 13 ਅਪ੍ਰੈਲ, 1699 ਨੂੰ, 50,000 -100,000 ਦੇ ਵਿਚਕਾਰ। ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ, ਅਨੰਦਪੁਰ ਵਿਖੇ ਸਿੱਖ ਇਕੱਠੇ ਹੋਏ ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਜੀ, ਹੱਥ ਵਿੱਚ ਤਲਵਾਰ, 5 ਵਲੰਟੀਅਰਾਂ ਨੂੰ ਆਪਣੇ ਆਪ ਨੂੰ ਕੁਰਬਾਨ ਕਰਨ ਲਈ ਕਹਿੰਦੇ ਹਨ: ਭਾਈ ਦਇਆ ਰਾਮ, ਧਰਮ ਦਾਸ, ਹਿੰਮਤ ਰਾਏ, ਮੋਹਕਮ ਚੰਦ ਅਤੇ ਸਾਹਿਬ ਚੰਦ ਇੱਕ ਇੱਕ ਕਰਕੇ ਉੱਠੇ।\n\n ਰਸਮ ਤੋਂ ਬਾਅਦ ਖੰਡੇ ਦੀ ਪਾਹੁਲ, ਇਹਨਾਂ ਦਾ ਨਾਮ ਬਦਲ ਕੇ ਰੱਖਿਆ ਗਿਆ: ਭਾਈ ਦਇਆ ਸਿੰਘ, ਭਾਈ ਧਰਮ ਸਿੰਘ, ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ, ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਅਤੇ ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ। ਇੱਕ ਸਿੱਖ ਭਾਈਚਾਰਾ ਅਤੇ ਭੈਣ-ਭਰਾ। ਖਾਲਸਾ ਸ਼ਬਦ ਦਾ ਅਰਥ ਹੈ ਸ਼ੁੱਧ ਰੂਪ ਵਿੱਚ ਅਤੇ ਰਾਹੀਂ। \n\n ਬਾਅਦ ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਰਾਏ ਨੇ ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਉਸ ਨੂੰ ਖਾਲਸਾ ਵਿੱਚ ਦੀ ਸ਼ੁਰੂਆਤ ਕਰਨ ਲਈ ਕਿਹਾ, ਅਤੇ ਇਸ ਤਰ੍ਹਾਂ ਉਹ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਬਣ ਗਏ। \n\n ਖਾਲਸੇ ਦੇ ਮੈਂਬਰ ਪੰਜ ਚਿੰਨ੍ਹ ਪਹਿਨਣੇ ਸਨ: \n • ਕੇਸ਼: ਕੱਟੇ ਹੋਏ ਵਾਲ - ਸਵੀਕਾਰਤਾ ਦਾ ਪ੍ਰਤੀਕ। \n • ਕੰਘਾ: ਕੰਘੀ - ਸ਼ੁੱਧਤਾ ਦਾ ਪ੍ਰਤੀਕ। \n • ਕੜਾ: ਲੋਹੇ ਦਾ ਕੰਗਣ - ਸਿੱਖ ਸਿਧਾਂਤਾਂ ਦੀ ਯਾਦ ਦਿਵਾਉਂਦਾ ਹੈ। \n • ਕਿਰਪਾਨ: ਖੰਜਰ - ਨਿਆਂ ਲਈ ਖੜ੍ਹੇ ਹੋਣ ਦਾ ਪ੍ਰਤੀਕ। \n • ਕਚਰਾ: ਅੰਡਰਪੈਂਟ - ਉੱਚੇ ਚਰਿੱਤਰ ਨੂੰ ਬਣਾਈ ਰੱਖਣ ਦਾ ਪ੍ਰਤੀਕ। \n\n ਖਾਲਸੇ ਦੇ ਮੈਂਬਰਾਂ ਦੇ ਨਾਂ ਸਿੰਘ (ਨਰ - ਸ਼ੇਰ) ਅਤੇ ਕੌਰ (ਮਾਦਾ - ਸ਼ੇਰਨੀ/ਰਾਜਕੁਮਾਰੀ) ਸਨ।",
    },
    {
      language: "en",
      tittel: "1699",
      undertittel: "Vaisakhi: Khalsa is formed",
      image: "/1699.jpg",
      mp3: "/1699-no.mp3",
      tekst: "On the eve of April, Guru Gobind Rai orders Sikhs to gather in Anandpur. Now was the time to set the framework for Sikhism and what became the uniform of a Sikh. \n\n On April 13, 1699, between 50,000 -100,000 Sikhs gather at Keshgarh Sahib, Anandpur Guru Gobind Rai Ji, sword in hand, asks 5 volunteers to sacrifice themselves: Bhai Daya Ram, Dharam Das, Himmat Rai, Mohkam Chand and Sahib Chand rise one by one .\n\n After the ritual, Khande di Pahul, these were renamed as: Bhai Daya Singh, Bhai Dharam Singh, Bhai Himmat Singh, Bhai Mohkam Singh and Bhai Sahib Singh. Guruji declared these five as his 'Panj Pyare', and first members of the Khalsa, which is a Sikh brotherhood and sisterhood. The word Khalsa means pure through and through. \n\n Guru Gobind Rai later asked Panj Pyare to initiate him into the Khalsa, and thus he became Guru Gobind Singh Ji. \n\n Members of the Khalsa were to wear five symbols: \n • Kesh: uncut hair - symbol of acceptance. \n • Kangha: comb - symbol of purity. \n • Kara: iron bracelet - symbol reminiscent of Sikh principles. \n • Kirpan: dagger – symbol of standing up for justice. \n • Kachera: underpants – symbol of maintaining high character. \n\n Members of the Khalsa were further to bear the names Singh (male - lion) and Kaur (female - lioness/princess).",
    },
  ];

export default function Home() {
  return (
    <main>
      <Hero translations={translations}/>
    </main>
  );
}
