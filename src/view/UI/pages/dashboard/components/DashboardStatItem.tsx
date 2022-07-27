import { useState } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
import { IDashboardStatItem, IPieItem } from "../types";
import "./styles/DashboardStatItem.scss";

export function DashboardStatItem({ pieItem }: IDashboardStatItem) {
  const { total, data, name } = pieItem;
  const [valuePie, setValuePie] = useState(total);

  const str = `${name} ${valuePie}`;
  const test = (entry: IPieItem) => {
    setValuePie(entry.value);
  };

  const handleMouseLeave = () => {
    setValuePie(total);
  };

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
              fill={entry.color}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => test(entry)}
            />
          ))}
          <Label width={50} position="center">
            {str}
          </Label>
        </Pie>
      </PieChart>

      <ul className="Dashdord-stat-item__description">
        <li className="Dashdord-stat-item__description-item">Всего: {total}</li>
        {data.map((entry, index) => (
          <li className="Dashdord-stat-item__description-item" key={index}>
            {entry.title}: {entry.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
