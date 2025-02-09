"use client";

import React from "react";
import { Card } from "antd";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#3b82f6", "#f59e0b", "#10b981"];

const data = [
  { name: "Total", value: 1500, color: COLORS[0] },
  { name: "New", value: 500, color: COLORS[1] },
  { name: "Active", value: 500, color: COLORS[2] },
];

const CustomerOverview = () => {
  return (
    <div className="w-full p-6 max-w-sm shadow-md rounded-xl dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg dark:text-gray-200">
          Customer Overview
        </h3>
        <select
          defaultValue="Monthly"
          className="border rounded px-2 py-1 dark:bg-gray-800 dark:text-gray-200"
        >
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <div className="flex justify-between">
        <div className="ml-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center mb-1">
              <span
                className="w-2.5 h-2.5 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {item.name}: {item.value}
              </span>
            </div>
          ))}
        </div>
        <PieChart width={120} height={80}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={30}
            outerRadius={50}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>

      <p className="text-center text-sm text-gray-500 mt-2">Customer Report</p>
    </div>
  );
};

export default CustomerOverview;
