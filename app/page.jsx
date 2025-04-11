"use client";

import React from "react";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../components/LanguageProvider";

const translations = [
  {
    language: "no",
    tittel: "Saka Anandpur da",
    undertittel: "I dag feirer vi at Khalsaen ble dannet, men hva ledet frem til det? \n Ta en dypdykk i historier knyttet til Anandpur, et sted som både former Guru Gobind Singh Ji og Khalsaen. \n Dette er Khalsaens fødested - bli bedre kjent med Anandpurs avgjørende rolle i å forsvare Guru Gobind Singh Ji og sikher fra intolerante makter. ",
    tekst: "Del 1",
    mp3: "no/saka-anandpur-da-no.mp3",
    images: [
      { url: '/1665.png' },
      { url: '/1675.jpg' },
      { url: '/1680-1701.png' },
      { url: '/1682-1688.png' },
      { url: '/1685.jpg' },
      { url: '/1688.jpg' },
      { url: '/1691.jpg' },
      { url: '/1693.jpg' },
      { url: '/1696.jpg' },
      { url: '/1697.jpg' },
      { url: '/1699.jpg' },
      { url: '/khalsas-mother.png' },
    ],
    pages: [
      { path: '/1665', name: '1665: Chakk Nanaki blir konstruert' },
      { path: '/1675', name: '1675: Arvtageren Gobind Rai' },
      { path: '/1680-1701', name: '1680-1701: Befestning av byen Anandpur: Panj Qille og Takt Shri Keshgarh Sahib' },
      { path: '/1682-1685-1688', name: '1682, 1685, og 1688: Tre slag mot Bhim Chand og andre fjellkonger' },
      { path: '/1688', name: '1688: Slaget ved Bhagani' },
      { path: '/1691', name: '1691: Slaget ved Nadaun – allianse og forræderi' },
      { path: '/1693', name: '1693: Mogul-Keiser Aurangzebs erklæring' },
      { path: '/1694', name: '1694: Rustam Khans overraskelsesangrep på Anandpur' },
      { path: '/1696', name: '1696: Slaget ved Guler' },
      { path: '/1697', name: '1697: Avtale om våpenhvile mellom sikhene og mogulene' },
      { path: '/1699', name: '1699: Vaisakhi: Khalsa blir dannet' },
      { path: '/panj-pyare', name: 'Hvem er Panj Pyare' },
      { path: '/khalsas-mother', name: 'Moren til Khalsa' },
    ],
  },
  {
    language: "pu",
    tittel: "ੴ \n ਖਾਲਸਾ ਅਕਾਲ ਪੁਰਖੁ ਕੀ ਫੋਜ । ਪ੍ਰਗਟਿਯੋ ਖਾਲਸਾ ਪ੍ਰਮਾਤਮ ਕੀ ਮੌਜ਼ ॥ \n ਨਾਰਵੇ ਦੀ ਸਿੱਖ ਸਾਧਸੰਗਤ ਅੱਜ ਖਾਲਸੇ ਦਾ ਪ੍ਰਗਟਨਾ ਦਿਵਸ ਮਨਾ ਰਹੀ ਹੈ। \n ਸਾਕਾ ਅਨੰਦਪੁਰ ਸਾਹਿਬ \n",
    undertittel: "ਜਦੋ ਅਸੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੇ ਇਤਹਾਸ ਦੀ ਡੂੰਗਾਈ ਵਿੱਚ ਨਜਰ ਮਾਰਦੇ ਹਾਂ ਤਾਂ ਸਾਡਾ ਧਿਆਨ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਅਤੇ ਖਾਲਸੇ ਦੇ ਜਨਮ ਅਸਥਾਨ ਨਾਲ ਜੁੜ ਜਾਂਦਾ ਹੈ। \n ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਖਾਲਸੇ ਦੀ ਜਨਮ-ਭੂਮੀ ਹੈ। ਖਾਲਸੇ ਨੇ ਜੁਲਮ,ਅਸਹਿਣਸ਼ੀਲ ਸ਼ਕਤੀਆਂ ਵਿਰੁਧ ਆਵਾਜ਼ ਬੁਲੰਦ रीडी।", 
    tekst: "ਭਾਗ 1",
    mp3: "",
    images: [
      { url: '/1665.png' },
      { url: '/1675.jpg' },
      { url: '/1680-1701.png' },
      { url: '/1682-1688.png' },
      { url: '/1685.jpg' },
      { url: '/1688.jpg' },
      { url: '/1691.jpg' },
      { url: '/1693.jpg' },
      { url: '/1696.jpg' },
      { url: '/1697.jpg' },
      { url: '/1699.jpg' },
      { url: '/khalsas-mother.png' },
    ],
    pages: [
      { path: '/1665', name: '1665: ਚੱਕ ਨਾਨਕੀ ਦਾ ਨਿਰਮਾਣ ਹੋਇਆ' },
      { path: '/1675', name: '1675: ਵਾਰਸ ਗੋਬਿੰਦ ਰਾਏ' },
      { path: '/1680-1701', name: '1680-1701: ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਪੰਜ ਪਿਆਰੇ ਅਤੇ ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ' },
      { path: '/1682-1685-1688', name: '1682, 1685, og 1688: ਭੀਮ ਚੰਦ ਅਤੇ ਹੋਰ ਪਹਾੜੀ ਰਾਜਿਆਂ ਨਾਲ ਤਿੰਨ ਲੜਾਈਆਂ' },
      { path: '/1688', name: '1688: ਭਗਨੀ ਦੀ ਲੜਾਈ' },
      { path: '/1691', name: '1691: ਨਾਦੌਨ ਦੀ ਲੜਾਈ - ਗਠਜੋੜ ਅਤੇ ਵਿਸ਼ਵਾਸਘਾਤ' },
      { path: '/1693', name: '1693: ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਦਾ ਐਲਾਨ' },
      { path: '/1694', name: '1694: ਰੁਸਤਮ ਖਾਨ ਦਾ ਆਨੰਦਪੁਰ ਉੱਤੇ ਅਚਾਨਕ ਹਮਲਾ' },
      { path: '/1696', name: '1696: ਗੁਲੇਰ ਦੀ ਲੜਾਈ' },
      { path: '/1697', name: '1697: ਸਿੱਖਾਂ ਅਤੇ ਮੁਗਲਾਂ ਵਿਚਕਾਰ ਸਮਝੌਤਾ' },
      { path: '/1699', name: '1699: ਵਿਸਾਖੀ: ਖਾਲਸਾ ਸਾਜਿਆ' },
      { path: '/panj-pyare', name: 'ਪੰਜ ਪਿਆਰੇ ਕੌਣ ਹਨ' },
      { path: '/khalsas-mother', name: 'ਖਾਲਸੇ ਦੀ ਮਾਂ' },
    ],
  },
  {
    language: "en",
    tittel: "The Battle of Anandpur",
    undertittel: "Today we celebrate the formation of the Khalsa, but what led up to it? \n Take a deep dive into the stories associated with Anandpur, a place that shaped both Guru Gobind Singh Ji and the Khalsa. \n This is the birthplace of the Khalsa - get to know with Anandpur's crucial role in defending Guru Gobind Singh Ji and the Sikhs from intolerant powers.",
    tekst: "Part 1",
    mp3: "en/saka-anandpur-da-en.mp3",
    images: [
      { url: '/1665.png' },
      { url: '/1675.jpg' },
      { url: '/1680-1701.png' },
      { url: '/1682-1688.png' },
      { url: '/1685.jpg' },
      { url: '/1688.jpg' },
      { url: '/1691.jpg' },
      { url: '/1693.jpg' },
      { url: '/1696.jpg' },
      { url: '/1697.jpg' },
      { url: '/1699.jpg' },
      { url: '/khalsas-mother.png' },
    ],
    pages: [
      { path: '/1665', name: '1665: Chakk Nanaki is constructed' },
      { path: '/1675', name: '1675: The heir Gobind Rai' },
      { path: '/1680-1701', name: '1680-1701: Fortification of the city of Anandpur: Panj Wille and Takht Sri Keshgarh Sahib' },
      { path: '/1682-1685-1688', name: '1682, 1685, og 1688: Three battles against Bhim Chand and other mountain kings' },
      { path: '/1688', name: '1688: The battle of Bhagani' },
      { path: '/1691', name: '1691: The Battle of Nadaun – Alliance and Betrayal' },
      { path: '/1693', name: "1693: Mogul Emperor Aurangzeb's Declaration" },
      { path: '/1694', name: "1694: Rustam Khan's surprise attack on Anandpur" },
      { path: '/1696', name: '1696: The battle of Guler' },
      { path: '/1697', name: '1697: Truce agreement between the Sikhs and the Mughals' },
      { path: '/1699', name: '1699: Vaisakhi: Khalsa is formed' },
      { path: '/panj-pyare', name: 'Who is Panj Pyare' },
      { path: '/khalsas-mother', name: 'The mother of the Khalsa' },
    ],
  },
];



