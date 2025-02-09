import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, ComposedChart } from 'recharts';
import { useState } from "react";

const data = [
  { month: 'Jan', sales: 50 , barData: 70},
  { month: 'Feb', sales: 20, barData: 65 },
  { month: 'Mar', sales: 15, barData: 20 },
  { month: 'Apr', sales: 30, barData: 15 },
  { month: 'May', sales: 22, barData: 24 },
  { month: 'Jun', sales: 35, barData: 38 },
  { month: 'Jul', sales: 28, barData: 26 },
  { month: 'Aug', sales: 3 , barData: 12},
  { month: 'Sep', sales: 25, barData: 26 },
  { month: 'Oct', sales: 15, barData: 34 },
  { month: 'Nov', sales: 20, barData: 15 },
  { month: 'Dec', sales: 35, barData: 29 }
];

export default function EarningStatistics() {
  const [selectedPeriod, setSelectedPeriod] = useState("Yearly");
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
<div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Earning Statistic</h2>
          <p className="text-gray-500">Yearly earning overview</p>
        </div>
        <select
          className="border rounded px-2 py-1 dark:bg-gray-800 dark:text-gray-200"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      
      <div className="flex justify-center space-x-4 mb-4 w-full mx-auto">
        <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center space-x-2">
          <span className="text-blue-600 text-xl font-semibold dark:text-blue-500">Sales</span>
          <span className="text-lg font-bold">$200k</span>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center space-x-2">
          <span className="text-gray-600 text-xl font-semibold dark:text-gray-100">Income</span>
          <span className="text-lg font-bold">$200k</span>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center space-x-2">
          <span className="text-gray-600 text-xl font-semibold dark:text-gray-100">Profit</span>
          <span className="text-lg font-bold">$200k</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
        <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#487FFF" />
                <stop offset="100%" stopColor="rgba(72, 127, 255, 0.31)" />
              </linearGradient>
            </defs>
          <Bar dataKey="barData" barSize={20} fill="url(#gradient)"  activeBar={(props: any) => (
                <CustomBar {...props} isHovered={true} />
              )} >
          
          </Bar>
          <Line type="monotone" dataKey="sales" stroke="#2563eb"  activeDot={{ r: 8, fill: "#2563eb" }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
