export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>FLX Store</h1>

      <p>
        Sua central de ofertas, eletrônicos, esportes, academia e
        eletrodomésticos.
      </p>

      <h2>Categorias</h2>

      <ul>
        <li>🏋️ Roupas de Academia</li>
        <li>🥤 Suplementos</li>
        <li>⚽ Esportes</li>
        <li>📱 Celulares</li>
        <li>🎧 Fones Bluetooth</li>
        <li>🔌 Carregadores</li>
        <li>💾 Pen Drives</li>
        <li>🏠 Eletrodomésticos</li>
      </ul>

      <hr />

      <p>
        <a href="/produtos">Ver Produtos</a>
      </p>

      <p>
        <a href="/afiliados">Torne-se um Afiliado</a>
      </p>

      <p>
        <a href="/contato">Contato</a>
      </p>

      <p>
        <a href="/sobre">Sobre Nós</a>
      </p>
    </div>
  );
}
