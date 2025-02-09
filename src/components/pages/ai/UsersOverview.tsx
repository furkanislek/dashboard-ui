import { RootState } from "@/redux/store/store";
import React from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import translations from "@/Data/translations.json";

const UsersOverview = () => {
  const isEnglish = useSelector((state: RootState) => state.language.isEnglish);

  const data = [
    {
      name: translations.dashboard.ai.userOverview.new[isEnglish ? "en" : "tr"],
      value: 500,
      color: "#487FFF",
    },
    { name: translations.dashboard.ai.userOverview.subscribed[isEnglish ? "en" : "tr"], value: 300, color: "#FFA43A" },
  ];
  return (
    <div className="p-6 bg-white rounded-xl shadow-md dark:bg-gray-800 w-full h-full">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {
            translations.dashboard.ai.userOverview.title[
              isEnglish ? "en" : "tr"
            ]
          }
        </h2>
        <button className="border px-3 py-1 rounded-md text-sm text-gray-700 dark:text-white">
           {
            translations.dashboard.ai.userOverview.period[
              isEnglish ? "en" : "tr"
            ]
          } ▼
        </button>
      </div>
        <ResponsiveContainer width="100%" height="85%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              iconType="circle"
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
            />
          </PieChart>
        </ResponsiveContainer>
    </div>
  );
};

export default UsersOverview;
