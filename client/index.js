require('dotenv').config();
const readline = require('readline/promises');
const  { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });



const chatHistory = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function chatLoop() {
    const question = await rl.question('You: ')
}
