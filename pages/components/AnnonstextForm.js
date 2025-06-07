import { useState } from 'react';

export default function AnnonstextForm({ onSubmit }) {
  const [regnummer, setRegnummer] = useState('');
  const [miltal, setMiltal] = useState('');
  const [pris, setPris] = useState('');
  const [kommentarer, setKommentarer] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ regnummer, miltal, pris, kommentarer, phone });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input
        required
        value={regnummer}
        onChange={(e) => setRegnummer(e.target.value)}
        placeholder="Registreringsnummer"
        style={inputStyle}
      />
      <input
        required
        value={miltal}
        onChange={(e) => setMiltal(e.target.value)}
        placeholder="Miltal"
        style={inputStyle}
      />
      <input
        value={pris}
        onChange={(e) => setPris(e.target.value)}
        placeholder="Pris (valfritt)"
        style={inputStyle}
      />
      <textarea
        value={kommentarer}
        onChange={(e) => setKommentarer(e.target.value)}
        placeholder="Kommentarer (valfritt)"
        rows={3}
        style={{ ...inputStyle, resize: 'vertical' }}
      />
      <input
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Ditt telefonnummer (för Swish)"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Skapa annonstext
      </button>
    </form>
  );
}

// 🔧 Stil för inputs och knapp
const inputStyle = {
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  outlineColor: '#D62828'
};

const buttonStyle = {
  backgroundColor: '#D62828',
  color: 'white',
  padding: '0.75rem',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer'
};
