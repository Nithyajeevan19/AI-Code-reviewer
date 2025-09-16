import { useState, createContext,useEffect  } from "react";
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

  const [loading,setIsLoading]=useState(false)
  const [responseTime,setResponseTime]=useState("")
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('savedHistory')) || []);  
  const [format,setFormat]=useState('brief')
  const [tone,setTone]=useState('concise')

  useEffect(()=>{
    const savedHistory=localStorage.getItem('savedHistory')
    if (savedHistory){
      setHistory(JSON.parse(savedHistory))
    }
    else{
      setHistory([])
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('savedHistory',JSON.stringify(history))
  },[history])


   useEffect(()=>{
        const savedFormat=localStorage.getItem('formatSaved') || 'brief'
        const savedTone=localStorage.getItem('toneSaved') || 'concise'
        if (savedFormat){
            return setFormat(savedFormat)
        }
        if (savedTone){
            return setTone(savedTone)
        }
    },[])

    useEffect(()=>{
      localStorage.setItem('formatSaved',format)
    },[format])

    useEffect(()=>{
        localStorage.setItem('toneSaved',tone)
    },[tone])
  
  
  const handleSubmit = async () => {
    setResponseTime("")
    const startTime=  Date.now()
    if (!code.trim()) return;
    setIsLoading(true)

    try {
        const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +import.meta.env.VITE_API_KEY,
          {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify({
              contents: [
                  {
                  role: "user",
                  parts: [
                      {
                      text: `You are a senior software engineer and professional code reviewer.  
                              Your task is to analyze the following ${language} code and generate a structured review.  
                              Return the response STRICTLY in valid JSON format.
                              The JSON must include the following fields:
                              {
                              "title":"short title",
                              "summary": ["Provide 3-5 key points summarizing what the code does and its overall quality."],
                              "issues": ["List specific issues, bugs, or potential problems found in the code."],
                              "suggestions": ["Provide actionable suggestions for improving readability, performance, or maintainability."],
                              "fixes": [{"description":"", "code":""}],
                              "best_practices": ["Mention relevant language-specific or general software engineering best practices that apply to this code."],
                              "complexity_analysis": ["Say whether the code is simple, moderate, or complex, and why."],
                              "security_concerns": ["Highlight any possible security vulnerabilities or risks. If none, return an empty array."],
                              "optimization_opportunities": ["Suggest ways to improve efficiency, reduce redundancy, or optimize performance."],
                              "code_style": ["Give feedback on formatting, naming conventions, and adherence to style guidelines."]
                              }

                              IMPORTANT: Use this output style:
                              - Format: ${format}  (if 'brief' produce short 1-line summary + 2 bullets; 'bullets' produce up to 5 bullets; 'steps' produce numbered step-by-step; 'code-first' prioritize code snippets first)
                              - Tone: ${tone}     (concise | detailed | beginner | formal)
                              Code to review:
                              ${code}`
                      },
                  ],
                  },
              ],
              }),
          }
        );

        const result = await res.json();

        const endTime=Date.now()

        let output= await  result.candidates[0]?.content?.parts[0]?.text || "No response"

        let cleanOutput = output
            .replace(/```/g, '')                     
            .replace(/```\s*/g, "")
            .replace(/^[^{]*({.*})[^}]*$/s, '$1') // Extract JSON object
            .trim();

        const timeTaken=endTime-startTime
        const totalTimeTakenResponse=formatExactTime(timeTaken)
        setResponseTime(totalTimeTakenResponse)
        
        let parsedData;
            try{
                parsedData=JSON.parse(cleanOutput)
                setData(parsedData)
                setIsLoading(false)

                const historyItem = {
                    id: Date.now(),
                    title: parsedData.title,
                    data: parsedData,
                    orginalCode:code
                }
                setHistory(prevHistory => [historyItem, ...prevHistory]);
                
            }catch(e){
                console.log("Json error",e)
                parsedData={
                    summary: [],
                    issues: [],
                    suggestions: [],
                    fixes: [],
                    best_practices: [],
                    code_style: [],
                    title:""
                }
                setData(parsedData)
            }
            
    }catch (err) {
        console.error(err);
        setData("Error fetching AI response.");
        setResponseTime("")
    }

};


  return (
    <InputContext.Provider
      value={{ code, 
            language,
            setCode, 
            setLanguage, 
            data, 
            setData,
            handleSubmit,
            loading,
            responseTime ,
            setResponseTime, 
            history,
            setHistory,
            format,
            tone,
            setFormat,
            setTone}}
    >
      {children}
    </InputContext.Provider>

  );
}
