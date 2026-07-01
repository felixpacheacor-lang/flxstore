import '../estilos/global.css';
import Header from '../compartimentos/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container" style={{ padding: '2rem 1rem' }}>
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>As Melhores Ofertas da Internet</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Academia, esportes, eletrônicos, celulares e muito mais com preços que cabem no seu bolso.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '2rem' }}>Destaques</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            <div style={cardStyle}>
              <p style={{ fontSize: '4rem', opacity: 0.6 }}>🖼️</p>
              <h3>Produto 1</h3>
              <p style={precoStyle}>R$ 99,90</p>
              <button style={botaoStyle}>Comprar</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #e9ecef',
  borderRadius: '8px',
  padding: '1.5rem',
  textAlign: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
};

const precoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: '1rem 0',
  color: '#0052cc'
};

const botaoStyle = {
  backgroundColor: '#ffc107',
  border: 'none',
  padding: '0.7rem 1.5rem',
  borderRadius: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
  width: '100%'
};
