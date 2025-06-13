import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "InstaSearch AI service is not configured properly" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
    });

    const config = {
      responseModalities: ["IMAGE", "TEXT"],
      responseMimeType: "text/plain",
    };

    const model = "gemini-2.0-flash-exp-image-generation";
    const contents = [
      {
        role: "user" as const,
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];

    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    const images: string[] = [];
    let textResponse = "";

    for await (const chunk of response) {
      if (
        !chunk.candidates ||
        !chunk.candidates[0].content ||
        !chunk.candidates[0].content.parts
      ) {
        continue;
      }

      if (chunk.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
        const inlineData = chunk.candidates[0].content.parts[0].inlineData;
        const base64Data = inlineData.data || "";
        const mimeType = inlineData.mimeType || "image/png";

        // Return the base64 data with proper data URL format
        images.push(`data:${mimeType};base64,${base64Data}`);
      } else if (chunk.text) {
        textResponse += chunk.text;
      }
    }

    return NextResponse.json({
      success: true,
      images,
      text: textResponse,
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json(
      {
        error:
          "InstaSearch AI is temporarily unavailable. Please try again later.",
      },
      { status: 500 }
    );
  }
}
