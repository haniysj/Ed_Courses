"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function LevelDistributionChart({ data }: { data: { level: string; count: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eceef2" />
        <XAxis dataKey="level" fontSize={12} stroke="#8691aa" />
        <YAxis fontSize={12} stroke="#8691aa" allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#1968f5" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
