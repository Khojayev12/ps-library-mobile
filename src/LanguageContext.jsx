import React from "react";
export const languages = {
    uz: 'uz',
    en:'en'
  };
  
export const LanguageContext = React.createContext(
languages.uz // значение по умолчанию
);