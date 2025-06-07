export default function Villkor() {
  return (
    <div style={{
      backgroundColor: '#F9F9F6',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Inter, sans-serif',
      color: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '640px',
        width: '100%',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Användarvillkor</h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
          Den här sidan är under uppbyggnad. Här kommer du kunna läsa om våra fullständiga villkor för användning av Annonstext.se.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
          Har du frågor innan dess? Kontakta oss på <a href="mailto:info@annonstext.se" style={{ color: '#D62828' }}>info@annonstext.se</a>.
        </p>
      </div>
    </div>
  );
}
