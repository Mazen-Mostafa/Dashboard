"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Schools", value: 350, color: "green" },
  { name: "Reviews", value: 1200, color: "yellow" },
  { name: "Visits", value: 800, color: "red" },
  { name: "sales", value: 1000, color: "dodgerblue" },
];

const colors = [
  "#3B82F6", // blue
  "#10B981", // green
  "#8B5CF6", // purple
  "#F59E0B", // amber
];

const LandingCard = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      className={" p-3.5 rounded-2xl"}
    >
      <BarChart data={data}>
        <XAxis tick={{ fill: "#64748B" }} axisLine={false} tickLine={false} />

        <YAxis tick={{ fill: "#64748B" }} axisLine={false} tickLine={false} />

        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LandingCard;
