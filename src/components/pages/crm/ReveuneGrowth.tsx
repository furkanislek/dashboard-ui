import React from "react";
import { AreaChart, ResponsiveContainer, Tooltip, Area,CartesianGrid } from "recharts";

const ReveuneGrowth = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex h-72 flex-col dark:bg-gray-800 w-full mt-8">
      <div className="flex flex-col h-72 items-center justify-between ">
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full ">
            <h2 className="font-semibold text-lg">Revenue Growth</h2>
            <p className="font-semibold text-lg">$50,000.00</p>
          </div>
          <div className="flex justify-between mt-4">
            <h2 className="text-sm ">Weekly Report</h2>
            <p className="text-sm rounded-lg shadow-md pr-4 pl-4 bg-gray-300 text-green-800 ">$10K</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="50%">
          <AreaChart
            data={[
              { value: 10 },
              { value: 15 },
              { value: 12 },
              { value: 18 },
              { value: 24 },
              { value: 10 },
              { value: 17 },
              { value: 23 },
              { value: 19 },
              { value: 28 },
            ]}
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
              fill={"rgb(72,127,255,20)"}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReveuneGrowth;
