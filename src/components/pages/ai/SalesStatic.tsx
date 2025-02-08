"use client";
import { ChevronDown } from "lucide-react";
import translations from "@/Data/translations.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const SalesStatistic = () => {
  const isEnglish = useSelector((state: RootState) => state.language.isEnglish);

  const months: Array<keyof typeof translations.common.months> = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = months.map((month, index) => ({
    month: translations.common.months[month][isEnglish ? "en" : "tr"],
    Sales: [
      5000, 12000, 9000, 28000, 15000, 53000, 10000, 27000, 18000, 29000, 12000,
      22000,
    ][index],
  }));

  return (
    <div className="p-6 bg-white rounded-xl shadow-md dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {translations.dashboard.ai.salesStatus.title[isEnglish ? "en" : "tr"]}
        </h2>
        <div className="flex items-center space-x-2 cursor-pointer bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md">
          <span className="text-gray-700 dark:text-gray-300">
            {isEnglish ? "Yearly" : "Yıllık"}
          </span>
          <ChevronDown size={16} className="text-gray-500 dark:text-gray-300" />
        </div>
      </div>

      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
        $27,200
      </h3>
      <p className="text-green-600 font-medium flex items-center">
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm">
          10% ▲
        </span>
        <span className="ml-2 text-gray-600 dark:text-gray-400">
          + $1500{" "}
          {translations.common.perDay[isEnglish ? "en" : "tr"]}
        </span>
      </p>

      <div className="mt-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                borderColor: "#ddd",
              }}
            />
            <Line
              type="monotone"
              dataKey="Sales"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesStatistic;
