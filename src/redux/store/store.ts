"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import navbarReducer from "./navbar";
import languageReducer from "./language";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    navbar: navbarReducer,
    language: languageReducer
  },
});

// RootState tipini ekle
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
