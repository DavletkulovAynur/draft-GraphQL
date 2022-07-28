import { useState } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
import { IDashboardStatItem, IPieItem } from "../types";
import "./styles/DashboardStatItem.scss";

export function DashboardStatItem({ pieItem }: IDashboardStatItem) {
  const { total, data, name } = pieItem;
  const [valuePie, setValuePie] = useState(total);
  const [activeIDPie, setActiveIDPie] = useState("");
  const [colorPie, setColorPie] = useState("");
  const [allColor, setAllColor] = useState(false);

  const label = `${name} ${valuePie}`;
  const handleMouseEnterPie = (entry: IPieItem) => {
    setValuePie(entry.value);
    setActiveIDPie(entry.id);
    setColorPie("#f9a752");
  };

  const handleMouseLeave = () => {
    setValuePie(total);
    setActiveIDPie("");
    setColorPie("");
  };

  const handleMouseEnter = (event: any) => {
    const ID = event.currentTarget.dataset.id;
    const value = event.currentTarget.dataset.value;
    setValuePie(value);
    setActiveIDPie(ID);
    setColorPie("#f9a752");
  };

  const handleMouseEnterAllItem = () => {
    setAllColor(true);
  };

  const handleMouseLeaveAllItem = () => {
    setAllColor(false);
  };

  //FIXME: разделить по компонентпм 
  return (
    <div className="Dashdord-stat-item">
      <PieChart width={190} height={190}>
        <Pie
          stroke="none"
          legendType="circle"
          data={data}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          cornerRadius={100}
          innerRadius={80}
          outerRadius={95}
          paddingAngle={-10}
          labelLine={false}
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell
              key={`slice-${index}`}
              //FIXME: плохое решение, разбросать по условиям 
              fill={
                allColor
                  ? entry.name === "active"
                    ? "#f9a752"
                    : entry.name === "inactive"
                    ? "#fccf82"
                    : entry.color
                  : colorPie
                  ? entry.id === activeIDPie
                    ? colorPie
                    : entry.color
                  : entry.color
              }
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnterPie(entry)}
            />
          ))}
          <Label width={50} position="center">
            {label}
          </Label>
        </Pie>
      </PieChart>

      <ul className="Dashdord-stat-item__description">
        <li
          onMouseEnter={handleMouseEnterAllItem}
          onMouseLeave={handleMouseLeaveAllItem}
          className={`Dashdord-stat-item__description-item ${
            allColor ? "active-text" : null
          }`}
        >
          <span>Всего:</span>
          <span>{total}</span>
        </li>
        {data.map((entry, index) => (
          <li
            data-value={entry.value}
            data-id={entry.id}
            onMouseEnter={(event) => handleMouseEnter(event)}
            onMouseLeave={() => handleMouseLeave()}
            className={`Dashdord-stat-item__description-item ${
              entry.id === activeIDPie ? "active-text" : null
            }`}
            key={index}
          >
            <span>{entry.title}:</span>
            <span>{entry.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
