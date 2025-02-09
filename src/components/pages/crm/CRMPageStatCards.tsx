import React from "react";
import {
  Users,
  Activity,
  DollarSign,
  MessageSquare,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import CrmStatsCard from "@/components/Common/CrmStatCard";

const CRMPageStatCards = () => {
  const statsData = [
    {
      title: "New Users",
      value: "15,000",
      change: "+200",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      color: "blue",
      chartData: [
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
      ],
    },
    {
      title: "Active Users",
      value: "8,000",
      change: "+200",
      icon: <Activity className="w-6 h-6 text-green-500" />,
      color: "green",
      chartData: [
        { value: 8 },
        { value: 10 },
        { value: 9 },
        { value: 11 },
        { value: 10 },
      ],
    },
    {
      title: "Total Sales",
      value: "$5,00,000",
      change: "-$10k",
      icon: <DollarSign className="w-6 h-6 text-orange-500" />,
      color: "orange",
      chartData: [
        { value: 20 },
        { value: 22 },
        { value: 19 },
        { value: 25 },
        { value: 23 },
      ],
    },
    {
      title: "Conversion",
      value: "25%",
      change: "+5%",
      icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
      color: "purple",
      chartData: [
        { value: 5 },
        { value: 7 },
        { value: 6 },
        { value: 8 },
        { value: 7 },
      ],
    },
    {
      title: "Leads",
      value: "250",
      change: "+20",
      icon: <TrendingUp className="w-6 h-6 text-pink-500" />,
      color: "pink",
      chartData: [
        { value: 3 },
        { value: 5 },
        { value: 4 },
        { value: 6 },
        { value: 5 },
      ],
    },
    {
      title: "Total Profit",
      value: "$3,00,7,000",
      change: "+$15k",
      icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
      color: "cyan",
      chartData: [
        { value: 12 },
        { value: 14 },
        { value: 13 },
        { value: 17 },
        { value: 15 },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 ">
      {statsData.map((stat, index) => (
        <CrmStatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default CRMPageStatCards;
