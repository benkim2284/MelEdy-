import type { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { Anthropic } from '@anthropic-ai/sdk';

async function generateLyrics(req: NextRequest) {
    const anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const body = await new Response(req.body).json();
    const text = body.data;
    console.log(text);

    const prompt = `Carefully review this text and create educational song lyrics from it. The lyrics should:
    - Capture the most important concepts and facts
    - Be concise and memorable
    - Use rhyme, repetition, and wordplay
    - Have 2 verses and a chorus that reinforces key points
    - Focus purely on clear communication of the content
    - If the content matches a well-known song (like ABC's or Twinkle Twinkle), use those lyrics instead

    The text to convert is: "${text}"

    Provide ONLY the lyrics with appropriate line breaks between verses and chorus. No additional commentary.`;

    const response = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1000,
        temperature: 0.7,
        system: prompt,
        messages: [
            { role: "user", content: prompt }
        ]
    });

    const songLyrics = response.content[0].text.strip();
    return new NextResponse(songLyrics);
}

export { generateLyrics as POST };


import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  // defaults to process.env["ANTHROPIC_API_KEY"]
  apiKey: "my_api_key",
});

const msg = await anthropic.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 1000,
  temperature: 0,
  system: "\"\"You are an expert Manim lyric video animator that only gives python code. Create Python code for a Manim animation based on the following topic, lyrics, or question:\n    {lyrics}\n\n    Guidelines for the Manim code:\n    1. Define a single scene class named 'GeneratedScene'.\n    2. Include all necessary imports at the beginning.\n    3. Create an informative animation focused on the main concept, aiming for a duration of 30-60 seconds.\n    4. Ensure proper spacing and positioning of elements to avoid overlapping.\n    5. Use appropriate scaling for text and mathematical expressions.\n    6. Ensure that your response only includes the code.\n    7. Output your response in a structured JSON format.\n\n    Provide ONLY the complete JSON with runnable Python code for Manim. Do not include any explanations or additional text outside the code. \n    \n    Output your response in JSON: {\"Script\" : \"INSERT CODE HERE\"}\"\"\"",
  messages: [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "lyrics = abcdefghijklmnopqrstuv"
        }
      ]
    }
  ]
});
console.log(msg);