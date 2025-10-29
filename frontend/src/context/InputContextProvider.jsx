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

        //FIXED: Update local state correctly
        setHistory(prev => [result.history, ...prev]);
      } else {
        console.error(' Failed to save history:', response.status);
      }
    } catch (error) {
      console.error('Error saving history:', error);
    }
  };

  // FIXED: Enhanced handleSubmit with better error handling
  const handleSubmit = async () => {
    setResponseTime("");
    const startTime = Date.now();
    if (!code.trim()) return;
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `You are a senior software engineer and professional code reviewer.
                  Return the response **strictly in valid JSON** with fields:
                  {
                  "title": "",
                  "summary": [],
                  "issues": [],
                  "suggestions": [],
                  "fixes": [{"description": "", "code": ""}],
                  "best_practices": [],
                  "complexity_analysis": [],
                  "security_concerns": [],
                  "optimization_opportunities": [],
                  "code_style": []
                  }
                  Format: ${format}
                  Tone: ${tone}
                  Code (${language}):
                  ${code}`
                  },
                ],
              },
            ],
          }),
        }
      );

      const result = await res.json();
      const endTime = Date.now();
      const timeTaken = endTime - startTime;
      setResponseTime(formatExactTime(timeTaken));

      const output = result?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      if (!output) throw new Error("Empty AI response");

      const cleanOutput = output
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      const parsedData = JSON.parse(cleanOutput);
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
      console.error(" Error:", e);
      setData({
        title: "Analysis Error",
        summary: ["Failed to parse AI response or API returned invalid data."],
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


  // NEW: Method to handle logout
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
