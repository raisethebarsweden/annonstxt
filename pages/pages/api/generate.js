import OpenAI from 'openai';
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async function handler(req, res) {
  const { carModel, price } = req.body;
  const prompt = `Skriv en perfekt Blocket-annons för en ${carModel} till ${price} kr...`;
  const response = await openai.chat.completions.create({ /* ... */ });
  res.status(200).json({ text: response.choices[0].message.content });
}
