import { useState } from 'react';

export default function Home() {
  const [carModel, setCarModel] = useState('');
  const [price, setPrice] = useState('');
  const [result, setResult] = useState('');

  const generateAd = () => {
    // Temporär text tills vi kopplar OpenAI
    setResult(`📢 **Till salu: ${carModel} för ${price} kr**\n\n` +
              `✅ Bra skick\n` +
              `✅ Full servicehistorik\n` +
              `✅ Besiktigad\n\n` +
              `📞 Kontakta mig på [telefonnummer]`);
  };

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#0070f3', textAlign: 'center' }}>Blocket AI Annonsgenerator 🚗</h1>
      
      <div style={{
        background: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Bilmodell:
          </label>
          <input
            type="text"
            placeholder="T.ex. Volvo XC60"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Pris (kr):
          </label>
          <input
            type="number"
            placeholder="T.ex. 150000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
        </div>

        <button
          onClick={generateAd}
          style={{
            background: '#0070f3',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            fontSize: '16px'
          }}
        >
          Generera Annonstext
        </button>
      </div>

      {result && (
        <div style={{
          marginTop: '30px',
          background: '#f9f9f9',
          padding: '20px',
          borderRadius: '8px',
          whiteSpace: 'pre-line'
        }}>
          <h2 style={{ color: '#0070f3' }}>Din Annons:</h2>
          <p>{result}</p>
          <button
            onClick={() => navigator.clipboard.writeText(result)}
            style={{
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '8px 15px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Kopiera Text
          </button>
        </div>
      )}
    </div>
  );
}
