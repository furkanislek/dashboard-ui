"use client";
import { Tooltip } from "antd";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
} from "recharts";

const CrmStatsCard = ({
  title,
  value,
  change,
  icon,
  chartData,
  color,
}: any) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col h-36 dark:bg-gray-800 w-full">
      <div className="flex items-center space-x-2">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row justify-between w-75 mr-4">
            <div className="flex flex-col justify-center items-center mr-4 ">
              {icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{title}</h3>
              <p className="text-2xl text-gray-900 dark:text-gray-100">{value}</p>
            </div>
          </div>

          <div className="h-16 w-2/3">
            <ResponsiveContainer width="90%" height="100%">
              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  fill={color}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full align-center items-center justify-center">
      <p
        className={`text-sm font-medium ${
          change.startsWith("+") ? "text-green-500" : "text-red-500"
        }`}
        >
        Increase by {change} this week
      </p>
        </div>
    </div>
  );
};

export default CrmStatsCard;
