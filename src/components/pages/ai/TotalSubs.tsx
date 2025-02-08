import { RootState } from "@/redux/store/store";
import React from "react";
import { useSelector } from "react-redux";
import translations from "@/Data/translations.json";
import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const TotalSubs = () => {
  const isEnglish = useSelector((state: RootState) => state.language.isEnglish);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
  const data = days.map((day: keyof typeof translations.common.days) => ({
    Day: translations.common.days[day][isEnglish ? "en" : "tr"],
    Subs: [14, 15, 18, 20, 19, 15, 16][days.indexOf(day)],
  }));

  const CustomBar = (props: any) => {
    const { x, y, width, height, fill, isHovered } = props;
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={isHovered ? "url(#gradient)" : fill}
        rx={6}
      />
    );
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md dark:bg-gray-800">
      <div className="flex flex-col ">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {
            translations.dashboard.ai.totalSubsChart.title[
              isEnglish ? "en" : "tr"
            ]
          }
        </h2>
        <p className="text-green-600 font-medium flex items-center mt-2">
          <span className="ml-2 text-gray-600 dark:text-gray-400">
            + $1500{"   "}
          </span>
          <span className="bg-red-100 text-red-700 px-2 py-1 ml-2 rounded-md text-sm">
            10% ▼
          </span>
          <span className="ml-2 text-gray-600 dark:text-gray-400">
            -20 {translations.common.perDay[isEnglish ? "en" : "tr"]}
          </span>
        </p>
      </div>
      <div className="mt-16 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#487FFF" />
                <stop offset="100%" stopColor="rgba(72, 127, 255, 0.31)" />
              </linearGradient>
            </defs>
            <XAxis dataKey={"Day"} axisLine={false} tickLine={false} />
            <Bar
              dataKey="Subs"
              fill={!isDarkMode ? "rgba(72, 127, 255, 0.4)" : "url(#gradient)"}
              activeBar={(props: any) => (
                <CustomBar {...props} isHovered={true} />
              )}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? "#487FFF" : "white",
                borderRadius: "8px",
                borderColor: "#ddd",
                padding: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              cursor={{ fill: "transparent" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalSubs;
