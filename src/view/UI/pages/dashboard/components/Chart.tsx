import { IDataStat } from "../types";
import { DashboardStatItem } from "./DashboardStatItem";
import "./styles/Charts.scss";

const dataStat: IDataStat = {
  scenarios: {
    id: '1',
    total: 24,
    name: "Сценарии",
    data: [
      {
        id: '1',
        title: "Активных",
        name: "active",
        value: 10,
        color: "#b9b1c0",
      },
      {
        id: '2',
        title: "Неактивных",
        name: "inactive",
        value: 30,
        color: "#d0cbd6",
      },
      {
        id: '3',
        title: "Завершенных",
        name: "dialogs",
        value: 10,
        color: "#f2f0f5",
      },
    ],
  },
  lists: {
    id: '2',
    total: 24,
    name: "Списки",
    data: [
      {
        id: '1',
        title: "Активных",
        name: "active",
        value: 10,
        color: "#b9b1c0",
      },
      {
        id: '2',
        title: "Неактивных",
        name: "inactive",
        value: 20,
        color: "#d0cbd6",
      },
      {
        id: '3',
        title: "Завершенных",
        name: "dialogs",
        value: 30,
        color: "#f2f0f5",
      },
    ],
  },
  dialogs: {
    id: '3',
    total: 24,
    name: "Диалоги",
    data: [
      {
        id: '1',
        title: "Активных",
        name: "active",
        value: 40,
        color: "#f9a752",
      },
      {
        id: '2',
        title: "Неактивных",
        name: "inactive",
        value: 10,
        color: "#fccf82",
      },
      {
        id: '3',
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
