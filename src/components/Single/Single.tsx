import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

type Props = {
  id: string | number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: {
      name: string;
      color: string;
    }[];
    data: object[];
  };
  activities?: {
    time: string;
    text: string;
  }[];
};

const Single = (props: Props) => {
  return (
    <div className='single'>
      <div className='left'>
        <div className='info'>
          <div className='topInfo'>
            {props.img && <img src={props.img} alt='' />}
            <h1>{props.title} </h1>
            <button>Update</button>
          </div>
          <div className='details'>
            {Object.entries(props.info).map(item => (
              <div className='item' key={item[0]}>
                <span className='itemTitle'>{item[0]}:</span>
                <span className='itemValue'>{item[1]} </span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {props.chart && (
          <div className='chart'>
            <ResponsiveContainer width='99%' height='100%'>
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map(dataKey => (
                  <Line
                    key={dataKey.name}
                    type='monotone'
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                    activeDot={{ r: 8 }}
                  />
                  // <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className='right'>
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity, i) => (
              <li key={i}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
