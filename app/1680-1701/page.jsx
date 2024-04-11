"use client";

import React from "react";
import Hero from "@/components/Hero";

const translations = [
    {
      language: "no",
      tittel: "1680-1701",
      undertittel: "Befestning av byen Anandpur: Panj Qille og Takt Shri Keshgarh Sahib",
      image: "/1680-1701.png",
      mp3: "/no/1680-1701-no.mp3",
      tekst: "Rundt 1680-1701 ble 5 festninger bygget. Disse utgjorde forsvaret til Khalsa fauj. Festningene var koblet til hverandre gjennom passasjer og tunneler. \n\n Qila Anandgarh Sahib: Hovedfestningen, den sterkeste av fem. Det var her hovedbolken av Khalsa fauj ble plassert. Ble aldri beseiret, selv under masse kanonild og flere beleiringsforsøk.\n\n Qila Lohgarh Sahib: Nest sterkeste festning. Innehold våpenproduksjonsfabrikk. Under konfliktene med fjellkongene, nølte de å angripe \"Jernfestningen\" fordi dens dør ikke kunne brytes. Det er her Bhai Bachittar Singh beseirer den kraftige elefanten.\n\n Qila Holgarh Sahib: Hola Mohalla - ble brukt for å simulere krig og øve på krigsformasjoner.\n\n Qila Fatehgarh Sahib: Navngitt etter Baba Fateh Singh ji. Også en påminnelse om seirene til Khalsa mot mughalene og fjellkongene.\n\n Qila Taragarh Sahib: Bygget på utkanten av Anandpur, for å stoppe fjellkongenes hær på forhindre tilgangen til byen. Bygget på toppen av fjell for å se aktivitene til Kehlur.\n\n Takht Shri Keshgarh Sahib: Fikk navnet av 10. guru. Var ikke en festning, men var allikevel en viktig bastion. Første Amrit sanchar var her."
    },
    {
      language: "pu",
      tittel: "1680-1701",
      undertittel: "ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਪੰਜ ਪਿਆਰੇ ਅਤੇ ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ",
      image: "/1680-1701.png",
      mp3: "",
      tekst: "1680-1701 ਦੇ ਆਸ-ਪਾਸ 5 ਕਿਲੇ ਬਣਾਏ ਗਏ ਸਨ। ਇਹਨਾਂ ਨੇ ਖਾਲਸਾ ਫੌਜ ਦੀ ਰੱਖਿਆ ਕੀਤੀ। ਕਿਲੇ ਰਸਤਿਆਂ ਅਤੇ ਸੁਰੰਗਾਂ ਰਾਹੀਂ ਇੱਕ ਦੂਜੇ ਨਾਲ ਜੁੜੇ ਹੋਏ ਸਨ। \n\n ਕਿਲਾ ਅਨੰਦਗੜ੍ਹ ਸਾਹਿਬ: ਮੁੱਖ ਗੜ੍ਹ, ਪੰਜਾਂ ਵਿੱਚੋਂ ਸਭ ਤੋਂ ਮਜ਼ਬੂਤ। ਇੱਥੇ ਖਾਲਸਾ ਫੌਜ ਦਾ ਮੁੱਖ ਹਿੱਸਾ ਰੱਖਿਆ ਗਿਆ ਸੀ। ਭਾਰੀ ਤੋਪਾਂ ਦੀ ਗੋਲੀਬਾਰੀ ਅਤੇ ਘੇਰਾਬੰਦੀ ਦੀਆਂ ਕਈ ਕੋਸ਼ਿਸ਼ਾਂ ਦੇ ਬਾਵਜੂਦ ਕਦੇ ਵੀ ਹਾਰ ਨਹੀਂ ਸੀ।\n\nਕਿਲਾ ਲੋਹਗੜ੍ਹ ਸਾਹਿਬ: ਦੂਜਾ ਸਭ ਤੋਂ ਮਜ਼ਬੂਤ ​​ਕਿਲ੍ਹਾ। ਹਥਿਆਰ ਬਣਾਉਣ ਵਾਲੀ ਫੈਕਟਰੀ ਹੈ। ਪਹਾੜੀ ਰਾਜਿਆਂ ਨਾਲ ਟਕਰਾਅ ਦੇ ਦੌਰਾਨ, ਉਹ 'ਲੋਹੇ ਦੇ ਕਿਲੇ' 'ਤੇ ਹਮਲਾ ਕਰਨ ਤੋਂ ਝਿਜਕਦੇ ਸਨ ਕਿਉਂਕਿ ਇਸਦੇ ਦਰਵਾਜ਼ੇ ਨੂੰ ਤੋੜਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ ਸੀ। ਇਹ ਉਹ ਥਾਂ ਹੈ ਜਿੱਥੇ ਭਾਈ ਬਚਿੱਤਰ ਸਿੰਘ ਨੇ ਸ਼ਕਤੀਸ਼ਾਲੀ ਹਾਥੀ ਨੂੰ ਹਰਾਇਆ।\n\nਕਿਲਾ ਹੋਲਗੜ੍ਹ ਸਾਹਿਬ: ਹੋਲਾ ਮੁਹੱਲਾ - ਯੁੱਧ ਦੀ ਨਕਲ ਕਰਨ ਅਤੇ ਯੁੱਧ ਦੀਆਂ ਰਚਨਾਵਾਂ ਦਾ ਅਭਿਆਸ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਸੀ।\n\nਕਿਲਾ ਫਤਹਿਗੜ੍ਹ ਸਾਹਿਬ: ਬਾਬਾ ਫਤਹਿ ਸਿੰਘ ਜੀ ਦੇ ਨਾਮ 'ਤੇ ਰੱਖਿਆ ਗਿਆ। ਮੁਗਲਾਂ ਅਤੇ ਪਹਾੜੀ ਰਾਜਿਆਂ ਵਿਰੁੱਧ ਖਾਲਸੇ ਦੀਆਂ ਜਿੱਤਾਂ ਦੀ ਵੀ ਯਾਦ ਦਿਵਾਉਂਦਾ ਹੈ।\n\nਕਿਲਾ ਤਾਰਾਗੜ੍ਹ ਸਾਹਿਬ: ਅਨੰਦਪੁਰ ਦੇ ਬਾਹਰਵਾਰ, ਪਹਾੜੀ ਰਾਜਿਆਂ ਦੀ ਫੌਜ ਨੂੰ ਸ਼ਹਿਰ ਤੱਕ ਪਹੁੰਚਣ ਤੋਂ ਰੋਕਣ ਲਈ ਬਣਾਇਆ ਗਿਆ ਸੀ। ਕੇਹਲੂਰ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਨੂੰ ਦੇਖਣ ਲਈ ਪਹਾੜ ਦੀ ਚੋਟੀ 'ਤੇ ਬਣਾਇਆ ਗਿਆ।\n\n ਤਖ਼ਤ ਸ਼੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ: 10ਵੇਂ ਗੁਰੂ ਦੁਆਰਾ ਨਾਮ ਦਿੱਤਾ ਗਿਆ। ਕਿਲ੍ਹਾ ਨਹੀਂ ਸੀ, ਪਰ ਫਿਰ ਵੀ ਇਕ ਮਹੱਤਵਪੂਰਨ ਗੜ੍ਹ ਸੀ। ਇੱਥੇ ਪਹਿਲਾਂ ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ ਹੋਇਆ।"    
    },
    {
      language: "en",
      tittel: "1680-1701",
      undertittel: "Fortification of the city of Anandpur: Panj Wille and Takht Sri Keshgarh Sahib",
      image: "/1680-1701.png",
      mp3: "/en/1680-1701-en.mp3",
      tekst: "Around 1680-1701, 5 forts were built. These formed the defense of the Khalsa fauj. The forts were connected to each other through passages and tunnels. \n\n Qila Anandgarh Sahib: The main fort, the strongest of five. This was the main stronghold of the Khalsa fauj was placed. Was never defeated, even under heavy cannon fire and several siege attempts.\n\n Qila Lohgarh Sahib: Second strongest fortress. Contained weapons manufacturing factory. During the conflicts with the mountain kings, they hesitated to attack the \"Iron Fortress\" because its door could not is broken. This is where Bhai Bachittar Singh defeats the mighty elephant.\n\n Qila Holgarh Sahib: Hola Mohalla - was used to simulate war and practice war formations.\n\n Qila Fatehgarh Sahib: Named after Baba Fateh Singh ji. Also a reminder of the victories of the Khalsa against the Mughals and the Mountain Kings.\n\n Qila Taragarh Sahib: Built on the outskirts of Anandpur, to stop the Mountain Kings' army from preventing access to the city.Built on top of the mountain to watch the activities of Kehlur.\n\n Takht Shri Keshgarh Sahib: Named by 10th Guru. Was not a fortress, but was still an important bastion. First Amrit sanchar was here."      
    },
  ];

export default function Home() {
  return (
    <main>
      <Hero translations={translations}/>
    </main>
  );
}
