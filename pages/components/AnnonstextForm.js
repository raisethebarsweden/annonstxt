import React, { useState } from 'react';

export default function AnnonstextForm({ onSubmit }) {
  // Grundläggande fält
  const [regnr, setRegnr] = useState('');
  const [miltal, setMiltal] = useState('');
  const [pris, setPris] = useState('');
  const [telefon, setTelefon] = useState('');
  const [kommentar, setKommentar] = useState('');

  // Frågebatteri state (exempel, lägg till alla som du hade)
  const [skick, setSkick] = useState('');
  const [besiktigad, setBesiktigad] = useState(null);
  const [servicebok, setServicebok] = useState('');
  const [skador, setSkador] = useState(false);
  const [skadorText, setSkadorText] = useState('');
  // ... och så vidare med resten av frågorna

  const handleSubmit = (e) => {
    e.preventDefault();

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
      // ... alla andra state-variabler
    };

    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log('Data att skicka:', data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Lägg in alla dina fält och frågebatteri som tidigare, men ta bort knappen "Hämta fordonsinfo" */}
      
      <label>
        Registreringsnummer*
        <input
          type="text"
          value={regnr}
          onChange={(e) => setRegnr(e.target.value.toUpperCase())}
          required
        />
      </label>
      {/* Resten av fälten ... */}

      <button type="submit">Skapa annonstext</button>
    </form>
  );
}
