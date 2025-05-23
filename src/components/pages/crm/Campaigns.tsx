import React, { useState } from "react";
import { Progress } from "antd";
import { MailCheck, Globe, Facebook, MapPinOff } from "lucide-react";
import translations from "@/Data/translations.json";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const Campaigns = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Monthly");
  const isEnglish = useSelector((state: RootState) => state.language.isEnglish);

  const data = [
    {
      ikon: <MailCheck className="text-orange-600" />,
      title: "Email",
      progress: 80,
      color: "orange",
    },
    {
      ikon: <Globe className="text-green-800" />,
      title: "Website",
      progress: 80,
      color: "green",
    },
    {
      ikon: <Facebook className="text-blue-600" />,
      title: "Facebook",
      progress: 80,
      color: "blue",
    },
    {
      ikon: <MapPinOff className="text-purple-600" />,
      title: "Offline",
      progress: 80,
      color: "purple",
    },
  ];
  return (
    <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800 h-full">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-row justify-between">
          <h2 className="font-semibold text-lg">
            {translations.dashboard.crm.campaigns.title[isEnglish ? "en" : "tr"]}
          </h2>
          <select
            className="border rounded px-2 py-1 dark:bg-gray-800 dark:text-gray-200"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="Yearly">{translations.common.perYear[isEnglish ? "en" : "tr"]}</option>
            <option value="Monthly">{translations.common.perMonth[isEnglish ? "en" : "tr"]}</option>
          </select>
        </div>
        {data.map((item, key) => (
          <div key={key} className="flex justify-between">
            <div className="flex pr-6">
              <div className="flex pr-4">{item.ikon}</div>
              <p>{item.title}</p>
            </div>

            <Progress
              className="max-w-[50%]"
              strokeColor={item.color}
              percent={item.progress}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
