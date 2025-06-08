import * as api from 'fordonsuppgifter-api-wrapper';

export default async function handler(req, res) {
  try {
    const data = await api.GetVehicleInformation("JWZ148");  // Testregnummer
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
