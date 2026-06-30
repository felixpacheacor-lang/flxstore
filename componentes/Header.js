import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--azul-principal)',
      color: '#fff',
      padding: '1.2rem 0',
      marginBottom: '1rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <h1 style={{ fontSize: '1.7rem' }}>FLX Store</h1>
        <nav>
          <Link href="/" style={linkStyle}>Início</Link>
          <Link href="/produtos" style={linkStyle}>Produtos</Link>
          <Link href="/afiliados" style={linkStyle}>Afiliados</Link>
          <Link href="/sobre" style={linkStyle}>Sobre</Link>
          <Link href="/contato" style={linkStyle}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}

const linkStyle = {
  color: '#fff',
  margin: '0 0.8rem',
  textDecoration: 'none',
  fontWeight: '500'
};
  
