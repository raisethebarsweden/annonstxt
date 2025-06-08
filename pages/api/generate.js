import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Endast POST är tillåtet' });
  }

  try {
    const {
      regnr, miltal, pris, kommentar,
      skick, besiktigad, servicebok, skador, skadorText,
      dack, motorOk, motorText, vaxelladaOk, vaxelladaText,
      rost, rostText, skadorYttre, skadorYttreText,
      varforSalg, varforSalgText, biltyp, biltypText
    } = req.body;

    // Skapa en snygg och tydlig prompt med all info
    const prompt = `
Skriv en professionell, ärlig och säljande annonstext för en bil baserat på följande information:

Registreringsnummer: ${regnr}
Miltal: ${miltal}
Pris: ${pris || 'ej angivet'}
Kommentar: ${kommentar || 'Ingen extra kommentar'}

Bilens skick: ${skick}
Besiktigad: ${besiktigad}
Servicebok: ${servicebok}
Kända skador: ${skador ? skadorText : 'Inga'}
Däck: ${dack}
Motorstatus: ${motorOk === 'Ja' ? 'Felfri' : motorText}
Växellåda: ${vaxelladaOk === 'Ja' ? 'Felfri' : vaxelladaText}
Rost: ${rost ? rostText : 'Ingen rost'}
Yttre skador: ${skadorYttre ? skadorYttreText : 'Inga'}
Varför säljs bilen: ${varforSalg === 'Annat' ? varforSalgText : varforSalg}
Biltyp: ${biltyp === 'Annat' ? biltypText : biltyp}

Texten ska vara 3-5 meningar, personlig och professionell.
`;

    const chat = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
    });

    const text = chat.choices[0].message.content;
    res.status(200).json({ text });

  } catch (error) {
    console.error('OpenAI error:', error);
    res.status(500).json({ error: 'Något gick fel vid generering av annonstext.' });
  }
}
