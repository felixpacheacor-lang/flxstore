export default function Home() {
  return (
    <div style={{ fontFamily: "Arial" }}>
      <header
        style={{
          background: "#000",
          color: "#fff",
          padding: "15px",
          textAlign: "center"
        }}
      >
        <h1>FLX Store</h1>
      </header>

      <section
        style={{
          padding: "40px",
          textAlign: "center",
          background: "#f2f2f2"
        }}
      >
        <h2>As Melhores Ofertas da Internet</h2>
        <p>
          Academia, esportes, eletrônicos, celulares e muito mais.
        </p>
      </section>

      <section style={{ padding: "20px" }}>
        <h2>Categorias</h2>

        <ul>
          <li>🏋️ Academia</li>
          <li>⚽ Esportes</li>
          <li>📱 Celulares</li>
          <li>🎧 Fones</li>
          <li>🔌 Carregadores</li>
          <li>🏠 Eletrodomésticos</li>
        </ul>
      </section>

      <section style={{ padding: "20px" }}>
        <h2>Ganhe Dinheiro com a FLX Store</h2>

        <p>
          Cadastre-se como afiliado e divulgue nossos produtos.
        </p>

        <a href="/afiliados">
          Tornar-se Afiliado
        </a>
      </section>

      <footer
        style={{
          background: "#000",
          color: "#fff",
          padding: "20px",
          textAlign: "center"
        }}
      >
        WhatsApp: (11) 99121-7277
        <br />
        E-mail: felixpacheacor@gmail.com
      </footer>
    </div>
  );
}
