"use client";
import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  isEnglish: boolean;
}

const initialState: LanguageState = {
  isEnglish: true,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.isEnglish = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
