import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

function BarChartBox(props: Props) {
  return (
    <div className='barChartBox'>
      <h3>{props.title}</h3>
      <div className='chart'>
        <ResponsiveContainer width='99%' height={250}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;
