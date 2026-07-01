export default function Rodape() {
  return (
    <footer style={{
      backgroundColor: '#222222',
      color: '#ffffff',
      padding: '2rem 0',
      marginTop: '3rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} FLX Store - Todos os direitos reservados
        </p>
        <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
          Contato: contato@flxstore.com.br
        </p>
      </div>
    </footer>
  );
                  }
