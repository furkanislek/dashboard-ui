"use client";
import React from "react";
import { motion } from "framer-motion";

interface Card {
  name: string;
  icon: any;
  value: any;
  color: string;
  status: boolean;
  information: string;
  stateValue: any;
}

const StatCard = ({
  name,
  icon: Icon,
  value,
  color,
  status,
  information,
  stateValue,
}: Card) => {
  return (
    <motion.div
      style={{
        background: color,
      }}
      className={` backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-gray-100 `}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    >
      <div className="flex flex-col ">
        <div className="flex justify-between">
          <div className="px-4 py-5 sm:p-6 flex flex-col align-center justify-center">
            <span className="flex items-center text-lg font-bold text-gray-800 ">
              {name}
            </span>
            <p className="mt-1 text-3xl font-semibold text-gray-600 ">
              {value}
            </p>
          </div>
          {Icon && (
            <img
              src={Icon}
              alt="User Avatar"
              width={75}
              height={75}
              className="rounded-full"
            />
          )}
        </div>
        <div className="ml-5 -mt-2 pb-5">
          <span style={{ color: status ? "green" : "red" }}>
            {status ? "▲" : "▼"}{" "}
          </span>
          <span style={{ color: status ? "green" : "red" }}>
            {stateValue}{" "}
          </span>
          <span>{information}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
