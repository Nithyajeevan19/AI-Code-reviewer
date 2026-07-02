'use client'
import { useEffect, useState, useContext } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InputContext } from "../context/InputContextProvider";

const Dashboard = () => {
  const { history, fetchHistoryFromBackend } = useContext(InputContext);
  const [loading, setLoading] = useState(!history || history.length === 0);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        await fetchHistoryFromBackend();
      } catch (err) {
        console.error("Failed to fetch history:", err);
      } finally {
        setLoading(false);
      }
    };
    loadHistory();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-400">Loading...</p>;

  if (!history.length)
    return (
      <div className="flex flex-col items-center mt-20 text-gray-400">
        <p>No analysis yet 💤</p>
        <Button className="mt-4" onClick={() => window.location.href = "/"}>
          Analyze Code
        </Button>
      </div>
    );

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {history.map((item, idx) => (
        <Card key={idx} className="p-4 shadow-md rounded-2xl hover:shadow-lg transition-all border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-sm text-gray-500 mb-3">{item.language} • {item.format}</p>
          <p className="text-gray-700 mb-4 line-clamp-3">
            {item.analysisResult?.summary?.[0] || "No summary available"}
          </p>
          <Button
            variant="outline"
            onClick={() => alert(JSON.stringify(item.analysisResult, null, 2))}
          >
            View Details
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
