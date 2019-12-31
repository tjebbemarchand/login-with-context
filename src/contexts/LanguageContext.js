import React, { createContext, useState } from "react";

const LanguageContext = createContext();

function LanguageProvider(props) {
    const [language, setLanguage] = useState("spanish");
    const changeLanguage = e => setLanguage(e.target.value);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export { LanguageContext, LanguageProvider };
