import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";


dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyzeCode = async (req, res) => {
  try {
    const { code, language, format, tone } = req.body;

    // Validate input
    if (!code || !language) {
      return res.status(400).json({
        ok: false,
        message: "Code and language are required"
      });
    }

    //Check API key
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY not found in .env");
      return res.status(500).json({
        ok: false,
        message: "Server configuration error: Missing GEMINI_API_KEY"
      });
    }

    console.log("Sending request to Gemini...");

    const systemPrompt = `You are a senior software engineer and professional code reviewer. 
        Your job is to analyze code and provide detailed, structured feedback in JSON format.
        Always respond with ONLY valid JSON, no markdown, no explanations.

        Analyze this ${language} code and return a structured JSON review matching the required JSON schema.
        Review format: ${format || 'brief'}
        Tone: ${tone || 'concise'}

        CODE TO REVIEW:
        \`\`\`${language}
        ${code}
        \`\`\`
        `;

    // Define JSON schema for Gemini output
    const schema = {
      type: "OBJECT",
      properties: {
        title: { type: "STRING" },
        summary: { type: "ARRAY", items: { type: "STRING" } },
        issues: { type: "ARRAY", items: { type: "STRING" } },
        suggestions: { type: "ARRAY", items: { type: "STRING" } },
        fixes: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              description: { type: "STRING" },
              code: { type: "STRING" }
            },
            required: ["description", "code"]
          }
        },
        best_practices: { type: "ARRAY", items: { type: "STRING" } },
        complexity_analysis: { type: "ARRAY", items: { type: "STRING" } },
        security_concerns: { type: "ARRAY", items: { type: "STRING" } },
        optimization_opportunities: { type: "ARRAY", items: { type: "STRING" } },
        code_style: { type: "ARRAY", items: { type: "STRING" } }
      },
      required: [
        "title",
        "summary",
        "issues",
        "suggestions",
        "fixes",
        "best_practices",
        "complexity_analysis",
        "security_concerns",
        "optimization_opportunities",
        "code_style"
      ]
    };

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.2
      }
    });

    const result = await model.generateContent(systemPrompt);
    const responseText = result.response.text();

    console.log("Gemini response received");

    console.log("Raw response:", responseText.slice(0, 200));


    let parsedData;

    try {
      parsedData = JSON.parse(responseText);
    } 

    catch (parseErr) {
      console.warn("JSON parsing failed:", parseErr.message);

      // Fallback if parsing fails
      parsedData = {
        title: "Code Review",
        summary: [responseText.slice(0, 300)],
        issues: [],
        suggestions: [],
        fixes: [],
        best_practices: [],
        complexity_analysis: [],
        security_concerns: [],
        optimization_opportunities: [],
        code_style: []
      };

    }

    // Return parsed data
    return res.status(200).json({
      ok: true,
      data: parsedData
    });


  } catch (error) {
    console.error("Gemini analysis error:", error);

    return res.status(500).json({
      ok: false,
      message: "Error analyzing code with Gemini",
      error: error.message
    });

  }

};
