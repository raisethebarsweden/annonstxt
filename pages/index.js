import { useState } from 'react';

export default function Home() {
  const [carModel, setCarModel] = useState('');
  const [price, setPrice] = useState('');
  const [mileage, setMileage] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateAd = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carModel, price, mileage, year }),
      });

      if (!response.ok) throw new Error('Något gick fel');
      const data = await response.json();
      setResult(data.text);
    } catch (error) {
      console.error('Error:', error);
      setResult('Fel: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Blocket AI Generator</h1>
      
      {/* Formulär */}
      <div style={{ display: 'grid', gap: '15px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Bilmodell (t.ex. Volvo XC60)"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
        <input
          type="number"
          placeholder="Pris (kr)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Miltal"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
        <input
          type="number"
          placeholder="Årsmodell"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        
        <button 
          onClick={generateAd} 
          disabled={isLoading}
          style={{ background: isLoading ? 'gray' : '#0070f3' }}
        >
          {isLoading ? 'Genererar...' : 'Skapa Annons'}
        </button>
      </div>

      {/* Resultat */}
      {result && (
        <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
          <h3>Din Annons:</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{result}</p>
          <button onClick={() => navigator.clipboard.writeText(result)}>
            Kopiera Text
          </button>
        </div>
      )}
    </div>
  );
}
