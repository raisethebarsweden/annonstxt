export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Hantera POST-logik här, t.ex. läsa JSON i req.body
    const { regnr } = req.body;
    if (!regnr) {
      return res.status(400).json({ error: 'Registreringsnummer saknas' });
    }
    // Gör något med regnr, t.ex. hämta data
    return res.status(200).json({ message: `POST: Registreringsnummer är ${regnr}` });
  } else if (req.method === 'GET') {
    // Enkelt svar för GET, så du kan testa i webbläsaren
    return res.status(200).json({ message: 'GET: Testroute fungerar!' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ error: `Metod ${req.method} inte tillåten` });
  }
}
