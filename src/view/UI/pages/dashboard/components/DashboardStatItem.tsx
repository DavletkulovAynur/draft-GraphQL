import { useState } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
import { IDashboardStatItem, IPieItem } from "../types";
import "./styles/DashboardStatItem.scss";

export function DashboardStatItem({ pieItem }: IDashboardStatItem) {
  const { total, data, name } = pieItem;
  const [valuePie, setValuePie] = useState(total);
  const [activeIDPie, setActiveIDPie] = useState('')

  const str = `${name} ${valuePie}`;
  const handleMouseEnterPie = (entry: IPieItem) => {
    setValuePie(entry.value);
    setActiveIDPie(entry.id)
  };

  const handleMouseLeave = () => {
    setValuePie(total);
    setActiveIDPie('')
  };

  const handleMouseEnter = (event: any) => {
    console.log("handleMouseEnter", event.currentTarget.dataset.id);
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
              onMouseEnter={() => handleMouseEnterPie(entry)}
            />
          ))}
          <Label width={50} position="center">
            {str}
          </Label>
        </Pie>
      </PieChart>

      <ul className="Dashdord-stat-item__description">
        <li className="Dashdord-stat-item__description-item">
          <span>Всего:</span>
          <span>{total}</span>
        </li>
        {data.map((entry, index) => (
          <li
            id="tr"
            data-id="test"
            onMouseEnter={(event) => handleMouseEnter(event)}
            className={`Dashdord-stat-item__description-item ${entry.id === activeIDPie ? 'test' : null}`}
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
