import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.CHATGPT_API_KEY || "My Api Key",
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI(message) {
  try {
    const savedMessages = localStorage.getItem("chatMessages");
    const messageHistory = savedMessages ? JSON.parse(savedMessages) : [];
    console.log("chat history: ",messageHistory);
    const allData = JSON.parse(localStorage.getItem("data"));

    const {weather, biodiversityCount} = allData;
    console.log(weather);
    const {lat,lon} = weather.coord;
    const {temp, temp_max,temp_min,feels_like} = weather.main;

    const weatherReport = `Biodiversity Count: ${biodiversityCount}, Weather: temp: ${temp}°K, feels_like: ${feels_like}°K, min_temp: ${temp_min}°K, max_temp: ${temp_max}°K, coordinates: lat: ${lat}, lon: ${lon}`;

console.log(weatherReport);

    const formattedMessages = [
      {
        role: "system",
        content:
          `You are a urban biodiversity planer. You also check the risk to the biodiversity due to constructions.You are give the biological diversity count and the weather.`,
      },
      {
        role: "user",
        content: `${weatherReport}`
      },
      ...messageHistory.map((msg) => ({
        role: msg.isBot ? "assistant" : "user",
        content: msg.text,
      })),
      {
        role: "user",
        content: message,
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: formattedMessages,
      temperature: 0.1,
      max_tokens: 200,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error in sendMsgToOpenAI:", error);
    throw error;
  }
}