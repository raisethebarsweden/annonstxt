export default function PaymentGate({ userPhone }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem 1rem',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
      marginTop: '1rem'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#D62828',
        fontWeight: 700
      }}>
        Nästan klart! 👇
      </h2>

      <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
        Swisha <strong>29 kr</strong> till:
      </p>

      <h3 style={{
        fontSize: '1.6rem',
        margin: '0.5rem 0',
        color: '#000',
        fontWeight: 700,
        letterSpacing: '1px'
      }}>
        123 456 7890
      </h3>

      <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
        Ange ditt <strong>telefonnummer</strong> som meddelande.
      </p>

      <p style={{
        fontSize: '0.95rem',
        color: '#555',
        maxWidth: '400px',
        margin: '0 auto 1rem'
      }}>
        När du betalat klickar du på knappen nedan för att visa din text. Den fungerar också som kvitto på köpet.
      </p>

      <p style={{
        fontSize: '0.85rem',
        color: '#888',
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        Vi hanterar inga känsliga uppgifter och sparar inget personnummer eller kortinfo.
      </p>
    </div>
  );
}