export default function Home() {
  const { language } = useContext(LanguageContext);
  if (!translations) {
    return "Loading ...";
  }
  const currentTranslation = translations.find((t) => t.language === language);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = currentTranslation.images.map(image => image.url); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change image every 3 seconds
  
    return () => clearInterval(interval); // clean up on component unmount
  }, [images.length]);

  return (
    <section className="py-12 xl:py-24 min-h-[100vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        {currentTranslation ? (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold py-4">{currentTranslation.tittel.split("\n").map((paragraph, index) => <p key={index}><br/>{paragraph}</p>)}</h1>
            <h3 className="text-3xl font-bold">{currentTranslation.tekst}</h3>
            <p className="text-xl mt-2">{currentTranslation.undertittel.split("\n").map((paragraph, index) => <p key={index}><br/>{paragraph}</p>)}</p>
            <img src={images[currentImageIndex]} className="w-auto h-80 block mx-auto py-6" />            
            {currentTranslation.mp3 !== "" && <audio src={currentTranslation.mp3} controls className="block mx-auto"/>}
            <ul className="list-none">
              {currentTranslation.pages.map((page, index) => (
                <li key={index} className="mb-2 mt-4">
                  <a href={page.path} className="text-blue-500 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 transition duration-200">{page.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Loading...</div> // or any fallback UI
        )}
      </div>
    </section>
  );
}