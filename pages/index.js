import { useState } from 'react';
import Head from 'next/head';
import emailjs from 'emailjs-com';
import AnnonstextForm from './components/AnnonstextForm';
import PaymentGate from './components/PaymentGate';
import Footer from './components/Footer';

export default function Home() {
  const [showPaywall, setShowPaywall] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [paymentLog, setPaymentLog] = useState([]);

  const handleFormSubmit = async (formData) => {
    setUserPhone(formData.phone);
    setShowPaywall(true);

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const { text } = await response.json();
    setGeneratedText(text);
  };

  const handleManualApprove = () => {
    const timestamp = new Date().toLocaleString();

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      { user_phone: userPhone, timestamp },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => console.log('✅ E-postnotis skickad!'))
    .catch((err) => console.error('❌ Fel vid e-post:', err));

    const entry = { phone: userPhone, timestamp };
    setPaymentLog((prev) => [...prev, entry]);
    console.log("📥 Ny betalning loggad:", entry);

    setShowPaywall(false);
  };

  return (
    <div style={{
      backgroundColor: '#F9F9F6',
      minHeight: '100vh',
      padding: '2rem 1rem',
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Head>
        <title>Annonstext.se – Skriv en bilannons på 30 sekunder</title>
        <meta name="description" content="Skapa en professionell bilannons med Annonstext.se. Skriv in regnummer och miltal – få annonstexten klar på 30 sekunder." />
        <meta name="theme-color" content="#F9F9F6" />

        {/* 👇 Open Graph / Social Preview */}
        <meta property="og:title" content="Skriv en bilannons – utan skrivkramp" />
        <meta property="og:description" content="Fyll i några fält och få en säljande annonstext på 30 sekunder – klar för Blocket eller Marketplace." />
        <meta property="og:image" content="https://annonstxt.vercel.app/og-image.png" />
        <meta property="og:url" content="https://annonstxt.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '640px',
        width: '100%',
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        color: '#000',
        lineHeight: 1.6
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          fontWeight: 700,
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Skriv en bilannons – utan skrivkramp
        </h1>

        <p style={{
          textAlign: 'center',
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          maxWidth: '520px',
          margin: '0 auto 1.75rem',
          color: '#333'
        }}>
          Att skriva en annonstext kan vara trögt. Här fyller du bara i några enkla fält och får en säljande text på 30 sekunder – färdig att använda direkt på Blocket eller Facebook Marketplace.
        </p>

        <hr style={{
          border: 'none',
          height: '4px',
          backgroundColor: '#FFDD00',
          width: '60px',
          margin: '0 auto 2rem'
        }} />

        {!showPaywall && !generatedText && (
          <AnnonstextForm onSubmit={handleFormSubmit} />
        )}

        {showPaywall && (
          <>
            <PaymentGate userPhone={userPhone} />
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button onClick={handleManualApprove} style={{
                backgroundColor: '#28A745',
                color: 'white',
                padding: '0.5rem 1.2rem',
                borderRadius: '6px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.2rem' }}>✅</span>
                Jag har betalat – visa text
              </button>
            </div>
          </>
        )}

        {!showPaywall && generatedText && (
          <div style={{
            backgroundColor: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            marginTop: '2rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.75rem' }}>Din annonstext:</h3>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '1rem' }}>{generatedText}</pre>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
