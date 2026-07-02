import { useState, createContext, useEffect } from "react";
import formatExactTime from "../utility/timeResponse";

export const InputContext = createContext();

export default function InputContextProvider({ children }) {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");

  const [data, setData] = useState({
    summary: [],
    issues: [],
    suggestions: [],
    fixes: [],
    best_practices: [],
    complexity_analysis: [],
    security_concerns: [],
    optimization_opportunities: [],
    code_style: [],
  });

  
  const [loading, setIsLoading] = useState(false);
  const [responseTime, setResponseTime] = useState("");
  const [history, setHistory] = useState([]);
  const [format, setFormat] = useState('brief');
  const [tone, setTone] = useState('concise');

  // FIXED: Better token and auth state management
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetchHistoryFromBackend();
    }
  }, []);


  // Fetch history from backend
  const fetchHistoryFromBackend = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token found, skipping history fetch');
        setHistory([]); // Clear history if no token
        return;
      }

      const response = await fetch('http://localhost:5000/api/history/all', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Fetched history:", result);
        setHistory(result.history || []);
        setIsAuthenticated(true);
      } else {
        console.error('Failed to fetch history:', response.status);
        // If 401/403, clear auth state
        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem('token');
          setIsAuthenticated(false);
          setHistory([]);
        }
      }
    } catch (error) {
      console.error('Error fetching history:', error);
      setHistory([]);
    }
  };


  const saveHistoryToBackend = async (historyData) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token found, cannot save history');
        return;
      }

      const response = await fetch('http://localhost:5000/api/history/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(historyData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('History saved successfully:', result);

        setHistory(prev => [result.history, ...prev]);
      } else {
        console.error(' Failed to save history:', response.status);
      }
    } catch (error) {
      console.error('Error saving history:', error);
    }
  };

  // FIXED: Enhanced handleSubmit with better error handling
  // frontend - InputContextProvider.jsx
  const handleSubmit = async () => {
    setResponseTime("");
    const startTime = Date.now();
    if (!code.trim()) return;
    setIsLoading(true);

    const token = localStorage.getItem('token');

    if (!token) {
      setData({
        title: "Authentication Error",
        summary: ["Please log in first to analyze code"],
        issues: [],
        suggestions: [],
        fixes: [],
        best_practices: [],
        complexity_analysis: [],
        security_concerns: [],
        optimization_opportunities: [],
        code_style: [],
      });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/analysis/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          code,
          language,
          format,
          tone
        })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to analyze code");
      }

      const result = await res.json();
      const endTime = Date.now();
      const timeTaken = endTime - startTime;
      setResponseTime(formatExactTime(timeTaken));

      //Backend now returns { ok: true, data: parsedData }
      const parsedData = result.data;

      if (!parsedData) {
        throw new Error("No data received from server");
      }

      setData(parsedData);
      setIsLoading(false);

      // Save to backend
      await saveHistoryToBackend({
        title: parsedData.title || `${language} Code Review`,
        code,
        language,
        format,
        tone,
        analysisResult: parsedData,
      });

    } catch (e) {
      console.error("Error:", e);
      setData({
        title: "Analysis Error",
        summary: [e.message || "Failed to parse AI response or API returned invalid data."],
        issues: [],
        suggestions: [],
        fixes: [],
        best_practices: [],
        complexity_analysis: [],
        security_concerns: [],
        optimization_opportunities: [],
        code_style: [],
      });
      setIsLoading(false);
    }
  };



  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setHistory([]);
    setCode("");
    setData({
      summary: [],
      issues: [],
      suggestions: [],
      fixes: [],
      best_practices: [],
      complexity_analysis: [],
      security_concerns: [],
      optimization_opportunities: [],
      code_style: [],
    });
  };

  return (
    <InputContext.Provider
      value={{
        code,
        language,
        setCode,
        setLanguage,
        data,
        setData,
        handleSubmit,
        loading,
        responseTime,
        setResponseTime,
        history,
        setHistory,
        format,
        tone,
        setFormat,
        setTone,
        fetchHistoryFromBackend,
        isAuthenticated,
        setIsAuthenticated,
        handleLogout
      }}
    >
      {children}
    </InputContext.Provider>
  );
}


