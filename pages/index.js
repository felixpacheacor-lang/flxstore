import '../estilos/global.css';
import Header from '../compartimentos/Header';
import Rodape from '../compartimentos/Rodape';
import CartaoProduto from '../compartimentos/CartaoProduto';

export default function Home() {
  const produtos = [
    {
      id: 1,
      nome: "Smartwatch Premium",
      preco: 199.90,
      imagem: "https://via.placeholder.com/250?text=Smartwatch"
    },
    {
      id: 2,
      nome: "Fone Bluetooth",
      preco: 149.90,
      imagem: "https://via.placeholder.com/250?text=Fone+Bluetooth"
    },
    {
      id: 3,
      nome: "Caixa de Som Bluetooth",
      preco: 299.90,
      imagem: "https://via.placeholder.com/250?text=Caixa+de+Som"
    }
  ];

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
          <h2 style={{ fontSize: '1.6rem', marginBottom: '2rem' }}>Produtos em Destaque</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            {produtos.map(produto => (
              <CartaoProduto key={produto.id} {...produto} />
            ))}
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
}
