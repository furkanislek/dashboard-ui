"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppDispatch, RootState } from "../../redux/store/store";
import { setOpenStatus } from "../../redux/store/navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import translations from "@/Data/translations.json";

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const openStatus = useSelector((state: RootState) => state.navbar.openStatus);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const language = useSelector((state: RootState) => state.language.isEnglish);
  const SIDEBAR_ITEMS = [
    {
      name: language
        ? translations.sidebar.menu.ai.en
        : translations.sidebar.menu.ai.tr,
      icon: BarChart2,
      color: "#6366f1",
      path: "/",
    },
    {
      name: language
        ? translations.sidebar.menu.crm.en
        : translations.sidebar.menu.crm.tr,
      icon: ShoppingBag,
      color: "#8B5CF6",
      path: "/products",
    },
    {
      name: language
        ? translations.sidebar.menu.ecommerce.en
        : translations.sidebar.menu.ecommerce.tr,
      icon: Users,
      color: "#EC4899",
      path: "/users",
    },
    {
      name: language
        ? translations.sidebar.menu.crypto.en
        : translations.sidebar.menu.crypto.tr,
      icon: DollarSign,
      color: "#10B981",
      path: "/sales",
    },
    {
      name: language
        ? translations.sidebar.menu.investment.en
        : translations.sidebar.menu.investment.tr,
      icon: ShoppingCart,
      color: "#F59E0B",
      path: "/orders",
    },
    {
      name: language
        ? translations.sidebar.menu.learning.en
        : translations.sidebar.menu.learning.tr,
      icon: Settings,
      color: "#6EE7B7",
      path: "/settings",
    },
    {
      name: language
        ? translations.sidebar.menu.nft.en
        : translations.sidebar.menu.nft.tr,
      icon: Settings,
      color: "#6EE7B7",
      path: "/settings",
    },
    {
      name: language
        ? translations.sidebar.menu.analytics.en
        : translations.sidebar.menu.analytics.tr,
      icon: TrendingUp,
      color: "#3B82F6",
      path: "/analytics",
    },
  ];

  return (
    <motion.div
      className={`h-screen sticky top-0 left-0 transition-all duration-300 ease-in-out flex-shrink-0 ${
        openStatus ? "w-64" : "w-20"
      } ${isDarkMode ? "sidebarDark" : "sidebarLight"}`}
      animate={{ width: openStatus ? 256 : 80 }}
    >
      <div
        className={`h-full p-4 flex flex-col backdrop-blur-md ${
          isDarkMode ? "sidebarDark" : "sidebarLight"
        }`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => dispatch(setOpenStatus())}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item, index) => (
            <Link key={index} href={item.path}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {openStatus && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
