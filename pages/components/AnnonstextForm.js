import React, { useState } from 'react';

export default function AnnonstextForm({ onSubmit }) {
  // Grundläggande fält
  const [regnr, setRegnr] = useState('');
  const [miltal, setMiltal] = useState('');
  const [pris, setPris] = useState('');
  const [telefon, setTelefon] = useState('');
  const [kommentar, setKommentar] = useState('');

  // Frågebatteri state
  const [skick, setSkick] = useState('');
  const [besiktigad, setBesiktigad] = useState(null);
  const [servicebok, setServicebok] = useState('');
  const [skador, setSkador] = useState(false);
  const [skadorText, setSkadorText] = useState('');
  const [dack, setDack] = useState('');
  const [motorOk, setMotorOk] = useState(null);
  const [motorText, setMotorText] = useState('');
  const [vaxelladaOk, setVaxelladaOk] = useState(null);
  const [vaxelladaText, setVaxelladaText] = useState('');
  const [rost, setRost] = useState(false);
  const [rostText, setRostText] = useState('');
  const [skadorYttre, setSkadorYttre] = useState(false);
  const [skadorYttreText, setSkadorYttreText] = useState('');
  const [varforSalg, setVarforSalg] = useState('');
  const [varforSalgText, setVarforSalgText] = useState('');
  const [biltyp, setBiltyp] = useState('');
  const [biltypText, setBiltypText] = useState('');

  // Status för API-anrop och resultat
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [annonstext, setAnnonstext] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setAnnonstext('');

    const data = {
      regnr,
      miltal,
      pris,
      telefon,
      kommentar,
      skick,
      besiktigad,
      servicebok,
      skador,
      skadorText,
      dack,
      motorOk,
      motorText,
      vaxelladaOk,
      vaxelladaText,
      rost,
      rostText,
      skadorYttre,
      skadorYttreText,
      varforSalg,
      varforSalgText,
      biltyp,
      biltypText,
    };

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Något gick fel vid generering av annonstext');
      }

      const result = await response.json();
      setAnnonstext(result.text || 'Inget svar från API');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 640, margin: 'auto' }}>
      <h2>Grundläggande information</h2>

      <label>
        Registreringsnummer*  
        <input
          type="text"
          value={regnr}
          onChange={(e) => setRegnr(e.target.value.toUpperCase())}
          required
        />
      </label>

      <label>
        Miltal*  
        <input
          type="number"
          value={miltal}
          onChange={(e) => setMiltal(e.target.value)}
          required
        />
      </label>

      <label>
        Pris (SEK)*  
        <input
          type="number"
          value={pris}
          onChange={(e) => setPris(e.target.value)}
          required
        />
      </label>

      <label>
        Telefonnummer (Swish)*  
        <input
          type="tel"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          placeholder="07xxxxxxxx"
          required
        />
      </label>

      <hr style={{ margin: '2rem 0' }} />

      <h2>Frågebatteri</h2>

      {/* Alla klickfrågor här, exakt som du har idag */}
      {/* Exempel: */}
      <fieldset>
        <legend>Hur är bilens allmänna skick?</legend>
        {['Toppskick', 'Bra skick', 'Bruksskick', 'Projektbil'].map(opt => (
          <label key={opt} style={{ display: 'block', margin: '0.25rem 0' }}>
            <input
              type="radio"
              name="skick"
              value={opt}
              checked={skick === opt}
              onChange={() => setSkick(opt)}
              required
            />
            {opt}
          </label>
        ))}
      </fieldset>

      {/* Lägg till resten av dina frågor exakt som du har idag */}

      {/* Valfri kommentar */}
      <label style={{ display: 'block', marginTop: '1.5rem' }}>
        Kommentar (valfritt)
        <textarea
          value={kommentar}
          onChange={(e) => setKommentar(e.target.value)}
          rows={4}
          placeholder="Lägg till extra information om bilen, skicket eller annat som kan vara relevant"
          style={{ width: '100%', marginTop: 6, padding: 8, fontSize: '1rem', borderRadius: 4, border: '1px solid #ccc' }}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: 20,
          padding: '0.75rem 1.5rem',
          backgroundColor: '#D62828',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem',
        }}
      >
        {loading ? 'Skapar annonstext...' : 'Skapa annonstext'}
      </button>

      {error && <p style={{ color: 'red', marginTop: 16 }}>{error}</p>}

      {annonstext && (
        <div style={{
          marginTop: 20,
          padding: 16,
          backgroundColor: '#f4f4f4',
          borderRadius: 6,
          whiteSpace: 'pre-wrap',
          fontFamily: 'inherit',
          fontSize: '1rem',
        }}>
          {annonstext}
        </div>
      )}
    </form>
  );
}
