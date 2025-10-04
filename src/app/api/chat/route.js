import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message)
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const filePath = path.join(process.cwd(), "data", "my_knowledge.txt");
    const context = fs.readFileSync(filePath, "utf-8");

    const prompt = `
You are Soham Tapse's personal AI assistant. 
You must answer only using the information from the context below.
If the question is not related to the context, say exactly: "Sorry, I dont have that information."

Context:
${context}

User Question:
${message}
`;

    const result = await model.generateContent(prompt);
    const output = result.response.text();

    return NextResponse.json({ answer: output });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
