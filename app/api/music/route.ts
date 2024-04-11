async function customGenerateAudio(lyrics, title, genre) {
    const axios = require("axios");
    const baseUrl = process.env.NEXT_PUBLIC_MUSICGEN_URL;

    const payload = {
      "prompt": `${lyrics}`,
      "tags": `${genre}`,
      "title": `${title}`,
      "make_instrumental": false,
      "wait_audio": true
    }
    const url = `${baseUrl}/api/custom_generate`;

    const response = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    const ids = `${data[0].id},${data[1].id}`;

    return [`${data[0].audio_url}`, `${data[1].audio_url}`];
}

export { customGenerateAudio as POST };

// export async function generateAudioByPrompt(payload) {
//   const url = `${baseUrl}/api/generate`;
//   const response = await axios.post(url, payload, {
//     headers: { "Content-Type": "application/json" },
//   });
//   return response.data;
// }

// export async function getAudioInformation() {
//   const axios = require("axios");
//   const baseUrl = "http://localhost:3000";
//   const url = `${baseUrl}/api/get`;
//   const response = await axios.get(url);
//   return response.data;
// }

// export async function getQuotaInformation() {
//   const axios = require("axios");
//   const baseUrl = "http://localhost:3000";
//   const url = `${baseUrl}/api/get_limit`;
//   const response = await axios.get(url);
//   return response.data;
// }
