import { createSlice } from "@reduxjs/toolkit";

interface NavbarState {
  openStatus: boolean;
}

const initialState: NavbarState = {
  openStatus: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setOpenStatus: (state) => {
      state.openStatus = !state.openStatus;
    },
  },
});

export const { setOpenStatus } = navbarSlice.actions;

export default navbarSlice.reducer;
