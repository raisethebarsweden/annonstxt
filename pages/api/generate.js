import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { carModel, price, mileage, year } = req.body;

    const prompt = `
      Skriv en professionell Blocket-annons för en begagnad ${carModel} från ${year} med ${mileage} mil.
      Pris: ${price} kr.
      Inkludera:
      1. Lockande rubrik med nyckelord
      2. 3-4 stycken med fördelar och specifikationer
      3. Kontaktuppgifter (använd [Telefon] och [E-post])
      4. Neutral och säljande ton
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 300
    });

    res.status(200).json({ text: response.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI error:', error);
    res.status(500).json({ error: 'Error generating ad' });
  }
}
