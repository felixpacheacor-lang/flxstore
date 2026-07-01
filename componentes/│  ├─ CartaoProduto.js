export default function CartaoProduto({ nome, preco, imagem }) {
  return (
    <div style={{
      border: '1px solid #e9ecef',
      borderRadius: '8px',
      padding: '1.5rem',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <img
        src={imagem}
        alt={nome}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'contain',
          marginBottom: '1rem'
        }}
      />
      <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>{nome}</h3>
      <p style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: '1rem 0',
        color: '#0052cc'
      }}>
        R$ {preco.toFixed(2).replace('.', ',')}
      </p>
      <button style={{
        backgroundColor: '#ffc107',
        border: 'none',
        padding: '0.7rem 1.5rem',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '100%',
        fontSize: '1rem'
      }}>
        Comprar
      </button>
    </div>
  );
          }
        
