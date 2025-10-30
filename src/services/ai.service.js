const{ GoogleGenAI } = require("@google/genai");
const { config } = require("dotenv");

const ai = new GoogleGenAI({});

async function generateResponse(content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
  });
  return response.text;
}


async function generateVector(content) {
  const response = await ai.models.embedContent({
    model: "gemini-emedding-001",
    config: {
      outputDimensionality: 768,
    }
})
return response.embeddings;
}

module.exports = {generateResponse , generateVector};

