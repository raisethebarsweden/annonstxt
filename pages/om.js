export default function OmOss() {
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
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Om Annonstext.se</h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
          Annonstext.se är skapad för dig som vill sälja din bil – men slipper sitta och kämpa med annonstexten.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
          Bakom tjänsten står en entreprenör som själv sålt och köpt många bilar genom åren – och sett hur dåliga (eller obefintliga) annonstexter sänker trovärdigheten. Målet är att göra det enkelt att skapa säljande och professionella texter på nolltid.
        </p>
      </div>
    </div>
  );
}
