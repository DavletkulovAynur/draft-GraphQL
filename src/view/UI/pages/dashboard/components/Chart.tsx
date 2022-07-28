import { IChart, IDataStat } from "../types";
import { DashboardStatItem } from "./DashboardStatItem";
import "./styles/Charts.scss";

export const Chart = ({ charts }: IChart) => {
  return (
    <div className="Charts Charts__root">
      {charts ? (
        <>
          <DashboardStatItem pieItem={charts.scenarios} />
          <DashboardStatItem pieItem={charts.lists} />
          <DashboardStatItem pieItem={charts.dialogs} />
        </>
      ) : (
        "Данных пока нет"
      )}
    </div>
  );
};
