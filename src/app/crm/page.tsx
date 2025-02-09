"use client";

import React, { useEffect } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import CRMPageStatCards from "@/components/pages/crm/CRMPageStatCards";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { motion } from "framer-motion";
import ReveuneGrowth from "@/components/pages/crm/ReveuneGrowth";
import EarningStatistics from "@/components/pages/crm/EarningStatistics";
import Campaigns from "@/components/pages/crm/Campaigns";
import CustomerOverview from "@/components/pages/crm/CustomerOverview";

const CRM = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <main
      className={`min-w-100 min-h-screen ${isDarkMode ? "dark" : "light"} flex`}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col ">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="overflow-auto flex-1 mx-auto max-w-75 "
        >
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-8 overflow-auto relative z-10 ">
            <div className="xl:col-span-3 col-span-1">
              <CRMPageStatCards />
            </div>

            <div className="col-span-1">
              <ReveuneGrowth />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-8 overflow-auto relative z-10">
            <div className="xl:col-span-3 col-span-1">
              <EarningStatistics />
            </div>

            <div className="col-span-1 min-h-full flex flex-col gap-4">
              <Campaigns />
              <CustomerOverview />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default CRM;
