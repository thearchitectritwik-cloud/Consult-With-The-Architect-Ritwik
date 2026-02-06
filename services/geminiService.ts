import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Ideally, the API key should be securely handled. 
// For this demo, we assume process.env.API_KEY is available.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the "Digital Architect's Assistant" for the consultancy firm "Consult With The Architect Ritwik (T.A.R.)", founded by Ritwik Biswas under Branbows Infotech Solutions.

Your goal is to assist visitors in understanding the unique value propositions of the firm.

Key Information:
1.  **Founder**: Ritwik Biswas (The Architect).
2.  **Parent Company**: Branbows Infotech Solutions.
3.  **Pricing Models**:
    *   **The Value Exchange (Ultra Premium)**: Cost is $0 monetary. It operates on a "Give and Take" policy. Requires high-value barter or strategic partnership.
    *   **The Year Protocol (Standard)**: Cost is the current year number in the client's currency (e.g., 2025 INR, 2025 USD).
4.  **Tone**: Sophisticated, professional, slightly mysterious but helpful. Use architectural metaphors (blueprints, foundations, structures).

If a user asks about pricing, explain the two models clearly.
If a user asks about "Value Exchange", emphasize it is for select high-net-worth individuals or strategic partners only.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!apiKey) {
    return "I am currently offline (API Key missing). Please contact the firm directly.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Transform history to the format expected by the SDK if needed, 
    // but for simple single-turn or managed history, we can use the chat API.
    // Here we use generateContent for simplicity with system instruction included.
    
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I pondered that, but could not formulate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Architect is currently unavailable. Please try again later.";
  }
};