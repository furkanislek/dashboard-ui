"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Search, Bell, ChevronDown } from "lucide-react";
import { Dropdown, Menu } from "antd";
import ThemeToggle from "../ThemeToggle";
import Image from "next/image";
import { setLanguage } from "../../redux/store/language";

const Navbar = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.isEnglish);

  const languages = [
    {
      key: "en",
      label: "English",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },
    {
      key: "tr",
      label: "Türkçe",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    },
  ];

  const handleLanguageChange = ({ key }: { key: string }) => {
    setSelectedLanguage(key);
    dispatch(setLanguage(key == "en" ? true : false));
  };

  const languageItems = [
    {
      key: "en",
      label: (
        <div className="flex items-center space-x-2">
          <img
            src={languages.find((lang) => lang.key === "en")?.flag}
            alt="English"
            width={20}
            height={15}
            className="rounded-sm"
          />
          <span>English</span>
        </div>
      ),
    },
    {
      key: "tr",
      label: (
        <div className="flex items-center space-x-2">
          <img
            src={languages.find((lang) => lang.key === "tr")?.flag}
            alt="Türkçe"
            width={20}
            height={15}
            className="rounded-sm"
          />
          <span>Türkçe</span>
        </div>
      ),
    },
  ];

  return (
    <div
      className={`sticky top-0 z-20 w-full h-16 ${
        isDarkMode ? "sidebarDark" : "sidebarLight"
      }`}
    >
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center flex-1 ">
          <div className="relative w-96">
            <Search
              className="absolute left-3 top-1/2  transform -translate-y-1/2 text-gray-400 "
              size={20}
            />
            <input
              type="text"
              placeholder={language ? "Search" : "Ara"}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-800 dark:bg-gray-600  "
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <Dropdown
            menu={{ items: languageItems, onClick: handleLanguageChange }}
            trigger={["click"]}
          >
            <div className="flex items-center cursor-pointer">
              <img
                src={
                  languages.find((lang) => lang.key === selectedLanguage)?.flag
                }
                alt={selectedLanguage}
                width={25}
                height={25}
                className="rounded-sm"
              />
              <ChevronDown size={16} className="ml-1" />
            </div>
          </Dropdown>

          <div className="relative cursor-pointer">
            <Bell size={25} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="https://banner2.cleanpng.com/lnd/20240420/arr/transparent-star-wars-cartoon-of-yoda-from-star-wars-franchise66236a375ab211.96317131.webp"
              alt="User Avatar"
              width={25}
              height={25}
              className="rounded-full"
            />
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
