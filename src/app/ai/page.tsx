"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import translations from "@/Data/translations.json";
import SalesStatic from "@/components/pages/ai/SalesStatic";
import TotalSubs from "@/components/pages/ai/TotalSubs";
import UsersOverview from "@/components/pages/ai/UsersOverview";
import AiUserTable from "@/components/pages/ai/AiUserTable";
import LatestTransaction from "@/components/pages/ai/LatestTransaction";

const AIPage = () => {
  const StatCard = dynamic(() => import("../../components/Common/StatCard"), {
    ssr: false,
  });

  const language = useSelector((state: RootState) => state.language.isEnglish);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-75 mx-1 py-6 px-12 lg:px-12 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <StatCard
            name={
              language
                ? translations.dashboard.ai.totalUsers.en
                : translations.dashboard.ai.totalUsers.tr
            }
            icon={"./totalUsers.svg"}
            value={"20,000"}
            color="conic-gradient(from 89.78deg at 50% 57.77%, #E6F9FF 0deg, #FEFFFF 360deg)"
            status={true}
            stateValue={"+5000"}
            information={
              language
                ? translations.dashboard.ai.totalUsers.information.en
                : translations.dashboard.ai.totalUsers.information.tr
            }
          />
          <StatCard
            name={
              language
                ? translations.dashboard.ai.totalSubs.en
                : translations.dashboard.ai.totalSubs.tr
            }
            icon={"./totalSub.svg"}
            value={"15,000"}
            color="linear-gradient(90.13deg, #F7E9FF 0.12%, #FFFEFD 99.89%)"
            status={false}
            stateValue={"-800"}
            information={
              language
                ? translations.dashboard.ai.totalSubs.information.en
                : translations.dashboard.ai.totalSubs.information.tr
            }
          />
          <StatCard
            name={
              language
                ? translations.dashboard.ai.totalFreeUsers.en
                : translations.dashboard.ai.totalFreeUsers.tr
            }
            icon={"./totalFreeUser.svg"}
            value={"5,000"}
            color="linear-gradient(90deg, #E6EBFF 0%, #FFFFFF 100%)"
            status={true}
            stateValue={"+220"}
            information={
              language
                ? translations.dashboard.ai.totalFreeUsers.information.en
                : translations.dashboard.ai.totalFreeUsers.information.tr
            }
          />
          <StatCard
            name={
              language
                ? translations.dashboard.ai.totalIncome.en
                : translations.dashboard.ai.totalIncome.tr
            }
            icon={"./totalIncome.svg"}
            value={"$42,400"}
            color="linear-gradient(90deg,rgb(124, 143, 135) 0%, #FFFFFF 100%)"
            status={true}
            stateValue={"+$20,000"}
            information={
              language
                ? translations.dashboard.ai.totalIncome.information.en
                : translations.dashboard.ai.totalIncome.information.tr
            }
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 h-120">
          <div className="xl:col-span-2 lg:col-span-2 col-span-1">
            <SalesStatic />
          </div>

          <div className="xl:col-span-1 lg:col-span-1 col-span-1">
            <TotalSubs />
          </div>

          <div className="xl:col-span-1 lg:col-span-1 col-span-1">
            <UsersOverview />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mt-8 mb-8 h-120">
          <div className="xl:col-span-3 lg:col-span-3 col-span-1">
            <AiUserTable />
          </div>
          <div className="xl:col-span-1 lg:col-span-1 col-span-1">
            <LatestTransaction />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIPage;
