import "./App.css";
import React, { Suspense, lazy, createContext, useReducer, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import { FullSizeImage } from "./components/FullSizeImage";

export const AppContext = createContext();

const initialState = {
  isDisplay: false,
  isShowFullSizeImage: false,
  imageUrl: "",
};

const actionTypes = {
  SHOW_FULL_SIZE_IMAGE: "SHOW_FULL_SIZE_IMAGE",
  CLOSE_FULL_SIZE_IMAGE: "CLOSE_FULL_SIZE_IMAGE",
  TOGGLE_NAV: "TOGGLE_NAV",
  SET_IMAGE_URL: "SET_IMAGE_URL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SHOW_FULL_SIZE_IMAGE:
      return { ...state, isShowFullSizeImage: true };
    case actionTypes.CLOSE_FULL_SIZE_IMAGE:
      return { ...state, isShowFullSizeImage: false };
    case actionTypes.TOGGLE_NAV:
      return { ...state, isDisplay: !state.isDisplay };
    case actionTypes.SET_IMAGE_URL:
      return { ...state, imageUrl: action.payload };
    default:
      return state;
  }
};

const showFullSizeImageAction = () => ({
  type: actionTypes.SHOW_FULL_SIZE_IMAGE,
});

const closeFullSizeImageAction = () => ({
  type: actionTypes.CLOSE_FULL_SIZE_IMAGE,
});

const toggleNavAction = () => ({
  type: actionTypes.TOGGLE_NAV,
});

const setImageUrlAction = (imageUrl) => ({
  type: actionTypes.SET_IMAGE_URL,
  payload: imageUrl,
});

const images = [
  "/img/hero4.jpg",
  "/img/hero3.jpg",
  "/img/hero.jpg",
  "https://source.unsplash.com/random/800x602",
  "https://source.unsplash.com/random/800x603",
  "https://source.unsplash.com/random/800x604",
  "https://source.unsplash.com/random/800x605",
  "https://source.unsplash.com/random/800x606",
  "https://source.unsplash.com/random/800x607",
  "https://source.unsplash.com/random/800x608",
];

function App() {
  const contactRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isDisplay, imageUrl, isShowFullSizeImage } = state;

  const navToggle = () => {
    dispatch(toggleNavAction());
  };

  const showFullSizeImage = (imageUrl) => {
    setFullSizeImageUrl(imageUrl);
    dispatch(showFullSizeImageAction(true));
  };

  const setFullSizeImageUrl = (imageUrl) => {
    dispatch(setImageUrlAction(imageUrl));
  };

  const closeFullSizeImage = () => {
    dispatch(setImageUrlAction(""));
    dispatch(closeFullSizeImageAction(true));
  };

  const scrollToElement = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contextValue = {
    contactRef,
    showFullSizeImage,
    closeFullSizeImage,
    scrollToElement,
    isShowFullSizeImage,
    navToggle,
    isDisplay,
    images,
    setFullSizeImageUrl,
  };

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<p>Loading...</p>}>
              <Home />
            </Suspense>   
          } />
        </Routes>
      {isShowFullSizeImage ? <FullSizeImage imageUrl={imageUrl} /> : null}
      </AppContext.Provider>
    </>
  );
}

export default App;
