import type { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';


async function generateLyrics(req: NextRequest) {
    const axios = require("axios");
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const body = await new Response(req.body).json()
    const text  = body.data;
    console.log(text);

    const url = "https://api.openai.com/v1/chat/completions";
    const payload = {
        "model": "gpt-3.5-turbo",
        "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": `Carefully review the provided text and identify the most critical concepts, facts, and ideas necessary for comprehending and memorizing the subject matter. Using these key points, craft a set of song lyrics that prioritize the clear and effective communication of the essential information. Focus on creating lyrics that are concise, informative, and memorable, ensuring that the content is the primary focus of the song. Employ techniques such as rhyme, repetition, alliteration, and wordplay to make the lyrics catchy and easy to recall, while maintaining the integrity and accuracy of the information presented. Structure the song with well-defined verses that explore the main themes in detail, and a chorus that reinforces the most crucial points. The lyrics should be engaging and educational, enabling the listener to learn and retain the material effectively through the power of well-crafted words set to music, with the primary emphasis being on the quality and clarity of the lyrical content. Keep the generated response to have only verse 1, chorus, verse 2, and chorus, and make sure there is no other response generated other than the lyrics. The text is "${text}"`
        }
        ],
    }

    const response = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
    });

    const songLyrics = response.data.choices[0].message.content;
    return new NextResponse(songLyrics);
}

export { generateLyrics as POST };
