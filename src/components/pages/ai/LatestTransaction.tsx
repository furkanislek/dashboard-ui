import React from "react";
import {  Avatar } from "antd";
import { useSelector } from "react-redux";
import "@ant-design/v5-patch-for-react-19";
import { RootState } from "@/redux/store/store";

export default function LatestTransaction() {
    const isEnglish = useSelector((state: RootState) => state.language.isEnglish);

  const data = [
  {
    key: 1,
    icon:"./user1.svg",
    name: "Dianne Russell",
    date: "27 Mar 2024",
    value: "$20",
  },
  {
    key: 2,
    icon:"./user2.svg",
    name: "Wade Warren",
    date: "27 Mar 2024",
     value: "$10",
  },
  {
    key: 3,
    icon:"./user3.svg",
    name: "Albert Flores",
    date: "27 Mar 2024",
     value: "$30",
  },
  {
    key: 4,
    icon:"./user4.svg",
    name: "Ann Rose",
    date: "24 Mar 2024",
    value: "$40",
  },
  {
    key: 5,
    name: "Jack London",
    icon:"./user5.svg",
    date: "27 Mar 2024",
    value: "$10",
  },
  {
    key: 6,
    icon:"./user6.svg",
    name: "Bessie Cooper",
    date: "25 Mar 2024",
    value: "$35",
  },
  {
    key: 7,
    icon:"./user7.svg",
    name: "Arlene McCoy",
    date: "24 Mar 2024",
    value: "$10",
  },
];
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 8,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
      className="h-full flex flex-col bg-white dark:bg-gray-800 "
    >
      <div className="flex flex-row justify-between ">
        <h2 className="font-semibold text-lg">{isEnglish ? "Latest Transactions" : "Son İşlemler"}</h2>
        <h3 className="font-medium text-blue-800 text-md dark:text-white  cursor-pointer">{isEnglish ? "View All" : "Tümünü Gör"} </h3>
      </div>
      <hr/>
      <div className="mt-8">
        {data.map((item: any, key: any) => (
          <div key={key} className="mt-4 flex justify-between align-center">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Avatar src={item.icon} />
              <div>
                <div className="font-semibold">{item.name}</div>
                <div style={{ fontSize: "12px", color: "#888" }}>
                  {item.date}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center align-center">
              <div className="font-semibold">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
