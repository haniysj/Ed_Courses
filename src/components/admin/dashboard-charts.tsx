"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#1968f5", "#2f8bff", "#57adff", "#8dcbff", "#bce0ff", "#d9edff"];

export function BookingsByMonthChart({ data }: { data: { month: string; bookings: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eceef2" />
        <XAxis dataKey="month" fontSize={12} stroke="#8691aa" />
        <YAxis fontSize={12} stroke="#8691aa" allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="bookings" fill="#1968f5" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function RevenueByMonthChart({ data }: { data: { month: string; revenue: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eceef2" />
        <XAxis dataKey="month" fontSize={12} stroke="#8691aa" />
        <YAxis fontSize={12} stroke="#8691aa" />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#1968f5" strokeWidth={2.5} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function PopularCoursesChart({ data }: { data: { name: string; bookings: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} layout="vertical" margin={{ left: 24 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eceef2" />
        <XAxis type="number" fontSize={12} stroke="#8691aa" allowDecimals={false} />
        <YAxis type="category" dataKey="name" width={140} fontSize={11} stroke="#8691aa" />
        <Tooltip />
        <Bar dataKey="bookings" fill="#2f8bff" radius={[0, 6, 6, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function CategoryBreakdownChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
