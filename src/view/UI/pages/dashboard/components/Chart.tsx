import { PieChart, Pie, Cell, Label } from "recharts";
import { IDataStat } from "../types";
import { DashboardStatItem } from "./DashboardStatItem";
import "./styles/Charts.scss";

const dataStat: IDataStat = {
  scenarios: {
    total: 24,
    name: "Сценарии",
    data: [
      {
        title: "Активных",
        name: "active",
        value: 10,
        color: "#f9a752",
      },
      {
        title: "Неактивных",
        name: "inactive",
        value: 30,
        color: "#fccf82",
      },
      {
        title: "Завершенных",
        name: "dialogs",
        value: 10,
        color: "#f2f0f5",
      },
    ],
  },
  lists: {
    total: 24,
    name: "Списки",
    data: [
      {
        title: "Активных",
        name: "active",
        value: 10,
        color: "#f9a752",
      },
      {
        title: "Неактивных",
        name: "inactive",
        value: 20,
        color: "#fccf82",
      },
      {
        title: "Завершенных",
        name: "dialogs",
        value: 30,
        color: "#f2f0f5",
      },
    ],
  },
  dialogs: {
    total: 24,
    name: "Диалоги",
    data: [
      {
        title: "Активных",
        name: "active",
        value: 40,
        color: "#f9a752",
      },
      {
        title: "Неактивных",
        name: "inactive",
        value: 10,
        color: "#fccf82",
      },
      {
        title: "Завершенных",
        name: "dialogs",
        value: 30,
        color: "#f2f0f5",
      },
    ],
  },
};

export const Chart = () => {
  return (
    <div className="Charts Charts__root">
      <DashboardStatItem pieItem={dataStat.scenarios} />
      <DashboardStatItem pieItem={dataStat.lists} />
      <DashboardStatItem pieItem={dataStat.dialogs} />
    </div>
  );
};
