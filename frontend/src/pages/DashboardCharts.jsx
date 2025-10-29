import React, { useEffect, useState } from "react";
import api from "../api/apiClient";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { parseISO, format } from "date-fns";


const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c", "#d0ed57"];

function normalizeTimeSeries(timeseries = []) {
  // backend may return { _id: "YYYY-MM-DD", count } or { date: "YYYY-MM-DD", count }
  return timeseries.map(t => {
    const day = t.date ?? t._id ?? t.day ?? "";
    const count = t.count ?? t.value ?? 0;
    // produce label like "MM-dd"
    let label = day;
    try {
      label = format(parseISO(day), "MM-dd");
    } catch (e) {
      // fallback: keep original
    }
    return { day: label, rawDay: day, count };
  });
}

export default function DashboardCharts() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/dashboard"); // ensure backend auth header is provided (x-user-id or cookie)
      setDashboard(res.data);
    } catch (err) {
      console.error("Error loading dashboard", err);
      setError(err?.response?.data?.message || err.message || "Failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div className="p-6">Loading dashboard...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!dashboard) return null;

  const { summary = {}, timeseries = [], topQueries = [], categories = [], recent = [] } = dashboard;
  const lineData = normalizeTimeSeries(timeseries);
  const pieData = (categories || []).map((c) => ({ name: c._id, value: c.count }));

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">User Dashboard (Charts)</h1>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <div className="text-sm text-gray-500">Total searches</div>
          <div className="text-2xl font-bold">{summary.totalSearches ?? 0}</div>
        </div>
        <div className="p-4 border rounded">
          <div className="text-sm text-gray-500">Unique queries</div>
          <div className="text-2xl font-bold">{summary.uniqueQueriesCount ?? 0}</div>
        </div>
        <div className="p-4 border rounded">
          <div className="text-sm text-gray-500">Avg results / search</div>
          <div className="text-2xl font-bold">{summary.avgResults ?? 0}</div>
        </div>
      </div>

      {/* Charts area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 border rounded">
          <h3 className="font-medium mb-2">Searches (last 30 days)</h3>
          {lineData.length === 0 ? (
            <div className="text-gray-500">No data yet</div>
          ) : (
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis allowDecimals={false} />
                  <Tooltip formatter={(value) => [value, "Searches"]} />
                  <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-medium mb-2">Category breakdown</h3>
          {pieData.length === 0 ? (
            <div className="text-gray-500">No categories yet</div>
          ) : (
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90} label>
                    {pieData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>

      {/* Top queries + recent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 border rounded">
          <h3 className="font-medium mb-2">Top queries</h3>
          {topQueries.length === 0 ? (
            <div className="text-gray-500">No queries yet</div>
          ) : (
            <ol className="pl-5">
              {topQueries.map((q) => (
                <li key={q._id} className="py-1">
                  <strong>{q._id}</strong> <span className="text-sm text-gray-500">— {q.count}</span>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-medium mb-2">Recent searches</h3>
          {recent.length === 0 ? (
            <div className="text-gray-500">No recent searches</div>
          ) : (
            <div className="overflow-auto max-h-64">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left pr-4">When</th>
                    <th className="text-left pr-4">Query</th>
                    <th className="text-left pr-4">Cats</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map(r => (
                    <tr key={r._id}>
                      <td className="pr-4">{new Date(r.createdAt).toLocaleString()}</td>
                      <td className="pr-4">{r.query}</td>
                      <td>{(r.categories || []).join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

