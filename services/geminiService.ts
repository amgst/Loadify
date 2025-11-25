import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedLoaderResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateLoaderWithAI = async (prompt: string): Promise<GeneratedLoaderResponse> => {
  const model = "gemini-2.5-flash";
  
  const systemInstruction = `
    You are a CSS animation expert. Create a production-ready, lightweight, single-element (if possible) or minimal-structure CSS loader based on the user's description.
    
    CRITICAL CSS RULES:
    1. Use CSS variables for customization:
       - var(--loader-color) for the main color.
       - var(--loader-size) for the width/height (assume it's a square aspect ratio).
       - var(--loader-speed) for the animation duration.
    2. The CSS should be scoped to a class name that describes the loader (e.g., .loader-pulse, .loader-wave).
    3. Ensure the CSS is valid and includes all necessary @keyframes.
    4. Do not include 'body' or 'html' styles.
    5. The HTML should be minimal, e.g., <div class="loader-pulse"></div> or with minimal spans if needed.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            html: { type: Type.STRING, description: "The HTML structure for the loader." },
            css: { type: Type.STRING, description: "The CSS styles for the loader." }
          },
          required: ["name", "html", "css"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as GeneratedLoaderResponse;
  } catch (error) {
    console.error("Error generating loader:", error);
    throw error;
  }
};
