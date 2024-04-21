import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./AreaCharts.scss";

const data = [
  {
    month: "Jan",
    IncidentCount: 2,
  },
  {
    month: "Feb",
    IncidentCount: 0,
  },
  {
    month: "Mar",
    IncidentCount: 0,
  },
  {
    month: "April",
    IncidentCount: 4,
  },
  {
    month: "May",
    IncidentCount: 0,
  },
  {
    month: "Jun",
    IncidentCount: 0,
  },
  {
    month: "Jul",
    IncidentCount: 0,
  },
  {
    month: "Aug",
    IncidentCount: 0,
  },
  {
    month: "Sep",
    IncidentCount: 0,
  },
  {
    month: "Oct",
    IncidentCount: 0,
  },
  {
    month: "Nov",
    IncidentCount: 0,
  },
  {
    month: "Sep",
    IncidentCount: 0,
  },
];

const AreaBarChart = () => {

const formatTooltipValue = (value) => {
  return `${parseInt(value)}`;
};

const formatYAxisLabel = (value) => {
  return `${parseInt(value)}`;
};

const formatLegendValue = (value) => {
  return `${parseInt(value)}${value.charAt(0).toUpperCase() + value.slice(1)}`;
};


  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">All Reported Emegency This Year</h5>
        <div className="chart-info-data">
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `#676767`,
                fontSize: 14,
              }}
            />
            <YAxis
            padding={{ bottom: 10, top: 10 }}
            tickFormatter={formatYAxisLabel}
            domain={[0, Math.max(...data.map(entry => entry.IncidentCount))]}
            axisLine={false}
            tickSize={0}
            tick={{
              fill: `#676767`,
              }}
              />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="IncidentCount"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
