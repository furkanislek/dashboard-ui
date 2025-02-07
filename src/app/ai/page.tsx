"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import * as LucideIcon from "lucide-react";

const AIPage = () => {
  const StatCard = dynamic(() => import("../../components/Common/StatCard"), {
    ssr: false,
  });

  return (
    <main className="max-w-full mx-1 py-6 px-12 lg:px-12 ">
      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <StatCard
          name="Total Users"
          icon={"./totalUsers.svg"}
          value={"20,000"}
          color="conic-gradient(from 89.78deg at 50% 57.77%, #E6F9FF 0deg, #FEFFFF 360deg)"
          status={true}
          stateValue={"+5000"}
          information="Last 30 days users"
        />
        <StatCard
          name="Total Subscription"
          icon={"./totalSub.svg"}
          value={"15,000"}
          color="linear-gradient(90.13deg, #F7E9FF 0.12%, #FFFEFD 99.89%)"
          status={false}
          stateValue={"-800"}
          information="Last 30 days subscriptions"
        />
        <StatCard
          name="Total Free Users"
          icon={"./totalFreeUser.svg"}
          value={"5,000"}
          color="linear-gradient(90deg, #E6EBFF 0%, #FFFFFF 100%)"
          status={true}
          stateValue={"+220"}
          information="Last 30 days users"
        />
        <StatCard
          name="Total Income"
          icon={"./totalIncome.svg"}
          value={"$42,400"}
          color="linear-gradient(90deg, #E8FFF5 0%, #FFFFFF 100%)"
          status={true}
          stateValue={"+$20,000"}
          information="Last 30 days income"
        />
      </motion.div>
    </main>
  );
};

export default AIPage;
