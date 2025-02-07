"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import AIPage from "./ai/page";

export default function Home() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);
  return (
    <main className={`min-h-screen ${isDarkMode ? "dark" : "light"} flex`}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <AIPage/>
      </div>
    </main>
  );
}
