import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Nyckelordet är 'apiKey' (inte 'apikey')
});

console.log('API Key:', process.env.OPENAI_API_KEY ? 'Exists' : 'MISSING');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Endast POST tillåts' });
  }

  try {
    const { carModel, price, mileage, year } = req.body;

const prompt = `Skriv en begagnatbilannons som en privatperson skulle göra det. Inkludera:

1. Nyligt underhåll:
- Senaste service (typ och när)
- Nya delar (däck, bromsar etc.)
- Tillbehör som följer med

2. Bilens starka sidor:
- Praktiska fördelar
- Köregenskaper
- Design och komfort

3. Anledning till försäljning:
- Enkel förklaring ("Vi säljer eftersom...")

4. Objektiva skador/defekter:
- Synliga skador (repor, bucklor etc.)
- Tekniska fel som finns
- Inga subjektiva bedömningar

Bilinfo:
${carModel} ${year}, ${mileage} mil
Pris: ${price} kr

Exempel för Porsche Panamera:
"Min Porsche Panamera 2020 med 5 000 mil säljes nu när vi behöver större bil. Nyligt:
- Service enligt schemat hos Porsche
- Nya Michelin-sommardäck 2023
- ISOFIX-fästen i baksätet
- Takbox ingår

Vad jag uppskattat:
• Kombination av sportig körning och komfort
• Rymlig för en sportbil
• Tidlös design

Skador/defekter:
• Liten repa på höger kofångare (se bild)
• Mindre stenskott på vindrutan
• Takluckan låter lite vid hög hastighet

Så här skriver man:

"Vi säljer eftersom..."

"Hör gärna av dig"

"Skicka meddelande om du är intresserad"

Så här skriver man INTE:

"Missa inte denna unika chans"

"Begränsat tillfälle"

"Boka provkörning direkt"

Pris: 750 000 kr. Kontakta mig om du vill komma och titta."`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: prompt
      }],
      temperature: 0.7,
      max_tokens: 500
    });

    const generatedAd = response.choices[0].message.content;
    
    return res.status(200).json({ 
      ad: generatedAd 
    });

  } catch (error) {
    console.error('OpenAI error:', error);
    return res.status(500).json({ 
      error: 'Kunde inte generera annons',
      details: error.message 
    });
  }
}