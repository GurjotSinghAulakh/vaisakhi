"use client"

import React, { useState } from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({ children,  ...props }) => {
    const [language, setLanguage] = useState('en'); 

    return (
        <LanguageContext.Provider value={{ language, setLanguage }} {...props}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;