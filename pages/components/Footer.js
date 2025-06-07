import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      marginTop: '3rem',
      padding: '2rem 1rem',
      textAlign: 'center',
      fontSize: '0.85rem',
      color: '#555',
      borderTop: '1px solid #eee'
    }}>
      <p style={{ marginBottom: '0.5rem' }}>
        © {new Date().getFullYear()} Annonstext.se – Alla rättigheter förbehållna
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <Link href="/om" style={linkStyle}>Om oss</Link>
        <Link href="/villkor" style={linkStyle}>Villkor</Link>
        <Link href="/policy" style={linkStyle}>Integritetspolicy</Link>
        <Link href="/kontakt" style={linkStyle}>Kontakt</Link>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: '#D62828',
  textDecoration: 'none',
  fontWeight: 500
};
