"use client";

import React, { useState } from "react";

export const LanguageContext = React.createContext();

const LanguageProvider = ({ children, ...props }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }} {...props}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
