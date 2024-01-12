import "./App.css";
import React, { createContext, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.js";

export const AppContext = createContext();

function App() {
  const contactRef = useRef();
  const [isDisplay, setIsDisplay] = useState(false);

  const navToggle = () => {
    setIsDisplay(!isDisplay);
  };

  const scrollToElement = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppContext.Provider value={{contactRef, scrollToElement, navToggle, isDisplay}}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
