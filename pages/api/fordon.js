// pages/api/fordon.js
import * as api from 'fordonsuppgifter-api-wrapper';


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Endast POST tillåtet' });
  }

  const { regnr } = req.body;

  if (!regnr) {
    return res.status(400).json({ error: 'Registreringsnummer saknas' });
  }

  try {
    console.log('Förfrågan med regnr:', regnr);
    const data = await api.GetVehicleInformation(regnr);
    console.log('Data från API:', data);
    return res.status(200).json({ data });
  } catch (error) {
    console.error('Fel vid hämtning av fordonsinfo:', error);
    return res.status(500).json({ 
      error: 'Fel vid hämtning av fordonsinfo', 
      details: error.message || error.toString() 
    });
  }
}
