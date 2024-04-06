import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async function POST(
    req: Request
) {
    const body = await req.json();
    const {text} = body; 

    const prompt = 'You are a short song writer. Analyze the provided text and extract the most important concepts, facts, and ideas that are crucial for understanding and memorizing the subject matter. Using these key points, compose a set of song lyrics that effectively convey the essential information in a catchy, rhythmic, and memorable manner. Employ techniques such as rhyme, repetition, alliteration, and wordplay to create lyrics that are easy to remember and recall. Structure the song with clear verses and a chorus that summarize the main themes, making sure to present the information in a logical and coherent order. The lyrics should be concise and engaging, helping them to learn and retain the material effectively through the power of music.'
        
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }, {role: 'user', content: text }],
        model: "gpt-3.5-turbo",
        max_tokens: 200,
    });
        
        const lyrics =  completion.choices[0].message.content;
    
        return NextResponse.json({ lyrics });
}