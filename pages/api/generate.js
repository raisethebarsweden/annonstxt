import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Endast POST är tillåtet' });
  }

  const { regnummer, miltal, pris, kommentarer } = req.body;

  const prompt = `Skriv en professionell annonstext för en bil med registreringsnummer ${regnummer}, miltal: ${miltal}, pris: ${pris || 'ej angivet'}. Kommentarer: ${kommentarer || 'Inga'}. Texten ska vara 3–5 meningar, personlig men professionell.`;

  const chat = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
  });

  const text = chat.choices[0].message.content;
  res.status(200).json({ text });
}
