import React, { useState } from "react";
import { useSelector } from "react-redux";
import "@ant-design/v5-patch-for-react-19";
import { Table, Tag, Button, Avatar, theme } from "antd";
import translations from "@/Data/translations.json";
import { RootState } from "@/redux/store/store";
import { ConfigProvider } from "antd";

const registeredUsers = [
  {
    key: 1,
    icon: "./user1.svg",
    name: "Dianne Russell",
    email: "redaniel@gmail.com",
    date: "27 Mar 2024",
    plan: "Free",
    status: "Active",
  },
  {
    key: 2,
    icon: "./user2.svg",
    name: "Wade Warren",
    email: "xterris@gmail.com",
    date: "27 Mar 2024",
    plan: "Basic",
    status: "Active",
  },
  {
    key: 3,
    icon: "./user3.svg",
    name: "Albert Flores",
    email: "seannand@mail.ru",
    date: "27 Mar 2024",
    plan: "Standard",
    status: "Active",
  },
  {
    key: 4,
    icon: "./user4.svg",
    name: "Ann Rose",
    email: "annrose@mail.ru",
    date: "24 Mar 2024",
    plan: "Basic",
    status: "Active",
  },
  {
    key: 5,
    name: "Jack London",
    icon: "./user5.svg",
    email: "jacklondon@mail.ru",
    date: "27 Mar 2024",
    plan: "Enterpise",
    status: "Active",
  },
];

const subscribedUsers = [
  {
    key: 6,
    icon: "./user6.svg",
    name: "Bessie Cooper",
    email: "igerrin@gmail.com",
    date: "25 Mar 2024",
    plan: "Business",
    status: "Active",
  },
  {
    key: 7,
    icon: "./user7.svg",
    name: "Arlene McCoy",
    email: "fellora@mail.ru",
    date: "24 Mar 2024",
    plan: "Enterprise",
    status: "Active",
  },
];

export default function AiUserTable() {
  const [activeTab, setActiveTab] = useState("registered");
  const data = activeTab === "registered" ? registeredUsers : subscribedUsers;
  const isEnglish = useSelector((state: RootState) => state.language.isEnglish);
const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const columns = [
    {
      title: translations.dashboard.ai.userTable.name[isEnglish ? "en" : "tr"],
      dataIndex: "name",
      key: "name",
      render: (text: any, record: any) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar src={record.icon} />
          <div>
            <div>{text}</div>
            <div style={{ fontSize: "12px", color: "#888" }}>
              {record.email}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: translations.dashboard.ai.userTable.date[isEnglish ? "en" : "tr"],
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Plan",
      dataIndex: "plan",
      key: "plan",
    },
    {
      title: translations.dashboard.ai.userTable.status[isEnglish ? "en" : "tr"],
      dataIndex: "status",
      key: "status",
      render: (status: any) => <Tag color="green">{status}</Tag>,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm: theme.defaultAlgorithm,
      }}
    >
      <div
        className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800"
      >
        <div className="flex justify-between mb-4 dark:bg-gray-800">
          <div>
            <Button
              type={activeTab === "registered" ? "primary" : "default"}
              onClick={() => setActiveTab("registered")}
              style={{ marginRight: 8 }}
            >
              {translations.dashboard.ai.userTable.latestRgs[isEnglish ? "en" : "tr"]} (35)
            </Button>
            <Button
              type={activeTab === "subscribed" ? "primary" : "default"}
              onClick={() => setActiveTab("subscribed")}
            >
              {isEnglish ? "Latest Subscribe" : "Son Aboneler"} (20)
            </Button>
          </div>
        </div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </ConfigProvider>
  );
}

