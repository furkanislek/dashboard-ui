"use client";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/store/themeSlice";
import { RootState } from "../redux/store/store";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="theme-toggle-btn"
    >
      {isDarkMode ? "☀️" : "🌘"}
    </button>
  );
};

export default ThemeToggle;
