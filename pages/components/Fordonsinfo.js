import React, { useState } from 'react';

export default function Fordonsinfo() {
  const [regnr, setRegnr] = useState('');
  const [fordon, setFordon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchFordonsinfo() {
    setLoading(true);
    setError(null);
    setFordon(null);

    try {
      const response = await fetch('/api/fordon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ regnr }), // skickar registreringsnummer till API
      });

      if (!response.ok) {
        throw new Error('Något gick fel med API-anropet');
      }

      const data = await response.json();
      setFordon(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Registreringsnummer"
        value={regnr}
        onChange={(e) => setRegnr(e.target.value)}
      />
      <button onClick={fetchFordonsinfo} disabled={loading}>
        {loading ? 'Laddar...' : 'Hämta fordonsinfo'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {fordon && (
        <pre>{JSON.stringify(fordon, null, 2)}</pre> // Visa datan snyggt
      )}
    </div>
  );
}
