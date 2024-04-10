"use client";

import React from "react";
import Hero from "@/components/Hero";

const translations = [
    {
      language: "no",
      tittel: "Hvem er Panj Pyare",
      mp3: "/1699-no.mp3",
      tekst: "Bhai Daya Singh (1661-1708) \n•	Den første av Panj Pyare som sto frem for å ofre sitt hode til Guru ji var Bahi Daya Ram, og var fra Sialkot i Punjab (dagens Pakistan). \n•	Hans kaste var Khatri, som er kjent for å jobbe med handel. \n•	Daya betyr å være barmhjertig, snill og medfølende. \n•	Han var 38 år da han innviet seg, og ble martyr i Nanded i 1708, i en alder av 47 år. \n\nBhai Dharam Singh (1699-1708) \n•	Den andre av Panj Pyare som sto frem het Bhai Dharam Das, og var fra Meerut i Uttar Pardesh. \n•	Hans kaste var Jatt, som er mest kjent for å drive med jordbruk. \n•	Dharam betyr å være moralsk. \n•	Han var 33 år da han innviet seg, og ble martyr i Nanded i 1708, i en alder av 42 år. \n\nBhai Himmat Singh (1661-1705) \n•	Den tredje av Panj Pyare som sto frem het Bhai Himmat Rai, som var fra dagens Odisha. \n•	Hans kaste var Jheeaur, som er vannbærere. \n•	Himmat betyr modig. \n•	Han var 38 år da han innviet seg, og ble martyr i Chamkaur i 1705, i en alder av 44 år. \n\n Bhai Mohkam Singh (1663-1705) \n•	Den fjerde som sto frem het Bhai Mohkam Chand, og var fra Gujrat. \n•	Hans kaste var Chhimba, som er mest kjent for å jobbe med skredderi, klær og lær. \n•	Mohkam betyr å være veldig sterk og bestemt.  \n•	Han var 36 år da han innviet seg, og ble martyr i Chamkaur i 1705, i en alder av 44 år. \n\nBhai Sahib Singh (1662-1705) \n•	Den femte og den siste personen som sto frem var Bhai Sahib Chand. \n•	Hans kaste var Nai, en som klippet håret til folk. \n•	Sahib betyr kongelig. \n•	Han var 36 år da han innviet seg, og ble martyr i Chamkaur i 1705, i en alder av 44 år."
    },
    {
      language: "pu",
      tittel: "ਪੰਜ ਪਿਆਰੇ ਕੌਣ ਹਨ",
      mp3: "/1699-no.mp3",
      tekst: "ਭਾਈ ਦਇਆ ਸਿੰਘ (1661-1708) \n• ਗੁਰੂ ਜੀ ਨੂੰ ਆਪਣਾ ਸੀਸ ਭੇਟ ਕਰਨ ਲਈ ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਬਹਿ ਦਇਆ ਰਾਮ ਸੀ, ਅਤੇ ਪੰਜਾਬ (ਮੌਜੂਦਾ ਪਾਕਿਸਤਾਨ) ਦੇ ਸਿਆਲਕੋਟ ਤੋਂ ਸੀ। ਜਾਤ ਖੱਤਰੀ ਸੀ, ਜੋ ਵਪਾਰ ਵਿੱਚ ਕੰਮ ਕਰਨ ਲਈ ਜਾਣੀ ਜਾਂਦੀ ਹੈ। \n• ਦਯਾ ਦਾ ਅਰਥ ਹੈ ਦਇਆਵਾਨ, ਦਿਆਲੂ ਅਤੇ ਦਇਆਵਾਨ ਹੋਣਾ। \n• ਆਪਣੀ ਸ਼ੁਰੂਆਤ ਦੇ ਸਮੇਂ ਉਹ 38 ਸਾਲ ਦੇ ਸਨ, ਅਤੇ 1708 ਵਿੱਚ ਨਾਂਦੇੜ ਵਿਖੇ ਸ਼ਹੀਦ ਹੋਏ ਸਨ। ਉਮਰ 47 ਸਾਲ।\n\nਭਾਈ ਧਰਮ ਸਿੰਘ (1699-1708) \n• ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਦੂਜੇ ਪੰਜ ਪਿਆਰਿਆਂ ਦਾ ਨਾਂ ਭਾਈ ਧਰਮ ਦਾਸ ਸੀ, ਅਤੇ ਉਹ ਉੱਤਰ ਪ੍ਰਦੇਸ਼ ਦੇ ਮੇਰਠ ਤੋਂ ਸਨ। \n• ਉਹਨਾਂ ਦੀ ਜਾਤ ਜੱਟ ਸੀ, ਜੋ ਕਿ ਸਭ ਤੋਂ ਵਧੀਆ ਹੈ। ਖੇਤੀਬਾੜੀ ਕਰਨ ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਹਨ। \n• ਧਰਮ ਦਾ ਅਰਥ ਹੈ ਨੈਤਿਕ ਹੋਣਾ। \n• ਉਹ 33 ਸਾਲਾਂ ਦਾ ਸੀ ਜਦੋਂ ਉਸਨੇ ਆਪਣੇ ਆਪ ਨੂੰ ਪਵਿੱਤਰ ਕੀਤਾ, ਅਤੇ 42 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ 1708 ਵਿੱਚ ਨਾਂਦੇੜ ਵਿੱਚ ਸ਼ਹੀਦ ਹੋ ਗਏ। \n\nਭਾਈ ਹਿੰਮਤ ਸਿੰਘ (1661) -1705 ) \n• ਅੱਗੇ ਆਏ ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਤੀਜੇ ਨੂੰ ਭਾਈ ਹਿੰਮਤ ਰਾਏ ਕਿਹਾ ਜਾਂਦਾ ਸੀ, ਜੋ ਅਜੋਕੇ ਉੜੀਸਾ ਤੋਂ ਸੀ। \n• ਉਨ੍ਹਾਂ ਦੀ ਜਾਤ ਝਿਓਰ ਸੀ, ਜੋ ਪਾਣੀ ਦੇ ਵਾਹਕ ਹਨ। \n• ਹਿੰਮਤ ਦਾ ਅਰਥ ਹੈ ਬਹਾਦਰ। n• ਉਹਨਾਂ ਦੀ ਉਮਰ 38 ਸਾਲ ਸੀ ਤਦ ਉਹਨਾਂ ਨੇ ਆਪਣੇ ਆਪ ਨੂੰ ਪਵਿੱਤਰ ਕੀਤਾ, ਅਤੇ 44 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ 1705 ਵਿੱਚ ਚਮਕੌਰ ਵਿਖੇ ਸ਼ਹੀਦ ਹੋ ਗਏ। \n\n ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ (1663-1705) \n• ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਚੌਥੇ ਨੂੰ ਭਾਈ ਮੋਹਕਮ ਕਿਹਾ ਜਾਂਦਾ ਸੀ। ਚੰਦ, ਗੁਜਰਾਤ ਦਾ ਰਹਿਣ ਵਾਲਾ ਸੀ। \n• ਉਸਦੀ ਜਾਤ ਛਿੰਬਾ ਸੀ, ਜੋ ਕਿ ਸਿਲਾਈ, ਕੱਪੜੇ ਅਤੇ ਚਮੜੇ ਦੇ ਕੰਮ ਲਈ ਸਭ ਤੋਂ ਮਸ਼ਹੂਰ ਹੈ। \n• ਮੋਹਕਮ ਦਾ ਅਰਥ ਹੈ ਬਹੁਤ ਮਜ਼ਬੂਤ ​​ਅਤੇ ਦ੍ਰਿੜ ਹੋਣਾ। \n• ਉਹ 36 ਸਾਲਾਂ ਦਾ ਸੀ ਜਦੋਂ ਉਸਨੇ ਆਪਣੇ ਆਪ ਨੂੰ ਪਵਿੱਤਰ ਕੀਤਾ, ਅਤੇ 44 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ 1705 ਵਿੱਚ ਚਮਕੌਰ ਵਿੱਚ ਸ਼ਹੀਦ ਹੋ ਗਿਆ। \n\nਭਾਈ ਸਾਹਿਬ ਸਿੰਘ (1662-1705) \n• ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਪੰਜਵੇਂ ਅਤੇ ਆਖਰੀ ਵਿਅਕਤੀ ਭਾਈ ਸਾਹਿਬ ਚੰਦ ਸਨ। \n• ਉਸਦੀ ਜਾਤ ਨਾਈ ਸੀ, ਜੋ ਲੋਕਾਂ ਦੇ ਵਾਲ ਕੱਟਦੀ ਸੀ। \n• ਸਾਹਿਬ ਦਾ ਅਰਥ ਹੈ ਸ਼ਾਹੀ। \n• ਉਹ 36 ਸਾਲਾਂ ਦਾ ਸੀ ਜਦੋਂ ਉਸਨੇ ਆਪਣੇ ਆਪ ਨੂੰ ਪਵਿੱਤਰ ਕੀਤਾ, ਅਤੇ 44 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ 1705 ਵਿੱਚ ਚਮਕੌਰ ਵਿਖੇ ਸ਼ਹੀਦ ਹੋ ਗਿਆ।", 
    },
    {
      language: "en",
      tittel: "Who is Panj Pyare",
      mp3: "/1699-no.mp3",
      tekst: "Bhai Daya Singh (1661-1708) \n• The first of the Panj Pyare to come forward to offer his head to Guru ji was Bahi Daya Ram, and was from Sialkot in Punjab (present-day Pakistan). \n• His caste was Khatri, who is known to work in trade. \n• Daya means to be merciful, kind and compassionate. \n• He was 38 years old at the time of his initiation, and was martyred in Nanded in 1708, at the age of 47 . \n\nBhai Dharam Singh (1699-1708) \n• The second Panj Pyare to come forward was named Bhai Dharam Das, and was from Meerut in Uttar Pardesh. \n• His caste was Jatt, which is best known for to do agriculture. \n• Dharam means to be moral. \n• He was 33 years old when he consecrated himself, and was martyred in Nanded in 1708, at the age of 42. \n\nBhai Himmat Singh (1661-1705 ) \n• The third of the Panj Pyare who came forward was called Bhai Himmat Rai, who was from present-day Odisha. \n• His caste was Jheeaur, who are water carriers. \n• Himmat means brave. \n• He was 38 years old then he consecrated himself, and was martyred at Chamkaur in 1705, at the age of 44. \n\n Bhai Mohkam Singh (1663-1705) \n• The fourth to come forward was called Bhai Mohkam Chand, and was from Gujrat. \n• His caste was Chhimba, which is best known for working in tailoring, clothing and leather. \n• Mohkam means to be very strong and determined. \n• He was 36 years old when he consecrated himself, and was martyred in Chamkaur in 1705, at the age of 44. \n\nBhai Sahib Singh (1662-1705) \n• The fifth and last person to come forward was Bhai Sahib Chand. \n• His caste was Nai, one who cut people's hair. \n• Sahib means royal. \n• He was 36 years old when he consecrated himself, and was martyred at Chamkaur in 1705, at the age of 44.",
    },
  ];

export default function Home() {
  return (
    <main>
      <Hero translations={translations}/>
    </main>
  );
}
